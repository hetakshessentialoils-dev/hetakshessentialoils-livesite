import { Breadcrumbs } from "@/components/FAQSection";
import { DownloadBrochureSection } from "@/components/DownloadBrochureSection";
import { WhyHetakshSection } from "@/components/WhyHetakshSection";
import { JsonLd } from "@/components/JsonLd";
import { INDUSTRY_SECTIONS } from "@/lib/legacy-assets";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Supplier for Pharma, Nutraceuticals & Cosmetics",
  description:
    "Hetaksh Essential Oils serves cosmetics, pharmaceutical, nutraceutical, crop protection, and veterinary industries.",
  keywords: "essential oils for cosmetics, pharma grade oils, nutraceutical ingredients",
  path: "/industries-we-serve",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Industry we use", href: "/industries-we-serve" },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      {INDUSTRY_SECTIONS.map((section, index) => {
        const contentFirst = index % 2 === 0;
        const sectionClass =
          index % 2 === 1 ? "single-product-section bg-color" : "single-product-section bg-color2";

        return (
          <section key={section.title} className={sectionClass}>
            <div className="container">
              <div className="single-details__content">
                <div className="row">
                  {contentFirst ? (
                    <>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="product-content-left">
                          <div className="wow slideInLeft animated">
                            <h2 className="section-title__title">{section.title}</h2>
                            <p className="about-one__text">{section.text}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="product-content-right">
                          <div className="about-one__img-box wow slideInRight animated">
                            <div className="about-one__img">
                              <img src={section.image} alt={section.title} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="product-content-left">
                          <div className="about-one__img-box wow slideInLeft animated">
                            <div className="about-one__img">
                              <img src={section.image} alt={section.title} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="product-content-right">
                          <div className="wow slideInRight animated">
                            <h2 className="section-title__title">{section.title}</h2>
                            <p className="about-one__text">{section.text}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <WhyHetakshSection headingTag="h2" />
      <DownloadBrochureSection />
    </>
  );
}
