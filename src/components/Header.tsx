import Link from "next/link";
import { CoaMsdsMenu } from "@/components/CoaMsdsMenu";
import { ProductsMenu } from "@/components/ProductsMenu";
import { getCoaMsdsNav } from "@/lib/coa-msds-nav";
import { CERTIFICATES, NAV_PRODUCTS } from "@/lib/legacy-assets";

export function Header() {
  const coaMsdsNav = getCoaMsdsNav();

  return (
    <>
      <header className="main-header-two page-header">
        <nav className="main-menu main-menu-two">
          <div className="main-menu-two__wrapper">
            <div className="main-menu-two__wrapper-inner header-one-line">
              <div className="main-menu-two__left">
                <div className="main-menu-two__logo">
                  <Link href="/">
                    <img
                      src="/assets/images/logo/hetaksh-logo.webp"
                      alt="Hetaksh Essential Oils Logo"
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
              <div className="main-menu-two__main-menu-box">
                  <button type="button" className="mobile-nav__toggler" aria-label="Open menu">
                    <i className="fa fa-bars" />
                  </button>
                  <ul className="main-menu__list">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <ProductsMenu items={NAV_PRODUCTS} />
                    <CoaMsdsMenu items={coaMsdsNav} />
                    <li className="dropdown">
                      <a href="#" className="header-nav-dropdown">
                        <span>Download Certificates</span>
                        <span className="header-dropdown-caret fa fa-angle-down" aria-hidden="true" />
                      </a>
                      <ul>
                        {CERTIFICATES.map((cert) => (
                          <li key={cert.href}>
                            <a href={cert.href} target="_blank" rel="noopener noreferrer">
                              {cert.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link href="/download-brochure">Company Brochure</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
              </div>
              <div className="main-menu-two__right">
                  <div className="main-menu-two__search-cart-btn-box">
                    <div className="main-menu-two__cart-box">
                      <div id="google_translate_element" />
                    </div>
                  </div>
                  <form role="search" action="/search" method="get" className="search-form form">
                    <label>
                      <input
                        type="search"
                        id="searchQuery"
                        className="search-field"
                        placeholder="Search Products..."
                        name="q"
                      />
                    </label>
                    <input type="submit" className="search-submit button" value={"\uf002"} aria-label="Search" />
                  </form>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="mobile-nav__container" />
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />{" "}
              <a href="mailto:sales@hetakshessentialoils.com">sales@hetakshessentialoils.com</a>
            </li>
            <li>
              <i className="fa fa-envelope" />{" "}
              <a href="mailto:mkt2@hetakshessentialoils.com">mkt2@hetakshessentialoils.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt" /> <a href="tel:+919871888705">+91 9871-888-705</a>
            </li>
            <li>
              <i className="fa fa-phone-alt" /> <a href="tel:+919870385705">+91 9870-385-705</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social notranslate" translate="no">
              <a href="https://www.facebook.com/HetakshessentialoilsIn/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook notranslate" translate="no" />
              </a>
              <a href="https://www.linkedin.com/company/hetaksh-essential-oils/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin notranslate" translate="no" />
              </a>
              <a href="https://www.instagram.com/hetakshessentialoilsin/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram notranslate" translate="no" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
