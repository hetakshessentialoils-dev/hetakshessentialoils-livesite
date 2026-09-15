import type { CleanProductPage, FaqItem } from "@/lib/types";

const HYDROSOL = "/assets/images/products/Hydrosol";
const SPICE = "/assets/images/products/spice-oil";
const EO = "/assets/images/products/Essential-Oils";
const CO = "/assets/images/products/Carrier-Oils";

export const NEW_PAGES_BATCH3: Record<string, CleanProductPage> = {
  "fenugreek-oil": {
    slug: "fenugreek-oil",
    category: "spice-oils",
    categoryName: "Spice Oils",
    name: "Fenugreek Oil",
    heading: "Fenugreek Oil | Natural Methi Seed Oil for Hair, Skin & Personal Care",
    image: `${SPICE}/FENUGREEK OIL.webp`,
    imageAlt: "Fenugreek Oil",
    paragraphs: [
      "Fenugreek Oil comes from the seeds of the fenugreek plant, which is commonly called methi in India. Its botanical name is Trigonella foenum-graecum, and it belongs to the Fabaceae family. Fenugreek is a small green plant with tiny yellow flowers and small yellow-brown seeds. These seeds are the main part used for making fenugreek-based oil.",
      "The exact extraction method depends on the type of product. A fixed fenugreek seed oil may be obtained through oil extraction, while fenugreek essential oil is generally produced by steam distillation. This difference is important for buyers because the two products do not have the same composition or texture. Fenugreek Oil can have a yellow to golden color and a warm, earthy, sweet, and slightly spicy smell. Its natural compounds may include sotolone and other plant compounds. Fenugreek seed oil can contain fatty acids and other naturally occurring substances.",
      "It is widely used in hair oils, scalp products, skin creams, lotions, massage oils, soaps, and personal care formulas. It can also be mixed with coconut, almond, jojoba, olive, or other carrier oils. At Hetaksh Essential Oils, we supply fenugreek-based oil products in bulk for businesses developing cosmetic, hair-care, and personal care products.",
      "The final composition can change depending on the seed quality, growing region, harvesting time, storage, and extraction method. For this reason, buyers should check the product specification and batch information before using the material in a finished formula. Fenugreek Oil is especially popular among hair-care manufacturers. It can be added to hair oils, scalp blends, masks, conditioners, and other products. It can also be used in skin-care formulas where a plant-based oil is needed.",
    ],
    specsTitle: "Fenugreek Oil Details",
    layout: "specs-first",
    specs: [
      { label: "Botanical Name", value: "Trigonella foenum-graecum" },
      { label: "Family", value: "Fabaceae" },
      { label: "Common Name", value: "Fenugreek / Methi" },
      { label: "Part Used", value: "Seeds" },
      { label: "Color", value: "Yellow to Golden" },
      { label: "Aroma", value: "Warm, Earthy, Sweet & Spicy" },
      { label: "Main Aroma Compound", value: "Sotolone" },
      { label: "Common Uses", value: "Hair Care, Skincare, Cosmetics & Personal Care" },
    ],
    lists: [
      {
        title: "Where Fenugreek Oil Is Used",
        columns: 2,
        items: [
          "Hair oils",
          "Scalp products",
          "Hair masks and conditioners",
          "Hair serums",
          "Skin creams and lotions",
          "Massage oils",
          "Soaps",
          "Personal care formulas",
        ],
      },
    ],
    coa: `${SPICE}/COA/FENUGREEK OIL COA.pdf`,
    msds: `${SPICE}/MSDS/FENUGREEK OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Fenugreek Oil Enquiries",
    enquirySource: "Enquiry from Fenugreek Oil Page",
    sections: [
      {
        title: "Fenugreek Oil Bulk Supply | Product Uses, Packaging & Buyer Support",
        paragraphs: [
          "Fenugreek-based ingredients are used by businesses that want plant-derived materials for their product lines. The seed is the main part of the fenugreek plant used for oil production, but the final product can look and behave differently depending on how it is made. This is why it is useful to clearly mention the product type when placing a commercial order.",
          "It can be blended with other oils to change the texture and feel of the finished product. Coconut oil can give a richer base, jojoba oil can create a lighter blend, and almond or olive oil can be used for different product styles. It can also be used in selected skin-care products such as creams, body oils, lotions, massage blends, and soaps.",
          "The name “fenugreek oil” can sometimes refer to different types of products. Fixed seed oil and essential oil are not the same material. They can have different extraction methods, appearances, smells, compositions, and uses. Commercial buyers should ask for the botanical name, plant part, extraction method, specifications, and COA before placing a bulk order.",
        ],
        lists: [
          {
            title: "Fenugreek Oil in Hair Care",
            columns: 2,
            items: ["Hair oils", "Scalp oils", "Hair masks", "Conditioners", "Hair serums", "Botanical hair blends"],
          },
          {
            title: "Industries That Can Use It",
            columns: 2,
            items: [
              "Hair Care — hair oils, masks and scalp products",
              "Skincare — creams, lotions and body oils",
              "Cosmetics — botanical beauty products",
              "Personal Care — soaps and massage products",
              "Wellness — plant-based oil blends",
            ],
          },
          {
            title: "Bulk Order Support",
            columns: 2,
            items: [
              "COA",
              "MSDS",
              "TDS",
              "Product specification",
              "Batch information",
              "Quality documents",
              "Export documents where required",
              "Sample support",
            ],
          },
        ],
      },
      {
        title: "Packaging & Storage",
        paragraphs: [
          "We supply fenugreek oil products in commercial quantities for manufacturers, cosmetic companies, hair-care brands, wholesalers, distributors, and product developers. Samples can be requested before placing a larger order.",
          "Packaging can be selected according to the order size and destination. Fenugreek Oil should be kept in a cool and dry place and protected from direct sunlight and excessive heat. The container should remain properly closed when not in use. Fenugreek Hydrosol needs careful storage because it is water-based.",
        ],
      },
    ],
    variants: [
      {
        title: "Fenugreek Hydrosol | Mild Botanical Water for Hair, Skin & Mists",
        coa: `${HYDROSOL}/COA/FENUGREEK HYDROSOL COA.pdf`,
        msds: `${HYDROSOL}/MSDS/Fenugreek Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Fenugreek Hydrosol is a water-based botanical product collected during the distillation of fenugreek plant material. It has a softer smell than concentrated oil. Its aroma can be warm, herbal, earthy, and slightly sweet. This botanical water can be used in hair mists, scalp sprays, facial sprays, body mists, lotions, creams, soaps, and other personal care products.",
          "The color, smell, pH, and shelf life may change depending on the plant material, distillation process, filtration, packaging, and storage. Because this is a water-based material, clean handling is important. The container should be kept closed when not in use and stored in a cool, dry place, protected from direct sunlight and excessive heat.",
          "A hair-care company can use it in a scalp mist or hair spray. A skincare company may use it in a botanical facial mist or lotion. The final formula should always be tested before commercial production.",
        ],
        lists: [
          {
            title: "Where Fenugreek Hydrosol Can Be Used",
            columns: 2,
            items: [
              "Hair mists",
              "Scalp sprays",
              "Facial sprays",
              "Body mists",
              "Botanical toners",
              "Lotions",
              "Creams",
              "Soaps",
              "Personal care products",
            ],
          },
        ],
      },
    ],
    seoTitle: "Fenugreek Oil | Natural Methi Seed Oil for Hair, Skin & Personal Care",
    seoDescription:
      "Buy bulk Fenugreek Oil and Fenugreek Hydrosol from a manufacturer and exporter. Methi seed oil for hair care, skincare, and cosmetics, with COA, MSDS, and worldwide shipping.",
  },

  "flaxseed-oil": {
    slug: "flaxseed-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Flaxseed Oil",
    heading: "Flaxseed Oil | Natural Seed Oil for Food, Beauty and Hair Care",
    image: `${CO}/Flaxseed-Oil.webp`,
    imageAlt: "Flaxseed Oil",
    paragraphs: [
      "Flaxseed Oil comes from the small seeds of the flax plant. The botanical name of the plant is Linum usitatissimum, and it belongs to the Linaceae family. Flax is a simple-looking plant with thin stems and small blue flowers. Its seeds are tiny, flat, and usually brown or golden. These seeds are cleaned and pressed to obtain the oil. Cold pressing is commonly used when a natural seed oil is wanted. In this process, the seeds are pressed to release their oil without chemical solvent extraction.",
      "The finished oil is usually pale yellow to golden yellow and has a mild seed-like smell. One of its best-known natural components is alpha-linolenic acid, also called ALA. Additional components include linoleic acid, oleic acid, palmitic acid, and stearic acid. Natural vitamin E and other plant compounds may also be present. The exact composition can change with the flax variety, growing conditions, seed quality, and processing method. Flaxseed Oil is used in food products, cosmetic formulas, hair oils, massage blends, soaps, creams, lotions, and other personal-care products.",
    ],
    specsTitle: "Product at a Glance",
    layout: "specs-first",
    specs: [
      { label: "Botanical Name", value: "Linum usitatissimum" },
      { label: "Plant Family", value: "Linaceae" },
      { label: "Part Used", value: "Flax Seeds" },
      { label: "Extraction", value: "Cold Pressing" },
      { label: "Color", value: "Pale Yellow to Golden Yellow" },
      { label: "Aroma", value: "Mild, Natural, Seed-Like" },
      { label: "Main Fatty Acid", value: "Alpha-Linolenic Acid (ALA)" },
      { label: "Other Fatty Acids", value: "Linoleic, Oleic, Palmitic & Stearic" },
      { label: "Main Areas", value: "Food, Cosmetics, Skin & Hair Care" },
    ],
    lists: [
      {
        title: "Where Flaxseed Oil Is Used",
        columns: 2,
        items: [
          "Food products and dressings",
          "Cosmetic formulas",
          "Hair oils and masks",
          "Massage blends",
          "Soaps",
          "Creams and lotions",
          "Face oils and body oils",
          "Personal-care products",
        ],
      },
    ],
    coa: `${CO}/coa/FLAXSEED-OIL-COA.pdf`,
    msds: `${CO}/MSDS/FLAXSEED OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Flaxseed Oil Enquiries",
    enquirySource: "Enquiry from Flaxseed Oil Page",
    sections: [
      {
        title: "A Small Seed with a Rich Oil",
        paragraphs: [
          "The flax seed may look very ordinary, but it holds a useful amount of natural oil. Once the seeds are cleaned and pressed, the oil is separated from the solid seed material. Cold pressing is a simple mechanical method. This method is different from using chemical solvents to remove oil. For buyers looking for a mechanically pressed seed oil, the extraction method is therefore an important part of the product description.",
        ],
      },
      {
        title: "What Gives It Its Natural Character?",
        paragraphs: [
          "The fatty acid profile is one of the main features of flaxseed oil. ALA is present in a notable amount, along with other fatty acids. Natural vitamin E and other plant compounds may also occur in the oil. However, the exact amounts are not fixed. Seeds grown in different places or harvested under different conditions can give slightly different results. This is normal for plant-based oils and is one reason batch testing is useful for commercial products.",
        ],
      },
      {
        title: "Flaxseed Oil Uses | Food, Skin and Hair Applications",
        paragraphs: [
          "A flaxseed oil bulk supplier can serve companies from very different industries because this seed oil has more than one possible use.",
          "<b>Food applications:</b> Flaxseed oil can be used in suitable food preparations where its natural fatty acid profile is wanted. Its mild flavor allows it to fit recipes where a strong taste is not the main focus. The appropriate food grade and usage conditions should always be confirmed for the intended market.",
          "<b>Skin care:</b> For cosmetic makers, flaxseed oil can become part of the oil phase of a product. Face oils, body oils, creams, lotions, and massage blends can all include it. A formulator can change the final feel by combining flaxseed oil with lighter or richer oils.",
          "<b>Hair care:</b> Flaxseed oil can also be used in hair oils, masks, conditioners, or other suitable preparations. For a lighter blend, it could be combined with jojoba oil. For a richer product, a formulator may add coconut or avocado oil.",
        ],
        lists: [
          {
            title: "Food applications",
            columns: 2,
            items: [
              "Salad dressings",
              "Food blends",
              "Sauces",
              "Cold preparations",
              "Nutritional products",
              "Other suitable food formulations",
            ],
          },
        ],
      },
      {
        title: "Flaxseed Oil Bulk Manufacturer | From Seed Processing to Global Supply",
        paragraphs: [
          "A flaxseed oil bulk manufacturer works with the oil at a much larger scale than a retail product maker. The journey is quite simple: flax plant → seeds → cleaning → pressing → filtration/processing → quality testing → packaging.",
          "Alpha-linolenic acid, or ALA, is an omega-3 fatty acid naturally found in flaxseed oil. This is one of the features that makes flaxseed oil different from many other common plant oils.",
          "Flaxseed oil bulk wholesale purchasing can be useful for businesses that need a regular supply instead of small bottles. A company developing a new product can begin with a sample. International buyers should share the destination and intended application so the correct documents can be prepared. Flaxseed oil should be protected from strong light, heat, and unnecessary exposure to air.",
        ],
        lists: [
          {
            title: "Where the product fits",
            columns: 2,
            items: [
              "Food production",
              "Cosmetic manufacturing",
              "Hair-care products",
              "Skincare brands",
              "Soap production",
              "Personal-care products",
              "Product development",
            ],
          },
        ],
      },
    ],
    variants: [],
    seoTitle: "Flaxseed Oil | Natural Seed Oil for Food, Beauty and Hair Care",
    seoDescription:
      "Buy bulk cold-pressed Flaxseed Oil from a manufacturer and exporter. ALA-rich carrier oil for food, cosmetics, and hair care, with COA, MSDS, and worldwide shipping.",
  },

  "frankincense-oil": {
    slug: "frankincense-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Frankincense Oil",
    heading: "Frankincense Oil Manufacturer | Natural Resin Oil for Bulk Supply",
    image: `${EO}/Frankincense-Oil.webp`,
    imageAlt: "Frankincense Oil",
    paragraphs: [
      "Frankincense Oil is a natural aromatic oil made from the resin of the frankincense tree. The resin is collected from the tree and then processed to obtain the oil. One well-known botanical source is Boswellia serrata. Other Boswellia species can also be used, depending on the required oil. These trees belong to the Burseraceae family. The resin is the main part used for production, and steam distillation is commonly used to obtain the oil.",
      "Frankincense Oil usually has a pale yellow to golden color. Its smell is warm, woody, fresh, slightly sweet, and resin-like. The natural composition can include compounds such as alpha-pinene, limonene, sabinene, and myrcene. The exact composition can change with the tree species, place of origin, resin quality, and processing method.",
      "Frankincense has been valued for its pleasant aroma for a very long time. Today, the oil is used in perfumes, soaps, creams, massage oils, skincare products, hair products, incense, and aromatherapy blends. It can also be mixed with other essential oils to create new fragrance combinations. At Hetaksh Essential Oils, we supply Frankincense Oil for businesses that need a natural aromatic ingredient for their product range.",
    ],
    specsTitle: "Frankincense Oil Product Details",
    layout: "specs-first",
    specs: [
      { label: "Botanical Name", value: "Boswellia serrata" },
      { label: "Plant Family", value: "Burseraceae" },
      { label: "Part Used", value: "Resin" },
      { label: "Extraction Method", value: "Steam Distillation" },
      { label: "Color", value: "Pale Yellow to Golden" },
      { label: "Aroma", value: "Warm, Woody, Fresh and Slightly Sweet" },
      { label: "Main Natural Compounds", value: "Alpha-Pinene, Limonene, Sabinene and Myrcene" },
      { label: "Form", value: "Essential Oil" },
      { label: "Common Areas", value: "Fragrance, Cosmetics, Personal Care and Aromatherapy" },
    ],
    lists: [
      {
        title: "Where Frankincense Oil Is Used",
        columns: 2,
        items: [
          "Facial oils",
          "Body oils",
          "Massage blends",
          "Perfumes",
          "Soaps",
          "Incense",
          "Hair products",
          "Aromatherapy blends",
          "Natural personal care products",
        ],
      },
    ],
    coa: `${EO}/coa/FRANKINCENSE-OIL-COA.pdf`,
    msds: `${EO}/MSDS/FRANKINCENSE-OIL-MSDS.pdf`,
    formTitle: "Contact us for Wholesale Frankincense Oil Enquiries",
    enquirySource: "Enquiry from Frankincense Oil Page",
    sections: [
      {
        title: "Natural Components Found in Frankincense",
        paragraphs: [
          "Frankincense contains several natural aromatic compounds. These compounds help give the oil its particular smell. The amount of each compound can vary between batches. For commercial use, buyers can check the batch-specific product information and COA.",
        ],
        lists: [
          {
            title: "Some commonly found compounds include",
            columns: 2,
            items: [
              "Alpha-Pinene",
              "Limonene",
              "Sabinene",
              "Myrcene",
              "Alpha-Thujene",
              "Other naturally occurring volatile compounds",
            ],
          },
        ],
      },
      {
        title: "Frankincense Oil and Hydrosol Are Not the Same",
        paragraphs: [
          "<b>Frankincense Oil:</b> A concentrated aromatic oil with a stronger smell, used in oil-based formulas, perfumes, and oil blends. It is made from resin through distillation.",
          "<b>Frankincense Hydrosol:</b> A water-based botanical product with a much lighter smell, used in mists and sprays. It is collected as aromatic water during distillation.",
          "This difference is important when buying ingredients for product development. A manufacturer should select the form that matches the finished formula.",
        ],
      },
      {
        title: "Bulk Frankincense Oil | Quality Support, Packaging & Global Supply",
        paragraphs: [
          "When buying natural oils in large quantities, businesses usually need more than the oil itself. They may need samples, product details, batch information, quality papers, and suitable packaging.",
          "The oil should be kept in a cool and dry place. It should be protected from direct sunlight, strong heat, and unnecessary exposure to air. Not every Frankincense Oil has the same composition. Different Boswellia species can produce oils with different natural profiles. Commercial buyers should check the botanical name and product specification before ordering.",
          "At Hetaksh Essential Oils, we help commercial buyers with samples, product information, quality documents, packaging, and shipping support according to their requirements.",
        ],
        lists: [
          {
            title: "Support for Commercial Buyers",
            columns: 2,
            items: [
              "Product samples",
              "COA",
              "MSDS",
              "TDS",
              "Product specifications",
              "Batch information",
              "Quality documents",
              "Export documents where required",
              "Suitable bulk packaging",
              "Shipping support",
            ],
          },
          {
            title: "Who Can Buy Frankincense Oil?",
            columns: 2,
            items: [
              "Cosmetic manufacturers",
              "Skincare brands",
              "Soap makers",
              "Fragrance companies",
              "Aromatherapy businesses",
              "Personal care brands",
              "Wellness product companies",
              "Wholesalers",
              "Distributors",
            ],
          },
        ],
      },
    ],
    variants: [
      {
        title: "Frankincense Hydrosol | Gentle Floral Water for Skincare & Personal Care",
        coa: `${HYDROSOL}/COA/FRANKINCENSE HYDROSOL COA.pdf`,
        msds: `${HYDROSOL}/MSDS/Frankincense Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Frankincense Hydrosol is a water-based product collected during the distillation of frankincense resin. It has a much lighter smell than the essential oil and usually carries a soft woody, fresh, and slightly resinous aroma. It is useful for brands that want to work with a water-based frankincense ingredient instead of a concentrated oil.",
          "The final color and smell can vary depending on the Boswellia species, resin used, distillation process, filtration, and storage. Since it is water-based, clean handling and suitable storage are important. The container should be kept closed when not in use and protected from direct sunlight and high heat.",
        ],
        lists: [
          {
            title: "Frankincense Hydrosol Can Be Used In",
            columns: 2,
            items: [
              "Facial mists",
              "Body mists",
              "Hair sprays and scalp products",
              "Lotions and creams",
              "Soaps",
              "Room sprays",
            ],
          },
        ],
      },
    ],
    seoTitle: "Frankincense Oil Manufacturer | Natural Resin Oil for Bulk Supply",
    seoDescription:
      "Buy bulk Frankincense Oil and Frankincense Hydrosol from a manufacturer and exporter. Steam distilled Boswellia resin oil with COA, MSDS, and worldwide shipping.",
  },

  "garlic-oil": {
    slug: "garlic-oil",
    category: "spice-oils",
    categoryName: "Spice Oils",
    name: "Garlic Oil",
    heading: "Garlic Oil | Strong Herbal Oil for Food, Hair Care and Personal Care",
    image: `${SPICE}/GARLIC OIL.webp`,
    imageAlt: "Garlic Oil",
    paragraphs: [
      "Garlic Oil comes from the garlic plant, a plant that is easy to know because of its strong smell and sharp taste. Its botanical name is Allium sativum. It belongs to the Amaryllidaceae family. The garlic bulb is made of many small cloves, and these cloves are the main part used for making garlic-based oil. Steam distillation can be used to make garlic essential oil, while other garlic oils may be made by infusing garlic into a carrier oil. These products are not the same, so the extraction method should always be checked before purchase.",
      "Garlic essential oil is usually clear to pale yellow and has a strong, warm, sharp, and typical garlic smell. Its special aroma comes mainly from naturally occurring sulfur compounds. Some compounds found in garlic include allicin-related sulfur compounds, diallyl sulfide, diallyl disulfide, and diallyl trisulfide. The exact composition can change with the garlic variety, growing conditions, freshness of the cloves, and production method. Garlic Oil is used in food flavoring, sauces, seasoning mixes, marinades, savoury products, soaps, hair products, selected cosmetic formulas, and personal-care products.",
    ],
    specsTitle: "Product at a Glance",
    layout: "specs-first",
    specs: [
      { label: "Botanical Name", value: "Allium sativum" },
      { label: "Family", value: "Amaryllidaceae" },
      { label: "Part Used", value: "Bulb / Cloves" },
      { label: "Essential Oil Method", value: "Steam Distillation" },
      { label: "Color", value: "Clear to Pale Yellow" },
      { label: "Aroma", value: "Strong, Sharp, Warm & Garlic-Like" },
      { label: "Natural Components", value: "Sulfur-Containing Compounds" },
      { label: "Main Applications", value: "Food, Flavor, Cosmetics & Personal Care" },
    ],
    lists: [
      {
        title: "Where Garlic Oil Is Used",
        columns: 2,
        items: [
          "Seasoning blends",
          "Sauces and marinades",
          "Dips and savoury snacks",
          "Prepared foods and flavor mixtures",
          "Hair oils and scalp blends",
          "Hair masks",
          "Botanical hair products",
          "Soaps and personal care",
        ],
      },
    ],
    coa: `${SPICE}/COA/GARLIC OIL COA.pdf`,
    msds: `${SPICE}/MSDS/GARLIC OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Garlic Oil Enquiries",
    enquirySource: "Enquiry from Garlic Oil Page",
    sections: [
      {
        title: "Infused Garlic Oil vs Distilled Garlic Essential Oil",
        paragraphs: [
          "Commercial buyers should treat these as different materials, even when both are sold under the name garlic oil.",
          "<b>Garlic essential oil:</b> Made by steam distillation of garlic cloves. It is a concentrated, oil-soluble aromatic material with a strong, sharp garlic smell. Color is usually clear to pale yellow. This is the distilled spice oil documented on this page.",
          "<b>Infused garlic oil:</b> Made by infusing garlic into a carrier oil. It is milder, carries more of the base oil’s texture, and does not have the same composition as steam-distilled garlic essential oil.",
          "These products are not interchangeable in a formula. The extraction method, grade, and specification should always be confirmed before purchase. We do not list infused garlic oil as a separate product here because it does not have its own COA and MSDS in this catalogue.",
        ],
      },
      {
        title: "What Is Inside Garlic Oil?",
        paragraphs: [
          "Garlic has a group of sulfur-containing compounds that give it its strong character. A garlic oil bulk manufacturer can provide the relevant specification and batch information so that a business knows which type of material it is receiving.",
        ],
        lists: [
          {
            title: "Naturally occurring compounds associated with garlic include",
            columns: 2,
            items: ["Diallyl sulfide", "Diallyl disulfide", "Diallyl trisulfide", "Other sulfur compounds"],
          },
        ],
      },
      {
        title: "Garlic Oil Bulk Supply | From Food Flavor to Botanical Product Ideas",
        paragraphs: [
          "Garlic has a very different personality from floral oils such as rose or geranium. Its smell is bold, warm, sharp, and savoury. A suitable food-grade garlic oil can be used to add garlic character to different food products. The correct food grade and permitted use should always be confirmed for the target market.",
          "Garlic-based ingredients can also be explored outside the food industry. A hair-care company may consider a suitable garlic oil for hair oils, scalp blends, hair masks, and botanical hair products. Because garlic has a powerful aroma, the formulator may combine it with other ingredients to create a more pleasant final smell.",
        ],
        lists: [
          {
            title: "Possible food applications",
            columns: 2,
            items: [
              "Seasoning blends",
              "Sauces",
              "Marinades",
              "Dips",
              "Savoury snacks",
              "Prepared foods",
              "Flavor mixtures",
            ],
          },
        ],
      },
      {
        title: "Choosing Between Garlic Oil and Garlic Hydrosol",
        paragraphs: [
          "If the product needs a strong garlic aroma, an oil-based blend, or a food flavor, start with a suitable Garlic Oil. If the product is a water-based mist, botanical spray, hair mist, or water-based personal care formula, Garlic Hydrosol is the more suitable starting point. They cannot simply be exchanged in a recipe.",
        ],
      },
    ],
    variants: [
      {
        title: "Garlic Hydrosol | Light Botanical Water with a Fresh Garlic Note",
        coa: `${HYDROSOL}/COA/GARLIC HYDROSOL COA.pdf`,
        msds: `${HYDROSOL}/MSDS/Garlic Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Garlic Hydrosol is a water-based product collected during the distillation of garlic plant material. It is much lighter than concentrated garlic essential oil. Its smell can be fresh, herbal, sharp, and gently garlic-like. It may be useful for product makers who want a garlic botanical ingredient in a water-based formula.",
          "Garlic Oil is oil-based and has a much stronger aroma. Garlic Hydrosol is water-based and has a softer smell. A small product trial can help a formulator see how the material behaves before a larger batch is made.",
        ],
        lists: [
          {
            title: "Where It Can Be Used",
            columns: 2,
            items: [
              "Hair mist — light botanical spray",
              "Scalp spray — water-based botanical ingredient",
              "Body mist — mild herbal note",
              "Botanical spray — garlic plant water",
              "Lotion — part of a suitable water phase",
              "Soap — botanical ingredient",
              "Personal care — water-based product development",
            ],
          },
        ],
      },
    ],
    seoTitle: "Garlic Oil | Strong Herbal Oil for Food, Hair Care and Personal Care",
    seoDescription:
      "Buy bulk Garlic Oil and Garlic Hydrosol from a manufacturer and exporter. Distilled Allium sativum oil for food, hair, and personal care, with COA, MSDS, and worldwide shipping.",
  },

  "grapefruit-oil": {
    slug: "grapefruit-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Grapefruit Oil",
    heading: "Grapefruit Oil | Bright Citrus Oil for Food, Fragrance, Skin and Personal Care",
    image: `${EO}/Grapefruit-Oil.webp`,
    imageAlt: "Grapefruit Oil",
    paragraphs: [
      "Grapefruit Oil comes from the outer peel of the grapefruit fruit. Its botanical name is Citrus paradisi, and it belongs to the Rutaceae family. The peel contains tiny oil pockets that hold the fruit’s strong citrus smell. Cold pressing is a common way to obtain grapefruit peel oil. In this method, the fresh peel is pressed and the aromatic oil is separated from the other fruit material.",
      "The oil is generally pale yellow to yellow and has a fresh, fruity, tangy, slightly bitter smell. Limonene is usually the main natural component, while smaller amounts of compounds such as myrcene, pinene and linalool may also occur. Grapefruit Oil is used in food flavoring, perfumes, soaps, cosmetics, hair-care products, candles, diffusers and other aromatic products. Because citrus oils can have application-specific safety considerations, the exact product specification should be checked before using it in a finished cosmetic or food product.",
    ],
    specsTitle: "Product at a Glance",
    specs: [
      { label: "Botanical Name", value: "Citrus paradisi" },
      { label: "Family", value: "Rutaceae" },
      { label: "Part Used", value: "Fruit Peel" },
      { label: "Common Extraction", value: "Cold Pressing" },
      { label: "Color", value: "Pale Yellow to Yellow" },
      { label: "Aroma", value: "Fresh, Fruity, Citrus & Slightly Bitter" },
      { label: "Main Constituent", value: "Limonene" },
      { label: "Other Constituents", value: "Myrcene, Pinene, Linalool & others" },
      { label: "Common Uses", value: "Food, Fragrance, Cosmetics & Personal Care" },
    ],
    lists: [
      {
        title: "Where Grapefruit Oil Is Used",
        columns: 2,
        items: [
          "Food flavoring",
          "Perfumes",
          "Soaps and cosmetics",
          "Hair-care products",
          "Candles",
          "Diffusers",
          "Body oils and creams",
          "Other aromatic products",
        ],
      },
    ],
    coa: `${EO}/coa/GRAPEFRUIT-OIL-COA.pdf`,
    msds: `${EO}/MSDS/GRAPEFRUIT-OIL-MSDS.pdf`,
    formTitle: "Contact us for Wholesale Grapefruit Oil Enquiries",
    enquirySource: "Enquiry from Grapefruit Oil Page",
    sections: [
      {
        title: "The Peel Is the Important Part",
        paragraphs: [
          "If you look at a grapefruit peel, you can see tiny pores on its surface. These contain aromatic material. This is why the outside of the fruit smells much stronger when the peel is rubbed or squeezed. Cold pressing is widely used for citrus peel oils and helps retain the characteristic fresh citrus profile.",
          "Grapefruit oil is not made of just one compound. Limonene is usually the largest part of its volatile profile, while other compounds add smaller notes. Studies of grapefruit peel oil have also identified β-pinene, linalool, α-terpinene and β-myrcene. It is citrusy like orange and lemon, but it also has a slightly bitter and sharp side.",
        ],
      },
      {
        title: "Grapefruit Oil Bulk Supply | From Citrus Peel to Commercial Product",
        paragraphs: [
          "<b>Food and flavor:</b> A suitable food-grade grapefruit oil can be considered for products that need a grapefruit flavor or aroma. The correct food specification and permitted level should always be confirmed for the intended product and destination market.",
          "<b>Perfume and fragrance:</b> Grapefruit has a lively smell that can brighten a fragrance. Grapefruit + orange gives a sweet citrus. Grapefruit + lemon is sharper and fresher. Grapefruit + lavender is citrus with a soft floral-herbal side. Grapefruit + rosemary is fresh and green. Grapefruit + cedarwood is citrus with a deeper woody note.",
          "<b>Skin and body care:</b> Grapefruit oil can be included in suitable cosmetic formulas such as body oils, soaps, creams, massage blends and other personal-care products. Depending on the specific grapefruit oil and processing method, exposure to sunlight or UV after topical use can be a safety consideration. The actual product specification should therefore be followed.",
          "<b>Hair-care and home fragrance:</b> A hair-care company may explore grapefruit oil in shampoos, conditioners, hair oils or masks. The clean citrus smell also gives grapefruit a place in candles, diffusers, room sprays and other fragrance products.",
        ],
        lists: [
          {
            title: "Possible food and flavor areas",
            columns: 2,
            items: [
              "Beverages",
              "Flavor blends",
              "Confectionery",
              "Sauces",
              "Dressings",
              "Desserts",
              "Other suitable food preparations",
            ],
          },
        ],
      },
      {
        title: "A Quick Difference",
        paragraphs: [
          "<b>Grapefruit Oil:</b> Concentrated aromatic oil with a stronger citrus character. Suitable for oil-based blends. Commonly made from peel. Used in fragrance and flavor work.",
          "<b>Grapefruit Hydrosol:</b> Water-based botanical product with a softer citrus character. Useful in water-based products. Can be made through distillation of peel or zest. Useful for mists and botanical formulas.",
        ],
      },
    ],
    variants: [
      {
        title: "Grapefruit Hydrosol | Gentle Citrus Water for Mists and Beauty Products",
        coa: `${HYDROSOL}/COA/GRAPEFRUIT HYDROSOL COA.pdf`,
        msds: `${HYDROSOL}/MSDS/Grapefruit Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Grapefruit Hydrosol is a water-based botanical product made through distillation of grapefruit plant material. Steam-distilled grapefruit hydrosol products are commonly made using the fruit zest or peel. Its smell can be light, fruity, fresh and citrus-like.",
          "The oil is concentrated and oil-based. The hydrosol is mostly water and carries a much lighter aromatic character. Grapefruit Hydrosol can be explored in facial sprays, body mists, hair mists, botanical toners and other water-based personal-care products. A cosmetic maker should test the complete formula. pH, preservation, microbiological quality, stability, smell and compatibility all matter in a finished water-based product.",
        ],
        lists: [
          {
            title: "Where Can It Fit?",
            columns: 2,
            items: [
              "Face mist — citrus botanical water",
              "Body mist — fresh aromatic ingredient",
              "Hair mist — light fragrance note",
              "Toner — water-based cosmetic",
              "Lotion — botanical water phase",
              "Soap — citrus ingredient",
              "Room spray — soft citrus aroma",
            ],
          },
        ],
      },
    ],
    seoTitle: "Grapefruit Oil | Bright Citrus Oil for Food, Fragrance, Skin and Personal Care",
    seoDescription:
      "Buy bulk Grapefruit Oil and Grapefruit Hydrosol from a manufacturer and exporter. Cold-pressed Citrus paradisi peel oil with COA, MSDS, and worldwide shipping.",
  },

  "geranium-oil": {
    slug: "geranium-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Geranium Oil",
    heading: "Geranium Oil | Fresh Floral Oil for Beauty, Hair Care and Fragrance",
    image: `${EO}/Geranium-Oil.webp`,
    imageAlt: "Geranium Oil",
    paragraphs: [
      "Geranium Oil comes from the fragrant geranium plant. Its common botanical source is Pelargonium graveolens, a plant from the Geraniaceae family. The leaves, flowers, and green stems are used to make the oil. Steam distillation is a common way to collect its natural aroma. The oil can be pale yellow, yellow-green, or light olive in appearance. Its smell is soft, fresh, rosy, green, and slightly sweet. Geranium is special because its scent is not only floral. It also has a fresh green side, which makes it useful in many fragrance blends.",
      "Natural compounds such as citronellol, geraniol, linalool, and citronellyl formate can be found in the oil. Their amounts can change with the plant variety, growing place, weather, harvest time, and distillation process. Geranium Oil can be used in perfumes, soaps, creams, lotions, face oils, body products, hair products, massage blends, and other personal-care formulas. It can also be mixed with rose, lavender, orange, bergamot, sandalwood, or frankincense oils.",
    ],
    specsTitle: "Product Information",
    layout: "specs-first",
    specs: [
      { label: "Botanical Name", value: "Pelargonium graveolens" },
      { label: "Family", value: "Geraniaceae" },
      { label: "Plant Part", value: "Leaves, Flowers & Stems" },
      { label: "Extraction", value: "Steam Distillation" },
      { label: "Color", value: "Pale Yellow to Yellow-Green" },
      { label: "Aroma", value: "Rosy, Fresh, Green & Sweet" },
      { label: "Main Compounds", value: "Citronellol, Geraniol & Linalool" },
      { label: "Product Type", value: "Essential Oil" },
    ],
    lists: [
      {
        title: "Where Geranium Oil Is Used",
        columns: 2,
        items: [
          "Perfumes",
          "Soaps",
          "Creams and lotions",
          "Face oils",
          "Body products",
          "Hair products",
          "Massage blends",
          "Other personal-care formulas",
        ],
      },
    ],
    coa: `${EO}/coa/GERANIUM-OIL-COA.pdf`,
    msds: `${EO}/MSDS/GERANIUM-OIL-MSDS.pdf`,
    formTitle: "Contact us for Wholesale Geranium Oil Enquiries",
    enquirySource: "Enquiry from Geranium Oil Page",
    sections: [
      {
        title: "What Is Found in the Oil?",
        paragraphs: [
          "A geranium oil bulk manufacturer may work with different natural batches, so the color and smell can have small changes. This is normal with plant-based materials. The plant has soft green leaves and small flowers, but its leaves carry a strong part of its aroma.",
        ],
        lists: [
          {
            title: "Some naturally occurring compounds include",
            columns: 2,
            items: ["Citronellol", "Geraniol", "Linalool", "Citronellyl formate", "Other aromatic plant compounds"],
          },
        ],
      },
      {
        title: "Geranium for Beauty, Fragrance and Product Making",
        paragraphs: [
          "Geranium has a scent that can move in different directions. It can smell floral when mixed with rose, fresh when paired with citrus, or warm when combined with woody oils.",
          "<b>Geranium in skin products:</b> Geranium Oil can be added to suitable face oils, body oils, creams, lotions, massage blends, soaps, and other cosmetic preparations. The final amount of essential oil should be decided by a trained formulator.",
          "<b>Geranium in hair care:</b> Geranium can add a fresh floral smell to hair products. It may be explored in hair oils, masks, conditioners, shampoos, and other suitable formulas.",
          "<b>Geranium in perfume making:</b> With rose it is a soft and rich floral smell. With bergamot it is bright and fresh. With orange it is a sweet citrus-floral smell. With lavender it is a gentle herbal-floral smell. With cedarwood it is green and woody. With sandalwood it is warm and smooth.",
        ],
      },
      {
        title: "For Bulk Wholesale Buyers",
        paragraphs: [
          "A geranium oil bulk wholesaler can work with companies that need small commercial quantities as well as larger production requirements. Before buying, a manufacturer can ask for a sample. The most important thing is to select the right form of the ingredient. Perfume, face oil, massage oil, and many soaps typically start with Geranium Oil. Facial mist, hair mist, and body spray typically start with Geranium Hydrosol. Hetaksh Essential Oils can discuss product specifications, samples, documentation, quantity, and shipping requirements according to the buyer’s application.",
        ],
      },
    ],
    variants: [
      {
        title: "Geranium Hydrosol | Soft Floral Water for Mists and Botanical Products",
        coa: `${HYDROSOL}/COA/GERANIUM HYDROSOL COA.pdf`,
        msds: `${HYDROSOL}/MSDS/Geranium Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Geranium Hydrosol is a gentle floral water collected during the distillation of geranium plant material. It has a much softer smell than concentrated oil. The aroma can have light rose, fresh green, sweet, and herbal notes. Because it is water-based, it can be useful for products that are made mainly with water.",
          "Geranium Oil is concentrated and oil-based. Geranium Hydrosol is light and water-based. They may come from the same plant, but they behave differently in a formula. The final formula should always be tested before commercial production.",
        ],
        lists: [
          {
            title: "A Simple Look at Its Uses",
            columns: 2,
            items: [
              "Face mist — light floral spray",
              "Body mist — fresh body product",
              "Hair mist — botanical hair spray",
              "Toner — water-based beauty product",
              "Lotion — botanical water phase",
              "Soap — floral ingredient",
              "Room spray — light aromatic note",
            ],
          },
        ],
      },
    ],
    seoTitle: "Geranium Oil | Fresh Floral Oil for Beauty, Hair Care and Fragrance",
    seoDescription:
      "Buy bulk Geranium Oil and Geranium Hydrosol from a manufacturer and exporter. Steam distilled Pelargonium graveolens oil with COA, MSDS, and worldwide shipping.",
  },

  "ginger-oil": {
    slug: "ginger-oil",
    category: "spice-oils",
    categoryName: "Spice Oils",
    name: "Ginger Oil",
    heading: "Ginger Oil | Warm Spice Oil for Food, Beauty, Hair Care and Fragrance",
    image: `${SPICE}/GINGER OIL.webp`,
    imageAlt: "Ginger Oil",
    paragraphs: [
      "Ginger Oil comes from the underground part of the ginger plant. This part is called a rhizome. It looks a little like a root, but it is actually an underground stem. Zingiber officinale is the accepted botanical name for ginger, which is classified within the Zingiberaceae family. The rhizome is cleaned, prepared, and commonly used for steam distillation. During this process, steam passes through the ginger material and carries its natural aromatic compounds. The vapour is then cooled, and the oil is separated.",
      "The finished oil can be pale yellow to golden yellow. Its smell is warm, spicy, fresh, woody, and slightly sweet. Zingiberene is one of the well-known compounds in ginger oil. Other natural compounds may include β-sesquiphellandrene, ar-curcumene, camphene, and other aromatic substances. Ginger Oil is used in food flavors, drinks, confectionery, perfumes, soaps, massage products, hair-care formulas, cosmetics, and aromatic blends.",
    ],
    specsTitle: "Product at a Glance",
    layout: "specs-first",
    specs: [
      { label: "Botanical Name", value: "Zingiber officinale" },
      { label: "Family", value: "Zingiberaceae" },
      { label: "Part Used", value: "Rhizome" },
      { label: "Extraction Method", value: "Steam Distillation" },
      { label: "Color", value: "Pale Yellow to Golden Yellow" },
      { label: "Aroma", value: "Warm, Spicy, Fresh & Woody" },
      { label: "Main Compound", value: "Zingiberene" },
      { label: "Other Compounds", value: "β-Sesquiphellandrene, Ar-Curcumene & Others" },
      { label: "Main Applications", value: "Food, Fragrance, Cosmetics & Personal Care" },
    ],
    lists: [
      {
        title: "Where Ginger Oil Is Used",
        columns: 2,
        items: [
          "Food flavors and drinks",
          "Confectionery",
          "Perfumes",
          "Soaps",
          "Massage products",
          "Hair-care formulas",
          "Cosmetics",
          "Aromatic blends",
        ],
      },
    ],
    coa: `${SPICE}/COA/GINGER OIL COA.pdf`,
    msds: `${SPICE}/MSDS/GINGER OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Ginger Oil Enquiries",
    enquirySource: "Enquiry from Ginger Oil Page",
    sections: [
      {
        title: "The Ginger Plant",
        paragraphs: [
          "Ginger grows below the soil. Its rhizome has many small bumps and branches. Fresh ginger is used in kitchens around the world, but the same plant can also provide an aromatic oil. The smell of the oil is much stronger than the smell of a small piece of fresh ginger. A ginger oil bulk manufacturer can work with ginger from different growing regions. The final smell and color can change slightly depending on the raw material and the production process.",
        ],
      },
      {
        title: "Ginger Oil Bulk Supply | From a Kitchen Spice to Commercial Products",
        paragraphs: [
          "<b>Food and flavor:</b> Ginger oil can bring a clear ginger note to suitable food and flavor products. The correct food grade and permitted use must be confirmed for the target market.",
          "<b>Fragrance and perfume:</b> Ginger + lemon gives a bright, fresh character. Ginger + orange creates a warmer citrus note. Ginger + cardamom gives a rich spice feeling. Ginger + lavender adds a softer herbal side. Ginger + cedarwood creates a deeper woody blend. Ginger + black pepper gives a stronger spicy profile.",
          "<b>Skin, body and hair:</b> Ginger oil can be explored in suitable body oils, massage blends, soaps, creams, lotions, hair oils, scalp products, masks, shampoos, and conditioners. The amount of essential oil used needs to be decided according to the finished product and relevant safety requirements.",
        ],
        lists: [
          {
            title: "Possible food and flavor areas",
            columns: 2,
            items: [
              "Beverages",
              "Confectionery",
              "Bakery products",
              "Sauces",
              "Seasoning blends",
              "Marinades",
              "Flavor preparations",
            ],
          },
        ],
      },
      {
        title: "Ginger Oil for Bulk Wholesale",
        paragraphs: [
          "Ginger oil bulk wholesale purchasing can be useful for companies that use the ingredient regularly. A new business can also start by requesting a sample. Ginger oil should be kept in a properly closed container and protected from strong light and excessive heat. Ginger Oil is concentrated, oil-based, and strongly aromatic. Ginger Hydrosol is water-based, lighter, and softer in smell. Hetaksh Essential Oils can discuss the product specifications, commercial quantities, samples, documents, and shipping requirements according to the buyer’s needs.",
        ],
      },
    ],
    variants: [
      {
        title: "Ginger Hydrosol | A Light Ginger Water for Mists and Personal Care",
        coa: `${HYDROSOL}/COA/GINGER HYDROSOL COA.pdf`,
        msds: `${HYDROSOL}/MSDS/Ginger Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Ginger Hydrosol is a water-based product obtained during the distillation of ginger plant material. It has a softer smell than ginger essential oil. Its aroma may be fresh, warm, slightly spicy, and gently herbal. It can be explored in products where a water-based botanical ingredient is more suitable.",
          "Ginger essential oil has a strong smell. A hydrosol is much lighter. They should not be treated as direct substitutes. A hair-care brand can explore ginger hydrosol in a light hair mist or scalp spray. The final formula should be checked for smell, appearance, stability, preservation, and compatibility with the other ingredients.",
        ],
        lists: [
          {
            title: "Where Could It Be Used?",
            columns: 2,
            items: [
              "Face mist — light botanical water",
              "Hair mist — fresh aromatic ingredient",
              "Body spray — soft ginger note",
              "Toner — water-based botanical ingredient",
              "Lotion — part of the water phase",
              "Soap — botanical addition",
              "Room spray — mild aromatic character",
            ],
          },
        ],
      },
    ],
    seoTitle: "Ginger Oil | Warm Spice Oil for Food, Beauty, Hair Care and Fragrance",
    seoDescription:
      "Buy bulk Ginger Oil and Ginger Hydrosol from a manufacturer and exporter. Steam distilled Zingiber officinale oil with COA, MSDS, and worldwide shipping.",
  },

  "grapeseed-oil": {
    slug: "grapeseed-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Grapeseed Oil",
    heading: "Grapeseed Oil | Bulk Grapeseed Oil Supply For Food, Skin & Hair Care",
    image: `${CO}/Grapeseed-Oil.webp`,
    imageAlt: "Grapeseed Oil",
    paragraphs: [
      "Grapeseed Oil comes from the tiny seeds found inside grapes. The grape plant is known by the botanical name Vitis vinifera and belongs to the Vitaceae family. The seeds are small, but they contain natural oil that can be used in many products. The oil may be made through cold pressing or other suitable extraction methods, depending on the product grade. It is usually light yellow to greenish-yellow and has a mild smell. Linoleic acid is one of its main fatty acids, along with oleic, palmitic, and stearic acids. It also contains natural vitamin E and other plant compounds.",
      "Its light feel makes it useful in face oils, body oils, creams, lotions, hair products, massage blends, soaps, and selected food products. It can also be mixed with other plant oils to make different blends. The quality and composition can change with the grape variety, seed quality, growing area, extraction process, and storage. This is why product specifications are important when choosing an ingredient for commercial production.",
    ],
    specsTitle: "Product Details",
    specs: [
      { label: "Botanical Name", value: "Vitis vinifera" },
      { label: "Family", value: "Vitaceae" },
      { label: "Part Used", value: "Grape Seeds" },
      { label: "Extraction", value: "Cold Pressed / Product-Specific Method" },
      { label: "Color", value: "Light Yellow to Greenish Yellow" },
      { label: "Aroma", value: "Mild & Natural" },
      { label: "Main Fatty Acid", value: "Linoleic Acid" },
      { label: "Other Fatty Acids", value: "Oleic, Palmitic & Stearic Acid" },
      { label: "Natural Components", value: "Vitamin E & Plant Compounds" },
      { label: "Main Uses", value: "Food, Skincare, Hair Care & Cosmetics" },
    ],
    lists: [
      {
        title: "Where Grapeseed Oil Is Used",
        columns: 2,
        items: [
          "Face oils",
          "Body oils",
          "Creams and lotions",
          "Massage blends",
          "Soap formulas",
          "Hair oils and masks",
          "Conditioners",
          "Selected food products",
        ],
      },
    ],
    coa: `${CO}/coa/GRAPESEED OIL COA.pdf`,
    msds: `${CO}/MSDS/GRAPESEED OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Grapeseed Oil Enquiries",
    enquirySource: "Enquiry from Grapeseed Oil Page",
    sections: [
      {
        title: "Grapeseed Oil Bulk Manufacturer | A Light Oil for Everyday Formulas",
        paragraphs: [
          "A Grapeseed Oil bulk manufacturer can supply this ingredient for companies that make different kinds of products. The oil has a light texture, so it can be a useful starting material for formulas where a heavy oil is not wanted.",
          "<b>Skin care ideas:</b> A formulator can mix it with jojoba oil, almond oil, avocado oil, argan oil, or other carrier oils. Each oil changes the final texture and feel. The finished cosmetic should always be tested before commercial production.",
          "<b>Hair care:</b> Grapeseed Oil can also be used in hair oils, masks, conditioners, and other hair products. Its light feel can make it useful when a brand wants an oil blend that does not feel too heavy.",
          "<b>Food applications:</b> Suitable food-grade Grapeseed Oil can also be considered for food applications. Its mild taste can work in products where the oil should not overpower the other flavors. The correct food grade must be selected for the intended application.",
        ],
        lists: [
          {
            title: "Possible food uses",
            columns: 2,
            items: ["Salad dressings", "Sauces", "Marinades", "Food blends", "Other suitable preparations"],
          },
          {
            title: "Product area examples",
            columns: 2,
            items: [
              "Skincare — face and body oils",
              "Hair Care — hair oils and masks",
              "Cosmetics — creams and lotions",
              "Soap — oil-based soap formulas",
              "Food — dressings and sauces",
              "Personal Care — massage and body products",
            ],
          },
        ],
      },
      {
        title: "Grapeseed Oil Bulk Distributor | Product Choice, Quality & Global Sourcing",
        paragraphs: [
          "A Grapeseed Oil bulk distributor needs to understand what the buyer actually wants to make. A food company may need a food-grade material, while a skincare brand may need specifications suited to cosmetic production.",
          "Natural oils can change slightly between batches. The grape variety, climate, seed condition, harvest time, processing method, and storage can all affect the final oil. For commercial work, the best approach is to check the actual batch specification and COA.",
          "Grapeseed Oil should be kept away from direct sunlight, strong heat, and unnecessary exposure to air. The container should remain properly closed when the oil is not being used. Hetaksh Essential Oils can discuss these requirements with buyers according to the product and destination.",
        ],
      },
    ],
    variants: [],
    seoTitle: "Grapeseed Oil | Bulk Grapeseed Oil Supply For Food, Skin & Hair Care",
    seoDescription:
      "Buy bulk Grapeseed Oil from a manufacturer and exporter. Light Vitis vinifera carrier oil for food, skin, and hair care, with COA, MSDS, and worldwide shipping.",
  },
};

export const NEW_FAQS_BATCH3: Record<string, FaqItem[]> = {
  "fenugreek-oil": [
    {
      question: "What is Fenugreek Oil made from?",
      answer:
        "Fenugreek Oil is made from the seeds of Trigonella foenum-graecum, commonly known as fenugreek or methi.",
    },
    {
      question: "What is Fenugreek Oil used for?",
      answer:
        "It is used in hair oils, scalp products, creams, lotions, massage blends, soaps, cosmetics, and personal care products.",
    },
    {
      question: "Can I buy Fenugreek Oil from a bulk supplier?",
      answer:
        "Yes. Commercial quantities are available for manufacturers, cosmetic brands, hair-care companies, wholesalers, distributors, and product developers.",
    },
    {
      question: "Do you supply Fenugreek Hydrosol in bulk?",
      answer:
        "Yes. Fenugreek Hydrosol can be supplied in commercial quantities for businesses making hair mists, facial sprays, lotions, soaps, and other water-based products.",
    },
    {
      question: "Can Fenugreek Oil be mixed with other carrier oils?",
      answer:
        "Yes. Depending on the product type, it can be blended with oils such as coconut, jojoba, almond, or olive oil.",
    },
  ],
  "flaxseed-oil": [
    {
      question: "What is Flaxseed Oil made from?",
      answer:
        "It is made from the seeds of the flax plant, Linum usitatissimum. The seeds can be mechanically pressed to obtain the oil.",
    },
    {
      question: "What is the main fatty acid found in Flaxseed Oil?",
      answer:
        "Alpha-linolenic acid, or ALA, is one of its main fatty acids. The oil also contains linoleic, oleic, palmitic, and stearic acids.",
    },
    {
      question: "Can Flaxseed Oil be used for hair and skin products?",
      answer:
        "Yes. It can be included in suitable hair oils, masks, face oils, body oils, creams, lotions, and other cosmetic formulations.",
    },
    {
      question: "Can I purchase Flaxseed Oil through bulk wholesale?",
      answer:
        "Yes. Commercial quantities can be supplied to food companies, cosmetic manufacturers, hair-care brands, soap makers, wholesalers, and distributors.",
    },
    {
      question: "Does a Flaxseed Oil bulk exporter supply international markets?",
      answer:
        "Yes. International orders can be arranged according to the destination, product requirements, packaging, documentation, and shipping conditions.",
    },
  ],
  "frankincense-oil": [
    {
      question: "What is Frankincense Oil made from?",
      answer:
        "Frankincense Oil is made from the resin of Boswellia trees. Steam distillation is commonly used to obtain the aromatic oil.",
    },
    {
      question: "What does Frankincense Oil smell like?",
      answer:
        "It usually has a warm, woody, fresh, slightly sweet, and resin-like smell. The aroma can change depending on the Boswellia species and origin.",
    },
    {
      question: "Can I buy Frankincense Oil from a bulk distributor?",
      answer:
        "Yes. Commercial quantities can be supplied to businesses that use the oil in cosmetics, fragrance products, personal care items, and aromatic blends.",
    },
    {
      question: "Do you work as a Frankincense Oil bulk wholesaler?",
      answer:
        "Yes. Wholesale quantities are available for businesses that need the product for manufacturing or further distribution. Samples and product information can be requested before a larger order.",
    },
    {
      question: "What documents are available from a Frankincense Oil bulk exporter?",
      answer:
        "Suitable documents can include COA, MSDS, TDS, product specifications, batch information, and export paperwork, depending on the product and destination.",
    },
  ],
  "garlic-oil": [
    {
      question: "What is Garlic Oil made from?",
      answer:
        "Garlic Oil is made from the bulb or cloves of the Allium sativum plant. The exact production method depends on whether it is an essential oil or another type of garlic oil.",
    },
    {
      question: "Can Garlic Hydrosol be used in hair-care products?",
      answer:
        "Yes. It can be explored in suitable water-based products such as hair mists, scalp sprays, and botanical hair preparations.",
    },
    {
      question: "Is Garlic Oil suitable for food products?",
      answer:
        "A properly specified food-grade garlic oil can be used in suitable food and flavor applications. The correct grade and permitted use should be confirmed for the target market.",
    },
    {
      question: "Can I purchase Garlic Oil through bulk wholesale?",
      answer:
        "Yes. Commercial quantities can be supplied to food manufacturers, cosmetic companies, hair-care brands, soap makers, wholesalers, and other businesses.",
    },
    {
      question: "Does a Garlic Oil bulk exporter supply international customers?",
      answer:
        "Yes. International orders can be discussed according to the destination, product grade, quantity, packaging, documentation, and shipping requirements.",
    },
  ],
  "grapefruit-oil": [
    {
      question: "What part of the grapefruit is used for Grapefruit Oil?",
      answer:
        "The outer fruit peel is commonly used. It contains the aromatic oil that gives grapefruit its familiar citrus smell.",
    },
    {
      question: "What can Grapefruit Hydrosol be used for?",
      answer:
        "It can be explored in facial mists, body sprays, hair mists, toners, lotions and other suitable water-based personal-care products.",
    },
    {
      question: "Can Grapefruit Oil be purchased through bulk wholesale?",
      answer:
        "Yes. Commercial quantities can be sourced for food, fragrance, cosmetic, soap, hair-care and personal-care businesses.",
    },
    {
      question: "Does a Grapefruit Oil bulk exporter supply international markets?",
      answer:
        "Yes. International orders can be discussed according to the destination, intended application, quantity, packaging, documentation and applicable market requirements.",
    },
    {
      question: "Is Grapefruit Oil suitable for direct application on skin?",
      answer:
        "It should not be treated as a product for undiluted skin use. Citrus oils can have specific topical safety considerations, including possible phototoxicity depending on the oil and processing method. The product’s own safety documentation and formulation guidance should be followed.",
    },
  ],
  "geranium-oil": [
    {
      question: "What is Geranium Oil used for in cosmetics?",
      answer:
        "Geranium Oil can be used in suitable perfumes, soaps, face oils, body products, creams, lotions, massage blends, and other cosmetic formulas.",
    },
    {
      question: "Can I purchase Geranium Oil through bulk wholesale?",
      answer:
        "Yes. Commercial quantities can be arranged for cosmetic manufacturers, fragrance companies, soap makers, skincare brands, hair-care businesses, and other product makers.",
    },
    {
      question: "What is the best way to use Geranium Hydrosol?",
      answer:
        "It can be explored in water-based products such as facial mists, hair sprays, body mists, botanical toners, lotions, and selected personal-care formulas.",
    },
    {
      question: "Does Geranium Oil ship to international markets?",
      answer:
        "Yes. International supply can be arranged according to the destination country’s requirements, product specifications, documents, and shipping conditions.",
    },
    {
      question: "Can I get a sample before ordering Geranium Oil in bulk?",
      answer:
        "Yes. A sample can help manufacturers check the color, aroma, texture, and suitability of the material before moving to a larger commercial order.",
    },
  ],
  "ginger-oil": [
    {
      question: "What part of the ginger plant is used to make Ginger Oil?",
      answer:
        "The rhizome is used. It grows underground and is often mistaken for a root, but botanically it is an underground stem.",
    },
    {
      question: "Can Ginger Hydrosol be used in skincare?",
      answer:
        "It can be explored in suitable water-based products such as facial mists, toners, lotions, and botanical sprays. The finished formula should be tested before commercial use.",
    },
    {
      question: "What industries can use Ginger Oil?",
      answer:
        "Food and flavor companies, perfume makers, cosmetic brands, soap manufacturers, hair-care businesses, massage-product makers, and personal-care companies can explore suitable grades.",
    },
    {
      question: "Can I order Ginger Oil through bulk wholesale?",
      answer:
        "Yes. Commercial quantities can be arranged for businesses that need ginger oil for regular production or product development.",
    },
    {
      question: "Does a Ginger Oil bulk exporter provide product documents?",
      answer:
        "Relevant documents such as COA, TDS, MSDS, specifications, and batch information may be provided according to the product, application, and requirements of the destination market.",
    },
  ],
  "grapeseed-oil": [
    {
      question: "What is Grapeseed Oil used for in skincare?",
      answer:
        "It can be used in face oils, body oils, creams, lotions, massage blends, and other suitable cosmetic formulas.",
    },
    {
      question: "Can I buy Grapeseed Oil from a Grapeseed Oil bulk manufacturer?",
      answer:
        "Yes. Commercial quantities can be sourced for manufacturers, brands, wholesalers, and product developers working with food, cosmetics, hair care, and personal care.",
    },
    {
      question: "Do you work as a Grapeseed Oil bulk supplier for hair-care companies?",
      answer:
        "Yes. The oil can be considered for hair oils, masks, conditioners, and other suitable hair-care formulations.",
    },
    {
      question: "Is Grapeseed Oil available through a Grapeseed Oil bulk exporter for international orders?",
      answer:
        "Yes. International orders can be discussed according to the destination, product requirements, packaging, and documents needed for the shipment.",
    },
    {
      question: "What should I ask before placing a bulk wholesale order?",
      answer:
        "Ask about the botanical name, extraction method, plant part, color, aroma, specifications, grade, sample availability, COA, packaging, and documents required for your intended application.",
    },
  ],
};
