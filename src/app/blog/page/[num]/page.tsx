import { notFound } from "next/navigation";
import { getBlogs } from "@/lib/blog-api.server";
import { BlogListing } from "@/components/BlogListing";
import { BlogPageHeader } from "@/components/BlogPageHeader";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export async function generateStaticParams() {
  const { totalPages } = await getBlogs(1);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    num: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ num: string }>;
}) {
  const { num } = await params;
  const page = Number(num);

  return buildMetadata({
    title: `Blog - Page ${page}`,
    description:
      "Latest news and articles from Hetaksh Essential Oils about wholesale essential oils and carrier oils.",
    keywords: "essential oils blog, carrier oils news, hetaksh blog",
    path: `/blog/page/${page}`,
  });
}

export default async function BlogPagedListPage({
  params,
}: {
  params: Promise<{ num: string }>;
}) {
  const { num } = await params;
  const page = Number(num);
  if (!Number.isInteger(page) || page < 2) notFound();

  const data = await getBlogs(page);
  if (page > data.totalPages) notFound();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <BlogPageHeader title="Blog" />
      <BlogListing posts={data.posts} page={data.page} totalPages={data.totalPages} />
    </>
  );
}
