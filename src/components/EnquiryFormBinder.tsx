"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { freshFormTime, submitEnquiryForm } from "@/lib/enquiry-form";
import { resolveEnquirySource } from "@/lib/enquiry-sources";
import { destroyPhoneInput, getPhoneWithDialCode, initPhoneInput } from "@/lib/intl-tel-input";

export function EnquiryFormBinder() {
  const pathname = usePathname();

  useEffect(() => {
    const forms = Array.from(
      document.querySelectorAll<HTMLFormElement>("form.send-form#page_form"),
    );

    const phoneInputs: HTMLInputElement[] = [];
    forms.forEach((form) => {
      form.querySelectorAll<HTMLInputElement>("input.phone").forEach((input) => {
        if (!phoneInputs.includes(input)) phoneInputs.push(input);
      });
    });

    const initPhones = () => {
      if (!window.intlTelInput) return false;
      phoneInputs.forEach((input) => initPhoneInput(input));
      return true;
    };

    let phoneTimer: number | undefined;
    if (!initPhones()) {
      phoneTimer = window.setInterval(() => {
        if (initPhones()) window.clearInterval(phoneTimer);
      }, 200);
    }

    const handlers: { form: HTMLFormElement; fn: (e: Event) => void }[] = [];

    forms.forEach((form) => {
      const fn = async (e: Event) => {
        e.preventDefault();

        const phoneInput = form.querySelector<HTMLInputElement>("input.phone");
        const countryInput = form.querySelector<HTMLInputElement>(
          'input[name="country_name"], input[name="page_country_name"]',
        );
        let phone = "";
        let country = "";

        if (phoneInput) {
          const parsed = getPhoneWithDialCode(phoneInput);
          phone = parsed.phone;
          country = parsed.country;
          if (countryInput) countryInput.value = country;
        }

        const data = new FormData(form);
        const msgEl = form.querySelector<HTMLElement>("#thankYouMessage");
        const submitBtn = form.querySelector<HTMLInputElement>('input[type="submit"]');

        if (submitBtn) submitBtn.disabled = true;
        if (msgEl) {
          msgEl.classList.remove("hidden");
          msgEl.textContent = "Submitting...";
        }

        try {
          const result = await submitEnquiryForm({
            name: String(data.get("name") || ""),
            email: String(data.get("email") || ""),
            phone,
            country,
            message: String(data.get("message") || ""),
            source: resolveEnquirySource(
              String(data.get("webpage") || data.get("source") || ""),
              pathname,
            ),
            website_url: String(data.get("website_url") || ""),
            form_time: freshFormTime(),
          });
          if (result.ok) form.reset();
          if (msgEl) msgEl.textContent = result.message;
        } catch (err) {
          if (msgEl)
            msgEl.textContent =
              err instanceof Error ? err.message : "An error occurred. Please try again.";
        } finally {
          if (submitBtn) submitBtn.disabled = false;
        }
      };

      form.addEventListener("submit", fn);
      handlers.push({ form, fn });
    });

    return () => {
      if (phoneTimer) window.clearInterval(phoneTimer);
      handlers.forEach(({ form, fn }) => form.removeEventListener("submit", fn));
      phoneInputs.forEach((input) => destroyPhoneInput(input));
    };
  }, [pathname]);

  return null;
}
