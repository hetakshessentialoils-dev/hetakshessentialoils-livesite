import type { CleanProductPage, FaqItem } from "@/lib/types";

const CO = "/assets/images/products/Carrier-Oils";
const EO = "/assets/images/products/Essential-Oils";
const HYD = "/assets/images/products/Hydrosol";
const SP = "/assets/images/products/spice-oil";
const SI = "/assets/images/products/special-ingredients";
const PG = "/assets/images/products/Pharma-Grade-Oils";
const PP = "/assets/images/products/single-product";

export const PAGES: Record<string, CleanProductPage> = {
  "mandarin-oil": {
    slug: "mandarin-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Mandarin Oil",
    heading: "Mandarin Oil | A Sweet Citrus Oil with a Soft, Fruity Smell",
    image: `${EO}/Mandarin-Oil.webp`,
    imageAlt: "Mandarin Oil",
    paragraphs: [
      "Mandarin Oil comes from the peel of the mandarin fruit. The plant is commonly known as Citrus reticulata and belongs to the Rutaceae family. The orange-coloured peel is the important part here because it contains tiny pockets filled with natural aromatic oil. The peel is usually processed by cold pressing or another suitable citrus-oil method, depending on the required product.",
      "The oil is often yellow to orange-yellow and has a sweet, fresh, fruity smell. Limonene is usually the largest natural component, while compounds such as γ-terpinene, α-pinene, β-pinene, myrcene, and linalool may also be present. Mandarin oil is interesting because its smell is usually softer and sweeter than many sharper citrus oils. It can have a warm, almost candy-like citrus feeling. The natural profile can change with the mandarin variety, fruit maturity, growing region, season, and processing method.",
      "Mandarin Oil is therefore not simply “orange oil with a different name.” Its own aroma makes it useful in perfumes, food flavors, beverages, soaps, candles, cosmetics, and personal-care products. It also mixes well with floral, spicy, herbal, and woody materials, so a formulator can take it in many directions.",
    ],
    specsTitle: "Mandarin Oil at a Glance",
    layout: "specs-first",
    specs: [
      { label: "Botanical Name", value: "Citrus reticulata" },
      { label: "Family", value: "Rutaceae" },
      { label: "Part Used", value: "Fruit Peel" },
      { label: "Common Method", value: "Cold Pressing" },
      { label: "Color", value: "Yellow to Orange-Yellow" },
      { label: "Smell", value: "Sweet, Fruity, Fresh & Citrus-Like" },
      { label: "Main Component", value: "Limonene" },
      { label: "Other Components", value: "γ-Terpinene, Pinene, Myrcene, Linalool" },
      { label: "Main Areas", value: "Food, Fragrance, Cosmetics & Personal Care" },
    ],
    coa: `${EO}/coa/MANDARIN-OIL-COA.pdf`,
    msds: `${EO}/MSDS/MANDARIN-OIL-MSDS.pdf`,
    formTitle: "Contact us for Wholesale Mandarin Oil Enquiries",
    enquirySource: "Enquiry from Mandarin Oil Page",
    sections: [
      {
        title: "The Peel Tells the Story",
        paragraphs: [
          "Mandarins are small citrus fruits with a thin, easy-to-peel skin. When you remove the peel, the smell comes out almost immediately. That smell is held inside tiny oil glands in the outer skin. These glands are the reason the peel is such an important raw material for mandarin oil.",
          "The fruit itself and its peel have different jobs. Mandarin juice is mainly a food ingredient. Mandarin peel is a source of concentrated aromatic material. This small difference is important when choosing the right raw material for a product.",
        ],
      },
      {
        title: "Mandarin Has Its Own Citrus Personality",
        paragraphs: [
          "Mandarin is often placed beside orange, lemon, lime, and grapefruit, but the smells are not the same. Mandarin is a good choice when a citrus product should feel soft and sweet rather than sharp.",
        ],
      },
      {
        title: "Mandarin Oil in Fragrance | Sweet Citrus at the Start of a Blend",
        paragraphs: [
          "Mandarin has an easy-going smell. It can brighten a fragrance without making it feel too harsh. This makes it interesting for perfume makers and fragrance developers.",
        ],
      },
      {
        title: "Try These Simple Pairings",
        paragraphs: ["The surrounding ingredients can completely change the way mandarin feels."],
        lists: [
          {
            columns: 1,
            items: [
              "Mandarin + Lavender — A soft citrus-floral direction",
              "Mandarin + Ginger — Sweet citrus with a warm spicy note",
              "Mandarin + Cedarwood — Fruity at the top with a dry woody base",
              "Mandarin + Frankincense — A sweet opening followed by a deeper resinous smell",
              "Mandarin + Peppermint — Cool and fresh with a sweet citrus side",
              "Mandarin + Rose — Soft fruit with a floral centre",
            ],
          },
        ],
      },
      {
        title: "Why Is It Popular in Children’s and Family-Oriented Scents?",
        paragraphs: [
          "Mandarin has a naturally sweet and friendly smell. It does not have the very sharp character that some citrus oils have. This makes it interesting for products where a gentle fruity smell is wanted, although every finished product still needs proper safety and formulation checks.",
        ],
      },
      {
        title: "What Makes Mandarin Oil Naturally Special?",
        paragraphs: [
          "Mandarin oil contains many naturally occurring compounds. Limonene is usually the largest one, but it is not alone. These components work together to create the final smell.",
          "The exact amounts are not fixed. The fruit variety, place of cultivation, weather, maturity, harvesting time, and processing can all make a difference. So, two natural mandarin oils may have slightly different colors or smells. That is normal for plant-based materials.",
        ],
        lists: [
          {
            title: "Other Compounds Can Include",
            columns: 2,
            items: ["γ-Terpinene", "α-Pinene", "β-Pinene", "Myrcene", "Linalool", "Other minor aromatic compounds"],
          },
        ],
      },
      {
        title: "From Mandarin Orchard to Finished Oil",
        paragraphs: [
          "The process can be understood in a few easy steps: Mandarin trees → Fruit grows → Fruit is harvested → Peel is separated → Aromatic oil is collected → Oil is prepared and tested → Finished product.",
          "The fruit needs to be handled carefully because the quality of the peel matters. The production method also matters, because different methods can give oils with different natural profiles. This is why a buyer looking for a particular mandarin oil should check the actual product specification rather than relying only on the product name.",
        ],
      },
      {
        title: "Where Mandarin Fits Best",
        paragraphs: [
          "Instead of looking at mandarin as an ingredient for just one industry, it is easier to see it as a fragrance and flavor building block.",
        ],
      },
      {
        title: "Food and Flavor",
        paragraphs: [
          "A suitable food-grade mandarin oil can be explored in products that need a sweet citrus character. The correct grade and permitted use must be confirmed for the intended market.",
        ],
        lists: [
          {
            title: "Possible Areas Include",
            columns: 2,
            items: [
              "Beverages",
              "Confectionery",
              "Desserts",
              "Bakery products",
              "Flavor blends",
              "Sauces",
              "Other suitable food preparations",
            ],
          },
        ],
      },
      {
        title: "Personal Care",
        paragraphs: [
          "Mandarin oil can be explored in soaps, body products, creams, lotions, massage blends, and other suitable cosmetic formulas. Its main attraction in many of these products is its pleasant citrus aroma. The amount used should be decided according to the finished formula and relevant safety guidance.",
        ],
      },
      {
        title: "Home Fragrance",
        paragraphs: [
          "Mandarin also works nicely in candles, diffusers, room sprays, and other scented products. It can make a fragrance feel warm and fruity. Adding a woody oil can make it deeper. Adding another citrus oil can make it brighter.",
        ],
      },
      {
        title: "Mandarin Oil Bulk Supply | Choosing the Right Material",
        paragraphs: [
          "A mandarin oil bulk manufacturer may work with buyers from food, fragrance, cosmetics, soap, personal care, and home-fragrance industries. But one buyer may want something completely different from another.",
          "A food company may care about flavor and food-grade status. A perfume company may care most about the aroma profile. A cosmetic company may focus on color, composition, and skin-safety information. This is why the intended application should come first.",
        ],
      },
      {
        title: "What Can Affect Commercial Quality?",
        paragraphs: [
          "The oil should be judged using its actual specifications and test results, because the following can all make a difference.",
        ],
        lists: [
          {
            columns: 2,
            items: [
              "Fruit variety",
              "Origin",
              "Fruit maturity",
              "Harvest period",
              "Extraction method",
              "Storage",
              "Batch conditions",
            ],
          },
        ],
      },
      {
        title: "Mandarin Oil Bulk Wholesale",
        paragraphs: [
          "Mandarin oil bulk wholesale can be useful for businesses that use the ingredient regularly. For a new product, testing a sample first can help a formulator decide whether the aroma and color fit the planned formula. Once the material has been approved, the business can move to the quantity needed for production.",
        ],
      },
      {
        title: "A Small Safety Point",
        paragraphs: [
          "Citrus oils should not all be treated in exactly the same way. Their safety profile can depend on the specific oil and the method used to produce it. For products intended for skin use, the technical information for the actual batch should be followed. Proper dilution and formulation are important.",
        ],
      },
      {
        title: "International Buying",
        paragraphs: [
          "A mandarin oil bulk exporter may supply buyers in different markets. Requirements for food, cosmetics, fragrances, and other products can vary between countries. The destination and intended application should therefore be clear before an international order is prepared.",
          "At Hetaksh Essential Oils, mandarin oil and mandarin hydrosol can be considered for different food, fragrance, cosmetic, personal-care, and botanical product applications according to the required specification.",
        ],
      },
    ],
    variants: [
      {
        title: "Mandarin Hydrosol | A Soft Citrus Water",
        coa: `${HYD}/COA/MANDARIN HYDROSOL COA.pdf`,
        msds: `${HYD}/MSDS/Mandarin Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Mandarin Hydrosol is a water-based botanical product produced during the distillation of suitable mandarin plant material. Its smell is much lighter than concentrated mandarin oil. It can have a soft citrus, fruity, fresh, and slightly sweet character. A mandarin hydrosol bulk supplier can serve brands looking for a water-based botanical ingredient for sprays and other suitable personal-care products.",
          "Hydrosol is not diluted oil. This point is easy to miss. Mandarin Hydrosol is not simply mandarin essential oil mixed with water. It is collected as part of a distillation process and has its own composition and smell.",
          "The oil is concentrated and oil-soluble. The hydrosol is mainly water-based. Because of this, they belong to different types of formulations, and a finished water-based product still needs suitable preservation, microbial control, pH checking, and stability testing.",
        ],
        lists: [
          {
            title: "Where Mandarin Hydrosol Fits",
            columns: 2,
            items: ["Face mists", "Body sprays", "Hair mists", "Toners", "Lotions", "Soaps", "Room sprays"],
          },
        ],
      },
    ],
    infoTables: [
      {
        title: "How Mandarin Compares with Other Citrus Oils",
        labelHeader: "Citrus Oil",
        valueHeader: "Simple Aroma Description",
        rows: [
          { label: "Mandarin", value: "Sweet, soft and fruity" },
          { label: "Orange", value: "Juicy, sweet and bright" },
          { label: "Lemon", value: "Sharp, clean and zesty" },
          { label: "Lime", value: "Green, fresh and sharp" },
          { label: "Grapefruit", value: "Fresh with a slightly bitter side" },
        ],
      },
      {
        title: "Mandarin Hydrosol Product Ideas",
        labelHeader: "Product",
        valueHeader: "Possible Role",
        rows: [
          { label: "Face Mist", value: "Light citrus botanical water" },
          { label: "Body Mist", value: "Soft fruity aroma" },
          { label: "Hair Mist", value: "Fresh scent" },
          { label: "Toner", value: "Water-based botanical ingredient" },
          { label: "Lotion", value: "Part of the water phase" },
          { label: "Soap", value: "Citrus addition" },
          { label: "Room Spray", value: "Gentle fruity note" },
        ],
      },
      {
        title: "Mandarin Oil vs Mandarin Hydrosol",
        labelHeader: "Point",
        valueHeader: "Mandarin Oil",
        extraHeaders: ["Mandarin Hydrosol"],
        rows: [
          { label: "Form", value: "Concentrated oil", extra: ["Water-based"] },
          { label: "Aroma", value: "Stronger", extra: ["Much softer"] },
          { label: "Main Source", value: "Mandarin peel / citrus material", extra: ["Distillation process"] },
          { label: "Feel", value: "Oil-based", extra: ["Water-like"] },
          { label: "Perfume", value: "Suitable", extra: ["Too light for many perfume uses"] },
          { label: "Face Mist", value: "Usually not the main water ingredient", extra: ["More suitable"] },
          { label: "Hair Mist", value: "Can provide fragrance", extra: ["Can provide a softer botanical note"] },
          { label: "Food Use", value: "Suitable grade may be used", extra: ["Depends on specification and application"] },
        ],
      },
    ],
    seoTitle: "Mandarin Oil Manufacturer & Supplier | Bulk Mandarin Essential Oil",
    seoDescription:
      "Buy bulk Mandarin Oil and Mandarin Hydrosol from Citrus reticulata peel. Sweet citrus oil for fragrance, food, and personal care, with COA, MSDS, and worldwide shipping.",
  },

  "marjoram-oil": {
    slug: "marjoram-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Marjoram Oil",
    heading: "Marjoram Oil | A Warm Herb with a Soft, Green Aroma",
    image: `${EO}/Marjoram-Oil.webp`,
    imageAlt: "Marjoram Oil",
    paragraphs: [
      "Marjoram Oil comes from the marjoram plant, a small herb with green leaves and tiny flowers. A commonly used species is Origanum majorana, which belongs to the Lamiaceae family. The leaves and flowering tops are usually used for oil production. They are collected, prepared, and commonly steam distilled.",
      "The resulting oil may be clear, pale yellow, or yellowish and has a warm, green, herbal, slightly sweet smell. Natural compounds such as terpinen-4-ol, sabinene hydrate, γ-terpinene, α-terpinene, and other aromatic substances may occur in the oil. The exact composition depends on the plant variety, growing conditions, harvest stage, and distillation process.",
      "Marjoram has a softer character than some stronger oregano-type oils, which makes it interesting for fragrance and personal-care formulas. Marjoram Oil can be explored in perfumes, soaps, massage blends, body products, hair products, candles, diffusers, and selected cosmetic formulations. It also pairs well with lavender, rosemary, thyme, lemon, orange, peppermint, and woody oils. A natural oil can show small changes in color and aroma from one batch to another. This is normal for botanical materials and makes the actual product specification important when the oil is being used for commercial formulation.",
    ],
    specsTitle: "A Quick Look at Marjoram Oil",
    specs: [
      { label: "Botanical Name", value: "Origanum majorana" },
      { label: "Family", value: "Lamiaceae" },
      { label: "Plant Part", value: "Leaves & Flowering Tops" },
      { label: "Common Extraction", value: "Steam Distillation" },
      { label: "Color", value: "Clear to Pale Yellow" },
      { label: "Aroma", value: "Warm, Green, Herbal & Slightly Sweet" },
      { label: "Natural Components", value: "Terpinen-4-ol, Sabinene Hydrate, Terpinene & Others" },
      { label: "Main Areas", value: "Fragrance, Cosmetics, Personal Care & Aromatic Products" },
    ],
    coa: `${EO}/coa/MARJORAM-OIL-COA.pdf`,
    msds: `${EO}/MSDS/MARJORAM-OIL-MSDS.pdf`,
    formTitle: "Contact us for Wholesale Marjoram Oil Enquiries",
    enquirySource: "Enquiry from Marjoram Oil Page",
    sections: [
      {
        title: "What Makes Marjoram Different?",
        paragraphs: [
          "Marjoram is sometimes confused with oregano because both belong to the Origanum genus. But they are not the same plant. Marjoram generally has a softer and sweeter herbal character, while oregano oils are often much stronger and sharper.",
          "This difference is important when a formulator is choosing an oil for a fragrance or personal-care product, so the product specification and botanical name should be checked before formulation.",
        ],
      },
      {
        title: "Inside Marjoram Oil | A Simple Look at Its Natural Compounds",
        paragraphs: [
          "Marjoram oil contains a mixture of natural aromatic compounds. It is not made from just one ingredient.",
          "The amount of each one can change. The plant’s growing conditions, variety, harvest stage, and distillation process all play a part. This is why two natural marjoram oils may have slightly different smells.",
        ],
        lists: [
          {
            title: "Some Compounds That May Occur",
            columns: 2,
            items: [
              "Terpinen-4-ol",
              "Sabinene hydrate",
              "γ-Terpinene",
              "α-Terpinene",
              "Sabinene",
              "Other naturally occurring volatile compounds",
            ],
          },
        ],
      },
      {
        title: "The Plant Changes With the Season",
        paragraphs: [
          "Marjoram is a living plant. It responds to sunlight, temperature, water, soil, and other growing conditions. The plant may also have a different chemical profile at different stages of growth. Harvesting at the right stage is therefore important for producing an oil with the desired aroma and composition.",
        ],
      },
      {
        title: "Where Marjoram Finds a Place",
        paragraphs: [
          "A marjoram oil bulk manufacturer may supply the ingredient to several types of businesses, including fragrance houses, soap makers, personal-care brands, and hair-care companies.",
        ],
      },
      {
        title: "Fragrance Makers",
        paragraphs: ["Marjoram can add a soft herbal note to a fragrance. It can be paired with several materials."],
        lists: [
          {
            columns: 1,
            items: [
              "Lavender for a gentle herbal-floral smell",
              "Lemon for a bright green-citrus blend",
              "Rosemary for a stronger herbal direction",
              "Orange for a warmer citrus-herbal combination",
              "Cedarwood for a dry, woody base",
            ],
          },
        ],
      },
      {
        title: "Soap and Personal Care",
        paragraphs: [
          "Marjoram oil can be explored in soaps, body oils, massage blends, creams, lotions, bath products, and other suitable personal-care formulas. Its smell can work well in products built around herbal or natural fragrance themes.",
          "Since essential oils are concentrated materials, the amount used should be selected according to the finished product and relevant safety guidance.",
        ],
      },
      {
        title: "Hair Products",
        paragraphs: [
          "It can also be considered in shampoos, conditioners, hair oils, masks, and other hair-care products where a herbal aroma fits the formula. The oil may be combined with other essential oils to create a more complete fragrance.",
        ],
      },
      {
        title: "Marjoram Oil and Food Applications",
        paragraphs: [
          "Marjoram is also a culinary herb. However, the fact that the fresh herb is used in cooking does not mean every marjoram essential oil is automatically suitable for food. For food applications, the correct food-grade material must be selected.",
          "A suitable product may be considered for flavor work where a warm herbal note is wanted. The exact permitted use and level should always be checked according to the destination market.",
        ],
      },
      {
        title: "Marjoram Oil Bulk Wholesale | Choosing the Right Grade",
        paragraphs: [
          "Marjoram oil bulk wholesale can be useful for businesses that need the ingredient regularly. But the right product should be selected based on the intended use rather than price or name alone.",
          "A fragrance company may focus strongly on the aroma profile. A cosmetic manufacturer may need additional technical and safety information.",
        ],
        lists: [
          {
            title: "A Buyer May Want to Know",
            columns: 2,
            items: [
              "Botanical name",
              "Plant part",
              "Country of origin",
              "Extraction method",
              "Appearance",
              "Aroma",
              "Natural composition",
              "Product grade",
              "Batch information",
              "COA",
              "TDS",
              "MSDS",
            ],
          },
        ],
      },
      {
        title: "International Orders",
        paragraphs: [
          "A marjoram oil bulk exporter may supply buyers in different countries. The documents and requirements can change depending on where the product is going and what the customer plans to make. This is especially important when the same botanical ingredient is being considered for food, cosmetics, fragrance, or personal-care applications.",
          "At Hetaksh Essential Oils, marjoram oil and hydrosol can be considered for different botanical, fragrance, cosmetic, and personal-care applications according to the required specification.",
        ],
      },
    ],
    variants: [
      {
        title: "Marjoram Hydrosol | A Light Herbal Water from the Same Plant",
        coa: `${HYD}/COA/MARJORAM HYDROSOL COA.pdf`,
        msds: `${HYD}/MSDS/Marjoram Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Marjoram Hydrosol is a water-based botanical product obtained during the distillation of marjoram plant material. Its aroma is much softer than the concentrated essential oil. It may have a clean, green, herbal, and slightly sweet smell. It can be useful when a product maker wants a gentle herbal note in a water-based formula. A marjoram hydrosol bulk supplier can work with brands developing water-based personal-care and botanical products.",
          "It is not just “weak marjoram oil”. Marjoram Hydrosol and Marjoram Oil are made through different forms of the same distillation process, but they are separate products. The oil contains the concentrated aromatic fraction. The hydrosol is mainly water and carries a much lighter amount of aromatic material. So, if a product needs a strong marjoram smell, the hydrosol may not give the same result as the essential oil.",
          "As a water-based option, marjoram hydrosol can be explored in sprays, mists, toners, lotions, and other suitable formulas. Because it is water-based, a finished product containing it needs proper attention to preservation and microbial safety. pH and stability should also be checked.",
        ],
        lists: [
          {
            title: "What Could Be Made With It?",
            columns: 2,
            items: ["Face mist", "Body mist", "Hair mist", "Toner", "Lotion", "Soap", "Botanical spray"],
          },
        ],
      },
    ],
    infoTables: [
      {
        title: "What Could Be Made With Marjoram Hydrosol",
        labelHeader: "Product Idea",
        valueHeader: "Possible Place for Marjoram Hydrosol",
        rows: [
          { label: "Face Mist", value: "Light botanical water" },
          { label: "Body Mist", value: "Soft herbal scent" },
          { label: "Hair Mist", value: "Fresh plant note" },
          { label: "Toner", value: "Water-based botanical ingredient" },
          { label: "Lotion", value: "Part of the water phase" },
          { label: "Soap", value: "Herbal addition" },
          { label: "Botanical Spray", value: "Gentle aromatic character" },
        ],
      },
      {
        title: "Marjoram Compared with Oregano",
        labelHeader: "Marjoram",
        valueHeader: "Oregano",
        rows: [
          { label: "Soft herbal smell", value: "Strong herbal smell" },
          { label: "Slightly sweet", value: "More sharp and intense" },
          { label: "Gentle green character", value: "Strong spicy character" },
          { label: "Origanum majorana", value: "Commonly Origanum vulgare" },
        ],
      },
      {
        title: "A Simple Comparison: Oil, Hydrosol and Fresh Herb",
        labelHeader: "Feature",
        valueHeader: "Fresh Marjoram",
        extraHeaders: ["Marjoram Oil", "Marjoram Hydrosol"],
        rows: [
          { label: "Form", value: "Plant", extra: ["Concentrated oil", "Water-based"] },
          { label: "Smell", value: "Natural herb smell", extra: ["Stronger", "Softer"] },
          { label: "Main Use", value: "Culinary herb", extra: ["Fragrance & formulations", "Mists & water-based products"] },
          { label: "Texture", value: "Leaves", extra: ["Oily liquid", "Water-like"] },
          { label: "Aroma Strength", value: "Mild", extra: ["High", "Low"] },
        ],
      },
    ],
    seoTitle: "Marjoram Oil Manufacturer & Wholesaler | Bulk Marjoram Essential Oil",
    seoDescription:
      "Buy bulk Marjoram Oil and Marjoram Hydrosol from Origanum majorana. Warm herbal oil for fragrance and personal care, with COA, MSDS, and worldwide shipping.",
  },

  "mentha-oil": {
    slug: "mentha-oil",
    category: "special-ingredients",
    categoryName: "Special Ingredients",
    name: "Mentha Oil",
    heading: "Mentha Oil Range | Five Mint Oils, Five Different Profiles",
    image: `${PG}/Mentha-Oil-IP.webp`,
    imageAlt: "Mentha Oil IP",
    paragraphs: [
      "Mint oils can look similar on paper, but they can be quite different when you smell them or use them in a formula. The plant species, grade, natural compounds, and aroma all matter. The Mentha Oil IP range includes several products, such as Mentha Oil IP, Mentha Arvensis Oil, Mentha Citrata Oil, Mentha Piperita Oil, and Mentha Spicata Oil.",
      "Instead of treating them as one general mint product, it is better to understand what makes each one different. This helps a buyer choose the right material for a particular product.",
      "Mentha Oil IP is mentha oil that meets the requirements of the Indian Pharmacopoeia (IP). The letters “IP” are important because they describe the standard of the product, not simply the name of the mint plant. The oil is commonly clear to pale yellow and has a strong, clean, minty aroma.",
    ],
    specsTitle: "Mentha Oil IP at a Glance",
    specs: [
      { label: "Product", value: "Mentha Oil IP" },
      { label: "Standard", value: "Indian Pharmacopoeia (IP)" },
      { label: "Extraction", value: "Steam Distillation" },
      { label: "Appearance", value: "Clear to Pale Yellow" },
      { label: "Aroma", value: "Strong, Clean & Minty" },
      { label: "Key Compound", value: "Menthol" },
      { label: "Other Compounds", value: "Menthone and other mint volatiles" },
    ],
    coa: `${PG}/COA/MENTHA OIL IP COA.pdf`,
    msds: `${PG}/MSDS/MENTHA OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Mentha Oil Enquiries",
    enquirySource: "Enquiry from Mentha Oil Page",
    sections: [
      {
        title: "Mentha Oil IP",
        paragraphs: [
          "Mentha oil is generally obtained from the green parts of mint plants by steam distillation. The plant material is exposed to steam, which carries the aromatic oil out of the leaves. After cooling, the oil is separated from the water.",
          "Menthol is an important part of many mentha oils. It gives the familiar cool and fresh feeling linked with mint. Menthone and other natural compounds may also be present.",
          "For buyers looking specifically for an IP-grade product, the current applicable pharmacopoeial requirements should be checked against the actual batch specification. A mentha oil IP manufacturer can therefore be evaluated not only by the product name but also by the applicable grade and quality requirements.",
        ],
      },
      {
        title: "Why This Difference Matters",
        paragraphs: [
          "It can be tempting to replace one mint oil with another because all of them have a minty smell. But the result can change a lot. Changing peppermint to spearmint can make a fragrance sweeter. Changing spearmint to Mentha arvensis can make it much stronger and cooler. Changing Mentha arvensis to Mentha citrata can move the fragrance towards a softer floral-citrus direction.",
          "So the botanical name is not just a technical detail. It helps a formulator choose the right smell and natural composition.",
        ],
      },
      {
        title: "A Simple Selection Guide",
        paragraphs: [
          "For businesses searching for a mentha oil bulk wholesaler, knowing the exact mint type before purchasing can help prevent confusion between products with very different aromas.",
          "At Hetaksh Essential Oils, the different mentha oils can also be looked at as separate botanical products rather than one general mint category. This makes it easier to compare their plant sources, natural profiles, grades, and individual characteristics.",
        ],
        lists: [
          {
            columns: 1,
            items: [
              "Need an IP-standard mentha oil? → Mentha Oil IP",
              "Need a menthol-rich mint oil? → Mentha Arvensis Oil",
              "Want a softer, slightly citrusy mint character? → Mentha Citrata Oil",
              "Want classic peppermint? → Mentha Piperita Oil",
              "Want sweet spearmint? → Mentha Spicata Oil",
            ],
          },
        ],
      },
    ],
    variants: [
      {
        title: "Mentha Arvensis Oil | Field Mint / Corn Mint",
        coa: `${PP}/Peppermint-Oil/MENTHA-ARVENSIS-OIL-COA.pdf`,
        msds: `${SI}/MSDS/MENTHA ARVENSIS OIL MSDS.pdf`,
        paragraphs: [
          "Mentha arvensis oil comes from Mentha arvensis, commonly known as field mint or corn mint. This plant is an important source of menthol-rich mint oil. Its aroma is usually strong, cool, and fresh. Menthol is one of its key natural components.",
          "The plant is commonly steam distilled to obtain the oil. The final composition can change depending on the variety, growing conditions, harvest time, and processing method.",
          "One useful point to remember is that Mentha arvensis is the plant source, while Mentha Oil IP is the product grade or standard. They can be connected, but the two names do not mean exactly the same thing. A buyer looking for mentha arvensis oil bulk supplier options should therefore check both the botanical source and the required product specification.",
        ],
      },
      {
        title: "Mentha Citrata Oil | Bergamot Mint",
        coa: `${SI}/coa/MENTHA CITRATA OIL COA.pdf`,
        msds: `${SI}/MSDS/MENTHA CITRATA OIL MSDS.pdf`,
        paragraphs: [
          "Mentha citrata oil comes from Mentha citrata, a type of mint that is also known as bergamot mint in some contexts. It is quite different from the very strong menthol smell people usually connect with mint.",
          "Its aroma can be softer, sweeter, herbal, and slightly citrus-like. Linalool and linalyl acetate may be important parts of its natural composition, depending on the plant material and oil grade.",
          "This makes Mentha citrata interesting for fragrance makers who want a mint-family oil with a less sharp character. Instead of giving only a cold, strong mint smell, it can bring a softer botanical side to a fragrance.",
        ],
      },
      {
        title: "Mentha Piperita Oil | Classic Peppermint",
        coa: `${PP}/Peppermint-Oil/MENTHA-PIPERITA-OIL-COA.pdf`,
        msds: `${SI}/MSDS/MENTHA PIPERITA OIL MSDS.pdf`,
        paragraphs: [
          "Mentha piperita oil is peppermint oil. It comes from Mentha × piperita, a hybrid mint plant. If you think about the classic smell of peppermint candy, toothpaste, or a strong mint fragrance, this is the type of mint that often comes to mind.",
          "Menthol and menthone are important natural components of peppermint oil. Together with other compounds, they give the oil its strong, cool, refreshing aroma. Its sharp character makes it very different from the softer smell of Mentha citrata.",
          "So, if a product needs a softer botanical smell, Mentha citrata may be considered. If the aim is a familiar, strong peppermint character, Mentha piperita is the more natural choice. A mentha piperita oil bulk distributor may therefore handle a product quite different from one based on Mentha citrata, even though both belong to the same mint family.",
        ],
      },
      {
        title: "Mentha Spicata Oil | The Sweeter Side of Mint",
        coa: `${EO}/coa/SPEARMINT-OIL-COA.pdf`,
        msds: `${EO}/MSDS/SPEARMINT-OIL-MSDS.pdf`,
        paragraphs: [
          "Mentha spicata oil comes from Mentha spicata, commonly called spearmint. Spearmint has a sweet, green, fresh smell. It is minty, but it does not have the same strong cold feeling that peppermint usually gives.",
          "One of the important natural compounds associated with spearmint is carvone. It plays a major role in the familiar sweet-spearmint aroma. This gives Mentha spicata its own identity within the mentha family.",
        ],
      },
    ],
    infoTables: [
      {
        title: "Quick Difference | Mentha Oil IP and Mentha Arvensis Oil",
        labelHeader: "Product",
        valueHeader: "What the Name Tells You",
        extraHeaders: ["Character"],
        rows: [
          { label: "Mentha Oil IP", value: "Required pharmacopoeial standard", extra: ["Strong, fresh, minty"] },
          { label: "Mentha Arvensis Oil", value: "Plant species", extra: ["Cool, menthol-rich, minty"] },
        ],
      },
      {
        title: "Two Different Mint Personalities",
        labelHeader: "Product",
        valueHeader: "Plant",
        extraHeaders: ["Aroma Direction"],
        rows: [
          { label: "Mentha Citrata Oil", value: "Mentha citrata", extra: ["Soft, sweet, herbal, slightly citrusy"] },
          { label: "Mentha Piperita Oil", value: "Mentha × piperita", extra: ["Strong, cool, sharp, peppermint-like"] },
        ],
      },
      {
        title: "Mentha Spicata vs Other Products",
        labelHeader: "Oil",
        valueHeader: "Easy Way to Remember It",
        rows: [
          { label: "Mentha Oil IP", value: "Mentha oil meeting an IP standard" },
          { label: "Mentha Arvensis", value: "Strong menthol-rich mint" },
          { label: "Mentha Citrata", value: "Softer, sweet and slightly citrus-like" },
          { label: "Mentha Piperita", value: "Classic strong peppermint" },
          { label: "Mentha Spicata", value: "Sweet, green spearmint" },
        ],
      },
    ],
    seoTitle: "Mentha Oil IP Manufacturer | Mentha Arvensis, Piperita, Spicata & Citrata",
    seoDescription:
      "Buy bulk Mentha Oil IP, Mentha Arvensis, Mentha Citrata, Mentha Piperita, and Mentha Spicata oils. Pharmacopoeial and botanical mint grades with COA, MSDS, and worldwide shipping.",
  },

  "moringa-oil": {
    slug: "moringa-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Moringa Oil",
    heading: "Moringa Oil | A Light Plant Oil from Moringa Seeds",
    image: `${CO}/Moringa-Oil.webp`,
    imageAlt: "Moringa Oil",
    paragraphs: [
      "Moringa Oil is sourced from the seeds of the moringa tree. The tree is commonly known as Moringa oleifera and belongs to the Moringaceae family. It is a hardy tree that grows well in warm areas and is known for its green leaves, long seed pods, and small round seeds. The seeds are cleaned and pressed to collect the oil. Cold pressing can be used when a minimally processed seed oil is wanted, while other suitable methods may be used for different grades.",
      "The oil is generally pale yellow to yellow and has a mild, nutty, or slightly earthy smell. Oleic acid is usually the main fatty acid in moringa seed oil. It can also contain behenic acid, palmitic acid, stearic acid, and other natural fatty acids. The exact amount can change with the seed variety, growing conditions, age of the seeds, and processing method.",
      "Moringa Oil is valued for its smooth feel and good stability compared with some other plant oils. It can be explored in face oils, body oils, creams, lotions, soaps, hair products, massage blends, and other cosmetic formulas. Its mild smell also makes it easy to combine with other carrier oils and essential oils.",
    ],
    specsTitle: "Moringa Oil at a Glance",
    specs: [
      { label: "Botanical Name", value: "Moringa oleifera" },
      { label: "Family", value: "Moringaceae" },
      { label: "Part Used", value: "Seeds" },
      { label: "Common Method", value: "Cold Pressing" },
      { label: "Color", value: "Pale Yellow to Yellow" },
      { label: "Aroma", value: "Mild, Nutty & Slightly Earthy" },
      { label: "Main Fatty Acid", value: "Oleic Acid" },
      { label: "Other Fatty Acids", value: "Behenic, Palmitic & Stearic Acid" },
      { label: "Main Areas", value: "Cosmetics, Skin Care, Hair Care & Personal Care" },
    ],
    coa: `${CO}/coa/MORINGA OIL COA.pdf`,
    msds: `${CO}/MSDS/MORINGA OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Moringa Oil Enquiries",
    enquirySource: "Enquiry from Moringa Oil Page",
    sections: [
      {
        title: "The Seed Inside the Moringa Pod",
        paragraphs: [
          "Moringa seeds are small and round, and they sit inside long seed pods that grow on the tree. Once the seeds are mature, they can be collected and cleaned before oil production.",
          "A moringa seed oil bulk supplier works with the seed rather than the leaves or flowers. This is an important detail because moringa has several parts, and each part has its own use.",
          "The oil comes from the fatty material stored inside the seed. When the seeds are pressed, this oil is released and then filtered or processed according to the required product.",
        ],
      },
      {
        title: "Why the Seed Matters",
        paragraphs: [
          "The seed gives moringa oil a different character from many common carrier oils. Its fatty acid profile is one of its main points of interest. Oleic acid is usually present in a high amount, while behenic acid is another notable part of the oil.",
          "The oil is also known for having a relatively stable character, which can be useful when creating products that need a plant-based oil with good staying quality. A moringa oil bulk manufacturer may therefore supply different grades depending on the processing method and the needs of the final product.",
        ],
      },
      {
        title: "A Simple Look at the Natural Fatty Acids",
        paragraphs: [
          "Moringa seed oil is a mixture of naturally occurring fatty acids. The exact numbers should always come from the specification of the actual batch.",
        ],
      },
      {
        title: "Moringa Oil for Skin, Hair and Everyday Beauty Formulas",
        paragraphs: [
          "Moringa oil has a smooth, soft feel, which is one reason it is interesting for cosmetic formulators. It can be used on its own as a carrier oil or mixed with other plant oils.",
          "For a face-oil formula, it can be mixed with jojoba or rosehip oil. For a hair product, it can be combined with coconut, argan, or other suitable oils. The final texture depends on the whole blend, not just one ingredient.",
        ],
        lists: [
          {
            title: "A Moringa Oil Bulk Distributor May Supply the Oil For",
            columns: 2,
            items: [
              "Face oils",
              "Body oils",
              "Hair oils",
              "Creams",
              "Lotions",
              "Balms",
              "Massage oils",
              "Soaps",
              "Cosmetic blends",
            ],
          },
        ],
      },
      {
        title: "A Small Formulation Example",
        paragraphs: [
          "Imagine a simple body oil. Moringa oil can form one part of the base. Another carrier oil can make the blend lighter or richer. A small amount of a suitable essential oil can then give the product its fragrance. The exact amounts should be decided through proper formulation and testing.",
        ],
      },
      {
        title: "Why Brands May Like Its Mild Smell",
        paragraphs: [
          "Some carrier oils have a strong natural smell. Moringa oil can have a much milder nutty or earthy character. This can make it easier to use when the finished product needs another fragrance to stand out.",
          "For example, a formulator may want the scent of lavender, rose, orange, or frankincense to remain noticeable instead of being covered by a strong carrier-oil smell.",
        ],
      },
      {
        title: "Moringa Oil in Hair Care",
        paragraphs: [
          "Moringa oil can also be explored in hair oils, masks, conditioners, scalp products, and other hair-care formulas. It can be used as part of a blend rather than being the only oil. The amount used depends on the desired feel. A light hair serum and a rich hair mask will not necessarily need the same oil blend.",
        ],
      },
      {
        title: "Moringa Oil and Other Carrier Oils",
        paragraphs: [
          "Not every plant oil feels the same. Moringa can be compared with some familiar carrier oils to understand its place. This does not mean one oil is better than another.",
          "It simply means that a formulator may choose a different oil depending on the texture, smell, stability, and purpose of the finished product. For businesses looking for moringa oil bulk wholesale, the required grade and intended application should be clear before choosing the material.",
        ],
      },
      {
        title: "From Tree to Bottle",
        paragraphs: [
          "The journey of moringa oil begins with the tree: Moringa tree → Seed pods → Mature seeds → Cleaning → Oil extraction → Filtration/processing → Testing → Packaging.",
          "The quality of the seeds matters from the very beginning. Old, damaged, poorly stored, or unsuitable seeds may not give the same result as clean and properly handled seeds. Processing also matters, because different extraction methods can affect color, aroma, and the natural composition of the finished oil.",
        ],
      },
      {
        title: "Moringa Oil for Different Industries",
        paragraphs: [
          "Moringa seed oil can fit into several areas, from cosmetics and hair care to soap making, personal care, and natural beauty products.",
          "A moringa oil bulk exporter may work with buyers in different markets, where product requirements can vary according to the intended use.",
        ],
      },
    ],
    variants: [],
    infoTables: [
      {
        title: "Natural Fatty Acids in Moringa Seed Oil",
        labelHeader: "Fatty Acid",
        valueHeader: "Simple Note",
        rows: [
          { label: "Oleic Acid", value: "Usually the main fatty acid" },
          { label: "Behenic Acid", value: "A notable part of moringa seed oil" },
          { label: "Palmitic Acid", value: "Naturally present" },
          { label: "Stearic Acid", value: "Naturally present" },
          { label: "Other Fatty Acids", value: "Present in smaller amounts" },
        ],
      },
      {
        title: "Moringa Oil Compared with Other Carrier Oils",
        labelHeader: "Oil",
        valueHeader: "General Character",
        rows: [
          { label: "Moringa Oil", value: "Smooth, mild and slightly nutty" },
          { label: "Jojoba Oil", value: "Light and wax-like" },
          { label: "Coconut Oil", value: "Rich and familiar coconut feel" },
          { label: "Argan Oil", value: "Light with a mild nutty character" },
          { label: "Almond Oil", value: "Smooth and soft" },
        ],
      },
      {
        title: "Moringa Oil Across Different Industries",
        labelHeader: "Industry",
        valueHeader: "Possible Products",
        rows: [
          { label: "Cosmetics", value: "Face oils, creams, lotions and body products" },
          { label: "Hair Care", value: "Hair oils, masks and conditioners" },
          { label: "Soap Making", value: "As part of a plant-oil blend" },
          { label: "Personal Care", value: "Body oils and massage products" },
          { label: "Natural Beauty", value: "Botanical oil blends and simple carrier-oil products" },
        ],
      },
    ],
    seoTitle: "Moringa Oil Manufacturer & Supplier | Bulk Moringa Seed Oil",
    seoDescription:
      "Buy bulk Moringa Oil from Moringa oleifera seeds. Light carrier oil for cosmetics, skin care, and hair care, with COA, MSDS, and worldwide shipping.",
  },
};

export const FAQS: Record<string, FaqItem[]> = {
  "mandarin-oil": [
    {
      question: "What part of the mandarin fruit is used for Mandarin Oil?",
      answer:
        "The outer peel is the important part because it contains the tiny oil glands that hold the fruit’s natural aroma.",
    },
    {
      question: "What does Mandarin Hydrosol smell like?",
      answer:
        "It usually has a much lighter version of the mandarin smell, with soft fruity, fresh, and sweet citrus notes.",
    },
    {
      question: "Is Mandarin Oil sweeter than Lemon Oil?",
      answer:
        "Mandarin oil is generally softer and sweeter-smelling, while lemon oil usually has a sharper and more zesty character.",
    },
    {
      question: "Can Mandarin Oil be purchased in bulk wholesale?",
      answer:
        "Yes. Commercial quantities can be considered for food, flavor, fragrance, cosmetic, soap, personal-care, and home-fragrance businesses.",
    },
    {
      question: "Can Mandarin Hydrosol be used in a facial mist?",
      answer:
        "It can be explored in suitable water-based facial mists, provided the finished formula has appropriate preservation, stability, and quality testing.",
    },
  ],
  "marjoram-oil": [
    {
      question: "What plant is used to make Marjoram Oil?",
      answer:
        "A commonly used source is Origanum majorana, also known as sweet marjoram. The leaves and flowering tops are commonly used for distillation.",
    },
    {
      question: "Is Marjoram Oil the same as Oregano Oil?",
      answer:
        "No. They are different plants. Marjoram generally has a softer, sweeter herbal character, while oregano oil is usually stronger and sharper.",
    },
    {
      question: "What is Marjoram Hydrosol used for?",
      answer:
        "It can be explored in suitable face mists, body sprays, hair mists, toners, lotions, soaps, and other water-based botanical products.",
    },
    {
      question: "Can Marjoram Oil be purchased through bulk wholesale?",
      answer:
        "Yes. Commercial quantities can be considered for fragrance houses, cosmetic manufacturers, soap makers, personal-care brands, and other suitable businesses.",
    },
    {
      question: "Can Marjoram Hydrosol be used instead of Marjoram Oil?",
      answer:
        "Not as a direct replacement. The oil is concentrated and oil-based, while the hydrosol is mainly water-based and has a much lighter aromatic character.",
    },
  ],
  "mentha-oil": [
    {
      question: "Are all Mentha oils the same?",
      answer:
        "No. Different mint species produce oils with different smells, natural compounds, and characteristics. Mentha oil bulk supplier searches should therefore specify the exact product required.",
    },
    {
      question: "What is the difference between Mentha Oil IP and Mentha Arvensis Oil?",
      answer:
        "Mentha Oil IP refers to an oil meeting the applicable Indian Pharmacopoeia requirements. Mentha Arvensis Oil refers to oil obtained from Mentha arvensis. One describes a standard, while the other identifies the plant source.",
    },
    {
      question: "Which Mentha oil has a classic peppermint smell?",
      answer:
        "Mentha Piperita Oil is the peppermint oil and has the familiar strong, cool, minty aroma. A Mentha Piperita oil bulk manufacturer can supply this specific peppermint-type material rather than another mentha variety.",
    },
    {
      question: "What makes Mentha Spicata Oil different?",
      answer:
        "Mentha Spicata, or spearmint, has a sweeter and softer mint aroma. Carvone is an important compound linked with its characteristic smell.",
    },
    {
      question: "How can a buyer choose between the different Mentha oils?",
      answer:
        "Start with the required plant species or grade, then compare the aroma, natural composition, specifications, and intended application. For international requirements, a mentha oil bulk exporter can also be selected according to the exact product and destination-market needs.",
    },
  ],
  "moringa-oil": [
    {
      question: "What is Moringa Oil made from?",
      answer:
        "Moringa Oil is made from the seeds of Moringa oleifera. The seeds are cleaned and processed to obtain the natural oil.",
    },
    {
      question: "What is the main fatty acid in Moringa Seed Oil?",
      answer:
        "Oleic acid is generally the main fatty acid. Behenic, palmitic, stearic, and other fatty acids may also be present.",
    },
    {
      question: "Can Moringa Oil be used in hair products?",
      answer: "Yes. It can be explored in hair oils, masks, conditioners, serums, and other suitable hair-care formulas.",
    },
    {
      question: "Is Moringa Oil available in bulk?",
      answer:
        "Yes. Commercial quantities can be considered for cosmetic manufacturers, skincare brands, hair-care companies, soap makers, and other businesses. A moringa oil bulk supplier can provide the product according to the required specification.",
    },
    {
      question: "What should I check when buying Moringa Oil?",
      answer:
        "Check the botanical name, seed source, extraction method, appearance, aroma, fatty acid profile, grade, and batch specifications. The right information depends on how the oil will be used.",
    },
  ],
};
