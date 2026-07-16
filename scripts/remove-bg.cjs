const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputs = [
  { in: path.join(__dirname, '..', 'src', 'imports', 'image.png'), out: path.join(__dirname, '..', 'src', 'imports', 'image-transparent.png') },
  { in: path.join(__dirname, '..', 'src', 'imports', '93a3f42b-9b72-4d02-9cd7-0e13d1c03605.jpg'), out: path.join(__dirname, '..', 'src', 'imports', '93a3f42b-9b72-4d02-9cd7-0e13d1c03605-transparent.png') },
];

const THRESHOLD = 240; // 0-255, higher = more strict towards white

async function removeBackground(inputPath, outputPath) {
  if (!fs.existsSync(inputPath)) {
    console.log('Not found:', inputPath);
    return;
  }

  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    const a = channels === 4 ? data[i * channels + 3] : 255;

    const isWhite = r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD;
    const alpha = isWhite ? 0 : a;

    out[i * 4] = r;
    out[i * 4 + 1] = g;
    out[i * 4 + 2] = b;
    out[i * 4 + 3] = alpha;
  }

  await sharp(out, { raw: { width, height, channels: 4 } }).png().toFile(outputPath);
  console.log('Wrote:', outputPath);
}

(async () => {
  for (const item of inputs) {
    try {
      await removeBackground(item.in, item.out);
    } catch (err) {
      console.error('Error processing', item.in, err);
    }
  }
})();
