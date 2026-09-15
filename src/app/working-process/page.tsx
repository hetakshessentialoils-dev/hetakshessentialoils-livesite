import { Breadcrumbs } from "@/components/FAQSection";
import { DownloadBrochureSection } from "@/components/DownloadBrochureSection";
import { WhyHetakshSection } from "@/components/WhyHetakshSection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Working Process for Essential Oils",
  description:
    "Learn about Hetaksh Essential Oils working process from raw materials to quality analysis and delivery.",
  keywords: "essential oil manufacturing process, quality analysis, bulk oil delivery",
  path: "/working-process",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Working Process", href: "/working-process" },
];

export default function WorkingProcessPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="work-process inner-page-section">
        <div className="container">
          <h1 className="section-title__title">Raw Materials</h1>
          <p className="about-one__text">
            We are engaged in cultivation and also have been working with farmers and collectors for many
            years and are constantly extending our relationships with new producers and into new product
            areas. In addition to farm visits, we use a comphrensive assessent through which we establish
            capabilities of all new suppliers.This acts not only as a screening procedure but also provides
            the basis for the crtitical path that a prosuct must follow to achieve the required standards.
          </p>

          <h3 className="prduct-details__title-4">Production</h3>
          <p className="about-one__text">
            The raw material is processed in our own manufacturing Facility, using Cold pressed,CO2
            extraction and is managed by a team of technical experts.
          </p>

          <h3 className="prduct-details__title-4">Quality and Analysis</h3>
          <p className="about-one__text">
            Our commitment is to provide high quality products, which satisfy our customers&apos;needs and
            expectation by building quality in all our operation and to improve our process and systems.We
            have with us well established quality management so as to meet the demands of our range of
            Natural Mint products, essential oils, Carrier, Spice Oils etc.For meeting the in process
            demands we ensure all products come with proper lab reports like:
          </p>
          <ul className="list-unstyled work-process">
            <li>
              <i className="fa fa-check" aria-hidden="true" /> Detailed Certificate Of Analysis.
            </li>
            <li>
              <i className="fa fa-check" aria-hidden="true" /> MSDS
            </li>
            <li>
              <i className="fa fa-check" aria-hidden="true" /> Gas chromatography Profile
            </li>
            <li>
              <i className="fa fa-check" aria-hidden="true" /> Method of Analysis
            </li>
          </ul>
          <p className="about-one__text">
            All production is carried out as per GMP standards.For Quality testing, there is an ultra modern
            laboratory equipped with the latest testing equipment and intruments.
          </p>

          <h3 className="prduct-details__title-4">Delivery and Packaging</h3>
          <p className="about-one__text">
            All the finished products are supplied to the Customers in standard packaging viz HDPE Drums,
            G.I drums etc.We take utmost care in Export shipments by palletizing and shrink-wrapping the
            drums to ensure no waer and tear is experienced in transit and material reaches to the customer
            safely. All fresh and finished raw materials are stored on site in large, well maintained
            storage warehouses.The environment is kept clean without use of pesticides.
          </p>
        </div>
      </section>

      <WhyHetakshSection headingTag="h2" />
      <DownloadBrochureSection />
    </>
  );
}
