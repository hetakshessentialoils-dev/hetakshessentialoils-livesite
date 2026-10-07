import { getCoaMsdsNav } from "@/lib/coa-msds-nav";

// Built once at build time — keeps the full product HTML data out of the client bundle.
export const dynamic = "force-static";

export function GET() {
  return Response.json(getCoaMsdsNav());
}
