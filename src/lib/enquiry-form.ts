import type { EnquiryPayload } from "./types";
import { submitEnquiry } from "./api";

/** Set to true once GMAIL_USER and GMAIL_APP_PASSWORD are in .env.local / Vercel */
export const ENQUIRY_SUBMISSION_ENABLED = true;

export const ENQUIRY_DISABLED_MESSAGE =
  "Online enquiry submission is not available yet. Please contact us at sales@hetakshessentialoils.com or +91 9871-888-705.";

export const ENQUIRY_SUCCESS_MESSAGE = "Thank you! Your enquiry has been submitted.";

export function freshFormTime(): number {
  return Math.floor(Date.now() / 1000) - 5;
}

export async function submitEnquiryForm(
  payload: EnquiryPayload,
): Promise<{ ok: true; message: string } | { ok: false; message: string }> {
  if (!ENQUIRY_SUBMISSION_ENABLED) {
    return { ok: false, message: ENQUIRY_DISABLED_MESSAGE };
  }

  try {
    await submitEnquiry(payload);
    return { ok: true, message: ENQUIRY_SUCCESS_MESSAGE };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to submit enquiry.";
    if (msg.includes("Too many")) {
      return { ok: false, message: "Too many attempts. Please wait a minute and try again." };
    }
    if (msg.includes("Spam")) {
      return { ok: false, message: "Could not submit. Please try again." };
    }
    return { ok: false, message: msg };
  }
}

export function buildEnquiryPayload(
  form: HTMLFormElement,
  overrides: Partial<EnquiryPayload> = {},
): EnquiryPayload {
  const data = new FormData(form);
  return {
    name: String(data.get("name") || ""),
    email: String(data.get("email") || ""),
    phone: String(data.get("phone") || ""),
    country: String(data.get("country_name") || data.get("country") || ""),
    message: String(data.get("message") || ""),
    source: String(data.get("webpage") || data.get("source") || "website"),
    website_url: String(data.get("website_url") || ""),
    form_time: freshFormTime(),
    ...overrides,
  };
}
