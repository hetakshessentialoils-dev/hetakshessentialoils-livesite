import Link from "next/link";
import { decodeHtmlEntities } from "@/lib/decode-html";

export function BlogPageHeader({
  title,
}: {
  title: string;
  variant?: "list" | "detail";
}) {
  const decodedTitle = decodeHtmlEntities(title);

  return (
    <section className="page-header page-header--blog">
      <div
        className="page-header-bg"
        style={{ backgroundImage: "url(/assets/images/backgrounds/pattern02.webp)" }}
      />
      <div className="container">
        <div className="page-header__inner">
          <h1>{decodedTitle}</h1>
          <div className="thm-breadcrumb__box">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
