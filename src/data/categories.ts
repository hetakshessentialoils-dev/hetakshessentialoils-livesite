import type { Category } from "@/lib/types";

/**
 * Static product categories. These rarely change, so they live in code
 * instead of the backend. Edit here to add/update a category.
 */
export const CATEGORIES: Category[] = [
  {
    id: "essential-oils",
    name: "Essential Oils",
    slug: "essential-oils",
    description:
      "Essential oils are plant-derived compounds. The oils capture the essence of the plant. Distillation (through steam and/or water) or mechanical processes, such as cold pressing, are used to produce Essential Oils.",
    seoTitle: "100% Pure Essential Oil Manufacturer & Bulk Supplier in US",
    seoDescription:
      "Get 100% pure and natural essential oils from a reliable manufacturer and bulk wholesale supplier at competitive prices.",
    seoKeywords: "essential oils, essential oil wholesale, essential oil bulk, essential oil supplier, essential oil manufacturer, essential oil distributors",
    faqs: [],
    sortOrder: 1,
  },
  {
    id: "carrier-oils",
    name: "Carrier Oils",
    slug: "carrier-oils",
    description:
      "Carrier oils are lipid, or fatty, extracts obtained from plant materials. They are so named because they can carry essential oils at an appropriate concentration. Cold-pressing is one of the main methods of producing carrier oils.",
    seoTitle: "Bulk Manufacturer of Carrier Oil Wholesale Supplier in US",
    seoDescription: "Hetaksh Essential Oils is a trusted manufacturer and wholesale supplier of 100% Pure Carrier Oils in US, offering bulk quantities and competitive wholesale prices.",
    seoKeywords: "carrier oils, wholesale carrier oils, carrier oils bulk, carrier oils supplier, carrier oils manufacturer, carrier oils distributors",
    faqs: [],
    sortOrder: 2,
  },
  {
    id: "pharma-grade-oils",
    name: "Pharma Grade Oils",
    slug: "pharma-grade-oils",
    description:
      "Pharmaceutical-grade oils refer to oils that meet defined pharmaceutical quality standards and applicable product specifications.",
    seoTitle: "Pharma Grade Oil wholesale & Bulk Manufacturer in USA",
    seoDescription:
      "Hetaksh Essential Oils is a leading Pharma Grade Oil bulk manufacturer and wholesale supplier in USA, providing quality oils for pharmaceutical, cosmetic, and industrial needs.",
    seoKeywords: "pharma grade oils, pharmaceutical oils, pharma grade oils bulk supplier, pharma grade oils wholesale, pharma grade oils manufacturer, pharma grade oils distributors",
    faqs: [],
    sortOrder: 3,
  },
  {
    id: "special-ingredients",
    name: "Special Ingredients",
    slug: "special-ingredients",
    description:
      "Our curated selection of special ingredients is chosen for its unique properties and is used as products in dietary supplements, herbal remedies and much more.",
    seoTitle: "Bulk Oil Ingredients Manufacturer & Wholesale Supplier in USA",
    seoDescription:
      "Bulk oil ingredients manufacturer and wholesale supplier in USA. Specialty botanical oils and extracts for nutraceutical, cosmetic, and food industries.",
    seoKeywords: "special ingredients, bulk oil ingredients, botanical extracts",
    faqs: [],
    sortOrder: 4,
  },
  {
    id: "spice-oils",
    name: "Spice Oils",
    slug: "spice-oils",
    description:
      "Spice oils are distilled from spices before, where applicable, further processing or solvent extraction. Our spice essential oils are produced by steam distillation.",
    seoTitle: "Spice Oils Wholesale | Bulk Suppliers & Manufacturers in USA",
    seoDescription:
      "Spice oils wholesale bulk suppliers and manufacturers in USA. Steam distilled spice essential oils for food, fragrance, and wellness industries.",
    seoKeywords: "spice oils, spice essential oils, spice oils wholesale",
    faqs: [],
    sortOrder: 5,
  },
  {
    id: "hydrosol-oils",
    name: "Hydrosols",
    slug: "hydrosol-oils",
    description:
      "Hydrosols are water-based aromatic products produced during the distillation of fresh flowers, leaves, fruits, and other plant materials.",
    seoTitle: "Hydrosol Bulk Manufacturer & Wholesale Suppliers in US",
    seoDescription:
      "Hydrosol bulk manufacturer and wholesale suppliers in US. Pure floral waters and hydrosols for cosmetics, aromatherapy, and wellness formulations.",
    seoKeywords: "hydrosols, floral waters, hydrosol bulk supplier",
    faqs: [],
    sortOrder: 6,
  },
];
