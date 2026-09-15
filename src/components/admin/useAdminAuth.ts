"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { AdminApiError } from "@/lib/api";

const TOKEN_KEY = "hetaksh_admin_token";

export function useAdminAuth() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem(TOKEN_KEY)) {
      router.replace("/admin");
    }
  }, [router]);

  const getToken = useCallback(() => localStorage.getItem(TOKEN_KEY) || "", []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    router.replace("/admin");
  }, [router]);

  const handleAdminError = useCallback(
    (err: unknown) => {
      if (err instanceof AdminApiError && err.status === 401) {
        logout();
        return;
      }
      console.error("Admin API error:", err);
    },
    [logout],
  );

  return { getToken, logout, handleAdminError };
}
