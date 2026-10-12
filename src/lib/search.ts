import { CATEGORY_DETAILS } from "@/data/category-details";
import { CLEAN_PRODUCT_PAGES } from "@/data/clean-product-pages";
import { PRODUCTS } from "@/data/products";
import type { CategoryDetailItem } from "@/lib/types";

export type SearchResultItem = CategoryDetailItem & {
  categorySlug: string;
  productName: string;
  matchScore: number;
};

const TITLE_PREFIX = "Here Are Some Technical Details About ";

/** Category display order — matches live search_results.php result ordering. */
const CATEGORY_ORDER = [
  "pharma-grade-oils",
  "essential-oils",
  "carrier-oils",
  "special-ingredients",
  "spice-oils",
  "hydrosol-oils",
];

export function productDisplayName(title: string) {
  return title.startsWith(TITLE_PREFIX) ? title.slice(TITLE_PREFIX.length).trim() : title;
}

function matchScore(productName: string, _item: CategoryDetailItem, q: string): number {
  const name = productName.toLowerCase();
  // Only products whose name starts with the query (e.g. "t" → Tea Tree, not Castor)
  if (name.startsWith(q)) return 0;
  return -1;
}

/** Search product detail blocks (matches live search_results.php behaviour). */
export function searchProductDetails(query: string): SearchResultItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResultItem[] = [];

  for (const [categorySlug, detail] of Object.entries(CATEGORY_DETAILS)) {
    for (const item of detail.items) {
      const productName = productDisplayName(item.title);
      const score = matchScore(productName, item, q);
      if (score >= 0) {
        results.push({ ...item, categorySlug, productName, matchScore: score });
      }
    }
  }

  return results.sort((a, b) => {
    if (a.matchScore !== b.matchScore) return a.matchScore - b.matchScore;
    const catA = CATEGORY_ORDER.indexOf(a.categorySlug);
    const catB = CATEGORY_ORDER.indexOf(b.categorySlug);
    const orderA = catA === -1 ? 99 : catA;
    const orderB = catB === -1 ? 99 : catB;
    if (orderA !== orderB) return orderA - orderB;
    return a.id - b.id;
  });
}

export type ProductPageResult = { slug: string; name: string; image: string; categoryName: string };

const slugToName = (slug: string) => slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

/** Every individual product page (clean pages win over legacy ones for the same slug). */
function allProductPages(): ProductPageResult[] {
  const pages = new Map<string, ProductPageResult>();
  for (const p of PRODUCTS) {
    pages.set(p.slug, { slug: p.slug, name: slugToName(p.slug), image: p.imageUrl || "", categoryName: "" });
  }
  for (const p of Object.values(CLEAN_PRODUCT_PAGES)) {
    pages.set(p.slug, { slug: p.slug, name: p.name, image: p.image, categoryName: p.categoryName });
  }
  return [...pages.values()];
}

/** Product pages whose name has a word starting with the query ("tree" → Tea Tree Oil). */
export function searchProductPages(query: string): ProductPageResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return allProductPages()
    .filter((p) => ` ${p.name.toLowerCase()} ${p.slug.replace(/-/g, " ")}`.includes(` ${q}`))
    .sort((a, b) => {
      const aStarts = a.name.toLowerCase().startsWith(q) ? 0 : 1;
      const bStarts = b.name.toLowerCase().startsWith(q) ? 0 : 1;
      return aStarts - bStarts || a.name.localeCompare(b.name);
    });
}
