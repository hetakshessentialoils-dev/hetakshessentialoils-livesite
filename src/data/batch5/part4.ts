import type { CleanProductPage, FaqItem } from "@/lib/types";

const CO = "/assets/images/products/Carrier-Oils";
const EO = "/assets/images/products/Essential-Oils";
const HYD = "/assets/images/products/Hydrosol";
const SP = "/assets/images/products/spice-oil";
const SI = "/assets/images/products/special-ingredients";
const PG = "/assets/images/products/Pharma-Grade-Oils";
const PP = "/assets/images/products/single-product";

export const PAGES: Record<string, CleanProductPage> = {
  "onion-oil": {
    slug: "onion-oil",
    category: "spice-oils",
    categoryName: "Spice Oils",
    name: "Onion Oil",
    heading: "Onion Oil | A Strong Botanical Ingredient from Onion Bulbs",
    image: `${SP}/ONION OIL.webp`,
    imageAlt: "Onion Oil",
    paragraphs: [
      "Onion is a simple kitchen ingredient, but it also has an interesting place in the natural oil world. Onion Oil is made from onion material, commonly from Allium cepa, a plant in the Amaryllidaceae family. The bulb is the familiar part that we cook with, and it contains many natural compounds that give onion its sharp smell. Onion oil can be prepared through different processing methods, depending on the type of product required. Its color, smell, and composition can therefore differ from one product to another.",
      "Fresh onion has a strong and sharp aroma because of its natural sulfur compounds. These compounds are released when the onion is cut or crushed. This is why onion oil usually does not smell like a sweet floral oil or a soft citrus oil. It has a much stronger vegetable and sulfur-like character.",
      "Onion Oil can be explored in hair-care products, scalp formulations, cosmetic blends, soaps, personal-care products, and other botanical formulations. It can also be used as part of a carefully designed ingredient blend where an onion-derived material is wanted. Since different production methods can create different types of onion oil, buyers should check whether they need a pure oil, an infused oil, or another onion-based preparation before selecting the product.",
    ],
    specsTitle: "Onion Oil at a Glance",
    specs: [
      { label: "Botanical Name", value: "Allium cepa" },
      { label: "Family", value: "Amaryllidaceae" },
      { label: "Main Part", value: "Bulb" },
      { label: "Aroma", value: "Strong, Sharp & Sulfur-Like" },
      { label: "Appearance", value: "Depends on Processing" },
      { label: "Natural Character", value: "Vegetable, Pungent & Distinct" },
      { label: "Common Product Areas", value: "Hair Care, Cosmetics & Personal Care" },
    ],
    coa: `${SP}/COA/ONION OIL COA.pdf`,
    msds: `${SP}/MSDS/ONION OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Onion Oil Enquiries",
    enquirySource: "Enquiry from Onion Oil Page",
    sections: [
      {
        title: "Why Does Onion Have Such a Strong Smell?",
        paragraphs: [
          "This is where onion becomes different from most other botanical ingredients. An onion does not have its strong smell all the time. When the bulb is whole, the aroma is much quieter.",
          "Cut it, crush it, or damage its cells, and the story changes. Inside the onion are compounds that stay separated while the cells are intact. Cutting the onion allows enzymes and other compounds to meet. This creates new sulfur-containing substances responsible for much of the familiar onion smell.",
          "That is also why your eyes can water while cutting an onion.",
        ],
      },
      {
        title: "Onion Compared with Other Botanical Oils",
        paragraphs: [
          "Onion and garlic may seem similar because both have strong sulfur-related aromas, but they still have different natural profiles.",
        ],
      },
      {
        title: "Onion Oil for Hair-Care Formulations",
        paragraphs: [
          "An onion oil bulk manufacturer may work with brands developing hair oils, scalp products, masks, serums, and other personal-care formulas. Onion-derived ingredients are often chosen because they give a product a strong botanical identity.",
          "But the smell can be a challenge. A formulator may combine onion-derived material with other ingredients to make the final product more pleasant. Fragrance materials, essential oils, or other carrier oils can be used depending on the type of formula.",
          "For example, a hair oil containing onion-derived material could be blended with a carrier such as coconut, jojoba, almond, or sesame oil. The final formula should always be tested for smell, texture, stability, and skin compatibility.",
        ],
      },
      {
        title: "Oil, Infusion and Extract Are Not Automatically the Same",
        paragraphs: [
          "This is an important point when buying onion-based ingredients. A product called onion oil may refer to different preparations depending on the manufacturer.",
          "These materials should not be treated as identical. The production method and ingredient list should be checked before using the product in a formulation.",
        ],
        lists: [
          {
            title: "Preparations Sold Under an Onion Oil Name",
            columns: 2,
            items: [
              "An onion-derived essential oil",
              "An onion-infused carrier oil",
              "An onion extract carried in another oil",
              "Another specialised onion preparation",
            ],
          },
        ],
      },
      {
        title: "The Onion Bulb: More Than One Useful Part",
        paragraphs: [
          "The bulb is made up of layers. Each layer protects the inner part of the onion. The outer skin is dry and papery, and inside are the juicy layers that we normally eat.",
          "These layers contain water, carbohydrates, sulfur-containing compounds, and other natural components. When onions are processed, the final material depends greatly on which part is used and how it is handled. This makes raw-material preparation an important part of onion-based product production.",
        ],
      },
      {
        title: "A Simple Production Picture",
        paragraphs: [
          "Onion bulbs → Cleaning → Cutting/Preparation → Processing → Separation/Filtration → Finished Onion Material",
          "The exact process can differ according to the desired product. That is why it is better to ask for the actual product specification rather than assuming every onion oil is made in exactly the same way.",
        ],
      },
      {
        title: "Onion Oil and Hydrosol in Product Development",
        paragraphs: [
          "Onion products can be useful for brands that want something different from the usual floral, citrus, or woody botanicals.",
          "Onion Oil has a strong personality. It is more suitable when the formula can handle or balance its pungent aroma. Onion Hydrosol gives a much lighter water-based option. This difference can help a formulator decide which material makes more sense.",
        ],
      },
      {
        title: "A Simple Selection Guide",
        paragraphs: ["The right choice always depends on the complete product formula."],
        lists: [
          {
            columns: 1,
            items: [
              "Need an oil-based onion ingredient? → Consider Onion Oil.",
              "Need a water-based botanical material? → Consider Onion Hydrosol.",
              "Want a hair-oil formula? → An oil-based onion preparation may be more suitable.",
              "Want a scalp spray? → A properly preserved water-based onion hydrosol may be explored.",
            ],
          },
        ],
      },
      {
        title: "What Should Be Checked Before Buying?",
        paragraphs: [
          "When purchasing onion oil bulk wholesale, it is useful to know exactly what type of onion material is being offered. Confirm whether the product is a concentrated onion oil, an infused oil, or another onion-derived preparation, because the smell, color, and use can change with the production method.",
          "Knowing the full details prevents confusion between an infused oil and a concentrated onion-derived material. For cosmetic manufacturers, the ingredient list and technical information are especially useful because the same common product name can sometimes be used for different preparations.",
          "At Hetaksh Essential Oils, onion-derived products can be evaluated according to their actual composition and intended use rather than treating every product called onion oil as the same material.",
        ],
        lists: [
          {
            title: "Important Information Can Include",
            columns: 2,
            items: [
              "Botanical name",
              "Plant part",
              "Production method",
              "Carrier oil, if any",
              "Appearance",
              "Aroma",
              "Ingredient composition",
              "Grade",
              "Batch information",
              "Intended application",
            ],
          },
        ],
      },
    ],
    variants: [
      {
        title: "Onion Hydrosol | A Light Water-Based Onion Ingredient",
        coa: `${HYD}/COA/ONION HYDROSOL COA.pdf`,
        msds: `${HYD}/MSDS/Onion Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Onion Hydrosol is a much less concentrated material than onion oil. It is a water-based botanical product associated with the processing or distillation of onion material. Its smell can still have an onion-like character, but it is much lighter than the raw bulb or a concentrated onion-derived oil.",
          "An onion hydrosol bulk supplier may provide the ingredient for brands exploring unusual botanical materials for water-based products. The important thing to remember is that hydrosol is not simply onion oil mixed with water. The two materials have different forms and different properties.",
          "The final formula needs proper preservation because water-based products can allow microorganisms to grow if they are not protected correctly.",
        ],
        lists: [
          {
            title: "Where Onion Hydrosol May Fit",
            columns: 2,
            items: [
              "Hair mists",
              "Scalp sprays",
              "Botanical sprays",
              "Toners",
              "Lotions",
              "Creams",
              "Personal-care products",
            ],
          },
        ],
      },
      {
        title: "Onion Seed Oil",
        coa: `${CO}/coa/ONION SEED OIL COA.pdf`,
        msds: `${CO}/MSDS/ONION SEED OIL MSDS.pdf`,
        paragraphs: [
          "Onion Seed Oil is a seed-derived oil and is different from onion oil made from bulbs. The two materials should not be treated as interchangeable. Check the specification if a seed oil is required for cosmetic or personal-care formulas.",
        ],
      },
    ],
    infoTables: [
      {
        title: "Onion Oil vs Onion Hydrosol",
        labelHeader: "Point",
        valueHeader: "Onion Oil",
        extraHeaders: ["Onion Hydrosol"],
        rows: [
          { label: "Form", value: "Oil-based", extra: ["Water-based"] },
          { label: "Strength", value: "More concentrated", extra: ["Much lighter"] },
          { label: "Aroma", value: "Stronger aroma", extra: ["Softer aroma"] },
          {
            label: "Typical Use",
            value: "Used in oil-based formulas",
            extra: ["Better suited to water-based formulas"],
          },
          {
            label: "Formulation Needs",
            value: "Requires suitable dilution",
            extra: ["Needs proper preservation"],
          },
        ],
      },
      {
        title: "Onion Next to Other Botanical Oils",
        labelHeader: "Ingredient",
        valueHeader: "General Character",
        rows: [
          { label: "Onion", value: "Sharp, pungent, sulfur-like" },
          { label: "Garlic", value: "Strong, sulfurous and spicy" },
          { label: "Ginger", value: "Warm, spicy and fresh" },
          { label: "Rosemary", value: "Green, dry and herbal" },
          { label: "Orange", value: "Sweet, juicy and citrusy" },
        ],
      },
    ],
    seoTitle: "Onion Oil Manufacturer | Bulk Onion Oil & Onion Hydrosol Supplier",
    seoDescription:
      "Buy bulk Onion Oil, Onion Hydrosol, and Onion Seed Oil from Allium cepa. Botanical onion ingredients for hair care and personal care, with COA, MSDS, and worldwide shipping.",
  },

  "orange-oil": {
    slug: "orange-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Orange Oil",
    heading: "Orange Oil | Bright Citrus from the Orange Peel",
    image: `${EO}/Orange-Oil.webp`,
    imageAlt: "Orange Oil",
    paragraphs: [
      "Orange is one of those fruits that most people know from the kitchen, but its peel has another useful side. Orange Oil is commonly obtained from the outer peel of sweet orange, usually Citrus sinensis. The peel contains tiny pockets of natural aromatic oil. When the peel is pressed, the oil comes out with its familiar sweet and juicy citrus smell.",
      "Limonene is usually the main component, while smaller amounts of compounds such as myrcene, α-pinene, linalool, and other natural substances can also occur. The color is often yellow to orange-yellow. Fresh orange oil smells bright, fruity, sweet, and cheerful. It can be used to give a natural citrus character to fragrances, soaps, candles, cleaning products, cosmetics, personal-care products, and suitable flavor applications.",
      "The peel is important here because orange juice and orange oil are two completely different materials. Juice gives taste and liquid fruit content, while the peel gives concentrated aromatic material. This is also why orange oil should not be confused with neroli oil. Neroli comes from orange flowers, while orange oil is generally associated with the fruit peel. The difference may look small, but the aroma is quite different.",
    ],
    specsTitle: "A Quick Look at Orange Oil",
    specs: [
      { label: "Botanical Name", value: "Citrus sinensis" },
      { label: "Family", value: "Rutaceae" },
      { label: "Main Part", value: "Fruit Peel" },
      { label: "Common Method", value: "Cold Pressing" },
      { label: "Color", value: "Yellow to Orange-Yellow" },
      { label: "Aroma", value: "Sweet, Juicy, Fresh & Citrus" },
      { label: "Main Component", value: "Limonene" },
      { label: "Other Components", value: "Myrcene, α-Pinene, Linalool & Others" },
    ],
    coa: `${EO}/coa/ORANGE-OIL-COA.pdf`,
    msds: `${EO}/MSDS/ORANGE-OIL-MSDS.pdf`,
    formTitle: "Contact us for Wholesale Orange Oil Enquiries",
    enquirySource: "Enquiry from Orange Oil Page",
    sections: [
      {
        title: "Oil or Hydrosol?",
        paragraphs: [
          "The easiest way to understand them is to look at their form. Orange Oil is concentrated, oil-based, and strongly aromatic. Orange Hydrosol is water-based, lighter, and much softer smelling.",
          "A facial mist, for example, may be designed around a water-based ingredient such as hydrosol. A perfume or oil-based fragrance blend may need the stronger aromatic character of orange oil.",
          "Because hydrosol contains water, the finished product needs suitable preservation, microbial control, pH checking, and stability testing.",
        ],
      },
      {
        title: "Peel, Flower and Juice — Three Different Orange Materials",
        paragraphs: [
          "One orange tree can give several very different ingredients. The fruit juice is used mainly for food and beverages. The fruit peel gives orange oil. The flowers can give neroli oil and orange-blossom-related materials.",
          "This is a simple but useful distinction for product makers. An orange oil bulk manufacturer may supply peel-derived oil, while a company looking for a floral orange ingredient would need to look at a completely different material.",
        ],
      },
      {
        title: "What Gives Orange Oil Its Smell?",
        paragraphs: [
          "Limonene is usually the largest component of sweet orange oil. It is one of the main reasons the oil has such a recognisable citrus smell. But limonene is not working alone.",
          "Other natural compounds add small pieces to the final aroma. Myrcene can contribute to the overall citrus character, while compounds such as α-pinene and linalool can also occur.",
          "Think of it like making a fruit drink. One ingredient gives the main taste, while smaller ingredients help complete the flavor. The same idea works for a natural essential oil.",
        ],
      },
      {
        title: "Orange Oil Can Change the Mood of a Blend",
        paragraphs: [
          "Orange is very easy to combine with other aromatic materials. This flexibility is one reason orange is such a familiar ingredient in fragrance and personal-care products.",
        ],
        lists: [
          {
            title: "Try These Simple Pairings",
            columns: 1,
            items: [
              "Orange + Cinnamon — Warm and spicy",
              "Orange + Clove — Deeper and richer",
              "Orange + Lavender — Softer and more floral",
              "Orange + Peppermint — Cool and fresh",
              "Orange + Cedarwood — A warm woody direction",
            ],
          },
        ],
      },
      {
        title: "From Orange Peel to Oil",
        paragraphs: [
          "The production story is short and easy to understand.",
          "Orange fruit → Peel → Oil collection → Filtration → Testing → Finished product",
          "Citrus peel contains small oil sacs. Mechanical pressing can break these sacs and release the aromatic oil. The resulting liquid is then processed according to the required grade. This is different from steam distillation used for many leafy or floral essential oils.",
          "The production method can affect the final aroma, color, and composition, which is why the extraction method is useful information when comparing orange oils.",
        ],
      },
      {
        title: "Orange Oil in Everyday Products",
        paragraphs: [
          "An orange oil bulk distributor may supply the oil for several industries because its sweet citrus smell works in many types of products. Orange oil can give perfumes, soaps, candles, and diffuser blends a bright opening, and it can be explored in body washes, creams, lotions, soaps, shampoos, and other suitable cosmetic products.",
          "Its familiar smell also fits room sprays, candles, cleaning fragrances, and diffuser blends, while suitable food-grade orange oil can be considered for flavor applications where permitted and where the correct grade is used.",
          "The same essential oil should not automatically be assumed to be suitable for every one of these purposes. The product grade and intended application matter.",
        ],
        lists: [
          {
            title: "Where Orange Oil Is Used",
            columns: 2,
            items: [
              "Fragrances",
              "Soaps",
              "Candles",
              "Cleaning products",
              "Cosmetics",
              "Personal care",
              "Flavor applications",
            ],
          },
        ],
      },
      {
        title: "Orange Oil Compared with Other Citrus Oils",
        paragraphs: ["Orange is often the softer, rounder citrus note among these familiar oils."],
      },
      {
        title: "A Small Buying Tip",
        paragraphs: [
          "For orange oil bulk wholesale, the product name is only the beginning. This helps ensure that the selected oil fits the actual product being made.",
          "At Hetaksh Essential Oils, orange oil can be explored as a citrus ingredient for fragrance, personal care, cosmetics, home fragrance, and suitable flavor applications, with the product selected according to its required specification.",
        ],
        lists: [
          {
            title: "The Buyer May Also Need to Know",
            columns: 2,
            items: [
              "Botanical source",
              "Fruit variety",
              "Extraction method",
              "Country of origin",
              "Color",
              "Aroma",
              "Composition",
              "Intended application",
            ],
          },
        ],
      },
    ],
    variants: [
      {
        title: "Orange Hydrosol | A Light Citrus Water",
        coa: `${HYD}/COA/ORANGE HYDROSOL COA.pdf`,
        msds: `${HYD}/MSDS/Orange Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Orange Hydrosol has a much softer personality than concentrated orange oil. It is a water-based botanical product associated with the distillation of orange plant material. Instead of the strong, juicy smell of the oil, the hydrosol can give a gentle fresh citrus impression.",
          "An orange hydrosol bulk supplier can provide the material for brands developing water-based botanical products such as face mists, body sprays, hair mists, toners, lotions, and other suitable formulas. The final use depends on the quality and specification of the hydrosol.",
        ],
        lists: [
          {
            title: "A Few Places for Orange Hydrosol",
            columns: 2,
            items: [
              "Facial sprays",
              "Body mists",
              "Hair mists",
              "Botanical toners",
              "Lotions",
              "Creams",
              "Soaps",
              "Room sprays",
            ],
          },
        ],
      },
    ],
    infoTables: [
      {
        title: "Three Different Orange Materials",
        labelHeader: "Orange Material",
        valueHeader: "Main Character",
        rows: [
          { label: "Orange Juice", value: "Sweet, fruity and liquid" },
          { label: "Orange Peel Oil", value: "Juicy, bright citrus" },
          { label: "Neroli Oil", value: "Floral, fresh and orange-blossom-like" },
          { label: "Orange Hydrosol", value: "Soft, light botanical citrus" },
        ],
      },
      {
        title: "Orange Oil Across Industries",
        labelHeader: "Industry",
        valueHeader: "Where Orange Oil Can Fit",
        rows: [
          {
            label: "Fragrance",
            value: "Orange oil can give perfumes, soaps, candles, and diffuser blends a bright opening",
          },
          {
            label: "Personal Care",
            value:
              "It can be explored in body washes, creams, lotions, soaps, shampoos, and other suitable cosmetic products",
          },
          {
            label: "Home Fragrance",
            value: "Its familiar smell fits room sprays, candles, cleaning fragrances, and diffuser blends",
          },
          {
            label: "Flavor",
            value:
              "Suitable food-grade orange oil can be considered for flavor applications where permitted and where the correct grade is used",
          },
        ],
      },
      {
        title: "Orange Compared with Other Citrus Oils",
        labelHeader: "Oil",
        valueHeader: "General Aroma",
        rows: [
          { label: "Orange", value: "Sweet and juicy" },
          { label: "Lemon", value: "Sharp and zesty" },
          { label: "Lime", value: "Green and crisp" },
          { label: "Mandarin", value: "Soft and sweet" },
          { label: "Grapefruit", value: "Fresh with a slightly bitter side" },
        ],
      },
    ],
    seoTitle: "Orange Oil Manufacturer & Supplier | Bulk Sweet Orange Essential Oil",
    seoDescription:
      "Buy bulk Orange Oil and Orange Hydrosol from Citrus sinensis peel. Bright citrus oil for fragrance, flavor, and personal care, with COA, MSDS, and worldwide shipping.",
  },

  "oregano-oil": {
    slug: "oregano-oil",
    category: "spice-oils",
    categoryName: "Spice Oils",
    name: "Oregano Oil",
    heading: "Oregano Oil | A Bold Herbal Oil from a Strong-Scented Plant",
    image: `${SP}/OREGANO OIL.webp`,
    imageAlt: "Oregano Oil",
    paragraphs: [
      "Oregano is a familiar herb, but its essential oil is much more intense than the dried leaves used in cooking. Oregano Oil is commonly obtained from oregano plants belonging to the Origanum group, with Origanum vulgare being one well-known source. The leaves and flowering tops are generally used, and steam distillation is a common extraction method. The finished oil can range from clear to yellow and has a strong, warm, spicy, herbal smell.",
      "Depending on the species and origin, compounds such as carvacrol, thymol, γ-terpinene, and p-cymene may occur in the natural profile. This is one reason oregano oil can smell much stronger than many other herb oils. The exact composition can differ between botanical sources, so the plant name matters when choosing a product.",
      "Oregano Oil can be explored in flavor, fragrance, soap, personal-care, and cosmetic applications where its powerful herbal character fits the formula. It is also very different from oregano leaf powder or dried oregano. A spice used in food and a concentrated essential oil should never be treated as the same material. Because oregano oil is highly concentrated, its intended application and safe level of use need to be considered carefully.",
    ],
    specsTitle: "Oregano Oil at a Glance",
    specs: [
      { label: "Common Botanical Source", value: "Origanum vulgare" },
      { label: "Family", value: "Lamiaceae" },
      { label: "Plant Part", value: "Leaves & Flowering Tops" },
      { label: "Common Extraction", value: "Steam Distillation" },
      { label: "Color", value: "Clear to Yellow" },
      { label: "Aroma", value: "Strong, Warm, Spicy & Herbal" },
      { label: "Important Compounds", value: "Carvacrol, Thymol, γ-Terpinene & Others" },
      { label: "Main Character", value: "Powerful Herbal Note" },
    ],
    coa: `${SP}/COA/OREGANO OIL COA.pdf`,
    msds: `${SP}/MSDS/OREGANO OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Oregano Oil Enquiries",
    enquirySource: "Enquiry from Oregano Oil Page",
    sections: [
      {
        title: "Not All Oregano Oils Smell the Same",
        paragraphs: [
          "The word “oregano” can cover more than one botanical source. Different Origanum species and chemotypes can have different natural compositions. Some oils may have a stronger carvacrol character, while others may contain different proportions of thymol or other aromatic compounds.",
          "This is why oregano oil bulk manufacturer specifications should clearly identify the botanical source. A product made from one oregano species should not automatically be assumed to have the same composition as an oil made from another.",
        ],
      },
      {
        title: "A Simple Comparison",
        paragraphs: ["Oregano is usually one of the stronger-smelling oils in this group."],
      },
      {
        title: "What Gives Oregano Its Strong Smell?",
        paragraphs: [
          "Carvacrol and thymol are two well-known natural compounds found in certain oregano oils. Other compounds such as γ-terpinene and p-cymene may also contribute to the overall aroma. The final smell is created by the whole mixture rather than one compound alone.",
          "This is why two oregano oils can smell noticeably different even when both are genuine botanical oils. The plant variety, growing location, climate, harvest time, and processing can all influence the natural profile.",
        ],
      },
      {
        title: "From Herb to Essential Oil",
        paragraphs: [
          "Oregano oil production starts with the plant.",
          "Oregano plant → Leaves and flowering tops → Harvest → Steam Distillation → Cooling → Oil Separation → Filtration → Testing",
          "Steam is passed through the plant material. The heat releases volatile aromatic compounds. The vapour then travels into a cooling system where it becomes liquid again. The oil is separated from the water and prepared according to the required specification. This is one reason the plant material needs to be handled properly from the beginning.",
        ],
      },
      {
        title: "Oregano Oil in Food and Flavor Work",
        paragraphs: [
          "Oregano is already familiar as a culinary herb, so its flavor connection is easy to understand. However, not every oregano essential oil should automatically be used in food.",
          "A suitable oregano oil bulk distributor should identify the grade and intended application clearly. Where food use is permitted, the appropriate food-grade material and applicable regulations must be followed.",
          "For other products, the oil may instead be selected for its aroma. This distinction is important because an oil suitable for one application is not automatically suitable for another.",
        ],
      },
      {
        title: "Oregano in Fragrance and Personal Care",
        paragraphs: [
          "Oregano oil has a strong personality. It can add a warm herbal note to soap and aromatic products, but it can easily overpower softer ingredients if too much is used. That is why fragrance makers may use it carefully alongside other oils.",
          "The finished product should always be properly formulated, especially when essential oils are being used in products intended for skin contact.",
        ],
        lists: [
          {
            title: "Try These Simple Pairings",
            columns: 1,
            items: [
              "Oregano + Lemon — A bright herbal-citrus direction",
              "Oregano + Rosemary — A stronger green-herbal blend",
              "Oregano + Orange — Sharpness softened with a sweet citrus note",
              "Oregano + Cedarwood — A deeper woody side",
            ],
          },
          {
            title: "Where Oregano Oil Is Used",
            columns: 2,
            items: ["Flavor", "Fragrance", "Soap", "Personal care", "Cosmetic applications"],
          },
        ],
      },
      {
        title: "Oregano Oil and Oregano Hydrosol Side by Side",
        paragraphs: [
          "An oregano oil bulk exporter may therefore deal with a very different type of product from a supplier handling oregano hydrosol.",
          "At Hetaksh Essential Oils, oregano products can be looked at according to their botanical source, grade, natural composition, and intended application. This is useful because “oregano” alone does not tell the whole story.",
          "For businesses considering oregano oil bulk wholesale, checking the botanical identity and product specification before selecting a quantity can help ensure that the material matches the planned formulation.",
        ],
      },
    ],
    variants: [
      {
        title: "Oregano Hydrosol | A Gentler Way to Use the Herb’s Aroma",
        coa: `${HYD}/COA/OREGANO HYDROSOL COA.pdf`,
        msds: `${HYD}/MSDS/Oregano Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Oregano Hydrosol has a much softer character than concentrated oregano oil. It is a water-based botanical material obtained through suitable distillation of oregano plant material. The result can have a light herbal, green, and slightly spicy aroma.",
          "An oregano hydrosol bulk supplier may provide it for brands developing botanical sprays, personal-care products, toners, lotions, and other water-based formulas.",
          "Oregano Oil has a strong, concentrated aromatic character, while Oregano Hydrosol is mainly water and carries a much lighter botanical note. This means they cannot simply be swapped in a recipe. An oil-based formula and a water-based formula need different ingredients and different formulation methods.",
          "Since hydrosols contain water, finished products containing them should have proper preservation, microbial testing, and stability checks.",
        ],
        lists: [
          {
            title: "Possible Hydrosol Formats",
            columns: 2,
            items: [
              "Botanical sprays",
              "Face or body mists",
              "Hair mists",
              "Toners",
              "Lotions",
              "Creams",
              "Soaps",
              "Other water-based products",
            ],
          },
        ],
      },
    ],
    infoTables: [
      {
        title: "Oregano Compared with Other Botanical Oils",
        labelHeader: "Botanical Oil",
        valueHeader: "General Character",
        rows: [
          { label: "Oregano", value: "Strong, warm and spicy" },
          { label: "Marjoram", value: "Softer, sweet and herbal" },
          { label: "Thyme", value: "Strong, dry and herbal" },
          { label: "Rosemary", value: "Green, fresh and woody" },
          { label: "Basil", value: "Sweet, green and spicy" },
        ],
      },
      {
        title: "Oregano Oil and Oregano Hydrosol — Feature by Feature",
        labelHeader: "Feature",
        valueHeader: "Oregano Oil",
        extraHeaders: ["Oregano Hydrosol"],
        rows: [
          { label: "Form", value: "Concentrated oil", extra: ["Water-based"] },
          { label: "Smell", value: "Strong", extra: ["Mild"] },
          { label: "Character", value: "Spicy and herbal", extra: ["Light and botanical"] },
          { label: "Typical Format", value: "Oil-based blends", extra: ["Water-based products"] },
          { label: "Aroma Strength", value: "High", extra: ["Low"] },
          {
            label: "Formulation Needs",
            value: "Dilution and safety assessment",
            extra: ["Preservation and microbial control"],
          },
        ],
      },
    ],
    seoTitle: "Oregano Oil Manufacturer & Supplier | Bulk Oregano Essential Oil",
    seoDescription:
      "Buy bulk Oregano Oil and Oregano Hydrosol from Origanum vulgare. Bold herbal spice oil for flavor, fragrance, and personal care, with COA, MSDS, and worldwide shipping.",
  },
};

export const FAQS: Record<string, FaqItem[]> = {
  "onion-oil": [
    {
      question: "What is Onion Oil made from?",
      answer:
        "It is made from onion material, commonly associated with Allium cepa. The exact preparation depends on the production method used.",
    },
    {
      question: "Why does Onion Oil have such a strong smell?",
      answer:
        "Onion contains sulfur-containing compounds that are responsible for much of its sharp and pungent aroma.",
    },
    {
      question: "Is Onion Hydrosol the same as Onion Oil mixed with water?",
      answer:
        "No. Hydrosol is a water-based botanical material produced through a suitable processing or distillation method. It is not simply essential oil diluted with water.",
    },
    {
      question: "Can Onion-derived ingredients be used in hair-care products?",
      answer:
        "They can be explored in suitable hair oils, scalp products, masks, serums, and other formulations. The finished product should be properly formulated and tested.",
    },
    {
      question: "What is the difference between Onion Oil and Onion-infused Oil?",
      answer:
        "They should not automatically be considered the same. An infused oil uses onion material placed into a carrier oil, while another onion oil may be a more concentrated or differently processed onion-derived product. The actual ingredient specification should be checked.",
    },
  ],
  "orange-oil": [
    {
      question: "What part of the orange is used to make Orange Oil?",
      answer:
        "The outer peel is commonly used because it contains the tiny oil glands that hold the fruit’s natural aromatic material.",
    },
    {
      question: "Is Orange Oil the same as Neroli Oil?",
      answer:
        "No. Orange oil generally comes from the fruit peel, while neroli oil comes from the flowers of the bitter orange tree. Their smells are very different.",
    },
    {
      question: "What is the main natural component in sweet Orange Oil?",
      answer:
        "Limonene is usually the main component, with smaller amounts of other naturally occurring aromatic compounds.",
    },
    {
      question: "Can Orange Hydrosol be used in a face mist?",
      answer:
        "It can be considered for suitable water-based face mists, provided the finished product is properly preserved and tested for microbial quality, stability, and pH.",
    },
    {
      question: "Can Orange Oil be supplied in bulk?",
      answer:
        "Yes. Orange oil bulk exporter requirements can be handled according to the required product grade, quantity, destination, and intended application.",
    },
  ],
  "oregano-oil": [
    {
      question: "What is Oregano Oil made from?",
      answer:
        "It is commonly obtained from the leaves and flowering tops of oregano plants through steam distillation. Origanum vulgare is one commonly used botanical source.",
    },
    {
      question: "What gives Oregano Oil its strong smell?",
      answer:
        "Compounds such as carvacrol and thymol can contribute strongly to the warm, spicy, and herbal character found in many oregano oils.",
    },
    {
      question: "Is Oregano Hydrosol as strong as Oregano Oil?",
      answer:
        "No. Hydrosol is mainly water-based and has a much softer aroma than concentrated oregano oil.",
    },
    {
      question: "Can Oregano Oil be used in food products?",
      answer:
        "Only an appropriate food-grade product should be considered, and its use must follow the rules and permitted levels applicable to the intended market.",
    },
    {
      question: "Is every Oregano Oil the same?",
      answer:
        "No. Different oregano species, varieties, origins, and natural chemical profiles can produce oils with different aromas and compositions. The botanical name and specification should therefore be checked.",
    },
    {
      question: "Can Oregano Hydrosol be used in water-based products?",
      answer: "Yes. It can be explored in suitable water-based personal-care and aromatic formulas.",
    },
    {
      question: "Is Oregano Oil available in bulk wholesale?",
      answer:
        "Yes. Commercial quantities can be supplied for flavor, fragrance, soap, and personal-care manufacturers.",
    },
  ],
};
