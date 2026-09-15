"use client";

import Link from "next/link";
import { useState } from "react";
import type { FaqItem } from "@/lib/types";

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  headingAs: Heading = "h2",
}: {
  faqs: FaqItem[];
  title?: string;
  headingAs?: "h2" | "h3" | "h4" | "h5";
}) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs.length) return null;

  return (
    <section className="faq-one">
      <div className="container">
        <div className="section-title text-center">
          <Heading className="section-title__title">{title}</Heading>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="faq-accordion">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={`${faq.question}-${index}`}
                    className={`faq-accordion__item${isOpen ? " is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-accordion__header"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span className="faq-accordion__question">{faq.question}</span>
                      <span className={`faq-accordion__icon${isOpen ? " is-open" : ""}`} aria-hidden="true">
                        <i className="fa fa-angle-down" />
                      </span>
                    </button>
                    <div className={`faq-accordion__body${isOpen ? " is-open" : ""}`}>
                      <p className="faq-accordion__answer" lang="en">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const current = items[items.length - 1]?.name || "";

  return (
    <section className="page-header">
      <div
        className="page-header-bg"
        style={{ backgroundImage: "url(/assets/images/backgrounds/pattern02.webp)" }}
      />
      <div className="container">
        <div className="page-header__inner">
          <h2>{current}</h2>
          <ul className="thm-breadcrumb list-unstyled">
            {items.map((item, index) => (
              <li key={item.href}>
                {index === items.length - 1 ? (
                  <span>{item.name}</span>
                ) : (
                  <>
                    <Link href={item.href}>{item.name}</Link>
                    <span className="thm-breadcrumb__sep"> / </span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
