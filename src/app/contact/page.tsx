import { Breadcrumbs } from "@/components/FAQSection";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us for Quality Essential Oil Inquiries",
  description:
    "Contact Hetaksh Essential Oils for bulk essential oil quotes, export enquiries, and product documentation. Serving clients across 40+ countries.",
  keywords: "contact hetaksh essential oils, bulk oil enquiry, essential oil quote",
  path: "/contact",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact us", href: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4">
              <div className="heading-title-2 span-head">
                <h2>
                  Contact <span>us</span>
                </h2>
              </div>
              <div className="contact-detail">
                <h5>Phone Number Address</h5>
                <ul className="contact-widget__Contact-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-email"></span>
                    </div>
                    <div className="text">
                      <p>sales@hetakshessentialoils.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-email"></span>
                    </div>
                    <div className="text">
                      <p>mkt2@hetakshessentialoils.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-telephone"></span>
                    </div>
                    <div className="text">
                      <p>
                        <a href="tel:+91 9871-888-705">+91 9871-888-705</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span
                        className="fab fa-whatsapp"
                        aria-hidden="true"
                        style={{ fontSize: "18px" }}
                      ></span>
                    </div>
                    <div className="text">
                      <p>
                        <a href="https://wa.me/919871888705">
                          +91 9871-888-705
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="top-icon-head">
                <ul className="list-unstyled contact-us-details">
                  <li>
                    <a
                      href="https://www.facebook.com/hetakshessentialoilsIn/"
                      className="facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/hetaksh-essential-oils/"
                      className="linkedin"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/hetakshessentialoilsin/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://pinterest.com/hetakshoils/">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-md-12 mt-3">
                  <h5>Office Address</h5>
                </div>
                <div className="col-md-12 mt-2">
                  <ul className="contact-icon-list-items list-unstyled">
                    <li>
                      <i className="fas fa-map-marker-alt"></i> Wz-106/81, Ground Floor, Rajouri
                      Garden Extn, Behind Cambridge Foundation School, West Delhi, Delhi, 110027
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="heading-title-2 span-head">
                <h1 className="mb-3">
                  Fill the <span> Contact</span> Form
                </h1>
              </div>
              <ContactForm formId="contact-page" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page-google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.398967630668!2d77.1175945!3d28.6417559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0335723d3b7d%3A0x3d708862a13da0a3!2sHETAKSH%20ESSENTIAL%20OILS!5e0!3m2!1sen!2sin!4v1696933250647!5m2!1sen!2sin"
          width="100%"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hetaksh Essential Oils location map"
        />
      </section>
    </>
  );
}
