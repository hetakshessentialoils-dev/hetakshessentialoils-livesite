import type { CleanProductPage, FaqItem } from "@/lib/types";
import { PAGES as PAGES_1, FAQS as FAQS_1 } from "@/data/batch5/part1";
import { PAGES as PAGES_2, FAQS as FAQS_2 } from "@/data/batch5/part2";
import { PAGES as PAGES_3, FAQS as FAQS_3 } from "@/data/batch5/part3";
import { PAGES as PAGES_4, FAQS as FAQS_4 } from "@/data/batch5/part4";

export const NEW_PAGES_BATCH5: Record<string, CleanProductPage> = {
  ...PAGES_1,
  ...PAGES_2,
  ...PAGES_3,
  ...PAGES_4,
};

export const NEW_FAQS_BATCH5: Record<string, FaqItem[]> = {
  ...FAQS_1,
  ...FAQS_2,
  ...FAQS_3,
  ...FAQS_4,
};
