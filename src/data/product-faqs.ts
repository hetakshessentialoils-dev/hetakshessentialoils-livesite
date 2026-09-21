import type { FaqItem } from "@/lib/types";
import { PRODUCT_FAQS } from "@/data/product-pages";

export { PRODUCT_FAQS };

export function getProductFaqs(slug: string): FaqItem[] | undefined {
  return PRODUCT_FAQS[slug];
}
