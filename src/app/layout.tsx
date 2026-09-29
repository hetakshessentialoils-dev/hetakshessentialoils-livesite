import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { JsonLd } from "@/components/JsonLd";
import { LegacyInit } from "@/components/LegacyInit";
import { organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://hetakshessentialoils.com"),
  title: "Essential Oil Wholesale & Bulk Manufacturer in US",
  description:
    "Hetaksh Essential Oils is a global wholesale supplier and bulk manufacturer in the US, offering 100% pure, natural essential oils at competitive prices.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          id="site-fonts"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600;700&family=Poppins:ital,wght@0,400;0,500;0,600;1,400&display=optional"
          media="print"
          suppressHydrationWarning
        />
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/austry.css" />
        <link rel="stylesheet" href="/assets/css/austry-responsive.css" />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.getElementById('site-fonts');if(!l)return;function a(){l.media='all'}if(l.sheet)a();else l.addEventListener('load',a)})();",
          }}
        />
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
        <Script id="google-gtag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-TW8TGTNQVC');
            var s = document.createElement('script');
            s.async = true;
            s.src = 'https://www.googletagmanager.com/gtag/js?id=G-TW8TGTNQVC';
            document.head.appendChild(s);
          `}
        </Script>
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/intlTelInput.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
