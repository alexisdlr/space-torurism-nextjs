import sharp from "sharp";
import { copyFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const pages = ["home", "destination", "crew", "technology"];

await mkdir(path.join(root, "scripts"), { recursive: true });

for (const page of pages) {
  const sourceDir = path.join(root, "public/assets", page);
  const targetDir = path.join(root, "src/app/(root)", page);
  await mkdir(targetDir, { recursive: true });

  const variants = [
    { source: `background-${page}-mobile`, target: "background-mobile" },
    { source: `background-${page}-tablet`, target: "background-tablet" },
    { source: `background-${page}-desktop`, target: "background-desktop" },
  ];

  for (const { source, target } of variants) {
    const webpSource = path.join(sourceDir, `${source}.webp`);
    const jpgSource = path.join(sourceDir, `${source}.jpg`);
    const output = path.join(targetDir, `${target}.webp`);

    try {
      await copyFile(webpSource, output);
      console.log(`Copied ${webpSource} -> ${output}`);
    } catch {
      const info = await sharp(jpgSource)
        .webp({ quality: 82, effort: 6, smartSubsample: true })
        .toFile(output);
      console.log(
        `Converted ${jpgSource} -> ${output} (${info.width}x${info.height}, ${Math.round(info.size / 1024)}KB)`,
      );
    }
  }
}
