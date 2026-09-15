import Link from "next/link";
import { Breadcrumbs } from "@/components/FAQSection";
import { CounterStats } from "@/components/CounterStats";
import { JsonLd } from "@/components/JsonLd";
import { WhyHetakshSection } from "@/components/WhyHetakshSection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About us - B2B Supplier of Essential & Carrier Oils",
  description:
    "Learn about Hetaksh Essential Oils, a global B2B essential and carrier oil wholesale supplier with ISO 9001:2015 and GMP accreditation serving more than 40 countries.",
  keywords: "about hetaksh essential oils, essential oil manufacturer, bulk oil exporter",
  path: "/about",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 text-center mx-auto">
              <div className="section-title text-center">
                <h1 className="section-title__title">Hetaksh Essential Oils</h1>
                <h4 className="section-title__tagline">
                  Customer satisfaction is our prime focus - Our Pledge
                </h4>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__left wow slideInLeft animated">
                <p className="about-one__text">
                  Welcome to Hetaksh Essential Oils, United States leading B2B supplier of essential
                  and carrier oils. We are ISO 9001:2015 and GMP accredited, as well as a
                  government-recognized Export House, serving customers in more than 40 countries worldwide. Leading
                  pharmaceutical, flavor, fragrance, personal care, tobacco, ayurvedic, and FMCG
                  firms are among our renowned clients. Our products are sourced directly from farmers
                  and are available in grades complying with applicable IP, BP, EP, USP, and JP
                  specifications where supported by individual product documentation.
                  Furthermore, we provide the ability to tailor items to your individual needs.
                  Partner with us for premium-quality oils and great service that is tailored to your
                  specific requirements. <br />
                  Your satisfaction is our major goal at Hetaksh, which has helped us establish
                  ourselves as a reliable global exporter of a wide range of oils. With over a decade
                  of industry experience, we have unrivalled skills in understanding your specific
                  demands and customizing our 100% natural goods to fit them precisely. Our
                  certifications demonstrate our dedication to quality, as we follow strict processes
                  for quality control to ensure that every product we deliver not only meets but also
                  surpasses industry standards. We take pride in being your dependable partner for
                  premium oils customized to your specific needs.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__right wow slideInRight animated">
                <div className="about-one__img-box">
                  <div className="about-one__img">
                    <img
                      src="/assets/images/resources/Essential-Oils.webp"
                      alt="Natural Essential Oils"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefit bg-color">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto text-center mb-3">
              <div className="section-title text-center">
                <h2 className="section-title__title">How we can benefit you</h2>
              </div>
              <p>
                We guarantee unmatched excellence and unwavering reassurance in all aspects of our
                activities at Hetaksh. Hetaksh Essential Oils is more than just a supplier; we are
                your reliable partner in achieving success and satisfaction in the essential oil
                industry. Discover how we can help you now by exploring our extensive variety of
                products and services.
              </p>
            </div>
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="about-one__img-box wow">
                  <div className="about-one__img">
                    <img
                      src="/assets/images/resources/Pure-CarrierOils.webp"
                      alt="Pure Carrier Oils"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <h4 className="prduct-details__title-4">Premium quality assurance:</h4>
              <p>
                We are committed to developing and providing essential oils of superior quality that
                will benefit you the most. Our rigorous quality controls ensure that the products you
                get meet or surpass industry standards.
              </p>
              <h4 className="prduct-details__title-4">Seamless Experience:</h4>
              <p>
                Our dedicated staff is here to ensure that your experience with us is easy and
                trouble-free.
              </p>
              <h4 className="prduct-details__title-4">Trusted Brand:</h4>
              <p>
                Our enormous global presence reflects the trust and confidence that clients from all
                around the world have placed in us. When you choose to work with us, you can
                anticipate consistent assistance, unwavering assurance, and access to high-quality
                oils that will be the foundation of your success and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-two">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center mx-auto">
              <div className="counter-two__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title">
                    Look into our essential oil insights as experience improves with data
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <CounterStats />
            </div>
          </div>
        </div>
      </section>

      <WhyHetakshSection headingTag="h2" />

      <section className="downloadbro">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 text-center">
              <div className="section-title">
                <h2 className="section-title__title">
                  Take a journey through our brochure to learn about our unique Essential oils &
                  Carrier Oils collection!
                </h2>
              </div>
              <div className="downloadbro__btn-box">
                <Link href="/download-brochure" className="downloadbro__btn thm-btn">
                  Download Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
