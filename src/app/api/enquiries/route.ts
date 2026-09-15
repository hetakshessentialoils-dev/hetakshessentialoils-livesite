import { NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/enquiry-email";
import { clientIp, isRateLimited } from "@/lib/enquiry-rate-limit";
import type { EnquiryPayload } from "@/lib/types";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parsePayload(body: unknown): EnquiryPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const email = String(data.email || "").trim();
  const name = String(data.name || "").trim();

  if (!name || name.length < 2) return null;
  if (!email || !isValidEmail(email)) return null;

  return {
    name,
    email,
    phone: data.phone ? String(data.phone).trim() : undefined,
    country: data.country ? String(data.country).trim() : undefined,
    message: data.message ? String(data.message).trim() : undefined,
    source: data.source ? String(data.source).trim() : "website",
    website_url: data.website_url ? String(data.website_url) : undefined,
    form_time:
      data.form_time !== undefined && data.form_time !== null
        ? Number(data.form_time)
        : undefined,
  };
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (body && typeof body === "object" && (body as Record<string, unknown>).website_url) {
    return NextResponse.json({ error: "Spam detected" }, { status: 400 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  if (payload.form_time !== undefined) {
    const elapsed = Math.floor(Date.now() / 1000) - payload.form_time;
    if (elapsed < 3 || elapsed > 3600) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }
  }

  const { website_url: _honeypot, form_time: _time, ...emailData } = payload;

  try {
    await sendEnquiryEmail(emailData);
  } catch (err) {
    console.error("Failed to send enquiry email:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send enquiry" },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { message: "Enquiry submitted successfully" },
    { status: 201 },
  );
}
