import { getLatestPosts, tagToSlug } from "@/lib/blog-tags.server";
import { decodeHtmlEntities } from "@/lib/decode-html";

export async function BlogSidebar({
  currentSlug,
  tags = [],
}: {
  currentSlug?: string;
  tags?: string[];
}) {
  const latestPosts = await getLatestPosts(currentSlug, 3);

  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Latest posts</h3>
        <ul className="sidebar__post-list list-unstyled">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <div className="sidebar__post-image">
                {post.featuredImageUrl && (
                  <img src={post.featuredImageUrl} alt={post.imageAlt || post.title} width={100} height={100} />
                )}
              </div>
              <div className="sidebar__post-content">
                <h3>
                  <span className="sidebar__post-content-meta">
                    <i className="fas fa-user-circle" />
                    by {post.author || "sales"}
                  </span>
                  <a href={`/blog/${post.slug}`}>{decodeHtmlEntities(post.title)}</a>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category-list list-unstyled">
          <li>
            <a href="/blog">
              Blog <span className="icon-right-arrow" />
            </a>
          </li>
        </ul>
      </div>

      {tags.length > 0 && (
        <div className="sidebar__single sidebar__tags">
          <h3 className="sidebar__title">Tags</h3>
          <div className="sidebar__tags-list">
            {tags.map((tag) => (
              <a key={tag} href={`/blog/tag/${tagToSlug(tag)}`} rel="tag">
                {decodeHtmlEntities(tag)}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
