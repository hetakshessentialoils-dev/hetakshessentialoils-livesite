import nodemailer from "nodemailer";
import { resolveEnquirySource } from "./enquiry-sources";
import type { EnquiryPayload } from "./types";

const SALES_EMAIL = "sales@hetakshessentialoils.com";

function field(label: string, value: string): string {
  return `${label.padEnd(9)}: ${value}`;
}

export function buildEnquiryMail(data: {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  country?: string | null;
  message?: string | null;
  source?: string | null;
  pathname?: string | null;
}): { subject: string; text: string } {
  const enquiry = resolveEnquirySource(data.source, data.pathname);

  return {
    subject: enquiry,
    text: [
      "New Enquiry Received",
      "=======================",
      "",
      field("Name", data.name?.trim() || "—"),
      field("Email", data.email?.trim() || "—"),
      field("Mobile", data.phone?.trim() || "—"),
      field("Country", data.country?.trim() || "—"),
      field("Enquiry", enquiry),
      field("Message", data.message?.trim() || "—"),
    ].join("\n"),
  };
}

export async function sendEnquiryEmail(data: EnquiryPayload): Promise<void> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.ENQUIRY_TO_EMAIL || SALES_EMAIL;
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL || SALES_EMAIL;

  if (!gmailUser || !gmailPass) {
    throw new Error(
      "Email is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD to .env.local",
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const { subject, text } = buildEnquiryMail(data);

  await transporter.sendMail({
    from: `"Hetaksh Essential Oils" <${fromEmail}>`,
    to: toEmail,
    replyTo: data.email,
    subject,
    text,
  });
}
