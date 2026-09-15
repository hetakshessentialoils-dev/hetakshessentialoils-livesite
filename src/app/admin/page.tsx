"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/lib/api";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    try {
      const result = await adminLogin(
        String(form.get("username")),
        String(form.get("password")),
      );
      localStorage.setItem("hetaksh_admin_token", result.token);
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid username or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-root admin-login-page">
      <form onSubmit={handleSubmit} className="admin-login-card">
        <div className="admin-login-logo">HE</div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>Welcome back</h1>
        <p style={{ color: "var(--admin-muted)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
          Sign in to manage blogs and tags
        </p>

        <div style={{ marginTop: "2rem" }}>
          <label className="admin-field">
            <span className="admin-field-label">Username</span>
            <input
              name="username"
              type="text"
              required
              autoComplete="username"
              placeholder="Enter username"
              className="admin-input"
            />
          </label>

          <label className="admin-field">
            <span className="admin-field-label">Password</span>
            <div className="admin-input-group">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                placeholder="Enter password"
                className="admin-input"
                style={{ paddingRight: "4.5rem" }}
              />
              <button
                type="button"
                className="admin-input-toggle"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          <button type="submit" disabled={loading} className="admin-btn admin-btn-primary" style={{ width: "100%", marginTop: "0.5rem", padding: "0.875rem" }}>
            {loading ? "Signing in…" : "Sign in"}
          </button>

          {error && <p className="admin-error">{error}</p>}
        </div>
      </form>
    </div>
  );
}
