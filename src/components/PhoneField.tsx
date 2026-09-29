"use client";

import { useEffect, useRef } from "react";
import { destroyPhoneInput, getPhoneWithDialCode, initPhoneInput } from "@/lib/intl-tel-input";

type PhoneFieldProps = {
  name?: string;
  required?: boolean;
  inputId?: string;
  countryInputName?: string;
  active?: boolean;
};

export function PhoneField({
  name = "phone",
  required = true,
  inputId,
  countryInputName = "country_name",
  active = true,
}: PhoneFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!active) return;
    const input = inputRef.current;
    if (!input) return;

    const tryInit = () => {
      if (!window.intlTelInput) return false;
      initPhoneInput(input);
      return true;
    };

    if (!tryInit()) {
      const timer = window.setInterval(() => {
        if (tryInit()) window.clearInterval(timer);
      }, 200);
      return () => window.clearInterval(timer);
    }

    return () => destroyPhoneInput(input);
  }, [active]);

  return (
    <>
      <input
        ref={inputRef}
        type="tel"
        id={inputId}
        className="phone form-control"
        placeholder="Phone Number"
        name={name}
        required={required}
      />
      <input ref={countryRef} type="hidden" name={countryInputName} defaultValue="" />
    </>
  );
}

export function readPhoneField(form: HTMLFormElement): { phone: string; country: string } {
  const input = form.querySelector<HTMLInputElement>("input.phone");
  if (!input) return { phone: "", country: "" };

  const { phone, country } = getPhoneWithDialCode(input);
  const countryInput = form.querySelector<HTMLInputElement>(
    'input[name="country_name"], input[name="country"]',
  );
  if (countryInput) countryInput.value = country;

  return { phone, country };
}
