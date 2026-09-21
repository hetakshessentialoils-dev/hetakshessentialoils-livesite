import type { MetadataRoute } from "next";
import { getAllBlogPosts, getBlogs } from "@/lib/blog-api.server";
import { getAllTagSlugs } from "@/lib/blog-tags.server";
import { SITE_URL } from "@/lib/constants";
import { getCategories, getProducts } from "@/lib/api";
import { CATEGORY_DETAILS } from "@/data/category-details";
import { CLEAN_PRODUCT_PAGES } from "@/data/clean-product-pages";
import { PRODUCT_LANDINGS } from "@/data/product-landings";
import { PRODUCT_PAGES_HTML } from "@/data/product-pages-html";

const LAST_MOD = new Date("2026-09-15T09:33:09+00:00");

function page(path: string, priority: number, lastModified = LAST_MOD): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified,
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    page("/", 1),
    page("/about", 0.8),
    page("/contact", 0.8),
    page("/working-process", 0.8),
    page("/industries-we-serve", 0.8),
    page("/download-brochure", 0.8),
    page("/privacy-policy", 0.8),
    page("/blog", 0.8),
  ];

  const slugs = new Set<string>();
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);

  for (const category of categories || []) slugs.add(category.slug);
  for (const product of products || []) slugs.add(product.slug);
  for (const slug of Object.keys(CATEGORY_DETAILS)) slugs.add(slug);
  for (const product of Object.values(CLEAN_PRODUCT_PAGES)) slugs.add(product.slug);
  for (const landing of Object.values(PRODUCT_LANDINGS)) slugs.add(landing.slug);
  for (const product of Object.values(PRODUCT_PAGES_HTML)) slugs.add(product.slug);

  const productAndCategoryRoutes = [...slugs].sort().map((slug) => page(`/${slug}`, 0.8));

  const { totalPages } = await getBlogs(1);
  const blogPaginationRoutes = Array.from({ length: Math.max(totalPages - 1, 0) }, (_, i) =>
    page(`/blog/page/${i + 2}`, 0.64),
  );

  const blogRoutes = (await getAllBlogPosts()).map((post) =>
    page(`/blog/${post.slug}`, 0.64, new Date(post.publishedAt)),
  );

  const tagRoutes = (await getAllTagSlugs()).map((slug) => page(`/blog/tag/${slug}`, 0.512));

  return [
    ...staticRoutes,
    ...productAndCategoryRoutes,
    ...blogPaginationRoutes,
    ...blogRoutes,
    ...tagRoutes,
  ];
}
