/**
 * Scrape all blog posts from hetakshessentialoils.com/blog and write
 * frontend/src/data/blogs.ts plus featured images under public/assets/images/blog/
 *
 * Usage: npx tsx scripts/sync-blogs.ts
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { decodeHtmlEntities } from "../src/lib/decode-html";

const BASE = "https://hetakshessentialoils.com";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_FILE = path.join(ROOT, "src/data/blogs.ts");
const IMG_DIR = path.join(ROOT, "public/assets/images/blog");

type ScrapedPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImageUrl: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  faqs: [];
  publishedAt: string;
  publishedDateDisplay: string;
  tags: string[];
  featuredOnHomepage?: boolean;
};

const HOMEPAGE_SLUGS = new Set([
  "wholesale-black-seed-oil-distributors-manufacturers-in-united-states",
  "the-power-of-essential-oils-your-guide-to-quality-and-well-being-is-now-in-usa",
  "revolutionizing-the-australian-market-black-cumin-seed-oil-bulk-supplier",
  "leading-supplier-and-manufacturer-of-almond-oil-in-florida-usa",
]);

async function fetchHtml(urlPath: string) {
  const res = await fetch(`${BASE}/${urlPath.replace(/^\//, "")}`);
  if (!res.ok) throw new Error(`Failed ${urlPath}: ${res.status}`);
  return res.text();
}

function stripTags(html: string) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function extractMeta(html: string, name: string) {
  const match = html.match(new RegExp(`<meta name="${name}" content="([^"]+)"`, "i"));
  return match?.[1]?.trim() || "";
}

function parseListingPosts(html: string) {
  const posts: { slug: string; title: string; imageUrl: string; imageAlt: string }[] = [];
  const blocks = html.match(/<div class="news-one__single">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];

  for (const block of blocks) {
    const linkMatch = block.match(/href="https:\/\/hetakshessentialoils\.com\/blog\/([^"/?#]+)\/?"/);
    const titleMatch = block.match(/<h1 class="news-one__title">\s*<a[^>]*>([\s\S]*?)<\/a>/);
    const imgMatch = block.match(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/);
    if (!linkMatch || !titleMatch) continue;

    posts.push({
      slug: linkMatch[1],
      title: decodeHtmlEntities(stripTags(titleMatch[1])),
      imageUrl: imgMatch?.[1] || "",
      imageAlt: imgMatch?.[2] || stripTags(titleMatch[1]),
    });
  }

  return posts;
}

function parsePublishedDateDisplay(html: string) {
  const match = html.match(/news-details__meta[\s\S]*?<span>\s*([^<]+?)<\/span>/i);
  return match?.[1]?.trim() || "";
}

function parsePublishedDate(html: string) {
  const raw = parsePublishedDateDisplay(html);
  if (!raw) return new Date().toISOString();

  const parsed = Date.parse(raw.replace(/(\d+)(st|nd|rd|th)/i, "$1"));
  if (!Number.isNaN(parsed)) return new Date(parsed).toISOString();
  return new Date().toISOString();
}

function parseTags(html: string) {
  const match = html.match(/<div class="sidebar__tags-list">([\s\S]*?)<\/div>/i);
  if (!match) return [];

  const tags: string[] = [];
  const tagRegex = /<a[^>]*rel="tag"[^>]*>([^<]+)<\/a>/gi;
  let tagMatch: RegExpExecArray | null;
  while ((tagMatch = tagRegex.exec(match[1]))) {
    const tag = decodeHtmlEntities(tagMatch[1].trim());
    if (tag) tags.push(tag);
  }
  return tags;
}

function parseContent(html: string) {
  const match = html.match(
    /<div class="news-details__content">\s*<ul class="list-unstyled news-details__meta">[\s\S]*?<\/ul>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/i,
  );
  if (!match) return "";

  let content = match[1];
  content = content.replace(/<!--[\s\S]*?-->/g, "");
  const endMarkers = ["news-details__bottom", "news-details__pagenation"];
  for (const marker of endMarkers) {
    const idx = content.indexOf(marker);
    if (idx >= 0) content = content.slice(0, idx);
  }

  content = content.trim();
  content = content.replace(/https:\/\/hetakshessentialoils\.com/g, "");
  content = content.replace(
    /href="\/blog\/wp-content\//g,
    'href="https://hetakshessentialoils.com/blog/wp-content/',
  );
  return content;
}

async function downloadImage(url: string, slug: string) {
  if (!url) return "";
  try {
    const res = await fetch(url);
    if (!res.ok) return url;
    const ext = path.extname(new URL(url).pathname) || ".jpg";
    const filename = `${slug}${ext}`;
    await mkdir(IMG_DIR, { recursive: true });
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path.join(IMG_DIR, filename), buf);
    return `/assets/images/blog/${filename}`;
  } catch {
    return url;
  }
}

function escapeTs(str: string) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

async function main() {
  const listingBySlug = new Map<string, { slug: string; title: string; imageUrl: string; imageAlt: string }>();

  for (let page = 1; page <= 10; page++) {
    const pathPart = page === 1 ? "blog/" : `blog/page/${page}/`;
    const html = await fetchHtml(pathPart);
    const posts = parseListingPosts(html);
    if (!posts.length) break;
    for (const p of posts) listingBySlug.set(p.slug, p);
    console.log(`Listing page ${page}: ${posts.length} posts`);
  }

  const slugs = [...listingBySlug.keys()];
  console.log(`Total unique posts: ${slugs.length}`);

  const scraped: ScrapedPost[] = [];

  for (const slug of slugs) {
    const listing = listingBySlug.get(slug)!;
    const html = await fetchHtml(`blog/${slug}/`);
    const localImage = await downloadImage(listing.imageUrl, slug);

    scraped.push({
      id: slug,
      title: listing.title,
      slug,
      excerpt: extractMeta(html, "description") || stripTags(parseContent(html)).slice(0, 200),
      content: parseContent(html),
      featuredImageUrl: localImage || listing.imageUrl,
      imageAlt: listing.imageAlt,
      seoTitle: decodeHtmlEntities(
        (html.match(/<title>([^<]+)<\/title>/i)?.[1] || listing.title).trim(),
      ),
      seoDescription: extractMeta(html, "description"),
      seoKeywords: extractMeta(html, "keywords"),
      faqs: [],
      publishedAt: parsePublishedDate(html),
      publishedDateDisplay: parsePublishedDateDisplay(html),
      tags: parseTags(html),
      ...(HOMEPAGE_SLUGS.has(slug) ? { featuredOnHomepage: true } : {}),
    });

    console.log(`Scraped: ${slug}`);
  }

  scraped.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

  const body = scraped
    .map(
      (p) => `  {
    id: ${JSON.stringify(p.id)},
    title: ${JSON.stringify(p.title)},
    slug: ${JSON.stringify(p.slug)},
    excerpt: ${JSON.stringify(p.excerpt)},
    content: \`${escapeTs(p.content)}\`,
    featuredImageUrl: ${JSON.stringify(p.featuredImageUrl)},
    imageAlt: ${JSON.stringify(p.imageAlt)},
    seoTitle: ${JSON.stringify(p.seoTitle)},
    seoDescription: ${JSON.stringify(p.seoDescription)},
    seoKeywords: ${JSON.stringify(p.seoKeywords)},
    faqs: [],
    publishedAt: ${JSON.stringify(p.publishedAt)},
    publishedDateDisplay: ${JSON.stringify(p.publishedDateDisplay)},
    tags: ${JSON.stringify(p.tags)},${p.featuredOnHomepage ? "\n    featuredOnHomepage: true," : ""}
  }`,
    )
    .join(",\n");

  const file = `import type { BlogPost } from "@/lib/types";

export const BLOG_POSTS: BlogPost[] = [
${body}
];

export const BLOGS_PER_PAGE = 15;

export const HOMEPAGE_BLOG_SLUGS = [
  "wholesale-black-seed-oil-distributors-manufacturers-in-united-states",
  "the-power-of-essential-oils-your-guide-to-quality-and-well-being-is-now-in-usa",
  "revolutionizing-the-australian-market-black-cumin-seed-oil-bulk-supplier",
  "leading-supplier-and-manufacturer-of-almond-oil-in-florida-usa",
] as const;
`;

  await writeFile(OUT_FILE, file, "utf8");
  console.log(`Wrote ${OUT_FILE} (${scraped.length} posts)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
