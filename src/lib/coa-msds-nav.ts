import { CATEGORY_DETAILS } from "@/data/category-details";
import { CLEAN_PRODUCT_PAGES } from "@/data/clean-product-pages";
import { PRODUCT_LANDINGS } from "@/data/product-landings";
import { PRODUCT_PAGES_HTML } from "@/data/product-pages-html";
import { NAV_PRODUCTS } from "@/lib/legacy-assets";
import { productDisplayName } from "@/lib/search";

export type CoaMsdsDoc = {
  label: string;
  coa?: string;
  msds?: string;
};

export type CoaMsdsNavProduct = {
  label: string;
  href: string;
  subproducts: CoaMsdsDoc[];
};

function fromCategorySlug(slug: string): CoaMsdsDoc[] {
  const detail = CATEGORY_DETAILS[slug];
  if (!detail) return [];
  return detail.items
    .filter((item) => item.coa || item.msds)
    .map((item) => ({
      label: productDisplayName(item.title),
      coa: item.coa,
      msds: item.msds,
    }));
}

function fromLandingSlug(slug: string): CoaMsdsDoc[] {
  const landing = PRODUCT_LANDINGS[slug];
  if (landing) {
    return landing.grades
      .filter((grade) => grade.coa || grade.msds)
      .map((grade) => ({
        label: grade.spec || grade.title,
        coa: grade.coa,
        msds: grade.msds,
      }));
  }

  const clean = CLEAN_PRODUCT_PAGES[slug];
  if (!clean) return [];

  const docs: CoaMsdsDoc[] = [
    {
      label: clean.name,
      coa: clean.coa,
      msds: clean.msds,
    },
  ];
  for (const variant of clean.variants) {
    docs.push({
      label: variant.title.split("|")[0]?.trim() || variant.title,
      coa: variant.coa,
      msds: variant.msds,
    });
  }
  return docs.filter((doc) => doc.coa || doc.msds);
}

function fromProductHtml(slug: string, fallbackLabel: string): CoaMsdsDoc[] {
  const page = PRODUCT_PAGES_HTML[slug];
  if (!page?.html) return [];

  const html = page.html;
  const boxes = [...html.matchAll(/<div class="product__btn-box">([\s\S]*?)<\/div>/gi)];
  const docs: CoaMsdsDoc[] = [];

  for (const box of boxes) {
    const block = box[1];
    const coa = block.match(/href="([^"]+)"[^>]*>[\s\S]*?\bCOA\b/i)?.[1];
    const msds = block.match(/href="([^"]+)"[^>]*>[\s\S]*?\bMSDS\b/i)?.[1];
    if (!coa && !msds) continue;

    const before = html.slice(Math.max(0, (box.index ?? 0) - 500), box.index ?? 0);
    const heading =
      before.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i)?.[1] ||
      before.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1] ||
      before.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1] ||
      "";

    let label = heading
      .replace(/<[^>]+>/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ")
      .replace(/\bCOA\b.*$/i, "")
      .replace(/\bMSDS\b.*$/i, "")
      .trim();

    if (!label || label.length < 3) label = fallbackLabel;

    const key = label.toLowerCase();
    const existing = docs.find((doc) => doc.label.toLowerCase() === key);
    if (existing) {
      if (coa) existing.coa ??= coa;
      if (msds) existing.msds ??= msds;
      continue;
    }

    docs.push({ label, coa, msds });
  }

  return docs;
}

function searchByName(navLabel: string): CoaMsdsDoc[] {
  const needle = navLabel
    .replace(/bulk\s+suppliers?/gi, "")
    .replace(/wholesale/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  const short = needle.replace(/\s+oil$/, "").trim();
  const results: CoaMsdsDoc[] = [];
  const seen = new Set<string>();

  for (const detail of Object.values(CATEGORY_DETAILS)) {
    for (const item of detail.items) {
      if (!item.coa && !item.msds) continue;
      const name = productDisplayName(item.title);
      const lower = name.toLowerCase();
      if (!lower.includes(short) && !lower.includes(needle)) continue;
      if (lower.includes("hydrosol") && !needle.includes("hydrosol")) continue;
      const key = `${item.coa ?? ""}|${item.msds ?? ""}`;
      if (seen.has(key)) continue;
      seen.add(key);
      results.push({ label: name, coa: item.coa, msds: item.msds });
    }
  }

  return results;
}

function productBaseLabel(navLabel: string) {
  return navLabel
    .replace(/bulk\s+suppliers?/gi, "")
    .replace(/wholesale/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Merge COA/MSDS rows that share the same product name (case-insensitive). */
function mergeSubproducts(docs: CoaMsdsDoc[]): CoaMsdsDoc[] {
  const byKey = new Map<string, CoaMsdsDoc>();

  for (const doc of docs) {
    const key = doc.label.trim().toLowerCase();
    const existing = byKey.get(key);
    if (existing) {
      if (doc.coa) existing.coa ??= doc.coa;
      if (doc.msds) existing.msds ??= doc.msds;
      continue;
    }
    byKey.set(key, { ...doc });
  }

  return [...byKey.values()];
}

/** Keep known abbreviations uppercase; title-case everything else. */
const KEEP_UPPER = new Set([
  "usp",
  "nf",
  "bp",
  "ep",
  "ip",
  "jp",
  "ph",
  "eur",
  "coa",
  "msds",
  "fda",
  "gmp",
  "iso",
  "co2",
]);

function titleCaseLabel(label: string): string {
  return label
    .trim()
    .replace(/\s+/g, " ")
    .split(/(\s+|—|–|-|\/|&|\(|\))/g)
    .map((part) => {
      if (!part || /^[\s—–\-\/&\(\)]+$/.test(part)) return part;
      const lower = part.toLowerCase();
      if (KEEP_UPPER.has(lower)) return lower.toUpperCase();
      // "Ph.EUR" style tokens
      if (/^[a-z]+\.[a-z]+$/i.test(part)) {
        return part
          .split(".")
          .map((bit) => (KEEP_UPPER.has(bit.toLowerCase()) ? bit.toUpperCase() : bit.charAt(0).toUpperCase() + bit.slice(1).toLowerCase()))
          .join(".");
      }
      if (/^\d/.test(part)) return part;
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join("");
}

function collectSubproducts(slug: string, navLabel: string): CoaMsdsDoc[] {
  const baseLabel = productBaseLabel(navLabel);

  let subproducts = fromLandingSlug(slug);
  if (!subproducts.length) subproducts = fromCategorySlug(slug);
  if (!subproducts.length) subproducts = fromProductHtml(slug, baseLabel);
  if (!subproducts.length) subproducts = searchByName(navLabel);

  return mergeSubproducts(subproducts);
}

/** For landing grades like "USP NF", prefix with product name so the flat list stays clear. */
function flatItemLabel(baseLabel: string, subLabel: string, fromLanding: boolean): string {
  if (!fromLanding) return titleCaseLabel(subLabel);
  const singular = titleCaseLabel(baseLabel.replace(/\bOils\b/i, "Oil").trim());
  const key = singular.toLowerCase();
  const short = key.replace(/\s+oil$/, "").trim();
  const titled = titleCaseLabel(subLabel);
  const lower = titled.toLowerCase();
  if (lower.includes(key) || (short.length > 2 && lower.includes(short))) return titled;
  return `${singular} — ${titled}`;
}

/** Flat list labels to hide from COA / MSDS (duplicates / grades not wanted in the menu). */
const COA_MSDS_EXCLUDE = [
  /^black seed oil\/kalonji oil\s*\(min\s*\d+%?\)$/i,
  /^saw palmetto oil\s*[—–-]\s*25%$/i,
  /^saw palmetto oil\s*[—–-]\s*45%$/i,
  /^saw palmetto oil\s*\(extract\s*25%\)$/i,
  /^saw palmetto oil\s*\(extract\s*45%\)$/i,
  /^saw palmetto oil\s*\(usp\)$/i,
  /^saw palmetto oil\s*\(85%\s*&\s*usp\)$/i,
];

function isExcludedFromCoaMsds(label: string): boolean {
  const normalized = label.trim().replace(/\s+/g, " ");
  return COA_MSDS_EXCLUDE.some((re) => re.test(normalized));
}

/** Extra grades to always show (clean labels + docs). */
const COA_MSDS_EXTRA: CoaMsdsNavProduct[] = [
  {
    label: "Saw Palmetto Extract 25%",
    href: "/carrier-oils::Saw Palmetto Extract 25%",
    subproducts: [
      {
        label: "Saw Palmetto Extract 25%",
        coa: "/assets/images/products/Carrier-Oils/coa/SAW PALMETTO EXTRACT 25 COA.pdf",
        msds: "/assets/images/products/Carrier-Oils/MSDS/SAW PALMETTO EXTARCT MSDS.pdf",
      },
    ],
  },
  {
    label: "Saw Palmetto Extract 45%",
    href: "/carrier-oils::Saw Palmetto Extract 45%",
    subproducts: [
      {
        label: "Saw Palmetto Extract 45%",
        coa: "/assets/images/products/Carrier-Oils/coa/SAW PALMETTO EXTRACT 45 COA.pdf",
        msds: "/assets/images/products/Carrier-Oils/MSDS/SAW PALMETTO EXTARCT MSDS.pdf",
      },
    ],
  },
];

/** Extra category pages whose oils should appear in COA / MSDS (not only Products nav). */
const COA_MSDS_CATEGORY_SOURCES = [
  { label: "Pharma Grade Bulk Supplier", href: "/pharma-grade-oils" },
  { label: "Ingredients Bulk Supplier", href: "/special-ingredients" },
  { label: "Hydrosol Bulk Supplier", href: "/hydrosol-oils" },
  { label: "Spice Oils Bulk Supplier", href: "/spice-oils" },
];

/**
 * COA / MSDS nav: every oil / grade listed directly under the dropdown (A–Z).
 */
export function getCoaMsdsNav(): CoaMsdsNavProduct[] {
  const items: CoaMsdsNavProduct[] = [];
  const flatByLabel = new Map<string, CoaMsdsNavProduct>();

  const addEntry = (entry: CoaMsdsNavProduct) => {
    const key = entry.label.trim().toLowerCase();
    const existing = flatByLabel.get(key);
    if (existing) {
      const doc = existing.subproducts[0];
      const incoming = entry.subproducts[0];
      if (incoming?.coa) doc.coa ??= incoming.coa;
      if (incoming?.msds) doc.msds ??= incoming.msds;
      return;
    }
    flatByLabel.set(key, entry);
    items.push(entry);
  };

  const sources = [...NAV_PRODUCTS, ...COA_MSDS_CATEGORY_SOURCES];
  const seenHrefs = new Set<string>();

  for (const product of sources) {
    if (seenHrefs.has(product.href)) continue;
    seenHrefs.add(product.href);

    const slug = product.href.replace(/^\//, "");
    const baseLabel = productBaseLabel(product.label);
    const fromLanding = fromLandingSlug(slug).length > 0;
    const subproducts = collectSubproducts(slug, product.label);
    if (!subproducts.length) continue;

    for (const sub of subproducts) {
      const label = flatItemLabel(baseLabel, sub.label, fromLanding);
      if (isExcludedFromCoaMsds(label)) continue;

      addEntry({
        label,
        href: `${product.href}::${label}`,
        subproducts: [{ ...sub, label }],
      });
    }
  }

  for (const extra of COA_MSDS_EXTRA) {
    addEntry(extra);
  }

  return items.sort((a, b) =>
    a.label.localeCompare(b.label, undefined, { sensitivity: "base" }),
  );
}
