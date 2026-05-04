/**
 * One-off / npm script: screenshot the comparison page for proposals.
 *
 * Usage: ensure dev server is running, then:
 *   npm run capture:proposal
 *
 * Default URL: http://localhost:8080/comparison#preview
 * Override: PROPOSAL_URL=http://localhost:5173/comparison#preview
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outFile =
  process.env.PROPOSAL_OUT?.trim() ||
  path.join(root, "src", "assets", "proposal-comparison-preview.png");

const url =
  process.env.PROPOSAL_URL?.trim() ||
  "http://localhost:8080/comparison#preview";

const VIEWPORT = { width: 1440, height: 900 };

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await (await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2 })).newPage();

  try {
    await page.goto(url, { waitUntil: "load", timeout: 120_000 });
    await page
      .waitForLoadState("networkidle", { timeout: 45_000 })
      .catch(() => {});

    await page.evaluate(async () => {
      await document.fonts.ready.catch(() => {});
      await Promise.all(
        [...document.images].map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          });
        }),
      );
    });

    await page.locator("#preview").waitFor({ state: "visible", timeout: 30_000 }).catch(() => {});
    await page.evaluate(() => {
      document.getElementById("preview")?.scrollIntoView({ block: "start", behavior: "instant" });
    });
    await delay(1500);

    await page.screenshot({
      path: outFile,
      fullPage: true,
      type: "png",
    });

    console.log(`Saved: ${path.relative(root, outFile)}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
