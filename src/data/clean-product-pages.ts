import type { CleanProductPage } from "@/lib/types";
import { NEW_PAGES_BATCH1 } from "@/data/new-pages-batch1";
import { NEW_PAGES_BATCH2 } from "@/data/new-pages-batch2";
import { NEW_PAGES_BATCH3 } from "@/data/new-pages-batch3";
import { NEW_PAGES_BATCH4 } from "@/data/new-pages-batch4";
import { NEW_PAGES_BATCH5 } from "@/data/new-pages-batch5";
import { NEW_PAGES_BATCH6 } from "@/data/new-pages-batch6";
import { NEW_PAGES_BATCH7 } from "@/data/new-pages-batch7";
import { withPdfTables } from "@/data/product-info-tables";
import { withClientProductDetails } from "@/data/client-product-details";

const ANISE_OIL_COA = "/assets/images/products/spice-oil/COA/ANISE OIL COA.pdf";
const ANISE_OIL_MSDS = "/assets/images/products/spice-oil/MSDS/ANISE OIL MSDS.pdf";
const ANISE_USP_COA = "/assets/images/products/Pharma-Grade-Oils/COA/ANISE OIL USP COA.pdf";
const ANISE_USP_MSDS = "/assets/images/products/Pharma-Grade-Oils/MSDS/ANISE OIL MSDS.pdf";
const ANISE_HYDROSOL_COA = "/assets/images/products/Hydrosol/COA/ANISE HYDROSOL COA.pdf";
const ANISE_HYDROSOL_MSDS = "/assets/images/products/Hydrosol/MSDS/Anise Oil Hydrosol MSDS.pdf";
const ANISE_OIL_IMG = "/assets/images/products/spice-oil/Anise-Oil-USP.webp";

const AJWAIN_OIL_COA = "/assets/images/products/spice-oil/COA/AJOWAN OIL COA.pdf";
const AJWAIN_OIL_MSDS = "/assets/images/products/spice-oil/MSDS/AJWAIN OIL MSDS.pdf";
const AJWAIN_HYDROSOL_COA = "/assets/images/products/Hydrosol/COA/AJWAIN HYDROSOL COA.pdf";
const AJWAIN_HYDROSOL_MSDS = "/assets/images/products/Hydrosol/MSDS/Ajowan Oil Hydrosol MSDS.pdf";
const AJWAIN_OIL_IMG = "/assets/images/products/spice-oil/AJWAIN OIL.webp";

const ARO = "/assets/images/products/single-product/arachis-oil";
const ARACHIS_OIL_COA = `${ARO}/ARACHIS-OIL-BP.pdf`;
const ARACHIS_OIL_MSDS = `${ARO}/ARACHIS-OIL-MSDS.pdf`;
const ARACHIS_BP_COA = "/assets/images/products/Pharma-Grade-Oils/COA/ARACHIS OIL BP COA.pdf";
const ARACHIS_USP_COA = "/assets/images/products/Pharma-Grade-Oils/COA/ARACHIS OIL USP COA.pdf";
const ARACHIS_PHARMA_MSDS = "/assets/images/products/Pharma-Grade-Oils/MSDS/ARACHIS OIL MSDS.pdf";
const ARACHIS_BULK_IMG = `${ARO}/Arachis-oil-bulk.webp`;

const CO = "/assets/images/products/Carrier-Oils";
const COA = `${CO}/coa`;
const MSDS = `${CO}/MSDS`;

const AMLA_IMG = `${CO}/Amla-Oil.webp`;
const AMLA_COA = `${COA}/AMLA-OIL-COA.pdf`;
const AMLA_MSDS = `${MSDS}/AMLA OIL MSDS.pdf`;

const ALOE_IMG = `${CO}/Aloe-Vera-Oil.webp`;
const ALOE_COA = `${COA}/ALOE-VERA-OIL-COA.pdf`;
const ALOE_MSDS = `${MSDS}/ALOE VERA OIL MSDS.pdf`;

const APRICOT_IMG = `${CO}/Apricot-Oil.webp`;
const APRICOT_COA = `${COA}/APRICOT-OIL-COA.pdf`;
const APRICOT_MSDS = `${MSDS}/APRICOT OIL MSDS.pdf`;

const AVOCADO_IMG = `${CO}/Avocado-Oil.webp`;
const AVOCADO_COA = `${COA}/AVOCADO-OIL-COA.pdf`;
const AVOCADO_MSDS = `${MSDS}/AVOCADO OIL MSDS.pdf`;

export const CLEAN_PRODUCT_PAGES: Record<string, CleanProductPage> = withClientProductDetails({
  "anise-oil": {
    slug: "anise-oil",
    category: "spice-oils",
    categoryName: "Spice Oils",
    name: "Anise Oil",
    heading: "Anise Oil Manufacturer & Exporter | Natural Anise Essential Oil",
    image: ANISE_OIL_IMG,
    imageAlt: "Natural Anise Essential Oil",
    layout: "specs-first",
    specsTitle: "Product Specifications",
    paragraphs: [
      "Anise oil is an essential oil extracted from the seeds of the anise plant, botanically known as Pimpinella anisum. It is obtained through the steam distillation method to retain its natural aroma and beneficial compounds. Our anise oil is a colorless to pale yellow liquid with a sweet, warm fragrance similar to licorice. Although anise originated in Southwest Asia and the Eastern Mediterranean region, we proudly supply premium quality anise oil from India to customers worldwide.",
      "As a leading Anise oil bulk manufacturer and exporter, we offer 100% pure and natural anise oil at competitive prices. The oil contains valuable natural constituents such as pinene, camphene, safrole, cis-anethole, trans-anethole, linalool, anisaldehyde, and estragole, with anethole being the major active compound. Anethole is known for supporting healthy-looking skin and is widely used in skincare formulations. The sweet and comforting aroma of anise oil makes it an excellent ingredient in perfumes, massage oils, body butters, bath products, topical creams, personal care products, soaps, scented candles, aromatherapy blends, hair care products, diffusers, and luxury cosmetic formulations.",
    ],
    coa: ANISE_OIL_COA,
    msds: ANISE_OIL_MSDS,
    formTitle: "Contact us for Wholesale Anise Oil Enquiries",
    enquirySource: "Enquiry from Anise Oil Page",
    variants: [
      {
        title: "Anise Oil USP Wholesaler | USP Grade Anise Essential Oil",
        coa: ANISE_USP_COA,
        msds: ANISE_USP_MSDS,
        paragraphs: [
          "Anise Oil USP is a pharmaceutical-grade essential oil that meets United States Pharmacopeia (USP) standards for quality and purity. As a leading Anise oil USP bulk wholesaler and distributor, our production and quality are maintained according to GMP and ISO standards. Our company also holds FSSAI, GMP, ISO, Halal, and Kosher certifications to ensure product quality and international compliance.",
          "Anise Oil USP is extracted using the steam distillation method and is a clear, colorless to pale yellow liquid with a characteristic licorice-like aroma and taste. It is widely used as a flavouring agent in pharmaceutical digestive mixtures, cough syrups, and medicinal formulations. It is also used in commercial foods, confectionery products, and beverages. Traditionally, anise oil has been associated with applications for asthma, cough, diabetes, gas, digestive discomfort, insomnia, menstrual pain, and hot flashes. It also possesses natural pain-relieving, anti-inflammatory, antibacterial, and insect-repellent properties.",
          "We provide MSDS, MOA, COA, and TDS with every batch. Our products are packed securely in 25 kg and 180 kg HDPE drums with reliable worldwide logistics.",
        ],
      },
      {
        title: "Anise Hydrosol Manufacturer & Bulk Distributor | Natural and Pure Anise Floral Water",
        coa: ANISE_HYDROSOL_COA,
        msds: ANISE_HYDROSOL_MSDS,
        paragraphs: [
          "Anise Hydrosol, also known as Anise Seed Floral Water, is a sweet, aromatic floral water obtained during the steam distillation of anise seeds. It has a mild pH ranging from 4 to 6.5, making it suitable for natural flavouring, skincare, and skin-toning applications. Anise Hydrosol is generally clear, translucent, and may appear colorless or have a very faint milky white to pale yellow tint. It is soluble in water and alcohol but insoluble in oil.",
          "The pleasant aroma and gentle properties make it a popular ingredient in aromatherapy products, facial mists, natural personal care formulations, room sprays, and culinary applications. As a trusted Anise hydrosol bulk manufacturer and wholesaler, we supply premium quality Anise Hydrosol in bulk quantities to customers worldwide. Our hydrosol has a shelf life of up to two years when stored in a cool, dry place away from direct sunlight. We offer secure packaging, consistent quality, and timely global delivery to meet the requirements of cosmetic, food, wellness, and personal care industries.",
        ],
      },
    ],
    seoTitle: "Anise Oil Manufacturer & Exporter | Natural Anise Essential Oil",
    seoDescription:
      "Buy bulk Anise Oil, Anise Oil USP, and Anise Hydrosol from a leading manufacturer and exporter. 100% pure, steam distilled, with COA, MSDS, and worldwide shipping.",
  },

  "ajwain-oil": {
    slug: "ajwain-oil",
    category: "spice-oils",
    categoryName: "Spice Oils",
    name: "Ajwain Oil",
    heading: "Ajwain Oil Manufacturer & Exporter | Natural Ajwain Essential Oil",
    image: AJWAIN_OIL_IMG,
    imageAlt: "Natural Ajwain Essential Oil",
    layout: "specs-first",
    specsTitle: "Product Specifications",
    paragraphs: [
      "Ajwain Oil is a premium quality essential oil extracted from the seeds of Trachyspermum ammi using the steam distillation method. As a bulk manufacturer and distributor of high-quality Ajwain Oil, we supply 100% pure and natural oil to customers worldwide. Ajwain belongs to the Apiaceae family and is native to Egypt. Commonly known as carom seeds, it is an important spice used in Indian kitchens and many cuisines across the world.",
      "Ajwain Oil is a light orange to reddish-brown liquid with a strong, warm, spicy, and medicinal aroma. It contains important natural constituents such as thymol, carvacrol, terpinene, dipentene, terpinolene, and limonene. The seeds are naturally rich in calcium, minerals, protein, carbohydrates, healthy fats, and iron. Our therapeutic-grade Ajwain Oil is a natural antioxidant with antimicrobial and purifying properties. It is widely used in cosmetic applications, skincare products, hair care formulations, personal care products, massage oils, and wellness formulations.",
      "We process our Ajwain Oil through the steam distillation method to maintain its purity and quality. As a trusted wholesale supplier, we export bulk quantities to the UK, Australia, USA, Canada, the Middle East, and many other countries worldwide.",
    ],
    coa: AJWAIN_OIL_COA,
    msds: AJWAIN_OIL_MSDS,
    formTitle: "Contact us for Wholesale Ajwain Oil Enquiries",
    enquirySource: "Enquiry from Ajwain Oil Page",
    variants: [
      {
        title: "Ajwain Hydrosol Supplier | Bulk Floral Water",
        coa: AJWAIN_HYDROSOL_COA,
        msds: AJWAIN_HYDROSOL_MSDS,
        paragraphs: [
          "Ajwain Hydrosol, also known as Ajwain Arak, is a fragrant water-based distillate produced during the steam distillation of carom seeds. As a leading bulk manufacturer and exporter, we supply premium quality Ajwain Hydrosol for aromatherapy, skincare, hair care, digestive support, and personal care industries. This botanical water contains thymol, one of its major active constituents, which is known for its natural antiseptic, germicidal, antispasmodic, and antifungal properties.",
          "Ajwain Hydrosol is generally a clear to slightly cloudy liquid with a colorless to very pale yellow appearance. It has a fresh, warm, spicy, and herbaceous aroma that closely resembles fresh ajwain seeds. We provide a Certificate of Analysis (COA) with every batch to verify the composition and quality of our hydrosol. Our hydrosol is supplied in bulk with reliable packaging and worldwide logistics for cosmetic, herbal, and wellness manufacturers.",
        ],
      },
      {
        title: "Bulk Ajwain Oil Supplier | Quality, Packaging & Export Solutions",
        paragraphs: [
          "As a trusted bulk manufacturer and exporter, we offer Ajwain Oil in various packaging options to meet the needs of manufacturers, wholesalers, and private label brands. Every batch undergoes laboratory testing to ensure consistent quality, purity, and compliance with industry standards. We provide complete product documentation, including COA and other quality reports, to support your sourcing requirements.",
          "Our experienced logistics team ensures safe packaging and timely delivery for domestic as well as international shipments. Whether your requirement is for cosmetic, personal care, herbal, wellness, food, or industrial applications, we offer flexible bulk quantities and dependable supply solutions. With competitive pricing, consistent product quality, and exports to more than 40 countries, we have become a reliable sourcing partner for businesses looking for premium quality Ajwain Oil and long-term bulk supply.",
        ],
      },
    ],
    seoTitle: "Ajwain Oil Manufacturer & Exporter | Natural Ajwain Essential Oil",
    seoDescription:
      "Buy bulk Ajwain Oil and Ajwain Hydrosol from a leading manufacturer and exporter. 100% pure, steam distilled, with COA, MSDS, and worldwide shipping.",
  },

  "arachis-oil": {
    slug: "arachis-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Arachis Oil",
    image: ARACHIS_BULK_IMG,
    imageAlt: "Arachis Oil Bulk",
    specsTitle: "Product Specifications",
    paragraphs: [
      "Arachis oil, also known as peanut oil, is extracted from peanuts (Arachis hypogaea) through cold pressed methods. Our Arachis oil bulk is a healthy cooking oil rich in monounsaturated fats, vitamin E, and antioxidants, offering benefits like supporting heart health, improving skin, and potentially aiding in managing blood sugar levels. This Oil is clear, pale-yellow liquid and have a huge requirement for pharmaceutical industries, Skin and Hair care, cooking etc,",
      "As one of the leading Arachis Oil wholesale distributors from the United States, our team ensures that our product is free from pesticides and client safety remains our priority. Arachis oil contains essential nutrients like vitamin E, omega-6 fatty acids, and antioxidants which makes it usable for making injections. Arachis oil's antioxidants and fatty acids may help nourish and protect the skin and also hair.",
    ],
    coa: ARACHIS_OIL_COA,
    msds: ARACHIS_OIL_MSDS,
    formTitle: "Contact us for Wholesale Arachis Oil Enquiries",
    enquirySource: "Enquiry from Arachis Oil Page",
    sections: [
      {
        title: "Arachis Oil Bulk manufacturer from United States",
        paragraphs: [
          "<b>Process of Extraction</b><br/>Arachis oil, also known as Peanut oil, is extracted from peanuts (Arachis Hypogaea) through the Cold Pressed method. Arachis oil wholesale as supplied by our company is a pharma grade oil and 100% Natural and Pure. Our oil standards are complied with BP & USP grade standards. Peanut oil is clear, viscous, and yellowish in colour and has a very low solubility in ethanol but miscible with light petroleum. The extracted oil is treated with acid to remove impurities.",
          "<b>Main Fatty acids</b><br/>Oleic acid, linoleic acid, stearic acid, behenic acid, lignoceric acid and Eicosenoic acid.",
          "Arachis Oil is mostly added to skin care products and cosmetic products like Creams, Lotions, Hair Care products, Body Care Products, Lip balms etc. Arachis oil suppliers, extracted from peanuts, is known for its rich, nutty flavor and is a popular choice for frying thanks to its high smoke point. It’s packed with Vitamin E, an antioxidant that helps protect the body from free radical damage and boosts immune function. High in heart-healthy monounsaturated fats, this oil can support cholesterol management. However, it also contains significant amounts of omega-6 fatty acids, which should be balanced with omega-3s to avoid potential inflammation.",
        ],
      },
      {
        title: "Bulk Suppliers and manufacturers of Premium Quality Arachis Oil",
        paragraphs: [
          "We are Arachis Oil trusted manufacturers from India and offer Arachis Oil which is 100% Natural & pure carrier oil and supplied to various Pharmaceutical & Cosmetic Industries. We are a leading bulk exporter of Arachis (Peanut) Oil, proudly offering a diverse portfolio of over 200 high-quality products—exclusively available at Hetaksh Essential Oils. With a strong global presence, we currently export to 40+ countries, serving a growing network of over 500 satisfied clients worldwide. As one of the largest cultivators and exporters in the industry, we hold prestigious ISO 9001:2015 and GMP certifications. Recognized as an official Export House by the Government of India, we are committed to delivering excellence across international markets.",
          "At Hetaksh Essential Oils, we serve leading nutraceutical, pharmaceutical, personal care, fragrance, tobacco, ayurvedic, and FMCG brands in India and globally. We source 100% natural raw materials directly from farmers and follow rigorous quality standards to ensure our products meet IP, BP, EP, USP, and JP specifications. Customization is available to meet your specific quality needs. Visit our website to explore our product range and company profile.",
        ],
        lists: [
          {
            title: "Our USP",
            columns: 2,
            items: [
              "Our Arachis/Peanut Oil is extracted from Non-GMO Seeds.",
              "Our Arachis Oil complies to British Pharmacopeia & USP standards",
              "Our Arachis Oil is Pyrrolizidine Alkaloids free.",
              "The Arachis Oil process by us does not contain any Alpha toxins.",
              "Melamine is absent in our Arachis Oil.",
              "Our Arachis Oil is manufactured in Halal and Kosher facilities.",
              "We do not use any residual solvent in the manufacturing process of Arachis Oil.",
              "Arachis Oil offered by us is free from any potential Allergen, Dioxin and Genotoxic Impurities.",
              "Our Arachis Oil is pesticides free.",
            ],
          },
        ],
      },
    ],
    variants: [
      {
        title: "Arachis Oil BP Exporter | British Pharmacopoeia Grade Peanut Oil",
        coa: ARACHIS_BP_COA,
        msds: ARACHIS_PHARMA_MSDS,
        paragraphs: [
          "Arachis Oil BP is a refined peanut oil that meets British Pharmacopoeia (BP) standards and is specially manufactured for pharmaceutical and medical applications. As a trusted bulk wholesaler, we supply premium quality Arachis Oil BP with complete quality documentation and consistent purity. This grade is rich in oleic acid and linoleic acid, making it suitable for use as an oily vehicle and solvent in pharmaceutical formulations.",
          "Arachis Oil BP is commonly used in injections, topical formulations, ointments, creams, and other medical preparations where BP-grade quality is essential. It is a clear yellowish liquid with a mild, sweet aroma similar to walnut. Apart from pharmaceutical use, it is also suitable for cosmetic and personal care formulations. We provide COAs with every batch to verify product quality and compliance. This grade is highly preferred by pharmaceutical manufacturers, injectable product manufacturers, and healthcare industries looking for reliable, certified Arachis Oil BP in bulk quantities with assured quality and consistency.",
        ],
      },
      {
        title: "Arachis Oil USP Supplier | USP Grade Peanut Oil for Pharmaceutical Use",
        coa: ARACHIS_USP_COA,
        msds: ARACHIS_PHARMA_MSDS,
        paragraphs: [
          "Arachis Oil USP is a highly refined peanut oil that complies with United States Pharmacopeia (USP) standards for pharmaceutical use. We manufacture Arachis Oil USP under strict quality checks to ensure high purity, safety, and consistency for sensitive medical applications. As a leading bulk distributor, we supply Arachis Oil USP to pharmaceutical companies, healthcare manufacturers, and formulation industries.",
          "This grade is widely used as a carrier oil in injectable medicines, capsules, topical products, and other pharmaceutical formulations. It is a clear, pale yellow liquid with a mild aroma and excellent stability. It is also used in cosmetic and personal care formulations. Our Arachis Oil USP is supplied with COA and other quality documents to verify compliance and maintain complete product traceability. We offer secure packaging for our bulk products. Our MOQ is 25 kgs. Arachis Oil USP is insoluble in water and miscible with ether and light petroleum. It has a shelf life of up to two years and is free from rancidity when stored under recommended conditions.",
        ],
      },
    ],
    seoTitle: "Arachis Oil Bulk Supplier | Natural, BP & USP Peanut Oil",
    seoDescription:
      "Buy bulk Arachis Oil, Arachis Oil BP, and Arachis Oil USP from a leading manufacturer and exporter. Cold pressed, pharma grade, with COA, MSDS, and worldwide shipping.",
  },

  "amla-oil": {
    slug: "amla-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Amla Oil",
    heading: "Natural Amla Oil Manufacturer | Cold Pressed Amla Oil",
    image: AMLA_IMG,
    imageAlt: "Natural Amla Oil",
    paragraphs: [
      "Amla Oil is a premium quality natural oil derived from the Indian Gooseberry, a highly nutritious fruit known for its sweet taste with a distinctive sour flavour. The fruit is greenish-yellow in colour and is traditionally respected in India as a symbol of nature and wellness. Our Amla Oil is extracted using the cold-pressed process from carefully selected fruits of Phyllanthus emblica. It is a rich source of vitamin C, tannins, flavonoids, ellagic acid, and other natural antioxidants that support cosmetic and wellness formulations.",
      "The seeds naturally contain linolenic acid and omega-3 fatty acids, while the fruits, leaves, roots, and stems are valued for their beneficial properties. Our bulk Amla Oil is soluble in alcohol and insoluble in water, making it suitable for various cosmetic formulations. It nourishes the scalp, reduces hair breakage, improves hair texture, and promotes healthy-looking skin. As a trusted bulk supplier, we offer pure quality Amla Oil for cosmetic, pharmaceutical, personal care, and wellness brands worldwide.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Emblica officinalis / Phyllanthus emblica" },
      { label: "Other Name", value: "Indian Gooseberry Oil" },
      { label: "Origin", value: "India" },
      { label: "Extraction Method", value: "Cold Pressed" },
      { label: "Plant Parts Used", value: "Fruits and Seeds" },
      { label: "Color", value: "Yellow to Greenish Yellow" },
      { label: "Odor", value: "Mild, Characteristic Fruity Aroma" },
    ],
    coa: AMLA_COA,
    msds: AMLA_MSDS,
    formTitle: "Contact us for Wholesale Amla Oil Enquiries",
    enquirySource: "Enquiry from Amla Oil Page",
    sections: [
      {
        title: "Bulk Amla Oil Uses & Benefits",
        paragraphs: [
          "Amla Oil contains naturally occurring compounds such as ascorbic acid, ellagitannins, emblicanin A, emblicanin B, punigluconin, pedunculagin, flavonoids, kaempferol, and gallic acid, making it a valuable ingredient for cosmetic and wellness products. It is widely used in hair care formulations because it nourishes the scalp, supports healthy hair growth, helps reduce hair fall, and delays premature hair greying. It is also valued for its antioxidant and anti-aging properties, helping improve the appearance of scars, wrinkles, fine lines, and age spots.",
          "Traditionally, Amla Oil has been used to support cardiovascular wellness, healthy cholesterol levels, immune health, urinary health, and overall well-being. It is also known for helping relieve mental stress and sinus discomfort. We recommend diluting Amla Oil with a suitable carrier oil before topical application to reduce the possibility of skin sensitivity. Our Amla Oil has a shelf life of up to two years and is suitable for hair care, skincare, aromatherapy, and wellness formulations.",
        ],
      },
      {
        title: "Bulk Amla Oil Supplier | Quality Assurance & Worldwide Export",
        paragraphs: [
          "As a trusted wholesale supplier, we manufacture Amla Oil from carefully selected natural fruits without adding preservatives, artificial fragrances, chemicals, fillers, or synthetic additives. Our Amla oil is widely used by cosmetic manufacturers, skincare brands, Ayurvedic companies, wellness brands, and personal care product manufacturers. Rich in essential fatty acids and natural antioxidants, Amla Oil is one of the most respected botanical ingredients in Ayurvedic and modern cosmetic formulations. It is particularly suitable for bulk hair and scalp formulations because it helps reduce stress on hair follicles while supporting natural hair pigmentation and healthier-looking hair.",
          "Every batch undergoes strict laboratory testing to ensure purity, consistency, and quality before dispatch. We provide complete documentation, including COA, MSDS, TDS, Allergen Declaration, Non-GMO Declaration, GMP, ISO, FSSAI, Halal, and Kosher certifications. Our secure packaging and reliable logistics network allow us to export bulk quantities worldwide with consistent quality and timely deliveries.",
        ],
      },
    ],
    variants: [],
    seoTitle: "Natural Amla Oil Manufacturer | Cold Pressed Amla Oil Bulk Supplier",
    seoDescription:
      "Buy bulk cold-pressed Amla Oil from a leading manufacturer and exporter. 100% natural Indian gooseberry oil with COA, MSDS, and worldwide shipping.",
  },

  "aloe-vera-oil": {
    slug: "aloe-vera-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Aloe Vera Oil",
    heading: "Aloe Vera Oil Manufacturer & Exporter | Bulk Aloe Vera Oil Wholesaler",
    image: ALOE_IMG,
    imageAlt: "Aloe Vera Oil",
    paragraphs: [
      "Aloe Vera Oil is prepared through the maceration of fresh Aloe Vera leaves in premium carrier oils such as almond oil, soybean oil, olive oil, mineral oil, or coconut oil. This slow cold infusion process allows the carrier oil to absorb the beneficial nutrients present in the Aloe Vera gel while maintaining its natural properties. As a bulk manufacturer and wholesaler, we supply 100% pure, natural, therapeutic-grade Aloe Vera Oil for cosmetic, skincare, hair care, wellness, and aromatherapy applications. The botanical name of Aloe Vera is Aloe barbadensis Miller, and it belongs to the Asphodelaceae family.",
      "Our Aloe Vera Oil is manufactured in India using carefully selected Aloe Vera leaves. It contains naturally occurring enzymes, vitamins, minerals, sugars, lignin, saponins, amino acids, vitamin A, vitamin C, vitamin D, and essential fatty acids. The oil is soluble in alcohol and most fixed oils, making it easy to incorporate into cosmetic formulations. We offer premium quality Aloe Vera Oil in bulk quantities with consistent quality, competitive pricing, and reliable worldwide export services.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Aloe barbadensis Miller" },
      { label: "Origin", value: "India" },
      { label: "Extraction Method", value: "Cold Infusion (Maceration)" },
      { label: "Plant Part Used", value: "Aloe Vera Leaf" },
      { label: "Color", value: "Pale yellow to light green" },
      { label: "Odor", value: "Odorless to very mild characteristic aroma" },
    ],
    coa: ALOE_COA,
    msds: ALOE_MSDS,
    formTitle: "Contact us for Wholesale Aloe Vera Oil Enquiries",
    enquirySource: "Enquiry from Aloe Vera Oil Page",
    sections: [
      {
        title: "Bulk Aloe Vera Oil Uses & Applications",
        paragraphs: [
          "Aloe Vera Oil is widely used as a natural ingredient in skincare, hair care, personal care, and wellness products because of its nourishing and soothing properties. It is commonly used as a home remedy for dry, irritated, and damaged skin and is often applied to minor burns, sores, and skin discomfort. The presence of amino acids, vitamins, minerals, and enzymes makes it suitable for improving the appearance of dry skin and supporting skin conditioning. Aloe Vera Oil is also used in hair treatments to nourish the scalp, reduce dryness, and improve the overall condition of the hair. It blends well with ingredients such as rose water and castor oil for enhanced skincare benefits. Because of its light texture, it penetrates the skin easily without leaving an oily feel, making it suitable for creams, lotions, serums, massage oils, after-sun products, and cosmetic formulations. As bulk manufacturers, we recommend a usage level of 5–10% in skincare formulations. Our Aloe Vera Oil is 100% natural, alcohol-free, vegan, cruelty-free, and contains no added colours or preservatives.",
        ],
        lists: [
          {
            title: "Common Uses of Aloe Vera Oil",
            columns: 2,
            items: [
              "Skincare products",
              "Hair care formulations",
              "Facial oils",
              "Massage oils",
              "Creams and lotions",
              "Serums",
              "After-sun products",
              "Dry and irritated skin care",
              "Blemish-prone skin",
              "Burns and minor skin discomfort",
              "Scalp nourishment",
              "Pain relief formulations",
              "Antioxidant skincare",
              "Antimicrobial formulations",
              "Wound care products",
            ],
          },
        ],
      },
      {
        title: "Bulk Aloe Vera Oil Exporter | Quality Assurance & Global Supply",
        paragraphs: [
          "Our Aloe Vera Oil is produced from high-quality natural sources and carefully processed to maintain purity and consistency in every batch. As a trusted bulk manufacturer and exporter, we supply 100% pure and authentic Aloe Vera Oil that is free from artificial additives and preservatives. Our products are packed in secure 25 kg to 180 kg HDPE drums for safe bulk transportation. We export Aloe Vera Oil to more than 40 countries through a strong global logistics network, ensuring timely deliveries by air and sea freight.",
          "Every batch is supported with complete quality documentation, including COA, TDS, MSDS, and other technical documents required for international trade. Our manufacturing facility follows GMP and ISO standards and holds FSSAI, Halal, and Kosher certifications. We also provide bulk samples for research, development, and product evaluation. Aloe Vera Oil naturally contains antioxidants such as beta-carotene and vitamin C, making it an excellent ingredient for cosmetic, skincare, and wellness formulations. We support manufacturers with consistent quality, competitive pricing, and dependable bulk supply solutions.",
        ],
      },
    ],
    variants: [],
    seoTitle: "Aloe Vera Oil Manufacturer & Exporter | Bulk Aloe Vera Oil Wholesaler",
    seoDescription:
      "Buy bulk Aloe Vera Oil from a leading manufacturer and exporter. 100% pure cold-infused oil with COA, MSDS, TDS, and worldwide shipping.",
  },

  "apricot-oil": {
    slug: "apricot-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Apricot Oil",
    heading: "Apricot Kernel Oil Distributor | Natural Apricot Oil Bulk Supplier",
    image: APRICOT_IMG,
    imageAlt: "Apricot Kernel Oil",
    paragraphs: [
      "Apricot Kernel Oil is a lightweight carrier oil extracted from the dried kernels of the apricot fruit (Prunus armeniaca) using the cold-pressed method. Known for its similarity to almond oil, this premium carrier oil is valued for its fast absorption, light texture, and excellent moisturizing properties. As a leading bulk manufacturer and exporter, we supply 100% pure and natural Apricot Kernel Oil to cosmetic, skincare, pharmaceutical, aromatherapy, and wellness industries worldwide.",
      "Rich in antioxidants and vitamins such as vitamin E and vitamin K, Apricot Kernel Oil is widely used in premium formulations for its nourishing and soothing benefits. It is a pale yellow to golden yellow oil with a mild characteristic aroma that blends easily with other carrier and essential oils. Our oil is produced from carefully selected apricot kernels and meets international quality standards. Suitable for sensitive skin, dry skin, and hair care formulations, our Apricot Kernel Oil is available in bulk quantities with consistent quality, competitive pricing, and reliable worldwide export services.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Prunus armeniaca" },
      { label: "Botanical Family", value: "Rosaceae" },
      { label: "Origin", value: "India" },
      { label: "Extraction Method", value: "Cold Pressed" },
      { label: "Plant Part Used", value: "Apricot Kernels (Seeds)" },
      { label: "Color", value: "Pale Yellow to Golden Yellow" },
      { label: "Odor", value: "Mild, Characteristic Nutty Aroma" },
    ],
    coa: APRICOT_COA,
    msds: APRICOT_MSDS,
    formTitle: "Contact us for Wholesale Apricot Kernel Oil Enquiries",
    enquirySource: "Enquiry from Apricot Oil Page",
    sections: [
      {
        title: "Product Features",
        lists: [
          {
            columns: 2,
            items: [
              "100% Natural",
              "No Added Color",
              "Alcohol-Free",
              "100% Pure",
              "Vegan",
              "Cruelty-Free",
            ],
          },
        ],
      },
      {
        title: "Bulk Apricot Kernel Oil Uses & Applications",
        paragraphs: [
          "Apricot Kernel Oil is a highly nutritious carrier oil with a wide range of cosmetic, wellness, therapeutic, and culinary applications. Rich in vitamins A, E, omega-6 fatty acids, and omega-9 fatty acids, it helps nourish dry skin, improve the skin barrier, and maintain healthy-looking skin. Its lightweight texture makes it an excellent base oil that blends easily with essential oils for aromatherapy and massage formulations. Apricot Oil is commonly used in skincare creams, lotions, soaps, lip care products, facial serums, massage oils, scented candles, hair care products, and cosmetic formulations.",
          "It is especially suitable for acne-prone and sensitive skin because of its soothing, antibacterial, and anti-inflammatory properties. The oil supports collagen production, helping reduce the appearance of wrinkles and fine lines while improving skin elasticity. It also helps soothe minor skin irritation, dryness, itching, rashes, cuts, and small wounds. In the culinary industry, Apricot Kernel Oil is used in selected recipes, jams, and flavouring applications. Its nourishing profile also makes it valuable in wellness and personal care formulations.",
        ],
      },
      {
        title: "Bulk Apricot Kernel Oil Supplier | Packaging, Quality & Global Export",
        paragraphs: [
          "As a trusted wholesale supplier, we provide premium quality Apricot Kernel Oil in secure packaging options ranging from 25 kg to 180 kg HDPE drums. Every batch is carefully tested to ensure purity, consistency, and compliance with international quality standards before dispatch. We supply complete quality documentation, including COA, MSDS, Technical Data Sheet (TDS), Allergen Declaration, and Non-GMO Declaration with domestic and international deliveries on request.",
          "Our experienced manufacturing team has the capacity to handle large-volume orders while maintaining consistent product quality. We proudly serve cosmetic, pharmaceutical, aromatherapy, wellness, and personal care brands across the world with competitive wholesale pricing. Our strong logistics network enables reliable exports to the USA, Canada, the UK, Australia, the Middle East, and many other countries. We also offer dependable delivery partners, and complete technical documentation required for export. Every shipment is packed carefully to help maintain product quality during transportation and long-distance international shipping.",
        ],
      },
      {
        title: "Why Choose Our Bulk Apricot Kernel Oil?",
        lists: [
          {
            columns: 2,
            items: [
              "Secure bulk packaging",
              "100% Natural",
              "Vegan",
              "Cruelty-Free",
              "No added chemicals",
              "Reliable worldwide shipping",
              "Complete documentation support",
              "Lab-tested quality",
              "Competitive wholesale pricing",
            ],
          },
        ],
      },
    ],
    variants: [],
    seoTitle: "Apricot Kernel Oil Distributor | Natural Apricot Oil Bulk Supplier",
    seoDescription:
      "Buy bulk Apricot Kernel Oil from a leading manufacturer and exporter. 100% pure cold-pressed carrier oil with COA, MSDS, TDS, and worldwide shipping.",
  },

  "avocado-oil": {
    slug: "avocado-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Avocado Oil",
    heading: "Avocado Oil Manufacturer & Supplier | Bulk Avocado Oil Distributor",
    image: AVOCADO_IMG,
    imageAlt: "Avocado Oil",
    paragraphs: [
      "At Hetaksh Essential Oils, we offer 100% natural Avocado Oil extracted using the cold-pressed method from the finest ripe avocados. This premium carrier oil is obtained from the soft pulp of the avocado fruit and is widely used in skincare, hair care, cosmetic, pharmaceutical, and culinary industries. Our Avocado Oil is supplied in its pure and authentic form for bulk applications. The botanical name of avocado is Persea gratissima. It is naturally rich in monounsaturated fatty acids, vitamins A, D, and E, vitamin E, and natural antioxidants that help nourish and protect the skin.",
      "Avocado Oil also contains valuable compounds such as oleic acid, palmitic acid, linoleic acid, stearic acid, tannins, flavonoids, and palmitoleic acid. These nutrients help improve skin elasticity, restore the skin’s natural glow, and leave it feeling soft, smooth, and supple. The oil blends well with Frankincense Essential Oil, Neroli Essential Oil, and Rose Essential Oil, making it an excellent carrier oil for aromatherapy and cosmetic formulations. We supply premium quality Avocado Oil in bulk with consistent quality and competitive pricing.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Persea gratissima" },
      { label: "Origin", value: "India" },
      { label: "Extraction Method", value: "Cold Pressed" },
      { label: "Plant Part Used", value: "Pulp of Avocado Fruit" },
      { label: "Color", value: "Pale Yellow to Greenish Yellow" },
      { label: "Odor", value: "Mild, Characteristic Fatty Aroma" },
      { label: "Solubility", value: "Insoluble in water and soluble in fixed oils" },
    ],
    coa: AVOCADO_COA,
    msds: AVOCADO_MSDS,
    formTitle: "Contact us for Wholesale Avocado Oil Enquiries",
    enquirySource: "Enquiry from Avocado Oil Page",
    sections: [
      {
        title: "Bulk Avocado Oil Uses | Skin Care, Hair Care & Food Applications",
        paragraphs: [
          "Avocado Oil is widely used across multiple industries because of its rich nutritional profile and excellent moisturizing properties. It is especially valued in the skincare industry due to the presence of vitamins, beta-carotene, lutein, vitamin E, and natural antioxidants that help improve skin elasticity and maintain healthy-looking skin. The oil deeply moisturizes dry skin with the help of oleic acid and omega fatty acids while supporting the healing and recovery of irritated or damaged skin. It also helps protect the skin from environmental and oxidative stress while reducing the appearance of dryness and inflammation. In hair care, Avocado Oil nourishes the scalp, reduces dryness, and supports healthy hair by penetrating deeply into the scalp. It is also used in nail and cuticle care, creams, lotions, serums, massage oils, handmade skincare products, and personal care formulations. In the food industry, Avocado Oil is used in salad dressings, cooking applications, and nutraceutical capsules because of its clean taste and stable fatty acid profile.",
        ],
        lists: [
          {
            title: "Industries Using Avocado Oil",
            columns: 2,
            items: [
              "Skincare Industry",
              "Hair Care Industry",
              "Cosmetic Industry",
              "Personal Care Industry",
              "Food Industry",
              "Aromatherapy Industry",
              "Nutraceutical Industry",
              "Pharmaceutical Industry",
              "Massage and Wellness Industry",
            ],
          },
        ],
      },
      {
        title: "Bulk Avocado Oil Supplier | Packaging, Quality & Worldwide Export",
        paragraphs: [
          "Our Avocado Oil has a shelf life of up to two years when stored under recommended conditions. As a trusted bulk exporter and wholesale supplier, we manufacture premium quality Avocado Oil from carefully selected ripe avocados to ensure excellent purity, nutritional value, and natural aroma. This versatile carrier oil is widely used by food manufacturers, cosmetic brands, pharmaceutical companies, aromatherapy businesses, and wellness industries.",
          "We supply Avocado Oil in bulk quantities starting from 25 kg, with secure packaging options available in 25 kg to 180 kg HDPE drums. Our strong global logistics network enables reliable exports worldwide with timely delivery and secure transportation. Every batch is supplied with complete quality documentation, including COA, MSDS, Technical Data Sheet (TDS), Allergen Declaration, Non-GMO Declaration, and certifications such as ISO, GMP, FSSAI, Halal, and Kosher. We focus on maintaining consistent product quality, competitive wholesale pricing, and dependable customer support for businesses of every size.",
        ],
      },
    ],
    variants: [],
    seoTitle: "Avocado Oil Manufacturer & Supplier | Bulk Avocado Oil Distributor",
    seoDescription:
      "Buy bulk Avocado Oil from a leading manufacturer and exporter. 100% pure cold-pressed carrier oil with COA, MSDS, TDS, and worldwide shipping.",
  },

  "black-pepper-oil": {
    slug: "black-pepper-oil",
    category: "spice-oils",
    categoryName: "Spice Oils",
    name: "Black Pepper Oil",
    heading: "Black Pepper Oil Manufacturer & Exporter | Bulk Black Pepper Essential Oil Supplier",
    image: "/assets/images/products/spice-oil/BLACK PEPPER OIL.webp",
    imageAlt: "Black Pepper Essential Oil",
    paragraphs: [
      "Black Pepper Oil is a premium quality spice essential oil extracted from the dried fruits of Piper nigrum through the steam distillation process. It is also known as Madagascar Pepper Oil, Common Pepper Oil, and Pepper Oil. As a trusted bulk manufacturer, distributor, and exporter, Hetaksh Essential Oils supplies 100% pure and natural Black Pepper Oil to cosmetic, pharmaceutical, aromatherapy, wellness, and personal care industries worldwide. The oil is obtained from carefully selected peppercorns and is widely used in Ayurveda and traditional medicine.",
      "It has a pale greenish to light yellow color with a strong, musky, warm, and spicy aroma. Black Pepper Oil is known for its natural warming effect that supports healthy circulation, digestive comfort, and mental alertness. It is an undiluted therapeutic-grade essential oil that undergoes multiple quality checks before dispatch. Rich in vitamins and minerals such as calcium, manganese, iron, vitamin K, beta-carotene, phosphorus, potassium, and selenium, this premium oil is highly valued for its wellness and industrial applications.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Piper nigrum" },
      { label: "Other Names", value: "Madagascar Pepper Oil, Common Pepper Oil, Pepper Oil" },
      { label: "Origin", value: "India" },
      { label: "Extraction Method", value: "Steam Distillation" },
      { label: "Plant Part Used", value: "Dried Pepper Fruits (Peppercorns)" },
      { label: "Color", value: "Pale Greenish to Light Yellow" },
      { label: "Aroma", value: "Strong, Warm, Musky, and Spicy" },
    ],
    coa: "/assets/images/products/spice-oil/COA/BLACK PEPPER OIL COA.pdf",
    msds: "/assets/images/products/spice-oil/MSDS/BLACK PEPPER OIL MSDS.pdf",
    formTitle: "Contact us for Wholesale Black Pepper Oil Enquiries",
    enquirySource: "Enquiry from Black Pepper Oil Page",
    sections: [
      {
        title: "Key Components",
        lists: [
          {
            columns: 2,
            items: ["Limonene", "Sabinene", "Eugenol", "1,8-Cineole"],
          },
        ],
      },
      {
        title: "Other Natural Constituents",
        lists: [
          {
            columns: 2,
            items: ["Alpha-Terpineol", "Camphene", "Pinene", "Myrcene", "Terpinene", "Sabinene"],
          },
        ],
      },
    ],
    variants: [
      {
        title: "Black Pepper Hydrosol Manufacturer | Bulk Black Pepper Oil Supplier",
        coa: "/assets/images/products/Hydrosol/COA/BLACK PEPPER HYDROSOL COA.pdf",
        msds: "/assets/images/products/Hydrosol/MSDS/Black Pepper Oil Hydrosol MSDS.pdf",
        paragraphs: [
          "Black Pepper Hydrosol, also known as Black Pepper Water or Black Pepper Arak, is an aromatic floral water produced during the steam distillation of black peppercorns. As a leading manufacturer and bulk supplier, Hetaksh Essential Oils offers premium quality Black Pepper Hydrosol for cosmetic, wellness, and personal care industries. It is naturally antibacterial and helps fight infection-causing microorganisms while offering a refreshing and purifying experience. Black Pepper Hydrosol is commonly used as a facial toner or facial mist for oily and acne-prone skin, helping reduce skin impurities and refresh the complexion. It is also used as a scalp mist to relieve itchy scalp and refresh the hair. In aromatherapy, it is added to diffusers to promote mental clarity, focus, relaxation, and a feeling of purification for the mind and body. It is also applied as a compress or body spray to soothe tired muscles and is widely used in creams, lotions, shampoos, soaps, and other personal care formulations. Our Black Pepper Hydrosol is manufactured under strict quality standards and supplied in bulk worldwide.",
        ],
        lists: [
          {
            title: "Important Properties",
            columns: 2,
            items: [
              "Antispasmodic",
              "Anti-rheumatic",
              "Anti-arthritic",
              "Antibacterial",
              "Antioxidant",
              "Carminative",
              "Diuretic",
              "Digestive",
              "Diaphoretic",
            ],
          },
        ],
      },
      {
        title: "Bulk Black Pepper Oil Supplier | Quality, Packaging & Worldwide Export",
        paragraphs: [
          "As a leading exporter and wholesale supplier of Black Pepper Essential Oil and Black Pepper Hydrosol, we maintain consistent quality across every production batch through strict laboratory testing and quality control. Our products have a shelf life of up to two years when stored under recommended conditions. We offer bulk quantities starting from 25 kg, packed securely in 25 kg to 180 kg HDPE drums for safe domestic and international transportation. We provide complete quality documentation, including COA, MSDS, TDS, and other technical certificates required for export.",
          "Black Pepper Oil is widely used in cosmetic products, massage oils, aromatherapy, pharmaceutical formulations, and wellness products. Traditionally, it has been used to support digestive wellness, muscle comfort, circulation, sore muscles, muscle cramps, constipation, detoxification, and relief from excess gas. It is also valued in wellness applications that support people trying to reduce smoking habits and nicotine dependence. We offer reliable logistics, competitive pricing, and consistent product quality for businesses worldwide.",
        ],
      },
    ],
    seoTitle: "Black Pepper Oil Manufacturer & Exporter | Bulk Black Pepper Essential Oil Supplier",
    seoDescription:
      "Buy bulk Black Pepper Oil and Black Pepper Hydrosol from a leading manufacturer and exporter. 100% pure, steam distilled, with COA, MSDS, and worldwide shipping.",
  },

  "bergamot-oil": {
    slug: "bergamot-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Bergamot Oil",
    heading: "Bergamot Oil Manufacturer & Exporter | Bulk Bergamot Essential Oil Supplier",
    image: "/assets/images/products/Essential-Oils/Bergamot-Oil.webp",
    imageAlt: "Bergamot Essential Oil",
    paragraphs: [
      "Bergamot Oil is a premium essential oil extracted from the peel of the bergamot fruit (Citrus bergamia), a citrus fruit believed to be a natural hybrid of lemon and bitter orange. At Hetaksh Essential Oils, we supply 100% pure and natural Bergamot Oil in bulk for cosmetic, skincare, hair care, aromatherapy, perfumery, wellness, and personal care industries. Our Bergamot Oil is extracted using the cold-pressed method, which helps preserve its fresh citrus aroma and naturally occurring active compounds. Traditionally grown in the Calabria region of southern Italy, bergamot is highly valued for its refreshing, slightly floral fragrance and versatile applications.",
      "Bergamot Oil naturally contains compounds such as limonene, linalool, and linalyl acetate that make it suitable for premium formulations. It blends well with lavender, rosemary, frankincense, cedarwood, and sweet orange essential oils. As a trusted bulk manufacturer and exporter, we provide consistent quality, competitive pricing, and reliable worldwide supply for businesses looking for high-quality Bergamot Essential Oil.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Citrus bergamia" },
      { label: "Plant Family", value: "Rutaceae" },
      { label: "Origin", value: "Calabria, Italy" },
      { label: "Extraction Method", value: "Cold Pressed" },
      { label: "Plant Part Used", value: "Fruit Peel" },
      { label: "Color", value: "Greenish Yellow to Yellow-Green" },
      { label: "Aroma", value: "Fresh, Citrus, Sweet, Slightly Floral" },
    ],
    coa: "/assets/images/products/Essential-Oils/coa/BERGAMOT-OIL-COA.pdf",
    msds: "/assets/images/products/Essential-Oils/MSDS/BERGAMOT-OIL-MSDS.pdf",
    formTitle: "Contact us for Wholesale Bergamot Oil Enquiries",
    enquirySource: "Enquiry from Bergamot Oil Page",
    sections: [
      {
        title: "Key Natural Constituents",
        lists: [
          {
            columns: 2,
            items: ["Limonene", "Linalool", "Linalyl Acetate"],
          },
        ],
      },
    ],
    variants: [
      {
        title: "Bergamot Hydrosol Manufacturer | Bulk Bergamot Floral Water Supplier",
        coa: "/assets/images/products/Hydrosol/COA/BERGAMOT HYDROSOL COA.pdf",
        msds: "/assets/images/products/Hydrosol/MSDS/Bergamot Oil Hydrosol MSDS.pdf",
        paragraphs: [
          "Bergamot Hydrosol, also known as Bergamot Floral Water, is a refreshing aromatic water obtained during the steam distillation of bergamot peels. As a trusted bulk manufacturer and exporter, Hetaksh Essential Oils supplies premium quality Bergamot Hydrosol for cosmetic, skincare, aromatherapy, wellness, and personal care industries. It has a fresh, citrusy, slightly floral fragrance with a mild acidic pH of approximately 4.5–5.5, making it suitable for facial mists, skin toners, body sprays, room fresheners, and hair care formulations. Bergamot Hydrosol is known for its soothing and refreshing properties that help revitalize dull-looking skin and provide a cooling sensation. It is commonly used in creams, lotions, facial mists, soaps, shampoos, and natural beauty products because of its gentle nature. The pleasant citrus aroma also makes it a suitable product in aromatherapy, linen sprays, and natural room fresheners. We supply Bergamot Hydrosol in bulk quantities with consistent quality, secure packaging, and worldwide shipping for cosmetic manufacturers, wellness brands, and personal care industries.",
          "<b>Important Usage Note:</b> Bergamot Essential Oil should not be applied directly to the skin. It should always be diluted with a suitable carrier oil such as jojoba oil, sweet almond oil, or olive oil before topical application.",
        ],
      },
      {
        title: "Bulk Bergamot Oil Uses | Skincare, Hair Care & Aromatherapy Applications",
        paragraphs: [
          "Bergamot Oil is widely used in skincare, hair care, personal care, aromatherapy, perfumery, and wellness industries because of its refreshing fragrance and skin-conditioning properties. It is commonly added to facial serums, moisturizers, cleansers, shampoos, conditioners, perfumes, massage oils, scented candles, soaps, and aromatherapy diffusers. Bergamot Oil is also the signature ingredient that gives Earl Grey tea its distinctive citrus aroma. In skincare, it helps balance excess oil, making it suitable for oily and acne-prone skin. Its natural antibacterial and antioxidant properties help improve the appearance of dull skin while supporting a fresh and healthy-looking complexion. It protects the skin from environmental stress like pollution and even oxidation. In aromatherapy, Bergamot Oil is valued for its uplifting and calming aroma that promotes relaxation and emotional well-being. Because it blends easily with other essential oils, it is widely used in premium cosmetic and wellness formulations.",
        ],
      },
    ],
    seoTitle: "Bergamot Oil Manufacturer & Exporter | Bulk Bergamot Essential Oil Supplier",
    seoDescription:
      "Buy bulk Bergamot Oil and Bergamot Hydrosol from a leading manufacturer and exporter. Cold pressed, with COA, MSDS, and worldwide shipping.",
  },

  "bois-de-rose-oil": {
    slug: "bois-de-rose-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Bois de Rose Oil",
    heading: "Bois de Rose Oil Distributor & Wholesaler | Bulk Rosewood Oil Supplier",
    image: "/assets/images/products/Essential-Oils/BOIS-DE-ROSE-HYDROSOL.webp",
    imageAlt: "Bois de Rose Oil / Rosewood Oil",
    paragraphs: [
      "Bois de Rose Oil, commonly known as Rosewood Oil, is a premium essential oil extracted from the wood of the Aniba rosaeodora tree using the steam distillation method. As a trusted bulk wholesaler, Hetaksh Essential Oils supplies 100% pure, authentic and premium grade Bois de Rose Oil to cosmetic, personal care, aromatherapy, and wellness industries worldwide. This essential oil is well known for its sweet, floral, and woody aroma with a naturally high linalool content. Its calming, restorative, and skin-conditioning properties make it a preferred ingredient in skincare and beauty formulations.",
      "Bois de Rose Oil helps improve the appearance of the skin by supporting a healthy complexion, enhancing skin softness, and promoting smoother-looking skin. It is commonly used in facial creams, lotions, serums, anti-aging products, shampoos, conditioners, body care products, and diffuser blends. Traditionally, the oil has also been used to promote relaxation, improve mental focus, soothe tired muscles, support skin regeneration, and reduce inflammation. We offer premium quality Bois de Rose Oil in bulk quantities with consistent quality and reliable worldwide supply.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Aniba rosaeodora" },
      { label: "Common Name", value: "Bois de Rose Oil / Rosewood Oil" },
      { label: "Origin", value: "Brazil, Peru" },
      { label: "Extraction Method", value: "Steam Distillation" },
      { label: "Plant Part Used", value: "Wood" },
      { label: "Color", value: "Colorless to Pale Yellow" },
      { label: "Aroma", value: "Sweet, Floral, Woody" },
      { label: "Main Constituent", value: "Linalool" },
    ],
    coa: "/assets/images/products/Essential-Oils/coa/BOIS-DE-ROSE-OIL-COA.pdf",
    msds: "/assets/images/products/Essential-Oils/MSDS/BOIS-DE-ROSE-OIL-MSDS.pdf",
    formTitle: "Contact us for Wholesale Bois de Rose Oil Enquiries",
    enquirySource: "Enquiry from Bois de Rose Oil Page",
    variants: [
      {
        title: "Bois de Rose Hydrosol Manufacturer | Bulk Rosewood Floral Water Supplier",
        coa: "/assets/images/products/Hydrosol/COA/BOIS-DE-ROSE HYDROSOL COA.pdf",
        msds: "/assets/images/products/Hydrosol/MSDS/Bois-De-Rose Oil Hydrosol MSDS.pdf",
        paragraphs: [
          "Bois de Rose Hydrosol is a floral and woody aromatic water obtained during the steam distillation of the wood of the Aniba rosaeodora tree. Native to the Amazon rainforest of Brazil and Peru, the tree is known for its rich natural aroma and high-quality essential oil. Bois de Rose Hydrosol has a sweet, woody, fruity, and floral fragrance that makes it suitable for aromatherapy, room fresheners, personal care products, and natural wellness formulations. It contains naturally occurring compounds such as linalool, linalool oxides, eugenol, and terpineol. The hydrosol typically has a slightly acidic pH ranging from 4.0 to 5.0. It is widely used in soaps, perfumes, facial mists, skincare products, and body care formulations. It is valued for helping refresh the skin, reduce the appearance of wrinkles, pimples, acne, and blackheads, while also providing a calming effect that helps reduce stress. Its pleasant aroma also makes it useful as a natural air freshener and insect-repelling formulation. We supply premium quality Bois de Rose Hydrosol in bulk with reliable worldwide shipping.",
        ],
      },
      {
        title: "Bulk Bois de Rose Oil Supplier | Quality Assurance, Packaging & Worldwide Export",
        paragraphs: [
          "As a trusted bulk supplier and exporter, Hetaksh Essential Oils is committed to delivering premium quality Bois de Rose Oil and Bois de Rose Hydrosol with consistent purity and quality. Every batch undergoes strict laboratory testing before dispatch to ensure it meets international quality standards. Our products are available in bulk quantities starting from 25 kg and are packed securely in 25 kg to 180 kg HDPE drums for safe transportation. We provide complete documentation, including COA, MSDS, Technical Data Sheet (TDS), Allergen Declaration, and Non-GMO Declaration, along with certifications such as ISO, GMP, FSSAI, Halal, and Kosher. Our experienced logistics team ensures timely worldwide delivery with secure packaging and dependable shipping solutions. Whether you require Bois de Rose Oil for skincare, cosmetics, aromatherapy, perfumery, wellness, or personal care products, we provide competitive wholesale pricing, consistent product quality, and dedicated customer support for businesses across the globe.",
        ],
      },
    ],
    seoTitle: "Bois de Rose Oil Distributor & Wholesaler | Bulk Rosewood Oil Supplier",
    seoDescription:
      "Buy bulk Bois de Rose Oil and Hydrosol from a leading wholesaler and exporter. 100% pure rosewood oil with COA, MSDS, and worldwide shipping.",
  },

  "black-currant-seed-oil": {
    slug: "black-currant-seed-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Black Currant Seed Oil",
    heading: "Black Currant Seed Oil Distributor & Exporter | Bulk Black Currant Oil Wholesaler",
    image: "/assets/images/products/Carrier-Oils/Black-Currant-Oil.webp",
    imageAlt: "Black Currant Seed Oil",
    paragraphs: [
      "Black Currant Seed Oil is a high-grade quality carrier oil. It is extracted from the seeds of the black currant fruit (Ribes nigrum) using the cold-pressed extraction method. As a trusted bulk manufacturer and exporter, Hetaksh Essential Oils supplies 100% pure and natural Black Currant Seed Oil to cosmetic, skincare, hair care, nutraceutical, pharmaceutical, and wellness industries worldwide. This nutrient-rich oil is valued for its high content of essential fatty acids, including omega-3, omega-6, gamma-linolenic acid (GLA), and stearidonic acid (SDA). It is also naturally rich in vitamin E and powerful antioxidants that help protect and nourish the skin. Black Currant Seed Oil has a light texture that absorbs easily without leaving a greasy feel, making it suitable for premium skincare and hair care formulations. It helps improve skin elasticity, supports the skin barrier, and nourishes dry and sensitive skin. We supply high-quality Black Currant Seed Oil in bulk quantities with consistent quality, competitive pricing, and reliable worldwide export services.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Ribes nigrum" },
      { label: "Common Name", value: "Black Currant Seed Oil" },
      { label: "Origin", value: "India" },
      { label: "Extraction Method", value: "Cold Pressed" },
      { label: "Plant Part Used", value: "Seeds" },
      { label: "Color", value: "Golden Yellow to Amber Yellow" },
      { label: "Odor", value: "Mild, Characteristic Nutty Aroma" },
      { label: "Solubility", value: "Insoluble in water and soluble in fixed oils" },
    ],
    coa: "/assets/images/products/Carrier-Oils/coa/BLACK-CURRANT-OIL-COA.pdf",
    msds: "/assets/images/products/Carrier-Oils/MSDS/BLACK CURRANT OIL MSDS.pdf",
    formTitle: "Contact us for Wholesale Black Currant Seed Oil Enquiries",
    enquirySource: "Enquiry from Black Currant Seed Oil Page",
    sections: [
      {
        title: "Bulk Black Currant Seed Oil Uses | Cosmetic, Hair Care & Wellness Applications",
        paragraphs: [
          "Black Currant Seed Oil is widely used in skincare, hair care, nutraceutical, pharmaceutical, and wellness industries because of its nourishing and moisturizing properties. The oil is naturally rich in gamma-linolenic acid (GLA), omega-3, omega-6, vitamin E, and antioxidants that help maintain healthy-looking skin and improve skin hydration. It supports the skin’s natural barrier, helps reduce dryness, and improves the appearance of rough or mature skin. It is commonly used in facial serums, anti-aging creams, lotions, moisturizers, massage oils, lip care products, and body oils. In hair care, Black Currant Seed Oil helps nourish the scalp, improve hair softness, and reduce dryness and brittleness. Its lightweight texture allows it to blend easily with other carrier and essential oils, making it suitable for aromatherapy and cosmetic formulations. It is also used in nutraceutical products because of its valuable fatty acid profile. As a bulk supplier, we provide premium quality Black Currant Seed Oil for manufacturers developing skincare, personal care, and wellness products.",
        ],
        lists: [
          {
            title: "Common Applications",
            columns: 2,
            items: [
              "Facial Serums",
              "Anti-aging Creams",
              "Moisturizers",
              "Hair Oils",
              "Scalp Treatments",
              "Massage Oils",
              "Lip Care Products",
              "Body Lotions",
              "Cosmetic Formulations",
              "Aromatherapy Blends",
              "Nutraceutical Products",
            ],
          },
        ],
      },
      {
        title: "Bulk Black Currant Seed Oil Supplier | Quality, Packaging & Worldwide Export",
        paragraphs: [
          "As a trusted wholesale supplier and exporter, Hetaksh Essential Oils offers premium quality Black Currant Seed Oil that is free from artificial colours, preservatives, and harmful additives. Every batch undergoes strict laboratory testing to ensure purity, consistency, and international quality standards. Our minimum order quantity starts from 25 kg, and we offer secure packaging in 25 kg to 180 kg HDPE drums for safe transportation. We provide complete documentation, including COA, MSDS, Technical Data Sheet (TDS), Allergen Declaration, and Non-GMO Declaration, along with certifications such as ISO, GMP, FSSAI, Halal, and Kosher. Our experienced logistics network ensures timely worldwide delivery to cosmetic, pharmaceutical, nutraceutical, and wellness manufacturers. With competitive wholesale pricing, reliable customer support, and consistent product quality, we are a trusted sourcing partner for bulk Black Currant Seed Oil.",
        ],
        lists: [
          {
            title: "Why Choose Our Black Currant Seed Oil?",
            columns: 2,
            items: [
              "100% Pure and Natural",
              "Cold Pressed",
              "No Added Chemicals",
              "Vegan",
              "Cruelty-Free",
              "Secure Bulk Packaging",
              "Complete Quality Documentation",
              "Worldwide Shipping",
              "Competitive Wholesale Pricing",
            ],
          },
        ],
      },
    ],
    variants: [],
    seoTitle: "Black Currant Seed Oil Distributor & Exporter | Bulk Black Currant Oil Wholesaler",
    seoDescription:
      "Buy bulk Black Currant Seed Oil from a leading manufacturer and exporter. Cold pressed carrier oil with COA, MSDS, TDS, and worldwide shipping.",
  },

  "borage-oil": {
    slug: "borage-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Borage Oil",
    heading: "Borage Oil Supplier and Bulk Exporter | Bulk Borage Seed Oil Distributor",
    image: "/assets/images/products/Carrier-Oils/Borage-Oil.webp",
    imageAlt: "Borage Seed Oil",
    paragraphs: [
      "Borage Oil is a premium quality carrier oil extracted from the seeds of the borage plant (Borago officinalis) using the cold-pressed extraction method. As a trusted bulk manufacturer, wholesaler, and exporter, Hetaksh Essential Oils supplies 100% pure and natural Borage Oil to cosmetic, pharmaceutical, nutraceutical, skincare, hair care, and wellness industries worldwide. Borage Oil is widely known for its exceptionally high content of gamma-linolenic acid (GLA), one of the most valuable omega-6 fatty acids that helps nourish and protect the skin. The oil is also rich in linoleic acid, oleic acid, palmitic acid, stearic acid, vitamin E, and natural antioxidants. Its lightweight texture absorbs easily into the skin without leaving a greasy feel, making it suitable for premium cosmetic formulations. Borage Oil helps improve skin hydration, supports the skin barrier, and promotes healthy-looking skin and hair. We supply premium quality Borage Oil in bulk quantities with consistent quality, competitive pricing, and reliable worldwide export services.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Borago officinalis" },
      { label: "Common Name", value: "Borage Seed Oil" },
      { label: "Origin", value: "India" },
      { label: "Extraction Method", value: "Cold Pressed" },
      { label: "Plant Part Used", value: "Seeds" },
      { label: "Color", value: "Pale Yellow to Golden Yellow" },
      { label: "Odor", value: "Mild, Characteristic Nutty Aroma" },
      { label: "Solubility", value: "Insoluble in water and soluble in fixed oils" },
    ],
    coa: "/assets/images/products/Carrier-Oils/coa/BORAGE-OIL-COA.pdf",
    msds: "/assets/images/products/Carrier-Oils/MSDS/BORAGE OIL MSDS.pdf",
    formTitle: "Contact us for Wholesale Borage Oil Enquiries",
    enquirySource: "Enquiry from Borage Oil Page",
    sections: [
      {
        title: "Key Natural Constituents",
        lists: [
          {
            columns: 2,
            items: [
              "Gamma-Linolenic Acid (GLA)",
              "Linoleic Acid",
              "Oleic Acid",
              "Palmitic Acid",
              "Stearic Acid",
              "Vitamin E",
              "Natural Antioxidants",
            ],
          },
        ],
      },
      {
        title: "Bulk Borage Oil Uses | Skincare, Hair Care & Wellness Applications",
        paragraphs: [
          "Borage Oil is widely used in skincare, hair care, nutraceutical, pharmaceutical, and personal care industries because of its rich nutritional profile. It is especially valued in cosmetic formulations for its ability to moisturize dry skin, improve skin elasticity, and support the skin’s natural protective barrier. The high concentration of gamma-linolenic acid (GLA) helps soothe dry, rough, and sensitive skin while promoting a smoother and healthier appearance. Borage Oil is commonly used in facial serums, anti-aging creams, moisturizers, lotions, body oils, massage oils, lip care products, and skincare formulations. It is also beneficial in hair care products where it helps nourish the scalp, reduce dryness, and improve hair softness and shine. Because of its lightweight texture, Borage Oil blends easily with essential oils and other carrier oils, making it suitable for aromatherapy and massage applications. It is also used in nutraceutical supplements because of its valuable fatty acid content.",
        ],
        lists: [
          {
            title: "Common Applications",
            columns: 2,
            items: [
              "Facial Serums",
              "Moisturizers",
              "Anti-aging Creams",
              "Massage Oils",
              "Hair Oils",
              "Scalp Treatments",
              "Body Lotions",
              "Lip Care Products",
              "Aromatherapy Blends",
              "Cosmetic Formulations",
              "Nutraceutical Products",
              "Personal Care Products",
            ],
          },
        ],
      },
      {
        title: "Bulk Borage Oil Supplier | Quality Assurance & Worldwide Export",
        paragraphs: [
          "As a leading wholesale supplier and exporter, Hetaksh Essential Oils provides premium quality Borage Oil that is free from artificial colours, preservatives, and harmful additives. Every batch is manufactured under strict quality control and laboratory testing to ensure purity, consistency, and international standards. We offer bulk quantities starting from 25 kg with secure packaging in 25 kg to 180 kg HDPE drums for safe domestic and international transportation. Our products are supplied with complete documentation, including COA, MSDS, Technical Data Sheet (TDS), Allergen Declaration, and Non-GMO Declaration, along with certifications such as ISO, GMP, FSSAI, Halal, and Kosher. We serve cosmetic, pharmaceutical, nutraceutical, wellness, and personal care manufacturers across the globe with reliable logistics, competitive wholesale pricing, and timely deliveries. Our dedicated team ensures consistent product quality and dependable support for every bulk order.",
        ],
        lists: [
          {
            title: "Why Choose Our Borage Oil?",
            columns: 2,
            items: [
              "100% Pure and Natural",
              "Cold Pressed",
              "Rich in Gamma-Linolenic Acid (GLA)",
              "No Added Chemicals",
              "Vegan",
              "Cruelty-Free",
              "Secure HDPE Packaging",
              "Worldwide Shipping",
              "Complete Technical Documentation",
              "Competitive Wholesale Pricing",
            ],
          },
        ],
      },
    ],
    variants: [],
    seoTitle: "Borage Oil Supplier and Bulk Exporter | Bulk Borage Seed Oil Distributor",
    seoDescription:
      "Buy bulk Borage Oil from a leading manufacturer and exporter. Cold pressed, rich in GLA, with COA, MSDS, TDS, and worldwide shipping.",
  },

  "cardamom-oil": {
    slug: "cardamom-oil",
    category: "spice-oils",
    categoryName: "Spice Oils",
    name: "Cardamom Oil",
    heading: "Cardamom Oil Manufacturer & Distributor | Bulk Cardamom Essential Oil Supplier",
    image: "/assets/images/products/spice-oil/CARDAMOM OIL.webp",
    imageAlt: "Cardamom Essential Oil",
    paragraphs: [
      "Cardamom Oil is an aromatic essential oil obtained from the seeds of green cardamom, botanically known as Elettaria cardamomum. It is commonly produced through steam distillation of the dried or crushed cardamom seeds and is recognized for its fresh, warm, sweet, spicy, and slightly camphoraceous aroma. Cardamom belongs to the Zingiberaceae family and is widely valued in food, flavour, fragrance, cosmetic, pharmaceutical, aromatherapy, and wellness applications. The oil contains naturally occurring volatile compounds, with alpha-terpinyl acetate and 1,8-cineole among its major constituents, along with linalool, linalyl acetate, and alpha-terpineol.",
      "Cardamom Oil is used in flavouring formulations, perfumes, soaps, massage blends, personal care products, oral care products, and aromatherapy preparations. Its distinctive aroma makes it particularly useful in fragrance compositions and food flavouring. As a bulk manufacturer, wholesaler, and exporter, Hetaksh Essential Oils supplies Cardamom Oil for commercial formulation and manufacturing requirements.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Elettaria cardamomum" },
      { label: "Plant Family", value: "Zingiberaceae" },
      { label: "Part Used", value: "Seeds" },
      { label: "Extraction Method", value: "Steam Distillation" },
      { label: "Aroma", value: "Sweet, Fresh, Warm and Spicy" },
      { label: "Appearance", value: "Pale Yellow to Yellow Liquid" },
      {
        label: "Main Constituents",
        value: "Alpha-terpinyl acetate, 1,8-cineole, linalool, linalyl acetate",
      },
    ],
    coa: "/assets/images/products/spice-oil/COA/CARDAMOM OIL COA.pdf",
    msds: "/assets/images/products/spice-oil/MSDS/CARDAMOM OIL MSDS.pdf",
    formTitle: "Contact us for Wholesale Cardamom Oil Enquiries",
    enquirySource: "Enquiry from Cardamom Oil Page",
    sections: [
      {
        title: "Major Applications",
        paragraphs: ["Cardamom Oil is commonly sourced by:"],
        lists: [
          {
            columns: 2,
            items: [
              "Food and flavour manufacturers",
              "Fragrance and perfumery companies",
              "Cosmetic manufacturers",
              "Personal care brands",
              "Aromatherapy businesses",
              "Wellness and herbal product manufacturers",
              "Pharmaceutical and oral care industries",
            ],
          },
        ],
        trailingParagraphs: [
          "Its ability to blend with other aromatic oils also makes it useful in customized fragrance and aromatherapy formulations.",
        ],
      },
    ],
    variants: [
      {
        title: "Cardamom Oil BP | Pharmaceutical Grade Cardamom Oil for Bulk Buyers",
        coa: "/assets/images/products/Pharma-Grade-Oils/COA/CARDAMOM OIL BP COA.pdf",
        msds: "/assets/images/products/Pharma-Grade-Oils/MSDS/CARDAMOM OIL MSDS.pdf",
        paragraphs: [
          "Cardamom Oil BP refers to Cardamom Oil supplied against applicable British Pharmacopoeia requirements where a pharmacopoeial specification is required by the buyer. The British Pharmacopoeia is the UK’s official collection of quality standards for pharmaceutical substances and medicinal products, and the current BP 2026 edition is legally effective from 1 January 2026. For this reason, manufacturers purchasing a pharmaceutical-grade Cardamom Oil should confirm the exact monograph, specification, and documentation required for their intended application rather than relying only on the term “BP grade.”",
          "Cardamom Oil is valued for its characteristic aromatic profile and naturally occurring volatile constituents. Its principal components commonly include alpha-terpinyl acetate and 1,8-cineole, with other compounds such as linalool, linalyl acetate, and alpha-terpineol contributing to its overall composition. The oil can be used in suitable pharmaceutical, oral care, flavouring, and aromatic formulations according to the requirements of the finished product.",
        ],
        lists: [
          {
            title: "Cardamom Oil BP Components",
            columns: 2,
            items: [
              "Alpha-terpinyl acetate",
              "1,8-Cineole",
              "Linalool",
              "Linalyl acetate",
              "Alpha-terpineol",
            ],
          },
        ],
      },
      {
        title: "Cardamom Oil BP Applications",
        paragraphs: [
          "Depending on the formulation and applicable regulatory requirements, Cardamom Oil may be used in:",
        ],
        lists: [
          {
            columns: 2,
            items: [
              "Pharmaceutical and herbal preparations",
              "Oral care products",
              "Digestive and flavouring formulations",
              "Aromatic preparations",
              "Food and flavour applications",
              "Personal care products",
            ],
          },
        ],
        trailingParagraphs: [
          "For bulk pharmaceutical procurement, we can provide relevant batch documentation such as COA, TDS, MSDS, and product specifications according to the agreed supply requirements.",
        ],
      },
      {
        title: "Bulk Cardamom Oil BP Supply",
        paragraphs: [
          "We supply Cardamom Oil for commercial buyers requiring dependable batch-to-batch supply. Bulk packaging, documentation, sample evaluation, and shipping arrangements can be discussed according to the buyer’s quantity, destination, and required specification.",
          "<b>Important:</b> Pharmaceutical buyers should confirm the current applicable BP/Ph. Eur. requirements for their intended use before placing an order. The British Pharmacopoeia is updated regularly, so the exact specification should be verified against the current edition.",
        ],
      },
      {
        title: "Cardamom Oil Hydrosol | Bulk Cardamom Floral Water Supplier",
        coa: "/assets/images/products/Hydrosol/COA/CARDAMOM HYDROSOL COA.pdf",
        msds: "/assets/images/products/Hydrosol/MSDS/Cardamon Oil Hydrosol MSDS.pdf",
        paragraphs: [
          "Cardamom Hydrosol is an aromatic botanical water obtained during the steam distillation of cardamom material. It carries a softer, water-based version of the characteristic cardamom aroma and can be incorporated into selected cosmetic, personal care, aromatherapy, and wellness formulations. Its warm, fresh, sweet-spicy scent makes it suitable for manufacturers looking to add a botanical aromatic profile to water-based products.",
          "Cardamom Hydrosol can be used in facial and body mists, room sprays, hair care products, soaps, lotions, creams, and other personal care formulations. It may also be used as a botanical ingredient in aromatherapy and wellness products. The exact appearance, aroma, pH, and shelf life can depend on the raw material, distillation process, filtration, storage conditions, and preservation system, so batch-specific specifications should be checked before formulation.",
        ],
        lists: [
          {
            title: "Cardamom Hydrosol Applications",
            columns: 2,
            items: [
              "Facial and body mists",
              "Hair care sprays",
              "Room fresheners",
              "Soaps",
              "Lotions and creams",
              "Aromatherapy products",
              "Botanical personal care formulations",
            ],
          },
        ],
        trailingParagraphs: [
          "<b>Bulk Packaging & Storage</b><br/>We supply Cardamom Hydrosol in secure bulk packaging suitable for commercial transportation. Packaging can be selected according to order volume and destination. For maintaining product quality, hydrosol should generally be stored in a cool, dry environment away from direct sunlight and excessive heat. The shelf life should be confirmed from the product specification or batch documentation rather than assumed to be the same for every formulation.",
        ],
      },
      {
        title: "Cardamom Oil & Hydrosol Documentation",
        paragraphs: ["For bulk requirements, relevant documents can include:"],
        lists: [
          {
            columns: 2,
            items: [
              "COA",
              "MSDS",
              "TDS",
              "Product Specification",
              "Allergen information, where applicable",
              "Other export documentation according to destination",
            ],
          },
        ],
      },
      {
        title: "Why Source Cardamom Oil in Bulk?",
        paragraphs: [
          "We offer Cardamom Oil and Cardamom Hydrosol for manufacturers, wholesalers, distributors, and formulation companies looking for consistent commercial supply. Our focus is on quality control, suitable packaging, documentation support, competitive bulk pricing, and reliable international logistics.",
        ],
      },
    ],
    seoTitle: "Cardamom Oil Manufacturer & Distributor | Bulk Cardamom Essential Oil Supplier",
    seoDescription:
      "Buy bulk Cardamom Oil, Cardamom Oil BP, and Cardamom Hydrosol from a leading manufacturer and exporter. COA, MSDS, TDS, and worldwide shipping.",
  },

  "calamus-oil": {
    slug: "calamus-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Calamus Oil",
    heading: "Calamus Oil Distributor & Exporter | Bulk Calamus Essential Oil Manufacturer",
    image: "/assets/images/products/Essential-Oils/Calamus-Oil.webp",
    imageAlt: "Calamus Essential Oil",
    paragraphs: [
      "Calamus Oil is an aromatic essential oil made from the rhizomes of the Calamus plant, also known as Sweet Flag or Vacha. Its botanical name is Acorus calamus. The oil is obtained through steam distillation of the dried rhizomes. It has a warm, earthy, spicy, and slightly woody smell. Calamus has been used traditionally in India and other regions for many years. Today, Calamus Oil is used by businesses working in aromatherapy, natural products, cosmetics, personal care, and fragrance formulations. The oil contains natural compounds such as alpha-asarone, beta-asarone, shyobunone, and other aromatic compounds. The amount of these compounds can differ depending on the plant source and extraction method. Calamus Oil is available in yellow to amber shades and has a strong natural aroma. As a bulk supplier, we provide Calamus Oil for manufacturers, wholesalers, distributors, and businesses that require this botanical ingredient in commercial quantities. We can also provide product information and quality documents to help buyers select the right material for their requirements.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Acorus calamus" },
      { label: "Common Names", value: "Calamus Oil, Sweet Flag Oil, Vacha Oil" },
      { label: "Plant Family", value: "Acoraceae" },
      { label: "Part Used", value: "Rhizomes" },
      { label: "Extraction", value: "Steam Distillation" },
      { label: "Color", value: "Yellow to Amber" },
      { label: "Aroma", value: "Warm, Earthy, Spicy and Woody" },
    ],
    coa: "/assets/images/products/Essential-Oils/coa/CALAMUS-OIL-COA.pdf",
    msds: "/assets/images/products/Essential-Oils/MSDS/CALAMUS-OIL-MSDS.pdf",
    formTitle: "Contact us for Wholesale Calamus Oil Enquiries",
    enquirySource: "Enquiry from Calamus Oil Page",
    sections: [
      {
        title: "Main Natural Compounds",
        paragraphs: ["Calamus Oil naturally contains compounds such as:"],
        lists: [
          {
            columns: 2,
            items: ["Alpha-asarone", "Beta-asarone", "Shyobunone", "Other aromatic compounds"],
          },
        ],
      },
      {
        title: "Where Is Calamus Oil Used?",
        paragraphs: ["Calamus Oil can be used in:"],
        lists: [
          {
            columns: 2,
            items: [
              "Aromatherapy products",
              "Fragrance formulations",
              "Natural cosmetic products",
              "Personal care products",
              "Botanical preparations",
              "Wellness products",
              "Research and development",
            ],
          },
        ],
      },
    ],
    variants: [
      {
        title: "Calamus Seed Oil Supplier | Bulk Calamus Seed Oil",
        coa: "/assets/images/products/Essential-Oils/coa/CALAMUS-OIL-COA.pdf",
        msds: "/assets/images/products/Essential-Oils/MSDS/CALAMUS-OIL-MSDS.pdf",
        paragraphs: [
          "Calamus Seed Oil refers to oil made specifically from the seeds of Acorus calamus. It is important to distinguish this product from regular Calamus Oil, which is generally obtained from the rhizomes. Calamus is mainly known for its rhizome, so buyers looking for a seed-derived oil should always confirm the plant part with the supplier before placing a bulk order. This helps ensure that the product they receive matches their formulation requirements. Calamus Seed Oil can be considered for selected botanical, cosmetic, fragrance, aromatherapy, and research applications depending on its quality and composition. Its color, aroma, and natural compounds can vary according to the seeds used and the extraction method. For this reason, we recommend checking the product specification and COA before commercial use.",
        ],
        lists: [
          {
            title: "What Should You Check Before Buying Calamus Seed Oil?",
            columns: 2,
            items: [
              "Botanical name",
              "Part of plant used",
              "Extraction method",
              "Origin",
              "Color and aroma",
              "Product composition",
              "COA",
              "MSDS and TDS",
            ],
          },
        ],
      },
      {
        title: "Bulk Calamus Seed Oil Supply",
        paragraphs: [
          "We supply Calamus-derived products for manufacturers, wholesalers, distributors, and formulation companies. If you specifically require Calamus Seed Oil, we can confirm the plant part, production method, and product specification before supply. This makes the sourcing process clearer and helps buyers select the correct product for their application.",
        ],
      },
      {
        title: "Possible Applications",
        paragraphs: [
          "Depending on the product specification and local regulations, Calamus Seed Oil may be considered for:",
        ],
        lists: [
          {
            columns: 2,
            items: [
              "Cosmetic formulations",
              "Fragrance products",
              "Aromatherapy blends",
              "Botanical products",
              "Personal care products",
              "Research and development",
            ],
          },
        ],
      },
      {
        title: "Calamus Hydrosol Manufacturer | Bulk Calamus Floral Water Supplier",
        coa: "/assets/images/products/Hydrosol/COA/CALAMUS HYDROSOL COA.pdf",
        msds: "/assets/images/products/Hydrosol/MSDS/Calamus Oil Hydrosol MSDS.pdf",
        paragraphs: [
          "Calamus Hydrosol is a botanical water produced during the distillation of Acorus calamus. It has a much lighter aroma than concentrated Calamus Essential Oil because it is a water-based product. It can be used in selected cosmetic, personal care, aromatherapy, and botanical formulations. Calamus Hydrosol can be added to facial sprays, body mists, hair care products, lotions, room sprays, and other water-based products where suitable. Its color and aroma may vary depending on the plant material and distillation process. Since hydrosols contain water, proper storage and handling are important for maintaining their quality. We supply Calamus Hydrosol in bulk quantities for manufacturers, wholesalers, distributors, and businesses developing botanical and personal care products.",
        ],
        lists: [
          {
            title: "Calamus Hydrosol Applications",
            columns: 2,
            items: [
              "Facial and body mists",
              "Hair care sprays",
              "Lotions",
              "Botanical skincare products",
              "Room sprays",
              "Aromatherapy products",
              "Personal care formulations",
            ],
          },
        ],
        trailingParagraphs: [
          "<b>Packaging & Storage</b><br/>Calamus Hydrosol can be supplied in suitable bulk packaging according to the order quantity and destination. It should be stored in a cool and dry place away from direct sunlight and excessive heat. The exact shelf life should be checked from the product specification, but Calamus Oil and Hydrosols have a shelf life up to 2 years.",
        ],
      },
      {
        title: "Documents Available for Bulk Orders",
        paragraphs: ["We can provide relevant documents such as:"],
        lists: [
          {
            columns: 2,
            items: ["COA", "MSDS", "TDS", "Product Specification", "Other required export documents"],
          },
        ],
      },
    ],
    seoTitle: "Calamus Oil Distributor & Exporter | Bulk Calamus Essential Oil Manufacturer",
    seoDescription:
      "Buy bulk Calamus Oil, Calamus Seed Oil, and Calamus Hydrosol from a leading manufacturer and exporter. COA, MSDS, TDS, and worldwide shipping.",
  },

  "cajeput-oil": {
    slug: "cajeput-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Cajeput Oil",
    heading: "Cajeput Oil Manufacturer & Distributor | Bulk Cajeput Essential Oil",
    image: "/assets/images/products/Essential-Oils/Cajeput-Oil.webp",
    imageAlt: "Cajeput Essential Oil",
    paragraphs: [
      "Cajeput Oil, also written as Kajaput Oil or Cajuput Oil, is an essential oil made from the leaves and small branches of the cajeput tree, botanically known as Melaleuca cajuputi. The oil is usually made by steam distillation and has a fresh, strong, clean smell with notes similar to eucalyptus and camphor. Cajeput belongs to the Myrtaceae family and is mainly found in parts of Southeast Asia and Australia. Its main natural compound is 1,8-cineole, along with alpha-terpineol, limonene, alpha-pinene, and other plant compounds.",
      "Cajeput Oil is used in aromatherapy, massage blends, soaps, cosmetics, personal care products, fragrances, and some traditional preparations. Its fresh smell also makes it useful in products made for a clean and refreshing feel. At Hetaksh Essential Oils, we offer Cajeput Oil in bulk for manufacturers, wholesalers, distributors, and brands looking for a natural essential oil for their products.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Melaleuca cajuputi" },
      { label: "Common Names", value: "Cajeput Oil, Cajuput Oil, Kajaput Oil" },
      { label: "Family", value: "Myrtaceae" },
      { label: "Part Used", value: "Leaves and small branches" },
      { label: "Extraction", value: "Steam Distillation" },
      { label: "Colour", value: "Colourless to Pale Yellow or Greenish" },
      { label: "Aroma", value: "Fresh, Eucalyptus-like, Camphoraceous" },
      { label: "Main Compound", value: "1,8-Cineole" },
    ],
    coa: "/assets/images/products/Essential-Oils/coa/CAJEPUT-OIL-COA.pdf",
    msds: "/assets/images/products/Essential-Oils/MSDS/Cajeput-OIL-MSDS.pdf",
    formTitle: "Contact us for Wholesale Cajeput Oil Enquiries",
    enquirySource: "Enquiry from Cajeput Oil Page",
    sections: [
      {
        title: "Where Cajeput Oil Is Used",
        paragraphs: ["Cajeput Oil can be used in:"],
        lists: [
          {
            columns: 2,
            items: [
              "Aromatherapy products",
              "Massage oils",
              "Soaps",
              "Cosmetics",
              "Personal care products",
              "Fragrance products",
              "Herbal and wellness products",
            ],
          },
        ],
      },
    ],
    variants: [
      {
        title: "Cajeput Hydrosol Manufacturer | Bulk Cajeput Floral Water",
        coa: "/assets/images/products/Hydrosol/COA/CAJEPUT HYDROSOL COA.pdf",
        msds: "/assets/images/products/Hydrosol/MSDS/Cajeput Oil Hydrosol MSDS.pdf",
        paragraphs: [
          "Cajeput Hydrosol is a botanical water collected during the distillation of cajeput leaves and small branches. It has a much lighter smell than Cajeput Essential Oil and carries a fresh, clean, herbal aroma. Because it is water-based, Cajeput Hydrosol can be used in products where a light botanical water is preferred. It can be added to facial sprays, body mists, hair care sprays, room sprays, soaps, lotions, and other personal care products according to the product formula. The hydrosol can also be used in aromatherapy and natural wellness products where its fresh plant-like smell is valuable for products. The exact colour, smell, pH, and shelf life can change depending on the plant material, distillation process, filtration, packaging, and storage. We therefore recommend checking the product specification before using it in a finished product.",
        ],
        lists: [
          {
            title: "Cajeput Hydrosol Uses",
            columns: 2,
            items: [
              "Facial and body mists",
              "Hair sprays",
              "Natural toners",
              "Room sprays",
              "Soaps",
              "Lotions",
              "Aromatherapy products",
              "Botanical personal care products",
            ],
          },
        ],
        trailingParagraphs: [
          "<b>Bulk Packaging</b><br/>Cajeput Hydrosol can be supplied in suitable bulk packaging based on the order size and destination. It should be kept in a cool place and protected from direct sunlight and heat. Since hydrosol is water-based, clean handling and proper storage are important for keeping the product in good condition.",
        ],
      },
      {
        title: "Bulk Cajeput Oil Wholesaler | Applications, Documentation & Global Supply",
        paragraphs: [
          "Cajeput Oil has a clean and easy-to-recognize smell, which makes it a useful ingredient for products that need a fresh herbal note. It is often chosen for massage oils, soaps, personal care products, fragrance blends, and aromatherapy. It can also be mixed with other essential oils to create different scents. Cajeput Oil can be blended with oils such as lavender, rosemary, peppermint, eucalyptus, lemon, and tea tree, depending on the type of product being made.",
          "For businesses buying Cajeput Oil in bulk, we focus on simple and clear supply support. We can provide product samples, batch information, COA, MSDS, TDS, and other documents needed for product development and bulk purchasing. Our bulk supply is suitable for cosmetic companies, personal care brands, aromatherapy businesses, fragrance manufacturers, wholesalers, and distributors.",
        ],
        lists: [
          {
            title: "Bulk Supply Support",
            columns: 2,
            items: [
              "Bulk orders starting from 25 kg",
              "Secure HDPE drum packaging",
              "COA, MSDS and TDS support",
              "Sample availability",
              "Quality checks for bulk batches",
              "Air and sea shipping options",
              "Worldwide export support",
            ],
          },
        ],
        trailingParagraphs: [
          "<b>A Simple Difference</b><br/>Cajeput Oil: A concentrated essential oil obtained mainly from the leaves and small branches.<br/>Cajeput Hydrosol: A water-based product collected during the distillation process and used in lighter, water-based formulations.",
        ],
      },
    ],
    seoTitle: "Cajeput Oil Manufacturer & Distributor | Bulk Cajeput Essential Oil",
    seoDescription:
      "Buy bulk Cajeput Oil and Cajeput Hydrosol from a leading manufacturer and exporter. Steam distilled, with COA, MSDS, TDS, and worldwide shipping.",
  },

  "carrot-oil": {
    slug: "carrot-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Carrot Oil",
    heading: "Carrot Oil Wholesaler & Exporter | Bulk Carrot Oil Supplier",
    image: "/assets/images/products/spice-oil/CARROT SEED OIL.webp",
    imageAlt: "Carrot Oil",
    paragraphs: [
      "Carrot Oil is a botanical oil valued for its nourishing properties and its use in cosmetic, personal care, hair care, and wellness formulations. It is commonly prepared by infusing or macerating carrot material into a suitable carrier oil, allowing naturally occurring compounds from the plant to transfer into the base oil. Carrot’s botanical name is Daucus carota and it belongs to the Apiaceae family. The carrot root contains naturally occurring carotenoids, including beta-carotene, along with other plant compounds that are valued in skincare formulations. Depending on the production method and carrier used, Carrot Oil can have a yellow to orange appearance and a mild characteristic aroma. Its soft texture makes it suitable for facial oils, body oils, creams, lotions, massage blends, and hair care products. It is also used in formulations designed to nourish dry-looking skin and improve the appearance of dull skin. As a bulk manufacturer and supplier, Hetaksh Essential Oils offers Carrot Oil for cosmetic brands, personal care manufacturers, wellness companies, and formulation businesses requiring consistent commercial supply.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Daucus carota" },
      { label: "Plant Family", value: "Apiaceae" },
      { label: "Plant Part", value: "Carrot Root" },
      { label: "Common Appearance", value: "Yellow to Orange" },
      { label: "Aroma", value: "Mild, Characteristic Botanical Aroma" },
      { label: "Typical Applications", value: "Skincare, Hair Care, Cosmetics, Massage and Wellness" },
    ],
    formTitle: "Contact us for Wholesale Carrot Oil Enquiries",
    enquirySource: "Enquiry from Carrot Oil Page",
    sections: [
      {
        title: "Why Carrot Oil Is Used in Formulations",
        paragraphs: [
          "Carrot Oil is particularly useful in products where manufacturers want a botanical ingredient with a nourishing and conditioning profile.",
        ],
        trailingParagraphs: [
          "The exact characteristics of Carrot Oil depend on whether it is produced as an infused oil, macerate, or another standardized preparation. For bulk procurement, buyers should review the product specification and carrier oil details before selecting a grade.",
        ],
        lists: [
          {
            title: "Common applications include:",
            columns: 2,
            items: [
              "Facial oils and serums",
              "Body oils",
              "Moisturizing creams",
              "Lotions",
              "Massage products",
              "Hair oils and scalp products",
              "Natural cosmetic formulations",
              "Wellness products",
            ],
          },
        ],
      },
    ],
    variants: [
      {
        title: "Carrot Seed Oil Manufacturer | Bulk Carrot Essential Oil Supplier",
        coa: "/assets/images/products/spice-oil/COA/CARROT SEED OIL COA.pdf",
        msds: "/assets/images/products/spice-oil/MSDS/CARROT SEED OIL MSDS.pdf",
        paragraphs: [
          "Carrot Seed Oil is a distinct essential oil obtained from the seeds of Daucus carota, and it should not be confused with Carrot Oil made from the root. The seeds are steam distilled to obtain a concentrated aromatic oil with a characteristic fragrance that is earthy, warm, dry, and slightly sweet. Carrot Seed Oil is valued by cosmetic and personal care manufacturers for its aromatic profile and its suitability for skincare and wellness formulations. Its natural composition may include compounds such as carotol, daucol, beta-bisabolene, and other volatile constituents, with the exact profile varying according to the botanical material, origin, and distillation conditions. Carrot Seed Oil is commonly incorporated into facial oils, serums, creams, body care products, massage blends, and aromatherapy preparations. It can also be blended with other essential oils to create customized aromatic compositions. As a bulk supplier, we provide Carrot Seed Oil for cosmetic manufacturers, aromatherapy brands, personal care companies, and formulation businesses. Product-specific documentation can be supplied for commercial sourcing and quality evaluation.",
        ],
        tables: [
          {
            title: "Carrot Seed Oil Specifications",
            labelHeader: "Specification",
            valueHeader: "Details",
            rows: [
              { label: "Botanical Name", value: "Daucus carota" },
              { label: "Family", value: "Apiaceae" },
              { label: "Plant Part Used", value: "Seeds" },
              { label: "Extraction", value: "Steam Distillation" },
              { label: "Appearance", value: "Yellow to Amber" },
              { label: "Aroma", value: "Earthy, Warm, Dry & Characteristic" },
              { label: "Product Type", value: "Essential Oil" },
            ],
          },
        ],
      },
      {
        title: "Natural Components of Carrot Seed Oil",
        paragraphs: ["The composition of Carrot Seed Oil can include:"],
        lists: [
          {
            columns: 2,
            items: ["Carotol", "Daucol", "Beta-bisabolene", "Other naturally occurring volatile compounds"],
          },
        ],
      },
      {
        title: "Carrot Seed Oil Uses",
        paragraphs: ["Carrot Seed Oil is commonly selected for:"],
        lists: [
          {
            columns: 2,
            items: [
              "Skincare formulations",
              "Facial oils and serums",
              "Anti-aging cosmetic formulations",
              "Massage blends",
              "Aromatherapy",
              "Body care products",
              "Natural perfumes",
              "Hair and scalp formulations",
              "Botanical wellness products",
            ],
          },
        ],
        trailingParagraphs: [
          "Its earthy aroma also makes it useful in fragrance blends where a deeper botanical note is required.",
        ],
      },
      {
        title: "Carrot Oil vs Carrot Seed Oil",
        paragraphs: [
          "These two products are related but are not the same:",
          "<b>Carrot Oil:</b> Generally refers to an infused or macerated oil prepared using carrot material, commonly the root, in a carrier oil.",
          "<b>Carrot Seed Oil:</b> A concentrated essential oil obtained from carrot seeds, generally through steam distillation.",
          "This distinction is important for buyers because the extraction method, composition, aroma, appearance, and formulation use can differ considerably.",
        ],
      },
      {
        title: "Carrot Seed Hydrosol Supplier | Bulk Carrot Floral Water",
        coa: "/assets/images/products/Hydrosol/COA/CARROT SEED HYDROSOL COA.pdf",
        msds: "/assets/images/products/Hydrosol/MSDS/Carrot Oil Hydrosol MSDS.pdf",
        paragraphs: [
          "Carrot Seed Hydrosol is a botanical water obtained during the distillation of carrot seeds. It offers a lighter, water-based aromatic profile compared with concentrated Carrot Seed Essential Oil and can be used in selected cosmetic, personal care, skincare, and wellness formulations. It generally has a mild botanical aroma and a clear to lightly coloured appearance, although its exact characteristics can vary according to the raw material and distillation process. Carrot Seed Hydrosol can be incorporated into facial mists, body sprays, lotions, creams, hair care products, botanical toners, and other water-based formulations. Its gentle aromatic character makes it suitable for brands developing natural and botanical personal care ranges.",
        ],
        lists: [
          {
            title: "Common Uses of Carrot Seed Hydrosol",
            columns: 2,
            items: [
              "Facial and body mists",
              "Natural toners",
              "Hair care sprays",
              "Lotions and creams",
              "Body care formulations",
              "Aromatherapy products",
              "Botanical personal care products",
              "Natural fragrance preparations",
            ],
          },
        ],
        trailingParagraphs: [
          "<b>Bulk Packaging & Storage</b><br/>We supply Carrot Seed Hydrosol in bulk packaging suitable for commercial manufacturing and transportation. Packaging can be selected according to order volume and destination. For optimal quality and stability, the hydrosol should be stored as per the manufacturer’s guidelines and kept away from heat, humidity, and direct sunlight.",
          "Because hydrosols are water-based products, their shelf life can vary according to filtration, preservation, packaging, storage conditions, and production method. For this reason, the specific shelf life should always be confirmed from the batch specification rather than using a fixed period for every product.",
        ],
      },
      {
        title: "Bulk Carrot Products From One Supplier",
        paragraphs: [
          "We can support commercial buyers looking for different carrot-derived ingredients, including:",
        ],
        lists: [
          {
            columns: 2,
            items: ["Carrot Oil", "Carrot Seed Oil", "Carrot Seed Hydrosol"],
          },
        ],
        trailingParagraphs: [
          "Our bulk supply service is suitable for cosmetic manufacturers, skincare brands, hair care companies, aromatherapy businesses, wellness brands, and distributors. We focus on consistent batches, secure packaging, documentation support, and dependable logistics for domestic and international orders.",
        ],
      },
      {
        title: "Quality & Documentation",
        paragraphs: [
          "For bulk orders, relevant technical documents can be provided according to the product and buyer’s requirements.",
          "Available documentation may include:",
        ],
        lists: [
          {
            columns: 2,
            items: [
              "COA",
              "MSDS",
              "TDS",
              "Product Specification",
              "Allergen Declaration, where applicable",
              "Non-GMO Declaration, where applicable",
              "Export documentation",
            ],
          },
        ],
        trailingParagraphs: [
          "Our team can also support buyers with samples for product evaluation and research and development before larger commercial orders.",
        ],
      },
    ],
    seoTitle: "Carrot Oil Wholesaler & Exporter | Bulk Carrot Oil Supplier",
    seoDescription:
      "Buy bulk Carrot Oil, Carrot Seed Oil, and Carrot Seed Hydrosol from a leading manufacturer and exporter. COA, MSDS, TDS, and worldwide shipping.",
  },

  "clove-oil": {
    slug: "clove-oil",
    category: "spice-oils",
    categoryName: "Spice Oils",
    name: "Clove Oil",
    heading: "Clove Oil Manufacturer & Distributor | Bulk Clove Essential Oil Supplier",
    image: "/assets/images/products/spice-oil/CLOVE OIL.webp",
    imageAlt: "Clove Essential Oil",
    paragraphs: [
      "Clove Oil is a concentrated essential oil obtained from the dried flower buds of the clove tree, botanically known as Syzygium aromaticum. It is generally produced through steam distillation, which separates the volatile aromatic compounds from the dried plant material. Clove Oil is known for its strong, warm, spicy, sweet aroma and is widely used by cosmetic, personal care, oral care, food, fragrance, aromatherapy, and pharmaceutical industries. The main natural constituent of Clove Oil is eugenol, along with eugenyl acetate, beta-caryophyllene, alpha-humulene, and other volatile compounds. Its distinctive aromatic profile makes it useful in products where a warm and spicy fragrance is desired. Clove Oil is commonly used in soaps, perfumes, massage oils, aromatherapy blends, oral care products, cosmetic formulations, and selected food flavouring applications where permitted. It is also available in pharmaceutical grades for manufacturers that require specific pharmacopoeial specifications. At Hetaksh Essential Oils, we supply Clove Oil in bulk quantities for manufacturers, wholesalers, distributors, and formulation companies looking for consistent quality and dependable supply.",
    ],
    specsTitle: "Product Specifications",
    specs: [
      { label: "Botanical Name", value: "Syzygium aromaticum" },
      { label: "Common Name", value: "Clove Oil" },
      { label: "Plant Family", value: "Myrtaceae" },
      { label: "Plant Part Used", value: "Dried Flower Buds" },
      { label: "Extraction Method", value: "Steam Distillation" },
      { label: "Origin", value: "India / major clove-producing regions" },
      { label: "Appearance", value: "Pale Yellow to Yellow-Brown" },
      { label: "Aroma", value: "Warm, Sweet, Spicy and Strong" },
      { label: "Main Constituent", value: "Eugenol" },
      { label: "Supply Form", value: "Bulk Essential Oil" },
    ],
    coa: "/assets/images/products/spice-oil/COA/CLOVE BUD OIL COA.pdf",
    msds: "/assets/images/products/spice-oil/MSDS/CLOVE BUD OIL MSDS.pdf",
    formTitle: "Contact us for Wholesale Clove Oil Enquiries",
    enquirySource: "Enquiry from Clove Oil Page",
    sections: [
      {
        title: "Key Components of Clove Oil",
        lists: [
          {
            columns: 2,
            items: [
              "Eugenol",
              "Eugenyl Acetate",
              "Beta-Caryophyllene",
              "Alpha-Humulene",
              "Other naturally occurring volatile compounds",
            ],
          },
        ],
        trailingParagraphs: [
          "The exact composition of Clove Oil can vary according to the origin of the clove buds, harvesting conditions, storage, and distillation process. For bulk buyers, a Certificate of Analysis can be provided to verify the relevant product specifications and quality parameters.",
        ],
      },
      {
        title: "Common Characteristics",
        lists: [
          {
            columns: 2,
            items: [
              "Strong characteristic clove aroma",
              "Warm and spicy fragrance profile",
              "High eugenol content",
              "Suitable for aromatic formulations",
              "Easily incorporated into various cosmetic and personal care formulations.",
              "Available for bulk commercial requirements",
              "Suitable for domestic and international sourcing",
            ],
          },
        ],
      },
      {
        title: "Industries Using Clove Oil",
        paragraphs: ["Clove Oil has applications across several industries:"],
        lists: [
          {
            columns: 2,
            items: [
              "Oral Care",
              "Cosmetics",
              "Personal Care",
              "Skincare",
              "Hair Care",
              "Aromatherapy",
              "Perfumery",
              "Food Flavouring",
              "Pharmaceutical Formulations",
              "Herbal and Wellness Products",
              "Soap Manufacturing",
              "Massage Products",
            ],
          },
        ],
      },
      {
        title: "Clove Oil BP & IP | Pharmaceutical Grades, Specifications and Benefits",
        paragraphs: [
          "Clove Oil is available in different grades depending on the intended application and required quality specifications. For pharmaceutical and healthcare manufacturers, pharmacopoeial grades can be selected according to the standard required for the final product.",
        ],
      },
    ],
    variants: [
      {
        title: "Clove Oil BP",
        coa: "/assets/images/products/Pharma-Grade-Oils/COA/CLOVE OIL BP COA.pdf",
        msds: "/assets/images/products/Pharma-Grade-Oils/MSDS/CLOVE OIL MSDS.pdf",
        paragraphs: [
          "Clove Oil BP is a pharmaceutical-grade clove oil manufactured to meet the applicable British Pharmacopoeia requirements. It is obtained from the dried flower buds of Syzygium aromaticum and is generally produced through steam distillation. The oil has the characteristic warm and spicy aroma associated with clove and contains eugenol as its principal naturally occurring constituent. Clove Oil BP can be used in suitable pharmaceutical, dental, oral care, and healthcare formulations where a BP-compliant ingredient is required.",
          "We can supply Clove Oil BP in commercial quantities with relevant quality and technical documentation. Depending on the buyer’s requirement, documents such as COA, TDS, MSDS, and other applicable specifications can be provided for evaluation and procurement.",
        ],
        lists: [
          {
            title: "Bulk Clove Oil BP is suitable for:",
            columns: 2,
            items: [
              "Pharmaceutical manufacturers",
              "Dental care manufacturers",
              "Oral care brands",
              "Healthcare formulation companies",
              "Contract manufacturers",
              "Pharmaceutical distributors",
            ],
          },
        ],
      },
      {
        title: "Clove Oil IP",
        coa: "/assets/images/products/Pharma-Grade-Oils/COA/CLOVE OIL IP COA.pdf",
        msds: "/assets/images/products/Pharma-Grade-Oils/MSDS/CLOVE OIL MSDS.pdf",
        paragraphs: [
          "Clove Oil IP is a pharmaceutical-grade clove oil manufactured according to the Indian Pharmacopoeia standard and requirements. It is obtained from clove buds and processed through steam distillation to produce an aromatic oil suitable for specified pharmaceutical and healthcare applications. Clove Oil IP is valued for its characteristic clove aroma and naturally occurring eugenol content. It can be sourced by pharmaceutical manufacturers, dental product companies, herbal formulation businesses, oral care manufacturers, and distributors that require an IP-grade material.",
          "We provide documentation according to the product specification and customer requirements, helping buyers verify the grade before using it in their formulation or manufacturing process.",
        ],
        lists: [
          {
            title: "Bulk Clove Oil IP is suitable for:",
            columns: 2,
            items: [
              "Pharmaceutical formulations",
              "Dental preparations",
              "Oral care products",
              "Herbal formulations",
              "Healthcare products",
              "Pharmaceutical manufacturing",
              "Bulk distribution",
            ],
          },
        ],
      },
      {
        title: "Clove Oil Composition",
        paragraphs: [
          "The principal constituent of clove oil is eugenol. It is responsible for much of the oil’s characteristic spicy and warm aroma. Other naturally occurring compounds may include:",
        ],
        lists: [
          {
            columns: 2,
            items: [
              "Eugenol",
              "Eugenyl acetate",
              "Beta-caryophyllene",
              "Alpha-humulene",
              "Other minor volatile constituents",
            ],
          },
        ],
        trailingParagraphs: [
          "The concentration of individual components depends on factors such as the botanical material, geographical source, storage conditions, and extraction process. For industrial and pharmaceutical procurement, buyers can request the relevant analytical documentation and batch-specific COA.",
        ],
      },
      {
        title: "Choosing the Right Clove Oil Grade",
        paragraphs: ["The appropriate grade depends on the intended application."],
        lists: [
          {
            columns: 1,
            items: [
              "For general cosmetic and aromatic applications: Clove Oil",
              "For applications requiring British Pharmacopoeia specifications: Clove Oil BP",
              "For applications requiring Indian Pharmacopoeia specifications: Clove Oil IP",
              "For products requiring the specific composition of clove buds: Clove Bud Oil",
            ],
          },
        ],
        trailingParagraphs: [
          "This makes it easier for manufacturers to select the right material according to their formulation, regulatory, and quality requirements.",
        ],
      },
      {
        title: "Clove Oil variants and derivatives | Bulk Uses, Packaging and Worldwide Delivery",
        paragraphs: [],
      },
      {
        title: "Clove Bud Oil",
        coa: "/assets/images/products/spice-oil/COA/CLOVE BUD OIL COA.pdf",
        msds: "/assets/images/products/spice-oil/MSDS/CLOVE BUD OIL MSDS.pdf",
        paragraphs: [
          "Clove Bud Oil is an essential oil obtained specifically from the dried flower buds of Syzygium aromaticum. It is one of the most commonly sourced clove-derived oils and is known for its strong, warm, sweet, and spicy fragrance. The oil is generally produced through steam distillation and contains eugenol as its major naturally occurring constituent. Clove Bud Oil is popular amongst manufacturers of soaps, perfumes, oral care products, massage oils, aromatherapy blends, cosmetics, personal care products, and selected food flavouring products.",
          "Its strong aromatic profile makes it useful when manufacturers want to add a distinctive spicy note to their formulations.",
        ],
        lists: [
          {
            title: "Clove Bud Oil Applications",
            columns: 2,
            items: [
              "Toothpaste and oral care products",
              "Mouthwash and dental formulations",
              "Soaps and cleansing products",
              "Perfumes and fragrance blends",
              "Massage oils",
              "Aromatherapy products",
              "Cosmetic formulations",
              "Personal care products",
              "Hair care formulations",
              "Herbal products",
              "Food flavouring applications where permitted",
            ],
          },
          {
            title: "Clove Bud Oil also blends well with several other essential oils, including:",
            columns: 2,
            items: [
              "Cinnamon Oil",
              "Orange Oil",
              "Lemon Oil",
              "Bergamot Oil",
              "Lavender Oil",
              "Peppermint Oil",
              "Rosemary Oil",
              "Frankincense Oil",
            ],
          },
        ],
      },
      {
        title: "Clove Bud Hydrosol",
        coa: "/assets/images/products/Hydrosol/COA/CLOVE HYDROSOL COA.pdf",
        msds: "/assets/images/products/Hydrosol/MSDS/Clove Oil Hydrosol MSDS.pdf",
        paragraphs: [
          "Clove Bud Hydrosol is an aromatic botanical water obtained during the steam distillation of clove buds. Compared with the concentrated essential oil, hydrosol is a water-based product with a softer aromatic character, making it suitable for selected water-based personal care and cosmetic formulations. It can be used by manufacturers developing botanical mists, lotions, soaps, hair care products, room sprays, and other aromatic products.",
        ],
        lists: [
          {
            title: "Clove Bud Hydrosol can be incorporated into:",
            columns: 2,
            items: [
              "Facial and body mists",
              "Hair care sprays",
              "Lotions",
              "Cream formulations",
              "Soaps",
              "Room sprays",
              "Botanical personal care products",
              "Aromatherapy products",
              "Natural fragrance formulations",
            ],
          },
        ],
      },
      {
        title: "Bulk Clove Oil Supply",
        paragraphs: [
          "As a bulk manufacturer, wholesaler, distributor, and exporter, we supply Clove Oil, Clove Oil BP, Clove Oil IP, Clove Bud Oil, and Clove Bud Hydrosol according to the requirements of different industries.",
          "Our bulk supply solutions include:",
        ],
        lists: [
          {
            columns: 2,
            items: [
              "MOQ starting from 25 kg",
              "Secure HDPE drum packaging",
              "Bulk quantities for commercial manufacturing",
              "COA availability",
              "MSDS availability",
              "TDS availability",
              "Technical documentation",
              "Batch consistency",
              "Sample availability for evaluation",
              "Air and sea freight options",
              "Worldwide export support",
            ],
          },
        ],
      },
      {
        title: "Quality & Documentation",
        paragraphs: [
          "Each bulk order can be supported with relevant quality and technical documents required for product evaluation, procurement, and export.",
          "Documentation may include:",
        ],
        lists: [
          {
            columns: 2,
            items: [
              "Certificate of Analysis (COA)",
              "Material Safety Data Sheet (MSDS)",
              "Technical Data Sheet (TDS)",
              "Product specifications",
              "Allergen information where applicable",
              "Other export documents according to destination and product requirements",
            ],
          },
        ],
      },
    ],
    seoTitle: "Clove Oil Manufacturer & Distributor | Bulk Clove Essential Oil Supplier",
    seoDescription:
      "Buy bulk Clove Oil, Clove Oil BP, Clove Oil IP, Clove Bud Oil, and Clove Bud Hydrosol. COA, MSDS, TDS, and worldwide shipping.",
  },
  ...withPdfTables({
    ...NEW_PAGES_BATCH1,
    ...NEW_PAGES_BATCH2,
    ...NEW_PAGES_BATCH3,
    ...NEW_PAGES_BATCH4,
    ...NEW_PAGES_BATCH5,
    ...NEW_PAGES_BATCH6,
    ...NEW_PAGES_BATCH7,
  }),
});
