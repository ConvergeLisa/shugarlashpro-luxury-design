/**
 * Captures full-page screenshots for the /comparison page.
 *
 * Prerequisites:
 *   1. `npx playwright install chromium` (once per machine)
 *   2. Local dev server running: `npm run dev` (default URL http://localhost:5173/)
 *
 * If Vite picks another port, override once:
 *   set CAPTURE_AFTER_URL=http://localhost:8081/   (Windows CMD)
 *   $env:CAPTURE_AFTER_URL="http://localhost:8081/" (PowerShell)
 *
 * Usage: npm run capture:screenshots
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const assetsDir = path.join(repoRoot, "src", "assets");

const VIEWPORT = { width: 1440, height: 1200 };
const POST_LOAD_MS = 2000;
const GOTO_TIMEOUT_MS = 120_000;
/** Many live sites never reach true network idle (analytics, chat). Try briefly after load. */
const NETWORK_IDLE_AFTER_LOAD_MS = 45_000;

const BEFORE_URL = "https://shugarlashpro.com/";
const AFTER_URL =
  (process.env.CAPTURE_AFTER_URL && process.env.CAPTURE_AFTER_URL.trim()) ||
  "http://localhost:5173/";

const OUT_BEFORE = path.join(assetsDir, "before-shugarlashpro.png");
const OUT_AFTER = path.join(assetsDir, "after-shugarlashpro.png");

async function waitForMediaAndFonts(page) {
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

    const videos = [...document.querySelectorAll("video")];
    await Promise.all(
      videos.map((v) => {
        if (v.readyState >= 2) return Promise.resolve();
        return new Promise((resolve) => {
          v.addEventListener("loadeddata", resolve, { once: true });
          v.addEventListener("error", resolve, { once: true });
          setTimeout(resolve, 8000);
        });
      }),
    );
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function captureFullPage(page, label, url, outFile) {
  console.log(`[capture] ${label}: ${url}`);
  await page.goto(url, {
    waitUntil: "load",
    timeout: GOTO_TIMEOUT_MS,
  });
  await page
    .waitForLoadState("networkidle", { timeout: NETWORK_IDLE_AFTER_LOAD_MS })
    .catch(() => {
      console.warn(
        `[capture] ${label}: network idle not reached within ${NETWORK_IDLE_AFTER_LOAD_MS}ms (analytics/HMR often prevent this); continuing after fonts/media.`,
      );
    });
  await waitForMediaAndFonts(page);
  await delay(POST_LOAD_MS);
  await page.screenshot({ path: outFile, fullPage: true });
  console.log(`[capture] saved: ${path.relative(repoRoot, outFile)}`);
}

async function main() {
  fs.mkdirSync(assetsDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  try {
    await captureFullPage(page, "Before (live)", BEFORE_URL, OUT_BEFORE);
  } catch (err) {
    await browser.close();
    console.error("[capture] Failed on live site:", err?.message ?? err);
    process.exit(1);
  }

  try {
    await captureFullPage(page, "After (local demo)", AFTER_URL, OUT_AFTER);
  } catch (err) {
    await browser.close();
    console.error(
      "[capture] Failed on local demo. Run `npm run dev` and ensure the URL matches (default http://localhost:5173/). Use CAPTURE_AFTER_URL if Vite uses another port.",
      err?.message ?? err,
    );
    process.exit(1);
  }

  await browser.close();
  console.log("[capture] Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
