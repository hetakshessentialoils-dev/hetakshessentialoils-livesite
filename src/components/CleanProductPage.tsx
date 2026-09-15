import { FAQSection } from "@/components/FAQSection";
import { RelatedProducts } from "@/components/RelatedProducts";
import { getProductFaqs } from "@/data/product-faqs";
import { createOutlineHeadings, type OutlineTag } from "@/lib/heading-outline";
import { groupContentBlocks, groupParagraphs } from "@/lib/paragraph-flow";
import type {
  CleanProductContentBlock,
  CleanProductFlowItem,
  CleanProductInfoTable,
  CleanProductList,
  CleanProductPage as CleanProductPageData,
  CleanProductSection,
} from "@/lib/types";

function DocButtons({ coa, msds }: { coa?: string; msds?: string }) {
  if (!coa && !msds) return null;
  return (
    <div className="cp-docs">
      {coa ? (
        <a className="cp-docs__btn" href={coa} target="_blank" rel="noopener noreferrer">
          COA
        </a>
      ) : null}
      {msds ? (
        <a className="cp-docs__btn cp-docs__btn--ghost" href={msds} target="_blank" rel="noopener noreferrer">
          MSDS
        </a>
      ) : null}
    </div>
  );
}

function BulletList({ list, headingAs: Heading }: { list: CleanProductList; headingAs: OutlineTag }) {
  const cols = list.columns ?? 2;
  return (
    <div className="cp-list">
      {list.title ? <Heading className="cp-h3 cp-list__title">{list.title}</Heading> : null}
      <ul className={`cp-list__items cp-list__items--cols-${cols}`}>
        {list.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ContentSection({
  section,
  headingAs: Heading,
  lists,
}: {
  section: CleanProductSection;
  headingAs: OutlineTag;
  lists: { list: CleanProductList; headingAs: OutlineTag }[];
}) {
  return (
    <article className="cp-section">
      <Heading className="cp-h2 cp-section__title">{section.title}</Heading>
      {section.content ? (
        <OrderedContent content={section.content} headingAs={Heading} />
      ) : (
        <>
          {groupParagraphs(section.paragraphs ?? []).map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          {section.tables?.map((table, i) => (
            <InfoTable key={i} table={table} headingAs={Heading} />
          ))}
          {lists.map(({ list, headingAs }, i) => (
            <BulletList key={i} list={list} headingAs={headingAs} />
          ))}
          {groupParagraphs(section.trailingParagraphs ?? []).map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </>
      )}
      {section.checklist ? (
        <div className="cp-checklist">
          <ul className="cp-list__items cp-list__items--cols-2">
            {[...section.checklist.left, ...section.checklist.right].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

function InfoTable({ table, headingAs: Heading }: { table: CleanProductInfoTable; headingAs: OutlineTag }) {
  const labelHeader = table.labelHeader ?? "Product Detail";
  const valueHeader = table.valueHeader ?? "Information";
  const extraHeaders = table.extraHeaders ?? [];
  const wide = extraHeaders.length > 0;

  return (
    <div className="cp-info-table">
      {table.title ? (
        <Heading className="cp-h2 cp-info-table__title">{table.title}</Heading>
      ) : null}
      <div className="cp-info-table__wrap">
        <table className={wide ? "cp-info-table__grid--wide" : undefined}>
          <thead>
            <tr>
              <th scope="col">{labelHeader}</th>
              <th scope="col">{valueHeader}</th>
              {extraHeaders.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.label}>
                <td>{row.label}</td>
                <td>{row.value}</td>
                {extraHeaders.map((header, i) => (
                  <td key={header}>{row.extra?.[i] ?? ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function OrderedContent({
  content,
  headingAs: Heading,
}: {
  content: CleanProductContentBlock[];
  headingAs: OutlineTag;
}) {
  return groupContentBlocks(content).map((block, index) => {
    if (block.type === "heading") {
      return (
        <Heading key={index} className="cp-h3 cp-list__title">
          {block.text}
        </Heading>
      );
    }
    if (block.type === "paragraph") {
      return <p key={index} dangerouslySetInnerHTML={{ __html: block.text }} />;
    }
    if (block.type === "list") {
      return (
        <ul
          key={index}
          className={`cp-list__items cp-list__items--cols-${block.columns ?? 2}`}
        >
          {block.items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      );
    }
    return <InfoTable key={index} table={block.table} headingAs={Heading} />;
  });
}

function FlowItem({
  item,
  headingAs: Heading,
}: {
  item: CleanProductFlowItem;
  headingAs: OutlineTag;
}) {
  if (item.type === "variant") {
    return (
      <article className="cp-variant">
        <Heading className="cp-h2 cp-variant__title">{item.title}</Heading>
        {item.content ? (
          <OrderedContent content={item.content} headingAs={Heading} />
        ) : (
          <>
            {groupParagraphs(item.paragraphs).map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </>
        )}
        <DocButtons coa={item.coa} msds={item.msds} />
      </article>
    );
  }

  return (
    <ContentSection
      section={item}
      headingAs={Heading}
      lists={(item.lists ?? []).map((list) => ({ list, headingAs: Heading }))}
    />
  );
}

export function CleanProductPage({ data }: { data: CleanProductPageData }) {
  const faqs = getProductFaqs(data.slug) ?? [];
  const sections = data.sections ?? [];
  const outline = createOutlineHeadings();

  const specsHeading = data.specs?.length && data.specsTitle ? outline.next() : null;
  const SpecsHeading = specsHeading;
  const mainListHeadings = (data.lists ?? []).map((list) => ({
    list,
    headingAs: outline.next(),
  }));
  const sectionHeadings = sections.map((section) => {
    const headingAs = outline.next();
    return {
      section,
      headingAs,
      lists: (section.lists ?? []).map((list) => ({
        list,
        headingAs: outline.childOf(headingAs),
      })),
    };
  });
  const variantHeadings = data.variants.map((variant) => {
    const headingAs = outline.next();
    return {
      variant,
      headingAs,
      lists: (variant.lists ?? []).map((list) => ({
        list,
        headingAs: outline.childOf(headingAs),
      })),
    };
  });
  const tableHeadings = (data.infoTables ?? []).map((table) => ({
    table,
    headingAs: outline.next(),
  }));
  const flowHeadings = (data.contentFlow ?? []).map((item) => ({
    item,
    headingAs: outline.next(),
  }));
  const relatedHeading = outline.next();
  const faqHeading = faqs.length ? outline.next() : null;

  const copy = (
    <div className="cp-copy">
      {groupParagraphs(data.paragraphs).map((p, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
      ))}
    </div>
  );

  const specsBlock = data.specs?.length ? (
    <div className="cp-specs-block">
      {data.specsTitle && SpecsHeading ? (
        <SpecsHeading className="cp-h2 cp-specs-block__title">{data.specsTitle}</SpecsHeading>
      ) : null}
      <ul className="cp-specs">
        {data.specs.map((spec) => (
          <li key={spec.label}>
            <strong>{spec.label}:</strong> {spec.value}
          </li>
        ))}
      </ul>
    </div>
  ) : null;

  const docs = <DocButtons coa={data.coa} msds={data.msds} />;
  const afterCopy = groupParagraphs(data.afterSpecsParagraphs ?? []).map((p, i) => (
    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
  ));
  /** Without a spec table there is nothing to lift, so keep the copy first. */
  const specsFirst = data.layout !== "default" && specsBlock !== null;

  return (
    <div className={`cp-page${specsFirst ? " cp-page--specs-first" : ""}`}>
      <section className="cp-main">
        <div className="container">
          <div className="cp-layout">
            <aside className="cp-gallery">
              <img src={data.image} alt={data.imageAlt} />
            </aside>

            <div className="cp-details">
              <h1 className="cp-h1 cp-title">{data.name}</h1>
              {data.heading ? <p className="cp-heading">{data.heading}</p> : null}

              {specsFirst ? (
                <>
                  {specsBlock}
                  {docs}
                  {copy}
                  {afterCopy}
                </>
              ) : (
                <>
                  {copy}
                  {specsBlock}
                  {docs}
                  {afterCopy}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {flowHeadings.length ? (
        <section className="cp-sections">
          <div className="container">
            {flowHeadings.map(({ item, headingAs }, index) => (
              <FlowItem key={index} item={item} headingAs={headingAs} />
            ))}
          </div>
        </section>
      ) : null}

      {!flowHeadings.length && mainListHeadings.length ? (
        <section className="cp-sections">
          <div className="container">
            {mainListHeadings.map(({ list, headingAs }, index) => (
              <BulletList key={index} list={list} headingAs={headingAs} />
            ))}
          </div>
        </section>
      ) : null}

      {!flowHeadings.length && sectionHeadings.length ? (
        <section className="cp-sections">
          <div className="container">
            {sectionHeadings.map(({ section, headingAs, lists }, index) => (
              <ContentSection
                key={index}
                section={section}
                headingAs={headingAs}
                lists={lists}
              />
            ))}
          </div>
        </section>
      ) : null}

      {!flowHeadings.length && variantHeadings.length > 0 ? (
        <section className="cp-variants">
          <div className="container">
            {variantHeadings.map(({ variant, headingAs: Heading, lists }, index) => (
              <article key={index} className="cp-variant">
                <Heading className="cp-h2 cp-variant__title">{variant.title}</Heading>
                {groupParagraphs(variant.paragraphs).map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
                {variant.tables?.map((table, i) => (
                  <InfoTable key={i} table={table} headingAs={Heading} />
                ))}
                {lists.map(({ list, headingAs }, i) => (
                  <BulletList key={i} list={list} headingAs={headingAs} />
                ))}
                {groupParagraphs(variant.trailingParagraphs ?? []).map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
                <DocButtons coa={variant.coa} msds={variant.msds} />
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {tableHeadings.length ? (
        <section className="cp-info-tables">
          <div className="container">
            {tableHeadings.map(({ table, headingAs }, index) => (
              <InfoTable key={index} table={table} headingAs={headingAs} />
            ))}
          </div>
        </section>
      ) : null}

      <RelatedProducts currentSlug={data.slug} headingAs={relatedHeading} />

      <FAQSection faqs={faqs} headingAs={faqHeading ?? "h4"} />
    </div>
  );
}
