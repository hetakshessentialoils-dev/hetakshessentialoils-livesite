import { CATEGORIES } from "@/data/categories";
import { NAV_PRODUCTS } from "@/lib/legacy-assets";

/** Enquiry form labels — match live site `webpage` hidden field values. */
export const ENQUIRY_SOURCE = {
  contactPage: "Enquiry from Contact Us",
  popup: "Enquiry from Website: Popup form",
  productPage: (productName: string) => `Enquiry from ${productName}`,
} as const;

const STATIC_PAGES: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact Us",
  "/blog": "Blog",
  "/search": "Search",
  "/privacy-policy": "Privacy Policy",
  "/download-brochure": "Company Brochure",
  "/working-process": "Working Process",
  "/industries-we-serve": "Industries We Serve",
};

const GENERIC_SOURCES = new Set([
  "",
  "website",
  "product-page",
  ENQUIRY_SOURCE.popup,
]);

function titleCaseSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function enquiryFrom(pageName: string): string {
  return `Enquiry from ${pageName}`;
}

/** Live-site shape: "Enquiry from Black Seed Oil" */
export function normalizeEnquirySource(source?: string | null): string {
  let label = (source || "").trim();
  if (!label || GENERIC_SOURCES.has(label)) return enquiryFrom("Website");
  if (label.toLowerCase().startsWith("enquiry from ")) {
    label = label.slice("enquiry from ".length).trim();
  }
  label = label.replace(/\s+page$/i, "").trim();
  return enquiryFrom(label || "Website");
}

export function enquirySourceFromPath(pathname?: string | null): string {
  const path = (pathname || "/").replace(/\/+$/, "") || "/";
  if (STATIC_PAGES[path]) return enquiryFrom(STATIC_PAGES[path]);
  if (path.startsWith("/blog")) return enquiryFrom("Blog");
  if (path.startsWith("/search")) return enquiryFrom("Search");

  const slug = path.split("/").filter(Boolean)[0] || "";
  if (!slug) return enquiryFrom("Home");

  const product = NAV_PRODUCTS.find((item) => item.href === `/${slug}`);
  if (product) return enquiryFrom(product.label);

  const category = CATEGORIES.find((item) => item.slug === slug);
  if (category) return enquiryFrom(category.name);

  return enquiryFrom(titleCaseSlug(slug));
}

export function resolveEnquirySource(
  explicit?: string | null,
  pathname?: string | null,
): string {
  const raw = (explicit || "").trim();
  if (!raw || GENERIC_SOURCES.has(raw)) return enquirySourceFromPath(pathname);
  return normalizeEnquirySource(raw);
}
