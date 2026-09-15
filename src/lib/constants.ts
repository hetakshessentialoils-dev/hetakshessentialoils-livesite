export const SITE_URL = "https://hetakshessentialoils.com";
export const SITE_NAME = "Hetaksh Essential Oils";

export const CONTACT = {
  salesEmail: "sales@hetakshessentialoils.com",
  marketingEmail: "mkt2@hetakshessentialoils.com",
  phone1: "+91 9870-385-705",
  phone2: "+91 9871-888-705",
  whatsapp: "919870385705",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/essential-oils",
    children: [
      { label: "Essential Oils", href: "/essential-oils" },
      { label: "Carrier Oils", href: "/carrier-oils" },
      { label: "Pharma Grade Oils", href: "/pharma-grade-oils" },
      { label: "Special Ingredients", href: "/special-ingredients" },
      { label: "Spice Oils", href: "/spice-oils" },
      { label: "Hydrosols", href: "/hydrosol-oils" },
    ],
  },
  { label: "Industries We Serve", href: "/industries-we-serve" },
  { label: "Working Process", href: "/working-process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_COUNTRIES = [
  "United States", "Canada", "Japan", "Brazil", "Argentina", "Australia", "Singapore",
  "Malaysia", "United Arab Emirates", "Saudi Arabia", "China", "Iran", "Mexico", "Taiwan",
  "South Korea", "Serbia", "Bulgaria", "Belgium", "Czech Republic", "Sweden", "Hungary",
  "Austria", "Germany", "United Kingdom", "Italy", "Spain", "Poland", "Netherlands",
  "South Africa", "France", "New Zealand", "Egypt", "Jordan", "Colombia", "Turkey",
  "Switzerland", "Ireland", "Israel", "Russia", "India",
];

export const WHY_HETAKSH = [
  { title: "Authentic Products", text: "Experience authenticity. Our products reflect true craftsmanship and premium quality." },
  { title: "Worldwide Export", text: "Global Presence: Our products reach customers in more than 40 countries worldwide." },
  { title: "10+ Years In The Market", text: "Benefit from our extensive 10+ years of experience serving diverse markets." },
  { title: "Dedicated Support", text: "Committed to providing dedicated and exceptional support services to you." },
  { title: "Rigorous Testing", text: "Through rigorous testing, we ensure the purity and effectiveness of our oils." },
  { title: "Delivery commitment", text: "Our delivery commitment ensures customer satisfaction and your orders reach promptly." },
];

export const INDUSTRIES = [
  "Cosmetics",
  "Pharmaceutical",
  "Nutraceutical",
  "Crop Protection",
  "Veterinary",
];

export const HOMEPAGE_FAQS = [
  {
    question: "Are you a bulk manufacturer and wholesale supplier of essential oils?",
    answer:
      "Yes, we are a leading bulk manufacturer and wholesale supplier of essential oils. We supply many industries such as cosmetics, personal care, aromatherapy, pharmaceuticals, food & beverages, and nutraceuticals.",
  },
  {
    question: "Which countries do you supply your products in bulk?",
    answer:
      "We bulk supply essential oils, carrier oils, spice oils, and specialty ingredients to more than 40 countries, including the USA, Canada, Australia, and countries in the Middle East.",
  },
  {
    question: "What packaging options do you provide as a bulk supplier?",
    answer:
      "We are bulk wholesalers and provide our products in 25 kg and 180 kg HDPE drums.",
  },
  {
    question: "Do you offer export documentation for bulk exports?",
    answer:
      "Yes, we support with all the necessary documentation required for bulk exports.",
  },
  {
    question: "As a bulk manufacturer, how do you maintain your quality?",
    answer:
      "We are a bulk manufacturer, and we maintain our quality through thorough inspections, rigorous quality checks, and proper standardization practices.",
  },
];

export const DEFAULT_FAQS = [
  {
    question: "Are your essential oils 100% natural?",
    answer: "We supply products in grades complying with applicable IP, BP, EP, USP, and JP specifications where supported by the individual product documentation.",
  },
  {
    question: "Do you provide COA and MSDS documents?",
    answer: "COA and MSDS documents are available for applicable products and can be accessed from their respective product pages.",
  },
  {
    question: "Do you export worldwide?",
    answer: "Yes, we are a government-recognized Export House serving customers in more than 40 countries across pharmaceutical, fragrance, personal care, and FMCG industries.",
  },
];

/** 301 redirects from legacy .php URLs (keys are lowercase filenames) */
export const LEGACY_REDIRECTS: Record<string, string> = {
  "index.php": "/",
  "about.php": "/about",
  "contact.php": "/contact",
  "faq.php": "/",
  "working-process.php": "/working-process",
  "industry-we-use.php": "/industries-we-serve",
  "download-brochure.php": "/download-brochure",
  "privacy-policy.php": "/privacy-policy",
  "search_results.php": "/search",
  "essential-oil.php": "/essential-oils",
  "carrier-oils.php": "/carrier-oils",
  "pharma-grade-oils.php": "/pharma-grade-oils",
  "special-ingredients.php": "/special-ingredients",
  "spice-oils.php": "/spice-oils",
  "hydrosol-oils.php": "/hydrosol-oils",
  "almond-oil.php": "/almond-oil",
  "arachis-oil.php": "/arachis-oil",
  "argan-oil.php": "/argan-oil",
  "batana-oil.php": "/batana-oil",
  "black-seed-oil.php": "/black-seed-oil",
  "castor-oil.php": "/castor-oil",
  "garlic-oil.php": "/garlic-oil",
  "olive-oil.php": "/olive-oil",
  "peppermint-oil.php": "/peppermint-oil",
  "saw-palmetto-berry-extract.php": "/saw-palmetto-berry-extract",
  "sesame-oil.php": "/sesame-oil",
  "tea-tree-oil.php": "/tea-tree-oil",
};
