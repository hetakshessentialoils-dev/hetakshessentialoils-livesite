import Link from "next/link";

export function BlogPagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pageHref = (num: number) => (num === 1 ? "/blog" : `/blog/page/${num}`);

  return (
    <div className="col-md-12 mx-auto text-center">
      <div className="lo-pagination">
        {pages.map((num) =>
          num === page ? (
            <span key={num} aria-current="page" className="page-numbers current">
              {num}
            </span>
          ) : (
            <Link key={num} href={pageHref(num)} className="page-numbers">
              {num}
            </Link>
          ),
        )}
        {page < totalPages && (
          <Link href={pageHref(page + 1)} className="next page-numbers">
            Next &raquo;
          </Link>
        )}
      </div>
    </div>
  );
}
