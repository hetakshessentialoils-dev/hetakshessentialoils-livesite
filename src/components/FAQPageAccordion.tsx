"use client";

import { useEffect, useRef } from "react";
import type { FaqItem } from "@/lib/types";

export function FAQPageAccordion({ faqs }: { faqs: FaqItem[] }) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;

    const questions = Array.from(root.querySelectorAll<HTMLElement>(".faq-question"));
    const handlers: { el: HTMLElement; fn: () => void }[] = [];

    questions.forEach((question) => {
      const fn = () => {
        const answer = question.nextElementSibling as HTMLElement | null;
        const button = question.querySelector("button");
        const isActive = question.classList.contains("active");

        questions.forEach((q) => {
          q.classList.remove("active");
          const btn = q.querySelector("button");
          if (btn) btn.textContent = "Show";
          const ans = q.nextElementSibling as HTMLElement | null;
          if (ans) ans.style.display = "none";
        });

        if (!isActive && answer && button) {
          question.classList.add("active");
          button.textContent = "Hide";
          answer.style.display = "block";
        }
      };

      question.addEventListener("click", fn);
      handlers.push({ el: question, fn });
    });

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
    };
  }, [faqs]);

  return (
    <div className="faq-page-list" ref={listRef}>
      {faqs.map((faq) => (
        <div key={faq.question} className="faq-item">
          <div className="faq-question">
            <span>{faq.question}</span>
            <button type="button">Show</button>
          </div>
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
