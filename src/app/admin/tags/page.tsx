"use client";

import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/api";
import { useAdminAuth } from "@/components/admin/useAdminAuth";

type TagRow = { label: string; slug: string; postCount: number };

export default function AdminTagsPage() {
  const { getToken, handleAdminError } = useAdminAuth();
  const [tags, setTags] = useState<TagRow[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = getToken();
    if (!token) return;
    adminFetch<{ tags: TagRow[] }>("/api/admin/tags", token)
      .then((data) => setTags(data.tags))
      .catch(handleAdminError);
  }, [getToken, handleAdminError]);

  const filtered = tags.filter(
    (t) =>
      t.label.toLowerCase().includes(search.toLowerCase()) ||
      t.slug.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="admin-topbar" style={{ margin: "-2rem -2rem 2rem", borderRadius: 0 }}>
        <div>
          <h1 className="admin-page-title">Tags</h1>
          <p className="admin-page-subtitle">{tags.length} unique tags across all posts</p>
        </div>
      </div>

      <div style={{ marginBottom: "1.25rem" }}>
        <input
          type="search"
          placeholder="Search tags…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="admin-input"
          style={{ maxWidth: "360px" }}
        />
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Slug</th>
              <th>Posts</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tag) => (
              <tr key={tag.slug}>
                <td style={{ fontWeight: 500 }}>{tag.label}</td>
                <td style={{ color: "var(--admin-muted)" }}>{tag.slug}</td>
                <td>
                  <span className="admin-badge admin-badge-published">{tag.postCount}</span>
                </td>
                <td>
                  <a href={`/blog/tag/${tag.slug}`} target="_blank" rel="noreferrer" className="admin-link">
                    View archive ↗
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: "1.5rem", color: "var(--admin-muted)", fontSize: "0.85rem" }}>
        Tags are managed through blog posts. Add new tags when creating or editing a post.
      </p>
    </>
  );
}
