import "server-only";

import { getAllBlogPosts, getAllTagSlugsFromApi, getPostsByTagSlug } from "@/lib/blog-api.server";
import type { BlogPost } from "@/lib/types";
import { decodeHtmlEntities } from "@/lib/decode-html";
import { BLOG_POSTS } from "@/data/blogs";

export function tagToSlug(tag: string): string {
  return decodeHtmlEntities(tag)
    .normalize("NFKC")
    .replace(/\u00a0/g, " ")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function getAllTagSlugs(): Promise<string[]> {
  const fromApi = await getAllTagSlugsFromApi();
  if (fromApi?.length) return fromApi;

  const slugs = new Set<string>();
  for (const post of BLOG_POSTS) {
    for (const tag of post.tags || []) {
      const slug = tagToSlug(tag);
      if (slug) slugs.add(slug);
    }
  }
  return [...slugs].sort();
}

export async function getTagLabel(slug: string): Promise<string | null> {
  const data = await getPostsByTagSlug(slug);
  if (data) return decodeHtmlEntities(data.label);

  for (const post of BLOG_POSTS) {
    for (const tag of post.tags || []) {
      if (tagToSlug(tag) === slug) return decodeHtmlEntities(tag);
    }
  }
  return null;
}

export async function getPostsByTag(slug: string): Promise<BlogPost[]> {
  const data = await getPostsByTagSlug(slug);
  if (data) return data.posts;

  return BLOG_POSTS.filter((post) =>
    (post.tags || []).some((tag) => tagToSlug(tag) === slug),
  );
}

export async function getLatestPosts(excludeSlug?: string, limit = 3): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, limit);
}
