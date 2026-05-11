import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const count = 120;
const dir = path.join(root, "src", "styled");
fs.mkdirSync(dir, { recursive: true });

for (let index = 1; index <= count; index += 1) {
  const id = String(index).padStart(3, "0");
  fs.writeFileSync(
    path.join(dir, `Styled${id}.jsx`),
    `import styled, { css } from "styled-components";\n\nconst tone = ${index};\nconst surface = css\`\n  border-color: hsl(\${tone * 3} 48% 42%);\n  background: linear-gradient(90deg, rgba(15, 23, 42, 0.94), rgba(31, 41, 55, 0.88));\n\`;\n\nconst Panel = styled.article\`\n  \${surface}\n  border-style: solid;\n  border-width: 1px;\n  display: grid;\n  gap: 6px;\n  min-height: 64px;\n  padding: 12px;\n\`;\n\nconst Label = styled.strong\`\n  color: hsl(\${tone * 5} 70% 76%);\n  font-size: 12px;\n\`;\n\nexport default function Styled${id}({ routeName, seed }) {\n  return (\n    <Panel data-styled="${id}">\n      <Label>Styled ${id}</Label>\n      <span>{routeName}</span>\n      <span>{seed + ${index}}</span>\n    </Panel>\n  );\n}\n`,
  );
}

const imports = [];
const entries = [];
for (let index = 1; index <= count; index += 1) {
  const id = String(index).padStart(3, "0");
  imports.push(`import Styled${id} from "./Styled${id}.jsx";`);
  entries.push(`  Styled${id}`);
}
fs.writeFileSync(
  path.join(dir, "index.js"),
  `${imports.join("\n")}\n\nexport const StyledWidgets = [\n${entries.join(",\n")}\n];\n`,
);

console.log(`Generated ${count} styled modules.`);
