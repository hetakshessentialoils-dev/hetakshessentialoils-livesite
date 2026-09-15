import { EnquiryFormBinder } from "@/components/EnquiryFormBinder";
import { FAQSection } from "@/components/FAQSection";
import { getProductFaqs } from "@/data/product-faqs";
import { splitProductHtml } from "@/lib/split-product-html";
import type { ProductPageHtml } from "@/lib/types";

export function RawProductPage({ data }: { data: ProductPageHtml }) {
  const faqs = getProductFaqs(data.slug);
  const { before, after } = splitProductHtml(data.html);

  return (
    <>
      <div className={`raw-product raw-product--${data.slug}`}>
        {before ? <div dangerouslySetInnerHTML={{ __html: before }} /> : null}
      </div>
      <div className={`raw-product raw-product--${data.slug}`}>
        {after ? <div dangerouslySetInnerHTML={{ __html: after }} /> : null}
        <EnquiryFormBinder />
      </div>
      {faqs?.length ? <FAQSection faqs={faqs} /> : null}
    </>
  );
}
