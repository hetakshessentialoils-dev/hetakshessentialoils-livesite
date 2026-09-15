import type { CleanProductPage, FaqItem } from "@/lib/types";

const CO = "/assets/images/products/Carrier-Oils";
const EO = "/assets/images/products/Essential-Oils";
const HYD = "/assets/images/products/Hydrosol";
const SP = "/assets/images/products/spice-oil";
const SI = "/assets/images/products/special-ingredients";
const PG = "/assets/images/products/Pharma-Grade-Oils";
const PP = "/assets/images/products/single-product";

export const PAGES: Record<string, CleanProductPage> = {
  "niaouli-oil": {
    slug: "niaouli-oil",
    category: "essential-oils",
    categoryName: "Essential Oils",
    name: "Niaouli Oil",
    heading: "Niaouli Oil | A Fresh Botanical Oil with a Strong Green Note",
    image: `${EO}/Niaouli-Oil.webp`,
    imageAlt: "Niaouli Oil",
    paragraphs: [
      "Niaouli is an evergreen tree with narrow leaves and light-coloured flowers. The plant is commonly known as Melaleuca quinquenervia and belongs to the Myrtaceae family. The leaves and young twigs are used to obtain the oil, usually through steam distillation. The fresh plant material is placed in a still, and steam moves through it. The heat helps release the aromatic part of the leaves. When the vapour cools, the oil is separated.",
      "Niaouli oil is generally clear to pale yellow. Its smell is fresh, green, leafy, herbal, and slightly camphor-like. One of the well-known compounds found in many niaouli oils is 1,8-cineole. Other natural compounds such as α-pinene, limonene, and viridiflorol may also be present. The exact profile depends on the plant and the product grade. Niaouli should not be mixed up with tea tree or eucalyptus oil. They may share a few fresh notes, but they come from different plants and have different natural compositions.",
      "Niaouli Oil can be explored in soaps, perfumes, body products, massage blends, hair products, cosmetic formulas, candles, diffusers, and other products that need a clean green aroma. Its strong plant character can also work well with citrus, lavender, rosemary, cedarwood, and other aromatic oils.",
    ],
    specsTitle: "Niaouli Oil at a Glance",
    specs: [
      { label: "Botanical Name", value: "Melaleuca quinquenervia" },
      { label: "Family", value: "Myrtaceae" },
      { label: "Plant Part", value: "Leaves & Young Twigs" },
      { label: "Extraction", value: "Steam Distillation" },
      { label: "Color", value: "Clear to Pale Yellow" },
      { label: "Aroma", value: "Green, Fresh, Herbal & Slightly Camphor-Like" },
      { label: "Notable Compound", value: "1,8-Cineole" },
      { label: "Other Compounds", value: "α-Pinene, Limonene, Viridiflorol & Others" },
    ],
    coa: `${EO}/coa/NIAOULI-OIL-COA.pdf`,
    msds: `${EO}/MSDS/NIAOULI-OIL-MSDS.pdf`,
    formTitle: "Contact us for Wholesale Niaouli Oil Enquiries",
    enquirySource: "Enquiry from Niaouli Oil Page",
    sections: [
      {
        title: "A Simple Difference",
        paragraphs: [
          "Niaouli Oil → concentrated aromatic oil. Niaouli Hydrosol → light water-based botanical product. They can come from the same plant, but they are not interchangeable.",
          "A hydrosol also needs different care because it contains water. The finished product should have suitable preservation, microbial testing, pH checks, and stability testing.",
        ],
      },
      {
        title: "What Makes Niaouli Different?",
        paragraphs: [
          "The easiest way to understand niaouli is to compare it with a few other green-smelling oils. Niaouli feels fresh, green, and leafy, while eucalyptus is cool, sharp, and camphor-like, tea tree is earthy, fresh, and strong, rosemary is dry, herbal, and green, and lavender is soft, floral, and herbal.",
          "Niaouli has a fresh side, but it does not copy the smell of any of these oils. This makes it useful when a fragrance needs a green botanical note that is a little different.",
        ],
      },
      {
        title: "The Leaf Is the Main Character",
        paragraphs: [
          "The leaves contain the aromatic material that gives the oil its smell. If you gently crush a fresh leaf, you can notice its green scent. During steam distillation, that aromatic material is carried away with the steam and later collected as oil.",
          "The process can be pictured simply: Niaouli leaves → Steam → Aromatic vapour → Cooling → Oil separation. The water collected during this type of process can also have a softer botanical aroma.",
        ],
      },
      {
        title: "Looking Inside the Oil",
        paragraphs: [
          "Niaouli oil contains many naturally occurring compounds. 1,8-Cineole can be an important part of its composition. Other compounds such as α-pinene, limonene, and viridiflorol may also be found.",
          "The amount of each compound is not always identical. The plant source, harvest, growing conditions, and production method can all affect the final profile. This is why the actual specification of a batch is more useful than judging the oil only by its name.",
        ],
      },
      {
        title: "A Little About Its Natural Home",
        paragraphs: [
          "Niaouli trees are associated with warm regions, especially Australia and parts of the Pacific. The tree can grow in areas where the climate is warm and moisture is available.",
          "Its natural surroundings can influence the plant, which in turn can influence the aromatic material obtained from it. This gives origin an important place when comparing natural niaouli oils.",
        ],
      },
      {
        title: "Niaouli in a Fragrance Blend",
        paragraphs: ["Niaouli can change quite a lot when it is mixed with other oils."],
        lists: [
          {
            columns: 1,
            items: [
              "Niaouli + Lemon — It can become brighter",
              "Niaouli + Lavender — The green note can feel softer",
              "Niaouli + Cedarwood — It can become more woody",
              "Niaouli + Rosemary — It can move towards a stronger herbal smell",
              "Niaouli + Orange — It can take on a warmer citrus side",
            ],
          },
        ],
      },
      {
        title: "Niaouli for Different Product Ideas",
        paragraphs: [
          "The amount used depends on the finished product. Since essential oils are concentrated, proper dilution and safety checks are important.",
        ],
        lists: [
          {
            title: "Niaouli oil can be considered in",
            columns: 2,
            items: [
              "Natural fragrance blends",
              "Soap formulas",
              "Body oils",
              "Massage products",
              "Hair products",
              "Cosmetic formulations",
              "Candles",
              "Diffuser blends",
            ],
          },
        ],
      },
      {
        title: "A Useful Buying Point",
        paragraphs: [
          "A niaouli oil bulk distributor may work with customers who have very different requirements. One buyer may want the oil for fragrance. Another may need it for a cosmetic formula. Someone else may be developing a soap or home-fragrance product.",
          "The right product is therefore not simply the one with the lowest price. The botanical name, plant part, extraction method, aroma, composition, grade, and quality information should match the intended use.",
        ],
      },
    ],
    variants: [
      {
        title: "Niaouli Hydrosol | A Softer Botanical Water",
        coa: `${HYD}/COA/NIAOULI HYDROSOL COA.pdf`,
        msds: `${HYD}/MSDS/Niaouli Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Niaouli Hydrosol comes from the water side of the distillation process used to make the aromatic oil. It has a much lighter smell than the essential oil. Instead of the strong green aroma of concentrated niaouli oil, the hydrosol can have a gentle leafy and fresh character.",
          "A niaouli hydrosol bulk supplier may provide it for brands making water-based botanical products.",
        ],
        lists: [
          {
            title: "It can be explored in",
            columns: 2,
            items: [
              "Facial mists",
              "Hair mists",
              "Body sprays",
              "Botanical toners",
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
        title: "Niaouli Compared with Other Green-Smelling Oils",
        labelHeader: "Oil",
        valueHeader: "How the Aroma Feels",
        rows: [
          { label: "Niaouli", value: "Fresh, green, leafy" },
          { label: "Eucalyptus", value: "Cool, sharp, camphor-like" },
          { label: "Tea Tree", value: "Earthy, fresh, strong" },
          { label: "Rosemary", value: "Dry, herbal, green" },
          { label: "Lavender", value: "Soft, floral, herbal" },
        ],
      },
    ],
    seoTitle: "Niaouli Oil Manufacturer | Bulk Melaleuca quinquenervia Oil Supplier",
    seoDescription:
      "Buy bulk Niaouli Oil and Niaouli Hydrosol from Melaleuca quinquenervia. Fresh green essential oil for fragrance and personal care, with COA, MSDS, and worldwide shipping.",
  },

  "nutmeg-oil": {
    slug: "nutmeg-oil",
    category: "spice-oils",
    categoryName: "Spice Oils",
    name: "Nutmeg Oil",
    heading: "Nutmeg Oil | The Warm Spice Behind a Familiar Aroma",
    image: `${SP}/NUTMEG OIL.webp`,
    imageAlt: "Nutmeg Oil",
    paragraphs: [
      "Nutmeg is known as a kitchen spice, but the same seed also gives a rich aromatic oil. Nutmeg Oil is obtained from the dried seeds of Myristica fragrans, a tropical evergreen tree from the Myristicaceae family. The seed is not the same as mace, which is the red covering found around the nutmeg seed. This small difference is important because nutmeg and mace can produce oils with different natural profiles.",
      "Nutmeg oil is commonly obtained by steam distillation. It usually has a pale yellow to yellow-brown appearance and a warm, spicy, woody, slightly sweet smell. Natural compounds such as sabinene, α-pinene, β-pinene, limonene, terpinen-4-ol, and other aromatic substances may occur in the oil. The balance depends on the raw material and processing method.",
      "The smell of nutmeg oil is much deeper than a simple sweet spice fragrance. It can bring warmth to perfume blends and can sit beautifully with cinnamon, clove, ginger, orange, cedarwood, sandalwood, and other rich aromas. Nutmeg Oil is therefore used beyond the kitchen. It can be explored in fragrance, flavor, soap, personal-care, cosmetic, candle, and home-fragrance formulations where a warm spicy character is wanted.",
    ],
    specsTitle: "Nutmeg Oil at a Glance",
    specs: [
      { label: "Botanical Name", value: "Myristica fragrans" },
      { label: "Family", value: "Myristicaceae" },
      { label: "Plant Part", value: "Dried Seed" },
      { label: "Extraction", value: "Steam Distillation" },
      { label: "Color", value: "Pale Yellow to Yellow-Brown" },
      { label: "Aroma", value: "Warm, Spicy, Woody & Slightly Sweet" },
      { label: "Natural Compounds", value: "Sabinene, α-Pinene, β-Pinene, Limonene, Terpinen-4-ol & Others" },
    ],
    coa: `${SP}/COA/NUTMEG OIL COA.pdf`,
    msds: `${SP}/MSDS/NUTMEG OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Nutmeg Oil Enquiries",
    enquirySource: "Enquiry from Nutmeg Oil Page",
    sections: [
      {
        title: "Nutmeg and Mace Are Different",
        paragraphs: [
          "Nutmeg comes from the seed and is warm, spicy, and woody. Mace comes from the outer covering of the seed and can be spicy, aromatic, and slightly brighter. Nutmeg Oil is distilled from the nutmeg seed and is strong, warm, and aromatic, while Nutmeg Hydrosol comes from the distillation water and carries a much lighter botanical aroma.",
          "Knowing this difference helps avoid mixing up two products that come from the same fruit but from different parts.",
        ],
      },
      {
        title: "One Plant, Different Materials",
        paragraphs: [
          "Nutmeg gives more than one interesting raw material. The seed gives nutmeg, while the red outer covering gives mace. The essential oils from these materials are not simply interchangeable.",
          "The seed itself has a naturally rich and spicy smell. When it is distilled, the aromatic compounds become concentrated in the oil.",
          "The hydrosol sits on the other side of the process. It is mainly water and carries a much gentler aromatic profile. Because it is water-based, a finished product containing nutmeg hydrosol needs suitable preservation and microbial testing.",
        ],
      },
      {
        title: "Nutmeg Oil | From a Spice Cabinet to Fragrance Formulas",
        paragraphs: [
          "The interesting thing about nutmeg is that most people first meet it as a powder. A little nutmeg is enough to change the smell of a dish.",
          "The essential oil is different because the aromatic material is concentrated. A tiny amount can bring a strong warm-spice note to a fragrance or flavor composition. A nutmeg oil bulk manufacturer may therefore supply the oil to businesses working with several types of products rather than only food companies.",
        ],
      },
      {
        title: "What Does Nutmeg Pair Well With?",
        paragraphs: [
          "Nutmeg can behave differently depending on what sits beside it.",
          "This is where nutmeg becomes useful to a fragrance creator. It does not have to be the main smell. It can simply add warmth in the background.",
        ],
        lists: [
          {
            columns: 1,
            items: [
              "Nutmeg + Orange — Creates a warmer citrus direction",
              "Nutmeg + Ginger — Brings together two familiar spicy notes",
              "Nutmeg + Cedarwood — Adds a dry woody side",
              "Nutmeg + Sandalwood — Creates a softer, richer base",
              "Nutmeg + Clove — Produces a deeper spice profile",
              "Nutmeg + Lavender — Gives the spice a gentler floral side",
            ],
          },
        ],
      },
      {
        title: "What Is Inside Nutmeg Oil?",
        paragraphs: [
          "Nutmeg oil contains a mixture of natural aromatic compounds rather than one single ingredient.",
          "The amount of each component can vary according to the nutmeg material and production conditions. A natural oil should therefore be judged using the specification of the actual batch.",
        ],
        lists: [
          {
            title: "Some compounds that may occur include",
            columns: 2,
            items: [
              "Sabinene",
              "α-Pinene",
              "β-Pinene",
              "Limonene",
              "Terpinen-4-ol",
              "Other naturally occurring volatile compounds",
            ],
          },
        ],
      },
      {
        title: "Nutmeg Oil and Mace Oil",
        paragraphs: [
          "Nutmeg oil is obtained from the nutmeg seed and is warm and spicy, while mace oil is obtained from mace and is spicy and aromatic. One is seed-derived and the other is aril-derived, and each has a different natural composition.",
          "This is a useful distinction for manufacturers because the two oils can give different results in a finished formula.",
        ],
      },
      {
        title: "A Spice with a Tropical Origin",
        paragraphs: [
          "The nutmeg tree grows in warm tropical climates. The fruit splits open when mature, revealing the seed inside. Around the seed is the bright red covering called mace.",
          "Once the outer parts are removed and the seed is prepared, the familiar nutmeg spice is obtained. The essential oil is then produced from the suitable nutmeg material.",
          "So the journey is quite simple: Nutmeg tree → Fruit → Seed → Drying/Preparation → Distillation → Nutmeg Oil.",
        ],
      },
      {
        title: "Nutmeg in Different Product Ideas",
        paragraphs: [
          "A nutmeg oil bulk distributor may work with businesses making very different products.",
          "The grade matters here. An oil selected for one application should not automatically be assumed to be suitable for another.",
        ],
        lists: [
          {
            columns: 1,
            items: [
              "Fragrance — Nutmeg can add warmth to perfumes, colognes, soaps, and other scented products",
              "Flavor — Suitable food-grade nutmeg oil may be considered for flavor applications where regulations and product specifications allow its use",
              "Home Fragrance — Its warm character can work well in candles, diffuser blends, and seasonal fragrance concepts",
              "Personal Care — It can be explored in suitable soaps, body products, massage blends, and other formulations where its aromatic profile fits",
            ],
          },
        ],
      },
      {
        title: "A Simple Look at the Two Main Products",
        paragraphs: [
          "At Hetaksh Essential Oils, nutmeg oil can be explored as a warm spice ingredient for fragrance, flavor, personal-care, and other suitable product concepts. Its natural character makes it quite different from lighter citrus or floral oils, so it can add depth when used in the right blend.",
          "For companies looking at nutmeg oil bulk wholesale, the botanical identity, grade, composition, and intended application should be considered together rather than choosing the material by name alone.",
        ],
      },
    ],
    variants: [
      {
        title: "Nutmeg Hydrosol | A Much Softer Version of the Spice",
        coa: `${HYD}/COA/NUTMEG HYDROSOL COA.pdf`,
        msds: `${HYD}/MSDS/Nutmeg Oil Hydrosol MSDS.pdf`,
        paragraphs: [
          "Nutmeg Hydrosol is a water-based aromatic product associated with the distillation of nutmeg material. Unlike the concentrated oil, it does not have the same powerful spicy smell. Its character can be light, warm, woody, and gently aromatic.",
          "A nutmeg hydrosol bulk supplier can be relevant for brands interested in botanical water for suitable cosmetic, personal-care, or aromatic formulations.",
          "Think of the difference like this: Nutmeg Oil is bold and concentrated, while Nutmeg Hydrosol is soft and water-like. This makes the hydrosol a very different ingredient from the oil.",
        ],
        lists: [
          {
            title: "It can be considered in",
            columns: 2,
            items: [
              "Mists",
              "Sprays",
              "Toners",
              "Lotions",
              "Other water-based formulas where its mild aromatic character fits the concept",
            ],
          },
        ],
      },
    ],
    infoTables: [
      {
        title: "Nutmeg, Mace and Their Aromatic Products",
        labelHeader: "Material",
        valueHeader: "Comes From",
        extraHeaders: ["General Character"],
        rows: [
          { label: "Nutmeg", value: "Seed", extra: ["Warm, spicy, woody"] },
          { label: "Mace", value: "Outer covering of seed", extra: ["Spicy, aromatic, slightly brighter"] },
          { label: "Nutmeg Oil", value: "Distilled nutmeg seed", extra: ["Strong, warm, aromatic"] },
          { label: "Nutmeg Hydrosol", value: "Distillation water", extra: ["Much lighter botanical aroma"] },
        ],
      },
      {
        title: "Nutmeg Oil Compared with Mace Oil",
        labelHeader: "Nutmeg Oil",
        valueHeader: "Mace Oil",
        rows: [
          { label: "Obtained from nutmeg seed", value: "Obtained from mace" },
          { label: "Warm and spicy", value: "Spicy and aromatic" },
          { label: "Seed-derived", value: "Aril-derived" },
          { label: "Different natural composition", value: "Different natural composition" },
        ],
      },
      {
        title: "Nutmeg Oil and Nutmeg Hydrosol at a Glance",
        labelHeader: "Feature",
        valueHeader: "Nutmeg Oil",
        extraHeaders: ["Nutmeg Hydrosol"],
        rows: [
          { label: "Form", value: "Oil", extra: ["Water-based"] },
          { label: "Aroma", value: "Warm and strong", extra: ["Soft and light"] },
          { label: "Main Character", value: "Spicy, woody", extra: ["Mild, aromatic"] },
          { label: "Concentration", value: "Higher", extra: ["Much lower"] },
          { label: "Suitable Format", value: "Oil-based blends", extra: ["Water-based formulas"] },
          { label: "Fragrance Strength", value: "Noticeable", extra: ["Gentle"] },
        ],
      },
    ],
    seoTitle: "Nutmeg Oil Manufacturer & Exporter | Bulk Nutmeg Essential Oil",
    seoDescription:
      "Buy bulk Nutmeg Oil and Nutmeg Hydrosol from Myristica fragrans seed. Warm spice oil for fragrance, flavor, and personal care, with COA, MSDS, and worldwide shipping.",
  },

  "olive-oil": {
    slug: "olive-oil",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    name: "Olive Oil",
    heading: "Olive Oil | A Familiar Plant Oil with Many Forms and Uses",
    image: `${CO}/Olive-Oil.webp`,
    imageAlt: "Olive Oil",
    paragraphs: [
      "Olive Oil comes from the fruit of the olive tree, mainly Olea europaea. It is different from many seed oils because the oil is stored inside the fruit itself. Ripe olives are collected, cleaned, crushed, and pressed or processed to separate the oil from the fruit material. The color can range from greenish to golden yellow, depending on the olive variety, ripeness, processing, and filtration. Its smell can also change, and fresh olive oil may have green, fruity, grassy, mild, or slightly peppery notes.",
      "Oleic acid is usually the main fatty acid, which gives olive oil its well-known fatty-acid profile. It also contains smaller amounts of linoleic acid, palmitic acid, stearic acid, and other natural components. Olive oil is not just one single product. It can be found in different grades, including extra virgin olive oil, virgin olive oil, refined olive oil, and other commercial preparations. Each grade has its own production method and quality requirements.",
      "Olive Oil is used widely in food, but its value also reaches cosmetics, soaps, hair products, massage blends, personal care, and other formulations. Because the oil comes from a fruit, factors such as olive variety, harvest timing, processing conditions, storage, and exposure to heat and light can influence its final character. This makes the source and grade important when choosing olive oil for a particular purpose.",
    ],
    specsTitle: "Olive Oil at a Glance",
    layout: "specs-first",
    specs: [
      { label: "Botanical Name", value: "Olea europaea" },
      { label: "Part Used", value: "Olive Fruit" },
      { label: "Color", value: "Greenish to Golden Yellow" },
      { label: "Aroma", value: "Green, Fruity, Grassy or Mildly Peppery" },
      { label: "Main Fatty Acid", value: "Oleic Acid" },
      { label: "Other Fatty Acids", value: "Linoleic, Palmitic & Stearic Acid" },
      { label: "Common Grades", value: "Extra Virgin, Virgin, Refined & Other Commercial Preparations" },
    ],
    coa: `${CO}/coa/OLIVE OIL COA.pdf`,
    msds: `${CO}/MSDS/OLIVE OIL MSDS.pdf`,
    formTitle: "Contact us for Wholesale Olive Oil Enquiries",
    enquirySource: "Enquiry from Olive Oil Page",
    sections: [
      {
        title: "From Olive Fruit to Oil",
        paragraphs: [
          "An olive tree can live for many years and produce fruit season after season. The fruit starts green and becomes darker as it matures. Olives can be harvested at different stages, and the stage chosen can affect the resulting oil.",
          "The process starts with picking the olives. After harvesting, unwanted leaves, twigs, and dirt are removed. The olives are then cleaned before processing. The fruit is crushed into a paste, which breaks the cells that hold the oil. The paste is then mixed carefully so the small oil droplets can join together, and the oil is separated from the remaining water and solid material.",
          "A simple picture of the process is: Olive tree → Olives → Cleaning → Crushing → Oil separation → Filtration → Storage. The exact production method depends on the type and grade of oil being made.",
        ],
      },
      {
        title: "Why Harvest Time Matters",
        paragraphs: [
          "An olive picked early can have a greener character and a different natural composition from a fully mature olive. A later harvest may give a softer and more rounded oil.",
          "Neither description tells us everything about quality on its own. The variety, production method, handling, and intended grade all need to be considered together. This is why an olive oil bulk manufacturer may work with several specifications rather than one standard product.",
        ],
      },
      {
        title: "Olive Oil Grades | The Name Tells Part of the Story",
        paragraphs: [
          "One of the most important things about olive oil is that different grades should not be treated as identical. Extra virgin, virgin, refined, and blended olive oils each have their own production method and quality requirements.",
          "<b>Virgin Olive Oil</b> is also obtained through mechanical methods but has different quality requirements from extra virgin olive oil. Its flavor and aroma can be less intense depending on the product.",
          "The exact legal definitions and requirements can differ depending on the market, so the applicable standard should always be checked.",
        ],
      },
      {
        title: "Olive Oil in Food",
        paragraphs: [
          "Food is where most people first come across olive oil. It can be used in cooking, salad dressings, sauces, marinades, bakery products, and many other food preparations. But different grades are suited to different purposes.",
          "Extra virgin olive oil is often chosen when the natural flavor of the oil is meant to be noticed. A more neutral olive-oil product may be preferred when a strong olive taste is not wanted.",
          "The cooking method also matters. Heat, air, light, and time can affect the quality of an oil, so proper storage is important.",
        ],
      },
      {
        title: "Olive Oil in Cosmetics",
        paragraphs: [
          "Olive oil also has a long place in personal-care products.",
          "An olive oil bulk distributor may supply the oil to cosmetic manufacturers, soap makers, personal-care brands, and food businesses, but the required grade can be different for each application. A food product and a cosmetic raw material should not automatically be treated as interchangeable.",
        ],
        lists: [
          {
            title: "It can be used as a plant-based oil in",
            columns: 2,
            items: [
              "Body oils",
              "Creams",
              "Lotions",
              "Balms",
              "Soaps",
              "Hair oils",
              "Hair masks",
              "Massage blends",
              "Cleansing products",
            ],
          },
        ],
      },
      {
        title: "What Makes Olive Oil Special?",
        paragraphs: [
          "Olive oil has a fatty-acid profile that is different from many common vegetable oils. Oleic acid is usually its main fatty acid.",
          "The oil may also contain naturally occurring minor components, including certain phenolic compounds and other unsaponifiable materials, especially in less-refined olive oils. The exact profile depends on the olive variety and processing method.",
        ],
        lists: [
          {
            title: "Other naturally occurring fatty acids can include",
            columns: 2,
            items: [
              "Linoleic acid",
              "Palmitic acid",
              "Stearic acid",
              "Palmitoleic acid",
              "Other minor fatty acids",
            ],
          },
        ],
      },
      {
        title: "Olive Oil vs Other Common Plant Oils",
        paragraphs: [
          "Olive oil sits apart from coconut, sunflower, sesame, and almond oil in one simple way: olive oil comes from a fruit, while many familiar vegetable oils come from seeds or nuts.",
        ],
      },
      {
        title: "Olive Oil for Hair and Skin Products",
        paragraphs: [
          "An olive oil bulk supplier can provide the oil for different beauty formulations. In hair products, it may be included in hair oils, conditioners, masks, creams, and other products where a richer plant-oil feel is wanted. In skincare, it can be used in body oils, creams, cleansing products, soaps, and balms.",
          "The final texture depends on the full recipe. For example, mixing olive oil with a lighter oil can create a different feel from using olive oil alone. Jojoba, sunflower, almond, grapeseed, and other carrier oils can all behave differently when blended with olive oil. This gives formulators plenty of room to create different textures.",
        ],
      },
      {
        title: "The Color of Olive Oil Can Tell a Small Part of the Story",
        paragraphs: [
          "Olive oil is not always the same color. It can be greenish, yellow, golden, or somewhere between these shades. Green color can come from natural pigments in the olives, and as olives mature and the oil is processed, the color can change.",
          "But color alone should not be used to decide whether one olive oil is better than another. A laboratory specification, grade, sensory profile, and production details provide much more useful information.",
        ],
      },
      {
        title: "Why Storage Matters",
        paragraphs: [
          "Olive oil is a natural product, and its quality can be affected by its surroundings. Too much heat is not helpful. Strong light can also affect the oil. Air exposure can lead to oxidation over time.",
          "For this reason, olive oil is generally kept in clean, suitable containers away from excessive heat, light, and unnecessary exposure to air. An olive oil bulk exporter may also need to consider the container type and transportation conditions when sending the product over long distances. The right storage conditions help the oil retain its intended characteristics for longer.",
        ],
      },
      {
        title: "Olive Oil in Different Industries",
        paragraphs: [
          "Olive oil can move across several industries because the same basic plant oil can be formulated in different ways.",
          "For olive oil bulk wholesale, the first question should be what the oil will be used for. That helps determine which grade and specification are appropriate.",
          "At Hetaksh Essential Oils, olive oil can be considered according to the required grade, source, application, and product specifications, rather than treating every olive oil as one identical material.",
        ],
      },
    ],
    variants: [
      {
        title: "Extra Virgin Olive Oil",
        coa: `${CO}/coa/EXTRA-VIRGIN-OLIVE-OIL-COA.pdf`,
        msds: `${CO}/MSDS/OLIVE OIL MSDS.pdf`,
        paragraphs: [
          "Extra virgin olive oil is obtained using approved mechanical methods and has to meet specific chemical and sensory requirements. It is generally associated with a fresh olive taste and aroma.",
          "Depending on the olive variety and harvest, it can taste fruity, grassy, bitter, or peppery. A separate extra virgin olive oil page is also available for buyers looking specifically for that grade.",
        ],
      },
      {
        title: "Refined Olive Oil",
        coa: `${PP}/olive-oil/OLIVE OIL (REFINED) COA.pdf`,
        msds: `${PP}/olive-oil/Olive OIL MSDS.pdf`,
        paragraphs: [
          "Refined olive oil undergoes processing designed to remove certain undesirable characteristics. It generally has a much milder smell and taste than virgin oils.",
          "It may then be blended with other olive oils depending on the commercial product. It can be useful where a more neutral olive oil is wanted.",
        ],
      },
      {
        title: "Pomace Olive Oil",
        coa: `${PP}/olive-oil/OLIVE OIL (POMACE) COA.pdf`,
        msds: `${PP}/olive-oil/Olive OIL MSDS.pdf`,
        paragraphs: [
          "Pomace olive oil is a commercial olive-oil preparation associated with remaining olive fruit material after the first oil has been separated. The exact grade and specification should be checked before purchase.",
        ],
      },
    ],
    infoTables: [
      {
        title: "Olive Oil Grades | A Simple Comparison",
        labelHeader: "Type",
        valueHeader: "General Character",
        rows: [
          { label: "Extra Virgin Olive Oil", value: "Fruity, fresh, green or peppery" },
          { label: "Virgin Olive Oil", value: "Natural olive character" },
          { label: "Refined Olive Oil", value: "Mild and more neutral" },
          { label: "Olive Oil Blends", value: "Depends on the blend" },
        ],
      },
      {
        title: "Olive Oil Compared with Other Common Plant Oils",
        labelHeader: "Oil",
        valueHeader: "Main Source",
        extraHeaders: ["General Character"],
        rows: [
          { label: "Olive Oil", value: "Olive fruit", extra: ["Fruity, mild to green"] },
          { label: "Coconut Oil", value: "Coconut flesh", extra: ["Rich, creamy"] },
          { label: "Sunflower Oil", value: "Sunflower seeds", extra: ["Light and mild"] },
          { label: "Sesame Oil", value: "Sesame seeds", extra: ["Nutty and distinctive"] },
          { label: "Almond Oil", value: "Almond kernels", extra: ["Soft and mildly nutty"] },
        ],
      },
      {
        title: "Olive Oil Across Different Industries",
        labelHeader: "Industry",
        valueHeader: "Typical Products",
        rows: [
          { label: "Food Industry", value: "Cooking oils, dressings, sauces, marinades, and other food products" },
          { label: "Cosmetic Industry", value: "Creams, lotions, cleansing products, body oils, and balms" },
          { label: "Hair Care", value: "Hair oils, masks, conditioners, and treatment products" },
          { label: "Soap Making", value: "Olive oil can be included in different soap formulations" },
          { label: "Personal Care", value: "Massage oils, body products, and other suitable formulations" },
        ],
      },
    ],
    seoTitle: "Olive Oil Bulk Manufacturer & Supplier | Extra Virgin, Refined & Pomace",
    seoDescription:
      "Buy bulk Olive Oil, Extra Virgin Olive Oil, refined olive oil, and pomace olive oil from Olea europaea fruit. COA, MSDS, and worldwide shipping.",
  },
};

export const FAQS: Record<string, FaqItem[]> = {
  "niaouli-oil": [
    {
      question: "What plant is Niaouli Oil made from?",
      answer: "Niaouli Oil is commonly obtained from Melaleuca quinquenervia, an evergreen tree from the Myrtaceae family.",
    },
    {
      question: "What does Niaouli Hydrosol smell like?",
      answer: "It has a softer version of the plant’s aroma, with light green, leafy, fresh, and herbal notes.",
    },
    {
      question: "Is Niaouli the same as Tea Tree?",
      answer: "No. Both belong to the Melaleuca group, but they are different species and have different natural compositions.",
    },
    {
      question: "Can Niaouli Oil be used in perfume and soap products?",
      answer:
        "It can be explored in suitable fragrance formulas, soaps, body products, candles, and other products where a fresh green aroma is wanted.",
    },
    {
      question: "Can Niaouli Oil be exported in bulk?",
      answer:
        "Yes. A niaouli oil bulk exporter can supply commercial quantities according to the product specification, destination requirements, and intended application.",
    },
  ],
  "nutmeg-oil": [
    {
      question: "Where does Nutmeg Oil come from?",
      answer: "It is commonly obtained from the dried seed of Myristica fragrans, the tree that produces the familiar nutmeg spice.",
    },
    {
      question: "Is Nutmeg Oil the same as Mace Oil?",
      answer:
        "No. Nutmeg oil comes from the seed, while mace oil comes from the red covering around the seed. They have different natural profiles.",
    },
    {
      question: "What does Nutmeg Hydrosol smell like?",
      answer: "It has a much lighter aroma than the essential oil. Its character may be gently warm, spicy, woody, and botanical.",
    },
    {
      question: "Can Nutmeg Oil be used in fragrance products?",
      answer:
        "Yes, suitable nutmeg oil can be explored in perfumes, soaps, candles, diffuser blends, and other aromatic products. The appropriate grade and safe usage level should be followed.",
    },
    {
      question: "Can Nutmeg Oil be purchased in commercial quantities?",
      answer:
        "Yes. Businesses can source nutmeg oil bulk quantities according to their required grade, application, specifications, and production needs.",
    },
  ],
  "olive-oil": [
    {
      question: "What is Olive Oil made from?",
      answer:
        "Olive oil is made from the fruit of the olive tree, mainly Olea europaea. The olives are processed to separate their natural oil from the rest of the fruit.",
    },
    {
      question: "Is Olive Oil a seed oil?",
      answer: "No. Olive oil is primarily a fruit oil. The oil is stored inside the olive fruit rather than inside a seed.",
    },
    {
      question: "What is the difference between Extra Virgin and Refined Olive Oil?",
      answer:
        "Extra virgin olive oil is produced using approved mechanical methods and must meet specific chemical and sensory requirements. Refined olive oil has undergone additional processing and generally has a milder flavor and aroma.",
    },
    {
      question: "Can Olive Oil be used in cosmetics and hair products?",
      answer:
        "Yes. Suitable olive oil grades can be included in creams, lotions, soaps, hair oils, masks, balms, body oils, and other personal-care formulations.",
    },
    {
      question: "What should be considered when buying Olive Oil in bulk?",
      answer:
        "The intended application should come first. Buyers can then compare the grade, botanical source, processing method, appearance, fatty-acid profile, quality specifications, packaging, and storage requirements.",
    },
  ],
};
