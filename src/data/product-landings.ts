import type { ProductLanding } from "@/lib/types";

const DOCS_LEFT = [
  "GMP Certificate",
  "ISO 9001:2015 Certificate",
  "Method of Analysis Certificate",
  "Technical Data Sheet/Specification",
  "Process Flow Chart",
  "TSE/BSE Free certificate",
  "Residual Solvent",
  "OVI Certificate",
  "Non-GMO Declaration",
  "Nitrosamine-Free Declaration",
  "Elemental Impurities Declaration",
  "Stability Studies / Shelf-Life Studies — Accelerated and Long-Term",
];

const DOCS_RIGHT = [
  "MSDS",
  "Aflatoxin-Free Declaration",
  "Gluten Free Declaration",
  "Vegan Declaration",
  "Melamine Declaration",
  "Food Grade Declaration",
  "Pesticide Free Declaration",
  "Technical Package equivalent to DMF",
  "Pyrrolizidine Alkaloids Free Declaration",
  "Dioxin Free Certificate",
  "Genotoxic free declaration",
  "Halal Declaration",
  "Latex Declaration",
];

const BSO = "/assets/images/products/single-product/black-cumin-seed-oil";
const SPO = "/assets/images/products/single-product/Saw-Palmetto-Oil";

export const PRODUCT_LANDINGS: Record<string, ProductLanding> = {
  "black-seed-oil": {
    slug: "black-seed-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    headerBgId: "sing-bg-img-2",
    title: "Black Seed Oil & Extract Wholesale Supplier",
    subtitle: "Active Content (Min 1% to 20% Thymoquinone)",
    intro: [
      "Our bulk Black Seed Oil, also known as Kalonji Oil or Nigella sativa Oil, is manufactured in the USA from seeds sourced from India. The oil ranges from brownish-yellow to deep brown and is extracted through cold pressing and CO₂ supercritical methods. Black Seed Extract is also available as a powder with documented thymoquinone concentrations.",
      "As a bulk supplier of Black Seed Oil and Extract in the USA, we provide documented grades for cosmetic, pharmaceutical, and formulation applications.",
    ],
    packaging: "Available packaging: 25 kg and 180 kg HDPE or GI drums",
    formTitle: "Contact us for Wholesale Black Seed Oil Enquiries",
    enquirySource: "Enquiry from Black Seed Oil Page",
    gradeColClass: "col-md-2",
    grades: [
      { title: "Black Seed Oil", spec: "Thymoquinone – min 1%", coa: `${BSO}/BLACK-SEED-OIL-1-COA.pdf`, msds: `${BSO}/MSDS-BLACK-CUMIN-OIL-1.pdf` },
      { title: "Black Seed Oil", spec: "Thymoquinone – min 3%", coa: `${BSO}/BLACK-SEED-OIL-3-COA.pdf`, msds: `${BSO}/MSDS-BLACK-CUMIN-OIL-3.pdf` },
      { title: "Black Seed Oil", spec: "Thymoquinone – min 5%", coa: `${BSO}/BLACK-SEED-OIL-5-COA.pdf`, msds: `${BSO}/MSDS-BLACK-CUMIN-OIL-5.pdf` },
      { title: "Black Seed Oil", spec: "Thymoquinone – min 10%", coa: `${BSO}/BLACK-SEED-OIL-10-COA.pdf`, msds: `${BSO}/MSDS-BLACK-CUMIN-OIL-10.pdf` },
      { title: "Black Seed Oil", spec: "Thymoquinone – min 20%", coa: `${BSO}/BLACK-SEED-OIL-20-COA.pdf`, msds: `${BSO}/MSDS-BLACK-CUMIN-OIL-10.pdf` },
    ],
    manufacturer: {
      heading: "Black Seed Oil Bulk Manufacturer & Supplier in the USA",
      image: `${BSO}/Black-seed-oil-bulk.webp`,
      imageAlt: "Black Seed Oil Bulk",
      paragraphs: [
        "Black Seed Oil (Kalonji Oil) is also known as Nigella sativa. Extracted through cold pressing and CO₂ methods this oil—golden brown to dark brown in appearance—contains between 1% and 20% thymoquinone, depending on production temperature (prepared at a temperature of roughly 60-80*C, it results in an active content (min. 1% to 20%). Stored correctly in sealed containers away from heat and light, it maintains its purity. Heavy metals are kept to less than 10 ppm, while microbiological impurities such as yeasts and molds remain under 10 cfu/g, with pathogens entirely absent. Similarly, our Black Seed extract also contains 1-20% Thymoquinone and appears as off white to pinkish to light brown fine powder is also GMO free and is Stored in sealed container at cool & dry place. Protect from light, heat, moisture & pest infestation. Our product also maintains transparency and tries to minimize the inclusion of heavy metals like lead, mercury, arsenic, and cadmium through strict Quality controls. As your reliable Black seed oil suppliers in USA, we prioritise quality and purity, ensuring a premium product for your needs.",
      ],
    },
    documents: {
      image: `${BSO}/Black-seed-oil-wholesale.webp`,
      imageAlt: "Black Seed Oil Wholesale",
      left: [...DOCS_LEFT, "HACCP Certificate"],
      right: [...DOCS_RIGHT, "KOSHER Certificate"],
    },
    wholesale: {
      heading: "Manufacturers of Black Seed Oil & Extract Wholesale",
      bgImage: `${BSO}/Black-seed-oil-manufacturers.webp`,
      paragraphs: [
        "Welcome to Black Seed Oil Wholesale , USA leading cultivators, manufacturers, producers, suppliers and exporters of Essential Oils, Carrier Oils, Spice Oils, Floral Oils and Hydrosol etc.",
        "We are a bulk supplier of Black Seed Oil in the USA and offer documented thymoquinone concentrations alongside a wider portfolio of essential, spice, floral, and carrier oils. Applicable products are available in grades complying with supported IP, BP, EP, USP, and JP specifications.",
        "Our major key suppliers are top ranked nutraceutical companies, pharmaceutical companies, flavor & fragrance houses, oral & personal care companies, tobacco manufacturers, ayurvedic companies, and FMCG manufacturers in USA and around the globe. We can also customize our products as per the quality requirements and specifications of our customers.",
      ],
      uspLeft: [
        "Extracted from Non-GMO Seeds",
        "Free from Pyrrolizidine Alkaloids (PA)",
        "Contains No Melamin.",
        "Produced without aflatoxins",
      ],
      uspRight: [
        "Manufactured in a Halal- and Kosher-certified facility",
        "No residual solvents used in processing",
        "Pesticide-free product",
        "Free from allergens, dioxins, and genotoxic impurities",
      ],
    },
    aim: {
      image: `${BSO}/Black-seed-oil-suppliers.webp`,
      imageAlt: "Black Seed Oil Suppliers",
      aim: "While standing high in the market of oils, Hetaksh a well-reputed brand is visionary in providing turnkey needs of high-end projects in a short time. Our core aim is to become a well-reputed brand with the ability to take on and fulfill end-to-end projects for major pharmaceutical companies. With our services, we want to serve the market effectively.",
      customers:
        "We aim to supply our product in bulk and with this in mind, we strive to connect with the major players in the pharmaceutical industry. To us, our customers are the managers and the evangelist of our services and we will ensure the high-end services to them in one go. We will make sure to provide quality products to our services. At last, happy customers means happy Hetaksh!",
    },
    seoTitle: "Black Seed Oil Wholesale Supplier | Min 1%–20% Thymoquinone",
    seoDescription:
      "High-quality Black Seed Oil Wholesale available with 1% to 20% Thymoquinone. Buy in bulk from leading manufacturers and suppliers at competitive prices.",
  },

  "saw-palmetto-berry-extract": {
    slug: "saw-palmetto-berry-extract",
    category: "special-ingredients",
    categoryName: "Special Ingredients",
    headerBgId: "sing-bg-img-4",
    title: "Saw Palmetto Oil Bulk Manufacturer & Supplier",
    intro: [
      "Saw palmetto oil is obtained from the berries of <b>Serenoa repens</b> and is available for wholesale supply from the USA. The Bulk Saw Palmetto Extract Oil has 85% fatty acid with approximately 32% lauric acid. This yellowish to reddish orange coloured oil can be extracted using the CO2 supercritical extraction process in which it gets a long chain alcohol portion of around 0.15 % to 0.35% and sterols not less than 0.2% Spray drying process is used in the extraction of <b>Saw Palmetto Oil Extract from Wholesale Supplier</b>. The extract is delivered as a powder with purity levels of 45%, 35%, and 25% along with the excipient maltodextrin.",
      "We supply Saw Palmetto Oil and Saw Palmetto Extract in bulk. The oil and powdered extract are distinct products, and the available grades are listed below with their corresponding documentation.",
    ],
    packaging: "Available packaging: 25 kg and 180 kg HDPE or GI drums",
    formTitle: "Contact us for Saw Palmetto Oil Enquiries",
    enquirySource: "Enquiry from Saw Palmetto Oil Page",
    gradeColClass: "col-md-3",
    grades: [
      { title: "Saw Palmetto Extract", spec: "USP NF", coa: `${SPO}/USP-SAW-PALMETTO-EXTRACT.pdf`, msds: `${SPO}/MSDS-SAW-PALMETTO-EXTRACT.pdf` },
      { title: "Saw Palmetto Oil", spec: "85% Minimum Fatty Acids, 32% Lauric Acid", coa: `${SPO}/85-SAW-PALMETTO-OIL.pdf`, msds: `${SPO}/MSDS-SAW-PALMETTO-EXTRACT-85.pdf` },
      { title: "Saw Palmetto Extract", spec: "45%", coa: `${SPO}/45-SAW-PALMETTO-EXTRACT.pdf`, msds: `${SPO}/MSDS-SAW-PALMETTO-EXTRACT-45.pdf` },
      { title: "Saw Palmetto Extract", spec: "25%", coa: `${SPO}/25-SAW-PALMETTO-EXTRACT.pdf`, msds: `${SPO}/MSDS-SAW-PALMETTO-EXTRACT-25.pdf` },
    ],
    manufacturer: {
      heading: "Saw Palmetto Oil Bulk Manufacturer & Supplier",
      image: `${SPO}/Saw-Palmetto-Oil-Wholesale.webp`,
      imageAlt: "Saw Palmetto Oil Wholesale",
      paragraphs: [
        "Our <b>Wholesale Saw Palmetto Oil</b> is prepared, with an intention to retain its authentic properties. With a total fatty acid standardized to 85% and presence of Long chain alcohol from 0.15 % to 0.35%, our saw palmetto oil is also insoluble in alcohol and water and retains moisture of less than 1%, and sterols not less than 0.2%",
        "Our product is best utilized when kept in a well fitted container in a cool and dark place. We, at Hetaksh Essential Oils, <strong>Saw Palmetto Oil Wholesale Suppliers</strong> also ensure minimal usage of Heavy Metal, with lead being at around 10 ppm, and lead, Arsenic and Ash being at lower levels around 2 ppm each. We pledge to ensure safety and minimize any damages by maintaining exclusion of harmful substances and toxins, which is the reason our residual Solvents also amount upto Ph EUR.",
        "The amount of microbiology is also limited with the Total Plate Count 1000cfu/g, with Yeast & Molds and bacteria up to 100cfu/g each. There is zero amount of bile-tolerantgram, S.Aureus, E. Coli and Salmonella present in our <b>Saw Palmetto oil Bulk Manufacturers.</b>",
      ],
    },
    documents: {
      image: `${SPO}/Saw-Palmetto-Oil-Suppliers.webp`,
      imageAlt: "Saw Palmetto Oil Supplier",
      left: DOCS_LEFT,
      right: DOCS_RIGHT,
    },
    wholesale: {
      heading: "Trusted Saw Palmetto Extract Oil Bulk Supplier",
      bgImage: `${SPO}/saw-Palmetto-oil-bulk.webp`,
      paragraphs: [
        "We supply Saw Palmetto Oil and Saw Palmetto Extract in bulk. Product-specific grades and documents are listed on this page for commercial buyers.",
        "Applicable products can be supplied in grades complying with supported specifications. Please review the relevant COA and MSDS before selecting a grade.",
      ],
      uspLeft: [
        "Our Saw Palmetto Oil is extracted from Non-GMO Seeds.",
        "Our Saw Palmetto Oil is Pyrrolizidine Alkaloids free.",
        "Saw Palmetto Oil process by us does not contain any aflatoxins.",
        "Melamine is absent in our Saw Palmetto Oil.",
      ],
      uspRight: [
        "Our Saw Palmetto Oil is manufactured in Halal and Kosher Facility.",
        "We do not use any residual solvent in the manufacturing process of Saw Palmetto Oil.",
        "Saw Palmetto Oil offered by us is free from any potential Allergen, Dioxin and Genotoxic Impurities.",
        "Our Saw Palmetto Oil is pesticides free.",
      ],
    },
    aim: {
      image: `${SPO}/Saw-Palmetto-Oil-manufacturers.webp`,
      imageAlt: "Saw Palmetto Oil Manufacturers",
      aim: "While standing high in the market of oils, Hetaksh a well-reputed brand is visionary in providing turnkey needs of high-end projects in a short time. Our core aim is to become a well-reputed brand with the ability to take on and fulfill end-to-end projects for major pharmaceutical companies. With our services, we want to serve the market effectively.",
      customers:
        "We aim to supply our product in bulk and with this in mind, we strive to connect with the major players in the pharmaceutical industry. To us, our customers are the managers and the evangelist of our services and we will ensure the high-end services to them in one go. We will make sure to provide quality products to our services. At last, happy customers means happy Hetaksh!",
    },
    seoTitle: "Saw Palmetto Oil Bulk Manufacturers & Wholesale Supplier USA",
    seoDescription:
      "Saw Palmetto Oil bulk manufacturers & wholesale supplier in USA. USP NF verified, 85% fatty acids, available as oil and extract (25%, 45%) for bulk export.",
  },
};
