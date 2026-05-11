import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const packageCount = 80;
const packagesRoot = path.join(root, "packages");
fs.mkdirSync(packagesRoot, { recursive: true });

for (let index = 1; index <= packageCount; index += 1) {
  const id = String(index).padStart(3, "0");
  const packageName = `@repro/pkg-${id}`;
  const packageDir = path.join(packagesRoot, `pkg-${id}`);
  const srcDir = path.join(packageDir, "src");
  fs.mkdirSync(srcDir, { recursive: true });

  fs.writeFileSync(
    path.join(packageDir, "package.json"),
    `${JSON.stringify(
      {
        name: packageName,
        version: "0.0.0",
        private: true,
        type: "module",
        exports: {
          ".": "./src/index.js",
          "./widget": "./src/widget.jsx",
          "./data": "./src/data.js",
        },
      },
      null,
      2,
    )}\n`,
  );

  fs.writeFileSync(
    path.join(srcDir, "data.js"),
    `export const packageId = "${id}";\n\nexport function getPackageValue(seed) {\n  return seed + ${index} + packageId.charCodeAt(0);\n}\n`,
  );

  fs.writeFileSync(
    path.join(srcDir, "widget.jsx"),
    `import { getPackageValue, packageId } from "./data.js";\n\nexport default function PackageWidget${id}({ routeName, seed }) {\n  return (\n    <article className="packageWidget" data-package={packageId}>\n      <strong>@repro/pkg-${id}</strong>\n      <span>{routeName}</span>\n      <span>{getPackageValue(seed)}</span>\n    </article>\n  );\n}\n`,
  );

  fs.writeFileSync(
    path.join(srcDir, "index.js"),
    `export { packageId, getPackageValue } from "./data.js";\nexport { default as PackageWidget${id} } from "./widget.jsx";\n`,
  );
}

const imports = [];
const entries = [];
for (let index = 1; index <= packageCount; index += 1) {
  const id = String(index).padStart(3, "0");
  imports.push(`import { PackageWidget${id} } from "@repro/pkg-${id}";`);
  entries.push(`  PackageWidget${id}`);
}
fs.writeFileSync(
  path.join(root, "src", "packageWidgets.js"),
  `${imports.join("\n")}\n\nexport const PackageWidgets = [\n${entries.join(",\n")}\n];\n`,
);

const rootPackageJsonPath = path.join(root, "package.json");
const rootPackageJson = JSON.parse(fs.readFileSync(rootPackageJsonPath, "utf8"));
rootPackageJson.dependencies = rootPackageJson.dependencies || {};
for (let index = 1; index <= packageCount; index += 1) {
  const id = String(index).padStart(3, "0");
  rootPackageJson.dependencies[`@repro/pkg-${id}`] = "workspace:*";
}
fs.writeFileSync(rootPackageJsonPath, `${JSON.stringify(rootPackageJson, null, 2)}\n`);

fs.writeFileSync(path.join(root, "pnpm-workspace.yaml"), "packages:\n  - packages/*\n");

console.log(`Generated ${packageCount} workspace packages.`);
