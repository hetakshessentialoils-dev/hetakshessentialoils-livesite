import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { getProductFaqs } from "@/data/product-faqs";
import { createOutlineHeadings } from "@/lib/heading-outline";
import type { ProductLanding as ProductLandingData } from "@/lib/types";

export function ProductLanding({ data }: { data: ProductLandingData }) {
  const faqs = getProductFaqs(data.slug);
  const outline = createOutlineHeadings();
  const hasVariants = Boolean(data.variants?.length);
  const variantHeadings = hasVariants ? data.variants!.map(() => outline.next()) : [];
  const ManufacturerHeading = hasVariants ? null : outline.next();
  const DocumentsHeading = outline.next();
  const WholesaleHeading = outline.next();
  const UspHeading = outline.next();
  const FaqHeading = faqs?.length ? outline.next() : "h4";

  return (
    <>
      <section className="single-page-header dark">
        <div id={data.headerBgId} className="page-header-bg" />
        <div className="container">
          <div className="single-header__inner">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-6">
                <div className="about-one__left wow slideInLeft animated">
                  <h1 className="section-title__title">{data.title}</h1>
                  {data.subtitle && <p className="mb-2">{data.subtitle}</p>}
                  {data.intro.map((p, i) => (
                    <p
                      key={i}
                      className="about-one__text"
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                  <p className="mb-5">{data.packaging}</p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6">
                <div className="form-box">
                  <p className="section-title__title">{data.formTitle}</p>
                  <ContactForm source={data.enquirySource} formId={`landing-${data.slug}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-3 pb-3 bg-color">
        <div className="container">
          <div className="row justify-content-center">
            {data.grades.map((g, i) => (
              <div key={i} className={data.gradeColClass}>
                <div className="heading-box">
                  <p>{g.title}</p>
                  <p className="mb-2">{g.spec}</p>
                </div>
                <div className="product__btn-box">
                  {g.coa && (
                    <a className="product__btn thm-btn" href={g.coa} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-download" aria-hidden="true" /> COA
                    </a>
                  )}
                  {g.msds && (
                    <a className="product__btn thm-btn thm-btn2" href={g.msds} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-download" aria-hidden="true" /> MSDS
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.variants?.length
        ? data.variants.map((variant, index) => {
            const contentLeft = index % 2 === 1;
            const VariantHeading = variantHeadings[index];
            const imageCol = (
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="product-content-left landing-variant__media">
                  <div
                    className={`about-one__img-box wow ${contentLeft ? "slideInRight" : "slideInLeft"} animated`}
                  >
                    <div className="product__img product__img--variant">
                      <img src={variant.image} alt={variant.imageAlt} />
                    </div>
                  </div>
                </div>
              </div>
            );
            const textCol = (
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="product-content-right landing-variant__copy">
                  <div className="wow slideInRight animated">
                    <VariantHeading className="section-title__title">{variant.heading}</VariantHeading>
                    {variant.paragraphs.map((p, i) => (
                      <div
                        key={i}
                        className="landing-variant__block mb-3"
                        dangerouslySetInnerHTML={{ __html: p }}
                      />
                    ))}
                    {(variant.coa || variant.msds) && (
                      <div className="product__btn-box mt-3">
                        {variant.coa && (
                          <a
                            className="product__btn thm-btn"
                            href={variant.coa}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-download" aria-hidden="true" /> COA
                          </a>
                        )}
                        {variant.msds && (
                          <a
                            className="product__btn thm-btn thm-btn2"
                            href={variant.msds}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-download" aria-hidden="true" /> MSDS
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
            return (
              <section
                key={variant.heading}
                className={`single-product-section landing-variant-section ${index % 2 === 0 ? "bg-color2" : "bg-color"}`}
              >
                <div className="container">
                  <div className={`product-details__content${contentLeft ? " rev" : ""}`}>
                    <div className="row align-items-start landing-variant__row">
                      {contentLeft ? (
                        <>
                          {textCol}
                          {imageCol}
                        </>
                      ) : (
                        <>
                          {imageCol}
                          {textCol}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })
        : (
          <section className="single-product-section bg-color2">
            <div className="container">
              <div className="single-details__content">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="product-content-left">
                      <div className="about-one__img-box wow slideInLeft animated">
                        <div className="product__img">
                          <img src={data.manufacturer.image} alt={data.manufacturer.imageAlt} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="product-content-right">
                      <div className="wow slideInRight animated">
                        {ManufacturerHeading ? (
                          <ManufacturerHeading className="section-title__title">
                            {data.manufacturer.heading}
                          </ManufacturerHeading>
                        ) : null}
                        {data.manufacturer.paragraphs.map((p, i) => (
                          <p key={i} className="mb-3" dangerouslySetInnerHTML={{ __html: p }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      <section className="single-product-section bg-color2">
        <div className="container">
          <div className="product-details__content rev">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="product-content-left">
                  <div className="about-one__img-box wow slideInLeft animated">
                    <div className="product__img">
                      <img src={data.documents.image} alt={data.documents.imageAlt} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-6">
                <div className="product-content-left product-left wow slideInRight animated">
                  <DocumentsHeading className="section-title__title">Documents Available</DocumentsHeading>
                  <div className="row mt-3">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <ul className="project-details__points-list doc list-unstyled">
                        {data.documents.left.map((d) => (
                          <li key={d}>
                            <i className="fa fa-check-circle" aria-hidden="true" /> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <ul className="project-details__points-list doc list-unstyled">
                        {data.documents.right.map((d) => (
                          <li key={d}>
                            <i className="fa fa-check-circle" aria-hidden="true" /> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="single-product-section-dark">
        <div className="servie-bg-box">
          <div
            className="single_service__bg"
            style={{ backgroundImage: `url("${data.wholesale.bgImage}")` }}
          />
        </div>
        <div className="container">
          <div className="section-title">
            <WholesaleHeading className="section-title__title">{data.wholesale.heading}</WholesaleHeading>
          </div>
          <div className="row">
            <div className="col-md-12">
              {data.wholesale.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
          <div className="row">
            <UspHeading>
              <span className="cy">Our USP</span>
            </UspHeading>
            <div className="col-xl-5">
              <ul className="project-details__points-list list-unstyled">
                {data.wholesale.uspLeft.map((u) => (
                  <li key={u}>
                    <i className="fa fa-check" aria-hidden="true" /> {u}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-7">
              <ul className="project-details__points-list list-unstyled">
                {data.wholesale.uspRight.map((u) => (
                  <li key={u}>
                    <i className="fa fa-check" aria-hidden="true" /> {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {faqs?.length ? <FAQSection faqs={faqs} headingAs={FaqHeading} /> : null}
    </>
  );
}
