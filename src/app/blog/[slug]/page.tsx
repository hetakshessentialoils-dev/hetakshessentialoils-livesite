import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blogs";
import { getBlog } from "@/lib/blog-api.server";
import { BlogPageHeader } from "@/components/BlogPageHeader";
import { BlogSidebar } from "@/components/BlogSidebar";
import { JsonLd } from "@/components/JsonLd";
import { decodeHtmlEntities } from "@/lib/decode-html";
import { getBlogDateLabel } from "@/lib/format-blog-date";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const dynamicParams = true;

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) return {};

  return buildMetadata({
    title: decodeHtmlEntities(post.seoTitle || post.title),
    description: post.seoDescription || post.excerpt || post.content.slice(0, 160),
    keywords: post.seoKeywords || undefined,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <BlogPageHeader title={post.title} />

      <section className="news-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="news-details__left">
                {post.featuredImageUrl && (
                  <div className="news-details__img">
                    <img
                      src={post.featuredImageUrl}
                      alt={post.imageAlt || decodeHtmlEntities(post.title)}
                      width={520}
                      height={390}
                    />
                  </div>
                )}
                <div className="news-details__content">
                  <ul className="list-unstyled news-details__meta">
                    <li>
                      <span>{getBlogDateLabel(post.publishedDateDisplay, post.publishedAt)}</span>
                    </li>
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                  </ul>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <BlogSidebar currentSlug={slug} tags={post.tags || []} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
