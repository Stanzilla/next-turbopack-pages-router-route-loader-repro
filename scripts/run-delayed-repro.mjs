import { spawn } from "node:child_process";
import process from "node:process";

const delayMs = process.env.DELAY_MS || "9000";
const waitAfterLoadMs = process.env.WAIT_AFTER_LOAD_MS || "10000";

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      shell: false,
      ...options,
      env: {
        ...process.env,
        ...options.env,
      },
    });
    child.on("exit", (code, signal) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`${command} ${args.join(" ")} exited with ${code ?? signal}`));
    });
  });
}

function start(command, args, options = {}) {
  return spawn(command, args, {
    stdio: "inherit",
    shell: false,
    ...options,
    env: {
      ...process.env,
      ...options.env,
    },
  });
}

function stop(child) {
  if (!child.killed) {
    child.kill("SIGTERM");
  }
}

async function waitForServer(url) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 30000) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Keep waiting until the server is ready or the timeout expires.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

await run("pnpm", ["build:asset-prefix"]);
await run("pnpm", ["find:registration-chunks"]);

const nextServer = start("node_modules/.bin/next", ["start", "-p", "3020"], {
  env: {
    NEXT_BUILD_ID: "repro-build",
    NEXT_ASSET_PREFIX: "http://localhost:3021/web-next/PR-40793",
  },
});
const assetServer = start("node", ["scripts/static-next-server.mjs"], {
  env: {
    DELAY_MS: delayMs,
    DELAY_REGISTRATION_CHUNKS: "1",
  },
});

let probeError;
try {
  await waitForServer("http://localhost:3020/en/home");
  await waitForServer("http://localhost:3021/health");
  try {
    await run("node", ["scripts/probe-route-loader.mjs"], {
      env: {
        WAIT_AFTER_LOAD_MS: waitAfterLoadMs,
      },
    });
  } catch (error) {
    probeError = error;
  }
} finally {
  stop(nextServer);
  stop(assetServer);
}

if (probeError) {
  console.error(probeError.message);
  process.exitCode = 1;
}
