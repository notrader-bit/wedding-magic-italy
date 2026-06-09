/**
 * Generates AVIF + WebP responsive variants for marketing JPGs.
 * Run: node scripts/generate-responsive-images.mjs
 */
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsDir = path.join(root, "src", "assets");

const JOBS = [
  { base: "portfolio-como", widths: [400, 640, 800, 1080] },
  { base: "portfolio-amalfi", widths: [400, 640, 800, 1080] },
  { base: "portfolio-puglia", widths: [400, 640, 800, 1080] },
  { base: "founder", widths: [400, 640, 800, 1024] },
];

async function generateVariant(inputPath, outDir, base, width, format) {
  const outPath = path.join(outDir, `${base}-${width}.${format}`);
  let pipeline = sharp(inputPath).rotate().resize({ width, withoutEnlargement: true });

  if (format === "avif") {
    pipeline = pipeline.avif({ quality: 52, effort: 4 });
  } else {
    pipeline = pipeline.webp({ quality: 78, effort: 4 });
  }

  await pipeline.toFile(outPath);
  return outPath;
}

async function main() {
  const outDir = path.join(assetsDir, "responsive");
  await mkdir(outDir, { recursive: true });

  for (const job of JOBS) {
    const inputPath = path.join(assetsDir, `${job.base}.jpg`);
    await readFile(inputPath);
    for (const width of job.widths) {
      await generateVariant(inputPath, outDir, job.base, width, "avif");
      await generateVariant(inputPath, outDir, job.base, width, "webp");
      console.log(`ok ${job.base} ${width}w`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
