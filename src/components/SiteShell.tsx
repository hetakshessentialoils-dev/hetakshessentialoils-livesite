"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { DisableTextCopy } from "@/components/DisableTextCopy";
import { MobileSearchFab } from "@/components/MobileSearchFab";
import type { SearchBoxItem } from "@/components/SearchBox";

export function SiteShell({ children, searchItems }: { children: React.ReactNode; searchItems: SearchBoxItem[] }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <DisableTextCopy />
      <div className="page-wrapper">
        <Header searchItems={searchItems} />
        <main id="main">{children}</main>
        <Footer />
      </div>
      <EnquiryPopup />
      <MobileSearchFab items={searchItems} />
    </>
  );
}
