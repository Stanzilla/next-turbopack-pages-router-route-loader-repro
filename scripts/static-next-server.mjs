import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const port = Number(process.env.STATIC_PORT || 3021);
const registrationChunksPath = path.join(root, ".next", "registration-chunks.json");
const delayedChunks = new Set(
  [
    process.env.DELAY_CHUNKS || "",
    process.env.DELAY_REGISTRATION_CHUNKS === "1" && fs.existsSync(registrationChunksPath)
      ? Object.values(JSON.parse(fs.readFileSync(registrationChunksPath, "utf8"))).join(",")
      : "",
  ]
    .filter(Boolean)
    .join(",")
    .split(",")
    .map((chunk) => chunk.trim())
    .filter(Boolean),
);
const delayMs = Number(process.env.DELAY_MS || 0);

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
]);

function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/web-next\/PR-40793/, "");
  if (!decoded.startsWith("/_next/static/")) return null;
  return path.join(root, ".next", decoded.replace("/_next/", ""));
}

const server = http.createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8",
    });
    response.end("ok");
    return;
  }

  const filePath = resolveFile(request.url || "/");
  if (
    !filePath ||
    !filePath.startsWith(path.join(root, ".next", "static")) ||
    !fs.existsSync(filePath)
  ) {
    response.writeHead(404, {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store",
    });
    response.end("not found");
    return;
  }

  const relativePath = path.relative(path.join(root, ".next"), filePath).replaceAll(path.sep, "/");
  const sendFile = () => {
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": contentTypes.get(path.extname(filePath)) || "application/octet-stream",
    });
    fs.createReadStream(filePath).pipe(response);
  };

  if (delayMs > 0 && delayedChunks.has(relativePath)) {
    setTimeout(sendFile, delayMs);
    return;
  }

  sendFile();
});

server.listen(port, () => {
  console.log(`Static Next asset server listening on http://localhost:${port}`);
  if (delayMs > 0 && delayedChunks.size > 0) {
    console.log(`Delaying ${delayedChunks.size} chunk(s) by ${delayMs}ms`);
  }
});
