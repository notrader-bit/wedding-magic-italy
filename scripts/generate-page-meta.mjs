import { readFile, writeFile } from "node:fs/promises";

const langs = ["en", "uk", "ru", "it", "es", "de"];
let out = 'import type { Dict, Lang } from "./dict-types";\n\n';

for (const l of langs) {
  const s = await readFile(`src/i18n/locales/${l}.ts`, "utf8");
  const start = s.indexOf("meta: {");
  const end = s.indexOf("\n  home:", start);
  if (start === -1 || end === -1) throw new Error(`meta block not found in ${l}`);
  const block = s.slice(start, end + 1);
  out += `const ${l}Meta = ${block.replace("meta: ", "")} satisfies Dict["meta"];\n\n`;
}

out += `export const PAGE_META: Record<Lang, Dict["meta"]> = {\n`;
out += langs.map((l) => `  ${l}: ${l}Meta,`).join("\n");
out += "\n};\n";

await writeFile("src/i18n/page-meta.ts", out);
console.log("page-meta.ts ok");
