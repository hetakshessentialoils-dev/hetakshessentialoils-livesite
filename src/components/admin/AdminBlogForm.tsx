"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { adminFetch } from "@/lib/api";
import { useAdminAuth } from "@/components/admin/useAdminAuth";
import type { BlogPost } from "@/lib/types";

type TagRow = { label: string; slug: string; postCount: number };

type Props = {
  mode: "create" | "edit";
  blogId?: string;
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function AdminBlogForm({ mode, blogId }: Props) {
  const router = useRouter();
  const { getToken, handleAdminError } = useAdminAuth();
  const [loading, setLoading] = useState(mode === "edit");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [loadError, setLoadError] = useState("");
  const [tagOptions, setTagOptions] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [imageError, setImageError] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");
  const [publishedAt, setPublishedAt] = useState(new Date().toISOString().slice(0, 10));
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const token = getToken();
    if (!token) return;

    adminFetch<{ tags: TagRow[] }>("/api/admin/tags", token)
      .then((data) => setTagOptions(data.tags.map((t) => t.label)))
      .catch((err) => {
        handleAdminError(err);
        setLoadError("Could not load tags. You can still type new tags below.");
      });
  }, [getToken, handleAdminError]);

  useEffect(() => {
    if (mode !== "edit" || !blogId) return;
    const token = getToken();
    if (!token) return;

    adminFetch<BlogPost>(`/api/admin/blogs/${blogId}`, token)
      .then((post) => {
        setTitle(post.title);
        setSlug(post.slug);
        setSlugTouched(true);
        setExcerpt(post.excerpt || "");
        setContent(post.content);
        setFeaturedImageUrl(post.featuredImageUrl || "");
        setImageAlt(post.imageAlt || "");
        setSeoTitle(post.seoTitle || "");
        setSeoDescription(post.seoDescription || "");
        setSeoKeywords(post.seoKeywords || "");
        setPublishedAt(post.publishedAt.slice(0, 10));
        setSelectedTags(post.tags || []);
        setTagOptions((prev) => {
          const merged = new Set([...prev, ...(post.tags || [])]);
          return [...merged];
        });
        setLoadError("");
      })
      .catch((err) => {
        handleAdminError(err);
        setLoadError("Could not load this post. Go back and try again.");
      })
      .finally(() => setLoading(false));
  }, [mode, blogId, getToken, handleAdminError]);

  useEffect(() => {
    if (!slugTouched && title) setSlug(slugify(title));
  }, [title, slugTouched]);

  function toggleTag(tag: string) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }

  function addNewTag() {
    const trimmed = newTag.trim();
    if (!trimmed) return;
    if (!tagOptions.includes(trimmed)) setTagOptions((prev) => [...prev, trimmed]);
    if (!selectedTags.includes(trimmed)) setSelectedTags((prev) => [...prev, trimmed]);
    setNewTag("");
  }

  function handleImageSelect(file: File | null) {
    if (!file) return;
    setImageError("");

    if (!file.type.startsWith("image/")) {
      setImageError("Please choose an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setImageError("Image must be 5MB or smaller.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = typeof reader.result === "string" ? reader.result : "";
      setFeaturedImageUrl(dataUrl);
      if (!imageAlt) {
        setImageAlt(file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "));
      }
    };
    reader.onerror = () => setImageError("Could not read that image.");
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!selectedTags.length) {
      setError("At least one tag is required.");
      return;
    }

    setSaving(true);
    const token = getToken();
    const payload = {
      title,
      slug,
      excerpt: excerpt || undefined,
      content,
      featuredImageUrl: featuredImageUrl || undefined,
      imageAlt: imageAlt || undefined,
      seoTitle: seoTitle || undefined,
      seoDescription: seoDescription || undefined,
      seoKeywords: seoKeywords || undefined,
      publishedAt: new Date(`${publishedAt}T12:00:00.000Z`).toISOString(),
      tags: selectedTags,
    };

    try {
      if (mode === "create") {
        await adminFetch("/api/admin/blogs", token, {
          method: "POST",
          body: JSON.stringify(payload),
        });
      } else {
        await adminFetch(`/api/admin/blogs/${blogId}`, token, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      }
      router.push("/admin/blogs");
    } catch (err) {
      handleAdminError(err);
      setError(err instanceof Error ? err.message : "Failed to save blog");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <p style={{ color: "var(--admin-muted)" }}>Loading post…</p>;
  }

  return (
    <>
      <div className="admin-topbar" style={{ margin: "-2rem -2rem 2rem", borderRadius: 0 }}>
        <div>
          <h1 className="admin-page-title">{mode === "create" ? "New blog post" : "Edit blog post"}</h1>
          <p className="admin-page-subtitle">Tags are required on every post</p>
        </div>
        <Link href="/admin/blogs" className="admin-btn admin-btn-ghost">
          ← Back
        </Link>
      </div>

      {loadError && <p className="admin-error">{loadError}</p>}

      <form onSubmit={handleSubmit} className="admin-card" style={{ padding: "2rem" }}>
        <div className="admin-form-grid">
          <label className="admin-field">
            <span className="admin-field-label">Title *</span>
            <input required value={title} onChange={(e) => setTitle(e.target.value)} className="admin-input" />
          </label>
          <label className="admin-field">
            <span className="admin-field-label">Slug *</span>
            <input
              required
              value={slug}
              onChange={(e) => { setSlugTouched(true); setSlug(e.target.value); }}
              className="admin-input"
            />
          </label>
        </div>

        <label className="admin-field">
          <span className="admin-field-label">Excerpt</span>
          <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} className="admin-textarea" style={{ minHeight: "80px" }} />
        </label>

        <label className="admin-field">
          <span className="admin-field-label">Content (HTML) *</span>
          <textarea required value={content} onChange={(e) => setContent(e.target.value)} rows={14} className="admin-textarea" />
        </label>

        <div className="admin-form-grid">
          <div className="admin-field">
            <span className="admin-field-label">Featured image</span>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              className="admin-input"
              onChange={(e) => {
                handleImageSelect(e.target.files?.[0] || null);
                e.target.value = "";
              }}
            />
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.8rem", color: "var(--admin-muted)" }}>
              Pick an image from your computer — it is saved with the blog in the database.
            </p>
            {imageError && <p className="admin-error" style={{ marginTop: "0.5rem" }}>{imageError}</p>}
            {featuredImageUrl && (
              <div style={{ marginTop: "0.75rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featuredImageUrl}
                  alt={imageAlt || "Featured preview"}
                  style={{
                    maxWidth: "100%",
                    maxHeight: 180,
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--admin-border)",
                  }}
                />
                <button
                  type="button"
                  className="admin-btn admin-btn-ghost"
                  style={{ marginTop: "0.5rem" }}
                  onClick={() => setFeaturedImageUrl("")}
                >
                  Remove image
                </button>
              </div>
            )}
          </div>
          <label className="admin-field">
            <span className="admin-field-label">Image alt text</span>
            <input value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} className="admin-input" />
          </label>
        </div>

        <div className="admin-form-grid">
          <label className="admin-field">
            <span className="admin-field-label">SEO title</span>
            <input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="admin-input" />
          </label>
          <label className="admin-field">
            <span className="admin-field-label">SEO description</span>
            <input value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="admin-input" />
          </label>
          <label className="admin-field">
            <span className="admin-field-label">SEO keywords</span>
            <input value={seoKeywords} onChange={(e) => setSeoKeywords(e.target.value)} className="admin-input" />
          </label>
          <label className="admin-field">
            <span className="admin-field-label">Published date</span>
            <input type="date" value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} className="admin-input" />
          </label>
        </div>

        <fieldset style={{ border: "1px solid var(--admin-border)", borderRadius: "0.75rem", padding: "1.25rem", margin: 0 }}>
          <legend style={{ padding: "0 0.5rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--admin-muted)", textTransform: "uppercase" }}>
            Tags * (select at least one)
          </legend>
          <div className="admin-tag-grid">
            {tagOptions.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`admin-tag-chip${selectedTags.includes(tag) ? " selected" : ""}`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
            <input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Add new tag"
              className="admin-input"
              style={{ flex: 1 }}
            />
            <button type="button" onClick={addNewTag} className="admin-btn admin-btn-ghost">
              Add
            </button>
          </div>
        </fieldset>

        {error && <p className="admin-error">{error}</p>}

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
          <button type="submit" disabled={saving} className="admin-btn admin-btn-primary">
            {saving ? "Saving…" : mode === "create" ? "Create post" : "Save changes"}
          </button>
          <Link href="/admin/blogs" className="admin-btn admin-btn-ghost">
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}
