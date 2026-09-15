import type { MetadataRoute } from "next";
import { getAllBlogPosts, getBlogs } from "@/lib/blog-api.server";
import { getAllTagSlugs } from "@/lib/blog-tags.server";
import { SITE_URL } from "@/lib/constants";
import { getCategories, getProducts } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/working-process",
    "/industries-we-serve",
    "/download-brochure",
    "/privacy-policy",
    "/search",
    "/blog",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const [categories, products] = await Promise.all([getCategories(), getProducts()]);
  const { totalPages } = await getBlogs(1);

  const blogPaginationRoutes = Array.from({ length: totalPages - 1 }, (_, i) => ({
    url: `${SITE_URL}/blog/page/${i + 2}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogRoutes = (await getAllBlogPosts()).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const categoryRoutes =
    categories?.map((category) => ({
      url: `${SITE_URL}/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })) || [];

  const productRoutes =
    products?.map((product) => ({
      url: `${SITE_URL}/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })) || [];

  const tagRoutes = (await getAllTagSlugs()).map((slug) => ({
    url: `${SITE_URL}/blog/tag/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...blogPaginationRoutes,
    ...blogRoutes,
    ...tagRoutes,
  ];
}
