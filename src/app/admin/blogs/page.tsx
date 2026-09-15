"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { adminFetch, AdminApiError } from "@/lib/api";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { useAdminAuth } from "@/components/admin/useAdminAuth";
import type { BlogPost } from "@/lib/types";

export default function AdminBlogsPage() {
  const { getToken, handleAdminError } = useAdminAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadError, setLoadError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<BlogPost | null>(null);
  const [search, setSearch] = useState("");

  const loadPosts = useCallback(() => {
    const token = getToken();
    if (!token) return;

    adminFetch<BlogPost[]>("/api/admin/blogs", token)
      .then((data) => {
        setPosts(data);
        setLoadError("");
      })
      .catch((err) => {
        handleAdminError(err);
        if (!(err instanceof AdminApiError && err.status === 401)) {
          setLoadError("Could not load posts. Please refresh the page.");
        }
      });
  }, [getToken, handleAdminError]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  async function confirmDelete() {
    if (!deleteTarget) return;
    setDeletingId(deleteTarget.id);
    try {
      await adminFetch(`/api/admin/blogs/${deleteTarget.id}`, getToken(), { method: "DELETE" });
      setPosts((prev) => prev.filter((p) => p.id !== deleteTarget.id));
      setDeleteTarget(null);
    } catch (err) {
      handleAdminError(err);
      alert(err instanceof Error ? err.message : "Failed to delete");
    } finally {
      setDeletingId(null);
    }
  }

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="admin-topbar" style={{ margin: "-2rem -2rem 2rem", borderRadius: 0 }}>
        <div>
          <h1 className="admin-page-title">Blog Posts</h1>
          <p className="admin-page-subtitle">{posts.length} posts — all editable</p>
        </div>
        <Link href="/admin/blogs/new" className="admin-btn admin-btn-primary">
          + New Post
        </Link>
      </div>

      {loadError && <p className="admin-error">{loadError}</p>}

      <div style={{ marginBottom: "1.25rem" }}>
        <input
          type="search"
          placeholder="Search by title or slug…"
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
              <th>Title</th>
              <th>Slug</th>
              <th>Tags</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((post) => (
              <tr key={post.id}>
                <td style={{ fontWeight: 500, maxWidth: "280px" }}>{post.title}</td>
                <td>
                  <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer" className="admin-link">
                    {post.slug}
                  </a>
                </td>
                <td style={{ color: "var(--admin-muted)", maxWidth: "200px" }}>
                  {(post.tags || []).slice(0, 2).join(", ")}
                  {(post.tags || []).length > 2 ? ` +${(post.tags || []).length - 2}` : ""}
                </td>
                <td style={{ color: "var(--admin-muted)" }}>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </td>
                <td>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <Link href={`/admin/blogs/${post.id}/edit`} className="admin-link">
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="admin-btn-danger"
                      disabled={deletingId === post.id}
                      onClick={() => setDeleteTarget(post)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmDialog
        open={Boolean(deleteTarget)}
        title="Delete blog post?"
        message={
          deleteTarget
            ? `Are you sure you want to permanently delete "${deleteTarget.title}"? This cannot be undone.`
            : ""
        }
        confirmLabel="Yes, delete"
        loading={Boolean(deletingId)}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
}
