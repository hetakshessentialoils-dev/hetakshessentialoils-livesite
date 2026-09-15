"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAdminAuth } from "@/components/admin/useAdminAuth";

const NAV = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "◫" },
  { href: "/admin/blogs", label: "Blog Posts", icon: "✎" },
  { href: "/admin/tags", label: "Tags", icon: "⌗" },
];

export function AdminShell({ children, title, subtitle }: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}) {
  const pathname = usePathname();
  const { logout } = useAdminAuth();

  if (pathname === "/admin") {
    return <>{children}</>;
  }

  return (
    <div className="admin-root">
      <div className="admin-shell">
        <aside className="admin-sidebar">
          <div className="admin-sidebar-brand">
            <div className="admin-sidebar-brand-icon">HE</div>
            <div>
              <div className="admin-sidebar-brand-text">Hetaksh Admin</div>
              <div className="admin-sidebar-brand-sub">Content Manager</div>
            </div>
          </div>

          <nav className="admin-nav">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`admin-nav-link${pathname.startsWith(item.href) ? " active" : ""}`}
              >
                <span className="admin-nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="admin-sidebar-footer">
            <button type="button" className="admin-nav-link" style={{ width: "100%", border: "none", background: "none", cursor: "pointer" }} onClick={logout}>
              <span className="admin-nav-icon">↩</span>
              Logout
            </button>
            <a href="/" target="_blank" rel="noreferrer" className="admin-nav-link" style={{ marginTop: "0.25rem" }}>
              <span className="admin-nav-icon">↗</span>
              View site
            </a>
          </div>
        </aside>

        <div className="admin-main">
          {(title || subtitle) && (
            <div className="admin-topbar">
              <div>
                {title && <h1 className="admin-page-title">{title}</h1>}
                {subtitle && <p className="admin-page-subtitle">{subtitle}</p>}
              </div>
              {pathname.startsWith("/admin/blogs") && !pathname.includes("/new") && !pathname.includes("/edit") && (
                <Link href="/admin/blogs/new" className="admin-btn admin-btn-primary">
                  + New Post
                </Link>
              )}
            </div>
          )}
          <div className="admin-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
