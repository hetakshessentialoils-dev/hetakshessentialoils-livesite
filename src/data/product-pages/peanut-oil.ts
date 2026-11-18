import type { CleanProductPage, FaqItem } from "@/lib/types";

const MSDS = "/assets/images/products/Pharma-Grade-Oils/MSDS/PEANUT OIL MSDS.pdf";

export const page: CleanProductPage = {
  slug: "peanut-oil",
  category: "pharma-grade-oils",
  categoryName: "Pharma Grade Oils",
  name: "Peanut Oil",
  heading: "Peanut Oil: Source, Extraction, Components and Product Glance",
  image: "/assets/images/products/Pharma-Grade-Oils/Peanut Oil IP_BP_USP.webp",
  imageAlt: "Peanut Oil (Groundnut Oil) in BP, IP and USP pharmaceutical grades",
  paragraphs: [
    "<b>Peanut Oil bulk manufacturer</b> products are made from peanut seeds, which are also called groundnuts. The plant's scientific name is Arachis hypogaea, and it belongs to the Fabaceae family. Peanut Oil is also known as Groundnut Oil or Arachis Oil. It is obtained from the seeds of the peanut plant and can be produced through mechanical pressing or other suitable extraction methods. For pharmaceutical grades, the oil is refined and tested to meet the requirements of the intended standard. Refined Peanut Oil is generally a clear, pale-yellow liquid with a mild, oily smell.",
    "The main components of <b>Peanut Oil bulk supplier</b> products are fats called triglycerides. These contain fatty acids such as oleic acid, linoleic acid, palmitic acid and stearic acid. The exact amount of each fatty acid depends on the peanut variety and processing method. Peanut Oil may also contain small amounts of other natural substances. Refining helps reduce unwanted materials and improve the oil's appearance, odour and suitability for specific applications. Buyers should check the product specification to understand its composition and grade. A Peanut Oil bulk exporter may supply this oil to pharmaceutical manufacturers, cosmetic companies and other businesses that need a defined oil specification. Pharmaceutical-grade Peanut Oil may be used as an excipient, which is an ingredient that helps make a medicine. Other grades can be used in food, personal care and industrial products, depending on their quality and intended use. Peanut is a known allergen, so buyers must consider the applicable allergen controls, refining process, intended application and destination-country requirements before selecting a product.",
  ],
  specsTitle: "Product Specifications",
  specs: [
    { label: "Product Name", value: "Peanut Oil" },
    { label: "Botanical Name", value: "Arachis hypogaea" },
    { label: "Family", value: "Fabaceae" },
    { label: "Common Names", value: "Groundnut Oil, Arachis Oil, Peanut Seed Oil" },
    { label: "Plant Part Used", value: "Seeds" },
    { label: "Extraction Methods", value: "Mechanical pressing or suitable extraction methods" },
    { label: "Refining", value: "Depends on the grade and intended use" },
    { label: "Appearance", value: "Clear, oily liquid" },
    { label: "Colour", value: "Usually pale yellow when refined" },
    { label: "Odour", value: "Mild and characteristic; may vary by grade" },
    { label: "Main Components", value: "Oleic acid, linoleic acid, palmitic acid and stearic acid" },
    { label: "Main Industries", value: "Pharmaceutical, food, cosmetic and personal care, depending on grade" },

  ],
  coa: "/assets/images/products/Pharma-Grade-Oils/COA/PEANUT OIL BP COA.pdf",
  msds: MSDS,
  formTitle: "Contact us for Wholesale Peanut Oil Enquiries",
  enquirySource: "Enquiry from Peanut Oil Page",
  sections: [],
  variants: [],
  contentFlow: [
    {
      type: "variant",
      title: "Peanut Oil BP: Pharmaceutical Quality and Applications",
      coa: "/assets/images/products/Pharma-Grade-Oils/COA/PEANUT OIL BP COA.pdf",
      msds: MSDS,
      paragraphs: [
        "<b>Peanut Oil bulk supplier</b> products are supplied to meet the applicable requirements of the British Pharmacopoeia when specifically offered as BP grade. The British Pharmacopoeia provides quality standards for pharmaceutical substances and medicines. A product described as Peanut Oil BP should therefore meet the relevant requirements for identity, purity and other specified properties. Buyers should confirm the current monograph and product specification rather than relying only on the grade name.",
        "The production of <b>Peanut Oil BP bulk manufacturer</b> products starts with suitable peanut seeds. The oil is extracted and then refined as required. Refining may include steps that reduce gums, free fatty acids, colour compounds and other unwanted materials. The finished oil is tested against the applicable requirements. Depending on the monograph, quality checks may include appearance, identity, fatty-acid composition and other physical or chemical properties.",
        "Peanut Oil BP bulk supply is relevant to pharmaceutical manufacturers that require a material meeting the BP standard for a particular formulation. Peanut Oil may be used as an excipient in selected medicinal products, depending on the formulation and regulatory requirements. It is not automatically suitable for every medicine, and its use must match the finished product's specification. Because peanuts are a recognised allergen, manufacturers must also assess allergen risks and follow applicable safety and labelling rules.",
        "The main benefit of Peanut Oil pharmaceutical grade is that it comes with defined quality requirements when the product genuinely complies with the specified pharmacopoeia. This helps manufacturers assess whether the material is suitable for their process. The buyer should request batch-specific documents and confirm that the product is appropriate for the intended route of use.",
      ],
    },
    {
      type: "variant",
      title: "Peanut Oil IP and USP: Standards, Differences and Quality Checks",
      // ponytail: one COA slot per variant; IP COA used here, USP COA unattached.
      coa: "/assets/images/products/Pharma-Grade-Oils/COA/PEANUT OIL IP COA.pdf",
      msds: MSDS,
      paragraphs: [],
      content: [
        { type: "paragraph", text: "<b>Peanut Oil IP bulk manufacturer</b> products are intended to meet the applicable requirements of the Indian Pharmacopoeia when supplied as IP grade. The Indian Pharmacopoeia sets quality standards for medicines and relevant pharmaceutical ingredients used in India. Buyers should confirm the current monograph, required tests and acceptance limits for the grade they need. A general Peanut Oil specification does not automatically prove compliance with IP requirements." },
        { type: "paragraph", text: "<b>Peanut Oil USP bulk supplier</b> products are supplied to meet the applicable requirements of the United States Pharmacopeia. USP is a collection of quality standards used for pharmaceutical substances and related products. For USP-grade Peanut Oil, the buyer should verify the current official monograph and the supplier's batch documentation. This is especially important when the oil is intended for a regulated pharmaceutical formulation." },
        { type: "paragraph", text: "The difference between Peanut Oil BP, Peanut Oil IP and Peanut Oil USP lies in the applicable pharmacopoeial standard. All three products come from peanut seeds, but the standards may differ in their wording, tests and acceptance criteria. A batch that meets one standard should not automatically be described as meeting all three. Buyers should ask the supplier to identify each standard the product has actually been tested against." },
        {
          type: "table",
          table: {
            labelHeader: "Feature",
            valueHeader: "Peanut Oil BP",
            extraHeaders: ["Peanut Oil IP", "Peanut Oil USP"],
            rows: [
              { label: "Standard", value: "British Pharmacopoeia", extra: ["Indian Pharmacopoeia", "United States Pharmacopeia"] },
              { label: "Botanical Source", value: "Arachis hypogaea", extra: ["Arachis hypogaea", "Arachis hypogaea"] },
              { label: "Main Raw Material", value: "Peanut seeds", extra: ["Peanut seeds", "Peanut seeds"] },
              { label: "Processing", value: "Must meet applicable monograph", extra: ["Must meet applicable monograph", "Must meet applicable monograph"] },
              { label: "Quality Testing", value: "Current BP requirements", extra: ["Current IP requirements", "Current USP requirements"] },
              { label: "Intended Buyers", value: "Buyers requiring BP-grade material", extra: ["Buyers requiring IP-grade material", "Buyers requiring USP-grade material"] },
              { label: "Documents", value: "Applicable specification and batch records", extra: ["Applicable specification and batch records", "Applicable specification and batch records"] },
            ],
          },
        },
        { type: "paragraph", text: "A Peanut Oil IP bulk supplier or <b>Peanut Oil USP bulk manufacturer</b> should provide a Certificate of Analysis, product specification and Safety Data Sheet, where applicable. The COA shows the results recorded for a particular batch. Buyers should check the product identity, relevant composition tests and other requirements specified for the intended grade. Pharmaceutical manufacturers should also verify the supplier's quality system and any additional documentation required by their own procedures." },
      ],
    },
    {
      type: "section",
      title: "Peanut Oil Bulk Supply: Packaging, Certifications and Supplier Selection",
      paragraphs: [
        "Peanut Oil bulk exporter services should include clear product information and suitable documents for the destination market. Depending on the application, buyers may request a COA, SDS/MSDS, product specification, batch information, origin documents and relevant regulatory paperwork. Certifications such as ISO, GMP or Halal may be requested where applicable, but buyers should check the certificate's validity and scope. No certification should be assumed to cover every product or every manufacturing site.",
        "For Peanut Oil bulk packaging, the container must be suitable for the product and the intended transport conditions. Approved drums or other compatible containers may be used according to the order quantity and buyer requirements. Containers should remain closed and protect the oil from contamination and unsuitable storage conditions. Storage instructions should come from the supplier's specification and be followed throughout handling and transport.",
        "The Peanut Oil MOQ depends on the grade, packaging format, supplier and destination. Buyers should confirm the minimum order quantity, available packing sizes, lead time and shipping arrangements before placing an order. International orders may also require specific labels, transport documents and regulatory checks. For pharmaceutical use, buyers should confirm the exact BP, IP or USP requirements before approving the material.",
        "When choosing a <b>Peanut Oil bulk manufacturer</b>, buyers should review the source, extraction and refining methods, batch consistency, quality documents, packaging and ability to meet the requested grade. Peanut Oil also requires careful allergen assessment because it comes from peanuts. The supplier should provide clear information relevant to the product's intended use, while the buyer must check local rules and the requirements of the finished formulation.",
      ],
    },
  ],
  seoTitle: "Peanut Oil Manufacturer & Bulk Supplier | Hetaksh",
  seoDescription: "Peanut Oil, also known as Groundnut Oil or Arachis Oil, is obtained from peanut seeds (Arachis hypogaea) and refined and tested for pharmaceutical grades.",
};

export const faqs: FaqItem[] = [
  {
    question: "What is Peanut Oil made from?",
    answer: "Peanut Oil bulk manufacturer products are made from peanut seeds, also called groundnuts. The botanical name of the plant is Arachis hypogaea.",
  },
  {
    question: "What is Peanut Oil BP?",
    answer: "Peanut Oil BP bulk supplier products are supplied to meet the applicable British Pharmacopoeia requirements for identity and quality when specifically offered as BP grade.",
  },
  {
    question: "What is the difference between Peanut Oil IP and USP?",
    answer: "Peanut Oil IP follows applicable Indian Pharmacopoeia requirements, while Peanut Oil USP follows applicable United States Pharmacopeia requirements. Their standards should be checked separately.",
  },
  {
    question: "Which documents should a Peanut Oil supplier provide?",
    answer: "A Peanut Oil bulk supplier should provide a suitable product specification and COA, along with an SDS/MSDS and other documents required for the intended grade.",
  },
  {
    question: "Is Peanut Oil suitable for every pharmaceutical product?",
    answer: "Peanut Oil pharmaceutical grade is suitable only when the formulation and applicable requirements allow its use. Peanut allergen risks must be assessed carefully before use.",
  },
];
