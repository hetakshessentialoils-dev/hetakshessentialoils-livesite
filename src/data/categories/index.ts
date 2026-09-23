/**
 * Category page data lives in this folder.
 * Open the category file (for example `essential-oils.ts`) to edit
 * meta title, meta description, content, and FAQs.
 */
import type { Category, CategoryDetail } from "@/lib/types";
import { category as essentialOils, details as essentialOilsDetails, image as essentialOilsImage } from "./essential-oils";
import { category as carrierOils, details as carrierOilsDetails, image as carrierOilsImage } from "./carrier-oils";
import { category as pharmaGradeOils, details as pharmaGradeOilsDetails, image as pharmaGradeOilsImage } from "./pharma-grade-oils";
import { category as specialIngredients, details as specialIngredientsDetails, image as specialIngredientsImage } from "./special-ingredients";
import { category as spiceOils, details as spiceOilsDetails, image as spiceOilsImage } from "./spice-oils";
import { category as hydrosolOils, details as hydrosolOilsDetails, image as hydrosolOilsImage } from "./hydrosol-oils";

export const CATEGORIES: Category[] = [
  essentialOils,
  carrierOils,
  pharmaGradeOils,
  specialIngredients,
  spiceOils,
  hydrosolOils,
];

export const CATEGORY_DETAILS: Record<string, CategoryDetail> = {
  "essential-oils": essentialOilsDetails,
  "carrier-oils": carrierOilsDetails,
  "pharma-grade-oils": pharmaGradeOilsDetails,
  "special-ingredients": specialIngredientsDetails,
  "spice-oils": spiceOilsDetails,
  "hydrosol-oils": hydrosolOilsDetails,
};

export const CATEGORY_IMAGES: Record<string, string> = {
  "essential-oils": essentialOilsImage,
  "carrier-oils": carrierOilsImage,
  "pharma-grade-oils": pharmaGradeOilsImage,
  "special-ingredients": specialIngredientsImage,
  "spice-oils": spiceOilsImage,
  "hydrosol-oils": hydrosolOilsImage,
};
