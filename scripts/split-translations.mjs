import { mkdir, readFile, writeFile } from "node:fs/promises";

const path = "src/i18n/translations.ts";
const s = await readFile(path, "utf8");
const typeEnd = s.indexOf("const en: Dict");
const types = s.slice(0, typeEnd).replace(/^type Dict/m, "export type Dict");
await mkdir("src/i18n/locales", { recursive: true });
await writeFile("src/i18n/dict-types.ts", types);

const langs = ["en", "uk", "ru", "it", "es", "de"];
for (const lang of langs) {
  const start = s.indexOf(`const ${lang}: Dict = {`);
  let end = s.length;
  for (const nl of langs) {
    if (nl === lang) continue;
    const i = s.indexOf(`const ${nl}: Dict = {`, start + 1);
    if (i !== -1 && i < end) end = i;
  }
  let block = s.slice(start, end);
  block = block.replace(`const ${lang}: Dict =`, "export const dictionary: Dict =");
  await writeFile(`src/i18n/locales/${lang}.ts`, `import type { Dict } from "../dict-types";\n\n${block}`);
}

console.log("split translations ok");
