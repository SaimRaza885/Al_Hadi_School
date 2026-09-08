import { readdir, stat, writeFile } from "node:fs/promises";
import { join, extname, parse } from "node:path";
import { Jimp } from "jimp";

const ASSETS_DIR = "src/assets";
const JPEG_QUALITY = 62;
const PNG_AS_JPEG_QUALITY = 80;

const RULES = [
  { name: "hero", test: /hero_\d+\.(jpe?g|png)$/, max: 1920 },
  { name: "about", test: /about\.(jpe?g|png)$/, max: 1280 },
  { name: "gallery", test: /gallery\//, max: 1200 },
  { name: "faculty", test: /faculty\//, max: 800 },
  { name: "alumni", test: /alumuni\//, max: 640 },
  { name: "logo", test: /logo\.(jpe?g|png)$/, max: 900 },
];

function findRule(absPath) {
  const rel = absPath.replace(/\\/g, "/");
  for (const rule of RULES) {
    if (rule.test.test(rel)) return rule;
  }
  return { name: "default", max: 1600 };
}

async function collectImages(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await collectImages(full)));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
        out.push(full);
      }
    }
  }
  return out;
}

async function processImage(filePath) {
  const rule = findRule(filePath);
  const before = (await stat(filePath)).size;
  const ext = extname(filePath).toLowerCase();
  const isPng = ext === ".png";

  const img = await Jimp.read(filePath);
  const { width, height } = img.bitmap;

  let outW = width;
  let outH = height;
  const longest = Math.max(width, height);
  if (longest > rule.max) {
    const scale = rule.max / longest;
    outW = Math.round(width * scale);
    outH = Math.round(height * scale);
  }

  if (width !== outW || height !== outH) {
    img.resize({ w: outW, h: outH });
  }

  const outPath = join(parse(filePath).dir, parse(filePath).name + ".jpg");

  // PNG photos (no meaningful transparency) are converted to JPEG for far
  // smaller size; everything else is encoded as JPEG at the target quality.
  const buf = await img.getBuffer("image/jpeg", {
    quality: isPng ? PNG_AS_JPEG_QUALITY : JPEG_QUALITY,
  });

  // Safety net: only overwrite when the result is actually smaller.
  if (buf.length >= before) {
    console.log(
      `${filePath.replace(/\\/g, "/")}: skipped (result not smaller)`
    );
    return;
  }

  await writeFile(outPath, buf);
  const after = buf.length;
  const saved = Math.round((1 - after / before) * 100);
  const scaled = width !== outW || height !== outH;
  console.log(
    `${filePath.replace(/\\/g, "/")} -> ${parse(filePath).name}.jpg\n  ${width}x${height} -> ${outW}x${outH}${scaled ? " (resized)" : ""} | ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB | ${saved}% saved`
  );
}

async function main() {
  const files = await collectImages(ASSETS_DIR);
  console.log(`Found ${files.length} images\n`);
  let processed = 0;
  for (const f of files) {
    try {
      await processImage(f);
      processed++;
    } catch (e) {
      console.log(`SKIP ${f.replace(/\\/g, "/")}: ${e.message}`);
    }
  }
  console.log(`\nDone. Processed ${processed} images.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
