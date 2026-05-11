const isProduction = process.env.NODE_ENV === "production";
const assetPrefix =
  isProduction && process.env.NEXT_ASSET_PREFIX ? process.env.NEXT_ASSET_PREFIX : undefined;
const buildId = process.env.NEXT_BUILD_ID || "repro-build";
const reproPackages = Array.from(
  { length: 80 },
  (_, index) => `@repro/pkg-${String(index + 1).padStart(3, "0")}`,
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix,
  deploymentId: buildId,
  generateBuildId: async () => buildId,
  transpilePackages: reproPackages,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      topLevelImportPaths: ["styled-components"],
    },
  },
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
    localeDetection: false,
  },
  turbopack: {
    rules: {
      "*.svg": {
        type: "asset",
      },
      "*.png": {
        type: "asset",
      },
    },
    resolveAlias: {
      "@repro": "./src",
    },
  },
  experimental: {
    proxyPrefetch: "strict",
    turbopackFileSystemCacheForBuild: true,
  },
};

export default nextConfig;
