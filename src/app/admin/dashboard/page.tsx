"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/api";
import { useAdminAuth } from "@/components/admin/useAdminAuth";

type Stats = { blogs: number; enquiries: number; tags: number };

export default function AdminDashboardPage() {
  const { getToken, handleAdminError } = useAdminAuth();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const token = getToken();
    if (!token) return;
    adminFetch<Stats>("/api/admin/stats", token)
      .then(setStats)
      .catch(handleAdminError);
  }, [getToken, handleAdminError]);

  return (
    <>
      <div className="admin-topbar" style={{ margin: "-2rem -2rem 2rem", borderRadius: 0 }}>
        <div>
          <h1 className="admin-page-title">Dashboard</h1>
          <p className="admin-page-subtitle">Overview of your content</p>
        </div>
      </div>

      <div className="admin-stat-grid">
        {[
          { label: "Blog posts", value: stats?.blogs },
          { label: "Tags", value: stats?.tags },
          { label: "Enquiries", value: stats?.enquiries },
        ].map((item) => (
          <div key={item.label} className="admin-stat-card">
            <div className="admin-stat-label">{item.label}</div>
            <div className="admin-stat-value">{item.value ?? "—"}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link href="/admin/blogs/new" className="admin-btn admin-btn-primary">
          + Create blog post
        </Link>
        <Link href="/admin/blogs" className="admin-btn admin-btn-ghost">
          Manage posts
        </Link>
        <Link href="/admin/tags" className="admin-btn admin-btn-ghost">
          Manage tags
        </Link>
      </div>
    </>
  );
}
