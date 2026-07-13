import fs from "fs";
import path from "path";
import sharp from "sharp";

const panelDir = "public/images/panel";
const outputWidth = 960;
const outputHeight = 1200;

/** Crop tuning relative to Carlos framing (head in upper third, chest-up). */
const cropConfigs = {
  "jose.jpeg": { topRatio: 0.17, widthRatio: 0.7, centerX: 0.5 },
  "mariana.jpeg": { topRatio: 0.24, widthRatio: 0.56, centerX: 0.5 },
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

async function normalizePhoto(filename, config) {
  const inputPath = path.join(panelDir, filename);
  const outputPath = path.join(
    panelDir,
    `${path.parse(filename).name}-normalized.jpg`,
  );

  const image = sharp(inputPath);
  const { width, height } = await image.metadata();

  const cropWidth = clamp(Math.round(width * config.widthRatio), 1, width);
  const cropHeight = clamp(Math.round((cropWidth * 5) / 4), 1, height);
  const maxTop = Math.max(0, height - cropHeight);
  const top = clamp(Math.round(height * config.topRatio), 0, maxTop);
  const maxLeft = Math.max(0, width - cropWidth);
  const left = clamp(
    Math.round(width * config.centerX - cropWidth / 2),
    0,
    maxLeft,
  );

  const extractHeight = Math.min(cropHeight, height - top);
  const extractWidth = Math.min(cropWidth, width - left);

  await image
    .extract({
      left,
      top,
      width: extractWidth,
      height: extractHeight,
    })
    .resize(outputWidth, outputHeight, {
      fit: "cover",
      position: "top",
    })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(outputPath);

  return outputPath;
}

const results = [];

for (const [filename, config] of Object.entries(cropConfigs)) {
  const outputPath = await normalizePhoto(filename, config);
  const meta = await sharp(outputPath).metadata();
  results.push({
    file: filename,
    output: outputPath,
    width: meta.width,
    height: meta.height,
  });
}

console.log(JSON.stringify(results, null, 2));
