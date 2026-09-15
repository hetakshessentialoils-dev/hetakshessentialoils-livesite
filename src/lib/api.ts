import type { Category, EnquiryPayload, Product } from "./types";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";

// Admin calls from the browser go through /backend (Vercel rewrite → Railway).
// That avoids client DNS failures for *.up.railway.app.
const BROWSER_API_URL = "/backend";
const SERVER_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

function adminApiBase() {
  return typeof window === "undefined" ? SERVER_API_URL : BROWSER_API_URL;
}

async function fetchApi<T>(path: string, init?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(`${SERVER_API_URL}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
      next: init?.cache === "no-store" ? undefined : { revalidate: 3600 },
      signal: init?.signal ?? AbortSignal.timeout(1500),
    });

    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch {
    return null;
  }
}

/* ---------------------------------------------------------------------------
 * Products, categories, and blogs are static (frontend-only). They are read
 * from src/data/*.ts. Only admin auth and enquiries use the backend API below.
 * ------------------------------------------------------------------------- */

function categoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

function withCategory(product: (typeof PRODUCTS)[number]): Product {
  return { ...product, category: categoryBySlug(product.categorySlug) };
}

function productsInCategory(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === slug).map(withCategory);
}

export async function getCategories(): Promise<Category[]> {
  return CATEGORIES.map((c) => ({
    ...c,
    products: productsInCategory(c.slug),
    _count: { products: PRODUCTS.filter((p) => p.categorySlug === c.slug).length },
  }));
}

export async function getCategory(slug: string): Promise<Category | null> {
  const category = categoryBySlug(slug);
  if (!category) return null;
  return { ...category, products: productsInCategory(slug) };
}

export async function getProducts(params?: {
  category?: string;
  q?: string;
}): Promise<Product[]> {
  let list = PRODUCTS;
  if (params?.category) {
    list = list.filter((p) => p.categorySlug === params.category);
  }
  if (params?.q) {
    const q = params.q.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }
  return list.map(withCategory);
}

export async function getProduct(slug: string): Promise<Product | null> {
  const product = PRODUCTS.find((p) => p.slug === slug);
  return product ? withCategory(product) : null;
}

export async function submitEnquiry(payload: EnquiryPayload) {
  const res = await fetch("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Failed to submit enquiry");
  }

  return res.json();
}

export class AdminApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "AdminApiError";
    this.status = status;
  }
}

export async function adminFetch<T>(
  path: string,
  token: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${adminApiBase()}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...init?.headers,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new AdminApiError(
      (data as { error?: string }).error || "Request failed",
      res.status,
    );
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export async function adminLogin(username: string, password: string) {
  let res: Response;
  try {
    res = await fetch(`${adminApiBase()}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      cache: "no-store",
    });
  } catch {
    throw new Error(
      "Could not reach the API. Confirm the backend is deployed and NEXT_PUBLIC_API_URL is set on Vercel.",
    );
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(
      (data as { error?: string }).error || "Invalid username or password",
    );
  }

  return res.json() as Promise<{ token: string; username: string }>;
}
