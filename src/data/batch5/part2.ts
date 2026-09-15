import type { CleanProductPage, FaqItem } from "@/lib/types";

const CO = "/assets/images/products/Carrier-Oils";
const EO = "/assets/images/products/Essential-Oils";
const HYD = "/assets/images/products/Hydrosol";
const SP = "/assets/images/products/spice-oil";
const SI = "/assets/images/products/special-ingredients";
const PG = "/assets/images/products/Pharma-Grade-Oils";
const PP = "/assets/images/products/single-product";

export const PAGES: Record<string, CleanProductPage> = {
  "muskmelon-oil": {
    slug: "muskmelon-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Muskmelon Seed Oil",
    heading: "Muskmelon Seed Oil | A Light Oil from the Seeds of the Melon",
    image: `${CO}/Muskmelon-Seed-Oil.webp`,
    imageAlt: "Muskmelon Seed Oil",
    paragraphs: [
      "Muskmelon Seed Oil is made from the seeds found inside ripe muskmelons. A commonly used botanical name for muskmelon is Cucumis melo, which belongs to the Cucurbitaceae family. The seeds are cleaned, dried when required, and pressed to release their natural oil. Cold pressing can be used when a more natural, minimally processed oil is wanted. The oil can be light yellow to yellow and may have a mild seed-like or nutty smell.",
      "It contains several natural fatty acids, with linoleic acid and oleic acid among the important ones. Palmitic and stearic acids may also be present. The exact fatty acid balance depends on the melon variety, where it was grown, seed maturity, and the way the oil was processed.",
      "Muskmelon Seed Oil is a carrier oil that can be explored in skincare, hair care, body products, massage blends, soaps, creams, lotions, and other cosmetic formulations. Its light feel can make it useful in blends where a heavy oil is not wanted. It can also be mixed with other plant oils such as jojoba, almond, argan, or sunflower oil to change the final texture. Since it comes from seeds rather than the juicy part of the fruit, it should not be confused with muskmelon juice, fruit extract, or melon fragrance.",
    ],
    specsTitle: "Product at a Glance",
    specs: [
      { label: "Botanical Name", value: "Cucumis melo" },
      { label: "Family", value: "Cucurbitaceae" },
      { label: "Part Used", value: "Seeds" },
      { label: "Common Method", value: "Cold Pressing" },
      { label: "Color", value: "Light Yellow to Yellow" },
      { label: "Aroma", value: "Mild, Nutty & Seed-Like" },
      { label: "Main Fatty Acids", value: "Linoleic Acid & Oleic Acid" },
      { label: "Other Fatty Acids", value: "Palmitic & Stearic Acid" },
      { label: "Main Areas", value: "Cosmetics, Skin Care & Hair Care" },
    ],
    coa: `${CO}/coa/MUSKMELON SEED OIL COA.pdf`,
    msds: `${CO}/MSDS/MUSKMELON SEED OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Muskmelon Seed Oil Enquiries",
    enquirySource: "Enquiry from Muskmelon Oil Page",
    sections: [
      {
        title: "Inside the Muskmelon Seed",
        paragraphs: [
          "A muskmelon is usually remembered for its sweet flesh and juicy centre. But the seeds inside it are useful too.",
          "Those small seeds contain oil. When they are properly prepared and pressed, the oil can be separated from the solid seed material.",
          "This makes muskmelon seed oil bulk supplier sourcing different from buying any ordinary melon-based ingredient. The product is specifically obtained from the seeds.",
        ],
      },
      {
        title: "What Is in the Oil?",
        paragraphs: [
          "Muskmelon seed oil contains a mixture of natural fatty acids.",
          "Linoleic acid can make up a large part of the oil, while oleic acid is also present. Smaller amounts of palmitic and stearic acids can occur as well.",
          "The exact numbers are not always the same. The variety of muskmelon, growing conditions, seed quality, harvest time, and processing can all affect the final oil.",
          "For this reason, the actual product specification should be checked when a particular fatty acid profile is needed.",
        ],
      },
      {
        title: "A Simple Seed-to-Oil Journey",
        paragraphs: [
          "Muskmelon → Seeds → Cleaning → Drying/Preparation → Pressing → Filtration → Testing → Oil",
          "The process may look simple, but each step matters.",
          "Clean seeds can help give a better starting material. Proper handling can help protect the oil. Filtration can remove unwanted seed particles.",
          "The final oil is then checked according to the required specification.",
        ],
      },
      {
        title: "A Different Kind of Carrier Oil",
        paragraphs: [
          "Muskmelon seed oil has a lighter feel than some richer plant oils. This can make it interesting for formulas where the formulator wants a softer oil base.",
          "A muskmelon seed oil bulk manufacturer may supply the oil for different cosmetic and personal-care formulations.",
        ],
        lists: [
          {
            title: "It Can Be Explored In",
            columns: 2,
            items: [
              "Face oils",
              "Body oils",
              "Creams",
              "Lotions",
              "Hair oils",
              "Hair masks",
              "Massage blends",
              "Soaps",
              "Body-care products",
            ],
          },
        ],
      },
      {
        title: "Try Thinking About the Texture",
        paragraphs: [
          "The oil does not need to be used alone. It can be mixed with other carrier oils to create a particular texture.",
          "Imagine two body oils. One feels thick and stays on the skin for a long time. The other spreads quickly and feels lighter.",
          "Changing the carrier oils can help move a formula from one type of feel to another. Muskmelon seed oil can be considered when a product maker wants to explore a lighter plant-oil option. The final feel still depends on the complete formula.",
        ],
      },
      {
        title: "Muskmelon Seed Oil in Skin and Hair Formulas",
        paragraphs: [
          "A muskmelon seed oil bulk distributor may supply the oil to skincare, cosmetic, hair-care, and personal-care companies.",
          "For skincare, it can be included in suitable face oils, body oils, creams, lotions, balms, and other formulas. For hair care, it can be explored in hair oils, masks, conditioners, and serum-type products.",
          "It can also be blended with other oils. These are formulation ideas, not fixed recipes. The final amounts should be decided through proper product testing.",
        ],
        lists: [
          {
            title: "Simple Blend Ideas",
            columns: 1,
            items: [
              "Muskmelon + Jojoba — A simple plant-oil blend with a lighter feel",
              "Muskmelon + Argan — A richer botanical combination",
              "Muskmelon + Almond — A smooth carrier-oil blend",
              "Muskmelon + Rosehip — A blend with a different fatty-acid profile and texture",
            ],
          },
        ],
      },
      {
        title: "Why the Seed Source Matters",
        paragraphs: [
          "Not every Cucumis melo seed is exactly the same. Different muskmelon varieties can have different seed sizes, oil content, and natural fatty acid profiles.",
          "Growing conditions also matter. Soil, rainfall, temperature, sunlight, and harvest time can all influence the seeds.",
          "This is one reason natural seed oils can have small differences between batches.",
        ],
      },
      {
        title: "Muskmelon Oil Is Not the Same as Melon Fragrance",
        paragraphs: [
          "This is worth making clear. A muskmelon fragrance is made to smell like the fruit. Muskmelon seed oil is a natural oil obtained from the seeds. They are completely different materials.",
          "The mild smell of muskmelon seed oil also means it should not be expected to smell like a sweet, ripe muskmelon.",
        ],
      },
      {
        title: "Where It Can Be Used",
        paragraphs: [
          "The beauty industry is one of the natural places to explore this oil.",
          "It may also be included in suitable soap and personal-care products. A muskmelon seed oil bulk wholesaler can therefore work with different types of manufacturers rather than only skincare companies.",
        ],
        lists: [
          {
            title: "Skin Care",
            columns: 2,
            items: ["Facial oils", "Body oils", "Lotions", "Creams", "Balms", "Massage blends"],
          },
          {
            title: "Hair Care",
            columns: 2,
            items: ["Hair oils", "Hair masks", "Conditioners", "Hair serums", "Scalp-care formulas"],
          },
        ],
      },
      {
        title: "What Should a Buyer Know About the Oil?",
        paragraphs: [
          "A buyer choosing muskmelon seed oil may want to look at more than just color.",
          "For example, two oils may both be called muskmelon seed oil but come from different seed varieties. If a company has a specific formulation requirement, the actual specification becomes important.",
        ],
        lists: [
          {
            title: "Useful Details Can Include",
            columns: 2,
            items: [
              "Botanical name",
              "Seed source",
              "Country of origin",
              "Extraction method",
              "Appearance",
              "Aroma",
              "Fatty acid profile",
              "Grade",
              "Batch details",
              "Quality testing",
            ],
          },
        ],
      },
      {
        title: "Commercial and International Supply",
        paragraphs: [
          "Muskmelon seed oil bulk exporter requirements can vary from one country to another. The intended use should be clear because a cosmetic buyer and a food buyer may need different information.",
          "The buyer may also have its own quality standards, testing requirements, and documentation needs.",
          "At Hetaksh Essential Oils, muskmelon seed oil can be looked at as a distinct seed-derived carrier oil, with its own source, fatty acid profile, appearance, and formulation characteristics.",
        ],
      },
    ],
    variants: [],
    infoTables: [
      {
        title: "Muskmelon Seed Oil Compared with Melon Fragrance",
        labelHeader: "Muskmelon Seed Oil",
        valueHeader: "Melon Fragrance",
        rows: [
          { label: "Comes from seeds", value: "Designed to give a melon smell" },
          { label: "Carrier oil", value: "Fragrance material" },
          { label: "Fatty acids are important", value: "Aroma is the main focus" },
          { label: "Oil-based", value: "May contain different fragrance materials" },
        ],
      },
    ],
    seoTitle: "Muskmelon Seed Oil Manufacturer | Bulk Muskmelon Seed Oil Supplier",
    seoDescription:
      "Buy bulk Muskmelon Seed Oil from Cucumis melo seeds. Light carrier oil for cosmetics, skin care, and hair care, with COA, MSDS, and worldwide shipping.",
  },

  "myrtle-oil": {
    slug: "myrtle-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Myrtle Oil",
    heading: "Myrtle Oil | Fresh Green Aroma from Myrtus communis",
    image: `${EO}/Myrtle-Oil.webp`,
    imageAlt: "Myrtle Oil",
    paragraphs: [
      "Myrtle Oil comes from the myrtle plant, known by the botanical name Myrtus communis. It is an evergreen plant with small green leaves, white flowers, and dark berries. The leaves are commonly used to make the oil. Steam distillation is used to draw out the fragrant part of the plant. The finished oil can be clear to pale yellow and has a fresh green smell with herbal, leafy, and slightly woody notes.",
      "Its natural composition may include 1,8-cineole, α-pinene, limonene, myrtenyl acetate, linalool, and other aromatic compounds. The balance of these compounds can change with the plant variety, growing area, weather, harvest time, and distillation conditions.",
      "Myrtle Oil has a character of its own. It can remind you of eucalyptus or rosemary at first, but it is softer and more leafy. It can be explored in perfumes, soaps, body products, massage blends, hair-care formulas, candles, diffusers, and other products where a fresh botanical smell is wanted.",
    ],
    specsTitle: "Myrtle Oil at a Glance",
    specs: [
      { label: "Botanical Name", value: "Myrtus communis" },
      { label: "Plant Part", value: "Leaves" },
      { label: "Extraction", value: "Steam Distillation" },
      { label: "Color", value: "Clear to Pale Yellow" },
      { label: "Aroma", value: "Fresh Green, Herbal, Leafy & Slightly Woody" },
      { label: "Main Compounds", value: "1,8-Cineole, α-Pinene, Limonene, Myrtenyl Acetate, Linalool" },
    ],
    coa: `${EO}/coa/MYRTLE-OIL-COA.pdf`,
    msds: `${EO}/MSDS/MYRTLE-OIL-MSDS.pdf`,
    formTitle: "Contact us for Wholesale Myrtle Oil Enquiries",
    enquirySource: "Enquiry from Myrtle Oil Page",
    sections: [
      {
        title: "A Little About the Plant",
        paragraphs: [
          "Myrtle grows as a small evergreen shrub. Its leaves stay green and contain the aromatic material that gives the plant its smell.",
          "The plant also produces tiny white flowers. Later, small berries appear.",
          "This gives myrtle several useful plant parts, but the leaves are especially important for essential-oil production.",
        ],
      },
      {
        title: "What Is Inside the Oil?",
        paragraphs: [
          "Myrtle oil contains a natural mix rather than one single ingredient.",
          "The amount of each compound is not fixed. Natural plants can change from one harvest to another. This is why the actual batch specification is useful when choosing the oil for a product.",
        ],
        lists: [
          {
            title: "Compounds That May Be Found in It",
            columns: 2,
            items: [
              "1,8-Cineole",
              "α-Pinene",
              "Limonene",
              "Myrtenyl acetate",
              "Linalool",
              "Other naturally occurring volatile compounds",
            ],
          },
        ],
      },
      {
        title: "Myrtle Compared with Other Green Oils",
        paragraphs: [
          "Myrtle is an interesting choice when a product needs a green aroma but the usual choices do not quite fit. This difference can help a fragrance maker decide where myrtle belongs.",
          "For example, myrtle oil bulk manufacturer searches may bring up material intended for fragrance, personal care, soap, or cosmetic production. But the buyer should still check the botanical name and specification rather than choosing only by the common product name.",
        ],
      },
      {
        title: "Myrtle in Fragrance",
        paragraphs: [
          "Myrtle can sit nicely between fresh herbs and light woods.",
          "This makes the oil useful for fragrance ideas that need something fresh but not overly citrusy.",
        ],
        lists: [
          {
            title: "Try These Pairings",
            columns: 1,
            items: [
              "Myrtle + Lemon — It can feel brighter",
              "Myrtle + Lavender — It can become softer",
              "Myrtle + Cedarwood — It can move towards a dry woody smell",
              "Myrtle + Frankincense — It can become deeper and more resinous",
              "Myrtle + Rosemary — It can create a stronger green-herbal profile",
            ],
          },
        ],
      },
      {
        title: "A Look at Its Origin",
        paragraphs: [
          "Myrtle is strongly linked with Mediterranean regions, where the evergreen plant grows naturally in warm conditions.",
          "The growing environment can affect the plant’s natural chemistry. Temperature, sunlight, rainfall, soil, plant age, and harvest timing can all have an effect.",
          "So two natural myrtle oils do not have to smell exactly alike. Small differences in color and aroma are possible in botanical oils.",
        ],
      },
      {
        title: "For Different Product Makers",
        paragraphs: [
          "A myrtle oil bulk distributor may work with buyers from several fields, but the reason for buying the oil can be very different.",
          "A perfume maker may care most about the smell. A cosmetic formulator may focus on the composition and safety information. A soap maker may mainly want a particular fragrance character. A home-fragrance company may be looking for a green note that works well with woods or citrus.",
          "The same oil can therefore have very different roles depending on the product.",
        ],
      },
      {
        title: "A Simple Production Journey",
        paragraphs: [
          "The process can be pictured like this: Myrtle leaves → Harvest → Preparation → Steam Distillation → Separation → Testing → Finished Oil",
          "The hydrosol comes from the water side of the distillation process.",
          "The final quality depends on much more than the plant itself. Raw material quality, distillation, filtration, testing, storage, and handling all matter.",
          "Myrtle oil bulk wholesale can therefore be useful for businesses that need a regular supply, but the grade should always match the intended application. For international buyers, a myrtle oil bulk exporter may need to meet different requirements depending on the destination and whether the product is intended for cosmetics, fragrance, personal care, or another application.",
          "At Hetaksh Essential Oils, the product can be evaluated according to its botanical identity, intended application, and required specification rather than treating every myrtle product as identical.",
        ],
      },
    ],
    variants: [
      {
        title: "Myrtle Hydrosol | Light Botanical Water with a Green Note",
        coa: `${HYD}/COA/MYRTLE HYDROSOL COA.pdf`,
        msds: `${HYD}/MSDS/Myrtle Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Myrtle Hydrosol is a water-based product obtained during the distillation of myrtle plant material. Its aroma is much lighter than the essential oil. Instead of a strong green smell, it gives a softer impression of fresh leaves, herbs, and light woods.",
          "A myrtle hydrosol bulk supplier can be relevant for brands making water-based botanical products such as facial sprays, hair mists, body mists, toners, lotions, and similar formulas.",
          "<b>Oil and Hydrosol Are Not Interchangeable.</b> The difference is easy to understand. Myrtle Oil is concentrated and oil-based. Myrtle Hydrosol is mainly water-based and much gentler. So, a perfume formula that needs a noticeable aromatic ingredient may call for the oil, while a light botanical mist may be better suited to the hydrosol.",
          "Hydrosol also needs different handling because water-based products can support microbial growth if they are not properly preserved. The finished formula should be checked for pH, preservation, microbial quality, stability, and compatibility.",
        ],
        lists: [
          {
            title: "Where the Hydrosol Can Fit",
            columns: 2,
            items: [
              "Face mists",
              "Body sprays",
              "Hair mists",
              "Botanical toners",
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
        title: "Myrtle and Other Green Oils at a Glance",
        labelHeader: "Oil",
        valueHeader: "Simple Aroma",
        rows: [
          { label: "Myrtle", value: "Green, leafy, fresh and lightly woody" },
          { label: "Eucalyptus", value: "Cool, sharp and camphor-like" },
          { label: "Rosemary", value: "Strong, dry and herbal" },
          { label: "Tea Tree", value: "Fresh, earthy and sharp" },
          { label: "Lavender", value: "Soft, floral and herbal" },
        ],
      },
    ],
    seoTitle: "Myrtle Oil Manufacturer & Supplier | Bulk Myrtus communis Oil",
    seoDescription:
      "Buy bulk Myrtle Oil and Myrtle Hydrosol from Myrtus communis. Fresh green essential oil for fragrance and personal care, with COA, MSDS, and worldwide shipping.",
  },

  "neroli-oil": {
    slug: "neroli-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Neroli Oil",
    heading: "Neroli Oil | A Fragrant Oil Made from Orange Blossoms",
    image: `${EO}/Neroli-oil.webp`,
    imageAlt: "Neroli Oil",
    paragraphs: [
      "Neroli Oil is made from the small white flowers of the bitter orange tree. The commonly used botanical name is Citrus aurantium var. amara. The tree belongs to the Rutaceae family. Unlike lemon or orange peel oils, neroli does not come from the fruit peel. The flowers are the important part. They are carefully collected and steam distilled to obtain the aromatic oil. Neroli has a beautiful floral smell with fresh citrus, sweet, green, and slightly bitter notes.",
      "Linalool and linalyl acetate are two well-known natural compounds found in the oil. Other compounds, including limonene and α-terpineol, may also be present. Their amounts can vary according to the flower variety, growing region, harvest time, weather, and distillation method.",
      "Neroli Oil is especially valued in perfumery because its smell can make a fragrance feel soft, elegant, fresh, or warm depending on what it is blended with. It can sit nicely beside rose, lavender, jasmine, bergamot, orange, sandalwood, and frankincense. The oil may also be explored in soaps, body oils, creams, lotions, hair products, candles, and other scented products. Since the flowers are delicate and oil yield can be limited, the quality of the flowers and the care taken during distillation are important parts of the final product.",
    ],
    specsTitle: "Neroli Oil at a Glance",
    layout: "specs-first",
    specs: [
      { label: "Botanical Name", value: "Citrus aurantium var. amara" },
      { label: "Family", value: "Rutaceae" },
      { label: "Plant Part", value: "Flowers" },
      { label: "Extraction", value: "Steam Distillation" },
      { label: "Color", value: "Clear to Pale Yellow" },
      { label: "Aroma", value: "Floral, Fresh, Sweet & Green" },
      { label: "Main Components", value: "Linalool & Linalyl Acetate" },
      { label: "Other Components", value: "Limonene, α-Terpineol & Others" },
      { label: "Main Areas", value: "Perfumery, Cosmetics & Personal Care" },
    ],
    coa: `${EO}/coa/NEROLI-OIL-COA.pdf`,
    msds: `${EO}/MSDS/NEROLI-OIL-MSDS.pdf`,
    formTitle: "Contact us for Wholesale Neroli Oil Enquiries",
    enquirySource: "Enquiry from Neroli Oil Page",
    sections: [
      {
        title: "From Bitter Orange Flower to Finished Product",
        paragraphs: [
          "Neroli has a special place among citrus oils because it comes from a flower, not from the fruit. That one detail changes everything about its smell.",
          "Orange peel gives a juicy, sweet citrus aroma. Neroli flowers give a softer floral scent with a citrus side.",
          "This is why a neroli oil bulk manufacturer should identify the plant part clearly when describing the product.",
        ],
      },
      {
        title: "The Flower Is the Key",
        paragraphs: [
          "Bitter orange trees produce small white flowers with a strong natural fragrance.",
          "The flowers need careful handling because they are delicate. Once harvested, they are taken for distillation so that their aroma can be collected.",
          "The basic journey looks like this: Bitter orange tree → Flowers → Harvest → Steam Distillation → Separation → Neroli Oil",
          "The floral water from the distillation process can also become the starting point for the hydrosol.",
        ],
      },
      {
        title: "What Is Inside Neroli Oil?",
        paragraphs: [
          "Neroli contains a mixture of natural aromatic compounds.",
          "These compounds work together to create the finished aroma. The balance can change from one batch to another because plants are affected by nature. Growing region, weather, flower maturity, harvest time, and processing can all play a part.",
        ],
        lists: [
          {
            title: "Commonly Found Compounds",
            columns: 2,
            items: [
              "Linalool",
              "Linalyl acetate",
              "Limonene",
              "α-Terpineol",
              "α-Pinene",
              "Other naturally occurring compounds",
            ],
          },
        ],
      },
      {
        title: "Neroli in Fragrance Blends",
        paragraphs: [
          "Neroli can move in several directions when mixed with other aromatic ingredients.",
          "This flexibility is one reason neroli is often associated with fine fragrance.",
        ],
        lists: [
          {
            title: "Try These Pairings",
            columns: 1,
            items: [
              "Neroli + Bergamot — Can create a bright citrus-floral opening",
              "Neroli + Rose — Can give a softer floral feel",
              "Neroli + Lavender — Can make the blend more gentle and clean",
              "Neroli + Sandalwood — Can bring warmth underneath the flowers",
              "Neroli + Frankincense — Can create a deeper, resinous character",
            ],
          },
        ],
      },
      {
        title: "Neroli and Orange Oil Are Not the Same",
        paragraphs: [
          "Neroli Oil is made from flowers, while orange oil is commonly made from the fruit peel. Knowing this difference helps prevent confusion when selecting a citrus ingredient.",
        ],
      },
      {
        title: "A Look at Commercial Grades",
        paragraphs: [
          "Neroli oil bulk distributor sourcing can involve different requirements depending on what the buyer plans to make.",
          "A perfume company may be very focused on the aroma. A cosmetic company may want information about composition and safety. A soap maker may mainly need a particular fragrance profile.",
          "This means the same natural oil can be judged differently by different buyers.",
        ],
      },
      {
        title: "Why Origin Can Matter",
        paragraphs: [
          "Neroli is linked to bitter orange trees grown in several warm regions. The growing location can affect the natural profile of the flowers.",
          "Soil, temperature, rainfall, sunlight, flower maturity, and harvesting practices can all contribute to differences between batches.",
          "This is why the country of origin and batch information can be useful when comparing two natural neroli oils.",
        ],
      },
      {
        title: "A Small Note About Skin Products",
        paragraphs: [
          "Neroli oil is concentrated, so it should not be treated like a regular carrier oil.",
          "When used in a cosmetic product, it should be properly diluted and included according to the formulation’s intended use and applicable safety guidance.",
          "The finished product should also be tested before commercial release.",
        ],
      },
      {
        title: "International Buying",
        paragraphs: [
          "For businesses looking at neroli oil bulk wholesale, the required quantity is only one part of the decision. The botanical identity, flower source, extraction method, aroma, specifications, and intended application also matter.",
          "A neroli oil bulk exporter may need to provide information suited to the destination market and the customer’s end use.",
        ],
      },
    ],
    variants: [
      {
        title: "Neroli Hydrosol | The Softer Side of Orange Blossom",
        coa: `${HYD}/COA/NEROLI HYDROSOL COA.pdf`,
        msds: `${HYD}/MSDS/Neroli Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Neroli Hydrosol is a water-based botanical product obtained during the distillation of bitter orange flowers. It carries a gentle version of the orange blossom smell.",
          "It can feel light, floral, fresh, and slightly citrusy. The aroma is much softer than the concentrated essential oil, so it can fit products where a strong perfume smell is not wanted.",
          "A neroli hydrosol bulk supplier may provide this type of botanical water for facial mists, body sprays, hair mists, toners, lotions, creams, soaps, and other suitable water-based products.",
          "<b>What Makes the Hydrosol Different?</b> Neroli Oil and Neroli Hydrosol may come from the same flowers, but they are different materials. The oil is concentrated and oil-based. The hydrosol is mainly water-based with a much lighter aromatic character. So, replacing one with the other can change the whole product.",
          "A perfume may need the stronger character of neroli oil. A light facial mist may be better suited to neroli hydrosol. Since hydrosol is water-based, a finished product containing it needs proper preservation and testing. pH, microbial quality, stability, and compatibility with other ingredients should all be checked.",
        ],
        lists: [
          {
            title: "Neroli Hydrosol Can Be Explored As",
            columns: 2,
            items: [
              "Facial mists",
              "Body sprays",
              "Hair mists",
              "Toners",
              "Lotions",
              "Creams",
              "Soaps",
              "Other suitable water-based products",
            ],
          },
        ],
      },
    ],
    infoTables: [
      {
        title: "Simple Product Ideas",
        labelHeader: "Product",
        valueHeader: "Neroli Hydrosol Can Be Explored As",
        rows: [
          { label: "Face Mist", value: "Soft floral water" },
          { label: "Body Mist", value: "Gentle orange-blossom note" },
          { label: "Hair Mist", value: "Light fragrance" },
          { label: "Toner", value: "Botanical water" },
          { label: "Lotion", value: "Water-phase ingredient" },
          { label: "Soap", value: "Floral addition" },
        ],
      },
      {
        title: "Neroli Oil Compared with Orange Oil",
        labelHeader: "Neroli Oil",
        valueHeader: "Orange Oil",
        rows: [
          { label: "Made from flowers", value: "Commonly made from fruit peel" },
          { label: "Floral and citrus-like", value: "Sweet and juicy citrus" },
          { label: "Softer floral character", value: "Fruity citrus character" },
          { label: "Often used in fine fragrance", value: "Used widely in flavor and fragrance" },
        ],
      },
    ],
    seoTitle: "Neroli Oil Manufacturer | Bulk Orange Blossom Essential Oil Supplier",
    seoDescription:
      "Buy bulk Neroli Oil and Neroli Hydrosol from Citrus aurantium flowers. Floral orange blossom oil for perfumery and personal care, with COA, MSDS, and worldwide shipping.",
  },
};

export const FAQS: Record<string, FaqItem[]> = {
  "muskmelon-oil": [
    {
      question: "What is Muskmelon Seed Oil made from?",
      answer: "It is made from the seeds of the muskmelon plant, commonly identified as Cucumis melo.",
    },
    {
      question: "Does Muskmelon Seed Oil smell like muskmelon?",
      answer:
        "Not usually. It generally has a mild seed-like or nutty smell rather than the sweet fruity smell of a ripe muskmelon.",
    },
    {
      question: "Can Muskmelon Seed Oil be used in skincare?",
      answer:
        "Yes. It can be explored in suitable face oils, creams, lotions, body oils, balms, and other cosmetic formulations.",
    },
    {
      question: "What fatty acids are found in Muskmelon Seed Oil?",
      answer:
        "Linoleic acid and oleic acid are important fatty acids in the oil. Palmitic, stearic, and other fatty acids may also be present.",
    },
    {
      question: "Can Muskmelon Seed Oil be purchased in commercial quantities?",
      answer:
        "Yes. It can be sourced for cosmetic, skincare, hair-care, soap, and personal-care manufacturing according to the required grade and specification.",
    },
  ],
  "myrtle-oil": [
    {
      question: "What is Myrtle Oil made from?",
      answer: "It is commonly made from the leaves of Myrtus communis through steam distillation.",
    },
    {
      question: "What does Myrtle Hydrosol smell like?",
      answer:
        "It has a light green, leafy, fresh, and mildly herbal smell. Its aroma is much softer than the essential oil.",
    },
    {
      question: "Is Myrtle Oil the same as Eucalyptus Oil?",
      answer:
        "No. They come from different plants and have different compositions. Myrtle can have a fresh green quality, but it is generally less sharp and camphor-like than eucalyptus.",
    },
    {
      question: "Can Myrtle Oil be purchased in bulk wholesale?",
      answer:
        "Yes. Commercial quantities can be considered for fragrance, cosmetic, soap, personal-care, and other suitable applications.",
    },
    {
      question: "Can Myrtle Hydrosol be used in skincare products?",
      answer:
        "It can be explored in suitable water-based products such as facial mists, toners, lotions, and botanical sprays. The finished formula needs proper preservation and testing.",
    },
  ],
  "neroli-oil": [
    {
      question: "What part of the bitter orange tree is used to make Neroli Oil?",
      answer:
        "The flowers are used. This is what makes neroli different from many citrus oils that are made from fruit peel.",
    },
    {
      question: "Does Neroli Hydrosol smell as strong as Neroli Oil?",
      answer:
        "No. Neroli Hydrosol has a much softer and lighter orange-blossom aroma because it is a water-based product.",
    },
    {
      question: "Is Neroli Oil the same as Orange Oil?",
      answer:
        "No. Neroli comes from bitter orange flowers, while orange oil is commonly obtained from the fruit peel. Their aromas are quite different.",
    },
    {
      question: "Can Neroli Oil be used in perfumes?",
      answer: "Yes. Its floral, fresh, sweet, and citrus-like character makes it useful in many fragrance blends.",
    },
    {
      question: "Can Neroli Hydrosol be used in skincare products?",
      answer:
        "It can be explored in suitable water-based products such as facial mists, toners, lotions, and botanical sprays after proper preservation, stability, and quality testing.",
    },
  ],
};
