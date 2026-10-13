"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchBox, type SearchBoxItem } from "@/components/SearchBox";

/** Mobile-only floating search button (next to WhatsApp / Enquire) that opens the search in an overlay. */
export function MobileSearchFab({ items }: { items: SearchBoxItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close after picking a product (route change)
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button type="button" className="mob-search-fab thm-btn" onClick={() => setOpen(true)}>
        <i className="fa fa-search" aria-hidden="true" />
        <span>Search Products</span>
      </button>
      {open && (
        <div className="mob-search-overlay" role="dialog" aria-modal="true" aria-label="Search products" onClick={() => setOpen(false)}>
          <div className="mob-search-overlay__panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="mob-search-overlay__close" aria-label="Close search" onClick={() => setOpen(false)}>
              <i className="fa fa-times" aria-hidden="true" />
            </button>
            <SearchBox items={items} className="mobile-nav__search" autoFocus />
          </div>
        </div>
      )}
    </>
  );
}
