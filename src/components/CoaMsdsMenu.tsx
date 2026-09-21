"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CoaMsdsDoc, CoaMsdsNavProduct } from "@/lib/coa-msds-nav";

function DocsLinks({ doc }: { doc: CoaMsdsDoc }) {
  return (
    <>
      {doc.coa && (
        <li>
          <a href={doc.coa} target="_blank" rel="noopener noreferrer">
            COA
          </a>
        </li>
      )}
      {doc.msds && (
        <li>
          <a href={doc.msds} target="_blank" rel="noopener noreferrer">
            MSDS
          </a>
        </li>
      )}
    </>
  );
}

export function CoaMsdsMenu() {
  const [items, setItems] = useState<CoaMsdsNavProduct[] | null>(null);
  const [query, setQuery] = useState("");
  const [flatDoc, setFlatDoc] = useState<CoaMsdsDoc | null>(null);
  const [flatTop, setFlatTop] = useState(0);
  const panelRef = useRef<HTMLLIElement>(null);
  const rowRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    void import("@/lib/coa-msds-nav").then(({ getCoaMsdsNav }) => {
      if (!cancelled) setItems(getCoaMsdsNav());
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const list = items ?? [];
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter((product) => product.label.toLowerCase().startsWith(q));
  }, [items, query]);

  const clearAll = () => {
    setFlatDoc(null);
    rowRef.current = null;
  };

  const resetMenu = () => {
    clearAll();
    setQuery("");
  };

  const openFlat = (el: HTMLElement, doc: CoaMsdsDoc) => {
    rowRef.current = el;
    setFlatDoc(doc);
    requestAnimationFrame(() => {
      const panel = panelRef.current;
      if (!panel) return;
      setFlatTop(el.getBoundingClientRect().top - panel.getBoundingClientRect().top);
    });
  };

  useEffect(() => {
    if (!flatDoc) return;
    const stillVisible = filtered.some((p) => p.subproducts[0] === flatDoc);
    if (!stillVisible) clearAll();
  }, [filtered, flatDoc]);

  useEffect(() => {
    if (!flatDoc) return;
    const list = panelRef.current?.querySelector(".coa-msds-scroll");
    const sync = () => {
      const panel = panelRef.current;
      const row = rowRef.current;
      if (!panel || !row) return;
      setFlatTop(row.getBoundingClientRect().top - panel.getBoundingClientRect().top);
    };
    list?.addEventListener("scroll", sync);
    window.addEventListener("resize", sync);
    return () => {
      list?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [flatDoc]);

  if (!items) return null;

  return (
    <li className="dropdown coa-msds-nav coa-msds-menu--hidden" onMouseLeave={resetMenu} hidden>
      <a href="#" className="header-nav-dropdown">
        <span>COA / MSDS</span>
        <span className="header-dropdown-caret fa fa-angle-down" aria-hidden="true" />
      </a>
      <ul className="coa-msds-root">
        <li className="coa-msds-panel" ref={panelRef}>
          <div className="coa-msds-list-box">
            <div className="coa-msds-search">
              <input
                type="search"
                value={query}
                placeholder="Search products…"
                aria-label="Search COA / MSDS products"
                autoComplete="off"
                onChange={(e) => setQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </div>
            <ul className="coa-msds-scroll">
              {filtered.length === 0 && (
                <li className="coa-msds-empty">
                  <span>No products found</span>
                </li>
              )}
              {filtered.map((product) => {
                const single = product.subproducts[0];
                if (!single) return null;

                return (
                  <li
                    key={product.href}
                    className="dropdown coa-msds-direct"
                    onMouseEnter={(e) => openFlat(e.currentTarget, single)}
                  >
                    <a href="#" className="header-nav-dropdown" onClick={(e) => e.preventDefault()}>
                      <span>{product.label}</span>
                      <span className="header-dropdown-caret fa fa-angle-right" aria-hidden="true" />
                    </a>
                    <ul className="coa-msds-docs coa-msds-docs--inline">
                      <DocsLinks doc={single} />
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>

          {flatDoc && (
            <ul className="coa-msds-docs coa-msds-docs--fly" style={{ top: flatTop }}>
              <DocsLinks doc={flatDoc} />
            </ul>
          )}
        </li>
      </ul>
    </li>
  );
}
