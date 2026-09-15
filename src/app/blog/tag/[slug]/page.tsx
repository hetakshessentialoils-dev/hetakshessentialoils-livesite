import { notFound } from "next/navigation";
import { BlogTagPost } from "@/components/BlogTagPost";
import { JsonLd } from "@/components/JsonLd";
import { getAllTagSlugs, getPostsByTag, getTagLabel } from "@/lib/blog-tags.server";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllTagSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const label = await getTagLabel(slug);
  if (!label) return {};

  return buildMetadata({
    title: label,
    description: `Blog posts tagged with ${label} from Hetaksh Essential Oils.`,
    path: `/blog/tag/${slug}`,
  });
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const label = await getTagLabel(slug);
  if (!label) notFound();

  const posts = await getPostsByTag(slug);
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: label, href: `/blog/tag/${slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <main className="blog-tag-archive">
        <div className="container">
          <div className="middle-align">
            <div className="inner">
              <h1>Blog</h1>
            </div>
          </div>
        </div>

        <section className="news single-postm">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 functiss">
                {posts.map((post) => (
                  <BlogTagPost key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
