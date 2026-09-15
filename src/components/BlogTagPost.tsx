import type { BlogPost } from "@/lib/types";
import { decodeHtmlEntities } from "@/lib/decode-html";
import { formatTagArchiveDate } from "@/lib/format-blog-date";

function stripLeadingBreaks(html: string): string {
  return html.replace(/^(\s*(<br\s*\/?>)+\s*)+/i, "");
}

export function BlogTagPost({ post }: { post: BlogPost }) {
  const dateLabel = formatTagArchiveDate(
    post.publishedDateDisplay || "",
    post.publishedAt,
  );

  return (
    <article className="blog-tag-archive__post wow fadeInUp animated">
      {post.featuredImageUrl && (
        <div className="iamgs">
          <img
            src={post.featuredImageUrl}
            alt={post.imageAlt || decodeHtmlEntities(post.title)}
            width={520}
            height={390}
          />
        </div>
      )}

      {dateLabel && (
        <div className="left-side">
          <span className="day">{dateLabel.split(" ")[0]}</span>{" "}
          <span className="month">{dateLabel.split(" ").slice(1).join(" ")}</span>
        </div>
      )}

      <div className="right-side">
        <h4>
          <a href={`/blog/${post.slug}`}>{decodeHtmlEntities(post.title)}</a>
        </h4>
      </div>

      <div className="blog-description news-details__content">
        <div dangerouslySetInnerHTML={{ __html: stripLeadingBreaks(post.content) }} />
      </div>
    </article>
  );
}
