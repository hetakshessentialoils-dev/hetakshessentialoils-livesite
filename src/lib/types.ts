export type FaqItem = { question: string; answer: string };

export type ProductPageHtml = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
  categoryName: string;
  html: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
  seoKeywords?: string | null;
  faqs: FaqItem[];
  sortOrder: number;
  products?: Product[];
  _count?: { products: number };
};

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  coaMsdsNote?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  seoKeywords?: string | null;
  faqs: FaqItem[];
  category?: Category;
};

export type CategoryDetailItem = {
  id: number;
  title: string;
  composition: string;
  extraction: string;
  coa?: string;
  msds?: string;
  image: string;
  imageAlt: string;
};

export type CategoryDetail = {
  intro: string[];
  typesTitle: string;
  perPage: number;
  types: { id: number; label: string }[];
  items: CategoryDetailItem[];
};

export type LandingGrade = {
  title: string;
  spec: string;
  coa?: string;
  msds?: string;
};

export type LandingVariant = {
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  coa?: string;
  msds?: string;
};

export type ProductLanding = {
  slug: string;
  category: string;
  categoryName: string;
  headerBgId: string;
  title: string;
  subtitle?: string;
  intro: string[];
  packaging: string;
  formTitle: string;
  enquirySource: string;
  gradeColClass: string;
  grades: LandingGrade[];
  /** When set, rendered instead of the single manufacturer block (Oil / USP / Hydrosol sections). */
  variants?: LandingVariant[];
  manufacturer: { heading: string; image: string; imageAlt: string; paragraphs: string[] };
  documents: { image: string; imageAlt: string; left: string[]; right: string[] };
  wholesale: {
    heading: string;
    bgImage: string;
    paragraphs: string[];
    uspLeft: string[];
    uspRight: string[];
  };
  aim: { image: string; imageAlt: string; aim: string; customers: string };
  seoTitle: string;
  seoDescription: string;
};

/** Typical product page: one image + main product, variants below, contact + FAQ. */
export type CleanProductVariant = {
  title: string;
  paragraphs: string[];
  lists?: CleanProductList[];
  /** Tables shown in-sequence after the paragraphs, as laid out in the source PDF. */
  tables?: CleanProductInfoTable[];
  /** Copy that follows the bullet lists, as laid out in the source PDF. */
  trailingParagraphs?: string[];
  /** Exact in-variant order when paragraphs, headings, lists and tables alternate. */
  content?: CleanProductContentBlock[];
  coa?: string;
  msds?: string;
};

export type CleanProductSpec = {
  label: string;
  value: string;
};

/** Product information table from the PDF (2+ columns, shown before FAQ). */
export type CleanProductInfoTable = {
  /** Omit when a surrounding section already supplies the heading. */
  title?: string;
  /** Left column header — default "Product Detail". */
  labelHeader?: string;
  /** Right column header — default "Information". */
  valueHeader?: string;
  /** Extra column headers after the first two (comparison tables). */
  extraHeaders?: string[];
  rows: Array<CleanProductSpec & { extra?: string[] }>;
};

/** Extra PDF sections (uses, exporter, etc.) shown below the main product. */
export type CleanProductList = {
  title?: string;
  items: string[];
  /** Columns for bullet items — default 2 so lists stay compact. */
  columns?: 1 | 2;
};

export type CleanProductContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; columns?: 1 | 2 }
  | { type: "table"; table: CleanProductInfoTable };

export type CleanProductSection = {
  title: string;
  paragraphs?: string[];
  lists?: CleanProductList[];
  /** Tables shown in-sequence after the paragraphs, as laid out in the source PDF. */
  tables?: CleanProductInfoTable[];
  /** Copy that follows the bullet lists, as laid out in the source PDF. */
  trailingParagraphs?: string[];
  checklist?: { left: string[]; right: string[] };
  /** Exact in-section order when paragraphs, headings, lists and tables alternate. */
  content?: CleanProductContentBlock[];
};

export type CleanProductFlowItem =
  | ({ type: "section" } & CleanProductSection)
  | ({ type: "variant" } & CleanProductVariant);

export type CleanProductPage = {
  slug: string;
  category: string;
  categoryName: string;
  /** Short product name shown as H1 (e.g. "Anise Oil"). */
  name: string;
  /** Optional longer PDF heading under the name. */
  heading?: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  specs?: CleanProductSpec[];
  /** Optional title above specs (e.g. "Product Specifications"). */
  specsTitle?: string;
  /** PDF copy that follows the specification table before the first named section. */
  afterSpecsParagraphs?: string[];
  /**
   * Page template. Defaults to "specs-first"; pages with no spec table fall
   * back to the default order since there is nothing to lift beside the image.
   * - "specs-first": specs and COA/MSDS beside the image, copy below them
   *   wrapping to full width once it runs past the image.
   * - "default": copy beside the image, then specs and COA/MSDS below it.
   */
  layout?: "default" | "specs-first";
  /** Extra bullet groups. Rendered in the oil write-up below the image, not beside it. */
  lists?: CleanProductList[];
  coa?: string;
  msds?: string;
  /** Non-product content blocks from the PDF (uses, export, etc.). */
  sections?: CleanProductSection[];
  /** Other product grades / variants with their own COA/MSDS. */
  variants: CleanProductVariant[];
  /** Ordered sections and variants for PDFs that alternate between product forms. */
  contentFlow?: CleanProductFlowItem[];
  /** Product information tables placed after related products, before FAQ. */
  infoTables?: CleanProductInfoTable[];
  formTitle: string;
  enquirySource: string;
  seoTitle: string;
  seoDescription: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  featuredImageUrl?: string | null;
  imageAlt?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  seoKeywords?: string | null;
  faqs: FaqItem[];
  publishedAt: string;
  publishedDateDisplay?: string;
  tags?: string[];
  author?: string;
  featuredOnHomepage?: boolean;
};

export type BlogListResponse = {
  posts: BlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type EnquiryPayload = {
  name?: string;
  email: string;
  phone?: string;
  country?: string;
  message?: string;
  source?: string;
  website_url?: string;
  form_time?: number;
};
