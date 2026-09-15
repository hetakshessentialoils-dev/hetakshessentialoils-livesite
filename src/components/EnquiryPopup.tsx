"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { freshFormTime, submitEnquiryForm } from "@/lib/enquiry-form";
import { enquirySourceFromPath } from "@/lib/enquiry-sources";
import { PhoneField, readPhoneField } from "@/components/PhoneField";

export function EnquiryPopup() {
  const pathname = usePathname();
  const enquirySource = enquirySourceFromPath(pathname);
  const [active, setActive] = useState(false);
  const [closing, setClosing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const formTimeRef = useRef<number>(freshFormTime());

  useEffect(() => {
    if (active) formTimeRef.current = freshFormTime();
  }, [active]);

  function openPopup() {
    setClosing(false);
    setMessage("");
    setActive(true);
  }

  function closePopup() {
    setClosing(true);
    window.setTimeout(() => {
      setActive(false);
      setClosing(false);
      setMessage("");
    }, 600);
  }

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
        source: enquirySource,
        website_url: String(data.get("website_url") || ""),
        form_time: freshFormTime(),
      });
      setMessage(result.message);
      if (result.ok) form.reset();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openPopup}
        className="enquiry main-btn-rect popup-btn thm-btn"
        data-popup="popup-reg"
      >
        Enquire Now
      </button>
      <button
        type="button"
        onClick={openPopup}
        className="mob-enquiry main-btn-rect popup-btn thm-btn"
        data-popup="popup-reg"
      >
        Enquire Now
      </button>

      <div
        id="popup-reg"
        className={`popup${active ? " active" : ""}${closing ? " closing" : ""}`}
      >
        <div className="popup-content">
          <div className="event-header">
            <h4 className="modal-title">Enquire Now</h4>
          </div>

          <form id="contact_form" onSubmit={handleSubmit} className="contact_form send-form">
            <div className="row">
              <div className="form-group col-sm-12">
                <input
                  type="text"
                  name="name"
                  id="popup_name"
                  className="form-control"
                  placeholder=" Company Name"
                  required
                />
                <label htmlFor="popup_name">
                  <i className="fa fa-user"></i>
                </label>
                <input type="hidden" name="webpage" value={enquirySource} />
                <input type="hidden" name="website_url" value="" />
              </div>

              <div className="form-group col-sm-12">
                <input
                  type="email"
                  name="email"
                  id="popup_email"
                  className="form-control"
                  placeholder=" Email"
                  required
                />
                <label htmlFor="popup_email">
                  <i className="fa fa-envelope"></i>
                </label>
              </div>

              <div className="form-group col-sm-12">
                <PhoneField inputId="popup_phone" />
              </div>

              <div className="form-group col-sm-12">
                <textarea className="form-control" name="message" placeholder="Message" />
              </div>
            </div>

            <input
              type="submit"
              id="form-submit"
              value={loading ? "Submitting..." : "Submit"}
              className="main-btn-rect d-block mx-auto"
              disabled={loading}
            />
            <h4
              id="thankYouMessagePopup"
              className={`h4 text-center${message ? "" : " hidden"}`}
              style={{
                marginTop: 15,
                color: message.includes("not available") ? "#856404" : "green",
                display: message ? "block" : "none",
              }}
            >
              {message}
            </h4>
            <div className="clearfix" />
          </form>

          <button
            type="button"
            className="fade-out main-btn-circle"
            onClick={closePopup}
            aria-label="Close"
          >
            ╳
          </button>
        </div>
      </div>
    </>
  );
}
