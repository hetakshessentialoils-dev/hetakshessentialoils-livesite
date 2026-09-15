"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { CLEAN_PRODUCT_PAGES } from "@/data/clean-product-pages";
import { productPath } from "@/lib/product-paths";

const VISIBLE_COUNT = 3;

type RelatedItem = {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
};

type SlideDirection = "next" | "prev";

function stableOffset(slug: string, length: number) {
  if (length <= 0) return 0;
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return hash % length;
}

function rotate<T>(items: T[], offset: number) {
  if (items.length <= 1) return items;
  const start = offset % items.length;
  return [...items.slice(start), ...items.slice(0, start)];
}

function relatedProductsFor(currentSlug: string): RelatedItem[] {
  const current = CLEAN_PRODUCT_PAGES[currentSlug];
  const catalog = Object.values(CLEAN_PRODUCT_PAGES).filter((product) => product.slug !== currentSlug);

  const sameCategory = catalog.filter((product) => product.category === current?.category);
  const otherCategory = catalog.filter((product) => product.category !== current?.category);

  const ordered = [
    ...rotate(sameCategory, stableOffset(currentSlug, sameCategory.length)),
    ...rotate(otherCategory, stableOffset(`${currentSlug}-more`, otherCategory.length)),
  ];

  return ordered.map((product) => ({
    slug: product.slug,
    name: product.name,
    image: product.image,
    imageAlt: product.imageAlt,
  }));
}

function RelatedCard({ product }: { product: RelatedItem }) {
  return (
    <Link href={productPath(product.slug)} className="cp-related__card">
      <div className="cp-related__media">
        <img src={product.image} alt={product.imageAlt} />
      </div>
      <span className="cp-related__name">{product.name}</span>
    </Link>
  );
}

export function RelatedProducts({
  currentSlug,
  headingAs: Heading = "h2",
}: {
  currentSlug: string;
  headingAs?: "h2" | "h3" | "h4" | "h5";
}) {
  const products = useMemo<RelatedItem[]>(() => relatedProductsFor(currentSlug), [currentSlug]);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>("next");
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 991px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const canSlide = products.length > (isMobile ? 1 : VISIBLE_COUNT);
  const visible = canSlide
    ? Array.from({ length: VISIBLE_COUNT }, (_, offset) => products[(startIndex + offset) % products.length])
    : products;
  const items = isMobile ? products : visible;

  if (products.length === 0) return null;

  function slide(nextDirection: SlideDirection) {
    if (isMobile) {
      const track = trackRef.current;
      if (!track) return;
      const step = Math.round(track.clientWidth * 0.85);
      track.scrollBy({ left: nextDirection === "next" ? step : -step, behavior: "smooth" });
      return;
    }

    setDirection(nextDirection);
    setAnimKey((key) => key + 1);
    setStartIndex((current) =>
      nextDirection === "next"
        ? (current + 1) % products.length
        : (current - 1 + products.length) % products.length,
    );
  }

  return (
    <section className="cp-related">
      <div className="container">
        <Heading className="cp-h2 cp-related__title">Related Products</Heading>

        <div className="cp-related__row">
          {canSlide ? (
            <button
              type="button"
              className="cp-related__nav cp-related__nav--prev"
              onClick={() => slide("prev")}
              aria-label="Previous related product"
            >
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </button>
          ) : null}

          <div className="cp-related__viewport" ref={trackRef}>
            <div
              key={isMobile ? "mobile-track" : animKey}
              className={`cp-related__grid${!isMobile ? ` cp-related__grid--${direction}` : ""}`}
            >
              {items.map((product) => (
                <RelatedCard key={product.slug} product={product} />
              ))}
            </div>
          </div>

          {canSlide ? (
            <button
              type="button"
              className="cp-related__nav cp-related__nav--next"
              onClick={() => slide("next")}
              aria-label="Next related product"
            >
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
