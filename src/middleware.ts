import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LEGACY_REDIRECTS } from "@/lib/constants";

function legacyDestination(pathname: string): string | null {
  const file = pathname.replace(/^\//, "").replace(/\/$/, "").toLowerCase();
  if (!file.endsWith(".php")) return null;
  if (LEGACY_REDIRECTS[file]) return LEGACY_REDIRECTS[file];
  const slug = file.replace(/\.php$/i, "");
  return slug ? `/${slug}` : "/";
}

export function middleware(request: NextRequest) {
  const destination = legacyDestination(request.nextUrl.pathname);
  if (!destination) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|assets/|backend/).*)"],
};
