import type { NextConfig } from "next";
import { LEGACY_REDIRECTS } from "./src/lib/constants";

const legacyRedirects = Object.entries(LEGACY_REDIRECTS).flatMap(([source, destination]) => [
  { source: `/${source}`, destination, permanent: true as const },
  { source: `/${source}/`, destination, permanent: true as const },
]);

// Browser cannot resolve *.up.railway.app on some networks/DNS.
// Proxy /backend/* through Vercel → Railway (server-side DNS works).
const API_ORIGIN =
  process.env.API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:4000";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "hetakshessentialoils.com" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: `${API_ORIGIN.replace(/\/$/, "")}/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      ...legacyRedirects,
      {
        source: "/products/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/products/:category/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:slug.php",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
