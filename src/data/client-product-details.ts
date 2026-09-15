import type { CleanProductSpec } from "@/lib/types";

/**
 * Product details supplied by the client.
 *
 * Keeping these keyed by an existing page slug ensures the details are only
 * applied to products that are already available on the site.
 */
const CLIENT_PRODUCT_DETAILS: Record<string, CleanProductSpec[]> = {
  "arachis-oil": [
    { label: "Botanical Name", value: "Arachis hypogaea" },
    { label: "Other Common Names", value: "Peanut Oil, Groundnut Oil" },
    { label: "Plant Family", value: "Fabaceae" },
    { label: "Odour", value: "Mild, Characteristic, Nutty" },
    { label: "Colour", value: "Pale Yellow to Golden" },
    { label: "Solubility", value: "Insoluble in Water; Soluble in Many Organic Solvents" },
    { label: "Nature", value: "Fixed Vegetable Oil" },
    { label: "Main Fatty Acids", value: "Oleic Acid, Linoleic Acid" },
    { label: "Plant Part", value: "Seeds" },
    { label: "Common Extraction", value: "Pressing or Suitable Oil Extraction" },
  ],
  "anise-oil": [
    { label: "Product Name", value: "Anise Oil" },
    { label: "Botanical Name", value: "Pimpinella anisum" },
    { label: "Common Names", value: "Aniseed Oil, Anise Seed Oil" },
    { label: "Plant Family", value: "Apiaceae" },
    { label: "Plant Part Used", value: "Dried seeds" },
    { label: "Extraction Method", value: "Steam distillation" },
    { label: "Physical Form", value: "Clear liquid" },
    { label: "Colour", value: "Clear to pale yellow" },
    { label: "Odour", value: "Sweet, warm, spicy, and licorice-like" },
    { label: "Main Natural Compound", value: "Anethole" },
    { label: "Solubility", value: "Insoluble in water; soluble in suitable oils and alcohol" },
  ],
  "ajwain-oil": [
    { label: "Product Name", value: "Ajwain Oil" },
    { label: "Botanical Name", value: "Trachyspermum ammi" },
    { label: "Common Names", value: "Ajowan Oil, Carom Seed Oil, Bishop’s Weed Oil" },
    { label: "Plant Family", value: "Apiaceae" },
    { label: "Plant Part Used", value: "Dried ajwain seeds" },
    { label: "Extraction Method", value: "Steam distillation" },
    { label: "Physical Form", value: "Clear to pale yellow liquid" },
    { label: "Colour", value: "Colourless to pale yellow" },
    { label: "Odour", value: "Strong, warm, spicy, sharp, and thyme-like" },
    { label: "Main Natural Compound", value: "Thymol" },
  ],
  "myrtle-oil": [
    { label: "Product Name", value: "Myrtle Oil" },
    { label: "Botanical Name", value: "Myrtus communis" },
    { label: "Common Names", value: "Common Myrtle Oil, Corsican Myrtle Oil" },
    { label: "Plant Family", value: "Myrtaceae" },
    { label: "Plant Part Used", value: "Leaves and young branches" },
    { label: "Extraction Method", value: "Steam distillation" },
    { label: "Physical Form", value: "Clear liquid" },
    { label: "Colour", value: "Colourless to pale yellow" },
    { label: "Odour", value: "Fresh, green, herbal, slightly sweet, and mildly camphoraceous" },
  ],
  "mentha-oil": [
    { label: "Product Name", value: "Mentha Oil" },
    { label: "Botanical Name", value: "Mentha arvensis" },
    { label: "Common Names", value: "Cornmint Oil, Japanese Mint Oil, Wild Mint Oil" },
    { label: "Plant Family", value: "Lamiaceae" },
    { label: "Plant Part Used", value: "Fresh or partially dried leaves and aerial parts" },
    { label: "Extraction Method", value: "Steam distillation" },
    { label: "Physical Form", value: "Clear liquid" },
    { label: "Colour", value: "Colourless to pale yellow" },
    { label: "Odour", value: "Strong, fresh, cool, minty, and slightly herbal" },
    { label: "Main Natural Compound", value: "Menthol" },
  ],
  "nutmeg-oil": [
    { label: "Product Name", value: "Nutmeg Oil" },
    { label: "Botanical Name", value: "Myristica fragrans" },
    { label: "Common Names", value: "Nutmeg Essential Oil, Jaiphal Oil" },
    { label: "Plant Family", value: "Myristicaceae" },
    { label: "Plant Part Used", value: "Nutmeg seeds" },
    { label: "Extraction Method", value: "Steam distillation" },
    { label: "Physical Form", value: "Clear liquid" },
    { label: "Colour", value: "Colourless to pale yellow" },
    { label: "Odour", value: "Warm, spicy, sweet, woody, and slightly earthy" },
  ],
  "olive-oil": [
    { label: "Product Name", value: "Olive Oil" },
    { label: "Botanical Name", value: "Olea europaea" },
    { label: "Common Names", value: "Olive Fruit Oil, Sweet Olive Oil" },
    { label: "Plant Family", value: "Oleaceae" },
    { label: "Plant Part Used", value: "Ripe olive fruits" },
    { label: "Extraction Method", value: "Mechanical pressing or centrifugation" },
    { label: "Physical Form", value: "Liquid oil" },
    { label: "Colour", value: "Golden yellow to greenish yellow" },
    { label: "Odour", value: "Mild, fresh, fruity, and slightly grassy" },
  ],
};

export function withClientProductDetails<
  T extends { slug: string; specs?: CleanProductSpec[]; specsTitle?: string },
>(pages: Record<string, T>): Record<string, T> {
  return Object.fromEntries(
    Object.entries(pages).map(([slug, page]) => {
      const details = CLIENT_PRODUCT_DETAILS[slug];
      if (!details) return [slug, page];

      return [
        slug,
        {
          ...page,
          specsTitle: page.specsTitle ?? "Product Details",
          specs: details,
        },
      ];
    }),
  );
}
