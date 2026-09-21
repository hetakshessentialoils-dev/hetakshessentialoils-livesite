import type { ProductLanding } from "@/lib/types";
import { landing as blackSeedOil } from "@/data/product-pages/black-seed-oil";
import { landing as sawPalmettoBerryExtract } from "@/data/product-pages/saw-palmetto-berry-extract";

export const PRODUCT_LANDINGS: Record<string, ProductLanding> = {
  "black-seed-oil": blackSeedOil,
  "saw-palmetto-berry-extract": sawPalmettoBerryExtract,
};
