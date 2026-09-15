import type { CleanProductInfoTable } from "@/lib/types";

/** PDF comparison / industry / use tables for the newer product pages. */
export const NEW_PAGE_TABLES: Record<string, CleanProductInfoTable[]> = {
  "calendula-oil": [
    {
      title: "Calendula Oil for Different Industries",
      labelHeader: "Industry",
      valueHeader: "Common Product",
      rows: [
        { label: "Skincare", value: "Creams, oils and lotions" },
        { label: "Hair Care", value: "Hair oils and scalp products" },
        { label: "Cosmetics", value: "Serums and body products" },
        { label: "Soap Making", value: "Botanical soaps" },
        { label: "Personal Care", value: "Balms and body care" },
        { label: "Wellness", value: "Massage and botanical blends" },
      ],
    },
  ],
  "cinnamon-oil": [
    {
      title: "Quick Comparison",
      labelHeader: "Product",
      valueHeader: "Plant Part",
      extraHeaders: ["Main Aroma", "Common Main Compound"],
      rows: [
        {
          label: "Cinnamon Oil BP",
          value: "As per specified grade",
          extra: ["Warm & Spicy", "Depends on grade"],
        },
        {
          label: "Cinnamon Bark Oil",
          value: "Bark",
          extra: ["Sweet & Strong", "Cinnamaldehyde"],
        },
        {
          label: "Cinnamon Leaf Oil",
          value: "Leaves",
          extra: ["Spicy & Clove-like", "Eugenol"],
        },
      ],
    },
  ],
  "citronella-oil": [
    {
      title: "Where Citronella Hydrosol Fits Best",
      labelHeader: "Product Type",
      valueHeader: "Why Citronella Hydrosol Fits",
      rows: [
        { label: "Body Mist", value: "Gives a fresh botanical smell" },
        { label: "Room Spray", value: "Adds a clean, green scent" },
        { label: "Hair Spray", value: "Works well in water-based formulas" },
        { label: "Soap", value: "Adds a fresh aromatic note" },
        { label: "Home Care", value: "Useful for scented products" },
      ],
    },
    {
      title: "Citronella Oil vs Citronella Hydrosol",
      labelHeader: "Feature",
      valueHeader: "Citronella Oil",
      extraHeaders: ["Citronella Hydrosol"],
      rows: [
        { label: "Form", value: "Concentrated essential oil", extra: ["Water-based botanical product"] },
        { label: "Aroma", value: "Stronger aroma", extra: ["Softer aroma"] },
        { label: "Base", value: "Oil-based", extra: ["Suitable for water-based formulas"] },
        {
          label: "Typical Use",
          value: "Fragrance, personal care and aromatherapy products",
          extra: ["Sprays, mists, lotions and other products"],
        },
      ],
    },
  ],
  "clary-sage-oil": [
    {
      title: "Simple Product Guide",
      labelHeader: "Feature",
      valueHeader: "Clary Sage Hydrosol",
      rows: [
        { label: "Source", value: "Clary Sage Plant" },
        { label: "Plant Part", value: "Leaves & Flowering Tops" },
        { label: "Form", value: "Botanical Water" },
        { label: "Aroma", value: "Soft Herbal & Floral" },
        { label: "Best Fit", value: "Water-Based Products" },
        { label: "Supply", value: "Bulk Quantities" },
      ],
    },
  ],
  "coffee-bean-oil": [
    {
      title: "A few examples include:",
      labelHeader: "Product",
      valueHeader: "Possible Use",
      rows: [
        { label: "Face Oil", value: "Oil-based skincare" },
        { label: "Hair Oil", value: "Hair and scalp products" },
        { label: "Body Oil", value: "Daily body care" },
        { label: "Massage Oil", value: "Massage blends" },
        { label: "Cream", value: "Oil phase of the formula" },
        { label: "Soap", value: "Botanical soap products" },
      ],
    },
  ],
  "coriander-oil": [
    {
      title: "A Few Things About Coriander Seed Oil",
      labelHeader: "Point",
      valueHeader: "Details",
      rows: [
        { label: "Seed Source", value: "Coriandrum sativum" },
        { label: "Extraction", value: "Steam Distillation" },
        { label: "Main Compound", value: "Linalool" },
        { label: "Smell", value: "Fresh, Sweet & Spicy" },
        { label: "Colour", value: "Clear to Pale Yellow" },
        { label: "Main Areas", value: "Food, Fragrance, Cosmetics & Personal Care" },
      ],
    },
  ],
  "cucumber-oil": [
    {
      title: "Cucumber Oil for Different Industries",
      labelHeader: "Industry",
      valueHeader: "Example Products",
      rows: [
        { label: "Skincare", value: "Serums, creams and face oils" },
        { label: "Hair Care", value: "Hair oils and scalp products" },
        { label: "Personal Care", value: "Body oils and lotions" },
        { label: "Cosmetics", value: "Beauty oils and creams" },
        { label: "Soap Making", value: "Oil-based soap formulas" },
        { label: "Wellness", value: "Massage oils and body blends" },
      ],
    },
  ],
  "cumin-seed-oil": [
    {
      title: "Where Cumin Seed Oil Is Used",
      labelHeader: "Industry",
      valueHeader: "Common Use",
      rows: [
        { label: "Food & Flavour", value: "Cumin flavouring" },
        { label: "Fragrance", value: "Spice-based perfume blends" },
        { label: "Cosmetics", value: "Soaps and selected cosmetic formulas" },
        { label: "Personal Care", value: "Body and bath products" },
        { label: "Aromatherapy", value: "Essential oil blends" },
        { label: "Wellness", value: "Botanical and aromatic products" },
      ],
    },
  ],
  "dill-oil": [
    {
      title: "How the Two Grades Are Different",
      labelHeader: "Product",
      valueHeader: "Main Point",
      extraHeaders: ["Suitable Buyer"],
      rows: [
        {
          label: "Dill Oil (Terpeneless)",
          value: "Lighter terpene fraction removed",
          extra: ["Flavour & fragrance manufacturers"],
        },
        {
          label: "Dill Oil BP",
          value: "Supplied against applicable BP requirements",
          extra: ["Pharmaceutical & healthcare buyers"],
        },
      ],
    },
  ],
  "eucalyptus-oil": [
    {
      title: "A Simple Look at the Two Grades",
      labelHeader: "Grade",
      valueHeader: "Best Suited For",
      rows: [
        { label: "Eucalyptus Oil BP", value: "Buyers requiring the applicable British Pharmacopoeia grade" },
        { label: "Eucalyptus Oil IP", value: "Buyers requiring the applicable Indian Pharmacopoeia grade" },
      ],
    },
  ],
  "evening-primrose-oil": [
    {
      title: "Where Evening Primrose Oil Is Used",
      labelHeader: "Industry",
      valueHeader: "Product Examples",
      rows: [
        { label: "Skincare", value: "Face oils, creams, serums" },
        { label: "Body Care", value: "Body oils, lotions, massage blends" },
        { label: "Hair Care", value: "Hair oils, scalp products" },
        { label: "Cosmetics", value: "Beauty oils and creams" },
        { label: "Personal Care", value: "Balms, lotions and body products" },
        { label: "Wellness", value: "Oil-based botanical blends" },
      ],
    },
  ],
  "extra-virgin-olive-oil": [
    {
      title: "Food or Cosmetic?",
      labelHeader: "Industry",
      valueHeader: "Possible Application",
      rows: [
        { label: "Food", value: "Dressings, sauces & marinades" },
        { label: "Skincare", value: "Face & body oils" },
        { label: "Hair Care", value: "Hair oils & masks" },
        { label: "Cosmetics", value: "Creams & lotions" },
        { label: "Soap", value: "Soap formulations" },
        { label: "Wellness", value: "Massage & botanical blends" },
      ],
    },
    {
      title: "A Quick Choice Guide",
      labelHeader: "If You Are Making",
      valueHeader: "Possible Use",
      rows: [
        { label: "Salad Dressing", value: "Extra Virgin Olive Oil" },
        { label: "Sauce", value: "Extra Virgin Olive Oil" },
        { label: "Face Oil", value: "Extra Virgin Olive Oil" },
        { label: "Body Oil", value: "Extra Virgin Olive Oil" },
        { label: "Hair Oil", value: "Extra Virgin Olive Oil" },
        { label: "Soap", value: "Olive-based formulation" },
        { label: "Massage Blend", value: "Olive-based carrier blend" },
      ],
    },
  ],
  "fennel-oil": [
    {
      title: "Fennel Hydrosol Product Ideas",
      labelHeader: "Product",
      valueHeader: "Possible Use",
      rows: [
        { label: "Facial Mist", value: "Light botanical spray" },
        { label: "Body Mist", value: "Fresh aromatic product" },
        { label: "Hair Spray", value: "Water-based hair product" },
        { label: "Toner", value: "Botanical skincare" },
        { label: "Lotion", value: "Water-based formula" },
        { label: "Soap", value: "Personal care product" },
        { label: "Room Spray", value: "Mild herbal scent" },
      ],
    },
  ],
  "fenugreek-oil": [
    {
      title: "Fenugreek Oil for Different Industries",
      labelHeader: "Industry",
      valueHeader: "Possible Products",
      rows: [
        { label: "Hair Care", value: "Hair oils, masks and scalp products" },
        { label: "Skincare", value: "Creams, lotions and body oils" },
        { label: "Cosmetics", value: "Botanical beauty products" },
        { label: "Personal Care", value: "Soaps, balms and body care" },
      ],
    },
  ],
  "garlic-oil": [
    {
      title: "Where Garlic Hydrosol Can Be Used",
      labelHeader: "Product Type",
      valueHeader: "Possible Application",
      rows: [
        { label: "Hair Mist", value: "Light botanical spray" },
        { label: "Scalp Spray", value: "Water-based botanical ingredient" },
        { label: "Body Mist", value: "Mild herbal note" },
        { label: "Botanical Spray", value: "Garlic plant water" },
        { label: "Lotion", value: "Part of a suitable water phase" },
        { label: "Soap", value: "Botanical ingredient" },
        { label: "Personal Care", value: "Water-based product development" },
      ],
    },
  ],
  "grapefruit-oil": [
    {
      title: "Where Grapefruit Hydrosol Can Fit",
      labelHeader: "Product",
      valueHeader: "Possible Use",
      rows: [
        { label: "Face Mist", value: "Citrus botanical water" },
        { label: "Body Mist", value: "Fresh aromatic ingredient" },
        { label: "Hair Mist", value: "Light fragrance note" },
        { label: "Toner", value: "Water-based cosmetic" },
        { label: "Lotion", value: "Botanical water phase" },
        { label: "Soap", value: "Citrus ingredient" },
        { label: "Room Spray", value: "Soft citrus aroma" },
      ],
    },
  ],
  "geranium-oil": [
    {
      title: "A Simple Look at Geranium Hydrosol Uses",
      labelHeader: "Product",
      valueHeader: "Possible Application",
      rows: [
        { label: "Face Mist", value: "Light floral spray" },
        { label: "Body Mist", value: "Fresh body product" },
        { label: "Hair Mist", value: "Botanical hair spray" },
        { label: "Toner", value: "Water-based beauty product" },
        { label: "Lotion", value: "Botanical water phase" },
        { label: "Soap", value: "Floral ingredient" },
        { label: "Room Spray", value: "Light aromatic note" },
      ],
    },
    {
      title: "Geranium Oil and Hydrosol Are Not the Same",
      labelHeader: "Feature",
      valueHeader: "Geranium Oil",
      extraHeaders: ["Geranium Hydrosol"],
      rows: [
        { label: "Aroma", value: "Stronger aroma", extra: ["Softer aroma"] },
        { label: "Base", value: "Oil-based", extra: ["Water-based"] },
        { label: "Typical Use", value: "Used in fragrance blends", extra: ["Useful for mists"] },
        { label: "Blending", value: "Works with carrier oils", extra: ["Fits water-based products"] },
        { label: "Strength", value: "More concentrated", extra: ["Much lighter"] },
      ],
    },
  ],
  "grapeseed-oil": [
    {
      title: "Grapeseed Oil Applications",
      labelHeader: "Product Area",
      valueHeader: "Possible Application",
      rows: [
        { label: "Skincare", value: "Face and body oils" },
        { label: "Hair Care", value: "Hair oils and masks" },
        { label: "Cosmetics", value: "Creams and lotions" },
        { label: "Soap", value: "Oil-based soap formulas" },
        { label: "Food", value: "Dressings and sauces" },
        { label: "Personal Care", value: "Massage and body products" },
      ],
    },
  ],
  "holy-basil-oil": [
    {
      title: "Where Holy Basil Hydrosol Can Be Used",
      labelHeader: "Product",
      valueHeader: "Possible Use",
      rows: [
        { label: "Face Mist", value: "Light botanical water" },
        { label: "Hair Mist", value: "Herbal aromatic ingredient" },
        { label: "Body Mist", value: "Fresh plant note" },
        { label: "Toner", value: "Water-based formula" },
        { label: "Lotion", value: "Botanical water phase" },
        { label: "Soap", value: "Plant-based ingredient" },
        { label: "Botanical Spray", value: "Light tulsi character" },
      ],
    },
    {
      title: "Where Does Holy Basil Fit?",
      labelHeader: "Industry",
      valueHeader: "Possible Product",
      rows: [
        { label: "Aromatherapy", value: "Diffuser blends" },
        { label: "Fragrance", value: "Perfume blends" },
        { label: "Cosmetics", value: "Creams and lotions" },
        { label: "Hair Care", value: "Hair oils and shampoos" },
        { label: "Personal Care", value: "Soaps and body products" },
        { label: "Wellness", value: "Massage blends" },
      ],
    },
  ],
  "juniper-oil": [
    {
      title: "Some Possible Product Ideas",
      labelHeader: "Product",
      valueHeader: "Possible Role",
      rows: [
        { label: "Face Mist", value: "Light botanical water" },
        { label: "Body Mist", value: "Fresh green note" },
        { label: "Hair Mist", value: "Soft aromatic ingredient" },
        { label: "Toner", value: "Water-based botanical material" },
        { label: "Lotion", value: "Part of the water phase" },
        { label: "Soap", value: "Botanical addition" },
        { label: "Room Spray", value: "Light fresh aroma" },
      ],
    },
  ],
  "lavender-oil": [
    {
      title: "Lavender Oil and Hydrosol Side by Side",
      labelHeader: "Feature",
      valueHeader: "Lavender Oil",
      extraHeaders: ["Lavender Hydrosol"],
      rows: [
        { label: "Form", value: "Concentrated oil", extra: ["Water-based product"] },
        { label: "Aroma", value: "Stronger", extra: ["Softer"] },
        { label: "Main Source", value: "Lavender flowers", extra: ["Lavender distillation"] },
        { label: "Color", value: "Clear to pale yellow", extra: ["Usually clear to light"] },
        { label: "Character", value: "Floral and herbal", extra: ["Light floral and fresh"] },
        {
          label: "Composition",
          value: "Concentrated aromatic compounds",
          extra: ["Water with lighter aromatic fraction"],
        },
      ],
    },
  ],
  "lemon-oil": [
    {
      title: "Lemon Hydrosol Product Ideas",
      labelHeader: "Product",
      valueHeader: "Possible Use",
      rows: [
        { label: "Face Mist", value: "Light citrus botanical water" },
        { label: "Hair Mist", value: "Fresh aromatic note" },
        { label: "Body Spray", value: "Gentle lemon character" },
        { label: "Toner", value: "Water-based botanical ingredient" },
        { label: "Lotion", value: "Part of the water phase" },
        { label: "Soap", value: "Citrus botanical ingredient" },
        { label: "Room Spray", value: "Soft fresh aroma" },
      ],
    },
    {
      title: "Choosing Between Lemon Oil and Lemon Hydrosol",
      labelHeader: "If the Product Needs…",
      valueHeader: "Possible Choice",
      rows: [
        { label: "Strong citrus aroma", value: "Lemon Oil" },
        { label: "Perfume blend", value: "Lemon Oil" },
        { label: "Soap fragrance", value: "Lemon Oil" },
        { label: "Food flavor", value: "Suitable Lemon Oil" },
        { label: "Facial mist", value: "Lemon Hydrosol" },
        { label: "Hair mist", value: "Lemon Hydrosol" },
        { label: "Botanical spray", value: "Lemon Hydrosol" },
        { label: "Water-based product", value: "Lemon Hydrosol" },
      ],
    },
  ],
  "lemongrass-oil": [
    {
      title: "Where Lemongrass Hydrosol Could Be Used",
      labelHeader: "Product",
      valueHeader: "Possible Application",
      rows: [
        { label: "Face Mist", value: "Fresh botanical water" },
        { label: "Hair Mist", value: "Light green-citrus note" },
        { label: "Body Spray", value: "Fresh aromatic character" },
        { label: "Toner", value: "Water-based ingredient" },
        { label: "Lotion", value: "Botanical water phase" },
        { label: "Soap", value: "Plant-based addition" },
        { label: "Room Spray", value: "Soft citrus-herbal scent" },
      ],
    },
  ],
  "lime-oil": [
    {
      title: "A Quick Product Match",
      labelHeader: "Product Idea",
      valueHeader: "Possible Lime Ingredient",
      rows: [
        { label: "Strong citrus perfume", value: "Lime Oil" },
        { label: "Food flavor", value: "Suitable Lime Oil" },
        { label: "Soap fragrance", value: "Lime Oil" },
        { label: "Massage blend", value: "Lime Oil" },
        { label: "Face mist", value: "Lime Hydrosol" },
        { label: "Hair mist", value: "Lime Hydrosol" },
        { label: "Body spray", value: "Lime Hydrosol" },
        { label: "Water-based botanical product", value: "Lime Hydrosol" },
      ],
    },
  ],
};

export function withPdfTables<
  T extends {
    slug: string;
    infoTables?: CleanProductInfoTable[];
    sections?: Array<{ tables?: CleanProductInfoTable[] }>;
    variants?: Array<{ tables?: CleanProductInfoTable[] }>;
    contentFlow?: unknown[];
  },
>(
  pages: Record<string, T>,
): Record<string, T> {
  return Object.fromEntries(
    Object.entries(pages).map(([slug, page]) => {
      const fromPdf = NEW_PAGE_TABLES[slug];
      const hasInlineTables =
        Boolean(page.contentFlow?.length) ||
        page.sections?.some((section) => section.tables?.length) ||
        page.variants?.some((variant) => variant.tables?.length);
      if (!fromPdf?.length || page.infoTables?.length || hasInlineTables) return [slug, page];
      return [slug, { ...page, infoTables: fromPdf }];
    }),
  );
}
