#!/usr/bin/env node
/*
 * Self-healing asset case fixer.
 *
 * macOS is case-INsensitive but Vercel/Linux is case-SENSITIVE, so an image
 * referenced as `Foo.webp` but stored as `foo.webp` works locally yet 404s in
 * production. This script scans every `/assets/...` reference in the code and
 * CSS, and whenever a reference resolves only by a different case, it copies the
 * real file to the referenced path so BOTH casings exist on disk. Idempotent and
 * safe to run on every build (wired via the `prebuild` npm hook).
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const pub = path.join(root, "public");

const ASSET_RE = /\/assets\/[^"'`)\s>]+\.(?:webp|jpg|jpeg|png|gif|svg|pdf|ico|mp4|webm)/gi;
const CSS_URL_RE = /url\(\s*["']?(\.\.\/[^)"']+\.(?:webp|jpg|jpeg|png|gif|svg|ico))/gi;

function walk(dir, exts, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name === ".next") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, exts, acc);
    else if (exts.test(e.name)) acc.push(p);
  }
  return acc;
}

// 1) Collect referenced asset paths (relative to /public)
const refs = new Set();
for (const f of walk(path.join(root, "src"), /\.(tsx?|jsx?|css)$/)) {
  const t = fs.readFileSync(f, "utf8");
  let m;
  while ((m = ASSET_RE.exec(t))) refs.add(decodeURIComponent(m[0]));
}
const cssDir = path.join(pub, "assets/css");
for (const f of walk(cssDir, /\.css$/)) {
  const t = fs.readFileSync(f, "utf8");
  let m;
  while ((m = CSS_URL_RE.exec(t))) {
    const abs = path.normalize(path.join(path.dirname(f), m[1]));
    refs.add("/" + path.relative(pub, abs).split(path.sep).join("/"));
  }
}

// 2) Case-insensitive index of files that actually exist in /public
const lower = new Map();
(function index(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) index(p);
    else lower.set(("/" + path.relative(pub, p).split(path.sep).join("/")).toLowerCase(), p);
  }
})(pub);

// 3) For each ref that only resolves by case, copy the real file to the ref path
let fixed = 0;
const missing = [];
for (const ref of refs) {
  const target = path.join(pub, ref);
  if (fs.existsSync(target)) continue;
  const actual = lower.get(ref.toLowerCase());
  if (actual) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(actual, target);
    fixed++;
  } else {
    missing.push(ref);
  }
}

console.log(`[fix-asset-case] checked ${refs.size} refs, created ${fixed} case-variant copies`);
if (missing.length) {
  console.warn(`[fix-asset-case] ${missing.length} referenced asset(s) not found in any case:`);
  missing.forEach((m) => console.warn("  - " + m));
}
