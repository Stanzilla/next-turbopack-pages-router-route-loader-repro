import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const routes = (process.env.ROUTES || "/track,/play,/social-feed,/shop")
  .split(",")
  .map((route) => route.trim())
  .filter(Boolean);

function getBuildId() {
  return fs.readFileSync(path.join(root, ".next", "BUILD_ID"), "utf8").trim();
}

function getRouteList(manifestText, route) {
  const escapedRoute = route.replaceAll("/", "\\/");
  return manifestText.match(
    new RegExp(`"${escapedRoute}"\\s*:\\s*\\[\\s*"(static/chunks/[^"]+)"`),
  )?.[1];
}

const buildId = getBuildId();
const manifestPath = path.join(root, ".next", "static", buildId, "_buildManifest.js");
const manifestText = fs.readFileSync(manifestPath, "utf8");
const result = {};

for (const route of routes) {
  const routeList = getRouteList(manifestText, route);
  if (!routeList) continue;

  const routeListText = fs.readFileSync(path.join(root, ".next", routeList), "utf8");
  const chunks = [...routeListText.matchAll(/"(static\/chunks\/[^"]+)"/g)].map((match) => match[1]);
  const registrationChunk = chunks.find((chunk) => {
    const chunkText = fs.readFileSync(path.join(root, ".next", chunk), "utf8");
    return chunkText.includes("__NEXT_P") && chunkText.includes(`"${route}"`);
  });

  if (registrationChunk) {
    result[route] = registrationChunk;
  }
}

const outputPath = process.env.OUTPUT_PATH || path.join(root, ".next", "registration-chunks.json");
fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify(result, null, 2));
console.log(`Wrote ${outputPath}`);
