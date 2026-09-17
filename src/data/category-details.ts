import type { CategoryDetail } from "@/lib/types";

/**
 * Detailed product-listing content for category pages, scraped once from the
 * live site. Each category renders an intro, a "Types of …" anchor list, and a
 * paginated set of product detail blocks (composition, extraction, COA/MSDS).
 *
 * Add a category slug here to give it the live-style detailed layout.
 */
export const CATEGORY_DETAILS: Record<string, CategoryDetail> = {
  "essential-oils": {
    "intro": [
      "Essential oils are pure and natural, plant-derived compounds that capture the very essence and fragrance of the plants they are obtained from. These oils are extracted through careful processes such as steam or water distillation or mechanical methods like cold pressing. Once the aromatic complexes are obtained, they are blended with a Carrier oil to create a finished product ready for use. The extraction method plays a crucial role because Essential oils produced through chemical means are not considered authentic and may lose their beneficial properties. Sourcing from a trusted <b>Essential Oils Bulk Manufacturers</b> is important to ensure the oil’s purity and effectiveness. These oils are commonly used in aromatherapy, where they are inhaled or applied topically to interact with the body’s systems.",
      "Aromatherapy utilizes the healing properties of Essential Oils Wholesalers, helping with stress reduction, relaxation, and overall emotional balance. However, it’s important to remember that Essential oils should not be ingested, as they are highly concentrated and could cause harm if consumed. For larger scale use, it’s recommended to work with a reliable <b>Essential Oils Bulk Suppliers</b> to ensure high-quality oils. Buying from <b>Essential Oils Wholesale Suppliers</b> distributors can also offer cost-effective solutions for businesses looking to maintain both quality and quantity in their product offerings."
    ],
    "typesTitle": "Types of Essential Oils",
    "perPage": 6,
    "types": [
      {
        "id": 1,
        "label": "Bergamot Oil"
      },
      {
        "id": 2,
        "label": "Bois de Rose Oil"
      },
      {
        "id": 3,
        "label": "Cajeput Oil"
      },
      {
        "id": 4,
        "label": "Calamus Seed Oil"
      },
      {
        "id": 5,
        "label": "Cedarwood Oil"
      },
      {
        "id": 6,
        "label": "Chamomile Oil"
      },
      {
        "id": 7,
        "label": "Citronella Oil"
      },
      {
        "id": 8,
        "label": "Clary Sage Oil"
      },
      {
        "id": 9,
        "label": "Eucalyptus Oil"
      },
      {
        "id": 10,
        "label": "Frankincense Oil"
      },
      {
        "id": 11,
        "label": "Geranium Oil"
      },
      {
        "id": 12,
        "label": "Grapefruit Oil"
      },
      {
        "id": 13,
        "label": "HolyBasil Oil"
      },
      {
        "id": 14,
        "label": "Juniper Oil"
      },
      {
        "id": 15,
        "label": "Lavender Oil"
      },
      {
        "id": 16,
        "label": "Lemon Oil"
      },
      {
        "id": 17,
        "label": "Lemongrass Oil"
      },
      {
        "id": 18,
        "label": "Lime Oil"
      },
      {
        "id": 19,
        "label": "Mandarin Oil"
      },
      {
        "id": 20,
        "label": "Marjoram Oil"
      },
      {
        "id": 21,
        "label": "Myrtle Oil"
      },
      {
        "id": 22,
        "label": "Neroli Oil"
      },
      {
        "id": 23,
        "label": "Niaouli Oil"
      },
      {
        "id": 24,
        "label": "Orange Oil"
      },
      {
        "id": 25,
        "label": "Palmarosa Oil"
      },
      {
        "id": 26,
        "label": "Peppermint Oil"
      },
      {
        "id": 27,
        "label": "Petitgrain Oil"
      },
      {
        "id": 28,
        "label": "Rosemary Oil"
      },
      {
        "id": 29,
        "label": "Sage Oil"
      },
      {
        "id": 30,
        "label": "Spearmint Oil"
      },
      {
        "id": 31,
        "label": "Sweet Basil Oil"
      },
      {
        "id": 32,
        "label": "Tagetes Oil"
      },
      {
        "id": 33,
        "label": "Valerian Oil"
      },
      {
        "id": 34,
        "label": "Verbena Oil"
      },
      {
        "id": 35,
        "label": "Wintergreen Oil"
      },
      {
        "id": 36,
        "label": "Ylang Ylang Oil"
      }
    ],
    "items": [
      {
        "id": 1,
        "title": "Here Are Some Technical Details About Bergamot Oil",
        "composition": "The main compounds in Bergamot Oil are Limonene, Linalyl Acetate, Linalool, γ-terpinene and β-pinene, and in smaller quantities geranial and β-bisabolene.",
        "extraction": "Bergamot essential oil is a cold-pressed essential oil produced by cells inside the rind of a bergamot orange fruit. The oil is extracted mechanically with machines called peelers, which scrape the outside of the fruit under running water to get an emulsion channeled into centrifuges for separating the essence from the water. Its colouration ranges from almost colourless to mild yellowish green. Bergamot Essential Oil in bulk is known to help reduce anxiety and stress and thereby alleviate symptoms of depression. It  has an odor that is extremely rich and sweet-fruity, with an oily herbaceous and somewhat balsamic body and dry out.",
        "coa": "/assets/images/products/Essential-Oils/coa/BERGAMOT-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/BERGAMOT-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Bergamot-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Bergamot Oil"
      },
      {
        "id": 2,
        "title": "Here Are Some Technical Details About Bois de Rose Oil",
        "composition": "The principal constituents of Bois de Rose (Rosewood) Oil include citronellol, geraniol, and nerol.",
        "extraction": "Bois de Rose Oil (Rosewood essential oil) is steam-distilled from the wood of the rosewood tree. It ranges from nearly colorless to pale yellow and has a woody, floral, spicy aroma used in fragrance and cosmetic formulations.",
        "coa": "/assets/images/products/Essential-Oils/coa/BOIS-DE-ROSE-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/BOIS-DE-ROSE-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/BOIS-DE-ROSE-HYDROSOL.webp",
        "imageAlt": "Here Are Some Technical Details About Bois de Rose Oil"
      },
      {
        "id": 3,
        "title": "Here Are Some Technical Details About Cajeput Oil",
        "composition": "Cajeput Oil contains higher concentrations of 1,8 Cineole(Eucalyptol), limonene and alpha-terpineol. The oil is a pale yellow clear liquid agreeable and camphorous odor.",
        "extraction": "Cajeput Oil is produced by steam distillation of fresh leaves and twigs of the cajeput tree (Melaleuca leucadendra). Cajeput oil is used to treat cough, cold, and bacterial and fungal infections & used in makinghair care products to treat dandruff and itchy scalp. Cajeput Essential oil is also a natural insect repellent, and used in making disinfectants. Cajeput Essential Oil has a fresh, camphorous aroma that is similar to the scents of camphor, rosemary, and cardamom, with a subtle fruity note; a middle note with a medium strong aroma.",
        "coa": "/assets/images/products/Essential-Oils/coa/CAJEPUT-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/Cajeput-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Cajeput-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Cajeput Oil"
      },
      {
        "id": 4,
        "title": "Here Are Some Technical Details About Calamus Oil",
        "composition": "Calamus Oil composed mainly of some major compounds like α- and β-pinene, α-terpineol, β-caryophyllene, linalool, α-bisabolol, α-asarone, β-asarone.",
        "extraction": "Calamus Oil is extracted by steam distillation. The rhizome is separated from the leaves and dried in shade. The oil is either extracted from fresh roots or unpeeled dried roots. Calamus Oil has a strong characteristic odor and is Yellowish to brownish coloured liquid. Calamus Essential Oil contains powerful anti-inflammatory compounds that are known to help reduce pain, redness, and swelling due to inflammation.",
        "coa": "/assets/images/products/Essential-Oils/coa/CALAMUS-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/CALAMUS-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Calamus-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Calamus Oil"
      },
      {
        "id": 5,
        "title": "Here Are Some Technical Details About Cedarwood Oil",
        "composition": "In the wood oil the major compounds include Thujopsene (= widdrene),Cedrol & ∀-cedrene. Cedarwood Oil has a woody scent with an undertone of citrus. Cedarwood has balsamic undertones and a camphorous odor.",
        "extraction": "Cedarwood essential oil is extracted through the process of steam distillation from the wood pieces of the cedar wood tree, which has the scientific name Juniperus virginiana (also known as Cedrus doedara, Cedrus atlantica, and Cedrus libani, depending on the regions where they are found). It isused in cosmetics, perfumes, home odorants, and as an insect control agent and must be kept in a well-fitted container, in cool and dark place.",
        "coa": "/assets/images/products/Essential-Oils/coa/CEDARWOOD-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/CEDARWOOD-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Cedarwood-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Cedarwood Oil"
      },
      {
        "id": 6,
        "title": "Here Are Some Technical Details About Chamomile Oil",
        "composition": "One of the Primary bioactive components of Chamomile is levomenol (α-bisabolol) and its oxides. Other components of Chamomile include Apigenin, Azulenes, Farnesene, Spathuleno, and Spiroethers.",
        "extraction": "Chamomile essential oil is extracted via steam distillation of the inflorescences (flowers). The flowers are placed in a still where hot steam is then applied. The oil is free flowing liquid of pale greenish blue color. Chamomile (Matricaria chamomilla L.) is a well-known medicinal plant species from the Asteraceae family often referred to as the “star among medicinal species.” Nowadays it is a highly Favoured and much used medicinal plant in folk and traditional medicine. It has a distinctive scent that is intensely sweet, slightly spicy, and herbaceous, with a fresh fruity undertone.",
        "coa": "/assets/images/products/Essential-Oils/coa/CHAMOMILE-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/CHAMOMILE-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Chamomile-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Chamomile Oil"
      },
      {
        "id": 7,
        "title": "Here Are Some Technical Details About Citronella Oil",
        "composition": "Citronellol, Citronellal, Limonene and Geraniol are the major components of oil of Citronella.",
        "extraction": "The Pure Essential Oils of Citronella is one of the most popular oils derived through the traditional process of steam distillation from Cymbopogon Nardus, a certain type of lemon grass. The oil is taken out from the thin leaves of Cymbopogon. It is a pale yellow to yellowish brown color liquid having sweet and refreshing aroma with thin consistency. Apart from this, Citronella oil is one of the most widely used oils in aromatherapy treatments that comes with numerous health, skin and hair care benefits. This bulk pure essential oils is commonly used as an insect repellent, but studies have shown that it may also have antifungal qualities and aid in wound healing",
        "coa": "/assets/images/products/Essential-Oils/coa/CITRONELLA-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/CITRONELLA-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Citronella-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Citronella Oil"
      },
      {
        "id": 8,
        "title": "Here Are Some Technical Details About Clary Sage Oil",
        "composition": "Linalool , Linalyl acetate ,Geranyl acetate are some of the main components of Clary Sage Oil.",
        "extraction": "The pale yellowish color Clary Sage Oil is derived through the extensive method of steam distillation from the buds and leaves of the Clary Sage plant (commonly known as clary, clary wort, muscatel sage, clear eye, see bright and eye bright). It is a biennial or short-lived herbaceous perennial plant of the genus Salvia. This pure essential oils bulk is highly enriched with intense therapeutic properties such as antidepressant, anticonvulsive, antispasmodic, antiseptic, aphrodisiac, astringent, carminative",
        "coa": "/assets/images/products/Essential-Oils/coa/CLARY-SAGE-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/CLARY-SAGE-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Clary-Sage-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Clary Sage Oil"
      },
      {
        "id": 9,
        "title": "Here Are Some Technical Details About Eucalyptus Oil",
        "composition": "The major constituent of Eucalyptus leaves essential oil is Cineole Content.",
        "extraction": "Eucalyptus oil, also known as Nilgiri oil, is a light yellow color liquid derived from the fresh leaves of the tall, evergreen eucalyptus tree (botanically known as Eucalyptus Globulus) through the extensive process of steam distillation. The essential oil derived from this Eucalyptus tree has a long history of its wide application such as insect repellent, antiseptic, pharmaceutical, fragrance, flavoring and industrial uses. It is soluble in alcohol and oils & Insoluble in water.",
        "coa": "/assets/images/products/Essential-Oils/coa/EUCALYPTUS-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/EUCALYPTUS-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Eucaluptus-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Eucalyptus Oil"
      },
      {
        "id": 10,
        "title": "Here Are Some Technical Details About Frankincense Oil",
        "composition": "Major components are Alpha-pinene, Thujene, Sabinene, Delta-3-carene, Myrcene, Limonene.",
        "extraction": "The essential oil of Frankincense is extracted from the Oleo gum resins of Frankincense plant (botanically known as Boswellia Frereana) of the Burseraceae family through the process of steam distillation. Its warm, sweet and balsamic whiff has stimulating and elevating effect to the mind. Frankincense is often called the King of Oils. This is likely because of its versatility and wide range of therapeutic benefits such as astringent, carminative, antiseptic, disinfectant, digestive, diuretic, expectorant, sedative",
        "coa": "/assets/images/products/Essential-Oils/coa/FRANKINCENSE-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/FRANKINCENSE-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Frankincense-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Frankincense Oil"
      },
      {
        "id": 11,
        "title": "Here Are Some Technical Details About Geranium Oil",
        "composition": "The major constituents are Geranyl and Citronellyl Esters. Other esters found in Geranium oil include Geranyl acetate, Geranyl tiglate, Citronellyl formate, and Citronellyl acetate.",
        "extraction": "The essential oil of Geranium is a colourless liquid but have a light greenish shade derived through the extensive process of steam distillation from the stems and leaves of the plant Pelargonium odorantissimum (belongs to the Geraniaceae family). The oil has a distinct sweet aroma similar of roses. Its sweet, floral fragrance soothes, calms and relaxes both body and mind.",
        "coa": "/assets/images/products/Essential-Oils/coa/GERANIUM-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/GERANIUM-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Geranium-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Geranium Oil"
      },
      {
        "id": 12,
        "title": "Here Are Some Technical Details About Grapefruit Oil",
        "composition": "Limonene followed by β-myrcene, α-pinene and sabinene are some of the major components",
        "extraction": "Grapefruit Essential Oil is an Orange yellow to dark yellowish color liquid with a watery viscosity. It is derived from the peels of Citrus Racemosa (also known as Citrus Maxima) of the Rutaceae family through the process of cold pressing extraction method. Another process which can be used to extract Grapefruit Oil is steam distillation. The odor is pleasant orange like with a rich Neroli reflection and Floral undertone. This bulk essential oil suppliers can help with everything from blood pressure reduction to relieving stress to treating and protecting your skin. Grapefruit essential oil has numerous therapeutic properties",
        "coa": "/assets/images/products/Essential-Oils/coa/GRAPEFRUIT-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/GRAPEFRUIT-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Grapefruit-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Grapefruit Oil"
      },
      {
        "id": 13,
        "title": "Here Are Some Technical Details About Holy Basil Oil",
        "composition": "Eugenol and Caryophyllene are major components in Holy Basil Oil.",
        "extraction": "Holy Basil Essential Oil is obtained by the steam distillation of the over ground parts of the Ocimum sanctum plant. The product is pale yellow to yellowish in color, with the sweet and pungent characterisic odor of Eugenol. It is widely known across the Indian subcontinent as a medicinal plant and a herbal tea. It is also an essential ingredient in most Ayurvedic concoctions. This oil is mainly used in medicinal and flavoring preparations.",
        "coa": "/assets/images/products/Essential-Oils/coa/HOLY-BASIL-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/HOLY-BASIL-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Basil-Oil-Holy.webp",
        "imageAlt": "Here Are Some Technical Details About Holy Basil Oil"
      },
      {
        "id": 14,
        "title": "Here Are Some Technical Details About Juniper Oil",
        "composition": "The main constituents of Juniper Berry Essential Oil are a-Pinene, Sabinene, B-Myrcene, Terpinene-4-ol, Limonene, b-Pinene, Gamma-Terpinene, Delta 3 Carene, and a-Terpinene",
        "extraction": "Juniper Herb is an evergreen shrub belonging to the family of Cupressaceae. Juniper tree wood, berries, and leaves are steam distilled to extract the essential oil. It is a colourless to pale yellow liquid, with Fresh, warm, rich-balsamic, woody-sweet and characteristic. Juniper Berry Essential Oil is highly beneficial for use on skin that is troubled by inflammation. Antioxidants such as a-Pinene, b-Pinene, and Sabine act as a natural healer that detoxifies congested skin.",
        "coa": "/assets/images/products/Essential-Oils/coa/JUNIPER-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/JUNIPER-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Juniper-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Juniper Oil"
      },
      {
        "id": 15,
        "title": "Here Are Some Technical Details About Lavender Oil",
        "composition": "Lavender essential oils contain linalool, linalyl acetate, 8-cineole-ocimene, terpinen-4-ol and camphor as the main components.",
        "extraction": "Lavender oil is an essential oil obtained by distillation from the flower spikes of certain species of lavender. It is Almost colourless to slightly yellow with Fresh, Sweet, Green, Flowery note etc.Lavender has cosmetic, odourous, and medicinal uses, demonstrating soothing, sedative activities in each form, which can include oils, gels, lotions, soaps, shampoos, sprays, and candle making.",
        "coa": "/assets/images/products/Essential-Oils/coa/LAVENDER-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/LAVENDER-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Lavender-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Lavender Oil"
      },
      {
        "id": 16,
        "title": "Here Are Some Technical Details About Lemongrass Oil",
        "composition": "Some of the Components for Lemongrass Oil are Citral (mixture of geranial and neral), Isoneral, Isogeranial, Geraniol, Geranyl acetate, Citronellal, Citronellol, Germacrene-D, and ElemoL.",
        "extraction": "Lemongrass Essential Oil is derived from the steam distillation of the fresh or partly dried lemongrass leaves. Lemongrass is known by the scientific names Cymbopogoncitratus or Andropogoncitratus. Lemongrass oil ranges in color from bright, yellow to dark yellow liquid. and exudes a strong, sharp, fresh grassy lemon type, herbaceous tea like odor.",
        "coa": "/assets/images/products/Essential-Oils/coa/LEMONGRASS-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/LEMONGRASS-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Lemongrass-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Lemongrass Oil"
      },
      {
        "id": 17,
        "title": "Here Are Some Technical Details About Lemon Oil",
        "composition": "Lemon oil contains mainly Limonene,Citral,Citronellal and Geranyl acetate.",
        "extraction": "Lemon oil is a transparent liquid that ranges in color from nearly colourless to pale yellow. It is extracted by Steam Distillation process.Lemon oil is extracted from the lemon peel, which is the nutrient-dense part of the fruit. Lemon Oil is a potent antioxidant, which can help reduce inflammation and fight bacteria",
        "coa": "/assets/images/products/Essential-Oils/coa/LEMON-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/LEMON-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Lemon-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Lemon Oil"
      },
      {
        "id": 18,
        "title": "Here Are Some Technical Details About Lime Oil",
        "composition": "Lime oil consists mainly of limonene, α-terpineol, terpinen-4-ol, 1,4-cineole, 1,8-cineole, β-pinene, p-cymene, β- bisabolene, citral,",
        "extraction": "Steam Distillation is the most widely used methods for the extraction of Lime Oil. Lime Oil is Pale yellow coloured fluid liquid with strong odor and taste of fresh Lime. The Lime Essential Oil is commonly used in aromatherapy. Also, the oil is used in food, cosmetics, and as a flavoring agent in foods and medicines.",
        "coa": "/assets/images/products/Essential-Oils/coa/LIME-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/LIME-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Lime-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Lime Oil"
      },
      {
        "id": 19,
        "title": "Here Are Some Technical Details About Mandarin Oil",
        "composition": "The major components of Mandarin Essential oil are limonene  and γ-terpinene.",
        "extraction": "Mandarin is known as Citrus Reticulata Oil. The Mandarin Oil is extracted from the peel of mandarins via steam distillation. This oil is yellowish in color with pleasant sweet, resembling outer peel of Mandarin. The mandarin Essential oil has powerful properties: calming, relaxing, antispasmodic, circulatory, slightly antiseptic and anti-fungal.",
        "coa": "/assets/images/products/Essential-Oils/coa/MANDARIN-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/MANDARIN-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Mandarin-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Mandarin Oil"
      },
      {
        "id": 20,
        "title": "Here Are Some Technical Details About Marjoram Oil",
        "composition": "Carvacrol, thymol, terpinen-4-ol, trans-caryophyllene, gamma-terpinene, and p-cymene  represent major contributing compounds of this essential oil.",
        "extraction": "Marjoram oil is extracted from the fresh and dried leaves and flowering tops of the plant by steam distillation. The oil that is obtained has Fresh herbaceous sweet characteristic odor and ranges from Pale yellow to greenish yellow. Marjoram is an excellent source of antioxidants, including tannins, luteolin, and apigenin. Marjoram can be taken internally to help support a healthy cardiovascular and immune system.",
        "coa": "/assets/images/products/Essential-Oils/coa/MARJORAM-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/MARJORAM-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Marjoram-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Marjoram Oil"
      },
      {
        "id": 21,
        "title": "Here Are Some Technical Details About Myrtle Oil",
        "composition": "High content of limonene + 1,8-cineole and myrtenyl acetate, α-pinene and linalool are sme of the contents for Myrtle Oil",
        "extraction": "Myrtle Oil commonly known as Myrtle Essential oil is a pale yellow to dark yellow liquid that has a fresh, herbal, aromatic and camphoraceous characteristic odor. It is derived from the plant Myrtus Communis L. The essential oil of Myrtus communis is an antiseptic and astringent. Myrtle essential oil has been found to effectively clear up acne and other skin problems. It also helps with stress, frustration, anger, grief, despair, and exhaustion. It should be stored in a well-fitting container in a cool, dark place.",
        "coa": "/assets/images/products/Essential-Oils/coa/MYRTLE-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/MYRTLE-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Myrtle-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Myrtle Oil"
      },
      {
        "id": 22,
        "title": "Here Are Some Technical Details About Neroli Oil",
        "composition": "Some of the major components of neroli essential oil include linalool , linalyl acetate , nerolidol , E-farnesol , α-terpineol  and limonene",
        "extraction": "Neroli essential oil is also known as Orange blossom oil and the essential oil is extracted from the flowers of bitter orange trees (Citrus aurantium subsp. amara or Bigaradia). Neroli Oil is extracted from flowers by Steam distillation process. The aroma of Neroli oil is sweet, fresh, green, and reminiscent of Neroli blossoms. The color is pale yellow to dark yellowish orange and the viscosity is watery. Neroli has been shown to be an effective and therapeutic choice for the management of pain and inflammation. It has both antioxidant and anti-microbial properties.",
        "coa": "/assets/images/products/Essential-Oils/coa/NEROLI-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/NEROLI-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Neroli-oil.webp",
        "imageAlt": "Here Are Some Technical Details About Neroli Oil"
      },
      {
        "id": 23,
        "title": "Here Are Some Technical Details About Niaouli Oil",
        "composition": "The major compounds present in this oil are 1,8-cineole, nerolidol , alloaromadendrene  and α-terpineol which are used in the pharmaceutical industry and the manufacturing of perfumes and cosmetics.",
        "extraction": "Niaouli essential oil is extracted via steam distillation of the leaves and green branchlets. Nerolina is grown in plantations, wild harvesting also occurs.Niaouli oil has a penetrating, pleasant, sweet, fresh aroma with similar nuances to Eucalyptus. Niaouli stimulates the immune system and treats sinusitis and rhinitis. As a healing agent, niaouli essential oil protects and restores the skin and is antiseptic, antiviral, antibacterial and antimycotic.",
        "coa": "/assets/images/products/Essential-Oils/coa/NIAOULI-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/NIAOULI-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Niaouli-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Niaouli Oil"
      },
      {
        "id": 24,
        "title": "Here Are Some Technical Details About Orange Oil",
        "composition": "The main chemical constituents of Orange Oil are: Limonene, Monoterpene Hydrocarbons (β- Myrcene and α-Pinene), Alcohols (Citronellol, Geraniol, and Linalool), and Aldehydes (Neral)",
        "extraction": "Orange essential oil is extracted from the Citrus Aurantium. The extraction method of the orange peel essential oil comprises carrying out steam distillation on the raw material followed by microwave processing, and refining the orange peel essential oil by supercritical CO2. Orange essential oil is astringent and antiseptic in nature; it acts as a natural cleanser to deeply purify and detoxify the skin",
        "coa": "/assets/images/products/Essential-Oils/coa/ORANGE-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/ORANGE-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Orange-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Orange Oil"
      },
      {
        "id": 25,
        "title": "Here Are Some Technical Details About Palmarosa Oil",
        "composition": "Palmarosa (Cymbopogon martinii) has high value essential oils in their leaves and inflorescence, and geraniol is the major constituent of the Oil",
        "extraction": "Palmarosa oil is an essential oil that derives from the Cymbopogon martini plant, a type of evergreen tall grass commonly found in East Asia. Palmarosa grass is extracted using steam distillation of dried grass which is harvested before flowering. It appears as a free-flowing liquid and  is pale yellow in color. The oil has a sweet and floral fragrance with a rose like undertone. Palmarosa Essential Oil can be helpful for balancing dry, oily and combination skin types. Palmarosa can also be used to support mood during emotional vulnerability",
        "coa": "/assets/images/products/Essential-Oils/coa/PALMAROSA-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/PALMAROSA-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Palmarosa-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Palmarosa Oil"
      },
      {
        "id": 26,
        "title": "Here Are Some Technical Details About Peppermint Oil",
        "composition": "Some Active constituents of peppermint oil include Menthol, menthone,Menthofuran and Menthyl Acetate",
        "extraction": "Peppermint essential oil is a colourless to pale yellow liquid liquid. This essential oils bulk wholesale is derived from Mentha Piperita L. Peppermint oil can be utilized in a variety of ways. Peppermint extract is obtained through steam Distillation. In aromatherapy, peppermint oil is promoted for treating coughs and colds, reducing pain, improving mental function, and reducing stress.",
        "coa": "/assets/images/products/Essential-Oils/coa/PEPPERMINT-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/PEPPERMINT-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Peppermint-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Peppermint Oil"
      },
      {
        "id": 27,
        "title": "Here Are Some Technical Details About Petitgrain Oil",
        "composition": "The main components of petitgrain oil are geraniol, linalool, nerol, y-terpineol, geranyl acetate, linalyl acetate, myrcene, neryl acetate and trans-ocimene.",
        "extraction": "The essential oil is steam distilled from the flowering tops and leaves of the  bitter orange tree (Citrus aurantium) .Steam-distilled oils are very pure and natural, as no chemicals are used. The Petitgrain oil is therefore used to treat respiratory infections, coughs, and asthma. Furthermore, it is also effective in treating Rheumatoid induced by stress, and chronic inflammatory pain.",
        "coa": "/assets/images/products/Essential-Oils/coa/PETITGRAIN-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/PETITGRAIN-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Petitgrain-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Petitgrain Oil"
      },
      {
        "id": 28,
        "title": "Here Are Some Technical Details About Rosemary Oil",
        "composition": "The major constituents in the essential oil were found to be 1,8-cineol %, camphor , α-pinene , limonene , camphene, and linalool.",
        "extraction": "Essential oil of rosemary, known as rosemary oil, is obtained by steam distillation method of the fresh leaves and twigs. This Oil is a fluid liquid with pale yellow color. The odor is strong, fresh, woody-herbaceous, somewhat minty-forest like odor. The fresh notes vanish quickly yielding to a clean woody-balsamic body note which tones out in a dry herbaceous but very pleasant & tenacious bitter-sweet note. Rosemary oil is an aromatic oil that can be diffused as an aromatherapy treatment or applied to the skin. Some study findings suggest that rosemary oil treatments may promote hair growth, improve energy levels, and reduce pain.",
        "coa": "/assets/images/products/Essential-Oils/coa/ROSEMARY-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/ROSEMARY-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Rosemary-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Rosemary Oil"
      },
      {
        "id": 29,
        "title": "Here Are Some Technical Details About Sage Oil",
        "composition": "Sage oil is generally characterized by α-thujone, Camphor, α-pinene, β-thujone, cineole, camphene.",
        "extraction": "Sage Essential Oil is extracted from the leaves of Slavia Officinalis, through Steam Distillation. The oil has a strong balsamic and characteristic odor. It is pale yellow in color. Though Sage Oil has historically been used largely to address complaints related to digestion, it continues to be used in a vast array of versatile applications including skin care, hair care, overall health care, and in the making of cosmetics and fragrant soaps.",
        "coa": "/assets/images/products/Essential-Oils/coa/SAGE-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/SAGE OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Sage-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Sage Oil"
      },
      {
        "id": 30,
        "title": "Here Are Some Technical Details About Spearmint Oil",
        "composition": "The major components of Spearmint oil are Carvone and Limonene, which make up approximately 70-90% of the oil",
        "extraction": "Spearmint essential oil is a pale yellow fluid liquid with a minty flavor and a pleasant odor. Spearmint oil is an essential oil that is extracted from the leaves of the spearmint plant (Mentha Spicata) using steam distillation. It has a fresh, minty scent and is commonly used in the food, cosmetic, and pharmaceutical industries for its flavoring, fragrance, and therapeutic properties. It also has antimicrobial and anti-inflammatory properties, making it useful for treating skin conditions, such as acne and eczema.",
        "coa": "/assets/images/products/Essential-Oils/coa/SPEARMINT-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/SPEARMINT-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Spearmint-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Spearmint Oil"
      },
      {
        "id": 31,
        "title": "Here Are Some Technical Details About Sweet Basil Oil",
        "composition": "The major constituents were found to be methyl cinnamate , linalool , β-elemene  and camphor.",
        "extraction": "Sweet Basil Oil is obtained from Ocimum basilicum herb, an annual plant that belongs to Lamiaceae species of plant through Steam distillation method. The odor is aromatic, warm, and distinct. Its liquid color might range from pale yellow to dark yellow. Sweet Basil Essential Oil is reputed to ease minor skin irritations, cramps, joint pain, muscular aches, spasms, gout, flatulence, and exhaustion. It is also said to enhance immune function, protect against infection, reduce water retention, and stabilize irregular menstruation.",
        "coa": "/assets/images/products/Essential-Oils/coa/SWEET-BASIL-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/SWEET-BASIL-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/basil-oil-sweet.webp",
        "imageAlt": "Here Are Some Technical Details About Sweet Basil Oil"
      },
      {
        "id": 32,
        "title": "Here Are Some Technical Details About Tagetes Oil",
        "composition": "Main constituents of this essential oil are trans-ocimene, I-verbenone , limonene , and tagetone.",
        "extraction": "Tagetes Oil is extracted by the steam distillation method from the flowers, stalks and leaves of the tagetes.Appearance is Yellow to reddish orange. Tagetes is used for digestive tract problems including poor appetite, gas, stomach pain, colic, intestinal worms, and dysentery. It is also used for coughs, colds, mumps, fluid retention, and sore eyes; and causing sweating. Tagetes essential oil has a fresh and herbaceous aroma with powerful notes of green apple and a subtle floral undertone.",
        "coa": "/assets/images/products/Essential-Oils/coa/TAGETES-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/Tagetes-Oil-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Tagetes-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Tagetes Oil"
      },
      {
        "id": 33,
        "title": "Here Are Some Technical Details About Valerian Oil",
        "composition": "Valerian contains various compounds, including essential oil and its sesquiterpenoids (valerenic acid), iridoid (valepotriates: isovaltrate and valtrate), amino acids (GABA, tyrosine, arginine), alkaloids, phenolic acids, and flavonoids",
        "extraction": "Valerian essential oil is the common name for the essential oil extracted from the underground parts of the plant Valeriana officinalis L. Valerian essential oil is obtained by directing steam through the underground parts of the plant. This oil is fluid liquid olive green to olive brown in color and has Characteristic strong, woody, herbaceous odor.Valerian oil is a very effective stimulant, carminative and antispasmodic. This oil lowers and regulates the blood pressure",
        "coa": "/assets/images/products/Essential-Oils/coa/VALERIAN-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/VALERIAN-ROOT-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Valerian-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Valerian Oil"
      },
      {
        "id": 34,
        "title": "Here Are Some Technical Details About Verbena Oil",
        "composition": "The major compounds are citral (neral and geranial), and these are accompanied by limonene, cineole, geraniol, β-caryophyllene and spathulenol",
        "extraction": "The oil is extracted from a perennial herb by steam distillation. Verbena starts with a refreshing, lemon-like scent that gradually transforms into a sweet, fruit aroma and color is Slightly yellow to dark yellow. Valerian oil is a very effective stimulant, carminative and antispasmodic. This oil lowers and regulates the blood pressure.",
        "coa": "/assets/images/products/Essential-Oils/coa/VERBENA-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/VERBENA-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Verbena-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Verbena Oil"
      },
      {
        "id": 35,
        "title": "Here Are Some Technical Details About Wintergreen Oil",
        "composition": "The major compound in Wintergreen essential oil is Methyl salicylate, an ester of salicylic acid which was above 99%",
        "extraction": "Wintergreen also known as Gandhapura. Pure essential oil of Wintergreen is extracted from leaves by steam distillation of the Wintergreen plant. The leaves and oil are used to make medicine. Wintergreen is used for headache and other types of pain, fever, gas (flatulence), and other conditions, but there is no good scientific evidence to support these uses.",
        "coa": "/assets/images/products/Essential-Oils/coa/WINTERGREEN-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/WINTERGREEN-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Wintergreen-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Wintergreen Oil"
      },
      {
        "id": 36,
        "title": "Here Are Some Technical Details About Ylang Ylang Oil",
        "composition": "The main constituents of Ylang Ylang Essential Oil are: Linalool, Geranyl acetate, Germacrene-D, beta-Caryophyllene, Benzyl acetate, Geraniol, Methyl p-Cresol, Methyl benzoate, Geranyl acetate, Farnasene, and Benzyl benzoate.",
        "extraction": "The Essential oil of Ylang Ylang is a fluid or liquid that ranges in color from pale yellow to dark yellow. Cananga odorata is the source of this essential oil. The Ylang-Ylang essential oil is derived from the flower of the C. Odorata plant via water or water and steam distillation. Ylang Ylang Essential Oil has a wonderfully sweet, slightly fruity floral scent that fills your room with freshness and amazing aroma. The Ylang-Ylang plant has been shown to offer benefits such as reduced anxiety and better self-esteem. Lower diastolic and systolic blood pressure, improved mood, less depression, less anxiety, lower blood pressure, lower heart rate, and increased oil production in the skin and on the scalp.",
        "coa": "/assets/images/products/Essential-Oils/coa/YLANG-YLANG-OIL-COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/YLANG-YLANG-OIL-MSDS.pdf",
        "image": "/assets/images/products/Essential-Oils/Ylang_Ylang_Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Ylang Ylang Oil"
      }
    ]
  },
  "carrier-oils": {
    "intro": [
      "Carrier Oils are lipid or fatty extracts derived from the seeds of various plants. Also known as Base oils or Vegetable oils, these oils play a crucial role in aromatherapy and massage. They are utilized to dilute Essential Oils and absolutes, ensuring that these concentrated substances can be safely applied to the skin without causing irritation. The term \"Carrier oil\" reflects their function of carrying Essential oils onto the skin at a safe concentration. One of the primary methods of producing Carrier oils is cold pressing, a technique that helps retain the oils' beneficial properties. This extraction method preserves the natural nutrients, making them ideal for therapeutic applications. For businesses needing large quantities, partnering with a reliable <b>Carrier Oil Bulk Suppliers</b> ensures access to high-quality oils. Additionally, <b>Carrier Oil Bulk Manufacturers</b> can create blends that combine different properties such as viscosity, absorbability, lubrication, and aroma. This versatility makes them essential in creating customized formulations for individual needs. Whether for skincare or therapeutic purposes, selecting the right <b>Carrier Oil Wholesale Suppliers</b> is vital for maintaining product quality. Understanding these oils' roles and properties is crucial for anyone involved in holistic health practices."
    ],
    "typesTitle": "Types of Carrier Oils",
    "perPage": 6,
    "types": [
      {
        "id": 1,
        "label": "Almond Oil"
      },
      {
        "id": 2,
        "label": "Aloe Vera Oil"
      },
      {
        "id": 3,
        "label": "Amla Oil"
      },
      {
        "id": 4,
        "label": "Apricot Oil"
      },
      {
        "id": 5,
        "label": "Argan Oil"
      },
      {
        "id": 6,
        "label": "Avocado Oil"
      },
      {
        "id": 7,
        "label": "Black Cumin Seed 1%"
      },
      {
        "id": 8,
        "label": "Black Cumin Seed 3%"
      },
      {
        "id": 9,
        "label": "Black Cumin Seed 5%"
      },
      {
        "id": 10,
        "label": "Black Cumin Seed 10%"
      },
      {
        "id": 11,
        "label": "Black Currant Oil"
      },
      {
        "id": 12,
        "label": "Borage Oil"
      },
      {
        "id": 13,
        "label": "Calendula Oil"
      },
      {
        "id": 14,
        "label": "Coffee Bean Oil"
      },
      {
        "id": 15,
        "label": "Cucumber Seed Oil"
      },
      {
        "id": 16,
        "label": "Evening Primrose Oil"
      },
      {
        "id": 17,
        "label": "Extra Virgin Olive Oil"
      },
      {
        "id": 18,
        "label": "Flaxseed Oil"
      },
      {
        "id": 19,
        "label": "Grapeseed Oil"
      },
      {
        "id": 20,
        "label": "Hazelnut Oil"
      },
      {
        "id": 21,
        "label": "Hemp Seed Oil"
      },
      {
        "id": 22,
        "label": "Jojoba Colorless Oil"
      },
      {
        "id": 23,
        "label": "Golden Jojoba Oil"
      },
      {
        "id": 24,
        "label": "Moringa Oil"
      },
      {
        "id": 25,
        "label": "Muskmelon Seed Oil"
      },
      {
        "id": 26,
        "label": "Olive Oil"
      },
      {
        "id": 27,
        "label": "Onion Oil"
      },
      {
        "id": 28,
        "label": "Papaya Oil"
      },
      {
        "id": 29,
        "label": "Perilla Oil"
      },
      {
        "id": 30,
        "label": "Pomegranate Oil"
      },
      {
        "id": 31,
        "label": "Pumpkin Seed Oil"
      },
      {
        "id": 32,
        "label": "Rosehip Oil"
      },
      {
        "id": 33,
        "label": "Saw Palmetto Extract 25%"
      },
      {
        "id": 34,
        "label": "Saw Palmetto Extract 45%"
      },
      {
        "id": 35,
        "label": "Saw Palmetto Extract 85%"
      },
      {
        "id": 36,
        "label": "Saw Palmetto Extract USP"
      },
      {
        "id": 37,
        "label": "Tomato Seed Oil"
      },
      {
        "id": 38,
        "label": "Walnut Oil"
      },
      {
        "id": 39,
        "label": "Wheatgerm Oil"
      }
    ],
    "items": [
      {
        "id": 1,
        "title": "Here Are Some Technical Details About Almond Oil",
        "composition": "The main composition of Almond oil is Oleic acid, Stearic acid, Linoleic acid, Palmitoleic acid (C16:1) and Palmitic acid.",
        "extraction": "Almond Oil is typically extracted by Cold-pressing the kernels of the Almond tree. Almond Oil’s Botanical Source is Prunus Amygdalus and it is a pale yellow coloured liquid, with a characteristic odor! Sweet Almond Oil is the most commonly used and is extracted from the edible Almonds. It has a mild, nutty aroma and is rich in vitamins and minerals. Bitter Almond Oil, on the other hand, is extracted from bitter almonds and is widely used in skincare or haircare products. Almond oil is high in vitamin E and antioxidants, which can benefit your hair and skin while also potentially lowering the risk of certain malignancies, cardiovascular disease, and heart disease.",
        "coa": "/assets/images/products/Carrier-Oils/coa/ALMOND-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/ALMOND OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Almond-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Almond Oil"
      },
      {
        "id": 2,
        "title": "Here Are Some Technical Details About Aloe Vera Oil",
        "composition": "Aloe vera contains active constituents like vitamins, enzymes, minerals, sugars, lignin, saponins, salicylic acids and amino acids. Vitamins: It contains vitamins A (beta-carotene), C and E, which are antioxidants. It also contains vitamin B12, folic acid, and choline.",
        "extraction": "Aloe Vera Oil is an oily extract from the leaves of Aloe barbadensis obtained by the process of maceration. It has mild aroma and is pale yellow to greenish yellow in appearance. Aloe Vera, sometimes referred to as a “wonder plant“ and acts as a natural moisturiser for the skin, has soothing properties. It also contains antioxidants that include beta-carotene, Vitamin C and E that improve the skin’s natural firmness. It has anti-inflammatory properties that help fight acne-causing bacteria. Aloe vera Oil is rich in Salicylic Acid and Amino acids, which are beneficial to treat acne and remove blemishes.",
        "coa": "/assets/images/products/Carrier-Oils/coa/ALOE-VERA-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/ALOE VERA OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Aloe-Vera-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Aloe Vera Oil"
      },
      {
        "id": 3,
        "title": "Here Are Some Technical Details About Amla Oil",
        "composition": "Major constituents in the oil are Ellagitannins, Ascorbic acid, Emblicanin B, Emblicanin A, Pedunculagin, Punigluconin Punicafolin, Lavonoids, Kaempferol, Phyllanemblinin, Gallic acid and Ellagic acid",
        "extraction": "Amla oil is extracted from amla berries through cold pressing. The color ranges from Yellow to Greenish- yellowish color liquid with characteristic odor of amla. It has excellent therapeutic values for hair. Amla oil is also useful for increasing memory. Amla oil is said to boost hair growth and prevent hair loss.",
        "coa": "/assets/images/products/Carrier-Oils/coa/AMLA-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/AMLA OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Amla-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Amla Oil"
      },
      {
        "id": 4,
        "title": "Here Are Some Technical Details About Apricot Oil",
        "composition": "Apricot Oil contains Essential linoleic acid (LA, C18:2, Omega-6) and Palmitic acid (C16:0). Contains valuable phytosterols, mainly sitosterol and campesterol.",
        "extraction": "Apricot Seed Oil is extracted from the Kernels of Prunus Armeniaca through Cold Pressing method. It belongs to the rose family of plants; Rosaceae. This is a light-yellow to ochre color with a typical mild odor and taste. Apricot oil helps to improve skin tone, maintain softness and radiance of the skin & often used in aromatherapy to reduce stress and anxiety, and it can also be used to relieve joint pain and inflammation.",
        "coa": "/assets/images/products/Carrier-Oils/coa/APRICOT-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/APRICOT OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Apricot-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Apricot Oil"
      },
      {
        "id": 5,
        "title": "Here Are Some Technical Details About Argan Oil",
        "composition": "Argan oil is mainly composed of fatty acids ( Oleic and Linoleic Acids) and Phenolic compounds , Tocopherols and a Unique Content \"Squalene\".",
        "extraction": "Argan oil is a plant oil produced from the kernels of the argan tree (Argania spinosa L.) by Cold Pressed method and its appearance is Pale yellow clear liquid, with odor mild & characteristic in nature. The botanical source of Argan oil is Argania Spinosa. Argan oil is best known as an additive to hair and skin products. Argan oil is quickly absorbed by the skin and doesn’t leave a greasy residue. This makes it an ideal moisturizer for people with oily or acne-prone skin. The phenolic compounds in Argan oil have potent anti-inflammatory properties that can help reduce redness and swelling caused by skin conditions like eczema and psoriasis.",
        "coa": "/assets/images/products/Carrier-Oils/coa/ARGAN-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/ARGAN OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Argan-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Argan Oil"
      },
      {
        "id": 6,
        "title": "Here Are Some Technical Details About Avocado Oil",
        "composition": "Avocado oil showed a high content of high content of lipids, of which Oleic and Palmitic lipids were present in a greater proportion.",
        "extraction": "Avocado Oil is extracted from the Pulp surrounding the seed of Persea Americana through Cold Pressing Method. Virgin avocado oil should be green in color, whereas refined avocado oil is light yellow and almost clear due to pigments removed during refining. It is filled with nutrients that makes it a Super Food & moisturizes skin and its richness of Vitamin E and antioxidants makes it an excellent Anti-ageing cream. It is also beneficial in treating dry scalp and damaged hair.",
        "coa": "/assets/images/products/Carrier-Oils/coa/AVOCADO-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/AVOCADO OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Avocado-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Avocado Oil"
      },
      {
        "id": 7,
        "title": "Here Are Some Technical Details About Black Seed Oil/Kalonji Oil(Min 1%)",
        "composition": "Thymoquinone (TQ) (MIN 1% is a chief bioactive constituent of black seed oil (Nigella sativa) with an antioxidant with anti-inflammatory, anti-allergy, and immune-supportive characteristics. Few of other Fatty Acids are Palmitic Acid, Oleic Acid & Linoleic Acid.",
        "extraction": "Our Black Seed Oil (Kalonji Oil) scientifically known as Nigella Sativa Oil is a product of India. Its brownish yellow to deep brown color Oil is obtained by cold press. Our Black Seed Oil has a characteristic taste and odor. People have used the oil as a way to help manage asthma, acne, diabetes and can fight off harmful bacteria. It may benefit skin and hair health, help reduce inflammation, and support weight loss.",
        "coa": "/assets/images/products/Carrier-Oils/coa/BLACK-CUMIN-SEED-OIL-1-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/BLACK CUMIN SEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Kalonji-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Black Seed Oil/Kalonji Oil(Min 1%)"
      },
      {
        "id": 8,
        "title": "Here Are Some Technical Details About Black Seed Oil/Kalonji Oil(Min 3%)",
        "composition": "Thymoquinone (TQ) (MIN 3% is a chief bioactive constituent of black seed oil (Nigella sativa) with an antioxidant with anti-inflammatory, anti-allergy, and immune-supportive characteristics. Few of other Fatty Acids are Palmitic Acid, Oleic Acid & Linoleic Acid.",
        "extraction": "Our Black Seed Oil (Kalonji Oil) scientifically known as Nigella Sativa Oil is a product of India. Its brownish yellow to deep brown color Oil is obtained by CO2 supercritical extraction. Our Black Seed Oil has a characteristic taste and odor. People have used the oil as a way to help manage asthma, acne, diabetes and can fight off harmful bacteria. It may benefit skin and hair health, help reduce inflammation, and support weight loss",
        "coa": "/assets/images/products/Carrier-Oils/coa/BLACK-CUMIN-SEED-OIL-3-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/BLACK CUMIN SEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Kalonji-Oil-min-3.webp",
        "imageAlt": "Here Are Some Technical Details About Black Seed Oil/Kalonji Oil(Min 3%)"
      },
      {
        "id": 9,
        "title": "Here Are Some Technical Details About Black Seed Oil/Kalonji Oil(Min 5%)",
        "composition": "Thymoquinone (TQ) (min. 5%) is the primary bioactive compound of Black Seed Oil (Nigella sativa), known for its antioxidant, anti-inflammatory, anti-allergic, and immune-supportive properties. Other key fatty acids present include palmitic acid, oleic acid, and linoleic acid.",
        "extraction": "Our Black Seed Oil (Kalonji Oil), scientifically known as Nigella sativa Oil, is a product of India and is obtained through CO₂ supercritical extraction. It appears as a brownish-yellow to deep brown oil with a characteristic taste and odor. Traditionally used to help manage conditions such as asthma, acne, and diabetes, Black Seed Oil is also known for its antibacterial properties. It may support skin and hair health, help reduce inflammation, and assist in weight management.",
        "coa": "/assets/images/products/Carrier-Oils/coa/BLACK-CUMIN-SEED-OIL-5-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/BLACK CUMIN SEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Kalonji-Oil-min-5.webp",
        "imageAlt": "Here Are Some Technical Details About Black Seed Oil/Kalonji Oil(Min 5%)"
      },
      {
        "id": 10,
        "title": "Here Are Some Technical Details About Black Seed Oil/Kalonji Oil(Min 10%)",
        "composition": "Black Seed Oil (Nigella sativa) contains a minimum of 10% Thymoquinone (TQ), its major active component known for antioxidant and immune-supportive properties. Additional fatty acids include palmitic acid, oleic acid, and linoleic acid.",
        "extraction": "Our Black Seed Oil (Kalonji Oil), scientifically known as Nigella sativa Oil, is an Indian-origin product obtained through CO₂ supercritical extraction. It appears as a brownish-yellow to deep brown oil with a characteristic taste and aroma. Traditionally used to help manage conditions such as asthma, acne, and diabetes, it is also known for its antibacterial properties. Black Seed Oil may support skin and hair health, help reduce inflammation, and assist in weight management.",
        "coa": "/assets/images/products/Carrier-Oils/coa/BLACK-CUMIN-SEED-OIL-10-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/BLACK CUMIN SEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Kalonji-Oil-min-10.webp",
        "imageAlt": "Here Are Some Technical Details About Black Seed Oil/Kalonji Oil(Min 10%)"
      },
      {
        "id": 11,
        "title": "Here Are Some Technical Details About Black Currant Oil",
        "composition": "Black Currant Oil is renowned for their high content omega-3.alpha-linolenic acid (ALA) and omega-6 gamma-linolenic acid (GLA).",
        "extraction": "Black currant oil is refined and cold pressed from the seeds of the Ribes nigrum plant. This Oil is used to enhance the immune system. Blackcurrant Oil is a clear pale yellow to yellow-green oil with a neutral odor. It contains an excellent source of vitamins and antioxidants. Black Currant Seed Oil is used to prevent premature aging. It helps to reduce wrinkles and repair tissue damage that is caused by free radicals",
        "coa": "/assets/images/products/Carrier-Oils/coa/BLACK-CURRANT-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/BLACK CURRANT OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Black-Currant-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Black Currant Oil"
      },
      {
        "id": 12,
        "title": "Here Are Some Technical Details About Borage Oil",
        "composition": "Borage seed oil contains very high levels of two types of polyunsaturated omega-6 essential fatty acids, gamma-linolenic acid (GLA) and linolenic acid (LA, which your body converts to GLA). GLA is an essential fatty acid that's important for maintaining a joint's cell structure and function",
        "extraction": "Borage Oil is extracted from the seeds of Borago Officinalis through Cold processing method. It is pale yellow to golden yellow liquid with Characteristic odor. Borage Oil is added to Infection Creams and Dry skin Treatments. Boarge Oil is suitable for all skin types and mostly added to skin care products and cosmetic product like Creams, Lotions, Hair Care products, Body Care Products, Lip balms etc.",
        "coa": "/assets/images/products/Carrier-Oils/coa/BORAGE-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/BORAGE OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Borage-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Borage Oil"
      },
      {
        "id": 13,
        "title": "Here Are Some Technical Details About Calendula Oil",
        "composition": "The Calendula Oil have a significant content which is called Calendic acid,",
        "extraction": "Calendula oil is extracted from marigold flowers. It is a clear viscous liquid whose color ranges from pale yellow to dark yellow with characteristic sweet odor. Calendula oil is naturally rich in antioxidants and antibacterial properties, making it a popular ingredient in cosmetics. It is also known for its anti-inflammatory properties that can help soothe skin irritations such as rashes and acne.",
        "coa": "/assets/images/products/Carrier-Oils/coa/CALENDULA-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/CALENDULA OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Calendula-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Calendula Oil"
      },
      {
        "id": 14,
        "title": "Here Are Some Technical Details About Coffee Bean Oil",
        "composition": "Coffee bean oil is composed of  fatty acids, linoleic acid and around  Palmitic acid. Additionally contained within the oil are  stearic acid, arachidic acid and Behenic acid.",
        "extraction": "Coffee Bean Carrier Oil is extracted from the roasted seeds of Coffee Arabica or commonly known as Arabian coffee, through cold pressed method. It belongs to the Rubiaceae family of plantae kingdom. Roasted beans produce oil that is green to dark brown color and possesses the signature Coffee aroma. Coffee Bean Oil is mild in nature and suitable for all skin types. Furthermore, it moisturises the skin and the antioxidants and caffeine in the oil help in the skin's softness.",
        "coa": "/assets/images/products/Carrier-Oils/coa/COFFEE-BEAN-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/COFFEE BEAN OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Coffee-Bean-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Coffee Bean Oil"
      },
      {
        "id": 15,
        "title": "Here Are Some Technical Details About Cucumber Seed Oil",
        "composition": "Cucumber Seed Oil is a high linoleic acid oil that also has a fair amount of oleic acid. It also contains antioxidant vitamin E, phytosterols and some trace minerals such as potassium",
        "extraction": "Cucumber Seed Oil is extracted from the seeds Cucumis Sativus, though Cold Pressing method. It belongs to the Cucurbitaceae family of plantae kingdom. Cucumber Seed Oil is a light to dark yellow liquid oil with a neutral mild characterstic odor. Cucumber Seed Oil has excellent moisturizing and smoothening qualities, improves the lipid barrier and revitalizes matured skin. Cucumber Seed Oil is highly recommended in scalp and hair care products to encourage healthy hair growth and increased vitality.",
        "coa": "/assets/images/products/Carrier-Oils/coa/CUCUMBER-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/CUCUMBER OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Cucumber-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Cucumber Seed Oil"
      },
      {
        "id": 16,
        "title": "Here Are Some Technical Details About Evening Primrose Oil",
        "composition": "EPO is found in the plant's seeds, and is high in the essential fatty acid gamma-linolenic acid (GLA).",
        "extraction": "Evening primrose oils are obtained through “cold-pressing” extraction method which requires to press the evening primrose plant seeds by high pressure. It is a clear, light yellow to pale yellow liquid  with characterstic Mild Odor. Due to its unique fatty acid profile and potential to treat skin issues, hormone imbalances, and inflammation, evening primrose oil is frequently used in nutritional supplements and cosmetics products.",
        "coa": "/assets/images/products/Carrier-Oils/coa/EVENING-PRIMROSE-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/EVENING PRIMROSE OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Primrose-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Evening Primrose Oil"
      },
      {
        "id": 17,
        "title": "Here Are Some Technical Details About Extra Virgin Olive Oil",
        "composition": "Extra Virgin Olive Oil contains Fatty acids like Oleic Acid, Linoleic Acid,Heptadecanoic Acid,Stearic Acid etc",
        "extraction": "Olive oil, oil extracted from the fleshy part of the ripened fruit of the olive tree, Olea europaea. Olive oil varies in color from clear yellow to greenish-Yellow. We can offer Pomace Olive Oil, Virgin/Extra Virgin Olive oil with filtered and unfiltered categories as per requirement. Pure olive oil is used largely for culinary purposes and in the preservation of foods. It is also used in the cosmetics, in the pharmaceutical industry for medicinal purposes, in the manufacture of high-quality castile soap, and as a lubricant.",
        "coa": "/assets/images/products/Carrier-Oils/coa/EXTRA-VIRGIN-OLIVE-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/OLIVE OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Virgin-Olive-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Extra Virgin Olive Oil"
      },
      {
        "id": 18,
        "title": "Here Are Some Technical Details About Flaxseed Oil",
        "composition": "Flaxseed oil contains the essential fatty acid alpha-linolenic acid (ALA), which the body converts into eicosapentaenoic acid (EPA), and docosahexaenoic acid (DHA), which is the omega-3 fatty acids",
        "extraction": "Flaxseed oil or flax oil (in its edible form), is a Colourless oil to yellowish oil (light to dark yellow as exposed to air)obtained from the dried, ripened seeds of the flax plant (Linum usitatissimum). The oil is obtained by pressing, sometimes followed by solvent extraction. It is a good source of an essential omega-3 fatty acid called alpha-linolenic acid (ALA). Flaxseed oil is used for heart disease, high blood pressure, high levels of cholesterol or other fats (lipids) in the blood (hyperlipidemia). It is also used to treat inflammatory illnesses.",
        "coa": "/assets/images/products/Carrier-Oils/coa/FLAXSEED-OIL-COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/FLAXSEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Flaxseed-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Flaxseed Oil"
      },
      {
        "id": 19,
        "title": "Here Are Some Technical Details About Grapeseed Oil",
        "composition": "Grapeseed Oil contains in the highest amount of linoleic acid , oleic acid , and to a lesser extent other saturated fatty acids. This oil is a rich source of Vitamin E, flavonoids, Essential Fatty Acid-linoleic and oligomeric proanthicyanidin.",
        "extraction": "Grapeseed Oil is processed by cold-pressing the grape seeds of the plant botanically known as Vitus vinifera. It is a greenish yellow liquid. Grapeseed Oil is useful in treating minor to severe health conditions. Grape seed Carrier Oil can be applied to remove fine lines on the skin, age spots and wrinkles. It also helps to combat Dry Hair and flaky scalp.",
        "coa": "/assets/images/products/Carrier-Oils/coa/GRAPESEED OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/GRAPESEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Grapeseed-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Grapeseed Oil"
      },
      {
        "id": 20,
        "title": "Here Are Some Technical Details About Hazelnut Oil",
        "composition": "Hazelnut oil has high amounts of Oleic acid and Linoleic acid and lesser amounts of Palmitic acid.",
        "extraction": "Hazelnut Oil is extracted from the kernels of Corylus Avellana, through Cold Pressing method. Its color is a pale yellow to golden yellow liquid with a Mild Nutty Odor. Hazelnut has abundant of Nutrients like Vitamin E, A, K, and essential fatty acids. Hazelnut oil, is filled with tannins, which makes it astringent and used in making anti-ageing oils and creams. Hazel Nut Oil is mild in nature and suitable for all skin types, especially sensitive and dry skin. It is mostly added to skin care products and cosmetic product like Creams, Lotions, Hair Care products, Body Care Products, Lip balms etc.",
        "coa": "/assets/images/products/Carrier-Oils/coa/HAZELNUT OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/HAZELNUT OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Hazelnut-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Hazelnut Oil"
      },
      {
        "id": 21,
        "title": "Here Are Some Technical Details About Hemp Seed Oil",
        "composition": "Hempseed oil that contains polyunsaturated fat includes omega-6 fatty acids such as linoleic acid (LA) and gamma-linolenic acid (GLA), and omega-3 fatty acids such as alpha-linolenic acid (ALA) and stearidonic acid.",
        "extraction": "Hemp Seed Oil is extracted from the seeds of Cannabis Sativa, though Cold pressing method. Hemp seed oil is a dark greenish color with a mildly nutty aroma. It is added to skin care products to increase their moisture content. It can help with reducing and reversing the signs of ageing. Hemp seed oil also has anti-inflammatory properties, that can be used to reduce minor body pain and sprains.",
        "coa": "/assets/images/products/Carrier-Oils/coa/HEMP SEED OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/HEMPSEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Hemp-Seed-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Hemp Seed Oil"
      },
      {
        "id": 22,
        "title": "Here Are Some Technical Details About Jojoba Oil Colorless Oil",
        "composition": "Jojoba Colorless Oil is a pure natural liquid wax, composed of esters extracted from Jojoba (Simmondsia Chinensis) seeds.",
        "extraction": "Jojoba Colorless Oil is a clear oil with a delicate, yet distinctive natural scent. Jojoba Colourless Oil is extracted using an automated cold press process to assure the best quality of pure, natural liquid wax. Simmondsia Chinensis is the botanical source of this oil. Jojoba oil has numerous benefits, including the ability to hydrate while washing and managing oil production, the ability to improve the look and feel of skin and hair.",
        "coa": "/assets/images/products/Carrier-Oils/coa/JOJOBA OIL COLORLESS COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/JOJOBA OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Jojoba-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Jojoba Oil Colorless Oil"
      },
      {
        "id": 23,
        "title": "Here Are Some Technical Details About Jojoba Oil Golden",
        "composition": "Jojoba Oil is not really an oil but rather a liquid wax ester.The main chemical constituents of Jojoba Carrier Oil are: Gadoleic Acid (Eicosenoic Acid), Erucic Acid, Oleic Acid, Palmitic Acid, Palmitoleic Acid, Stearic Acid, Behenic Acid, Vitamin E, and Vitamin B Complex.",
        "extraction": "Jojoba Oil is extracted from the seeds of Simmondsia Chinensis through Cold Pressing method. It is also known as Coffeeberry or Goat Nut. Jojoba Oil is suitable for most skin types and can help in treating various skin aliments. It is used in making products for acne prone skin for its antimicrobial nature.Jojoba Oil is mild in nature and suitable for all skin types, sensitive,  dry or oily skin. Unrefined jojoba oil appears as a clear golden liquid at room temperature with a slightly nutty odor. Refined jojoba oil is colorless and odorless.",
        "coa": "/assets/images/products/Carrier-Oils/coa/JOJOBA OIL GOLDEN COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/JOJOBA OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Jojoba-Oil-golden.webp",
        "imageAlt": "Here Are Some Technical Details About Jojoba Oil Golden"
      },
      {
        "id": 24,
        "title": "Here Are Some Technical Details About Moringa Oil",
        "composition": "The Moringa oil contains a high level of monounsaturated fatty acids, and Oleic acid is the predominant fatty acid.",
        "extraction": "Moringa oil is extracted by cold press method from the seed kernels of Moringa tree or Drumstick tree. The color of the Oil ranges from Yellowish brown to greenish coloured clear liquid with Characterstic odor. Moringa oil is rich in vitamins B and C which moisturizes the skin. Moringa Essential Oil has a fresh and leafy scent, which refreshes mind and creates a relaxed environment.",
        "coa": "/assets/images/products/Carrier-Oils/coa/MORINGA OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/MORINGA OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Moringa-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Moringa Oil"
      },
      {
        "id": 25,
        "title": "Here Are Some Technical Details About Muskmelon Seed Oil",
        "composition": "Muskmelon Seed Oil's chemical composition consists of Linoleic Acid, Oleic Acid, and Trilinolein.",
        "extraction": "Muskmelon Seed Oil is extracted from the seeds of Cucumis Melo using the cold pressing method. The derived oil from the muskmelon plant is generally from pale yellow-colored to dark yellow liquid. The aroma of this magical oil is characteristic, sweet, nutty, and earthy.Cold Pressed Muskmelon Seed Oil is used in Skincare Products and can be invariably used in Facial & Body massage oils. It is very much effective in conditions like Lack of appetite, Weight loss, Urinary tract infections, Constipation, Acidity, and Ulcer.",
        "coa": "/assets/images/products/Carrier-Oils/coa/MUSKMELON SEED OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/MUSKMELON SEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Muskmelon-Seed-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Muskmelon Seed Oil"
      },
      {
        "id": 26,
        "title": "Here Are Some Technical Details About Olive Oil",
        "composition": "Oleic acid, the most prevalent monounsaturated fatty acid, makes up the majority of Olive oil's composition. While Extra Virgin Olive Oil contains Fatty acids like Oleic Acid, Linoleic Acid,Heptadecanoic Acid,Stearic Acid etc",
        "extraction": "Olive oil, oil extracted from the fleshy part of the ripened fruit of the olive tree, Olea europaea. Olive oil varies in color from clear yellow to greenish-Yellow. We can offer Pomace Olive Oil, Virgin/Extra Virgin Olive oil  with filtered and unfiltered categories as per requirement. Pure olive oil is used largely for culinary purposes and in the preservation of foods. It is also used in the cosmetics, in the pharmaceutical industry for medicinal purposes, in the manufacture of high-quality castile soap, and as a lubricant.",
        "coa": "/assets/images/products/Carrier-Oils/coa/OLIVE OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/OLIVE OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Olive-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Olive Oil"
      },
      {
        "id": 27,
        "title": "Here Are Some Technical Details About Onion Oil",
        "composition": "Cold pressed onion seed oil consists of Linoleic acid and Oleic acid.",
        "extraction": "Onion Seed Oil is derived from the plant Allium Cepa through Cold Pressed Method. It is a reddish brown colored liquid.Onion seed oil has minerals that prevent hair loss and keeps the hair healthy. It is also useful in getting rid of serious skin problems like eczema and psoriasis. Onion seed oil has anti-bacterial and anti-fungal properties that help to heal wounds",
        "coa": "/assets/images/products/Carrier-Oils/coa/ONION SEED OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/ONION SEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Onion-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Onion Oil"
      },
      {
        "id": 28,
        "title": "Here Are Some Technical Details About Papaya Oil",
        "composition": "Papaya seed oil is composed mostly of unsaturated fatty acids with oleic acid being the major one. The oil also contains lipophilic phytochemicals such as tocopherols, phytosterols and carotenoids.",
        "extraction": "Papaya Oil is extracted by cold-pressed technique & obtained from the exotic fruit named Papayaand is pure and undiluted. The Color ranges from Pale orange yellow to yellowish green with slight mild Odor. This oil has anti-fungal and anti-inflammatory properties which make it a popular component in the manufacturing of different cosmetics and health products.",
        "coa": "/assets/images/products/Carrier-Oils/coa/PAPAYA OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/PAPAYA OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Papaya-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Papaya Oil"
      },
      {
        "id": 29,
        "title": "Here Are Some Technical Details About Perilla Oil",
        "composition": "Perilla Oil contains saturated fatty acids mainly palmitic acid, stearic acid, monosaturated oleic acid and poly saturated fatty acids linoleic acid, γ-linolenic acid, α-linolenic acid, icosanoic acid.",
        "extraction": "Perilla oil is the oil produced by cold-pressing seeds of the perilla plant. The leaves, also known as Japanese shiso, Chinese basil, and kkae-nip. This Oil ranges from  Yellow to dark yellowish brown clear liquid. Perilla showed various biological activities such as antioxidant, antimicrobial, anti-allergic, antidepressant, anti-inflammatory, anticancer, and neuroprotection effects.",
        "coa": "/assets/images/products/Carrier-Oils/coa/PERILLA SEED OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/PERILLA SEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Perilla-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Perilla Oil"
      },
      {
        "id": 30,
        "title": "Here Are Some Technical Details About Pomegranate Oil",
        "composition": "Pomegranate seed oil contains punicic acid , palmitic acid , stearic acid , oleic acid , and linoleic acid.",
        "extraction": "Cold Press Extraction method is used to extract Pomegranate oil. Pomegranate seed oil is an excellent moisturiser for the skin, aiding in the treatment of eczema and psoriasis, but it may also be used to moisturise acne-prone or oily skin without clogging the pores. It is essentially a moisturising element that is beneficial to all skin types.",
        "coa": "/assets/images/products/Carrier-Oils/coa/POMEGRANATE OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/POMEGRANATE OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Pomegranate-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Pomegranate Oil"
      },
      {
        "id": 31,
        "title": "Here Are Some Technical Details About Pumpkin Seed Oil",
        "composition": "The Pumpkin Seed Oil contains the highest proportion of linoleic Acid, then oleic Oil, palmitic , and stearic acids.",
        "extraction": "Pumpkin Seed Oil is extracted from the seeds of Cucurbita Pepo, through cold pressing method. It has a distinct nutty aroma and is usually light to dark green in color. Pumpkin seed oil contains many beneficial properties that can help to improve the health of the skin and hair. It’s high in vitamin A, which helps to keep the skin soft and supple, as well as reduce the appearance of fine lines and wrinkles. It’s also rich in omega-3 fatty acids, which are nourishing and can help improve skin, scalp, and hair health.",
        "coa": "/assets/images/products/Carrier-Oils/coa/PUMPKIN SEED OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/PUMPKIN SEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Pumpkin-Seed-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Pumpkin Seed Oil"
      },
      {
        "id": 32,
        "title": "Here Are Some Technical Details About Rosehip Oil",
        "composition": "Rose hip seed oil contains significant amounts of the two polyunsaturated essential fatty acids linoleic acid, linolenic acid, as well as of the monounsaturated oleic acid.",
        "extraction": "Rosehip Oil is a fruit oil extracted from the seeds of the rosehip, an amber berry-like fruit that grows wild on rosehip bushes. This process ensures that our Rosehip retains the potent antioxidants and essential fatty acids. This is a clear orange yellow color liquid with Mild characteristic odor.Rosehip oil is rich in essential fatty acids and antioxidants, which are integral for tissue and cell regeneration in the skin. The oil has long been used as a remedy for wound healing, as well as the reduction of scars and fine lines.",
        "coa": "/assets/images/products/Carrier-Oils/coa/ROSEHIP OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/ROSEHIP OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Rosehip-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Rosehip Oil"
      },
      {
        "id": 33,
        "title": "Here Are Some Technical Details About Saw Palmetto Oil (Extract 25%)",
        "composition": "Saw palmetto is also available in powder form and contain Fatty Acids and Sterols.",
        "extraction": "Saw Palmetto Extract is Off-white fine powder with Characterstic Odor. Process of extraction is same as CO2 Extraction process. saw palmetto is promoted as a dietary supplement for urinary symptoms associated with an enlarged prostate gland (also called benign prostatic hyperplasia or BPH), as well as for chronic pelvic pain, migraine, hair loss, and other conditions.",
        "coa": "/assets/images/products/Carrier-Oils/coa/SAW PALMETTO EXTRACT 25 COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/SAW PALMETTO EXTARCT MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Saw-Palmetto-Extract-25.webp",
        "imageAlt": "Here Are Some Technical Details About Saw Palmetto Oil (Extract 25%)"
      },
      {
        "id": 34,
        "title": "Here Are Some Technical Details About Saw Palmetto Oil (Extract 45%)",
        "composition": "Saw Palmetto powder contains natural fatty acids and sterols.",
        "extraction": "Saw Palmetto Extract is an off-white fine powder with a characteristic odor, obtained using the CO₂ extraction process. It is commonly promoted as a dietary supplement to support urinary health associated with benign prostatic hyperplasia (BPH) and is also used for chronic pelvic pain, migraines, hair loss, and other wellness applications.",
        "coa": "/assets/images/products/Carrier-Oils/coa/SAW PALMETTO EXTRACT 45 COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/SAW PALMETTO EXTARCT MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Saw-Palmetto-Extract-45.webp",
        "imageAlt": "Here Are Some Technical Details About Saw Palmetto Oil (Extract 45%)"
      },
      {
        "id": 35,
        "title": "Here Are Some Technical Details About Saw Palmetto Oil (85% & USP)",
        "composition": "Saw palmetto's active ingredients include fatty acids, plant sterols, and flavonoids. The berries also contain high molecular weight polysaccharides (sugars).",
        "extraction": "Saw Palmetto oil is acquired from small, scrubby palm tree, scientifically known as Sabal serulata or serenoa repens belonging to palmaceae family by CO2 extraction process. Pure Saw Palmetto Oil is yellow /Red to brown oily liquid with characteristic odor. Botanical Source is Serenoa Repens berries. It is frequently included in dietary supplements and herbal treatments to support prostate health and treat BPH-related urinary problems.",
        "coa": "/assets/images/products/Carrier-Oils/coa/SAW PALMETTO OIL 85 COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/SAW PALMETTO EXTARCT MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Saw-Palmetto-Extract-85.webp",
        "imageAlt": "Here Are Some Technical Details About Saw Palmetto Oil (85% & USP)"
      },
      {
        "id": 36,
        "title": "Here Are Some Technical Details About Saw Palmetto Oil (USP)",
        "composition": "Saw Palmetto contains key active compounds such as fatty acids, plant sterols, and flavonoids, with its berries also rich in high-molecular-weight polysaccharides.",
        "extraction": "Saw Palmetto Oil is obtained from the berries of the small, scrubby palm tree, scientifically known as Sabal serulata or Serenoa repens of the Palmaceae family, using the CO₂ extraction process. The pure oil is a yellow to reddish-brown liquid with a characteristic odor. It is commonly used in dietary supplements and herbal formulations to support prostate health and alleviate urinary issues associated with benign prostatic hyperplasia (BPH).",
        "coa": "/assets/images/products/Carrier-Oils/coa/SAW PALMETTO EXTRACT USP COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/SAW PALMETTO OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Saw-Palmetto-Extract-USP.webp",
        "imageAlt": "Here Are Some Technical Details About Saw Palmetto Oil (USP)"
      },
      {
        "id": 37,
        "title": "Here Are Some Technical Details About Tomato Seed Oil",
        "composition": "Tomato Seed Oil contains Fatty Acids like Linoleic Acid, Oleic Acid,Palmitic Acid,Stearic Acid,Linolenic Acid. The oil is rich in carotenoids, phytosterols and antioxidants. Tomato seed oil contains both alpha-tocopherol and gamma-tocopherol which are Vitamin E compounds",
        "extraction": "Tomato Seed Oil is extracted by cold-pressing the Tomato seeds with the incorporation of tomato oleoresins taken from the peel. Each tiny seed is rich in lycopene, Vitamin E and essential fatty acids. This is a Oily liquid which ranges from pale to dark orange-colored liquid with characteristic odor & insoluble in water, soluble in oils. Tomato Seed Oil exhibit antioxidant properties which assist in restoring the skin and delaying the appearance of aging symptoms such as wrinkles.",
        "coa": "/assets/images/products/Carrier-Oils/coa/TOMATO SEED OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/TOMATO SEED OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Tomato-Seed-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Tomato Seed Oil"
      },
      {
        "id": 38,
        "title": "Here Are Some Technical Details About Walnut Oil",
        "composition": "The major fatty acids found in the walnut oils are Linoleic acid , Oleic acid and Linolenic acid.",
        "extraction": "The Walnut oil is most often extracted from the kernel of the walnut by cold pressed method. It is a yellow oil with typical odor and taste. Walnuts are rich on phytonutrients. It is a very good source of magnesium, iron, calcium, selenieum, zinc and phosphorous. It has anti-oxidant, anti-bacterial, anti-inflammatory and antiseptic and anti-viral properties. It is used as a nutritious food, as diet supplements, as medicines, in aroma therapy, as a flavoring agent and the most unique is use in painting",
        "coa": "/assets/images/products/Carrier-Oils/coa/WALNUT OIL COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/WALNUT OIL MSDS.pdf",
        "image": "/assets/images/products/Carrier-Oils/Walnut-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Walnut Oil"
      },
      {
        "id": 39,
        "title": "Here Are Some Technical Details About Wheatgerm Oil",
        "composition": "Triglycerides of wheat germ oil mainly consist of unsaturated fatty acids. Linoleic acid is predominant followed by palmitic acid, oleic acid, linolenic acid, and stearic acid.",
        "extraction": "Wheat germ oil is extracted from the germ of the wheat kernel, which makes up only 2.5% by weight of the kernel. It is a yellow coloured clear liquid. Wheatgerm Oil is very high in vitamin E & essential Fatty acids & is a natural antioxidant. When applied on the skin it promotes the formation of new cells, improves circulation, helps repair skin damage & give you a naturally radiant skin.",
        "coa": "/assets/images/products/Carrier-Oils/coa/WHEATGERM OIL COA.pdf",
        "image": "/assets/images/products/Carrier-Oils/Wheatgerm-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Wheatgerm Oil"
      }
    ]
  },
  "pharma-grade-oils": {
    "intro": [
      "Pharmaceutical-grade oils refer to oils that meet defined pharmaceutical quality standards and applicable product specifications for their intended use. These oils play a crucial role in various formulations, serving as additives or carriers in medications and injections. To ensure quality and safety, sourcing <b>Pharma Grade Oil bulk</b> is essential for healthcare providers and formulators who require consistent and high-quality ingredients. A reliable <b>Pharma Grade Oil bulk supplier</b> can provide the necessary quantities for large-scale production while maintaining the integrity of the oil. This is particularly crucial in the pharmaceutical industry, where any impurities can significantly impact patient safety and treatment efficacy. Partnering with a reputable <b>Pharma Grade Oil wholesale</b> ensures that the oils adhere to strict quality control measures and are tested for purity. For businesses looking to optimize their supply chain, working with a trusted supplier can lead to cost-effective solutions without compromising quality."
    ],
    "typesTitle": "Types of Pharma Grade Oils",
    "types": [
      {
        "id": 1,
        "label": "Anise Oil USP"
      },
      {
        "id": 2,
        "label": "Arachis Oil BP"
      },
      {
        "id": 3,
        "label": "Arachis Oil USP"
      },
      {
        "id": 4,
        "label": "Cardamom Oil BP"
      },
      {
        "id": 5,
        "label": "Cinnamon Oil BP"
      },
      {
        "id": 6,
        "label": "Clove Oil BP"
      },
      {
        "id": 7,
        "label": "Clove Oil IP"
      },
      {
        "id": 8,
        "label": "Dill Oil BP"
      },
      {
        "id": 9,
        "label": "Eucalyptus Oil BP"
      },
      {
        "id": 10,
        "label": "Eucalyptus Oil IP"
      },
      {
        "id": 11,
        "label": "Fennel Oil USP"
      },
      {
        "id": 12,
        "label": "Mentha Oil IP"
      },
      {
        "id": 13,
        "label": "Peanut Oil BP"
      },
      {
        "id": 14,
        "label": "Peanut Oil IP"
      },
      {
        "id": 15,
        "label": "Peanut Oil USP"
      },
      {
        "id": 16,
        "label": "Peppermint Oil BP"
      },
      {
        "id": 17,
        "label": "Peppermint Oil IP"
      },
      {
        "id": 18,
        "label": "Peppermint Oil USP"
      },
      {
        "id": 19,
        "label": "Rosemary Oil BP"
      },
      {
        "id": 20,
        "label": "Sesame Oil BP"
      },
      {
        "id": 21,
        "label": "Sesame Oil USP"
      },
      {
        "id": 22,
        "label": "Soyabean Oil BP"
      },
      {
        "id": 23,
        "label": "Soyabean Oil USP"
      },
      {
        "id": 24,
        "label": "Spearmint Oil BP"
      },
      {
        "id": 25,
        "label": "Sunflower Oil BP"
      },
      {
        "id": 26,
        "label": "Sunflower Oil USP"
      },
      {
        "id": 27,
        "label": "Tea Tree Oil BP"
      },
      {
        "id": 28,
        "label": "Thyme Oil BP"
      },
      {
        "id": 29,
        "label": "Turpentine Oil BP"
      },
      {
        "id": 30,
        "label": "Virgin Linseed Oil BP"
      }
    ],
    "items": [
      {
        "id": 1,
        "title": "Here Are Some Technical Details About Anise Oil USP",
        "composition": "Anise essential oil contains high content of Trans-anethole.",
        "extraction": "The essential oil from aniseed is extracted by steam distillation. Anise oil has spicy taste and herbal smell. It is colorless or a very pale yellow. Aniseed Essential Oil works well to sooth joint and muscle pain, and as such is often used in the treatment of conditions such as arthritis and rheumatism. It needs to be kept in a fitting container in a cool, dark location.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/ANISE OIL USP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/ANISE OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Anise-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Anise Oil USP"
      },
      {
        "id": 2,
        "title": "Here Are Some Technical Details About Arachis Oil BP",
        "composition": "Main Fatty acids present in Arachis Oil  are Oleic acid, linoleic acid, stearic acid,behenic acid,lignoceric acid and and ecosenoic acid.",
        "extraction": "Arachis oil is extracted by Cold Pressed Method which is used to make injections.. Clear, viscous, and yellowish in color, arachis oil has a very low solubility in ethanol, and it is miscible with light petroleum. This oil made from refined arachis hypogaea peanuts. Arachis Oil is mostly added to skin care products and cosmetic product like Creams, Lotions, Hair Care products, Body Care Products, Lip balms etc. Made from peanuts, this oil has a nutty flavor and is frequently used for frying food. It is high in vitamin E , an antioxidant that fights free radicals and supports the immune system. However, it also contains large amounts of omega-6 fatty acids.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/ARACHIS OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/ARACHIS OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Arachis-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Arachis Oil BP"
      },
      {
        "id": 3,
        "title": "Here Are Some Technical Details About Arachis Oil USP",
        "composition": "Arachis Oil is primarily composed of fatty acids such as oleic, linoleic, stearic, behenic, lignoceric, and eicosenoic acids.",
        "extraction": "Arachis Oil, extracted using the cold-pressed method from refined Arachis hypogaea (peanuts), is a clear, viscous, yellowish oil with low solubility in ethanol and good miscibility with light petroleum. It is commonly used in skincare and cosmetic formulations such as creams, lotions, hair care products, body care products, and lip balms. With a natural nutty flavor, it is also widely used for frying. Rich in vitamin E, a potent antioxidant that combats free radicals and supports the immune system, Arachis Oil also contains significant amounts of omega-6 fatty acids.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/ARACHIS OIL USP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/ARACHIS OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Arachis-Oil-USP.webp",
        "imageAlt": "Here Are Some Technical Details About Arachis Oil USP"
      },
      {
        "id": 4,
        "title": "Here Are Some Technical Details About Cardamom Oil BP",
        "composition": "The main chemical components of cardamom oil are 1.8-Cineole and ρ-Cymene.",
        "extraction": "Cardamom oil is obtained by steam distillation of pods of plant Elettaria cardamomum belongs to family Zingiberaceae. It is a clear, colorless to pale yellow color liquid. The chemical makeup of Cardamom essential oil makes it a calming oil—allowing it to provide soothing effects for the digestive system when ingested. It is used for the treatment of cold and flu. Cardamom oil is used in coughs and bronchitis. This is used for the treatment of cancer. This amazing oil is reduced blood pressure.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/CARDAMOM OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/CARDAMOM OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Cardamom-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Cardamom Oil BP"
      },
      {
        "id": 5,
        "title": "Here Are Some Technical Details About Cinnamon Oil BP",
        "composition": "The major chemical constituents of Cinnamon bark oil are cinnamaldehyde and eugenol.",
        "extraction": "Cinnamon oil can be extracted from either the leaves or the bark of the Cinnamon plant. Cinnamon leaf oil is extracted using steam distillation. Once the oil is extracted from its supply, it acquires a sweet scent and incorporates a color that ranges from yellow to golden brown. Cinnamon oil is used to reduce the feelings of depression, faintness, and exhaustion. It is also used to strengthen libido and immunity. Its anti-rheumatic properties help to reduce joint and muscle pain. It is also used in aromatherapy to reduce symptoms of colds and flu.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/CINNAMON OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/CINNAMON OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Cinnamon-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Cinnamon Oil BP"
      },
      {
        "id": 6,
        "title": "Here Are Some Technical Details About Clove Oil BP",
        "composition": "Eugenol is the major compound while other content consists of eugenyl acetate, β-caryophyllene, and α-humulene.",
        "extraction": "Clove Oil is produced by Steam distilling the dried flower buds that are collected from the clove tree. Other parts of the tree, such as the stem and leaves, may also be used. Clove oil, which ranges in color from pale yellow to brownish coloured fluid liquid and has a strong, spicy aroma. Clove oil can be used as an as an antimicrobial, to help kill bacteria and as a pain reliever for conditions such as toothache and muscle pain.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/CLOVE OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/CLOVE OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Clove_Oil_BP.webp",
        "imageAlt": "Here Are Some Technical Details About Clove Oil BP"
      },
      {
        "id": 7,
        "title": "Here Are Some Technical Details About Clove Oil IP",
        "composition": "Eugenol is the major Content in Clove Oil",
        "extraction": "Clove Oil is produced by steam distillation of the dried flower buds of the clove tree, although the stems and leaves may also be used. It is a pale yellow to brownish liquid with a strong, spicy aroma. Clove Oil is widely used for its antimicrobial properties to help combat bacteria and as a natural pain reliever for conditions such as toothache and muscle pain.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/CLOVE OIL IP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/CLOVE OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Clove_Oil_IP.webp",
        "imageAlt": "Here Are Some Technical Details About Clove Oil IP"
      },
      {
        "id": 8,
        "title": "Here Are Some Technical Details About Dill Oil BP",
        "composition": "The major part of the Dill oil consists of D-carvone, D-limonene and α-phellandrene.",
        "extraction": "Dill Oil is extracted from the seeds of the dill plant. Its botanical name is Anethum graveolens. It is a clear, colourless or pale yellow liquid with characterstic odor of Crushed fruit. Dill Seed Oil is known for its versatility; it is highly revered for its antioxidant, antifungal and antibacterial properties. Dill Essential Oil also contains powerful antimicrobial and antibacterial compounds that makes it a useful antiseptic and disinfectant agent for the treatment of wounds.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/DILL OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/DILL OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Dill-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Dill Oil BP"
      },
      {
        "id": 9,
        "title": "Here Are Some Technical Details About Eucalyptus Oil BP",
        "composition": "The major constituents of Eucalyptus leaves essential oils are 1,8-cineol and α-pinene",
        "extraction": "Steam distillation process is used for extracting Eucalyptus oil from leaves and young twigs of eucalyptus tree. It is a clear or light yellow liquid with a strong, camphoraceous flavor and a fragrant, camphoraceous fragrance. Eucalyptus oil is available as an essential oil that is used as a medicine to treat a variety of common diseases and conditions including nasal congestion, asthma, and as a tick repellant. Eucalyptus oil is also used in creams and ointments to relieve muscle and joint pain, and in some mouthwashes.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/EUCALYPTUS OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/EUCALYPTUS OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Eucalytpus Oil IP_BP.webp",
        "imageAlt": "Here Are Some Technical Details About Eucalyptus Oil BP"
      },
      {
        "id": 10,
        "title": "Here Are Some Technical Details About Eucalyptus Oil IP",
        "composition": "The major constituent of Eucalyptus Oil is Cineol Content.",
        "extraction": "Eucalyptus Oil is extracted through steam distillation of the leaves and young twigs of the eucalyptus tree. It is a clear to light yellow liquid with a strong, camphoraceous aroma and flavor. Eucalyptus Oil is widely used as an essential oil in medicinal applications, including relief from nasal congestion, asthma, and as a natural tick repellent. It is also commonly used in creams, ointments, and mouthwashes to help relieve muscle and joint pain.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/EUCALYPTUS OIL IP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/EUCALYPTUS OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Eucalytpus_Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Eucalyptus Oil IP"
      },
      {
        "id": 11,
        "title": "Here Are Some Technical Details About Fennel Oil USP",
        "composition": "Anethole, fenchone and methyl chavicol were found to be the main components of the Fennel essential oil from mature fully ripe fennel umbels.",
        "extraction": "Fennel oil is obtained by steam distillation of the dried fruits of Foeniculum vulgare. This oil has a color spectrum from colourless to pale yellow. The product has a characteristic sweet, green, earthy, spicy note. Fennel oil is commonly used to treat disorders of the digestive system. Fennel Oil has antiseptic, antispasmodic, aperitif, carminative, depurative, and diuretic properties.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/FENNEL OIL USP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/FENNEL OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Fennel-Oil-USP.webp",
        "imageAlt": "Here Are Some Technical Details About Fennel Oil USP"
      },
      {
        "id": 12,
        "title": "Here Are Some Technical Details About Mentha Oil IP",
        "composition": "The components in this oil are menthol, menthone.",
        "extraction": "Mentha Arvensis L. is the Botanical source for Mentha oil. Steam distillation is used to extract this essential oil. It has a mild and pleasant and minty scent and is a pale yellow liquid in appearance. Mentha arvensis oil is used to treat many stomach disorders, inflammation, and treatment of fever headache, cold, and asthma. Mentha arvensis also helps to alleviate arthritis. It is beneficial to relieve insomnia and nervous tension. It must be kept In a well-fitted container in a cool and dark place.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/MENTHA OIL IP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/MENTHA OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Mentha-Oil-IP.webp",
        "imageAlt": "Here Are Some Technical Details About Mentha Oil IP"
      },
      {
        "id": 13,
        "title": "Here Are Some Technical Details About Peanut Oil BP",
        "composition": "Main Fatty acids present in Peanut Oil are Oleic acid, linoleic acid, stearic acid,behenic acid,lignoceric acid and and ecosenoic acid",
        "extraction": "Peanut oil is the oil from the seed (peanut) of the peanut plant (Arachis hypogaea). It is Clear yellowish in color. Peanut oil is used in cooking and is also used to make medicine. It helps repair the skin and is loaded with antioxidants, such as vitamin E and resveratrol, a substance also contained in grapes, wine and cranberries.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/PEANUT OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/PEANUT OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Peanut-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Peanut Oil BP"
      },
      {
        "id": 14,
        "title": "Here Are Some Technical Details About Peanut Oil IP",
        "composition": "The major component of this essential oil are fatty acids like oleic acid, linoleic acid, and palmitic acid (as palmitin)",
        "extraction": "Peanut oil is the oil from the seed (peanut) of the peanut plant (Arachis hypogaea). Peanut oil has a light, nutty smell and is a clear, pale yellow liquid. Peanut oil is used in cooking and is also used to make medicine. It helps repair the skin and is loaded with antioxidants, such as vitamin E and resveratrol, a substance also contained in grapes, wine and cranberries.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/PEANUT OIL IP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/PEANUT OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Peanut-Oil-IP.webp",
        "imageAlt": "Here Are Some Technical Details About Peanut Oil IP"
      },
      {
        "id": 15,
        "title": "Here Are Some Technical Details About Peanut Oil USP",
        "composition": "Main Fatty acids present in Peanut Oil  are Oleic acid, linoleic acid, stearic acid,behenic acid,lignoceric acid and and ecosenoic acid",
        "extraction": "Peanut oil is extracted by Cold Pressed Method which is used to make injections.. Clear, viscous, and yellowish in color, Peanut oil has a very low solubility in ethanol, and it is miscible with light petroleum. This oil made from refined arachis hypogaea peanutsPeanut Oil is mostly added to skin care products and cosmetic product like Creams, Lotions, Hair Care products, Body Care Products, Lip balms etc. Made from peanuts, this oil has a nutty flavor and is frequently used for frying food. It is high in vitamin E , an antioxidant that fights free radicals and supports the immune system. However, it also contains large amounts of omega-6 fatty acids.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/PEANUT OIL USP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/PEANUT OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Peanut Oil IP_BP_USP.webp",
        "imageAlt": "Here Are Some Technical Details About Peanut Oil USP"
      },
      {
        "id": 16,
        "title": "Here Are Some Technical Details About Peppermint Oil BP",
        "composition": "The main constituents of Peppermint Oil are Menthol and Menthone.Menthofuran, 1,8-cineole, and limonene are among the other minor ingredients of peppermint oil.",
        "extraction": "Peppermint oil comes from Mentha Piperita L.through steam distillation. It is a colourless liquid that is either pale yellow or pale greenish-yellow. It has a characteristic odor and taste followed by a sensation of cold. Peppermint oil is promoted for topical use (applied to the skin) for problems like headache, muscle aches, joint pain, and itching. ALSO, peppermint oil is promoted for treating coughs and colds, reducing pain, improving mental function, and reducing stress.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/PEPPERMINT OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/PEPPERMINT OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Peppermint Oil IP_BP_USP.webp",
        "imageAlt": "Here Are Some Technical Details About Peppermint Oil BP"
      },
      {
        "id": 17,
        "title": "Here Are Some Technical Details About Peppermint Oil IP",
        "composition": "The main constituents of Peppermint Oil IP grade are Menthyl Acetate Content,Menthone Content and L-Menthol Contents.",
        "extraction": "Peppermint oil comes from Mentha Piperita L.through steam distillation. It appears from Pale yellow to almost Colourless clear liquid, odor minty and Characteristic. The external use of peppermint oil to the skin is recommended for treating conditions like headache, muscle aches, joint discomfort, and itching. Peppermint oil is recommended for treating coughs and colds, relieving discomfort, enhancing brain performance, and lowering stress in aromatherapy. It should be maintained in a tightly sealed container in a cool, dark environment that is about 25°C.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/PEPPERMINT OIL IP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/PEPPERMINT OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Peppermint Oil IP.webp",
        "imageAlt": "Here Are Some Technical Details About Peppermint Oil IP"
      },
      {
        "id": 18,
        "title": "Here Are Some Technical Details About Peppermint Oil USP",
        "composition": "The main constituents of Peppermint Oil USP grade are Menthyl Acetate & Total Menthol Content.",
        "extraction": "Peppermint oil comes from Mentha Piperita L.through steam distillation. It appears from Colourless to Pale yellow clear liquid, odor minty and Characteristic. The external use of peppermint oil to the skin is recommended for treating conditions like headache, muscle aches, joint discomfort, and itching. Peppermint oil is recommended for treating coughs and colds, relieving discomfort, enhancing brain performance, and lowering stress in aromatherapy. It should be maintained in a tightly sealed container in a cool, dark environment that is about 25°C.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/PEPPERMINT OIL USP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/PEPPERMINT OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Peppermint Oil USP.webp",
        "imageAlt": "Here Are Some Technical Details About Peppermint Oil USP"
      },
      {
        "id": 19,
        "title": "Here Are Some Technical Details About Rosemary Oil BP",
        "composition": "The major components of Rosemary BP are alpha-pinene,1, 8-cineole,camphene and verbenone.",
        "extraction": "Rosemary oils are obtained by steam distillation of twigs and fresh leaves. The flowers yield 1.0-2.0% of oil. The rosemary oil is an almost colorless to pale yellow liquid with a characteristic, refreshing and pleasant odor. Cosmetic industry uses rosemary oil as a great ingredient in anti-aging creams. The oil shows an excellent toning and binding effects on loose, sagging skin. The oil is also used in flavor, medicinal, mouth wash and fragrance preparations. Effective for asthma, bronchitis, catarrh, sinus and whooping cough.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/ROSEMARY OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/ROSEMARY OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Rosemary-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Rosemary Oil BP"
      },
      {
        "id": 20,
        "title": "Here Are Some Technical Details About Sesame Oil BP",
        "composition": "Sesame seed is rich in oil, contains high amounts of unsaturated fatty acids, mainly linoleic acid, oleic acid, palmitic and stearic acid with trace amount of linolenic acid.",
        "extraction": "Sesame Oil is the edible oil extracted from the seeds of Sesamum indicum L under low-temperature conditions process called cold pressing. It is an almost colourless liquid that is transparent and light yellow in color. Sesame oil is used as a cooking oil and as a food ingredient. It is also used as an ingredient in medicinal preparations. Sesame oil is reported to possess antioxidant, antiaging, antihypertensive, immunoregulatory and anticancer properties. It has also shown to accelerate alcohol decomposition in the liver.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/SESAME OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/SESAME OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Sesame-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Sesame Oil BP"
      },
      {
        "id": 21,
        "title": "Here Are Some Technical Details About Sesame Oil USP",
        "composition": "Sesame seed is rich in oil, contains high amounts of unsaturated fatty acids, mainly linoleic acid, oleic acid, palmitic and stearic acid with trace amount of linolenic acid.",
        "extraction": "Sesame Oil is an edible oil obtained from the seeds of Sesamum indicum L. through a low-temperature cold-pressing process. It is a transparent, almost colorless to light yellow liquid. Sesame Oil is widely used as a cooking oil and food ingredient and is also utilized in medicinal formulations. It is known for its antioxidant, anti-aging, antihypertensive, immunoregulatory, and anticancer properties, and has been reported to support faster alcohol metabolism in the liver.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/SESAME OIL USP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/SESAME OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Sesame-Oil-USP.webp",
        "imageAlt": "Here Are Some Technical Details About Sesame Oil USP"
      },
      {
        "id": 22,
        "title": "Here Are Some Technical Details About Soyabean Oil BP",
        "composition": "Soybean oil contains linoleic acid, oleic acid, palmitic acid, linolenic acid, and steric acid. This fatty acid profile is high in unsaturated fatty acids, which is healthy.",
        "extraction": "Soybean oil is oil produced from the seeds of the soybean plant. Soybean oil is a Clear, pale yellow, oily liquid. It is utilized for medicinal purposes and has a very slight scent or none at all. Soybean oil is also used as a mosquito repellant and as a nutritional supplement in intravenous feedings. longside vitamin E, soybean oil is rich in Omega 3 and Omega 6 fatty acids which restore collagen and increase skin's elasticity, diminishing the appearance of fine lines and wrinkles.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/SOYBEAN OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/SOYBEAN OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Soyabean-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Soyabean Oil BP"
      },
      {
        "id": 23,
        "title": "Here Are Some Technical Details About Soyabean Oil USP",
        "composition": "Soybean oil contains linoleic acid, oleic acid, palmitic acid, linolenic acid, and steric acid. This fatty acid profile is high in unsaturated fatty acids, which is healthy.",
        "extraction": "Soybean Oil is extracted from the seeds of the soybean plant and appears as a clear, pale yellow oily liquid with little to no odor. It is used for medicinal purposes, as a mosquito repellent, and as a nutritional supplement in intravenous feedings. Rich in Omega-3 and Omega-6 fatty acids along with Vitamin E, Soybean Oil helps restore collagen, improve skin elasticity, and reduce the appearance of fine lines and wrinkles.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/SOYABEAN OIL USP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/SOYBEAN OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Sesame-Oil-USP.webp",
        "imageAlt": "Here Are Some Technical Details About Soyabean Oil USP"
      },
      {
        "id": 24,
        "title": "Here Are Some Technical Details About Spearmint Oil BP",
        "composition": "Spearmint oil has 2 major contents- Carvone and Limonene.",
        "extraction": "The extraction process of Spearmint essential oil involves steam distillation of the fresh flowering tops or partially dried leaves of the spearmint plant. Spearmint Oil is a clear liquid which ranges from being colourless to pale yellow or greenish. Spearmint Essential Oil smells minty, fresh and perhaps slightly fruity in aroma. Spearmint Oil is multi-purpose and it continues to be used to soothe ailments such as skin problems, headaches, nausea, vomiting, respiratory issues, and cold symptoms.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/SPEARMINT OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/SPEARMINT OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Spearmint-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Spearmint Oil BP"
      },
      {
        "id": 25,
        "title": "Here Are Some Technical Details About Sunflower Oil BP",
        "composition": "Sunflower oil is primarily composed of linoleic acid, a polyunsaturated fat, and oleic acid, a monounsaturated fat",
        "extraction": "Sunflower oil is the non-volatile oil pressed from the seeds of the sunflower plant(Helianthus annum) by cold pressed method.Sunflower oil that comes from these plants is called high-oleic acid sunflower oil. It is a transparent, light yellow liquid that is miscible with light petroleum but almost insoluble in water and alcohol. This oil can be used in cooking and cosmetics, and it is especially popular with people who are concerned about the health impacts of oil because it is a relatively healthy form of vegetable oil as reduces the severity of Asthma and Arthritis and also works as anti-aging.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/SUNFLOWER OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/SUNFLOWER OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Sunflower-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Sunflower Oil BP"
      },
      {
        "id": 26,
        "title": "Here Are Some Technical Details About Sunflower Oil USP",
        "composition": "Sunflower oil is primarily composed of linoleic acid, a polyunsaturated fat, and oleic acid, a monounsaturated fat",
        "extraction": "Sunflower Oil is a non-volatile oil obtained by cold pressing the seeds of the sunflower plant (Helianthus annuus). Oil derived from high-oleic sunflower varieties is known as high-oleic sunflower oil. It is a transparent, light yellow liquid that is miscible with light petroleum and almost insoluble in water and alcohol. Sunflower Oil is widely used in cooking and cosmetic applications and is favored for its health benefits, as it is a nutritious vegetable oil that may help reduce the severity of asthma and arthritis and also exhibits anti-aging properties.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/SUNFLOWER OIL USP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/SUNFLOWER OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Sunflower-Oil-Usp.webp",
        "imageAlt": "Here Are Some Technical Details About Sunflower Oil USP"
      },
      {
        "id": 27,
        "title": "Here Are Some Technical Details About Tea Tree Oil BP",
        "composition": "The major constituents of Tea Tree Oil are terpinen-4-ol, γ-terpinene, 1,8-cineole, α-terpinene, α-terpineol, p-cymene, and α-pinene.",
        "extraction": "Tea Tree Oil is produced by steam distillation of the leaves and terminal branches of M. alternifolia. It has a distinctive aroma and is a clear fluid ranging from colorless to pale yellow. It is used in cleansing, cosmetic, and personal care formulations.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/TEA TREE OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/TEA TREE OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Tea-Tree-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Tea Tree Oil BP"
      },
      {
        "id": 28,
        "title": "Here Are Some Technical Details About Thyme Oil BP",
        "composition": "The characterization of thyme oil indicated that thymol, p-cymene, carvacrol, linalool, β-caryphyllene, and terpinen-4-ol are present.",
        "extraction": "Thyme Oil BP is obtained by steam distillation from the fresh flowering aerial parts of Thymus vulgaris L. This oil has a transparent, dark reddish-brown, liquid appearance with a distinctive, aromatic, spicy smell that is reminiscent of thymol. It is miscible with both light petroleum and ethanol. Thyme essential oil have long been used in traditional medicine as expectorant, anti-inflammatory, antiviral, antibacterial, and antiseptic agents, mainly in the treatment of the upper respiratory system.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/THYME OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/THYME OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Thyme-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Thyme Oil BP"
      },
      {
        "id": 29,
        "title": "Here Are Some Technical Details About Turpentine Oil BP",
        "composition": "Turpentine is composed of terpenes, primarily the monoterpenes alpha- and beta-pinene, with lesser amounts of carene, camphene, dipentene, and terpinolene.",
        "extraction": "Turpentine is a well-known essential oil extracted by distillation from pine oleoresin. The oleoresin itself is provided by tapping trees of the genus Pinus Turpentine Oil BP is a clear and colorless essential oil. It has a distinct smell and is commonly used in medicines and cosmetics. The oil is well-known for its ability to penetrate the skin, making it a popular choice for topical products. Produced according to the British Pharmacopoeia standards, it ensures high quality and purity for various uses.Turpentine oil is used in soap and cosmetics and also as a paint solvent. It is also added to perfumes, foods, and cleaning agents as a fragrance.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/TURPENTINE OIL BP COA.pdf",
        "msds": "/assets/images/products/Pharma-Grade-Oils/MSDS/TURPENTINE OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Turpentine-Oil-BP.webp",
        "imageAlt": "Here Are Some Technical Details About Turpentine Oil BP"
      },
      {
        "id": 30,
        "title": "Here Are Some Technical Details About Virgin Linseed OIl",
        "composition": "Linseed contains principally glycerides of linolenic, linoleic, oleic and palmitic acid. Linseed oil is a rich source of α-Linolenic acid extracted from the dried, ripened seeds of the flax plant *Linum usitatissimum*",
        "extraction": "Linseed oil, also known as flaxseed oil or flax oil, is a colorless to yellowish oil obtained from the dried, ripened seeds of the flax plant (Linum usitatissimum). The oil is obtained by pressing, sometimes followed by solvent extraction. Linseed Oil is used in rheumatism, arthritis and malaria. It is used in the formulation of various medicines. It is very helpful in treating digestive disorders like IBS, constipation, colon damage, large Intestine problems, flatulence, enteritis, and many other related disorders.",
        "coa": "/assets/images/products/Pharma-Grade-Oils/COA/VIRGIN LINSEED OIL BP COA.pdf",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/FLAXSEED OIL MSDS.pdf",
        "image": "/assets/images/products/Pharma-Grade-Oils/Virgin-Linseed-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Virgin Linseed OIl"
      }
    ],
    "perPage": 6
  },
  "special-ingredients": {
    "intro": [
      "Ingredients Oils are a diverse and highly valued products, each offering distinct characteristics and multiple uses in areas such as culinary applications, skincare, and alternative medicine. These oils are often extracted from rare plants or seeds, making them particularly prized for their unique qualities and benefits. Sourcing <b>Ingredients oil bulk suppliers</b> from reliable suppliers makes sure that businesses receive a consistent and high- quality product for macro-scale use. Many of these oils are not only essential for flavor enhancement in gourmet cooking but are also crucial for creating nourishing skincare products and therapeutic treatments. Working with a reputable <b>Ingredients oil bulk manufacturers</b> guarantees that the oils meet strict quality standards, ensuring purity and effectiveness in every application. From providing moisturization in skincare to offering health benefits in alternative medicine, these oils cater to a wide range of industries. Furthermore, sourcing from an <b>Ingredients oil wholesale suppliers</b> offers businesses cost- effective solutions while ensuring they maintain a steady supply of these Valuable oils. In this exploration, we will dive into some unique Ingredients oils, uncovering their exceptional properties and the diverse ways they can benefit various sectors. By analysing their potential, businesses can expand their use in innovative products and treatments."
    ],
    "typesTitle": "Types of Special Ingredients Oils",
    "types": [
      {
        "id": 1,
        "label": "Dill Oil (Terpeneless)"
      },
      {
        "id": 2,
        "label": "Mentha Arvensis Oil"
      },
      {
        "id": 3,
        "label": "Mentha Citrata Oil"
      },
      {
        "id": 4,
        "label": "Mentha Piperita Oil"
      },
      {
        "id": 5,
        "label": "Mentha Spicata Oil"
      },
      {
        "id": 6,
        "label": "Saw Palmetto Extract 25%"
      },
      {
        "id": 7,
        "label": "Saw Palmetto Extract 45%"
      },
      {
        "id": 8,
        "label": "Saw Palmetto Extract 85%"
      },
      {
        "id": 9,
        "label": "Saw Palmetto Extract USP"
      }
    ],
    "items": [
      {
        "id": 1,
        "title": "Here Are Some Technical Details About Dill Oil (Terpeneless)",
        "composition": "Carvone and limonene are monoterpenes, which are present as main constituent of Dill oil from fruits.α-phellandrene, Dill ether and Myristicin are the compounds, which form the important odor of dill herb.",
        "extraction": "Dill Oil is extracted from the seeds of the Dill plant. Its botanical name is Anethum graveolens Dill Seed Oil (Terpeneless) possesses a slightly earthy, fresh, sweet, herbaceous aroma that blends well with essential oils in the citrus, spice, wood and herbaceous families. It is a clear, colourless liquid, visibly free from water.Dill Oil helps in easing the mind, calms headaches and thus helps with excess sweating due to nervous tension. It also play an active role in stimulating the milk flow in nursing mothers, while promoting the healing of wounds. Moreover, these soothes the nerves and is helpful for digestive problems in adults. These has sedating and calming effects on nerves and brain for various health problems. Further, these are also used to get rid of anxiety, tension, anger, depression and even hypertension.",
        "coa": "",
        "msds": "/assets/images/products/special-ingredients/MSDS/DILL-OIL-MSDS.pdf",
        "image": "/assets/images/products/special-ingredients/DILL-OIL-TERPENELESS.webp",
        "imageAlt": "Here Are Some Technical Details About Dill Oil (Terpeneless)"
      },
      {
        "id": 2,
        "title": "Here Are Some Technical Details About Mentha Arvensis Oil",
        "composition": "The essential oil of Mentha Arvensis is rich in Menthol, which accounts for 70-90% of the oil’s composition. Other components include Menthone, Iso menthone, Menthyl Acetate, Neomenthol, and Pulegone. The plant also contains Flavonoids and other Phenolic compounds.",
        "extraction": "Mentha arvensis oil, also known as wild mint oil or cornmint oil, is an essential oil derived from the steam distillation of the aerial parts (leaves and stems) of the Mentha arvensis plant. Mentha arvensis is traditionally used in patients with hypertension and ischemic heart disease. The plant species are well recognized for their folk medicinal uses, especially to treat cold, fever, digestive and cardiovascular disorders. The leaves of Mentha arvensis are recorded to possess potent therapeutic values.",
        "coa": "",
        "msds": "/assets/images/products/special-ingredients/MSDS/MENTHA ARVENSIS OIL MSDS.pdf",
        "image": "/assets/images/products/special-ingredients/MENTHA-ARVENCIS.webp",
        "imageAlt": "Here Are Some Technical Details About Mentha Arvensis Oil"
      },
      {
        "id": 3,
        "title": "Here Are Some Technical Details About Mentha Citrata Oil",
        "composition": "Mentha citrata oil contains a variety of aromatic chemicals, with the principal ingredients being linalool and linalyl acetate. These components contribute to the citrusy and flowery aroma of the oil, which distinguishes it from regular peppermint or spearmint oils",
        "extraction": "It is a colourless, pale yellow or pale greenish-yellow liquid. It has a characteristic odor and taste followed by a sensation of cold. Mentha citrata oil, commonly known as bergamot mint oil, is an essential oil extracted from the leaves and stems of the Mentha citrata plant. This oil contains a variety of aromatic chemicals, with the principal ingredients being linalool and linalyl acetate. These components contribute to the citrusy and flowery aroma of the oil, which distinguishes it from regular peppermint or spearmint oils.",
        "coa": "/assets/images/products/special-ingredients/coa/MENTHA CITRATA OIL COA.pdf",
        "msds": "/assets/images/products/special-ingredients/MSDS/MENTHA CITRATA OIL MSDS.pdf",
        "image": "/assets/images/products/special-ingredients/MENTHA-CITRATA.webp",
        "imageAlt": "Here Are Some Technical Details About Mentha Citrata Oil"
      },
      {
        "id": 4,
        "title": "Here Are Some Technical Details About Mentha Piperita Oil",
        "composition": "Mentha piperita oil, sometimes known as peppermint oil, is a complex mixture made up mostly of volatile chemical components. Menthol, which gives it its typical cooling sensation, is one of the key ingredients, along with menthone, methyl acetate, and menthyl acetate, which add to its scent and flavor.",
        "extraction": "Mentha Piperita L. is the botanical source of this oil. It is a colourless, pale yellow or pale greenish-yellow liquid. It has a characteristic odor and taste followed by a sensation of cold. The most widely used method for extracting this aromatic oil is steam distillation. Peppermint oil is popular in aromatherapy and a variety of items such as teas, candies, and cosmetics due to its refreshing scent and therapeutic benefits.",
        "coa": "",
        "msds": "/assets/images/products/special-ingredients/MSDS/MENTHA PIPERITA OIL MSDS.pdf",
        "image": "/assets/images/products/special-ingredients/MENTHA-PIPERITA.webp",
        "imageAlt": "Here Are Some Technical Details About Mentha Piperita Oil"
      },
      {
        "id": 5,
        "title": "Here Are Some Technical Details About Mentha Spicata Oil",
        "composition": "The major components of Spearmint oil are Carvone and Limonene, which make up approximately 70-90% of the oil. Other minor components include Menthol, Cineole, Linalool, and Beta-pinene. The chemical composition of Spearmint oil can vary depending on the source and the distillation process used.",
        "extraction": "Spearmint oil is an essential oil that is extracted from the leaves of the spearmint plant (Mentha Spicata) using steam distillation. It has a fresh, minty scent and is commonly used in the food, cosmetic, and pharmaceutical industries for its  flavoring, fragrance, and therapeutic properties. It also has antimicrobial and anti-inflammatory properties, making it useful for treating skin conditions, such as acne and eczema.",
        "coa": "",
        "msds": "/assets/images/products/special-ingredients/MSDS/MENTHA PIPERITA OIL MSDS.pdf",
        "image": "/assets/images/products/special-ingredients/Mentha-Spicata-Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Mentha Spicata Oil"
      },
      {
        "id": 6,
        "title": "Here Are Some Technical Details About Saw Palmetto Extract 25%",
        "composition": "Saw palmetto is also available in powder form and contain Fatty Acids and Sterols.",
        "extraction": "Saw Palmetto Extract is Off-white fine powder with Characterstic Odor. Process of extraction is same as CO2 Extraction process. saw palmetto is promoted as a dietary supplement for urinary symptoms associated with an enlarged prostate gland (also called benign prostatic hyperplasia or BPH), as well as for chronic pelvic pain, migraine, hair loss, and other conditions.",
        "coa": "",
        "msds": "/assets/images/products/special-ingredients/MSDS/SAW PALMETTO EXTARCT MSDS.pdf",
        "image": "/assets/images/products/special-ingredients/Saw-Palmetto-Extract-25.webp",
        "imageAlt": "Here Are Some Technical Details About Saw Palmetto Extract 25%"
      },
      {
        "id": 7,
        "title": "Here Are Some Technical Details About Saw Palmetto Extract 45%",
        "composition": "Saw Palmetto powder contains natural fatty acids and sterols.",
        "extraction": "Saw Palmetto Extract is an off-white fine powder with a characteristic odor, obtained through a CO₂ extraction process. It is widely promoted as a dietary supplement to support urinary health associated with benign prostatic hyperplasia (BPH) and is also used for chronic pelvic pain, migraine relief, hair health, and other wellness applications.",
        "coa": "",
        "msds": "/assets/images/products/special-ingredients/MSDS/SAW PALMETTO EXTARCT MSDS.pdf",
        "image": "/assets/images/products/special-ingredients/Saw-Palmetto-Extract-45.webp",
        "imageAlt": "Here Are Some Technical Details About Saw Palmetto Extract 45%"
      },
      {
        "id": 8,
        "title": "Here Are Some Technical Details About Saw Palmetto Oil Extract 85%",
        "composition": "Saw palmetto's active ingredients include fatty acids, plant sterols, and flavonoids. The berries also contain high molecular weight polysaccharides (sugars).",
        "extraction": "Sawpalmetto oil is acquired from small, scrubby palm tree, scientifically known as Sabal serulata or serenoa repens belonging to palmaceae family by CO2 extraction process. Pure Saw Palmetto Oil is yellow /Red to brown oily liquid with characteristic odor. Botanical Source is Serenoa Repens berries. It is frequently included in dietary supplements and herbal treatments to support prostate health and treat BPH-related urinary problems",
        "coa": "",
        "msds": "/assets/images/products/special-ingredients/MSDS/SAW PALMETTO EXTARCT MSDS.pdf",
        "image": "/assets/images/products/special-ingredients/SAW-PALMETTO-EXTRACT85.webp",
        "imageAlt": "Here Are Some Technical Details About Saw Palmetto Oil Extract 85%"
      },
      {
        "id": 9,
        "title": "Here Are Some Technical Details Saw Palmetto Extract USP",
        "composition": "Saw palmetto's active ingredients include fatty acids, plant sterols, and flavonoids. The berries also contain high molecular weight polysaccharides (sugars).",
        "extraction": "Sawpalmetto oil is acquired from small, scrubby palm tree, scientifically known as Sabal serulata or serenoa repens belonging to palmaceae family by CO2 extraction process. Pure Saw Palmetto Oil is yellow /Red to brown oily liquid with characteristic odor. Botanical Source is Serenoa Repens berries. It is frequently included in dietary supplements and herbal treatments to support prostate health and treat BPH-related urinary problems.",
        "coa": "",
        "msds": "/assets/images/products/Carrier-Oils/MSDS/SAW PALMETTO OIL MSDS.pdf",
        "image": "/assets/images/products/special-ingredients/Saw-Palmetto-Extract-USP.webp",
        "imageAlt": "Here Are Some Technical Details Saw Palmetto Extract USP"
      }
    ],
    "perPage": 6
  },
  "hydrosol-oils": {
    "intro": [
      "Hydrosols are water-based products made through the distillation of fresh flowers, leaves, fruits, and other plant materials. As a byproduct of the Essential oil process, hydrosols retain many of the same beneficial properties as Essential oils but in a more diluted form. While Essential oils are concentrated and oil-based, Hydrosols consist mostly of water, making them gentler and suitable for a variety of uses, including skincare, aromatherapy, and other holistic treatments. Known as floral waters, hydrosols are particularly valued for their soothing effects and mild fragrance, which can be applied directly to the skin without irritation. For businesses that require large volumes of hydrosols oils, sourcing from a trusted <b>Hydrosol Bulk Suppliers</b> is essential to ensure consistent quality and availability.",
      "Hydrosols are often used in beauty products, making partnerships with a reliable <b>Hydrosol Bulk Manufacturer</b> important for maintaining the effectiveness and purity of the product. Additionally, purchasing from a Hydrosol wholesale suppliers allows businesses to acquire these water-based oils at competitive prices, helping them grow production while maintaining cost efficiency. The versatility of hydrosols makes them a valuable product to various industries, from skincare to aromatherapy, ensuring they remain a staple in natural product formulations."
    ],
    "typesTitle": "Types of Hydrosols",
    "types": [
      {
        "id": 1,
        "label": "Ajwain Hydrosol"
      },
      {
        "id": 2,
        "label": "Anise Hydrosol"
      },
      {
        "id": 3,
        "label": "Bergamot Hydrosol"
      },
      {
        "id": 4,
        "label": "Black Pepper Hydrosol"
      },
      {
        "id": 5,
        "label": "Bois de Rose Hydrosol"
      },
      {
        "id": 6,
        "label": "Cajeput Hydrosol"
      },
      {
        "id": 7,
        "label": "Calamus Hydrosol"
      },
      {
        "id": 8,
        "label": "Cardamom Hydrosol"
      },
      {
        "id": 9,
        "label": "Carrot Seed Hydrosol"
      },
      {
        "id": 10,
        "label": "Cassia Hydrosol"
      },
      {
        "id": 11,
        "label": "Cedarwood Hydrosol"
      },
      {
        "id": 12,
        "label": "Chamomile Hydrosol"
      },
      {
        "id": 13,
        "label": "Cinnamon Bark Hydrosol"
      },
      {
        "id": 14,
        "label": "Cinnamon Leaf Hydrosol"
      },
      {
        "id": 15,
        "label": "Citronella Hydrosol"
      },
      {
        "id": 16,
        "label": "Clary Sage Hydrosol"
      },
      {
        "id": 17,
        "label": "Clove Bud Hydrosol"
      },
      {
        "id": 18,
        "label": "Coriander Hydrosol"
      },
      {
        "id": 19,
        "label": "Cumin Hydrosol"
      },
      {
        "id": 20,
        "label": "Dill Hydrosol"
      },
      {
        "id": 21,
        "label": "Eucalyptus  Hydrosol"
      },
      {
        "id": 22,
        "label": "Fennel Hydrosol"
      },
      {
        "id": 23,
        "label": "Fenugreek Hydrosol"
      },
      {
        "id": 24,
        "label": "Frankincense Hydrosol"
      },
      {
        "id": 25,
        "label": "Garlic Hydrosol"
      },
      {
        "id": 26,
        "label": "Geranium Hydrosol"
      },
      {
        "id": 27,
        "label": "Ginger Hydrosol"
      },
      {
        "id": 28,
        "label": "Grapefruit Hydrosol"
      },
      {
        "id": 29,
        "label": "Holy Basil Hydrosol"
      },
      {
        "id": 30,
        "label": "Juniper Hydrosol"
      },
      {
        "id": 31,
        "label": "Lavender Hydrosol"
      },
      {
        "id": 32,
        "label": "Lemon Hydrosol"
      },
      {
        "id": 33,
        "label": "Lemongrass Hydrosol"
      },
      {
        "id": 34,
        "label": "Lime Hydrosol"
      },
      {
        "id": 35,
        "label": "Mandarin Hydrosol"
      },
      {
        "id": 36,
        "label": "Marjoram Hydrosol"
      },
      {
        "id": 37,
        "label": "Myrtle Hydrosol"
      },
      {
        "id": 38,
        "label": "Neroli Hydrosol"
      },
      {
        "id": 39,
        "label": "Niaouli Hydrosol"
      },
      {
        "id": 40,
        "label": "Nutmeg Hydrosol"
      },
      {
        "id": 41,
        "label": "Onion Hydrosol"
      },
      {
        "id": 42,
        "label": "Orange Hydrosol"
      },
      {
        "id": 43,
        "label": "Oregano Hydrosol"
      },
      {
        "id": 44,
        "label": "Palmarosa Hydrosol"
      },
      {
        "id": 45,
        "label": "Parsley Hydrosol"
      },
      {
        "id": 46,
        "label": "Peppermint Hydrosol"
      },
      {
        "id": 47,
        "label": "Petitgrain Hydrosol"
      },
      {
        "id": 48,
        "label": "Rosemary Hydrosol"
      },
      {
        "id": 49,
        "label": "Sage Hydrosol"
      },
      {
        "id": 50,
        "label": "Spearmint Hydrosol"
      },
      {
        "id": 51,
        "label": "Sweet Basil Hydrosol"
      },
      {
        "id": 52,
        "label": "Tagetes Hydrosol"
      },
      {
        "id": 53,
        "label": "Tea Tree Hydrosol"
      },
      {
        "id": 54,
        "label": "Thyme Hydrosol"
      },
      {
        "id": 55,
        "label": "Turmeric Hydrosol"
      },
      {
        "id": 56,
        "label": "Valerian Root Hydrosol"
      },
      {
        "id": 57,
        "label": "Verbena Hydrosol"
      },
      {
        "id": 58,
        "label": "Wintergreen Hydrosol"
      },
      {
        "id": 59,
        "label": "Ylang Ylang Hydrosol"
      }
    ],
    "items": [
      {
        "id": 1,
        "title": "Here Are Some Technical Details About Ajwain Hydrosol",
        "composition": "Major Constituents are  Thymol, Oleic acid, linoleic acid, gamma-terpinene, p-cymene, palmitic acid, and xylene.",
        "extraction": "Ajwain seeds are steam distilled to produce Ajwain hydrosol. Ajwain hydrosol helps in fighting against bacteria, fungi, parasites, and viruses and is very helpful for fatigue, and weakness and assists recovery after illness or accidents. Ajwain hydrosol is very beneficial for skin-related problems.",
        "coa": "/assets/images/products/Hydrosol/COA/AJWAIN HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Ajowan Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/AJWAIN-HYDROSOL.webp",
        "imageAlt": "Here Are Some Technical Details About Ajwain Hydrosol"
      },
      {
        "id": 2,
        "title": "Here Are Some Technical Details About Anise Hydrosol",
        "composition": "The Anise HYdrosol/floral water is rich in Thymol, Terpineol and Anethole.",
        "extraction": "Aniseed Floral Water is extracted the Steam distillation method. Soon after gentle crush, aniseed seeds are distilled that forms aniseed floral water that has aniseed fragrance. Aniseed Floral Water is widely used as a flavoring agent in cookies and cakes manufacturing industry. As this is crushed and extracted via the steam distillation process, this is free from artificial additives/preservatives and therefore, do not impart any harmful effect upon using it. It is also beneficial to the respiratory and immune systems and can be used to freshen the breath.",
        "coa": "/assets/images/products/Hydrosol/COA/ANISE HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Anise Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/ANISE HYDROSOL.webp",
        "imageAlt": "Here Are Some Technical Details About Anise Hydrosol"
      },
      {
        "id": 3,
        "title": "Here Are Some Technical Details About Bergamot Hydrosol",
        "composition": "Bergamot hydrosol is believed to include Terpenes, Esters, Alcohols, and Aldehydes",
        "extraction": "Bergamot hydrosol is the by-product of the steam distillation method from which bergamot essential oil is produced. It is colorless to pale yellow to pale green in color. Bergamot hydrosol is soothing, anti-inflammatory, antibacterial, and disinfecting in nature. Bergamot Hydrosol can be used as a refreshing spritz. This can be used on neck and body. It can also be used as a substitute for water in the formulation process.",
        "coa": "/assets/images/products/Hydrosol/COA/BERGAMOT HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Bergamot Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Bergamot-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Bergamot Hydrosol"
      },
      {
        "id": 4,
        "title": "Here Are Some Technical Details About Black Pepper Hydrosol",
        "composition": "Black Pepper contains a-thujone, a-pinene, camphene, sabinene, b-pinene, linalool, and terpinen-4-ol.",
        "extraction": "Black Pepper Hydrosol is obtained as a by-product during the extraction of Black Pepper Essential oil. It is obtained by Steam distillation of Piper Nigrum fruits or also know as pepper fruit. Black Pepper hydrosol is useful in preventing and treating skin infections. Black Pepper Hydrosol is commonly used in mist forms, you can use it to treat skin infections, reducing acne, relieving itchy scalp, and for acne prone skin",
        "coa": "/assets/images/products/Hydrosol/COA/BLACK PEPPER HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Black Pepper Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/BLACK-PEPPER-HYDROSOL.webp",
        "imageAlt": "Here Are Some Technical Details About Black Pepper Hydrosol"
      },
      {
        "id": 5,
        "title": "Here Are Some Technical Details About Bois de Rose Hydrosol",
        "composition": "Bois de Rose Hydrosol contains water-soluble aromatic constituents associated with rosewood distillation.",
        "extraction": "Bois de rose is also known as Rosewood and is extracted from the Aniba rosaeodora tree. The scent is sweet, woody, fruity and floral. It is used in making soaps and perfumes and helps to receive pain and prevent the formation of wrinkles, pimples, acne and blackheads. It helps to improve libido and reduce stress.",
        "coa": "/assets/images/products/Hydrosol/COA/BOIS-DE-ROSE HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Bois-De-Rose Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/BOIS-DE-ROSE-HYDROSOL.webp",
        "imageAlt": "Here Are Some Technical Details About Bois de Rose Hydrosol"
      },
      {
        "id": 6,
        "title": "Here Are Some Technical Details About Cajeput Hydrosol",
        "composition": "Cajeput contains higher concentrations of 1,8 Cineole(Eucalyptol), limonene and alpha-terpineol.",
        "extraction": "Cajeput hydrosol is a by-product of the steam distillation process used to extract cajeput essential oil from the leaves of the Melaleuca leucadendron or Melaleuca cajuputi plant. Appearance is almost colourless. It is used to relieve fever, nasal and chest congestion and relieving pain and to eliminate sinus congestion. Also can be used to treat muscle cramps.",
        "coa": "/assets/images/products/Hydrosol/COA/CAJEPUT HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Cajeput Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Cajeput-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Cajeput Hydrosol"
      },
      {
        "id": 7,
        "title": "Here Are Some Technical Details About Calamus Hydrosol",
        "composition": "Calamus hydrosol is believed to include water-soluble components similar to those found in calamus essential oil.Some of the major compounds are α- and β-pinene, α-terpineol, β-caryophyllene, linalool, α-bisabolol, α-asarone, β-asarone.",
        "extraction": "Calamus Hydrosol is a by-product of the steam distillation process used to extract calamus essential oil from the rhizomes of Acorus calamus. Calamus Oil also alleviates mental stress and rejuvenates the senses during periods of situational anxiety and/or depression. This effectively provides relief from pain, like chronic back pain. The positive effect of natural moisturizing properties of Calamus helps nourishing your skin, nail and head and improves blood circulation.",
        "coa": "/assets/images/products/Hydrosol/COA/CALAMUS HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Calamus Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Calamus-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Calamus Hydrosol"
      },
      {
        "id": 8,
        "title": "Here Are Some Technical Details About Cardamom Hydrosol",
        "composition": "The main chemical components of cardamom oil are 1.8-cineole and ρ-cymene that are also present in the hydrosol.",
        "extraction": "Cardamom hydrosol is obtained as a by-product during the extraction of Cardamom Essential Oil. It is obtained by steam distillation of Elettaria Cardamomum or Cardamom Seeds. Cardamom hydrosol is known for its enriching and pleasant aroma which is used in reducing minor pain and inflammation and for helping congestion as well. It also helps to reduce stress and anxiety. Cardamom hydrosol can also be used in the making of Creams, Lotions, Shampoos, Conditioners, Soaps, Body wash.",
        "coa": "/assets/images/products/Hydrosol/COA/CARDAMOM HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Cardamon Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Cardamom-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Cardamom Hydrosol"
      },
      {
        "id": 9,
        "title": "Here Are Some Technical Details About Carrot Seed Hydrosol",
        "composition": "The major constituents of Carrot seed Hydrosol are carotol, daucene, (Z,Z)-α-farnesene, germacrene D, trans-α-bergamotene and β-selinene as same as essential oil.",
        "extraction": "Carrot seed hydrosol is obtained from Carrot seed oil whichis extracted from the dried seeds through steam distillation, which is most commonly used due to its ability to excellently preserve valuable nutrients. It promotes healthy new skin cell growth making it remarkable for anti-aging, eczema, psoriasis, rashes, burns, scars, and after dermal abrasions and peels. Its antifungal and antibacterial properties might help with skin infections.",
        "coa": "/assets/images/products/Hydrosol/COA/CARROT SEED HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Carrot Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Carrot-Seed-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Carrot Seed Hydrosol"
      },
      {
        "id": 10,
        "title": "Here Are Some Technical Details About Cassia Hydrosol",
        "composition": "Water-soluble substances found in cassia hydrosol, such as certain phenolic compounds and flavonoids, may contribute to its potential therapeutic applications. Cinnamaldehyde as the main compound in the Oil as followed in Hydrosol.",
        "extraction": "Cassia hydrosol is obtained as a by-product during the extraction of Cassia Essential oil. It is extracted during steam distillation of Cinnamomum Cassia or Cassia barks. Cassia hydrosol is naturally filled with sweet and spicy aroma, this natural scent is a powerful tool to reduce stress and tension. It is also known as Chinese Cinnamon, because of its similarity of taste and aroma to original cinnamon. Cassia Hydrosol is commonly used in mist forms, you can use it to treat acne, relieve skin rashes, itchy scalp, and acne prone skin.",
        "coa": "/assets/images/products/Hydrosol/COA/CASSIA HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Cassia Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Cassia-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Cassia Hydrosol"
      },
      {
        "id": 11,
        "title": "Here Are Some Technical Details About Cedarwood Hydrosol",
        "composition": "Cedarwood Hydrosol is mostly made of water, but still contains the aromatic components that give cedarwood essential oil its unique woodsy scent.The main chemical components of Cedarwood oil are a-cedrene, b-cedrene, thujopsene, other sesquiterpenes, cedrol and widdrol",
        "extraction": "Cedarwood hydrosol is obtained as a by-product during the extraction of Cedar Wood Essential Oil which is obtained by Steam Distillation of Cedrus Deodara or Cedar Wood Bark. It is almost Colourless in form.Cedar Wood hydrosol is an anti-bacterial hydrosol popular for repelling away mosquitoes and insects. It has a sweet, spicy, woody and raw aroma.Cedar Wood Hydrosol is commonly used in mist forms, you can add it to relieve skin rashes, hydrate skin, prevent infections nourish scalp. Cedar Wood hydrosol can also be used in the making of Creams, Lotions, Shampoos, Conditioners, Soaps, Body wash etc.",
        "coa": "/assets/images/products/Hydrosol/COA/CEDARWOOD HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Cedarwood Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Cedarwood-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Cedarwood Hydrosol"
      },
      {
        "id": 12,
        "title": "Here Are Some Technical Details About Chamomile Hydrosol",
        "composition": "Water-soluble substances from chamomile flowers are found in Chamomile hydrosol.The hydrosol still contains some of the aromatic chemicals that are present in chamomile essential oil, but they are much less concentrated, giving it a milder and more calming scent.",
        "extraction": "Chamomile Hydrosol, a natural botanical water, is created as a byproduct of the steam distillation process used to extract essential oil from chamomile flowers. It has been used to treat respiratory issues like Asthma, Cold and Flu, Cough, etc since a long time. Its smell is also known to reduce anxiety and early signs of depression. Chamomile Hydrosol has all the benefits, without the strong intensity, that Essential oils have. Chamomile Roman hydrosol can be beneficial in treating skin allergies, rashes and Acne because of its anti-bacterial nature.",
        "coa": "/assets/images/products/Hydrosol/COA/CHAMOMILE HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Chamomile Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Chamomile-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Chamomile Hydrosol"
      },
      {
        "id": 13,
        "title": "Here Are Some Technical Details About Cinnamon Leaf Hydrosol",
        "composition": "The basic component of this oil was found to be eugenol, followed by β-caryophyllene, benzyl benzoate, linalool, eugenyl acetate and cinnamyl acetate.",
        "extraction": "The plant source of cinnamon leaf oil is Cinnamomum Verum. Steam distillation is the method to extract this oil. It is a clear liquid that ranges in tint from yellow to brown. Deep, woodsy, spicy cinnamon, sweet aromatic-spicy, warm, harsh balsam, and a slightly harsh fragrance can all be smelled in this oil. Cinnamon Essential Oil, when applied topically or for cosmetic use, is thought to soothe dry skin, successfully treat aches, pains, and stiffness in the muscles and joints, deal with infections, rashes, and acne, improve circulation, nourish the skin, delay the appearance of ageing, and brighten skin tone.",
        "coa": "/assets/images/products/Hydrosol/COA/Cinnamon Leaf Hydrosol COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Cinnamon Leaf Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Cinnamon-Leaf-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Cinnamon Leaf Hydrosol"
      },
      {
        "id": 14,
        "title": "Here Are Some Technical Details About Cinnamon Bark Hydrosol",
        "composition": "Major Consituents are Cinnamaldehyde, linalool, β-caryophyllene, eucalyptol, and eugenol that are distinctive to Cinnamon's essential oil.",
        "extraction": "This Hydrosol is steam distilled from the rich, spicy bark of the small Cinnamomum verum tree which is grown in the wild forest of Sri Lanka. It has a charming, sweet, spicy aroma that evokes a sense of strength, boldness, and warmth. This hydrosol helps regulate healthy bacteria management as well as reduce the presence of unwelcome microbial activity. It is also used as a room spray because it can be very stimulating and be clearing to the mind.",
        "coa": "/assets/images/products/Hydrosol/COA/Cinnamon Bark Hydrosol COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Cinnamon Bark Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/CINNAMON-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Cinnamon Bark Hydrosol"
      },
      {
        "id": 15,
        "title": "Here Are Some Technical Details About Citronella Hydrosol",
        "composition": "Water is the main ingredient in citronella hydrosol because it was the main solvent utilized in the steam distillation procedure. This hydrosol also includes water-soluble chemicals made from citronella grass. These substances, which give citronella its distinctive lemony, citrus-like aroma, include Citronellal, Citronellol, and Geraniol.",
        "extraction": "Citronella hydrosol, also known as citronella floral water or citronella water, is a product obtained through the steam distillation of citronella grass (Cymbopogon nardus or Cymbopogon winterianus). Citronella hydrosol can be used as a natural alternative to chemical-based insect repellents and good for skin care products due to its astringent and toning properties. Citronella grass hydrosol is also used as a natural cleaner and deodorizer.",
        "coa": "/assets/images/products/Hydrosol/COA/CITRONELLA HYDROSOL.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Citronella Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Citronella-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Citronella Hydrosol"
      },
      {
        "id": 16,
        "title": "Here Are Some Technical Details About Clary Sage Hydrosol",
        "composition": "Some of the distinctive aromatic components included in clary sage essential oil, such as linaool, linayl acetate, caryophyllene, a-terpineol, geraniol, neryl acetate, sclareol and germacrene D are also found in Hydrosol.",
        "extraction": "Pure Clary sage hydrosol is steam distilled from the pastel purple flowers and soft green leaves of the Salvia sclarea plant. The pleasing aroma of Clary sage hydrosol is unmatched and treats anxiety, stress, treats depression and reduces mental pressure as well. It provides skin moisture and protection against bacterial attacks. It is used to reduce inflammation related to acne, eczema, psoriasis and other inflammatory skin conditions.",
        "coa": "/assets/images/products/Hydrosol/COA/CLARY SAGE HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Clary Sage Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/CLARY-SAGE-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Clary Sage Hydrosol"
      },
      {
        "id": 17,
        "title": "Here Are Some Technical Details About Clove Hydrosol",
        "composition": "Eugenol is the major compound,the remaining consists of eugenyl acetate, β-caryophyllene, and α-humulene",
        "extraction": "Clove hydrosol is obtained by steam distillation as a by-product during the extraction of Clove Bud Essential Oil. Clove hydrosol is an aromatic liquid, that has sedative effect on senses. It has an intense, warm and spicy scent with soothing notes. Clove Hydrosol has a compound called Eugenol which is a natural Sedative and Anaesthetic when it is applied on skin it reduces over sensitivity and inflammation. Clove Hydrosol is commonly used in mist forms, you can add it to relieve skin rashes, hydrate skin, prevent infections, nourish scalp.",
        "coa": "/assets/images/products/Hydrosol/COA/CLOVE HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Clove Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Clove-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Clove Hydrosol"
      },
      {
        "id": 18,
        "title": "Here Are Some Technical Details About Coriander Hydrosol",
        "composition": "Linalool, neryl acetate , γ-terpinene and α-pinene  were identified as main components in the oil of Coriander accessions.",
        "extraction": "Coriander hydrosol is obtained by steam distillation of Coriandrum Sativum or Coriander Seeds as a by-product during the extraction of Coriander Essential Oil. It has a warm, sweet-spicy fresh aroma with slight hints of woody notes and is anti-bacterial & Anti-fungal in nature, that treats skin infections and allergies. Coriander Hydrosol is filled with Vitamin E and C, that offers lots of benefits to skin.It can also act as a circulatory agent, and reduce pain and cramps. It improves blood flow in the body and treat body ache as well.",
        "coa": "/assets/images/products/Hydrosol/COA/CORIANDER HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Coriander Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Coriander-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Coriander Hydrosol"
      },
      {
        "id": 19,
        "title": "Here Are Some Technical Details About Cumin Hydrosol",
        "composition": "The major compounds in all cumin oils are the monoterpenes beta-pinene, p-cymene and gamma-terpinene and the terpenoid aldehydes cuminic aldehyde and the isomeric menthadien carboxaldehydes.",
        "extraction": "Cumin Seed hydrosol is extracted as a by-product during the extraction of Cumin Seed Essential Oil by Steam Distillation of Cuminum Cyminum or Cumin fruit. Cumin Seed hydrosol is an anti-inflammatory liquid, with a strong aromatic hold. Cumin Seed Hydrosol has a very warm, spicy and nutty aroma that can reduce mental pressure and promote relaxation in nervous system. Cumin Seed Hydrosol is commonly used in mist forms, you can add it to relieve skin rashes, hydrate skin, prevent infections, nourish scalp. It is anti-bacterial and anti-parasitic in nature that makes it perfect to use for allergic skin and treat infections.",
        "coa": "/assets/images/products/Hydrosol/COA/CUMIN HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Cumin Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Cumin-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Cumin Hydrosol"
      },
      {
        "id": 20,
        "title": "Here Are Some Technical Details About Dill Hydrosol",
        "composition": "Some of the consituents as in Dill Seed oil are Carvone, limonene, α-phellandrene,dill ether, limonene and p-cymene",
        "extraction": "Dill Seed hydrosol is obtained as a by-product during the extraction of Dill Seed Essential Oil by steam distillation of Anethum Sowa or Dill Seed Seeds. Dill Seed has been considered as Indian Dill, and used for respiratory issues as well as digestive complications. Dill Seed hydrosol is an anti-microbial fluid with warm aroma and healing properties. It has a spicy, sweet and pepper-like aroma that’s beneficial in treating mental conditions such as anxiety, stress, tension and symptoms of Depression as well",
        "coa": "/assets/images/products/Hydrosol/COA/DILL HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Dill Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Dill-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Dill Hydrosol"
      },
      {
        "id": 21,
        "title": "Here Are Some Technical Details About Eucalyptus Hydrosol",
        "composition": "The major constituents of Eucalyptus leaves essential oils are 1,8-cineol and α-pinene. These substances  are what give eucalyptus its characteristically energising, camphoraceous odor.",
        "extraction": "Eucalyptus hydrosol is obtained as a by-product during the extraction of Eucalyptus Essential Oil. Eucalyptus hydrosol is a highly fragrant and clean liquid. It has a minty fresh and camphorous aroma. It can enter senses and relieve mental pressure and signs of anxiety, stress, tension, etc. Eucalyptus hydrosol also includes mild tonic as well as skin cleansing properties. It is added to soaps, body washes, cleaners, and other bathing products. It is also added to fresheners and cleaners for this neat aroma. Its anti-bacterial nature is used in treating respiratory complications like common cough and cold. It is a natural disinfectant and insecticide as well, which can clean any surface and repel insects and bugs.",
        "coa": "/assets/images/products/Hydrosol/COA/EUCALYPTUS HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Eucalyptus Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Eucalyptus-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Eucalyptus Hydrosol"
      },
      {
        "id": 22,
        "title": "Here Are Some Technical Details About Fennel Hydrosol",
        "composition": "This hydrosol contains fennel seed-derived water-soluble chemicals. These substances include aromatic chemicals like anethole, fenchone, and other phytonutrients that help give fennel its characteristic mild, sweet, and faintly licorice-like aroma.",
        "extraction": "Fennel Seed hydrosol is obtained as a by-product during the extraction of Fennel Seed Essential Oil. It is obtained by steam distillation of Foeniculum Vulgare or Fennel Seeds. It has a sweet-spicy and liquorice that enters senses and relieves mental pressure. Fennel hydrosol is used in massages, aromatic baths, pain relief ointments and others for its anti-spasmodic nature. It promotes blood flow in body and helps in dealing with body ache, cramps, contractions",
        "coa": "/assets/images/products/Hydrosol/COA/FENNEL HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Fennel Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Fennel-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Fennel Hydrosol"
      },
      {
        "id": 23,
        "title": "Here Are Some Technical Details About Fenugreek Hydrosol",
        "composition": "This hydrosol comprises fenugreek seed extracts that are water-soluble chemicals. Fenugreek Oil is rich in linoleic acid , linolenic acid , and oleic acid.",
        "extraction": "Fenugreek Hydrosol, a floral water is a by product and obtained from fenugreek seeds through the steam distillation process. Fenugreek Hydrosol is filled with Vitamin C which helps lighten the skin complexion and gives it a beautiful glow. Fenugreek Seeds also contains Vitamin K that help in reducing blemishes and dark circles from the skin. It also helps fight dandruff, fight premature greying and promotes hair growth.",
        "coa": "/assets/images/products/Hydrosol/COA/FENUGREEK HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Fenugreek Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Fenugreek-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Fenugreek Hydrosol"
      },
      {
        "id": 24,
        "title": "Here Are Some Technical Details About Frankincense Hydrosol",
        "composition": "This hydrosol contains water-soluble compounds extracted from the Frankincense resin. some of the consituents are Monoterpenols, phenols.",
        "extraction": "Frankincense hydrosol is obtained as a by-product during the extraction of Frankincense Essential Oil. It is obtained by steam distillation of Boswellia Frereana or Frankincense Resin. This hydrosol is wonderfully fragrant and is very soothing and relaxing. Frankincense hydrosol has a light, slightly sweet woody scent. Excellent used as facial toner especially for mature skin to help reduce fine lines and soothe blemishes..It is believed that the aroma of Frankincense Hydrosol can reduce mental pressure by lowering stress levels, anxiety, and promoting relaxation as well. Its anti-inflammatory properties are used in massages, and steam baths. It can also promote blood circulation in body and treat menstrual pain. It is antibacterial and anti-microbial in nature and can prevent acne, scars, wrinkles, fine lines, etc.",
        "coa": "/assets/images/products/Hydrosol/COA/FRANKINCENSE HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Frankincense Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Frankincense-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Frankincense Hydrosol"
      },
      {
        "id": 25,
        "title": "Here Are Some Technical Details About Garlic Hydrosol",
        "composition": "This hydrosol contains water-soluble compounds extracted from the garlic bulbs. These compounds include allicin, sulfur-containing compounds, and other phytonutrients, which contribute to the pungent, strong, and characteristic garlic odor.",
        "extraction": "Garlic hydrosol is obtained as a by-product during the extraction of Garlic Essential Oil. It is obtained by steam distillation of Allium Sativum or Garlic roots. Garlic hydrosol is one of the most powerful and medicinal properties. It has a strong, blunt and spicy aroma that can be beneficial in treating many respiratory and mental complications. Garlic hydrosol has anti-bacterial and anti-allergic benefits, that’s why it is popularly used in making bathing and cosmetic products. And Garlic hydrosol is also a natural disinfectant and insecticide as well",
        "coa": "/assets/images/products/Hydrosol/COA/GARLIC HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Garlic Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Garlic-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Garlic Hydrosol"
      },
      {
        "id": 26,
        "title": "Here Are Some Technical Details About Geranium Hydrosol",
        "composition": "Geranium Hydrosol comprises geranium plant material extracts that are water-soluble. These substances include aromatic chemicals like Geraniol, Citronellol, and other phytonutrients.",
        "extraction": "Geranium Hydrosol, a natural floral water obtained through the steam distillation of geranium leaves and stems. It is used to deeply nourish the skin and is used to heal dry, chaffed and wounded skin. Rose Geranium Hydrosol has the most rosy and floral aroma. It is used in many products, diffusers, fresheners and others for this same aroma. It can improve mood and stimulate hormonal balance as well. It is added to skin care products because of its anti-ageing and anti-acne benefits. It is used in making bathing products like soaps, body washes, floor cleaners, and others to make them more nourishing and effective for all skin type.",
        "coa": "/assets/images/products/Hydrosol/COA/GERANIUM HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Geranium Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Geranium-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Geranium Hydrosol"
      },
      {
        "id": 27,
        "title": "Here Are Some Technical Details About Ginger Hydrosol",
        "composition": "Ginger hydrosol comprises substances that can dissolve in water that were taken from the ginger rhizomes.",
        "extraction": "Ginger hydrosol is obtained as a by-product during the extraction of Ginger Essential Oil. It is obtained by steam distillation of Zingiber Officinale or Ginger roots. It has a warm and spicy aroma that can treat cold, cough and congestion from the core. It is naturally blessed with anti-oxidants and vitamins that repair and rejuvenate skin. It is also used to treat acne and blemishes. It is an anti-inflammatoryliquid and can treat body pain, muscular cramps, contractions, etc. Hence, it is used in making pain relief balms and ointments. The invigorating aroma of Ginger Hydrosol can relieve stress and anxiety and boast confidence. It is also anti-bacterial in nature, which helps in protecting skin against infections and allergies. It can be used to make disinfectants and cleaners.",
        "coa": "/assets/images/products/Hydrosol/COA/GINGER HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Ginger Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Ginger-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Ginger Hydrosol"
      },
      {
        "id": 28,
        "title": "Here Are Some Technical Details About Grapefruit Hydrosol",
        "composition": "Water-soluble substances that were isolated from grapefruit peels are present in this hydrosol. Limonene is the main consituent in Grapefruit oil.",
        "extraction": "Grapefruit Hydrosol, a floral water produced through the steam distillation of grapefruit peels. Grapefruit hydrosol is highly aromatic water recovered at the pre-heater stage of the evaporator during the fruit juice concentration process.  It is lightly aromatic with fresh, sweet, citrusy, pleasant aroma which is uplifting and cleansing and ideal for situations when one is looking to reduce the presence of unwanted bacteria and fungus.It is used to relieve minor pain and inflammation.",
        "coa": "/assets/images/products/Hydrosol/COA/GRAPEFRUIT HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Grapefruit Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Grapefruit-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Grapefruit Hydrosol"
      },
      {
        "id": 29,
        "title": "Here Are Some Technical Details About Holy Basil Hydrosol",
        "composition": "Water, the principal solvent utilized throughout the steam distillation process, is the main component of holy basil hydrosol. This hydrosol also contains water-soluble substances that were taken from the holy basil plant. These substances include aromatic chemicals like eugenol, caryophyllene, and other phytonutrients.",
        "extraction": "Natural Basil Hydrosol is the by-product of steam distillation of basil essential oil. There are two types of basil namely: sweet basil (Ocimum basilicum) and holy basil (Ocimum sanctum) also called tulsi. It is obtained by the steam distillation of Ocimum Sanctum or more commonly known as Indian Holy Basil, leaves. Basil is a natural antibacterial and antifungal. These two qualities make basil floral water excellent to add to lotions or 'spray recipes' designed to fight fungi. The basil hydrosol water is a perfect ingredient for different uses like hair care products, cosmetic care products, room spray, linen spray, room fresheners, aromatic bath, cleaners, skincare products and also aromatherapy. Basil leaves hold great significance in Indian Culture, it has also been called the Elixir of Life for its many healing and cleansing properties. It is used in making herbal teas, concoctions to treat cough and fever.",
        "coa": "/assets/images/products/Hydrosol/COA/HOLY BASIL HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Holy Basil Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Holy-Basil-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Holy Basil Hydrosol"
      },
      {
        "id": 30,
        "title": "Here Are Some Technical Details About Juniper Hydrosol",
        "composition": "Water, the principal solvent used during the steam distillation process, makes up the majority of juniper hydrosol. This hydrosol also includes water-soluble substances derived from juniper berries. These substances include aromatic molecules like alpha- and beta-pinene as well as other phytonutrients, which help to give juniper its characteristic fresh, pine-like, and woodsy scent.",
        "extraction": "Juniper Hydrosol is obtained through the steam distillation of juniper berries. Because of its ability to detoxify, stimulate, and drain, juniper hydrosol is advised. Additionally, this natural tonic enhances circulation, which is beneficial for fatigued legs, for example. It can be a hydrating or energising beverage as well. In terms of beauty, it successfully helps to detoxify the skin.",
        "coa": "/assets/images/products/Hydrosol/COA/JUNIPER HYDROSOL COA .pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Juniper Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Juniper-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Juniper Hydrosol"
      },
      {
        "id": 31,
        "title": "Here Are Some Technical Details About Lavender Hydrosol",
        "composition": "Water, the major solvent is the main component of lavender hydrosol. This hydrosol includes water-soluble substances that were isolated from lavender flowers in addition to water. Along with other phytonutrients, these substances include aromatic chemicals like linalool and linalyl acetate, which help give lavender its characteristically mild, flowery, and herbaceous scent.",
        "extraction": "Lavender hydrosol/ filtered is obtained as a by-product during the extraction of Lavender Essential Oil. It is obtained by steam distillation of Lavandula Angustifolia, commonly known as Lavender in general. Its flowering buds are used to extract this hydrosol. Lavender Hydrosol is renowned for its ability to relax and balance your mind. It can also be used in Spas, Massages, Therapies, to reduce internal inflammation and for pain relief. Lavender Hydrosol is loaded with astringent properties which makes it excellent for skincare purposes. Natural Lavender Hydrosol acts as a mild tonic that may help you to fade blemishes, spots, and scar marks from your skin.",
        "coa": "/assets/images/products/Hydrosol/COA/LAVENDER HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Lavender Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Lavender-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Lavender Hydrosol"
      },
      {
        "id": 32,
        "title": "Here Are Some Technical Details About Lemon Hydrosol",
        "composition": "Water, the principal solvent utilized throughout the steam distillation process, is the main component of lemon hydrosol. It also contains lemon oil which include aromatic chemicals contains mainly Limonene,Citral,Citronellal and Geranyl acetate",
        "extraction": "Lemon hydrosol is obtained by steam distillation of Citrus Limonum, commonly known as Lemon in general. Rinds or Peels of lemon fruits are used to extract this hydrosol. Lemon Hydrosol can also be called the Beauty Hydrosol, because of the many benefits it provides to skin. It has high amounts of Vitamin C, anti-oxidants and other agents that treat acne and reduce pigmentation on skin. It is also a great anti-ageing toner, that can reverse the signs of sun damage and prevent premature ageing. Lemon Hydrosol is also a natural treatment for skin and scalp allergies. It can be used to treat infections on skin like athlete’s foot, prickly skin, allergies, etc.",
        "coa": "/assets/images/products/Hydrosol/COA/LEMON HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Lemon Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Lemon-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Lemon Hydrosol"
      },
      {
        "id": 33,
        "title": "Here Are Some Technical Details About Lemongrass Hydrosol",
        "composition": "Water is the principal constituent of Lemongrass Hydrosol. This hydrosol contains water-soluble chemicals derived from lemongrass plant material. Citronellal, geraniol, and other phytonutrients are among the aromatic chemicals that contribute to the zesty, lemony, and fresh perfume associated with lemongrass.",
        "extraction": "Lemon Grass hydrosol is obtained as a by-product during the extraction of Lemon Grass Essential Oil. It is obtained by steam distillation of Cymbopogon Citratus, commonly known as Lemon Grass in general. Its grassy parts are used to extract this hydrosol. Lemon Grass Hydrosol has a very refreshing and citrusy aroma and is filled with rich in anti-oxidants and anti-bacterial properties, which makes it a perfect remedy for treating acne and preventing premature ageing. It is also used for acne treatment and to reduce signs of early ageing. Its soothing aroma is known to reduce Stress, Anxiety and Depression. Many room fresheners and Deodorizers have lemongrass Hydrosol as an ingredient.",
        "coa": "/assets/images/products/Hydrosol/COA/LEMONGRASS HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Lemongrass Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Lemongrass-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Lemongrass Hydrosol"
      },
      {
        "id": 34,
        "title": "Here Are Some Technical Details About Lime Hydrosol",
        "composition": "Water is the principal constituent of Lime Hydrosol but also contains water-soluble chemicals isolated from lime peels-a-terpinene, b-bisabolene, linalool, limonene.",
        "extraction": "Lime hydrosol is obtained as a by-product during the extraction of Lime Essential Oil which is extracted from the peels of the lime fruit after drying them using steam distillation. Pure Lime Hydrosol has a sweet, citrusy, and fresh scent profile. Lime Hydrosol works wonderfully as a rejuvenating aroma spray, and is suitable for cosmetic use. Lime Hydrosol’s fresh, bright scent has invigorating, refreshing properties when used externally. Lime Hydrosol can be used directly on the skin. This hydrosol is used as a facial toner for oily skin and to stimulate circulation in the skin.",
        "coa": "/assets/images/products/Hydrosol/COA/LIME HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Lime Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/LIME-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Lime Hydrosol"
      },
      {
        "id": 35,
        "title": "Here Are Some Technical Details About Mandarin Hydrosol",
        "composition": "The water-soluble chemicals isolated from mandarin peels are present in this hydrosol such as limonene, gamma-terpinene, and methyl methylanthranilate, that gives base effect to the oil.",
        "extraction": "Pure Mandarin hydrosol is a floral water obtained by the steam distillation of mandarin oranges. This hydrosol is used in various medicines preparation. Mandarin has anti microbial agents that helps in reducing Acne and unclogs the skin pores. Very suitable for oily skins, this hydrosol is very effective in routine cleansing and hydration of skin.",
        "coa": "/assets/images/products/Hydrosol/COA/MANDARIN HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Mandarin Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Mandarin-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Mandarin Hydrosol"
      },
      {
        "id": 36,
        "title": "Here Are Some Technical Details About Marjoram Hydrosol",
        "composition": "The major constituents in free marjoram essential oil are terpinen-4-ol, γ-terpinene, α-terpinene, sabinene, and trans-sabinene-hydrate and these are present in hydrosol as a part of Marjoram essential Oil.",
        "extraction": "Marjoram hydrosol is obtained by steam distillation of Origanum Majorana, commonly known as Marjoram in general. Leaves and flowers of Marjoram fruits are used to extract this hydrosol. Marjoram is considered a substitute for Oregano herb in many cuisines. It is used in making teas, concoctions and drinks to treat cold and viral fevers. It has a sweet, minty and woody scent and can also treat Cough and Cold with its anti-bacterial compounds. It is rich in healing and Anti-microbial properties, and it is also rich in anti-oxidants which makes it an excellent anti-acne and anti-ageing agent.",
        "coa": "/assets/images/products/Hydrosol/COA/MARJORAM HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Marjoram Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Majoram-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Marjoram Hydrosol"
      },
      {
        "id": 37,
        "title": "Here Are Some Technical Details About Myrtle Hydrosol",
        "composition": "Compounds in Myrtle Hydrosol include aromatic molecules like Limonene, alpha-pinene, Cineole and other phytonutrients, which contribute to the mild, fresh, and slightly sweet scent associated with myrtle.",
        "extraction": "Myrtle Hydrosol is produced through the steam distillation of myrtle leaves, branches, or flowers, primarily from the Myrtus communis plant. Myrtle hydrosol is an anti-bacterial and anti-microbial liquid, with multiple benefits to skin. It has a sweet, leafy and green aroma, that can reduce mental pressure. Myrtle Hydrosol can also be beneficial in reducing pain and cramps as it is filled with pain relief and anti-inflammatory properties. It is used in Massages, Spas, Pain relief ointments and Aromatic baths for such benefits.Myrtle Hydrosol has a sweet, pleasant and herby smell, which can effectively reduce signs and symptoms of mental pressure like Anxiety, Depression and Stress.",
        "coa": "/assets/images/products/Hydrosol/COA/MYRTLE HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Myrtle Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Myrtle-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Myrtle Hydrosol"
      },
      {
        "id": 38,
        "title": "Here Are Some Technical Details About Neroli Hydrosol",
        "composition": "This hydrosol is made up of water-soluble chemicals derived from myrtle plant material. Aromatic molecules such as linalool and α-terpineol and other phytonutrients are some of the components.",
        "extraction": "Neroli hydrosol is obtained by steam distillation of Citrus Aurantium Amara, commonly known as Neroli. Blossoms or Flowers of Neroli are used to extract this hydrosol. Neroli gets it amazing properties from its source fruit, bitter orange. Neroli Hydrosol has a very floral, fresh and citrusy scent. It is also used in Diffusers to lower high blood pressure and improve blood circulation.",
        "coa": "/assets/images/products/Hydrosol/COA/NEROLI HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Neroli Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Neroli-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Neroli Hydrosol"
      },
      {
        "id": 39,
        "title": "Here Are Some Technical Details About Niaouli Hydrosol",
        "composition": "Aromatic chemicals like myrtucommulone, alpha-pinene, and other phytonutrients in Niaouli Hydrosol contribute to the pleasant, fresh, and somewhat sweet odor associated with myrtle.",
        "extraction": "Niaouli Hydrosol is often used as a mist to cure acne, decrease dandruff, prevent ageing, treat infections, relieve stress, and other conditions. It can be used as a facial toner, room freshener, body spray, hair spray, linen spray, makeup setting spray, and other similar applications. Niaouli hydrosol can also be used to make creams, lotions, shampoos, conditioners, soaps, and body washes, among other things. It is obtained by Steam Distillation method.",
        "coa": "/assets/images/products/Hydrosol/COA/NIAOULI HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Niaouli Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Niaouli-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Niaouli Hydrosol"
      },
      {
        "id": 40,
        "title": "Here Are Some Technical Details About Nutmeg Hydrosol",
        "composition": "This hydrosol comprises nutmeg seed extracts that are water-soluble. These substances include aromatic chemicals like myristicin, eugenol, and other phytonutrients that are responsible for the nutmeg's characteristic warm, spicy, and somewhat sweet scent.",
        "extraction": "Nutmeg hydrosol is obtained by steam distillation ofMyristica Fragrans, commonly known as Nutmeg in general. Nutmeg seeds are used to extract this hydrosol. Nutmeg is also known as Jaiphal in India, and used for flavoring foods and cooking. It is majorly grown for cooking and making Nutmeg Essential Oil.Nutmeg Hydrosol has a strong and sweet -spicy aroma with hints of woody notes. It is also an anti-spasmodic fluid, which has a relaxing effect on muscles and helps in treating joint pain. Nutmeg Hydrosol is also beneficial in treating skin infections and healing wounds because of its anti-septic benefits.",
        "coa": "/assets/images/products/Hydrosol/COA/NUTMEG HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Nutmeg Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/NUTMEG-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Nutmeg Hydrosol"
      },
      {
        "id": 41,
        "title": "Here Are Some Technical Details About Onion Hydrosol",
        "composition": "Onion Hydrosol contain chemical compounds as present in Onion Oil such as allicin, quercetin, fisetin, other sulphurous compounds: diallyl disulphide and diallyl trisulphide.",
        "extraction": "Onion Hydrosol is a floral water produced through the steam distillation of onions (Allium cepa). It can aid in reducing swelling and inflammation, making it a great option for people with illnesses like arthritis and joint discomfort. Onion hydrosol is also useful as a component in skincare products because it can reduce skin irritation and inflammation. It serves as an aromatic base for creating custom blends.",
        "coa": "/assets/images/products/Hydrosol/COA/ONION HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Onion Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Onion-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Onion Hydrosol"
      },
      {
        "id": 42,
        "title": "Here Are Some Technical Details About Orange Hydrosol",
        "composition": "Orange Hydrosol include aromatic molecules like limonene, citral, and other phytonutrients, which contribute to the sweet, fruity, and citrusy scent associated with oranges.",
        "extraction": "Orange Hydrosol is a botanical water produced through the steam distillation of orange peels (Citrus sinensis or other citrus species). Orange hydrosol is an anti-oxidative and skin brightening liquid, with a fruity, fresh aroma. Orange Hydrosol has a strong aromatic hold, its natural, fruity and tangy aroma, can refresh the mind and surrounding and erase all the heaviness around. It is rich source of Vitamin C and other anti-oxidants, which makes it a superb ingredient for skin care use. It is rich source of Vitamin C and other anti-oxidants, which makes it a superb ingredient for skin care use.",
        "coa": "/assets/images/products/Hydrosol/COA/ORANGE HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Orange Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Orange-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Orange Hydrosol"
      },
      {
        "id": 43,
        "title": "Here Are Some Technical Details About Oregano Hydrosol",
        "composition": "This hydrosol also includes water-soluble substances that were isolated from the oregano leaves. These substances include aromatic chemicals like carvacrol and thymol as well as other phytonutrients, which help to give oregano its characteristically strong, herbaceous, and spicy scent.",
        "extraction": "Oregano Hydrosol is a botanical water obtained through the steam distillation of oregano leaves (Origanum vulgare or other oregano species). Origanum Vulgare is a natural product that works as a good antibacterial, antifungal and antiviral agent. Due to the warm and spicy aroma of hydrosol, it is widely used in aromatherapy.",
        "coa": "/assets/images/products/Hydrosol/COA/OREGANO HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Oregano Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Oregano-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Oregano Hydrosol"
      },
      {
        "id": 44,
        "title": "Here Are Some Technical Details About Palmarosa Hydrosol",
        "composition": "Aromatic molecules like geraniol and geranyl acetate as well as other phytonutrients, which help to give palmarosa its distinctive sweet, floral, and faintly rosy scent are all the components in Palmarosa Hydrosol.",
        "extraction": "Natural Palmarosa hydrosol is a floral water that is obtained through the steam distillation of palmarosa grass (Cymbopogon martinii). It has a fresh, herbaceous aroma, with a strong resemblance to rose fragrance. Its flowering heads or stems are used to extract this hydrosol. Palmarosa gets its name because of the rosy aroma it emanates, which can repel insects and mosquitoes. Palmarosa hydrosol is a good option for them as a natural hair conditioner or scalp mist. Palmarosa is a good option for air freshener or room spray. Palmarosa hydrosol can be used as a natural air freshener or room spray due to its pleasant aroma.",
        "coa": "/assets/images/products/Hydrosol/COA/PALMAROSA HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Palmarosa Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Palmarosa-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Palmarosa Hydrosol"
      },
      {
        "id": 45,
        "title": "Here Are Some Technical Details About Parsley Hydrosol",
        "composition": "Water is the key ingredient in Parsley hydrosol because it is the principal solvent utilized in the steam distillation procedure. This hydrosol also include aromatic molecules like myristicin, apiole, and other phytonutrients, which help to give parsley its characteristically crisp, green, and slightly herbaceous scent.",
        "extraction": "Parsley Seed hydrosol is obtained by Steam Distillation of Petroselinum Sativum, commonly known as Parsley. Dried seeds of Parsley are used to extract this hydrosol. Parsley Seed Hydrosol has Oil has an herbaceous, woody and somewhat nutty aroma, which is soothing to the nerves and used in diffusers and steams. Parsley seed hydrosol is a detoxifying agent, its aroma can be diffused and used to remove harmful toxins and acids from the body. Parsley Seed Hydrosol is filled with strong healing and Anti-microbial properties, along with astringent nature, which is why it is a potential anti-acne and anti-ageing agent.",
        "coa": "/assets/images/products/Hydrosol/COA/PARSLEY HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Parsley Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Parsley-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Parsley Hydrosol"
      },
      {
        "id": 46,
        "title": "Here Are Some Technical Details About Peppermint Hydrosol",
        "composition": "This hydrosol also includes water-soluble substances that were isolated from peppermint leaves. These substances include aromatic molecules that give peppermint its characteristic fresh, minty, and cooling scent, such as menthol, menthone,Menthofuran and Menthyl Acetate.",
        "extraction": "Peppermint hydrosol is obtained by steam distillation of Mentha Piperita, commonly known as Peppermint. Its leaves are used to extract this hydrosol. Peppermint has been famous for its minty fresh aroma. It is used in diffusers and therapies to treat Fatigue, Depression, Anxiety, Headache and Stress. It is used in making cosmetic products like soaps, handwashes, lotions, creams and bathing gels because of its anti-bacterial nature and fresh fragrance. It is used in making skin treatments for Boils, Pimples, Cuts, Ringworm infection, Athlete’s foot, Acne and Allergies. Peppermint Hydrosol is commonly used in mist forms, you can add it to relieve stress and fatigue, prevent and treat infections, treat acne, hair care as well.",
        "coa": "/assets/images/products/Hydrosol/COA/PEPPERMINT HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Peppermint Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Peppermint-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Peppermint Hydrosol"
      },
      {
        "id": 47,
        "title": "Here Are Some Technical Details About Petitgrain Hydrosol",
        "composition": "This hydrosol also contains water-soluble substances that were isolated from the petitgrain plant. These substances include aromatic molecules such as limonene, linalool, nerol, geranyl, linalool, geraniol, and acetate, which help to create the delicate, lemony, and slightly floral perfume that is associated with petitgrain",
        "extraction": "Petit Grain hydrosol is obtained by steam distillation of Citrus Aurantium Amara, commonly known as Bitter orange. Leaves and twigs and sometimes branches of Bitter orange are used to extract this hydrosol. Petit Grain gets it amazing properties from its source fruit, bitter orange. Petit Grain Hydrosol has a very floral, fresh and citrusy scent. It is also used in Diffusers to lower high blood pressure and improve blood circulation. Petit Grain Hydrosol is of healing and cleansing nature, filled with anti-microbial properties. It is an excellent treatment to reduce acne and prevent early signs of ageing. It can also be used to treat dandruff, itchy scalp, lice, split ends and for cleaning the scalp.",
        "coa": "/assets/images/products/Hydrosol/COA/PETITGRAIN HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Petitgrain Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Petitgrain-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Petitgrain Hydrosol"
      },
      {
        "id": 48,
        "title": "Here Are Some Technical Details About Rosemary Hydrosol",
        "composition": "Water, which acts as the steam distillation process's solvent, is the main ingredient in Rosemary hydrosol. This hydrosol contains chemicals that are isolated from the rosemary plant and are water soluble. These substances include aromatic chemicals like cineole, camphor, α-pinene , limonene and linalool and these are what give rosemary its characteristic fresh, herbaceous, and slightly woodsy scent.",
        "extraction": "Rosemary hydrosol is obtained as a by-product during the extraction of Rosemary Essential Oil. It is obtained by steam distillation of Rosmarinus Officinalis L., commonly known as Rosemary. It is extracted by Rosemary leaves and twigs. Rosemary is a famous culinary herb, it is used to flavor dishes, meats and breads. Rosemary Hydrosol with amazing sweet fragrance is used in the making of body and hair care products. Because of its excellent fragrance, the hydrosol can instantly uplift your mood. It is used in massages and spas because of its anti-spasmodic nature and pain relief effect. It can treat Muscle aches, cramps and increase blood flow. Rosemary Hydrosol is also anti-bacterial in nature, that’s why it helps in treating skin infections and allergies. It is used in making skin treatments for Eczema, Dermatitis, Acne and Allergies",
        "coa": "/assets/images/products/Hydrosol/COA/ROSEMARY HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Rosemary Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Rosemary-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Rosemary Hydrosol"
      },
      {
        "id": 49,
        "title": "Here Are Some Technical Details About Sage Hydrosol",
        "composition": "This hydrosol also includes water-soluble substances that were extracted from the sage leaves. These substances include aromatic molecules that give sage its characteristic fresh, herbaceous, and slightly woodsy scent, such as thujone, camphor,cineole and other phytonutrients.",
        "extraction": "Sage hydrosol is an herbaceous water-steam distillation of fresh green culinary sage leaves. Considered a balancing astringent, sage hydrosol makes a wonderful base for facial toners and deodorant sprays. This hydrosol is beneficial for oily skin, though it will suit any skin type and is a great toner for the scalp. For times of disharmony, sage hydrosol is balancing and comforting.Sage hydrosol makes a wonderful base for facial toners and deodorant sprays. As a deodorant, spray directly on the underarms or create your own personal deodorant blend with essential oils such as tea tree, lavender, or basil. Energetically sage is uplifting yet grounding, providing a stable base for invigorating room sprays and body mists.",
        "coa": "/assets/images/products/Hydrosol/COA/SAGE HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Sage Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Sage-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Sage Hydrosol"
      },
      {
        "id": 50,
        "title": "Here Are Some Technical Details About Spearmint Hydrosol",
        "composition": "Water is the principal constituent of Spearmint Hydrosol, and it is the main solvent utilized throughout the steam distillation process. This hydrosol contains water-soluble chemicals isolated from spearmint leaves in addition to water. These chemicals include aromatic molecules like carvone, limonene, and other phytonutrients, which add to spearmint's pleasant, minty, and energising smell",
        "extraction": "Spearmint hydrosol is obtained by steam distillation of Mentha Spicata. Its leaves are used to extract this hydrosol. Spearmint is also known as Garden mint, has been famous for its minty fresh aroma, which is used in many purposes. It is used in making teas, drinks and concoctions. It was used as a mouth freshener, and was also consumed to treat gastro issues and indigestion. Spearmint was also used to repel mosquitoes and insects. It has a very Fresh and Minty fragrance, which has a rejuvenating effect on mind. It is used in diffusers and therapies to energize min and treat Fatigue, Depression, Anxiety, Headache and Stress. It is beneficial in treating Muscle aches, inflammatory pain and for increasing blood flow. It is used in making skin treatments for Boils, Pimples, Cuts, Ringworm infection, Athlete’s foot, Acne and Allergies.",
        "coa": "/assets/images/products/Hydrosol/COA/SPEARMINT HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Spearmint Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Spearmint-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Spearmint Hydrosol"
      },
      {
        "id": 51,
        "title": "Here Are Some Technical Details About Sweet Basil Hydrosol",
        "composition": "Water is the principal constituent of Sweet Basil Hydrosol, and it also serves as the primary solvent in the steam distillation process. This hydrosol contains water-soluble chemicals isolated from sweet basil leaves in addition to water. Aromatic molecules like linalool, methyl chavicol, and other phytonutrients are among the components that contribute to the sweet, herbaceous, and somewhat spicy perfume associated with sweet basil.",
        "extraction": "Sweet Basil Hydrosol is obtained through steam distillation, a process in which steam is passed through sweet basil leaves. Because of its astringent characteristics, this hydrosol is ideal for oily skin. It has the capacity to tighten your skin and improve the tone of your skin. This will even make your skin look younger by shrinking big pores and firming it. It functions as a natural skin cleaner.",
        "coa": "/assets/images/products/Hydrosol/COA/SWEET BASIL HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Sweet Basil Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Sweet-Basil-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Sweet Basil Hydrosol"
      },
      {
        "id": 52,
        "title": "Here Are Some Technical Details About Tagetes Hydrosol",
        "composition": "This hydrosol contains water-soluble chemicals isolated from tagetes flowers in addition to water. Aromatic chemicals such as tagetone, limonene, and other phytonutrients contribute to the sweet, fruity, and slightly floral scent associated with tagetes.",
        "extraction": "Tagetes Hydrosol is a botanical water obtained through the steam distillation of tagetes flowers (Tagetes spp.). Tagetes Hydrosol is naturally rich in antibacterial and antimicrobial components, making it effective in the treatment of skin infections and allergies. It has anti-infective properties and is used to treat bacterial and microbial infections, which is why it is used to make anti-infection lotions and ointments.",
        "coa": "/assets/images/products/Hydrosol/COA/TAGETUS HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Tagetus Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/TAGETUS-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Tagetes Hydrosol"
      },
      {
        "id": 53,
        "title": "Here Are Some Technical Details About Tea Tree Hydrosol",
        "composition": "This hydrosol contains water-soluble chemicals derived from tea tree plant material in addition to water. Aromatic molecules such as terpinen-4-ol, cineole, and other phytonutrients are among the components that contribute to the fresh, medicinal, and somewhat spicy perfume associated with tea tree.",
        "extraction": "Tea tree hydrosol is one of the most adaptable hydrosols on the market. It is an effective astringent that tones, firms, and tightens the skin. It is a gentle and efficient toner that is especially beneficial for acne-prone skin. It is an effective acne treatment that reduces redness, edoema, and inflammation. It is a botanical water produced through the steam distillation of tea tree leaves and branches (Melaleuca alternifolia).",
        "coa": "/assets/images/products/Hydrosol/COA/TEA TREE HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Tea tree Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Tea-Tree-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Tea Tree Hydrosol"
      },
      {
        "id": 54,
        "title": "Here Are Some Technical Details About Thyme Hydrosol",
        "composition": "Water is the principal constituent of Thyme Hydrosol, and it serves as the primary solvent throughout the steam distillation process. This hydrosol contains water-soluble chemicals derived from the thyme plant in addition to water. Aromatic chemicals such as thymol, carvacrol, and other phytonutrients contribute to the grassy, earthy, and somewhat spicy scent associated with thyme.",
        "extraction": "Thyme Hydrosol is obtained through steam distillation, a process in which steam is passed through thyme leaves and flowering tops. Thyme hydrosol is antibacterial, antiviral, and antifungal, and it is used to treat skin infections, acne, insect bites, and wounds. \"Its antiinfective and healing properties make it a specific for bedsores, and it is gentle enough for even the most ill.",
        "coa": "/assets/images/products/Hydrosol/COA/THYME HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Thyme Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Thyme-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Thyme Hydrosol"
      },
      {
        "id": 55,
        "title": "Here Are Some Technical Details About Turmeric Hydrosol",
        "composition": "Primary constituents include 1,8-cineole, curcumenic ketones, and palmitic acid.",
        "extraction": "Turmeric Root hydrosol is obtained as a by-product during the extraction of Turmeric Root Essential Oil. It is obtained by steam distillation of Curcuma Longa, also known as Turmeric. It is extracted from the Rhizomes or roots of Turmeric.Turmeric Hydrosol is a clear liquid with anti-inflammatory and antioxidant properties. It makes a great facial toner for all skin types, reducing skin inflammation and aiding in wound healing. It also contains antibacterial constituents that help reduce acne and scarring.",
        "coa": "/assets/images/products/Hydrosol/COA/Turmeric Hydrosol COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Turmeric Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Turmeric-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Turmeric Hydrosol"
      },
      {
        "id": 56,
        "title": "Here Are Some Technical Details About Valerian Root Hydrosol",
        "composition": "This hydrosol contains water-soluble chemicals isolated from the valerian root in addition to water. These components may include valerenic acid, valerone, and other phytonutrients, which contribute to valerian's earthy, musky, and somewhat sweet fragrance.",
        "extraction": "Valerian Root Hydrosol is a botanical water produced through the steam distillation of valerian root (Valeriana officinalis).  Although Valerian Root Hydrosol may provide relaxation and sleep assistance, its effects differ from person to person. It is frequently utilized in holistic wellness practises to produce a relaxing atmosphere and generate a sense of calm.",
        "coa": "/assets/images/products/Hydrosol/COA/VALERIAN ROOT HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Valerian Root Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Valerian-Root-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Valerian Root Hydrosol"
      },
      {
        "id": 57,
        "title": "Here Are Some Technical Details About Verbena Hydrosol",
        "composition": "Water is the principal constituent of Verbena Hydrosol, and it is the main solvent utilized throughout the steam distillation process. This hydrosol contains water-soluble chemicals isolated from verbena plant material in addition to water. These components include aromatic chemicals like as citral, limonene, and other phytonutrients, which contribute to verbena's bright, lemony, and uplifting perfume.",
        "extraction": "Verbena Hydrosol is obtained through steam distillation, a process in which steam is passed through verbena leaves and aerial parts. Verbena Hydrosol is a multi-purpose botanical water that encapsulates the essence of verbena as well as its potential therapeutic effects. It has a wide spectrum of holistic advantages and can be utilized into aromatherapy, skincare, culinary applications, and wellness routines.",
        "coa": "/assets/images/products/Hydrosol/COA/VERBENA HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Verbena Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Verbena-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Verbena Hydrosol"
      },
      {
        "id": 58,
        "title": "Here Are Some Technical Details About Wintergreen Hydrosol",
        "composition": "Water is the principal component of Wintergreen Hydrosol, and it serves as the primary solvent throughout the steam distillation process. This hydrosol contains water-soluble chemicals isolated from wintergreen leaves in addition to water. Aromatic molecules like methyl salicylate (also known as wintergreen oil) and other phytonutrients are among the chemicals that contribute to the sweet, minty, and slightly medicinal scent associated with wintergreen.",
        "extraction": "Wintergreen Hydrosol is a botanical water obtained through the steam distillation of wintergreen leaves (Gaultheria procumbens). It is a botanical water that encapsulates the essence of wintergreen as well as its possible therapeutic effects. When used with prudence and adequate dilution, it is often utilized in aromatherapy, muscle and joint care, respiratory support, and as a natural cooling agent.",
        "coa": "/assets/images/products/Hydrosol/COA/WINTERGREEN HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Hydrosol/MSDS/Wintergreen Oil Hydrosol MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Wintergreen-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Wintergreen Hydrosol"
      },
      {
        "id": 59,
        "title": "Here Are Some Technical Details About Ylang Ylang Hydrosol",
        "composition": "This hydrosol contains water-soluble chemicals derived from ylang ylang flowers in addition to water. Aromatic molecules such as benzyl acetate, linalool, and other phytonutrients are among the components that contribute to the sweet, floral, and slightly exotic perfume associated with ylang ylang.",
        "extraction": "Ylang Ylang Hydrosol is obtained through steam distillation, a process in which steam is passed through ylang ylang flowers. It is supposed to control sebum production, making it an ideal balance toner for oily and mixed skin. It can aid in the retention of moisture in the skin, leaving it smooth and hydrated. Because of its calming properties, it can be used to make a soothing pillow spray at bedtime.",
        "coa": "/assets/images/products/Hydrosol/COA/YLANG YLANG HYDROSOL COA.pdf",
        "msds": "/assets/images/products/Essential-Oils/MSDS/YLANG-YLANG-OIL-MSDS.pdf",
        "image": "/assets/images/products/Hydrosol/Ylang-Ylang-Hydrosol.webp",
        "imageAlt": "Here Are Some Technical Details About Ylang Ylang Hydrosol"
      }
    ],
    "perPage": 6
  },
  "spice-oils": {
    "intro": [
      "Spice Oils are distilled from spices at the initial stage before being subjected to solvent extraction. These oils are all steam distilled, ensuring the preservation of their natural properties. Popular spice Essential oils include Black Pepper, Cardamom, Cassia, Cinnamon Bark, Clove, Coriander, Cumin, Dill, Fennel, Ginger, and Juniper Berry, all of which come under the spice category. These oils are widely used in a variety of applications, from aromatherapy to culinary and medicinal uses, due to their potent and concentrated nature. One example is All Spice Essential Oil, which is known for its potential to combat headaches, muscle cramps, and tooth pain. Research suggests that the eugenol content in allspice is responsible for these effects, as eugenol is an analgesic, commonly used in dentistry for pain relief. Additionally, Allspice oil can help ease muscle pain and strains by promoting circulation, making it a popular choice in massage and therapeutic oils. Sourcing from a reputable <b>Spice Oil Bulk Suppliers</b> is essential for businesses that require large quantities of these potent oils. Partnering with a trusted <b>Spice oil bulk manufacturers</b> ensures that the oil retains its therapeutic favors. Moreover, working with a <b>Spice oil wholesale supplier</b> provides cost-effective solutions for industries seeking high-quality oils."
    ],
    "typesTitle": "Types of Spice Oil",
    "types": [
      {
        "id": 1,
        "label": "Ajwain Oil"
      },
      {
        "id": 2,
        "label": "Anise Oil"
      },
      {
        "id": 3,
        "label": "Black Pepper Oil"
      },
      {
        "id": 4,
        "label": "Cardamom Oil"
      },
      {
        "id": 5,
        "label": "Carrot Seed Oil"
      },
      {
        "id": 6,
        "label": "Cassia  Oil"
      },
      {
        "id": 7,
        "label": "Cinnamon Bark Oil"
      },
      {
        "id": 8,
        "label": "Cinnamon Leaf Oil"
      },
      {
        "id": 9,
        "label": "Clove Bud Oil"
      },
      {
        "id": 10,
        "label": "Coriander Oil"
      },
      {
        "id": 11,
        "label": "Cumin Seed Oil"
      },
      {
        "id": 12,
        "label": "Dill Oil"
      },
      {
        "id": 13,
        "label": "Fennel Oil"
      },
      {
        "id": 14,
        "label": "Fenugreek Oil"
      },
      {
        "id": 15,
        "label": "Garlic Oil"
      },
      {
        "id": 16,
        "label": "Ginger Oil"
      },
      {
        "id": 17,
        "label": "Nutmeg Oil"
      },
      {
        "id": 18,
        "label": "Onion Oil"
      },
      {
        "id": 19,
        "label": "Oregano oil"
      },
      {
        "id": 20,
        "label": "Parsley Oil"
      },
      {
        "id": 21,
        "label": "Thyme Oil"
      },
      {
        "id": 22,
        "label": "Turmeric Oil"
      }
    ],
    "items": [
      {
        "id": 1,
        "title": "Here Are Some Technical Details About Ajwain Oil",
        "composition": "The main components of Ajwain Oil include thymol, γ-terpinene, p-cymene, α-pinene, and limonene.",
        "extraction": "Ajwain Oil is steam-distilled from the seeds of Trachyspermum ammi. It ranges from pale yellow to light brown and has a pungent, spicy aroma.",
        "coa": "/assets/images/products/spice-oil/COA/AJOWAN OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/AJWAIN OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/AJWAIN OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Ajwain Oil"
      },
      {
        "id": 2,
        "title": "Here Are Some Technical Details About Anise Oil",
        "composition": "The major constituent of Anise oil is trans-anethole content.",
        "extraction": "Anise oil is obtained from the dried fruit of Anise or Pimpinella Anisum of the Umbelliferae family by Steam Distillation. Anise Oil is a fluid liquid and ranges from almost colourless to slightly yellow. Anise oil has Characteristic Fruity odor, Sweet Aroma. Its most common flavoring applications include being added to liqueurs, alcohol, gelatins, various candies, mints, chewing gum, and dairy products. To add a richer and more robust scent, Aniseed Essential Oil is also often added to cosmetic products such as shampoos, conditioners, creams, soaps, and perfumes.",
        "coa": "/assets/images/products/spice-oil/COA/ANISE OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/ANISE OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/Anise-Oil-USP.webp",
        "imageAlt": "Here Are Some Technical Details About Anise Oil"
      },
      {
        "id": 3,
        "title": "Here Are Some Technical Details About Black Pepper Oil",
        "composition": "The major components of this essential oils were α-pinene, sabinene, β-pinene, δ-3-carene, limonene, and β-caryophyllene.",
        "extraction": "Black pepper oil can be obtained either directly from crushed peppercorns or it can be extracted from pepper vines on which peppercorns grow. In both cases, the key to obtaining the essential oil is the distillation process. This oil's tones range from nearly colourless to yellow. Black pepper essential oil is known to reduce anxiety and stress. The peppery, musky aroma helps calm you down by soothing nerves and relaxing your muscles. It needs to be kept in a secure container in a cool, dark environment.",
        "coa": "/assets/images/products/spice-oil/COA/BLACK PEPPER OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/BLACK PEPPER OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/BLACK PEPPER OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Black Pepper Oil"
      },
      {
        "id": 4,
        "title": "Here Are Some Technical Details About Cardamom Oil",
        "composition": "The main chemical components of cardamom oil were 1.8-cineole and ρ-cymene. The cardamom oil was composed of 4-6 chemical compounds with the largest main compounds of 1.8-cineole and ρ-cymene.",
        "extraction": "Elettaria Cardamum Maton is used to make cardamom oil. The aroma is described as being warm, spicy, fragrant, balsamic-woody, progressively sweeter, and faintly camphoraceous. The best words to describe its flavor are strongly fragrant, pungent, warm, and spicy. The colors of this oil range from almost white to pale yellow. Cardamom oil boosts the body's immunological response to infections by taking advantage of its antimicrobial properties. Warmth from the oil helps to relieve chest congestion and fight off the cold. The relaxing properties of spice oil are said to decrease inflammation and relieve coughing.",
        "coa": "/assets/images/products/spice-oil/COA/CARDAMOM OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/CARDAMOM OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/CARDAMOM OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Cardamom Oil"
      },
      {
        "id": 5,
        "title": "Here Are Some Technical Details About Carrot Seed Oil",
        "composition": "The major constituents of seed essential oil were carotol, daucene, (Z,Z)-α-farnesene, germacrene D, trans-α-bergamotene and β-selinene.",
        "extraction": "A liquid with a yellowish to brownish hue is carrot seed essential oil. It's extracted via steam distillation from the seeds of the Daucus carota plant. The smell is warm, fresh, and reminiscent of carrots. Due to its anti-aging properties, it is utilized in skin care products. Carrot seed essential oil has antimicrobial, antifungal, anti-inflammatory, and antioxidant properties. This oil needs to be stored in a secure container in a cool, dark environment.",
        "coa": "/assets/images/products/spice-oil/COA/CARROT SEED OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/CARROT SEED OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/CARROT SEED OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Carrot Seed Oil"
      },
      {
        "id": 6,
        "title": "Here Are Some Technical Details About Cassia Seed Oil",
        "composition": "Cassia Oil has Cinnamaldehyde as the main compound (followed by methoxycinnamic acid , benzyl alcohol , and benzyl benzoate",
        "extraction": "The primary method for extracting cassia oil is Steam distillation. Cassia Oil is a dark brown, free-flowing liquid, with a strong, spicy, warm resinous odor Due to its warming and spiciness, Cassia oil is valued for its use in perfumes, aromatherapy, and the culinary sector as a flavoring agent",
        "coa": "/assets/images/products/spice-oil/COA/CASSIA OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/CASSIA OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/Cassia Oil.webp",
        "imageAlt": "Here Are Some Technical Details About Cassia Seed Oil"
      },
      {
        "id": 7,
        "title": "Here Are Some Technical Details About Cinnamon Bark Oil",
        "composition": "Cinnamon bark Oil has Cinnamaldehyde, linalool, β-caryophyllene, eucalyptol, and eugenol as the main components.",
        "extraction": "Cinnamon oil is made from Cassia zeylanicum nees. The Cinnamon leaves are used for extraction, and the oil is obtained through steam distillation. It has the fragrance and aroma of cinnamon and is a transparent, pale golden liquid. It is believed that the oils in cinnamon bark might ease spasms, reduce gas (flatulence), and increase hunger. Cinnamon may also improve blood circulation. A compound found in cinnamon bark may have insulin-like effects in lowering blood sugar levels.",
        "coa": "/assets/images/products/spice-oil/COA/CINNAMON BARK OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/CINNAMON BARK OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/CINNAMON BARK OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Cinnamon Bark Oil"
      },
      {
        "id": 8,
        "title": "Here Are Some Technical Details About Cinnamon leaf Oil",
        "composition": "The basic component of this oil was found to be eugenol, followed by β-caryophyllene, benzyl benzoate, linalool, eugenyl acetate and cinnamyl acetate.",
        "extraction": "The plant source of cinnamon leaf oil is Cinnamomum Verum. Steam distillation is the method to extract this oil. It is a clear liquid that ranges in tint from yellow to brown. Deep, woodsy, spicy cinnamon, sweet aromatic-spicy, warm, harsh balsam, and a slightly harsh fragrance can all be smelled in this oil. Cinnamon Essential Oil, when applied topically or for cosmetic use, is thought to soothe dry skin, successfully treat aches, pains, and stiffness in the muscles and joints, deal with infections, rashes, and acne, improve circulation, nourish the skin, delay the appearance of ageing, and brighten skin tone.",
        "coa": "/assets/images/products/spice-oil/COA/CINNAMON LEAF OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/CINNAMON LEAF OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/CINNAMON LEAF OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Cinnamon leaf Oil"
      },
      {
        "id": 9,
        "title": "Here Are Some Technical Details About Clove Bud Oil",
        "composition": "The main chemical constituents of Clove Bud Essential Oil are Eugenol, Eugenyl acetate and beta-Caryophyllene.",
        "extraction": "Clove oil is extraction through Steam Distillation. This oil has a spectrum of colors, from pale yellow to a flowing brownish tone. It smells smooth and tasty. This oil is warm and spicy with faint touches of cinnamon and is miscible with fatty oils, toluene, and methylene chloride and has a distinct, pungent scent. Clove Bud Essential Oil has been used to cleanse, manage pain and abrasions, and support healthy respiration and digestion.",
        "coa": "/assets/images/products/spice-oil/COA/CLOVE BUD OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/CLOVE BUD OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/CLOVE OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Clove Bud Oil"
      },
      {
        "id": 10,
        "title": "Here Are Some Technical Details About Coriander Oil",
        "composition": "Linalool, neryl acetate, γ-terpinene and α-pinene were identified as main components in the oil of Coriander.",
        "extraction": "Coriandrum Sativum is the plant from which coriander oil is obtained by steam distillation. Aromatic delightful Sweet slightly Woody-Spicy with a Floral-Balsamic undertone and a peppery-woody, Sauve top note characterise the smell. Coriander Oil has analgesic and antispasmodic properties, which means that it can be used for reducing swelling in stiff joints and sore muscles, stopping and preventing muscle spasms, easing menstrual cramps, soothing toothaches and headaches, and managing arthritis pain.",
        "coa": "/assets/images/products/spice-oil/COA/CORAINDER OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/CORIANDER OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/CORIANDER OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Coriander Oil"
      },
      {
        "id": 11,
        "title": "Here Are Some Technical Details About Cumin Seed Oil",
        "composition": "The major compounds in all cumin oils are the monoterpenes beta-pinene, p-cymene and gamma-terpinene and the terpenoid aldehydes cuminic aldehyde and the isomeric menthadien carboxaldehydes.",
        "extraction": "Cumin seed oil is derived from the plant Cuminum cyminum. Cumin seed oil is obtained by the steam distillation. It is golden to brownish-yellow in color. Cumin Seed Oil is strong, warm, pungent, and aromatic. Cumin seeds are widely used as a spice in cooking. It needs to be kept in a tight container in a dark and cool place.",
        "coa": "/assets/images/products/spice-oil/COA/CUMIN OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/CUMIN SEED OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/CUMIN SEED OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Cumin Seed Oil"
      },
      {
        "id": 12,
        "title": "Here Are Some Technical Details About Dill Oil",
        "composition": "Dill Oil main constituents are Limonene and Carvone & Dill ether.",
        "extraction": "Dill seed oil is prepared by distillation from the crushed ripe fruits throuh Steam distillation process. It has a fruity aroma and is a clear, colourless or light yellow liquid. Dill oil is an herbal treatment that relieves intestinal cramps and improves stomach and intestine flow to help food flow through the digestive system. This medicine may also aid with anxiety, constipation, and diarrhoea. It must be kept in a cool, dark place.",
        "coa": "/assets/images/products/spice-oil/COA/DILL OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/DILL OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/DILL SEED OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Dill Oil"
      },
      {
        "id": 13,
        "title": "Here Are Some Technical Details About Fennel Oil",
        "composition": "Good varieties of fennel contain volatile oil, of which the principal constituents are Anethole and Fenchone.",
        "extraction": "Fennel oil is obtained thorugh steam distilled from crushed fennel seeds. Fenchone is colorless, with a pungent camphoraceous odor and bitter taste. This oil ranges in tint from colourless to pale yellow. This Oil is commonly used to relieve muscle contractions, excessive coughing, hiccups, digestive cramps, and convulsions.",
        "coa": "/assets/images/products/spice-oil/COA/FENNEL OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/FENNEL OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/FENNEL OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Fennel Oil"
      },
      {
        "id": 14,
        "title": "Here Are Some Technical Details About Fenugreek Oil",
        "composition": "Fenugreek Oil is rich in linoleic acid , linolenic acid , and oleic acid.",
        "extraction": "Fenugreek oil is derived from the plant Trigonella foenum-graecum. The oil of fenugreek seed was extracted using Solvent extraction process. The color of this transparent oil varies from pale yellow to dark yellow. The fragrance is slightly bitter, with a distinct taste and odor. Fenugreek oil has been proved to be beneficial against hair loss and baldness due to its nutritional and protein content; it deeply nourishes the hair and scalp. It also aids in the treatment of lice and dandruff. Furthermore, it strengthens and softens dry, damaged, and brittle hair while also stimulating hair growth.",
        "coa": "/assets/images/products/spice-oil/COA/FENUGREEK OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/FENUGREEK OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/FENUGREEK OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Fenugreek Oil"
      },
      {
        "id": 15,
        "title": "Here Are Some Technical Details About Garlic Oil",
        "composition": "Diallyl disulfide and diallyl trisulfide to be the dominant components in Garlic Oil, followed by allyl methyl trisulfide, and allyl methyl disulfide.",
        "extraction": "Garlic oil is derived from Allium sativum L. The most commonly used methods for extracting garlic oil are steam hydrodistillation and hot solvent extraction. Its colouration ranges from yellow to dark brownish (may darken with exposure to air). Garlic oil has a strong odor. It must be stored in a suitable container in a cool, dark place. Garlic oil has been demonstrated to increase cognitive function, strengthen the heart, combat fungal infections, and treat toothaches and mouth sores. However, because allicin is present, excessive usage of garlic oil may be harmful to your liver. Eczema, asthma, and dermatitis may also be affected.",
        "coa": "/assets/images/products/spice-oil/COA/GARLIC OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/GARLIC OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/GARLIC OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Garlic Oil"
      },
      {
        "id": 16,
        "title": "Here Are Some Technical Details About Ginger Oil",
        "composition": "The ginger oil contains a mixture of constituents such as monoterpenes, namely phellandrene, camphene, cineole, linalool, limonene, citral, geraniol, citronellol, borneol and sesquiterpenes, namely α-zingiberene, ar-curcumene, β-bisabolene, β-sesquiphellandrene, zingiberol and zingiberenol.",
        "extraction": "\"Extraction Ginger oil's botanical source is Zingiber Officianale. Ginger oil is obtained by the steam distillation of rhizomes of Zingiber officinale rosc. It is a liquid that ranges in tint from yellowish to brown. This oil has a spicy, woody, powerful, and distinct scent. Home remedies for nausea, upset stomach, menstruation issues, inflammation, and respiratory conditions include ginger oil. When used as aromatherapy, it is also known to elicit sentiments of bravery and self-assurance, earning it the moniker \"\"the oil of empowerment.\"\"\"",
        "coa": "/assets/images/products/spice-oil/COA/GINGER OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/GINGER OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/GINGER OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Ginger Oil"
      },
      {
        "id": 17,
        "title": "Here Are Some Technical Details About Nutmeg Oil",
        "composition": "Prominent components are sabinene, α-pinene, β-pinene, and limonene. A major oxygen-containing component is terpinen-4-ol. The oil also contains small amounts of various phenolic compounds and aromatic ethers, e.g. myristicin, elemicin, safrole, and methyl eugenol.",
        "extraction": "Myristica fragrans Houtt produces nutmeg oil. Steam distillation for extracting nutmeg seed oil is conditioned under atmospheric pressure because nutmeg seeds have a fat oil component. It has a pungent aroma and is a colourless or pale yellow liquid. Nutmeg oil has the capacity to aid in digestion. It is high in phytonutrients that assist organs in the gastrointestinal tract to function properly. It can help to prevent gas, diarrhoea, stomach discomfort, constipation, and nausea, as well as regulate appetite for improved digestion. It must be stored in a tightly sealed container in a cool, dark place.",
        "coa": "/assets/images/products/spice-oil/COA/NUTMEG OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/NUTMEG OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/NUTMEG OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Nutmeg Oil"
      },
      {
        "id": 18,
        "title": "Here Are Some Technical Details About Onion Oil",
        "composition": "Onion seed oil has a high polyunsaturated fatty acid (PUFA) content, with linoleic acid as the primary fatty acid. Cold pressed onion seed oil consists of linoleic acid and oleic acid.",
        "extraction": "Onion Oil is derived from the plant Allium Cepa. Steam distillation is one way to extract onion oil from yellow onions. It ranges in color from pale yellow to reddish yellow. It has a pungent and distinct fragrance. Onion oil has traditionally been used to treat skin disorders like eczema, psoriasis, and acne. It has also been used to aid in the reduction of inflammation and the improvement of circulation. It is also known to contain antibacterial and antifungal properties, which may aid in infection prevention.",
        "coa": "/assets/images/products/spice-oil/COA/ONION OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/ONION OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/ONION OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Onion Oil"
      },
      {
        "id": 19,
        "title": "Here Are Some Technical Details About Oregano Oil",
        "composition": "Oregano oil consists of phenolic compounds (primarily carvacrol and thymol). This oil also contains sesquiterpene, terpinene, terpineol alcohol, flavonoids, and other compounds",
        "extraction": "The botanical source of Oregano Oil is Origanum Vulgare Linne (Fam: Labiatae). Oregano essential oil was extracted through the traditional steam distillation method using 2-L steam distillation units. The aromas of this oil are pungent and spicy. Its hues range from yellowish to light brownish. Traditionally, oregano oil was used to cure digestive issues such as indigestion, diarrhoea, and upset stomach. While human studies are limited, there is some evidence that oregano oil may inhibit or destroy the formation of dangerous bacteria in the gut. liquid.",
        "coa": "/assets/images/products/spice-oil/COA/OREGANO OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/OREGANO OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/OREGANO OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Oregano Oil"
      },
      {
        "id": 20,
        "title": "Here Are Some Technical Details About Parsley Oil",
        "composition": "The main constituents of Parsley oil are myristicin, α- pinene, apiol and sabinene.",
        "extraction": "Parsley oil is obtained by steam distillation of the seeds or the above-ground parts of the plant. Parsley oil is a Fluid Liquid that ranges in color from yellow to brownish. This oil's scent is extremely spicy and fragrant. Because of its relaxing characteristics and ability to keep bacteria away, parsley oil is frequently included in high-end skincare products, particularly for acne-prone skin. Its benefits include reducing cellulite, stretch marks, and bruising.",
        "coa": "/assets/images/products/spice-oil/COA/PARSLEY OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/PARSLEY OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/PARSLEY OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Parsley Oil"
      },
      {
        "id": 21,
        "title": "Here Are Some Technical Details About Thyme Oil",
        "composition": "The characterization of thyme oil by GC and GC-MS methods indicated that thymol, p-cymene, carvacrol, linalool, β-caryphyllene, and terpinen-4-ol are present.",
        "extraction": "Thyme oil is obtained from the plant Thymus vulgaris L. Thyme Oil BP is obtained by steam distillation from the fresh flowering aerial parts. This oil has a clear, dark reddish-brown liquid color and a unique, aromatic, spicy perfume reminiscent of thymol. It is miscible with light petroleum as well as ethanol. Because of its antibacterial and antiseptic properties, thyme is a good treatment for colds, coughs, and other respiratory diseases. Thyme also has antibacterial properties and is commonly utilized in face cleansers and acne treatments. A thyme extract may help lower blood pressure.",
        "coa": "/assets/images/products/spice-oil/COA/THYME OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/THYME OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/THYME OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Thyme Oil"
      },
      {
        "id": 22,
        "title": "Here Are Some Technical Details About Turmeric Oil",
        "composition": "Turmeric oil contains aromatic-turmerone(ar-turmerone), β-turmerone, α-turmerone, α-zingiberene, β-sesquiphellandrene, and β-bisabolene.",
        "extraction": "Curcuma Longa is the botanical source of turmeric oil. Steam distillation is used with volatile solvents to extract turmeric essential oils. It is a clear liquid that ranges in color from golden yellow to reddish brown. It has a typical Turmeric root aroma. Turmeric oil has anti-inflammatory and antioxidant effects. As a result, it aids in the prevention of dryness, infections, scars, and blemishes. It maintains the skin's optimal pH level and offers skin-hydrating properties. Turmeric oil has anti-ageing properties as well.",
        "coa": "/assets/images/products/spice-oil/COA/TURMERIC OIL COA.pdf",
        "msds": "/assets/images/products/spice-oil/MSDS/TURMERIC OIL MSDS.pdf",
        "image": "/assets/images/products/spice-oil/TURMERIC OIL.webp",
        "imageAlt": "Here Are Some Technical Details About Turmeric Oil"
      }
    ],
    "perPage": 6
  }
};
