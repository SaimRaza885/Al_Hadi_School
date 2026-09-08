import { writeFile } from "node:fs/promises";
import { join, parse } from "node:path";
import { Jimp } from "jimp";

const ASSETS_DIR = "src/assets";
const MOBILE_WIDTH = 480;
const JPEG_QUALITY = 62;
const HEROES = ["hero_1.jpg"];

for (const name of HEROES) {
  const filePath = join(ASSETS_DIR, name);
  const img = await Jimp.read(filePath);
  const { width, height } = img.bitmap;

  const outW = MOBILE_WIDTH;
  const outH = Math.round((height / width) * outW);
  img.resize({ w: outW, h: outH });

  const outPath = join(parse(filePath).dir, parse(filePath).name + "_m.jpg");
  const buf = await img.getBuffer("image/jpeg", { quality: JPEG_QUALITY });
  await writeFile(outPath, buf);

  console.log(
    `${name} -> ${parse(outPath).base} | ${width}x${height} -> ${outW}x${outH} | ${(buf.length / 1024).toFixed(0)}KB`
  );
}