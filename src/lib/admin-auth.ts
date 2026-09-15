import { createHmac, timingSafeEqual } from "crypto";

const ADMIN_USERNAME = "Test123";
const ADMIN_PASSWORD = "Test@123";
const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET || "hetaksh-admin-dev-secret-change-in-prod";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function sign(payload: string): string {
  return createHmac("sha256", SESSION_SECRET).update(payload).digest("base64url");
}

export function createSessionToken(): string {
  const payload = Buffer.from(
    JSON.stringify({ user: ADMIN_USERNAME, exp: Date.now() + SESSION_TTL_MS }),
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | null): boolean {
  if (!token) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload);
  try {
    if (expected.length !== signature.length) return false;
    if (!timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) return false;
  } catch {
    return false;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      user?: string;
      exp?: number;
    };
    return data.user === ADMIN_USERNAME && typeof data.exp === "number" && data.exp > Date.now();
  } catch {
    return false;
  }
}

export function verifyAdminCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export function getAuthToken(request: Request): string | null {
  const header = request.headers.get("authorization");
  if (header?.startsWith("Bearer ")) return header.slice(7);
  return null;
}

export function requireAdmin(request: Request): boolean {
  return verifySessionToken(getAuthToken(request));
}
