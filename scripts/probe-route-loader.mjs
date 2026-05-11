import fs from "node:fs";
import { chromium } from "@playwright/test";

const startUrl = process.env.REPRO_URL || "http://localhost:3020/en/home";
const outputPath = process.env.OUTPUT_PATH || "/tmp/next-route-loader-repro.json";
const initialWaitMs = Number(process.env.INITIAL_WAIT_MS || 6000);
const waitAfterLoadMs = Number(process.env.WAIT_AFTER_LOAD_MS || 1500);
const targets = [
  { label: "Track", pageRoute: "/track" },
  { label: "Play", pageRoute: "/play" },
  { label: "Feed", pageRoute: "/social-feed" },
  { label: "Shop", pageRoute: "/shop" },
  { label: "Rank", pageRoute: "/[gameId]/rank" },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function probeTarget(browser, target) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  const requests = [];
  const messages = [];

  page.on("console", (message) => {
    messages.push({ type: message.type(), text: message.text().slice(0, 400) });
  });

  page.on("pageerror", (error) => {
    messages.push({
      type: "pageerror",
      text: error.message,
      stack: error.stack?.split("\n").slice(0, 6),
    });
  });

  page.on("response", (response) => {
    const url = response.url();
    if (url.includes("/_next/static") || url.includes("/_next/data")) {
      requests.push({
        event: "response",
        url,
        status: response.status(),
        ok: response.ok(),
        type: response.request().resourceType(),
      });
    }
  });

  page.on("requestfailed", (request) => {
    const url = request.url();
    if (url.includes("/_next/static") || url.includes("/_next/data")) {
      requests.push({
        event: "failed",
        url,
        failure: request.failure()?.errorText,
        type: request.resourceType(),
      });
    }
  });

  await page.goto(startUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await delay(initialWaitMs);

  const before = await page.evaluate(() => {
    const nextData = JSON.parse(document.querySelector("#__NEXT_DATA__")?.textContent || "{}");
    return {
      href: location.href,
      router: {
        route: window.next?.router?.route,
        pathname: window.next?.router?.pathname,
        asPath: window.next?.router?.asPath,
        locale: window.next?.router?.locale,
        isReady: window.next?.router?.isReady,
      },
      nextData: {
        page: nextData.page,
        buildId: nextData.buildId,
        assetPrefix: nextData.assetPrefix,
        deploymentId: nextData.deploymentId,
        locale: nextData.locale,
      },
      hasTurbopackLoadPageChunks: typeof window.__turbopack_load_page_chunks__ === "function",
      hasTurbopackGlobal: Boolean(window.TURBOPACK),
    };
  });

  requests.length = 0;
  messages.length = 0;

  const runtime = await page.evaluate(async (target) => {
    const calls = [];
    const router = window.next?.router;
    const pageLoader = router?.pageLoader;
    const routeLoader = pageLoader?.routeLoader;

    if (!pageLoader || !routeLoader) {
      return { ok: false, message: "missing pageLoader or routeLoader", calls };
    }

    const originalNextPPush = window.__NEXT_P?.push;
    if (typeof originalNextPPush === "function") {
      window.__NEXT_P.push = function pushWithProbe(entry) {
        calls.push({ source: "__NEXT_P.push", route: entry?.[0], callbackType: typeof entry?.[1] });
        return originalNextPPush.apply(this, arguments);
      };
    }

    const originalOnEntrypoint = routeLoader.onEntrypoint;
    routeLoader.onEntrypoint = function onEntrypointWithProbe(route, execute) {
      calls.push({ source: "routeLoader.onEntrypoint", route, callbackType: typeof execute });
      return originalOnEntrypoint.apply(this, arguments);
    };

    const originalLoadPageChunks = window.__turbopack_load_page_chunks__;
    if (typeof originalLoadPageChunks === "function") {
      window.__turbopack_load_page_chunks__ = function loadPageChunksWithProbe(route, chunks) {
        calls.push({
          source: "__turbopack_load_page_chunks__",
          route,
          chunkCount: chunks?.length,
          firstChunk: chunks?.[0],
          lastChunk: chunks?.[chunks.length - 1],
        });
        return originalLoadPageChunks.apply(this, arguments);
      };
    }

    try {
      const loaded = await pageLoader.loadPage(target.pageRoute);
      return {
        ok: true,
        keys: Object.keys(loaded || {}),
        moduleKeys: Object.keys(loaded?.mod || {}).slice(0, 20),
        calls,
      };
    } catch (error) {
      return {
        ok: false,
        message: error.message,
        code: error.code,
        cancelled: error.cancelled,
        stack: error.stack?.split("\n").slice(0, 8),
        calls,
      };
    }
  }, target);

  await delay(waitAfterLoadMs);

  const result = {
    ...target,
    before,
    runtime: {
      ...runtime,
      chunkLoaderCallsForRoute: runtime.calls.filter(
        (call) =>
          call.source === "__turbopack_load_page_chunks__" && call.route === target.pageRoute,
      ).length,
      nextPCallsForRoute: runtime.calls.filter(
        (call) => call.source === "__NEXT_P.push" && call.route === target.pageRoute,
      ).length,
      entrypointCallsForRoute: runtime.calls.filter(
        (call) => call.source === "routeLoader.onEntrypoint" && call.route === target.pageRoute,
      ).length,
    },
    requestSummary: {
      staticChunkResponses: requests.filter(
        (request) => request.event === "response" && request.url.includes("/_next/static/chunks/"),
      ).length,
      nonOkResponses: requests.filter((request) => request.event === "response" && !request.ok),
      failures: requests.filter((request) => request.event === "failed"),
    },
    relevantConsole: messages.filter(
      (message) =>
        message.type === "pageerror" ||
        message.text.includes("Route did not complete") ||
        message.text.includes("failed to load chunks"),
    ),
  };

  await context.close();
  return result;
}

const browser = await chromium.launch({ headless: true });
const results = [];
try {
  for (const target of targets) {
    results.push(await probeTarget(browser, target));
  }
} finally {
  await browser.close();
}

const report = {
  startUrl,
  results,
  summary: {
    total: results.length,
    passed: results.filter((result) => result.runtime.ok).length,
    failed: results.filter((result) => !result.runtime.ok).length,
    failedRoutes: results
      .filter((result) => !result.runtime.ok)
      .map((result) => ({
        pageRoute: result.pageRoute,
        message: result.runtime.message,
        chunkLoaderCallsForRoute: result.runtime.chunkLoaderCallsForRoute,
        nextPCallsForRoute: result.runtime.nextPCallsForRoute,
        entrypointCallsForRoute: result.runtime.entrypointCallsForRoute,
        staticChunkResponses: result.requestSummary.staticChunkResponses,
        nonOkResponses: result.requestSummary.nonOkResponses.length,
        failures: result.requestSummary.failures.length,
      })),
  },
};

fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report.summary, null, 2));
console.log(`Wrote ${outputPath}`);

if (report.summary.failed > 0) {
  process.exitCode = 1;
}
