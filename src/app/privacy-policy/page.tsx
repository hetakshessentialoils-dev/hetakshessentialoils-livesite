import { Breadcrumbs } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy for Hetaksh Essential Oils",
  description:
    "Read the Hetaksh Essential Oils Privacy Policy to understand how we collect, use, and protect your personal information.",
  keywords: "hetaksh privacy policy, data protection, essential oils privacy",
  path: "/privacy-policy",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="inner-page-section privacy-policy-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-left">
                <h1 className="section-title__title">Privacy Policy</h1>
              </div>

              <p className="about-one__text mb-4">
                At Hetaksh Essential Oils, we are committed to protecting your privacy. This Privacy
                Policy outlines how we collect, use, and protect your personal information when you
                use our website or engage with us in any way. By accessing our website or providing
                your information to us, you consent to the terms of this Privacy Policy.
              </p>

              <h4 className="privacy-policy-page__heading">Information We Collect:</h4>
              <p className="about-one__text mb-4">
                We may collect personal information such as your name, email address, phone number,
                and shipping address when you place an order with us or sign up for our newsletter.
                We may also collect information about your browsing behavior on our website,
                including pages visited and products viewed.
              </p>

              <h4 className="privacy-policy-page__heading">How We Use Your Information:</h4>
              <p className="about-one__text mb-4">
                We use the information we collect to process your orders, communicate with you about
                your orders, and provide you with information about our products and promotions. We
                may also use your information to improve our website and services, conduct market
                research, and personalize your experience.
              </p>

              <h4 className="privacy-policy-page__heading">Information Sharing :</h4>
              <p className="about-one__text mb-4">
                We may share your information with third-party service providers who help us fulfill
                orders, process payments, and provide customer support. We may also share your
                information with law enforcement or government agencies if required by law.
              </p>

              <h4 className="privacy-policy-page__heading">WHY WE STORE DATA:</h4>
              <p className="about-one__text mb-4">
                We store and use data to keep our customers updated with any changes in the services
                and product launches, and gather feedback from the customers.
              </p>

              <h4 className="privacy-policy-page__heading">Data Security :</h4>
              <p className="about-one__text mb-4">
                We take the security of your information seriously and take measures to protect it
                from unauthorized access, disclosure, alteration, or destruction. However, no method
                of transmission over the internet or electronic storage is 100% secure, and we
                cannot guarantee the absolute security of your information.
              </p>

              <h4 className="privacy-policy-page__heading">Cookies:</h4>
              <p className="about-one__text mb-4">
                We use cookies to enhance your browsing experience and gather information about how
                you use our website. You can choose to accept or decline cookies. If you decline
                cookies, some features of our website may not be available to you.
              </p>

              <h4 className="privacy-policy-page__heading">Marketing Communications</h4>
              <p className="about-one__text mb-4">
                We may send you marketing communications about our products and promotions if you
                have provided your consent. You can opt-out of receiving these communications at any
                time by clicking the unsubscribe link in the email or contacting us directly.{" "}
                <a href="mailto:sales@hetakshessentialoils.com">sales@hetakshessentialoils.com</a>.
              </p>

              <h4 className="privacy-policy-page__heading">Changes to This Privacy Policy</h4>
              <p className="about-one__text mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page. You are advised to review
                this Privacy Policy periodically for any changes.
              </p>

              <h4 className="privacy-policy-page__heading">Contact Us</h4>
              <p className="about-one__text">
                If you have any questions about this Privacy Policy or our privacy practices, please
                contact us at{" "}
                <a href="mailto:mkt2@hetakshessentialoils.com">mkt2@hetakshessentialoils.com</a>. By
                using our website or providing your information to us, you agree to the terms of this
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
