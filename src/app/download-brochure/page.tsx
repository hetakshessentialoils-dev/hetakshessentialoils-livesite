import { Breadcrumbs } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const BROCHURE_PDF = "/assets/images/certificate/hetaksh-oils-e-brochure.pdf";

export const metadata = buildMetadata({
  title: "Download Product Brochure Now | Hetaksh Essential Oils",
  description:
    "Download the Hetaksh Essential Oils brochure today to explore our quality oil range, bulk supply options, and reliable B2B sourcing solutions.",
  keywords: "hetaksh brochure, essential oils catalog, carrier oils brochure",
  path: "/download-brochure",
});

export default function DownloadBrochurePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Download Brochure", href: "/download-brochure" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} titleAs="h1" />

      <section className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-10 col-md-12 mx-auto text-center">
              <iframe
                src={BROCHURE_PDF}
                width="100%"
                height={600}
                style={{ border: "1px solid #ddd" }}
                title="Hetaksh Essential Oils Brochure"
              />

              <div className="about-one__btn-box mt-4">
                <a href={BROCHURE_PDF} download className="about-one__btn thm-btn">
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
