import "server-only";

import type { BlogListResponse, BlogPost } from "./types";
import { BLOG_POSTS, BLOGS_PER_PAGE, HOMEPAGE_BLOG_SLUGS } from "@/data/blogs";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
const API_TIMEOUT_MS = 1500;
/** When unset, public pages use static blog data (no wait on localhost:4000). */
const BLOG_API_ENABLED = Boolean(process.env.NEXT_PUBLIC_API_URL);

async function fetchFromApi<T>(path: string): Promise<T | null> {
  if (!BLOG_API_ENABLED) return null;

  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(API_TIMEOUT_MS),
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

function staticBlogList(page = 1, limit = BLOGS_PER_PAGE): BlogListResponse {
  const total = BLOG_POSTS.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * limit;

  return {
    posts: BLOG_POSTS.slice(start, start + limit),
    total,
    page: safePage,
    limit,
    totalPages,
  };
}

export async function getBlogs(page = 1, limit = BLOGS_PER_PAGE): Promise<BlogListResponse> {
  const data = await fetchFromApi<BlogListResponse>(
    `/api/blogs?page=${page}&limit=${limit}`,
  );
  if (data?.posts?.length) return data;
  return staticBlogList(page, limit);
}

export async function getBlog(slug: string): Promise<BlogPost | null> {
  const post = await fetchFromApi<BlogPost>(`/api/blogs/${slug}`);
  if (post) return post;
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

export async function getHomepageBlogs(): Promise<BlogPost[]> {
  const all = await getAllBlogPosts();
  return HOMEPAGE_BLOG_SLUGS.map((slug) => all.find((post) => post.slug === slug)).filter(
    (post): post is BlogPost => Boolean(post),
  );
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const data = await fetchFromApi<BlogListResponse>(`/api/blogs?page=1&limit=100`);
  if (data?.posts?.length) {
    if (data.total <= data.posts.length) return data.posts;
    const pages = await Promise.all(
      Array.from({ length: data.totalPages }, (_, i) =>
        fetchFromApi<BlogListResponse>(`/api/blogs?page=${i + 1}&limit=100`),
      ),
    );
    return pages.flatMap((p) => p?.posts || []);
  }
  return BLOG_POSTS;
}

export async function getPostsByTagSlug(slug: string): Promise<{ label: string; posts: BlogPost[] } | null> {
  const data = await fetchFromApi<{ label: string; posts: BlogPost[] }>(`/api/blogs/tags/${slug}`);
  if (data) return data;

  const { tagToSlug } = await import("@/lib/blog-tags.server");
  const posts = BLOG_POSTS.filter((post) =>
    (post.tags || []).some((tag) => tagToSlug(tag) === slug),
  );
  if (!posts.length) return null;

  const label =
    posts.flatMap((p) => p.tags || []).find((tag) => tagToSlug(tag) === slug) || slug;
  return { label, posts };
}

export async function getAllTagSlugsFromApi(): Promise<string[] | null> {
  return fetchFromApi<string[]>("/api/blogs/tags/all");
}
