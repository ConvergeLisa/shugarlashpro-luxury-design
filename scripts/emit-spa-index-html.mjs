/**
 * TanStack Start + Cloudflare client build does not emit index.html.
 * Writes dist/client/index.html so static hosts (Vercel) can serve SPA shell + rewrites.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const clientDir = path.join(root, "dist", "client");
const assetsDir = path.join(clientDir, "assets");

function main() {
  if (!fs.existsSync(assetsDir)) {
    console.warn("[emit-spa-index-html] dist/client/assets missing; skip.");
    process.exit(0);
  }

  const files = fs.readdirSync(assetsDir);
  const indexJs = files.filter((f) => /^index-.*\.js$/.test(f));
  if (indexJs.length === 0) {
    console.warn("[emit-spa-index-html] No index-*.js entry in assets; skip.");
    process.exit(0);
  }

  indexJs.sort((a, b) => {
    const sa = fs.statSync(path.join(assetsDir, a)).size;
    const sb = fs.statSync(path.join(assetsDir, b)).size;
    return sb - sa;
  });
  const mainJs = indexJs[0];

  const styleCandidates = files.filter((f) => /^styles-.*\.css$/.test(f));
  const mainCss = styleCandidates[0];

  const lines = [
    "<!DOCTYPE html>",
    '<html lang="en">',
    "<head>",
    '  <meta charset="UTF-8" />',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  ];
  if (mainCss) {
    lines.push(`  <link rel="stylesheet" href="/assets/${mainCss}" />`);
  }
  lines.push("</head>", "<body>", `  <script type="module" src="/assets/${mainJs}"></script>`, "</body>", "</html>", "");

  const out = path.join(clientDir, "index.html");
  fs.writeFileSync(out, lines.join("\n"), "utf8");
  console.log(`[emit-spa-index-html] wrote ${path.relative(root, out)} (main: ${mainJs})`);
}

main();
