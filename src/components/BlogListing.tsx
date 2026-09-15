import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { decodeHtmlEntities } from "@/lib/decode-html";
import { BlogPagination } from "./BlogPagination";

export function BlogListing({
  posts,
  page,
  totalPages,
}: {
  posts: BlogPost[];
  page: number;
  totalPages: number;
}) {
  return (
    <div className="news-page">
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="news-one__single">
                <div className="news-one__img-box">
                  <div className="news-one__img">
                    {post.featuredImageUrl && (
                      <img
                        src={post.featuredImageUrl}
                        alt={post.imageAlt || post.title}
                        width={520}
                        height={390}
                      />
                    )}
                  </div>
                </div>
                <div className="news-one__content">
                  <h1 className="news-one__title">
                    <Link href={`/blog/${post.slug}`}>{decodeHtmlEntities(post.title)}</Link>
                  </h1>
                  <div className="news-one__bottom">
                    <Link href={`/blog/${post.slug}`} className="news-one__read-more">
                      Read More
                      <span className="sr-only"> about {decodeHtmlEntities(post.title)}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <BlogPagination page={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
