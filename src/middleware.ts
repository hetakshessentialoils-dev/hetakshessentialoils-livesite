import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === "/search" && !searchParams.get("q")?.trim()) {
    const home = request.nextUrl.clone();
    home.pathname = "/";
    home.search = "";
    return NextResponse.redirect(home, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/search"],
};
