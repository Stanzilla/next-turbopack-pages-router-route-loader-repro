# Next Turbopack Pages Router Route Loader Repro

This repository reproduces a Next.js 16 Pages Router production Turbopack route-loader issue.

Expected behavior: `window.next.router.pageLoader.loadPage('/track')` resolves and the page entrypoint registers through `window.__NEXT_P.push` / `routeLoader.onEntrypoint`.

Broken behavior: route chunks are fetched successfully, but the page entrypoint does not register before the route loader times out, causing `Route did not complete loading: /track` and full document navigations.

## Reproduce

```sh
pnpm install
pnpm repro
```

`pnpm repro` runs a production Turbopack build, finds each route's `window.__NEXT_P.push` registration chunk, serves static assets from a separate `assetPrefix` origin, delays only those registration chunks, then runs the Playwright route-loader probe.

The command exits non-zero when the bug reproduces.

The probe writes `/tmp/next-route-loader-repro.json`.

Expected failing summary:

```json
{
  "pageRoute": "/track",
  "message": "Route did not complete loading: /track",
  "chunkLoaderCallsForRoute": 1,
  "nextPCallsForRoute": 0,
  "entrypointCallsForRoute": 0,
  "staticChunkResponses": 4,
  "nonOkResponses": 0,
  "failures": 0
}
```

## Control

For a healthy control without delayed registration chunks:

```sh
pnpm build:asset-prefix
pnpm find:registration-chunks
pnpm start:asset-prefix
pnpm start:assets
pnpm probe
```

The control should report all routes passing with `chunkLoaderCallsForRoute: 1`, `nextPCallsForRoute: 1`, and `entrypointCallsForRoute: 1`.

## Why This Matches The Production Failure

The production failure had the same route-loader signature: the route-list script called `__turbopack_load_page_chunks__`, all static chunk responses were `200`, but the target page never registered through `window.__NEXT_P.push` / `routeLoader.onEntrypoint` before `loadPage()` rejected.
