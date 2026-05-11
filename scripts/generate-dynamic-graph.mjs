import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const count = 80;
const dir = path.join(root, "src", "dynamic");
fs.mkdirSync(dir, { recursive: true });

for (let index = 1; index <= count; index += 1) {
  const id = String(index).padStart(3, "0");
  fs.writeFileSync(
    path.join(dir, `Dynamic${id}.jsx`),
    `export default function Dynamic${id}({ routeName, seed }) {\n  const score = seed * ${index} + ${index};\n  return (\n    <article className="dynamicWidget" data-dynamic="${id}">\n      <strong>Dynamic ${id}</strong>\n      <span>{routeName}</span>\n      <span>{score}</span>\n    </article>\n  );\n}\n`,
  );
}

const imports = ['import dynamic from "next/dynamic";'];
const entries = [];
for (let index = 1; index <= count; index += 1) {
  const id = String(index).padStart(3, "0");
  imports.push(`const Dynamic${id} = dynamic(() => import("./Dynamic${id}.jsx"), { ssr: true });`);
  entries.push(`  Dynamic${id}`);
}
fs.writeFileSync(
  path.join(dir, "index.js"),
  `${imports.join("\n")}\n\nexport const DynamicWidgets = [\n${entries.join(",\n")}\n];\n`,
);

console.log(`Generated ${count} dynamic modules.`);
