import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { JsonLd } from "@/components/JsonLd";
import { LegacyInit } from "@/components/LegacyInit";
import { organizationJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://hetakshessentialoils.com"),
  title: {
    default: "Essential Oil Wholesale, Bulk Supplier & Manufacturer in US",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Hetaksh Essential Oils – Global Essential Oil Wholesale Supplier & Bulk Manufacturer in US, trusted for 100% pure, natural oils at competitive prices.",
  icons: { icon: "/favicon.png" },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-IN": "/",
      "x-default": "/",
    },
  },
  verification: {
    google: "C8-1wgXQ_brvk8g7S2o-1vknXVAfHZCtwk7kVUO8KyE",
    other: { "msvalidate.01": "35B384BD379FD5A3D6F570384D54A970" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TW8TGTNQVC"
          strategy="beforeInteractive"
        />
        <Script id="google-gtag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TW8TGTNQVC');
          `}
        </Script>
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/vendors/austry-icons/style.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/austry.css" />
        <link rel="stylesheet" href="/assets/css/austry-responsive.css" />
        <link rel="stylesheet" href="/assets/css/translate-overrides.css" />
        <link rel="stylesheet" href="/assets/css/faq-page.css" />
        <link rel="stylesheet" href="/assets/css/blog-page.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/css/intlTelInput.css"
        />
      </head>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <SiteShell>{children}</SiteShell>
        <div className="whats-app-icon">
          <a
            href="https://wa.me/919871888705"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/WhatsAppButtonGreenSmall.png"
              alt="Chat on WhatsApp"
              title="Chat on WhatsApp"
            />
          </a>
        </div>
        <LegacyInit />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement(
              { pageLanguage: "en", autoDisplay: false },
              "google_translate_element"
            );
          };`}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/owl-carousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/intlTelInput.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
