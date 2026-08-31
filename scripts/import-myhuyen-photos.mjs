/**
 * Selects a curated subset from .tmp-photos-extract and writes optimized JPGs
 * to src/assets/portfolio/myhuyen-eric/
 *
 * Run: node scripts/import-myhuyen-photos.mjs
 */
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcRoot = path.join(root, ".tmp-photos-extract");
const outRoot = path.join(root, "src", "assets", "portfolio", "myhuyen-eric");

const SECTIONS = [
  { folder: "COUPLE SHOOT", slug: "couple-shoot", count: 5 },
  { folder: "CEREMONY", slug: "ceremony", count: 5 },
  { folder: "COCKTAIL HOUR", slug: "cocktail-hour", count: 5 },
  { folder: "DINNER", slug: "dinner", count: 5 },
  { folder: "CHINESE GIFT EXCHANGE", slug: "chinese-gift-exchange", count: 4 },
];

const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;

function studioNumber(filename) {
  const m = filename.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

function pickEvenly(sortedFiles, count) {
  if (sortedFiles.length <= count) return sortedFiles;
  const picked = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.round((i * (sortedFiles.length - 1)) / (count - 1));
    picked.push(sortedFiles[idx]);
  }
  return [...new Set(picked)];
}

async function optimize(inPath, outPath) {
  await sharp(inPath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(outPath);
}

async function listJpgs(dir) {
  const names = await readdir(dir);
  return names
    .filter((n) => /\.jpe?g$/i.test(n))
    .sort((a, b) => studioNumber(a) - studioNumber(b));
}

async function main() {
  const manifest = { hero: null, sections: {} };

  for (const { folder, slug, count } of SECTIONS) {
    const dir = path.join(srcRoot, folder);
    const files = await listJpgs(dir);
    const picked = pickEvenly(files, count);
    const outDir = path.join(outRoot, slug);
    await mkdir(outDir, { recursive: true });

    manifest.sections[slug] = [];
    for (let i = 0; i < picked.length; i++) {
      const num = String(i + 1).padStart(2, "0");
      const outName = `${num}.jpg`;
      const outPath = path.join(outDir, outName);
      await optimize(path.join(dir, picked[i]), outPath);
      manifest.sections[slug].push({ file: `${slug}/${outName}`, source: picked[i] });
      console.log(`${slug}/${outName} <- ${picked[i]}`);
    }
  }

  const coupleDir = path.join(srcRoot, "COUPLE SHOOT");
  const coupleFiles = await listJpgs(coupleDir);
  const heroSource = coupleFiles[Math.round(0.12 * (coupleFiles.length - 1))];
  const heroPath = path.join(outRoot, "hero.jpg");
  await optimize(path.join(coupleDir, heroSource), heroPath);
  manifest.hero = { file: "hero.jpg", source: heroSource };
  console.log(`hero.jpg <- ${heroSource}`);

  const manifestPath = path.join(outRoot, "manifest.json");
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
