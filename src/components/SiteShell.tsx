"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { DisableTextCopy } from "@/components/DisableTextCopy";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <DisableTextCopy />
      <div className="page-wrapper">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </div>
      <EnquiryPopup />
    </>
  );
}
