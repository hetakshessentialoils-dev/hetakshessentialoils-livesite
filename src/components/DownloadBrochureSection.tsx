import Link from "next/link";

export function DownloadBrochureSection() {
  return (
    <section className="downloadbro">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11 text-center">
            <div className="section-title text-center">
              <h3 className="section-title__title">
                Take a journey through our brochure to learn about our unique Essential oils & Carrier
                Oils collection!
              </h3>
            </div>
            <div className="downloadbro__btn-box">
              <Link href="/download-brochure" className="downloadbro__btn thm-btn">
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
