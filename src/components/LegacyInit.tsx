"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { afterLoad } from "@/lib/after-load";

declare global {
  interface Window {
    jQuery?: {
      (selector: string): {
        length: number;
        hasClass(name: string): boolean;
        owlCarousel(options: object): void;
      };
      fn: { owlCarousel?: (options: object) => void };
    };
  }
}

export function LegacyInit() {
  const pathname = usePathname();

  useEffect(() => {
    let started = false;
    const startTranslate = () => {
      if (started) return;
      started = true;
      const w = window as Window & { googleTranslateElementInit?: () => void; google?: { translate: { TranslateElement: new (opts: object, id: string) => void } } };
      w.googleTranslateElementInit = () => {
        new w.google!.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element",
        );
      };
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };
    window.addEventListener("pointerdown", startTranslate, { once: true });
    return () => window.removeEventListener("pointerdown", startTranslate);
  }, []);

  useEffect(() => {
    const hrefs = [
      "/assets/vendors/fontawesome/css/all.min.css",
      "/assets/vendors/owl-carousel/owl.carousel.min.css",
      "/assets/vendors/owl-carousel/owl.theme.default.min.css",
      "/assets/vendors/austry-icons/style.css",
      "/assets/vendors/animate/animate.min.css",
      "/assets/css/translate-overrides.css",
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/css/intlTelInput.css",
    ];
    return afterLoad(() =>
      hrefs.forEach((href) => {
        if (document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) return;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }),
    );
  }, []);

  // Below-fold images use data-src so they don't compete with the first screen; load them after the page
  useEffect(
    () =>
      afterLoad(() =>
        document.querySelectorAll<HTMLImageElement>("img[data-src]").forEach((img) => {
          img.src = img.dataset.src!;
          img.removeAttribute("data-src");
        }),
      ),
    [pathname],
  );

  useEffect(() => {
    const header = document.querySelector("header.main-header-two.page-header");
    const onScroll = () => {
      if (!header) return;
      if (window.pageYOffset > 150) header.classList.add("is-sticky");
      else header.classList.remove("is-sticky");
    };
    window.addEventListener("scroll", onScroll);

    const onMobileNavToggle = (e: Event) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (!target.closest(".mobile-nav__toggler")) return;
      e.preventDefault();
      document.querySelector(".mobile-nav__wrapper")?.classList.toggle("expanded");
    };
    document.addEventListener("click", onMobileNavToggle);

    const mobileContainer = document.querySelector(".mobile-nav__container");
    const mainMenu = document.querySelector(".main-menu-two__main-menu-box > .main-menu__list");
    if (mobileContainer && mainMenu && !mobileContainer.innerHTML.trim()) {
      mobileContainer.innerHTML = mainMenu.outerHTML;

      const mobileScroll = document.querySelector(".mobile-nav__content") as HTMLElement | null;

      mobileContainer.querySelectorAll(".dropdown").forEach((dropdown) => {
        const anchor = dropdown.querySelector(":scope > a");
        const submenu = dropdown.querySelector(":scope > ul") as HTMLElement | null;
        if (!anchor || !submenu || anchor.querySelector("button")) return;

        const toggle = (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          const prevScroll = mobileScroll?.scrollTop ?? 0;
          const isOpen = dropdown.classList.toggle("is-open");
          anchor.classList.toggle("expanded", isOpen);
          button.classList.toggle("expanded", isOpen);

          // COA/MSDS nests the oil list under a panel wrapper — keep it visible when open
          if (dropdown.classList.contains("coa-msds-nav")) {
            dropdown
              .querySelectorAll<HTMLElement>(".coa-msds-root, .coa-msds-panel, .coa-msds-list-box, .coa-msds-scroll")
              .forEach((el) => {
                el.style.display = isOpen ? "block" : "";
              });

            if (!isOpen) {
              const searchInput = dropdown.querySelector<HTMLInputElement>(".coa-msds-search input");
              if (searchInput) {
                searchInput.value = "";
                searchInput.dispatchEvent(new Event("input", { bubbles: true }));
              }
            }
          }

          if (mobileScroll) {
            requestAnimationFrame(() => {
              mobileScroll.scrollTop = prevScroll;
            });
          }
        };

        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-label", "Toggle submenu");
        button.innerHTML = "<i class='fa fa-angle-down'></i>";
        button.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle(e);
        });
        anchor.addEventListener("click", toggle);
        anchor.appendChild(button);
      });

      // Mobile menu is an HTML clone — wire Products + COA/MSDS search without React handlers
      mobileContainer.querySelectorAll<HTMLElement>(".coa-msds-nav").forEach((nav) => {
        const input = nav.querySelector<HTMLInputElement>(".coa-msds-search input");
        const list = nav.querySelector<HTMLElement>(".coa-msds-scroll");
        if (!input || !list) return;

        let emptyRow = list.querySelector<HTMLElement>(".coa-msds-empty");
        if (!emptyRow) {
          emptyRow = document.createElement("li");
          emptyRow.className = "coa-msds-empty";
          emptyRow.innerHTML = "<span>No products found</span>";
          emptyRow.hidden = true;
          list.prepend(emptyRow);
        }

        const filterList = () => {
          const q = input.value.trim().toLowerCase();
          let visible = 0;
          list.querySelectorAll<HTMLElement>(":scope > li.coa-msds-direct").forEach((li) => {
            const label = (li.querySelector("span")?.textContent ?? "").toLowerCase();
            const match = !q || label.startsWith(q);
            li.classList.toggle("coa-msds-filtered-out", !match);
            if (match) visible += 1;
          });
          emptyRow!.hidden = visible > 0;
          emptyRow!.classList.toggle("coa-msds-filtered-out", visible > 0);
        };

        input.addEventListener("input", filterList);
        input.addEventListener("click", (e) => e.stopPropagation());
        input.addEventListener("keydown", (e) => e.stopPropagation());
      });

      // Close mobile Products submenu + drawer when a product link is clicked
      mobileContainer.querySelectorAll<HTMLAnchorElement>(".products-nav .coa-msds-scroll a[href]").forEach((link) => {
        link.addEventListener("click", () => {
          document.querySelector(".mobile-nav__wrapper")?.classList.remove("expanded");
          mobileContainer.querySelectorAll(".products-nav.is-open").forEach((dropdown) => {
            dropdown.classList.remove("is-open");
            dropdown.querySelector(":scope > a")?.classList.remove("expanded");
            dropdown.querySelector(":scope > a > button")?.classList.remove("expanded");
            dropdown
              .querySelectorAll<HTMLElement>(".coa-msds-root, .coa-msds-panel, .coa-msds-list-box, .coa-msds-scroll")
              .forEach((el) => {
                el.style.display = "";
              });
          });
        });
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onMobileNavToggle);
    };
  }, []);

  useEffect(() => {
    const fixTranslateLayout = () => {
      document.body.style.setProperty("top", "0", "important");
      document.body.style.setProperty("position", "static", "important");
      document.body.style.setProperty("margin-top", "0", "important");
      document.documentElement.style.setProperty("margin-top", "0", "important");

      document.querySelectorAll<HTMLElement>(".goog-te-banner-frame, iframe.goog-te-banner-frame").forEach((el) => {
        el.style.display = "none";
      });

      const combo = document.querySelector<HTMLSelectElement>("#google_translate_element .goog-te-combo");
      if (combo) {
        Array.from(combo.options).forEach((option) => {
          option.style.padding = "8px 12px";
        });
      }
    };

    fixTranslateLayout();

    const observer = new MutationObserver(fixTranslateLayout);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class", "style"] });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "lang", "dir"] });

    const onTranslateChange = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("#google_translate_element")) return;
      window.setTimeout(fixTranslateLayout, 100);
      window.setTimeout(fixTranslateLayout, 600);
    };
    document.addEventListener("change", onTranslateChange, true);

    const widgetTimer = window.setInterval(() => {
      if (document.querySelector("#google_translate_element .goog-te-combo")) {
        fixTranslateLayout();
        window.clearInterval(widgetTimer);
      }
    }, 300);

    return () => {
      observer.disconnect();
      document.removeEventListener("change", onTranslateChange, true);
      window.clearInterval(widgetTimer);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const isTouchUi = () =>
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchUi()) html.classList.add("is-touch");

    const protectIcons = () => {
      document
        .querySelectorAll(
          ".site-footer__social, .mobile-nav__social, .fab, .fas, .far, .fal, .fa, [class^='icon-'], [class*=' icon-']",
        )
        .forEach((el) => {
          el.classList.add("notranslate");
          el.setAttribute("translate", "no");
        });
    };

    const unwrapTranslateFonts = (root: ParentNode | null) => {
      if (!root) return;
      const nodes =
        root instanceof Element
          ? [root, ...Array.from(root.querySelectorAll("font, .goog-text-highlight"))]
          : Array.from((root as ParentNode).querySelectorAll("font, .goog-text-highlight"));

      nodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        if (node.closest("#google_translate_element, .skiptranslate, .goog-te-menu-frame, .goog-te-gadget")) {
          return;
        }
        if (node.tagName !== "FONT" && !node.classList.contains("goog-text-highlight")) return;
        const parent = node.parentNode;
        if (!parent) return;
        while (node.firstChild) parent.insertBefore(node.firstChild, node);
        parent.removeChild(node);
      });
    };

    let hoverTimer = 0;
    const dropStickyHover = () => {
      if (!isTouchUi()) return;
      html.classList.add("no-sticky-hover");
      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => {
        html.classList.remove("no-sticky-hover");
        const active = document.activeElement;
        if (active instanceof HTMLElement && active.matches("a, button, [role='button']")) {
          active.blur();
        }
      }, 450);
    };

    const onTap = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("#google_translate_element, .mobile-nav__toggler, .mobile-nav__wrapper")) return;
      const control = target.closest("a, button, [role='button']");
      unwrapTranslateFonts(control ?? target);
      window.requestAnimationFrame(dropStickyHover);
    };

    protectIcons();
    document.addEventListener("click", onTap, true);
    document.addEventListener("touchend", onTap, { capture: true, passive: true });

    return () => {
      document.removeEventListener("click", onTap, true);
      document.removeEventListener("touchend", onTap, true);
      window.clearTimeout(hoverTimer);
      html.classList.remove("no-sticky-hover");
    };
  }, [pathname]);

  useEffect(() => {
    const navText = [
      "<i class='fa fa-angle-left' aria-hidden='true'></i>",
      "<i class='fa fa-angle-right' aria-hidden='true'></i>",
    ];

    const configs: [string, object][] = [
      ["#product-carousel", { loop: false, rewind: true, margin: 30, nav: true, navText, dots: false, autoplay: true, autoplayTimeout: 5000, responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } } }],
      ["#industries-carousel", { loop: false, rewind: true, margin: 30, nav: true, navText, dots: false, autoplay: true, autoplayTimeout: 5000, responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 4 } } }],
      ["#cert-carousel", { loop: false, rewind: true, margin: 20, nav: true, navText, dots: false, autoplay: true, autoplayTimeout: 3000, responsive: { 0: { items: 2 }, 600: { items: 3 }, 1000: { items: 5 } } }],
    ];

    const labelOwlNav = () => {
      document.querySelectorAll<HTMLButtonElement>(".owl-nav button").forEach((btn) => {
        btn.removeAttribute("role");
        btn.setAttribute("aria-label", btn.classList.contains("owl-prev") ? "Previous" : "Next");
      });
    };

    const initOwl = () => {
      const $ = window.jQuery;
      if (!$) return false;
      if (!$?.fn?.owlCarousel) {
        if (!document.querySelector("script[data-owl]")) {
          const owl = document.createElement("script");
          owl.src = "/assets/vendors/owl-carousel/owl.carousel.min.js";
          owl.dataset.owl = "1";
          document.body.appendChild(owl);
        }
        return false;
      }

      let foundAny = false;
      configs.forEach(([selector, options]) => {
        const el = $(selector);
        if (el.length) {
          foundAny = true;
          if (!el.hasClass("owl-loaded")) el.owlCarousel(options);
        }
      });
      if (foundAny) {
        labelOwlNav();
        window.setTimeout(labelOwlNav, 0);
      }
      return foundAny;
    };

    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      const done = initOwl();
      if (done || attempts > 80) clearInterval(timer);
    }, 200);

    return () => clearInterval(timer);
  }, [pathname]);

  return null;
}
