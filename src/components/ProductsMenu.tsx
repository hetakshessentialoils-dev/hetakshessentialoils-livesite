"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export type ProductsMenuItem = {
  label: string;
  href: string;
};

function closeNavChrome() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

  document.querySelector(".mobile-nav__wrapper")?.classList.remove("expanded");
  document.querySelectorAll(".mobile-nav__container .products-nav.is-open").forEach((el) => {
    el.classList.remove("is-open");
    el.querySelector(":scope > a")?.classList.remove("expanded");
    el.querySelector(":scope > a > button")?.classList.remove("expanded");
    el
      .querySelectorAll<HTMLElement>(".coa-msds-root, .coa-msds-panel, .coa-msds-list-box, .coa-msds-scroll")
      .forEach((node) => {
        node.style.display = "";
      });
  });
}

export function ProductsMenu({ items }: { items: ProductsMenuItem[] }) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [menuClosed, setMenuClosed] = useState(false);

  const sorted = useMemo(
    () =>
      [...items].sort((a, b) =>
        a.label.localeCompare(b.label, undefined, { sensitivity: "base" }),
      ),
    [items],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter((item) => item.label.toLowerCase().startsWith(q));
  }, [sorted, query]);

  useEffect(() => {
    setQuery("");
    setMenuClosed(true);
    closeNavChrome();
  }, [pathname]);

  function handleProductClick() {
    setQuery("");
    setMenuClosed(true);
    closeNavChrome();
  }

  return (
    <li
      className={`dropdown coa-msds-nav products-nav${menuClosed ? " products-nav--closed" : ""}`}
      onMouseEnter={() => setMenuClosed(false)}
      onMouseLeave={() => {
        setQuery("");
        setMenuClosed(false);
      }}
    >
      <a href="#" className="header-nav-dropdown">
        <span>Products</span>
        <span className="header-dropdown-caret fa fa-angle-down" aria-hidden="true" />
      </a>
      <ul className="coa-msds-root">
        <li className="coa-msds-panel">
          <div className="coa-msds-list-box">
            <div className="coa-msds-search">
              <input
                type="search"
                value={query}
                placeholder="Search products…"
                aria-label="Search products"
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
              {filtered.map((item) => (
                <li key={item.href} className="coa-msds-direct">
                  <Link href={item.href} onClick={handleProductClick}>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </li>
  );
}
