import { getBlogs } from "@/lib/blog-api.server";
import { BlogListing } from "@/components/BlogListing";
import { BlogPageHeader } from "@/components/BlogPageHeader";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

// Edit the /blog meta title & description here.
export const metadata = buildMetadata({
  title: "Latest Blog Updates | Hetaksh Essential Oils",
  description:
    "Explore the latest blogs from Hetaksh Essential Oils on essential oils, carrier oils, natural ingredients, trends, and industry insights.",
  keywords: "essential oils blog, carrier oils news, hetaksh blog",
  path: "/blog",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default async function BlogListPage() {
  const data = await getBlogs(1);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <BlogPageHeader title="Blog" />
      <BlogListing posts={data.posts} page={data.page} totalPages={data.totalPages} />
    </>
  );
}
