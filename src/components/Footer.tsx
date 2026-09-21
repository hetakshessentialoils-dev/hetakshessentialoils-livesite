import Link from "next/link";
import { FOOTER_COUNTRIES } from "@/lib/constants";

export function Footer() {
  return (
    <>
      <div className="container">
        <h4 style={{ paddingTop: 25, textAlign: "center", textTransform: "uppercase" }}>
          Global Bulk Manufacturer & Supplier of Natural & Pure Products
        </h4>
        <p style={{ paddingTop: 10, textAlign: "center" }}>
          <b>
            Internationally Renowned Exporters of Essential Oils & Carrier Oils. Serving clients in:
          </b>
        </p>
        <div className="footer_countries">
          {FOOTER_COUNTRIES.map((country) => (
            <span key={country}>{country}</span>
          ))}
        </div>
        <style>{`
          @media (max-width: 767px) {
            .footer_countries {
              display: grid !important;
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
              gap: 8px 10px !important;
              justify-content: stretch !important;
              text-align: left !important;
              font-size: 12px !important;
              line-height: 1.35 !important;
            }
            .footer_countries span {
              margin: 0 !important;
            }
          }
        `}</style>
      </div>

      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="site-footer__top">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__title-box">
                    <h4 className="footer-widget__title">About Hetaksh Essential Oils</h4>
                  </div>
                  <div className="footer-widget__about-text-box">
                    <p className="footer-widget__about-text">
                      Hetaksh Essential Oils is a bulk manufacturer, wholesale supplier, and global
                      exporter of essential oils, carrier oils, Black Seed Oil, and Saw Palmetto Oil,
                      serving customers in more than 40 countries.
                    </p>
                  </div>
                  <div className="site-footer__social notranslate" translate="no">
                    <a href="https://www.facebook.com/HetakshessentialoilsIn/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f notranslate" translate="no" /></a>
                    <a href="https://www.linkedin.com/company/hetaksh-essential-oils/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in notranslate" translate="no" /></a>
                    <a href="https://www.instagram.com/hetakshessentialoilsin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram notranslate" translate="no" /></a>
                    <a href="https://www.pinterest.com/hetakshoils/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><i className="fab fa-pinterest notranslate" translate="no" /></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp">
                <div className="footer-widget__column footer-widget__links">
                  <div className="footer-widget__title-box">
                    <h4 className="footer-widget__title">Useful links</h4>
                  </div>
                  <ul className="footer-widget__links-list list-unstyled">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/download-brochure">Download Brochure</Link></li>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp">
                <div className="footer-widget__column footer-widget__links">
                  <div className="footer-widget__title-box">
                    <h4 className="footer-widget__title">Products</h4>
                  </div>
                  <ul className="footer-widget__links-list list-unstyled">
                    <li><Link href="/essential-oils">Essential Oils Bulk Supplier</Link></li>
                    <li><Link href="/pharma-grade-oils">Pharma Grade Bulk Supplier</Link></li>
                    <li><Link href="/carrier-oils">Carrier Oils Bulk Supplier</Link></li>
                    <li><Link href="/special-ingredients">Special Ingredients Supplier</Link></li>
                    <li><Link href="/hydrosol-oils">Hydrosol Bulk Supplier</Link></li>
                    <li><Link href="/spice-oils">Spice Oils Bulk Supplier</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
                <div className="footer-widget__contact">
                  <div className="footer-widget__title-box">
                    <h4 className="footer-widget__title">Contact Us</h4>
                  </div>
                  <h6 style={{ color: "#fff" }}>Office Address</h6>
                  <p className="footer-widget__contact-text">
                    WZ-106/81, Ground Floor, Rajouri Garden Extn, Behind Cambridge Foundation School,
                    West Delhi, Delhi, 110027
                  </p>
                  <ul className="footer-widget__Contact-list list-unstyled">
                    <li>
                      <div className="icon"><span className="icon-email" /></div>
                      <div className="text"><p><a href="mailto:sales@hetakshessentialoils.com">sales@hetakshessentialoils.com</a></p></div>
                    </li>
                    <li>
                      <div className="icon"><span className="icon-email" /></div>
                      <div className="text"><p><a href="mailto:mkt2@hetakshessentialoils.com">mkt2@hetakshessentialoils.com</a></p></div>
                    </li>
                    <li>
                      <div className="icon"><span className="icon-telephone" /></div>
                      <div className="text"><p><a href="tel:+919871888705">+91 9871-888-705</a><a href="tel:+919870385705">, 9870-385-705</a></p></div>
                    </li>
                    <li>
                      <div className="icon"><span className="fab fa-whatsapp" aria-hidden="true" style={{ fontSize: 18 }} /></div>
                      <div className="text">
                        <p>
                          <a href="https://wa.me/919871888705">+91 9871-888-705</a>
                          <a href="https://wa.me/919870385705">, 9870-385-705</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="site-footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <p className="site-footer__bottom-text">
                © Copyright {new Date().getFullYear()} by Hetaksh Essential Oils
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
