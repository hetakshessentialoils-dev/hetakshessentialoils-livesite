import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories, getCategory, getProduct, getProducts } from "@/lib/api";
import { Breadcrumbs, FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { CleanProductPage } from "@/components/CleanProductPage";
import { ProductLanding } from "@/components/ProductLanding";
import { RawProductPage } from "@/components/RawProductPage";
import { DEFAULT_FAQS } from "@/lib/constants";
import { CATEGORY_IMAGES } from "@/lib/legacy-assets";
import { categoryPath, productPath } from "@/lib/product-paths";
import { CATEGORY_DETAILS } from "@/data/category-details";
import { CLEAN_PRODUCT_PAGES } from "@/data/clean-product-pages";
import { getProductFaqs } from "@/data/product-faqs";
import { PRODUCT_LANDINGS } from "@/data/product-landings";
import { PRODUCT_PAGES_HTML } from "@/data/product-pages-html";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, productJsonLd } from "@/lib/seo";
import type { CategoryDetail, CategoryDetailItem, FaqItem } from "@/lib/types";

export async function generateStaticParams() {
  const categories = await getCategories();
  const products = await getProducts();
  const slugs = new Set<string>();

  for (const c of categories || []) slugs.add(c.slug);
  for (const p of products || []) slugs.add(p.slug);
  for (const l of Object.values(PRODUCT_LANDINGS)) slugs.add(l.slug);
  for (const p of Object.values(CLEAN_PRODUCT_PAGES)) slugs.add(p.slug);
  for (const p of Object.values(PRODUCT_PAGES_HTML)) slugs.add(p.slug);

  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = await getCategory(slug);
  if (category) {
    return buildMetadata({
      title: category.seoTitle || category.name,
      description: category.seoDescription || category.description,
      keywords: category.seoKeywords || undefined,
      path: categoryPath(slug),
    });
  }

  const cleanPage = CLEAN_PRODUCT_PAGES[slug];
  if (cleanPage) {
    return buildMetadata({
      title: cleanPage.seoTitle,
      description: cleanPage.seoDescription,
      path: productPath(slug),
    });
  }

  const landing = PRODUCT_LANDINGS[slug];
  if (landing) {
    return buildMetadata({
      title: landing.seoTitle,
      description: landing.seoDescription,
      path: productPath(slug),
    });
  }

  const htmlPage = PRODUCT_PAGES_HTML[slug];
  if (htmlPage) {
    return buildMetadata({
      title: htmlPage.seoTitle,
      description: htmlPage.seoDescription,
      path: productPath(slug),
    });
  }

  const product = await getProduct(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.seoTitle || product.name,
    description: product.seoDescription || product.description.replace(/<[^>]+>/g, "").slice(0, 160),
    keywords: product.seoKeywords || undefined,
    path: productPath(slug),
  });
}

function DetailBlock({ item, slug }: { item: CategoryDetailItem; slug: string }) {
  const contentLeft = item.id % 2 === 1;

  const content = (
    <div className={`col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12`}>
      <div
        className={`product-content-${contentLeft ? "left" : "right"} wow ${
          contentLeft ? "slideInLeft" : "slideInRight"
        } animated`}
      >
        <h3 className="section-title__title">{item.title}</h3>
        <h4 className="prduct-details__title-4">Composition:</h4>
        <p className="about-one__text">{item.composition}</p>
        <h4 className="prduct-details__title-4">Extraction:</h4>
        <p className="about-one__text">{item.extraction}</p>
        {(item.coa || item.msds) && (
          <div className="product__btn-box">
            {item.coa && (
              <a className="product__btn thm-btn" href={item.coa} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-download" aria-hidden="true" /> COA
              </a>
            )}
            {item.msds && (
              <a
                className="product__btn thm-btn thm-btn2"
                href={item.msds}
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
  );

  const image = (
    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
      <div
        className={`about-one__img-box wow ${contentLeft ? "slideInRight" : "slideInLeft"} animated`}
      >
        <div className="product__img">
          <img src={item.image} alt={item.imageAlt} />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`product-details__content${contentLeft ? " rev" : ""}`}
      id={`${slug}-${item.id}`}
    >
      <div className="row align-items-center">
        {contentLeft ? (
          <>
            {content}
            {image}
          </>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </div>
    </div>
  );
}

function DetailLayout({
  slug,
  detail,
  page,
}: {
  slug: string;
  detail: CategoryDetail;
  page: number;
}) {
  const { perPage, items, types, intro, typesTitle } = detail;
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * perPage;
  const pageItems = items.slice(start, start + perPage);

  const base = categoryPath(slug);
  const pageHref = (n: number) => (n <= 1 ? base : `${base}?page=${n}`);
  const anchorHref = (id: number) => {
    const p = Math.ceil(id / perPage);
    return `${pageHref(p)}#${slug}-${id}`;
  };

  return (
    <>
      <section className="product-details">
        <div className="container">
          <div className="product-details__content-details">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 text-center mb-2">
                {intro.map((p, i) => (
                  <p
                    key={i}
                    style={{ textAlign: "justify" }}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {types.length > 0 && (
        <section className="product-details bg-image">
          <div className="container">
            <div className="product-details__content-details">
              <div className="row justify-content-xl-center justify-content-sm-start">
                <div className="section-title text-center">
                  <h2 className="list-titles">{typesTitle}</h2>
                </div>
                <ul className="product-details__points-list list-unstyled">
                  {types.map((t) => (
                    <li key={t.id}>
                      <Link href={anchorHref(t.id)}>
                        <p>{t.label}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="product-details">
        <div className="container">
          {pageItems.map((item) => (
            <DetailBlock key={item.id} item={item} slug={slug} />
          ))}

          {totalPages > 1 && (
            <div className="project-details__pagination-box">
              <ul className="project-details__pagination list-unstyled clearfix">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <li key={n} className={`page-item${n === current ? " active" : ""}`}>
                    <Link className="page-link rounded-circle" href={pageHref(n)}>
                      {n}
                    </Link>
                  </li>
                ))}
                {current < totalPages && (
                  <li className="next">
                    <Link href={pageHref(current + 1)}>
                      <span> Next </span>
                      <i className="icon-right-arrow" />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

async function CategoryPage({
  slug,
  page,
}: {
  slug: string;
  page: number;
}) {
  const category = await getCategory(slug);
  if (!category) notFound();

  const detail = CATEGORY_DETAILS[slug];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: category.name, href: categoryPath(slug) },
  ];

  if (detail) {
    return (
      <>
        <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
        <Breadcrumbs items={breadcrumbs} />
        <DetailLayout slug={slug} detail={detail} page={page} />
      </>
    );
  }

  const faqs = (category.faqs?.length ? category.faqs : DEFAULT_FAQS) as FaqItem[];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="project-six bg-color inner-page-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">{category.name}</h2>
            <p className="about-one__text">{category.description}</p>
          </div>
          <div className="row">
            {(category.products || []).map((product) => (
              <div key={product.id} className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <div className="project-six__single">
                  <Link href={productPath(product.slug)}>
                    <div className="project-six__img">
                      <img
                        src={product.imageUrl || CATEGORY_IMAGES[slug] || CATEGORY_IMAGES["essential-oils"]}
                        alt={product.imageAlt || product.name}
                      />
                    </div>
                    <div className="project-six__content">
                      <h3 className="project-six__title">{product.name}</h3>
                      <p>{product.description.replace(/<[^>]+>/g, "").slice(0, 120)}...</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </>
  );
}

async function ProductDetailPage({ slug }: { slug: string }) {
  const cleanPage = CLEAN_PRODUCT_PAGES[slug];
  if (cleanPage) {
    const breadcrumbs = [
      { name: "Home", href: "/" },
      { name: cleanPage.categoryName, href: categoryPath(cleanPage.category) },
      { name: cleanPage.name, href: productPath(slug) },
    ];
    const faqs = getProductFaqs(slug);
    return (
      <>
        <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
        {faqs?.length ? <JsonLd data={faqJsonLd(faqs)} /> : null}
        <CleanProductPage data={cleanPage} />
      </>
    );
  }

  const landing = PRODUCT_LANDINGS[slug];
  if (landing) {
    const breadcrumbs = [
      { name: "Home", href: "/" },
      { name: landing.categoryName, href: categoryPath(landing.category) },
      { name: landing.title, href: productPath(slug) },
    ];
    const faqs = getProductFaqs(slug);
    return (
      <>
        <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
        {faqs?.length ? <JsonLd data={faqJsonLd(faqs)} /> : null}
        <ProductLanding data={landing} />
      </>
    );
  }

  const htmlPage = PRODUCT_PAGES_HTML[slug];
  if (htmlPage) {
    const breadcrumbs = [
      { name: "Home", href: "/" },
      { name: htmlPage.categoryName, href: categoryPath(htmlPage.category) },
      { name: htmlPage.title, href: productPath(slug) },
    ];
    const faqs = getProductFaqs(slug);
    return (
      <>
        <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
        {faqs?.length ? <JsonLd data={faqJsonLd(faqs)} /> : null}
        <RawProductPage data={htmlPage} />
      </>
    );
  }

  const product = await getProduct(slug);
  if (!product) notFound();

  const faqs = (product.faqs?.length ? product.faqs : DEFAULT_FAQS) as FaqItem[];
  const categorySlug = product.category?.slug || "essential-oils";
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: product.category?.name || "Products", href: categoryPath(categorySlug) },
    { name: product.name, href: productPath(slug) },
  ];

  return (
    <>
      <JsonLd data={productJsonLd({ ...product, category: product.category })} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="about-one inner-page-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              {product.imageUrl ? (
                <div className="about-one__img">
                  <img src={product.imageUrl} alt={product.imageAlt || product.name} />
                </div>
              ) : null}
            </div>
            <div className="col-xl-6">
              <div className="section-title text-left">
                <h1 className="section-title__title">{product.name}</h1>
              </div>
              <div
                className="about-one__text"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              {product.coaMsdsNote && (
                <p className="about-one__text" style={{ color: "#233539" }}>
                  <b>{product.coaMsdsNote}</b>
                </p>
              )}
              <div className="about-one__btn-box">
                <Link href="/contact" className="about-one__btn thm-btn">
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </>
  );
}

export default async function ProductsSlugPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;

  const category = await getCategory(slug);
  if (category) {
    return <CategoryPage slug={slug} page={Number(pageParam) || 1} />;
  }

  return <ProductDetailPage slug={slug} />;
}
