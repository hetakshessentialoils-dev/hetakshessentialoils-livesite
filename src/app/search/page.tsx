import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { searchProductDetails } from "@/lib/search";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Search Results",
  description: "Search Hetaksh Essential Oils product catalogue.",
  path: "/search",
});

function SearchResultBlock({
  item,
}: {
  item: ReturnType<typeof searchProductDetails>[number];
}) {
  return (
    <div className="product-details__content">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
          <div className="about-one__img-box wow slideInRight animated">
            <div className="product__img">
              <img src={item.image} alt={item.imageAlt || item.productName} />
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
          <div className="product-content-right wow slideInLeft animated">
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
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fa fa-download" aria-hidden="true" /> MSDS
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const results = searchProductDetails(q);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Search Results", href: `/search${q ? `?q=${encodeURIComponent(q)}` : ""}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <section className="page-header page-header--search">
        <div className="page-header-bg page-header-bg--search" />
        <div className="container">
          <div className="page-header__inner">
            <h2>Search Results</h2>
            <ul className="thm-breadcrumb list-unstyled">
              {breadcrumbs.map((item, index) => (
                <li key={item.href}>
                  {index === breadcrumbs.length - 1 ? (
                    <span>{item.name}</span>
                  ) : (
                    <>
                      <Link href={item.href}>{item.name}</Link>
                      <span className="thm-breadcrumb__sep"> / </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="product-details inner-page-section search-results">
        <div className="container">
          {!q.trim() ? (
            <p className="about-one__text text-center">Enter a product name in the search bar above.</p>
          ) : results.length === 0 ? (
            <p className="about-one__text text-center">
              No products found for &ldquo;{q}&rdquo;. Try a different search term or browse our{" "}
              <Link href="/essential-oils">Essential Oils</Link> catalogue.
            </p>
          ) : (
            results.map((item) => (
              <SearchResultBlock key={`${item.categorySlug}-${item.id}`} item={item} />
            ))
          )}
        </div>
      </section>
    </>
  );
}
