import Link from "next/link";
import { getCategories } from "@/lib/api";
import { getHomepageBlogs } from "@/lib/blog-api.server";
import { getLatestPosts } from "@/lib/blog-tags.server";
import { HOMEPAGE_FAQS } from "@/lib/constants";
import {
  CATEGORY_IMAGES,
  CERTIFICATE_CAROUSEL,
  INDUSTRY_ITEMS,
  PROCESS_STEPS,
} from "@/lib/legacy-assets";
import { FAQSection } from "@/components/FAQSection";
import { HomeHeroCarousel } from "@/components/HomeHeroCarousel";
import { WhyHetakshSection } from "@/components/WhyHetakshSection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Essential Oil Wholesale & Bulk Manufacturer in US",
  description:
    "Hetaksh Essential Oils is a global wholesale supplier and bulk manufacturer in the US, offering 100% pure, natural essential oils at competitive prices.",
  keywords: "essential oils wholesale, bulk essential oils, carrier oils supplier, hetaksh essential oils",
  path: "/",
});

export const revalidate = 3600;

export default async function HomePage() {
  const categories = await getCategories();
  const homepageBlogs = await getHomepageBlogs();
  const featured = homepageBlogs[0];
  const sidePosts = await getLatestPosts(featured?.slug, 3);

  return (
    <>
      <JsonLd data={faqJsonLd(HOMEPAGE_FAQS)} />

      <HomeHeroCarousel />

      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-one__left wow slideInLeft animated">
                <div className="section-title text-left">
                  <h1 className="section-title__title">Hetaksh Essential Oils</h1>
                  <h2 className="section-title__tagline">
                    Dedicated to quality and customer satisfaction - Our Pledge
                  </h2>
                </div>
                <p className="about-one__text">
                  Welcome to Hetaksh Essential Oils, a premier B2B supplier of essential oils and
                  carrier oils serving the United States/India. We are a government-recognized Export
                  House serving customers in more than 40+ countries worldwide. Our clientele
                  includes leading pharmaceutical, flavor, fragrance, personal care, tobacco,
                  Ayurvedic, and FMCG companies. We supply products in grades complying with
                  applicable IP, BP, EP, USP, and JP specifications, where supported by the
                  individual product documentation.
                </p>
                <br />
                <p className="about-one__text" style={{ color: "#233539" }}>
                  <b>
                    COA and MSDS documents are available for applicable products and can be
                    accessed from their respective product pages.
                  </b>
                </p>
                <div className="about-one__btn-box">
                  <Link href="/about" className="about-one__btn thm-btn">
                    Discover more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="about-one__img-box wow slideInRight animated">
                  <div className="about-one__img">
                    <img src="/assets/images/resources/essential-oil-wholesale.webp" alt="Essential Oil Wholesale" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-six bg-color">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Popular Product Categories</h2>
          </div>
          <div className="owl-carousel owl-theme" id="product-carousel">
            {(categories || []).map((category) => (
              <div key={category.id} className="project-six__single">
                <Link href={`/${category.slug}`}>
                  <div className="project-six__img">
                    <img
                      src={CATEGORY_IMAGES[category.slug] || CATEGORY_IMAGES["essential-oils"]}
                      alt={category.name}
                    />
                  </div>
                  <div className="project-six__content">
                    <h3 className="project-six__title">{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-one-2 bg-color2">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Our Working Process</h2>
          </div>
          <div className="row">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.title} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 wow fadeInUp animated mt-3">
                <Link href="/working-process">
                  <div className={`process-one__single ${index < 3 ? "p-bg-1" : ""}`}>
                    <span>
                      <img src={step.image} alt={step.title} />
                    </span>
                    <h4 className="process-one__title">{step.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyHetakshSection />

      <section className="Industries bg-color2">
        <div className="container">
          <div className="section-title text-center">
            <h4 className="section-title__title">Industries We Serve</h4>
          </div>
          <div className="owl-carousel owl-theme" id="industries-carousel">
            {INDUSTRY_ITEMS.map((item) => (
              <div key={item.title} className="Industries__single">
                <Link href={item.href}>
                  <div className="Industries__img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="Industries__content">
                    <h3 className="Industries__title">{item.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="downloadbro">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 text-center">
              <div className="section-title">
                <h3 className="section-title__title">
                  Take a journey through our brochure to learn about our unique Essential Oils &
                  Carrier Oils collection!
                </h3>
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

      <section className="brand-two bg-color">
        <div className="container">
          <div className="section-title text-center mb-4">
            <h3 className="section-title__title">Our Certifications</h3>
          </div>
          <div className="owl-carousel owl-theme" id="cert-carousel">
            {CERTIFICATE_CAROUSEL.map((cert) => (
              <div key={cert.src} className="item">
                <div className="logo-box">
                  <img src={cert.src} alt={cert.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-color2">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 wow fadeInUp animated">
              <div className="section-title">
                <h3 className="section-title__title">Latest News & Blog</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7 wow fadeInUp animated">
              {featured && (
                <div className="news-two__left">
                  <div className="news-two__left-img">
                    {featured.featuredImageUrl && (
                      <img src={featured.featuredImageUrl} alt={featured.title} />
                    )}
                    <div className="news-two__left-img-content">
                      <h3 className="news-two__left-title">
                        <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-xl-5 wow fadeInUp animated">
              <div className="news-two__right">
                <ul className="list-unstyled news-two__list">
                  {sidePosts.map((post) => (
                    <li key={post.id}>
                      <div className="news-two__single">
                        {post.featuredImageUrl && (
                          <div className="news-two__img">
                            <img src={post.featuredImageUrl} alt={post.title} />
                          </div>
                        )}
                        <div className="news-two__content">
                          <h3 className="news-two__title">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={HOMEPAGE_FAQS} />
    </>
  );
}
