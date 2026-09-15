import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";
import type { FaqItem } from "./types";

type SeoInput = {
  title: string;
  description: string;
  keywords?: string;
  path: string;
};

export function buildMetadata({ title, description, keywords, path }: SeoInput): Metadata {
  const canonical = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title,
    description,
    keywords: keywords?.split(",").map((k) => k.trim()),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  if (!faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/logo/hetaksh-logo.webp`,
    email: "sales@hetakshessentialoils.com",
    sameAs: [
      "https://www.facebook.com/HetakshessentialoilsIn/",
      "https://www.instagram.com/hetakshessentialoils/",
      "https://www.linkedin.com/company/hetaksh-essential-oils/",
      "https://www.pinterest.com/hetakshoils/",
    ],
  };
}

export function productJsonLd(product: {
  name: string;
  description: string;
  slug: string;
  imageUrl?: string | null;
  category?: { name: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.imageUrl || `${SITE_URL}/assets/images/logo/hetaksh-logo.webp`,
    brand: { "@type": "Brand", name: SITE_NAME },
    category: product.category?.name,
    url: `${SITE_URL}/${product.slug}`,
  };
}

export function articleJsonLd(post: {
  title: string;
  excerpt?: string | null;
  slug: string;
  featuredImageUrl?: string | null;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImageUrl,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/images/logo/hetaksh-logo.webp`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
