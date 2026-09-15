"use client";

import { FormEvent, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { freshFormTime, submitEnquiryForm } from "@/lib/enquiry-form";
import { resolveEnquirySource } from "@/lib/enquiry-sources";
import { PhoneField, readPhoneField } from "@/components/PhoneField";

type ContactFormProps = {
  source?: string;
  formId?: string;
};

export function ContactForm({ source, formId }: ContactFormProps) {
  const pathname = usePathname();
  const reactId = useId();
  const idPrefix = formId || reactId.replace(/:/g, "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const { phone, country } = readPhoneField(form);
    const data = new FormData(form);

    try {
      const result = await submitEnquiryForm({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone,
        country,
        message: String(data.get("message") || ""),
        source: resolveEnquirySource(source, pathname),
        website_url: String(data.get("website_url") || ""),
        form_time: freshFormTime(),
      });
      setMessage(result.message);
      if (result.ok) form.reset();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to submit enquiry.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit} className="contact_form send-form">
        <input type="hidden" name="website_url" value="" />
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id={`${idPrefix}-name`}
                className="form-control"
                placeholder=" Company Name"
                required
              />
              <label htmlFor={`${idPrefix}-name`}>
                <i className="fa fa-user"></i>
              </label>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <input
                type="email"
                name="email"
                id={`${idPrefix}-email`}
                className="form-control"
                placeholder=" Email"
                required
              />
              <label htmlFor={`${idPrefix}-email`}>
                <i className="fa fa-envelope"></i>
              </label>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="form-group">
              <PhoneField inputId={`${idPrefix}-phone`} />
            </div>
          </div>

          <div className="form-group col-sm-12">
            <textarea className="form-control" name="message" placeholder="Message" />
          </div>
        </div>

        <button type="submit" disabled={loading} className="main-btn-rect lo-btn">
          {loading ? "Submitting..." : "Submit"}
        </button>
        {message && (
          <p className="mt-3" style={{ color: message.includes("not available") ? "#856404" : "green" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
