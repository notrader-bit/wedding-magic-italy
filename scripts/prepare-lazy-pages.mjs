import { readFile, writeFile } from "node:fs/promises";

const pages = [
  { file: "about-page.tsx", fn: "AboutPage" },
  { file: "services-page.tsx", fn: "ServicesPage" },
  { file: "portfolio-page.tsx", fn: "PortfolioPage" },
  { file: "contact-page.tsx", fn: "ContactPage" },
  { file: "blog-index-page.tsx", fn: "BlogIndexPage" },
  { file: "portfolio-story-page.tsx", fn: "StoryPage" },
  { file: "blog-post-page.tsx", fn: "BlogPostPage" },
];

for (const { file, fn } of pages) {
  let s = await readFile(`src/pages/${file}`, "utf8");
  const fnIdx = s.indexOf(`function ${fn}`);
  if (fnIdx === -1) throw new Error(`function ${fn} not found in ${file}`);
  s = s.slice(fnIdx);
  s = s.replace(`function ${fn}`, `export default function ${fn}`);
  await writeFile(`src/pages/${file}`, s);
  console.log("ok", file);
}
