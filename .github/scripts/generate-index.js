#!/usr/bin/env node
// .github/scripts/generate-index.js
// Runs in CI. Writes files.json to the repo root.
// Uses the local git history (full clone) for dates + commit counts,
// and fetches <title>/<meta description> from raw file contents.
// No external API calls needed beyond raw file fetches.

import { execSync } from "child_process";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, extname, basename } from "path";
import { readdirSync, statSync } from "fs";

const ROOT   = process.cwd();
const FOLDER = "";           // sub-folder to index; "" = repo root
const IGNORE = new Set(["index.html", "index.htm", "files.json", ".nojekyll", "robots.txt"]);
const HTML_EXTS = new Set([".html", ".htm"]);

// ---- helpers ----------------------------------------------------------------

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let i = -1, n = bytes;
  do { n /= 1024; i++; } while (n >= 1024 && i < units.length - 1);
  return `${n < 10 ? n.toFixed(1) : Math.round(n)} ${units[i]}`;
}

function classify(name) {
  const e = extname(name).slice(1).toLowerCase();
  const map = {
    html:"Page", htm:"Page", pdf:"PDF", txt:"Text", md:"Markdown",
    css:"CSS", js:"Script",
    png:"Image", jpg:"Image", jpeg:"Image", gif:"Image", svg:"Image", webp:"Image",
    json:"Data", csv:"Data", xml:"Data"
  };
  return map[e] || "File";
}

function gitDatesAndCount(relPath) {
  try {
    // ISO dates, newest first, one per line
    const out = execSync(
      `git log --follow --format="%cI" -- "${relPath}"`,
      { cwd: ROOT, encoding: "utf8" }
    ).trim();
    if (!out) return { modified: null, created: null, iterations: null };
    const lines = out.split("\n").filter(Boolean);
    return {
      modified:   lines[0]   || null,
      created:    lines[lines.length - 1] || null,
      iterations: lines.length
    };
  } catch {
    return { modified: null, created: null, iterations: null };
  }
}

function decodeEntities(str) {
  if (!str) return str;
  return str
    .replace(/&amp;/g,  "&")
    .replace(/&lt;/g,   "<")
    .replace(/&gt;/g,   ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g,  "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function extractMeta(filePath) {
  try {
    const html  = readFileSync(filePath, "utf8");
    const headEnd = html.toLowerCase().indexOf("</head>");
    const head  = headEnd !== -1 ? html.slice(0, headEnd) : html.slice(0, 4096);

    const titleMatch = head.match(/<title[^>]*>([^<]*)<\/title>/i);
    const descMatch  = head.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)
                    || head.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);

    return {
      title: decodeEntities(titleMatch ? titleMatch[1].trim() || null : null),
      desc:  decodeEntities(descMatch  ? descMatch[1].trim()  || null : null)
    };
  } catch {
    return { title: null, desc: null };
  }
}

// ---- main -------------------------------------------------------------------

const dir   = join(ROOT, FOLDER);
const items = readdirSync(dir);
const files = [];

for (const name of items) {
  if (name.startsWith("."))          continue;
  if (IGNORE.has(name.toLowerCase())) continue;

  const absPath = join(dir, name);
  const relPath = FOLDER ? `${FOLDER}/${name}` : name;
  const stat    = statSync(absPath);
  const isDir   = stat.isDirectory();
  const isHtml  = !isDir && HTML_EXTS.has(extname(name).toLowerCase());

  const dates = gitDatesAndCount(relPath);
  const meta  = isHtml ? extractMeta(absPath) : { title: null, desc: null };

  files.push({
    name,
    isDir,
    kind:      classify(name),
    size:      isDir ? null : formatSize(stat.size),
    title:     meta.title,
    desc:      meta.desc,
    modified:  dates.modified,
    created:   dates.created,
    iterations: dates.iterations
  });
}

const out = JSON.stringify({ generated: new Date().toISOString(), files }, null, 2);
writeFileSync(join(ROOT, FOLDER ? FOLDER + "/" : "", "files.json"), out, "utf8");
console.log(`Wrote files.json with ${files.length} entries.`);
