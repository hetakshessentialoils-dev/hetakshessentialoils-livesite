/** Simple in-memory rate limit for enquiry API (per server instance). */
const hits = new Map<string, number[]>();

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const timestamps = (hits.get(key) || []).filter((t) => t > windowStart);

  if (timestamps.length >= MAX_PER_WINDOW) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return false;
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}
