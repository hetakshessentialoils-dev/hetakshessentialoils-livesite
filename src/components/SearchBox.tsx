"use client";

import Link from "next/link";
import { useState } from "react";

export type SearchBoxItem = { name: string; href: string };

/** Header search: live "starts with" product dropdown; Enter still goes to /search. */
export function SearchBox({
  items,
  className = "",
  id,
  autoFocus,
}: {
  items: SearchBoxItem[];
  className?: string;
  id?: string;
  autoFocus?: boolean;
}) {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const matches = query ? items.filter((p) => p.name.toLowerCase().startsWith(query)) : [];

  return (
    <form role="search" action="/search" method="get" className={`search-form form search-box ${className}`}>
      <label>
        <input
          type="search"
          id={id}
          className="search-field"
          placeholder="Search Products..."
          name="q"
          aria-label="Search products"
          autoComplete="off"
          autoFocus={autoFocus}
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </label>
      <input type="submit" className="search-submit button" value={""} aria-label="Search" />
      {matches.length > 0 && (
        <ul className="search-box__list">
          {matches.map((p) => (
            <li key={p.href}>
              <Link href={p.href} onClick={() => setQ("")}>
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
