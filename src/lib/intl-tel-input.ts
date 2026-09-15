export type IntlTelInputInstance = {
  getSelectedCountryData: () => { name: string; dialCode: string; iso2: string };
  setCountry: (code: string) => void;
  destroy: () => void;
};

declare global {
  interface Window {
    intlTelInput?: (
      input: HTMLInputElement,
      options: {
        utilsScript?: string;
        placeholder?: string;
        separateDialCode?: boolean;
      },
    ) => IntlTelInputInstance;
  }
}

const itiMap = new WeakMap<HTMLInputElement, IntlTelInputInstance>();

const UTILS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js";

export function initPhoneInput(input: HTMLInputElement): IntlTelInputInstance | null {
  if (!window.intlTelInput) return null;
  if (itiMap.has(input)) return itiMap.get(input)!;

  const iti = window.intlTelInput(input, {
    utilsScript: UTILS_URL,
    placeholder: "Phone Number",
    separateDialCode: true,
  });
  itiMap.set(input, iti);

  const onInput = () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 10);
  };
  input.addEventListener("input", onInput);

  fetch("https://ipinfo.io/json")
    .then((r) => r.json())
    .then((data: { country?: string }) => {
      if (data.country) iti.setCountry(data.country);
    })
    .catch(() => {});

  return iti;
}

export function getPhoneWithDialCode(input: HTMLInputElement): {
  phone: string;
  country: string;
} {
  const iti = itiMap.get(input);
  const local = input.value.replace(/\D/g, "").slice(0, 10);

  if (!iti) {
    return { phone: local, country: "" };
  }

  const selected = iti.getSelectedCountryData();
  return {
    phone: local ? `+${selected.dialCode}${local}` : "",
    country: selected.name,
  };
}

export function destroyPhoneInput(input: HTMLInputElement): void {
  const iti = itiMap.get(input);
  if (iti) {
    iti.destroy();
    itiMap.delete(input);
  }
}
