import type { ProductPageHtml } from "@/lib/types";
import { htmlPage as almondOil } from "@/data/product-pages/almond-oil";
import { htmlPage as arganOil } from "@/data/product-pages/argan-oil";
import { htmlPage as batanaOil } from "@/data/product-pages/batana-oil";
import { htmlPage as castorOil } from "@/data/product-pages/castor-oil";
import { htmlPage as peppermintOil } from "@/data/product-pages/peppermint-oil";
import { htmlPage as sesameOil } from "@/data/product-pages/sesame-oil";
import { htmlPage as teaTreeOil } from "@/data/product-pages/tea-tree-oil";

export const PRODUCT_PAGES_HTML: Record<string, ProductPageHtml> = {
  "almond-oil": almondOil,
  "argan-oil": arganOil,
  "batana-oil": batanaOil,
  "castor-oil": castorOil,
  "peppermint-oil": peppermintOil,
  "sesame-oil": sesameOil,
  "tea-tree-oil": teaTreeOil,
  "garlic-oil": {
    slug: "garlic-oil",
    title: "Garlic Oil Wholesale, Suppliers & Bulk Manufacturers in US",
    seoTitle: "Garlic Oil Wholesale, Suppliers & Bulk Manufacturers in US",
    seoDescription: "Shop 100% Pure, Natural Garlic Oil at Wholesale Prices. Bulk Quantity Available from Trusted Manufacturers, Wholesale Suppliers & Distributors in US.",
    category: "spice-oils",
    categoryName: "Spice Oils",
    html: `
<section class="single-page-header dark">
  <div class="page-header-bg" style="background-image: url('/assets/images/products/single-product/garlic-oil/Garlic-oil-distributors.webp');"></div>
  <div class="container">
    <div class="single-header__inner">
      <div class="row align-items-center">
        <!-- Left: Intro text -->
        <div class="col-xl-7 col-lg-7 col-md-6">
          <div class="about-one__left wow slideInLeft animated" data-wow-delay="100ms">
            <h1 class="section-title__title">
              Garlic Oil Bulk Supplier
            </h1>
            <p class="about-one__text">
              Our Garlic oil also known as Garlic Essential Oil is a natural oil derived from Garlic bulbs with Allicin content. Steam Distillation Process is used to extract the oil from garlic bulbs preserving the natural compounds as found in this Oil. Garlic oil is a versatile and beneficial oil that has been used for centuries for its medicinal and culinary properties. Its numerous health benefits make it a popular ingredient in natural health remedies and supplements, while its strong flavor and aroma make it a favorite in the kitchen. <b>Garlic Oil Bulk Supplier</b> is also well known for its use for Skincare &amp; Haircare.
            </p>
            <h4 class="mb-5">
              Our Garlic Oil is 100% natural and pure and free from harmful substances like pesticides.
            </h4>
          </div>
        </div>
        <!-- Right: Enquiry form -->
        <div class="col-xl-5 col-lg-5 col-md-6">
          <div class="form-box">
            <h4 class="section-title__title">
              Contact us for Wholesale Garlic Oil Enquiries
            </h4>
            <form id="page_form" class="contact_form send-form" action="submit.php" method="POST" data-toggle="validator">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" name="name" id="name" class="form-control" placeholder=" Company Name" required data-error="Please fill out">
                    <label for="name"><i class="fa fa-user"></i></label>
                    <div class="help-block with-errors"></div>
                    <input type="hidden" name="webpage" value="Enquiry from Garlic Oil Page">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="email" name="email" class="form-control" id="email" placeholder=" Email" required>
                    <label for="email"><i class="fa fa-envelope"></i></label>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <input type="tel" class="phone form-control" placeholder="Phone Number" name="phone" required data-error="Please fill out">
                    <input type="hidden" name="country_name" id="page_country_name" value="">
                    <input type="hidden" name="dial_code" id="page_dial_code" value="">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="form-group col-sm-12">
                  <textarea class="form-control" name="message" placeholder="Message"></textarea>
                </div>
              </div>
              <input type="submit" id="form-submit" name="SubmitForm" value="Submit" class="main-btn-rect lo-btn">
              <span class="circle"></span>
              <h4 id="thankYouMessage" class="h4 text-center hidden"></h4>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ─── Page Header End ──────────────────────────────────────────────────── -->
<!-- ─── COA & MSDS ──────────────────────────────────────────────────────── -->
<section class="pt-3 pb-3 bg-color">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="heading-box">
          <h4>
            GARLIC OIL COA &amp; MSDS
          </h4>
        </div>
        <div class="product__btn-box">
          <a href="/assets/images/products/single-product/garlic-oil/GARLIC-OIL-COA.pdf" target="_blank" class="product__btn thm-btn"><i class="fa fa-download" aria-hidden="true"></i> COA</a><a href="/assets/images/products/single-product/garlic-oil/Garlic-Oil-MSDS.pdf" target="_blank" class="product__btn thm-btn thm-btn2"><i class="fa fa-download" aria-hidden="true"></i> MSDS</a>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ─── Bulk Manufacturer Section ───────────────────────────────────────── -->
<section class="single-product-section bg-color2">
  <div class="container">
    <div class="single-details__content">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-left">
            <div class="about-one__img-box wow slideInLeft animated" data-wow-delay="100ms">
              <div class="product__img">
                <img src="/assets/images/products/single-product/garlic-oil/garlic-oil-bulk-manufacturers.webp" alt="Garlic Oil Bulk Manufacturer">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-right">
            <div class="wow slideInRight animated" data-wow-delay="100ms">
              <h2 class="section-title__title">
                BULK Manufacturer of GARLIC OIL From USA
              </h2>
              <p class="mb-3">
                Garlic oil is extracted from fresh garlic cloves (Allium sativum) through Steam distillation. The cloves are chopped into small pieces and then placed in a distillation unit, where steam is passed through the plant material. The steam carries the volatile oils from the garlic into a condenser, where they are cooled and collected as a liquid.
              </p>
              <p class="mb-3">
                <b>Chemical Composition:</b> Garlic Oil is more known for its ALLICIN content. This Essential Oil primarily composed of sulfur compounds including Allicin, Diallyl Sulfide, Diallyl Tetresulphide, Diallyl Disulfide, and Diallyl Trisulfide. These compounds are responsible for the pungent odor and taste of garlic, as well as many of its health benefits.
              </p>
              <p>
                <b>Physical Properties:</b> Garlic oil is a yellow to brownish-yellow liquid with a strong odor and a pungent taste. The viscosity of garlic oil is relatively low, making it easy to pour and mix with other ingredients and is soluble in alcohol and vegetable oils.
              </p>
              <p>
                If you're looking to purchase <b>Garlic oil bulk manufacturer</b> or wholesale quantities, Hetaksh Essential Oils is a supplier that produces high-quality Garlic oil with minimum 80% to 90% Allicin content, with a good reputation which has been in the industry for several years. We provide pure Garlic oil Wholesale with a High Allicin content, as this is the compound responsible for many of the health benefits associated with Garlic oil suppliers.
              </p>
              <p>
                We as a <b>Garlic oil wholesale supplier</b> has the necessary certifications to ensure the product's quality and safety along with certifications such as ISO, GMP, and HACCP.
              </p>
              <p>
                If you're looking for Premium Quality Garlic oil distributors, Choose US!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ─── Why Hetaksh ──────────────────────────────────────────────────────── -->
<section class="why-choose-one-2 bg-color">
  <div class="container">
    <div class="row">
      <div class="col-xl-12 text-center">
        <div class="section-title text-left">
          <h3 class="section-title__title">
            Why Hetaksh
          </h3>
        </div>
      </div>
    </div>
    <div class="row align-center justify-content-center">
      <div class="col-md-4">
        <div class="why-choose-one__points-box">
          <ul class="list-unstyled why-choose-one__points">
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Approved-Authentic-Products.webp">
              </div>
              <div class="text">
                <h4>
                  Authentic Products
                </h4>
                <p>
                  Experience authenticity. Our products reflect true craftsmanship and premium quality.
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Worldwide-Export.webp">
              </div>
              <div class="text">
                <h4>
                  Worldwide Export
                </h4>
                <p>
                  Global Presence: Our products reach customers in more than 40 countries worldwide.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="why-choose-one__points-box">
          <ul class="list-unstyled why-choose-one__points">
            <li>
              <div class="icon">
                <img src="/assets/images/icon/10-Years-In-The-Market.webp">
              </div>
              <div class="text">
                <h4>
                  10+ Years In The Market
                </h4>
                <p>
                  Benefit from our extensive 10+ years of experience serving diverse markets.
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Dedicated-Support.webp">
              </div>
              <div class="text">
                <h4>
                  Dedicated Support
                </h4>
                <p>
                  Committed to providing dedicated support and exceptional support services to you.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="why-choose-one__points-box">
          <ul class="list-unstyled why-choose-one__points">
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Rigorous-Testing.webp">
              </div>
              <div class="text">
                <h4>
                  Rigorous Testing
                </h4>
                <p>
                  Through rigorous testing, we ensure the purity and effectiveness of our oils.
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Delivery-Commitment.webp">
              </div>
              <div class="text">
                <h4>
                  Delivery commitment
                </h4>
                <p>
                  Our Delivery commitment ensures customer satisfaction and your orders reach promptly.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ─── Documents Available ─────────────────────────────────────────────── -->
<section class="single-product-section bg-color2">
  <div class="container">
    <div class="product-details__content rev">
      <div class="row">
        <div class="col-xl-5 col-lg-6 col-md-6">
          <div class="product-content-left">
            <div class="about-one__img-box wow slideInLeft animated" data-wow-delay="120ms">
              <div class="product__img">
                <img src="/assets/images/products/single-product/garlic-oil/garlic-oil-bulk-suppliers.webp" alt="Garlic Oil Bulk Supplier">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6 col-md-6">
          <div class="product-content-left product-left wow slideInRight animated" data-wow-delay="120ms">
            <h2 class="section-title__title">
              Documents Available
            </h2>
            <div class="row mt-3">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <ul class="project-details__points-list doc list-unstyled">
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> GMP Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> ISO 9001:2015 Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Method of Analysis Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Technical Data Sheet/Specification
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Process Flow Chart
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> TSE/BSE Free certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Residual Solvent
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> OVI Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Non-GMO Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Nitrosamine-Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Elemental Impurities Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Stability Studies/Shelf-Life Studies accelerated and Long term
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> HACCP Certificate
                  </li>
                </ul>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <ul class="project-details__points-list doc list-unstyled">
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> MSDS
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Aflatoxin Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Gluten Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Vegan Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Melamine Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Food Grade Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Pesticide Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Technical Package equivalent to DMF
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Pyrrolizidine Alkaloids Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Dioxin Free Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Genotoxic free declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Halal Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Latex Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> KOSHER Certificate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ─── Download Brochure ────────────────────────────────────────────────── -->
<section class="downloadbro">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-11 text-center">
        <div class="section-title">
          <h2 class="section-title__title">
            Take a journey through our brochure to learn about our unique Essential Oils &amp; Carrier Oils collection!
          </h2>
        </div>
        <div class="downloadbro__btn-box">
          <a href="/download-brochure" class="downloadbro__btn thm-btn">Download Brochure</a>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ─── Certifications Carousel ──────────────────────────────────────────── -->
<section class="brand-two bg-color">
  <div class="container">
    <div class="section-title text-center mb-4">
      <h3 class="section-title__title">
        Our Certifications
      </h3>
    </div>
    <div class="owl-carousel owl-theme" id="cert-carousel">
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/HACCP.webp" alt="HACCP">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/Kosher-Certification-India.webp" alt="Kosher">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/8.webp" alt="FDA">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/6.webp" alt="FSSAI">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/GMP.webp" alt="GMP">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/5.webp" alt="Halal">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/ISO.webp" alt="ISO">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/7.webp" alt="Spices Board">
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ─── Manufacturers Dark Section ──────────────────────────────────────── -->
<section class="single-product-section-dark">
  <div class="servie-bg-box">
    <div class="single_service__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style="background-image: url(/assets/images/products/single-product/garlic-oil/Garlic-oil-distributors.webp);"></div>
  </div>
  <div class="container">
    <div class="section-title">
      <h2 class="section-title__title">
        Manufacturers and Bulk Suppliers of GARLIC OIL
      </h2>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p>
          Our Company is well recognized as one of the bulk manufactures of "Garlic oil manufacturers" United States and are one of leading cultivators, producers, suppliers and exporters of Essential Oils, Carrier Oils, Spice Oils, Floral Oils and Hydrosol etc.
        </p>
        <p>
          We proudly present ourselves as <b>Garlic oil bulk suppliers</b> &amp; provide Garlic oil in documented product grades. We are a leading Garlic oil supplier and we also supply more than 200 productss. We are one of the largest cultivators and exporters with ISO 9001:2015 &amp; GMP accreditation. We have a government-recognized Export House and Currently we are exporting to more than 40 countries worldwide.
        </p>
        <p>
          We are supplying our Products to top ranked Nutraceutical Companies, Pharmaceuticals Companies, Flavor &amp; Fragrance houses, Oral &amp; Personal Care Companies, Tobacco Manufacturers, Ayurvedic Companies and FMCG manufacturers in India and round the Globe.
        </p>
        <p>
          With strict procurement of 100% Natural and Genuine raw material directly from the farmers and stringent manufacturing &amp; quality control methods we can supply products in grades complying with applicable IP, BP, EP, USP, and JP specifications. We can also customize our Products as per quality requirements and specifications of the customers.
        </p>
        <p>
          You may visit our website <a href="/">www.hetakshessentialoils.com</a> for our Company's Profile and Product details.
        </p>
      </div>
    </div>
  </div>
</section>
<!-- ─── Working Process ──────────────────────────────────────────────────── -->
<section class="process-one-2 bg-color2">
  <div class="container">
    <div class="section-title text-center">
      <h2 class="section-title__title">
        Our Working Process
      </h2>
    </div>
    <div class="row">
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 wow fadeInUp animated mt-3" data-wow-delay="100ms">
        <a href="/working-process">
        <div class="process-one__single p-bg-1">
          <span>
          <img src="/assets/images/process/Raw Materials.webp">
          </span>
          <h4 class="process-one__title">
            Raw Materials
          </h4>
        </div>
        </a>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 wow fadeInUp animated mt-3" data-wow-delay="200ms">
        <a href="/working-process">
        <div class="process-one__single p-bg-1">
          <span>
          <img src="/assets/images/process/Production.webp">
          </span>
          <h4 class="process-one__title">
            Production
          </h4>
        </div>
        </a>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 wow fadeInUp animated mt-3" data-wow-delay="300ms">
        <a href="/working-process">
        <div class="process-one__single p-bg-1">
          <span>
          <img src="/assets/images/process/Quality-and-Analysis.webp">
          </span>
          <h4 class="process-one__title">
            Quality and Analysis
          </h4>
        </div>
        </a>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 wow fadeInUp animated mt-3" data-wow-delay="400ms">
        <a href="/working-process">
        <div class="process-one__single">
          <span>
          <img src="/assets/images/process/Delivery-and-Packaging.webp">
          </span>
          <h4 class="process-one__title">
            Delivery and Packaging
          </h4>
        </div>
        </a>
      </div>
    </div>
  </div>
</section>
<!-- ─── Our Aim & Customers ──────────────────────────────────────────────── -->
<section class="single-product-section bg-color">
  <div class="container">
    <div class="single-details__content">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-left">
            <div class="about-one__img-box wow slideInLeft animated" data-wow-delay="100ms">
              <div class="product__img">
                <img src="/assets/images/products/single-product/garlic-oil/garlic-oil-wholesale-suppliers.webp" alt="Garlic Oil Wholesale Supplier">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-right">
            <div class="wow slideInRight animated" data-wow-delay="100ms">
              <h2 class="section-title__title">
                Our Aim
              </h2>
              <p class="mb-3">
                While standing high in the market of oils, Hetaksh a well-reputed brand is visionary in providing turnkey needs of high-end projects in a short time. Our core aim is to become a well-reputed brand with the ability to take on and fulfill end-to-end projects for major pharmaceutical companies. We aim to serve commercial buyers effectively.
              </p>
              <h2 class="section-title__title">
                Our Customers
              </h2>
              <p>
                We aim to supply our product in bulk and with this in mind, we strive to connect with the major players in the pharmaceutical industry. To us, our customers are the managers and the evangelist of our services and we will ensure the high-end services to them in one go. We will make sure to provide quality products to our services. At last, happy customers means happy Hetaksh!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ─── Popup Enquiry Form ───────────────────────────────────────────────── -->
  `,
  },
  "olive-oil": {
    slug: "olive-oil",
    title: "Bulk Olive Oil Wholesale Supplier and Manufacturer USA",
    seoTitle: "Bulk Olive Oil Wholesale Supplier and Manufacturer USA",
    seoDescription: "Order bulk olive oil from a leading USA manufacturer. Affordable prices, premium quality, and reliable wholesale supply for businesses.",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    html: `
<section class="single-page-header">
  <div id="sing-bg-img"class="page-header-bg"></div>
  <div class="container">
    <div class="single-header__inner">
      <div class="row align-items-center">
        <div class="col-xl-7 col-lg-7 col-md-6 ">
          <div class="about-one__left wow slideInLeft animated" data-wow-delay=" 100ms">
            <h1 class="section-title__title">
              Olive Oil Bulk Supplier
            </h1>
            <p class="about-one__text">
              As a trusted <span class="cy" >Olive oil bulk supplier,</span> We ensure that the Olive Oil derived from pressing whole olives is of the highest quality. Olives, the olive tree's fruit, are used to make Olive Oil. Although they are typically a Mediterranean crop and are currently consumed all over the world. This oil is employed in cooking, soap production, cosmetics, medicine, and as a fuel for conventional lamps. It has a distinctive smell and is a clear, yellow or greenish-yellow, transparent liquid. They are consumed whole or diced in cuisines like pizza and other dishes. It is used in cooking, as a salad dressing, as a dip for bread, and for pasta. Some people consume it by the tablespoon for medicinal purposes. In the event of skin contact (irritant), eye contact (irritant), ingestion, or inhalation, it poses a minimal risk. It is practically insoluble in alcohol and water and miscible with light petroleum.
            </p>
            <h4 class="mb-4">
              Available packaging: 25 kg and 180 kg HDPE and GI drums
            </h4>
          </div>
        </div>
        <div class="col-xl-5 col-lg-5 col-md-6">
          <div class="form-box">
            <h4 class="section-title__title">
              Contact us for Olive Oil Enquiries
            </h4>
            <form id="page_form" class="contact_form send-form" action="" method="POST" data-toggle="validator">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" name="name" id="name" class="form-control" placeholder=" Company Name" required data-error="Please fill out">
                    <label for="name"><i class="fa fa-user"></i></label>
                    <div class="help-block with-errors"></div>
                    <input type="hidden" name="webpage" value="Enquiry from Olive Oil Page">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="email" name="email" class="form-control" id="email" placeholder=" Email" required>
                    <label for "email"><i class="fa fa-envelope"></i></label>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <input type="tel" class="phone form-control" placeholder="Phone Number" name="phone" required data-error="Please fill out">
                    <input type="hidden" name="country_name" id="country_name" value="">
                    <input type="hidden" name="dial_code" id="dial_code" value="">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="form-group col-sm-12">
                  <textarea class="form-control" name="message" placeholder="Message"></textarea>
                </div>
              </div>
              <input type="submit" id="form-submit" name="SubmitForm" value="Submit" class="main-btn-rect lo-btn ">
              <span class="circle"></span>
              <h4 id="thankYouMessage" class="h4 text-center hidden"></h4>
            </form>
            <!-- ... (other scripts and resources) ... -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="pt-3 pb-3 bg-color ">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="heading-box">
          <h4>
            Extra Virgin Olive Oil
          </h4>
        </div>
        <div class="product__btn-box">
          <a href="/assets/images/products/single-product/olive-oil/OLIVE OIL (EXTRAVIRGIN) COA.pdf" target="_blank" class="product__btn thm-btn"><i class="fa fa-download" aria-hidden="true"></i> COA </a><a href="/assets/images/products/single-product/olive-oil/Olive OIL MSDS.pdf" target="_blank" class="product__btn thm-btn thm-btn2"><i class="fa fa-download" aria-hidden="true"></i> MSDS </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="heading-box">
          <h4>
            Refined Olive Oil
          </h4>
        </div>
        <div class="product__btn-box">
          <a href="/assets/images/products/single-product/olive-oil/OLIVE OIL (REFINED) COA.pdf" target="_blank" class="product__btn thm-btn"><i class="fa fa-download" aria-hidden="true"></i> COA </a><a href="/assets/images/products/single-product/olive-oil/Olive OIL MSDS.pdf" target="_blank" class="product__btn thm-btn thm-btn2"><i class="fa fa-download" aria-hidden="true"></i> MSDS </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="heading-box">
          <h4>
            Pomace Olive Oil
          </h4>
        </div>
        <div class="product__btn-box">
          <a href="/assets/images/products/single-product/olive-oil/OLIVE OIL (POMACE) COA.pdf" target="_blank" class="product__btn thm-btn"><i class="fa fa-download" aria-hidden="true"></i> COA </a><a href="/assets/images/products/single-product/olive-oil/Olive OIL MSDS.pdf" target="_blank" class="product__btn thm-btn thm-btn2"><i class="fa fa-download" aria-hidden="true"></i> MSDS </a>
        </div>
      </div>
    </div>
  </div>
</section>
<!--Page Header End-->
<section class="single-product-section bg-color2">
  <div class="container">
    <div class="single-details__content">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-left">
            <div class="about-one__img-box wow slideInLeft animated animated" data-wow-delay="100ms">
              <div class="product__img">
                <img src="/assets/images/products/single-product/olive-oil/olive-oil-suppliers.webp" alt="Olive Oil Supplier">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-right">
            <div class=" wow slideInRight animated" data-wow-delay="100ms">
              <h2 class="section-title__title">
                Composition and Benefits
              </h2>
              <p class="mb-3">
                For Olive Oil, Oleic acid is the most prevalent monounsaturated fatty acid and makes up the majority of the composition. As an <b>Olive oil bulk manufacturer</b>, we understand that Extra Virgin Olive Oil contains Fatty acids like Oleic Acid, Linoleic Acid, Heptadecanoic Acid, Stearic acid, etc. This oil is extracted from the fleshy part of the ripened fruit of the olive tree, Olea europaea and varies in color from clear yellow to greenish-yellow.
              </p>
              <p>
                Pure olive oil is used largely for culinary purposes and in the preservation of foods. It is also used in the textile industry for wool combing, in the manufacture of toilet preparations and cosmetics, in the pharmaceutical industry for medicinal purposes, in the manufacture of high-quality castile soap, and as a lubricant. For those interested in larger quantities i.e. <b>Olive Oil wholesale supplier</b>, the purity and versatility of this oil make it an attractive option. It is rich in polyphenols, vitamin E, and various other antioxidants. These antioxidants protect our body from free radical damage. More olive oil in your diet may help you live longer and in better health by reducing your risk of developing common diseases like type 2 diabetes.
              </p>
              <div class="product__btn-box">
                <a href="/assets/images/products/single-product/olive-oil/OLIVE OIL COA.pdf" class="product__btn thm-btn"><i class="fa fa-download" aria-hidden="true"></i> COA </a><a href="/assets/images/products/single-product/olive-oil/Olive OIL MSDS.pdf" class="product__btn thm-btn thm-btn2"><i class="fa fa-download" aria-hidden="true"></i> MSDS </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="why-choose-one-2 bg-color ">
  <div class="container">
    <div class="row">
      <div class="col-xl-12 text-center">
        <div class="section-title text-left">
          <h3 class="section-title__title">
            Why Hetaksh
          </h3>
        </div>
      </div>
    </div>
    <div class="row align-center justify-content-center">
      <div class="col-md-4">
        <div class="why-choose-one__points-box">
          <ul class="list-unstyled why-choose-one__points">
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Approved-Authentic-Products.webp">
              </div>
              <div class="text">
                <h4>
                  Authentic Products
                </h4>
                <p>
                  Experience authenticity. Our products reflect true craftsmanship and premium quality.
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Worldwide-Export.webp">
              </div>
              <div class="text">
                <h4>
                  Worldwide Export
                </h4>
                <p>
                  Global Presence: Our products reach customers in more than 40 countries worldwide.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="why-choose-one__points-box">
          <ul class="list-unstyled why-choose-one__points">
            <li>
              <div class="icon">
                <img src="/assets/images/icon/10-Years-In-The-Market.webp">
              </div>
              <div class="text">
                <h4>
                  10+ Years In The Market
                </h4>
                <p>
                  Benefit from our extensive 10+ years of experience serving diverse markets.
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Dedicated-Support.webp">
              </div>
              <div class="text">
                <h4>
                  Dedicated Support
                </h4>
                <p>
                  Committed to providing dedicated support and exceptional support services to you.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="why-choose-one__points-box">
          <ul class="list-unstyled why-choose-one__points">
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Rigorous-Testing.webp">
              </div>
              <div class="text">
                <h4>
                  Rigorous Testing
                </h4>
                <p>
                  Through rigorous testing, we ensure the purity and effectiveness of our oils.
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Delivery-Commitment.webp">
              </div>
              <div class="text">
                <h4>
                  Delivery commitment
                </h4>
                <p>
                  Our Delivery commitment ensures customer satisfaction and your orders reach promptly.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="single-product-section bg-color2">
  <div class="container">
    <div class="single-details__content">
      <div class="row">
        <div class="col-xl-7 col-lg-6 col-md-6">
          <div class="product-content-left wow slideInLeft animated animated" data-wow-delay="100ms">
            <h2 class="section-title__title">
              Types Of Olive Oils
            </h2>
            <p class="about-one__text">
              Virgin, Refined, Pure bulk, Extra-virgin & Olive Macerated Oil are the five categories into which olive oil is divided. Within these categories, the term Olive oil bulk supplier is relevant for those seeking larger quantities. Extra-virgin is without a doubt the best <b>Olive oil wholesale supplier</b>. You can also consume or drink Extra virgin one on its own due to the many health advantages of Olive Oil Wholesale. Virgin Olive Oil has a milder flavor. This is suitable for cooking on low heat. Refined Olive Oil is only acceptable for cooking, especially at high temperatures, because it is of low quality. It still contains the same number of calories and fat as other types. Extra virgin or Virgin and refined are all components of pure Olive Oil. The lowest quality is Olive Pomace Oil. It is extracted from the residue that remains after the fruit is pressed.
            </p>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 col-md-6">
          <div class="product-content-right">
            <div class="about-one__img-box wow slideInRight animated animated" data-wow-delay="100ms">
              <div class="product__img">
                <img src="/assets/images/products/single-product/olive-oil/olive-oil-wholesale.webp" alt="Olive Oil Wholesale">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="single-product-section bg-color">
  <div class="container">
    <div class="product-details__content rev">
      <div class="row">
        <div class="col-xl-5 col-lg-6 col-md-6">
          <div class="product-content-left">
            <div class="about-one__img-box wow slideInLeft animated" data-wow-delay="120ms">
              <div class="product__img">
                <img src="/assets/images/products/single-product/olive-oil/Olive-oil-bulk.webp" alt="Olive Oil Bulk">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6 col-md-6">
          <div class="product-content-left product-left wow slideInRight animated" data-wow-delay="120ms">
            <h2 class="section-title__title">
              Documents Available
            </h2>
            <div class="row mt-3">
              <div class="col-xl-6 col-lg-6 col-md-6 ">
                <ul class="project-details__points-list doc list-unstyled">
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> GMP Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> ISO 9001:2015 Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Method of Analysis Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Technical Data Sheet/Specification
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Process Flow Chart
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> TSE/BSE Free certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Residual Solvent
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> OVI Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Non-GMO Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Nitrosamine-Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Elemental Impurities Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Stability Studies / Shelf-Life Studies — Accelerated and Long-Term
                  </li>
                </ul>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 ">
                <ul class="project-details__points-list doc list-unstyled">
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> MSDS
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Aflatoxin-Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Gluten Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Vegan Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Melamine Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Food Grade Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Pesticide Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Technical Package equivalent to DMF
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Pyrrolizidine Alkaloids Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Dioxin Free Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Genotoxic free declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Halal Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Latex Declaration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="single-product-section-dark">
  <div class="servie-bg-box">
    <div class="single_service__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style="background-image: url(/assets/images/products/single-product/olive-oil/olive-oil-manufacturers.webp);"></div>
  </div>
  <div class="container">
    <div class="section-title ">
      <h2 class="section-title__title">
        Bulk Manufacturers of Pure Olive Oil Wholesale Supplier
      </h2>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p>
          We are pleased to introduce Hetaksh Essential Oils as “Olive Oil Bulk Supplier“, Indian leading cultivators, manufacturers, producers, wholesale supplier and exporters of <span class="cy">Essential Oils, Carrier Oils, Spice Oils, Floral Oils and Hydrosol etc.</span>
        </p>
        <p>
          We are Olive Oil bulk suppliers, we provide Olive Oil in documented product grades. We are a leading Olive Oil bulk supplier and we also supply more than 200 products Currently we are exporting to more than 40 countries worldwide. We are one of the largest cultivators and exporters with ISO 9001:2015 & GMP accreditation. We are a government-recognized Export House and exporting our Products to almost 40+ countries worldwide.
        </p>
        <p>
          We are supplying our Products to top ranked Nutraceutical Companies, Pharmaceuticals Companies, Flavor & Fragrance houses, Oral & Personal Care Companies, Tobacco Manufacturers, Ayurvedic Companies and FMCG manufacturers in India and round the Globe.
        </p>
        <p>
          With strict procurement of 100% Puer & Natural and Genuine raw material directly from the farmers and stringent manufacturing & quality control methods we can supply products in grades complying with applicable IP, BP, EP, USP, and JP specifications. We can also customize our Products as per quality requirements and specifications of the customers.
        </p>
        <p>
          You may visit our website <a href="/"> Hetaksh Essential Oils</a> for our Company’s Profile and Product details.
        </p>
      </div>
    </div>
    <div class="row">
      <h2>
        <span class="cy">Our USP</span>
      </h2>
      <div class="col-xl-5">
        <ul class="project-details__points-list list-unstyled">
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Our Olive Oil is extracted from Non-GMO Seeds.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Our Olive Oil is Pyrrolizidine Alkaloids free.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Olive Oil process by us does not contain any aflatoxins.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Melamine is absent in ourOlive Oil.
          </li>
        </ul>
      </div>
      <div class="col-xl-7">
        <ul class="project-details__points-list list-unstyled">
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Our Olive Oil is manufactured in Halal and Kosher Facility.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> We do not use any residual solvent in the manufacturing process of Olive Oil.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Olive Oil offered by us is free from any potential Allergen, Dioxin and Genotoxic Impurities.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Our Olive Oil is pesticides free.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<!--Team One End-->
<section class="process-one-2 bg-color2">
  <!-- <div class="process-one__bg" style="background-image: url(/assets/images/backgrounds/process-one-bg.jpg);"></div> -->
  <div class="container">
    <div class="section-title text-center">
      <h2 class="section-title__title">
        Our Working Process
      </h2>
    </div>
    <div class="row">
      <!--Process One Single Start-->
      <div class="col-xl-3 col-lg-3 col-md-6  col-sm-6 mb-3 wow fadeInUp  animated mt-3" data-wow-delay="100ms">
        <a href="https://hetakshessentialoils.com/working-process.php">
        <div class="process-one__single p-bg-1">
          <span>
          <img src="/assets/images/process/Raw Materials.webp">
          </span>
          <!-- <div class="process-one__count"></div> -->
          <h4 class="process-one__title">
            Raw Materials
          </h4>
        </div>
        </a>
      </div>
      <!--Process One Single End-->
      <!--Process One Single Start-->
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 wow fadeInUp animated mt-3"  data-wow-delay="200ms">
        <a href="https://hetakshessentialoils.com/working-process.php">
        <div class="process-one__single p-bg-1">
          <span>
          <img src="/assets/images/process/Production.webp">
          </span>
          <h4 class="process-one__title">
            Production
          </h4>
        </div>
        </a>
      </div>
      <!--Process One Single End-->
      <!--Process One Single Start-->
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 wow fadeInUp animated mt-3" data-wow-delay="300ms">
        <a href="https://hetakshessentialoils.com/working-process.php">
        <div class="process-one__single p-bg-1">
          <span>
          <img src="/assets/images/process/Quality-and-Analysis.webp">
          </span>
          <!-- <div class="process-one__count"></div> -->
          <h4 class="process-one__title">
            Quality and Analysis
          </h4>
        </div>
        </a>
      </div>
      <!--Process One Single End-->
      <!--Process One Single Start-->
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 wow fadeInUp animated mt-3" data-wow-delay="400ms">
        <a href="https://hetakshessentialoils.com/working-process.php">
        <div class="process-one__single ">
          <span>
          <img src="/assets/images/process/Delivery-and-Packaging.webp">
          </span>
          <!-- <div class="process-one__count"></div> -->
          <h4 class="process-one__title">
            Delivery and Packaging
          </h4>
        </div>
        </a>
      </div>
      <!--Process One Single End-->
    </div>
  </div>
</section>
<section class="single-product-section bg-color">
  <div class="container">
    <div class="single-details__content">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-left">
            <div class="about-one__img-box wow slideInLeft animated animated" data-wow-delay="100ms">
              <div class="product__img">
                <img src="/assets/images/products/single-product/olive-oil/olive-oil-bulk-suppliers.webp" alt="Olive Oil Bulk Supplier">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-right">
            <div class=" wow slideInRight animated" data-wow-delay="100ms">
              <h2 class="section-title__title">
                Our Aim
              </h2>
              <p class="mb-3">
                While standing high in the market of oils, Hetaksh a well-reputed brand is visionary in providing turnkey needs of high-end projects in a short time. Our core aim is to become a well-reputed brand with the ability to take on and fulfill end-to-end projects for major pharmaceutical companies. With our services, we want to serve the market effectively.
              </p>
              <h2 class="section-title__title">
                Our Customers
              </h2>
              <p>
                We aim to supply our product in bulk and with this in mind, we strive to connect with the major players in the pharmaceutical industry. To us, our customers are the managers and the evangelist of our services and we will ensure the high-end services to them in one go. We will make sure to provide quality products to our services. At last, happy customers means happy Hetaksh!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  },
  "arachis-oil": {
    slug: "arachis-oil",
    title: "Arachis Oil Bulk Manufacturers & Wholesale Suppliers in US",
    seoTitle: "Arachis Oil Bulk Manufacturers & Wholesale Suppliers in US",
    seoDescription: "Manufacturers of 100% pure and natural Arachis carrier oil – Hetaksh Essential Oils is a trusted wholesale supplier and bulk distributor in US.",
    category: "carrier-oils",
    categoryName: "Carrier Oils",
    html: `
<section class="single-page-header dark">
  <div id="sing-bg-img-2" class="page-header-bg" style="background-image: url(/assets/images/products/single-product/arachis-oil/Arachis-Oil-bulk-suppliers.webp);">
    <div style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5); /* Adjust opacity as needed */
    z-index: 1;
  "></div>
  </div>
  <div class="container">
    <div class="single-header__inner">
      <div class="row align-items-center">
        <div class="col-xl-7 col-lg-7 col-md-6 ">
          <div class="about-one__left wow slideInLeft animated" data-wow-delay=" 100ms">
            <h1 class="section-title__title">
              Arachis Oil Bulk Supplier
            </h1>
            <p class="about-one__text">
              Arachis oil, also known as peanut oil, is extracted from peanuts (Arachis hypogaea) through cold pressed method. Our Arachis oil bulk is a healthy cooking oil rich in monounsaturated fats, vitamin E, and antioxidants, offering benefits like supporting heart health, improving skin, and potentially aiding in managing blood sugar levels. This Oil is clear, pale-yellow liquid and have a huge requirement for pharmaceutical industries, skin care, hair care, and cooking applications.
            </p>
            <p class="about-one__text">
              As one of the leading <b>Arachis Oil wholesale</b> distributor from United States, our team ensures that our product is free from pesticides and client safety remains our priority. Arachis oil contains essential nutrients like vitamin E, omega-6 fatty acids, and antioxidants which makes it usable for making injections. Arachis oil's antioxidants and fatty acids may help nourish and protect the skin and also Hair.
            </p>
            <h4 class="mb-5">
              Bulk Packaging is of 25 Kgs/180 Kgs HDPE & Gi Drums
            </h4>
          </div>
        </div>
        <div class="col-xl-5 col-lg-5 col-md-6">
          <div class="form-box">
            <h4 class="section-title__title">
              Contact us for Wholesale Arachis Oil Enquiries
            </h4>
            <form id="page_form" class="contact_form send-form" action="" method="POST" data-toggle="validator">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" name="name" id="name" class="form-control" placeholder=" Company Name" required data-error="Please fill out">
                    <label for="name"><i class="fa fa-user"></i></label>
                    <div class="help-block with-errors"></div>
                    <input type="hidden" name="webpage" value="Enquiry from Arachis Oil">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="email" name="email" class="form-control" id="email" placeholder=" Email" required>
                    <label for ="email"><i class="fa fa-envelope"></i></label>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <input type="tel" class="phone form-control" placeholder="Phone Number" name="phone" required data-error="Please fill out">
                    <input type="hidden" name="country_name" id="country_name" value="">
                    <input type="hidden" name="dial_code" id="dial_code" value="">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="form-group col-sm-12">
                  <textarea class="form-control" name="message" placeholder="Message"></textarea>
                </div>
              </div>
              <input type="submit" id="form-submit" name="SubmitForm" value="Submit" class="main-btn-rect lo-btn ">
              <span class="circle"></span>
              <h4 id="thankYouMessage" class="h4 text-center hidden"></h4>
            </form>
            <!-- ... (other scripts and resources) ... -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--Page Header End-->
<section class="pt-3 pb-3 bg-color ">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-3">
        <div class="heading-box">
          <h4>
            Arachis Oil COA
          </h4>
        </div>
        <div class="product__btn-box">
          <a href="/assets/images/products/single-product/arachis-oil/ARACHIS-OIL-BP.pdf" target="_blank"class="product__btn thm-btn"><i class="fa fa-download" aria-hidden="true"></i> COA </a>
        </div>
      </div>
      <div class="col-md-3">
        <div class="heading-box">
          <h4>
            Arachis Oil MSDS
          </h4>
        </div>
        <div class="product__btn-box">
          <a href="/assets/images/products/single-product/arachis-oil/ARACHIS-OIL-MSDS.pdf" target="_blank" class="product__btn thm-btn thm-btn2"><i class="fa fa-download" aria-hidden="true"></i> MSDS </a>
        </div>
      </div>
      <div class="col-md-3">
        <div class="heading-box">
          <h4>
            Arachis Oil USP
          </h4>
        </div>
        <div class="product__btn-box">
          <a href="/assets/images/products/single-product/arachis-oil/ARACHIS-OIL-USP.pdf" target="_blank"class="product__btn thm-btn"><i class="fa fa-download" aria-hidden="true"></i> USP </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="single-product-section bg-color2">
  <div class="container">
    <div class="single-details__content">
      <div class="row d-flex align-items-center">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-left">
            <div class="about-one__img-box wow slideInLeft animated animated" data-wow-delay="100ms">
              <div class="product__img">
                <img src="/assets/images/products/single-product/arachis-oil/Arachis-oil-bulk.webp" alt="Arachis Oil Bulk">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-right">
            <div class=" wow slideInRight animated" data-wow-delay="100ms">
              <h2 class="section-title__title">
                Arachis Oil Bulk manufacturer from United States
              </h2>
              <p>
                <strong>Process of Extraction</strong>
              </p>
              <p class="mb-3">
                Arachis oil, also known as Peanut oil, is extracted from peanuts (Arachis Hypogaea) through Cold Pressed method. Arachis oil wholesale as supplied by our company is a pharma grade oil and 100% Natural and Pure. Our oil is available in grades complying with applicable BP and USP specifications. Peanut oil is a clear, viscous, and yellowish in color and has a very low solubility in ethanol but miscible with light petroleum. The extracted oil is treated with acid to remove impurities.
              </p>
              <p>
                <strong>Main Fatty acids</strong>
              </p>
              <p class="mb-3">
                Oleic acid, linoleic acid, stearic acid, behenic acid, lignoceric acid and Eicosenoic acid.
              </p>
              <p class="mb-3">
                Arachis Oil is mostly added to skin care products and cosmetic products like Creams, Lotions, Hair Care products, Body Care Products, Lip balms etc. <b>Arachis oil suppliers</b>, extracted from peanuts, is known for its rich, nutty flavor and is a popular choice for frying thanks to its high smoke point. It contains vitamin E and monounsaturated and polyunsaturated fatty acids. Its composition and suitability for each application should be assessed against the relevant product specification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="why-choose-one-2 bg-color ">
  <div class="container">
    <div class="row">
      <div class="col-xl-12 text-center">
        <div class="section-title text-left">
          <h3 class="section-title__title">
            Why Hetaksh
          </h3>
        </div>
      </div>
    </div>
    <div class="row align-center justify-content-center">
      <div class="col-md-4">
        <div class="why-choose-one__points-box">
          <ul class="list-unstyled why-choose-one__points">
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Approved-Authentic-Products.webp">
              </div>
              <div class="text">
                <h4>
                  Authentic Products
                </h4>
                <p>
                  Experience authenticity. Our products reflect true craftsmanship and premium quality.
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Worldwide-Export.webp">
              </div>
              <div class="text">
                <h4>
                  Worldwide Export
                </h4>
                <p>
                  Global Presence: Our products reach customers in more than 40 countries worldwide.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="why-choose-one__points-box">
          <ul class="list-unstyled why-choose-one__points">
            <li>
              <div class="icon">
                <img src="/assets/images/icon/10-Years-In-The-Market.webp">
              </div>
              <div class="text">
                <h4>
                  10+ Years In The Market
                </h4>
                <p>
                  Benefit from our extensive 10+ years of experience serving diverse markets.
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Dedicated-Support.webp">
              </div>
              <div class="text">
                <h4>
                  Dedicated Support
                </h4>
                <p>
                  Committed to providing dedicated support and exceptional support services to you.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="why-choose-one__points-box">
          <ul class="list-unstyled why-choose-one__points">
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Rigorous-Testing.webp">
              </div>
              <div class="text">
                <h4>
                  Rigorous Testing
                </h4>
                <p>
                  Through rigorous testing, we ensure the purity and effectiveness of our oils.
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/assets/images/icon/Delivery-Commitment.webp">
              </div>
              <div class="text">
                <h4>
                  Delivery commitment
                </h4>
                <p>
                  Our Delivery commitment ensures customer satisfaction and your orders reach promptly.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="single-product-section bg-color2">
  <div class="container">
    <div class="product-details__content rev">
      <div class="row d-flex align-items-center">
        <div class="col-xl-5 col-lg-6 col-md-6">
          <div class="product-content-left">
            <div class="about-one__img-box wow slideInLeft animated" data-wow-delay="120ms">
              <div class="product__img">
                <img src="/assets/images/products/single-product/arachis-oil/Arachis-oil-wholesale.webp" alt="Arachis Oil Wholesale">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6 col-md-6">
          <div class="product-content-left product-left wow slideInRight animated" data-wow-delay="120ms">
            <h2 class="section-title__title">
              Documents Available
            </h2>
            <div class="row mt-3">
              <div class="col-xl-6 col-lg-6 col-md-6 ">
                <ul class="project-details__points-list doc list-unstyled">
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> GMP Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> ISO 9001:2015 Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Method of Analysis Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Technical Data Sheet/Specification
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Process Flow Chart
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> TSE/BSE Free certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Residual Solvent
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> OVI Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Non-GMO Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Nitrosamine-Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Elemental Impurities Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Stability Studies / Shelf-Life Studies — Accelerated and Long-Term
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> HACCP Certificate
                  </li>
                </ul>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 ">
                <ul class="project-details__points-list doc list-unstyled">
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> MSDS
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Aflatoxin-Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Gluten Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Vegan Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Melamine Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Food Grade Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Pesticide Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Technical Package equivalent to DMF
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Pyrrolizidine Alkaloids Free Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Dioxin Free Certificate
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Genotoxic free declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Halal Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Latex Declaration
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> KOSHER Certificate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="downloadbro">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-11 text-center">
        <div class="section-title ">
          <h2 class="section-title__title">
            Take a journey through our brochure to learn about our unique Essential Oils & Carrier Oils collection!
          </h2>
        </div>
        <div class="downloadbro__btn-box">
          <a href="/download-brochure" class="downloadbro__btn thm-btn">Download Brochure </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="brand-two bg-color">
  <div class="container">
    <div class="section-title text-center mb-4">
      <h3 class="section-title__title">
        Our Certifications
      </h3>
    </div>
    <div class="owl-carousel owl-theme" id="cert-carousel">
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/HACCP.webp" alt="HACCP">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/Kosher-Certification-India.webp" alt="Kosher">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/8.webp" alt="FDA">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/6.webp" alt="FSSAI">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/GMP.webp" alt="GMP">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/5.webp" alt="Halal">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/ISO.webp" alt="ISO">
        </div>
      </div>
      <div class="item">
        <div class="logo-box">
          <img src="/assets/images/certificate/7.webp" alt="Spices Board">
        </div>
      </div>
    </div>
  </div>
</section>
<section class="single-product-section-dark">
  <div class="servie-bg-box">
    <div class="single_service__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style="background-image: url(/assets/images/products/single-product/arachis-oil/Arachis-Oil-bulk-suppliers.webp);"></div>
  </div>
  <div class="container">
    <div class="section-title ">
      <h2 class="section-title__title">
        Bulk Suppliers and manufacturers of Premium Quality Arachis Oil
      </h2>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p>
          We are Arachis Oil trusted manufacturers from India and offer Arachis Oil which is 100% Natural & pure carrier oil and supplied to various Pharmaceutical & Cosmetic Industries. We are a leading bulk exporter of Arachis (Peanut) Oil, proudly offering a diverse portfolio of over 200 high-quality products—exclusively available at Hetaksh Essential Oils. With a strong global presence, we currently export to 40+ countries, serving a growing network of over 500 satisfied clients worldwide. As one of the largest cultivators and exporters in the industry, we hold prestigious ISO 9001:2015 and GMP certifications. Recognized as an official Export House by the Government of India, we are committed to delivering excellence across international markets.
        </p>
        <p>
          At Hetaksh Essential Oils, we serve leading nutraceutical, pharmaceutical, personal care, fragrance, tobacco, ayurvedic, and FMCG brands in India and globally. We source 100% natural raw materials directly from farmers and follow rigorous quality standards to ensure our products meet IP, BP, EP, USP, and JP specifications. Customization is available to meet your specific quality needs. Visit our website to explore our product range and company profile.
        </p>
      </div>
    </div>
    <div class="row">
      <h2>
        <span class="cy">Our USP</span>
      </h2>
      <div class="col-xl-5">
        <ul class="project-details__points-list list-unstyled">
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Our Arachis/Peanut Oil is extracted from Non-GMO Seeds.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Our Arachis Oil complies to British Pharmacopeia & USP standards
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Our Arachis Oil is Pyrrolizidine Alkaloids free.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Arachis Oil process by us does not contain any aflatoxins.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Melamine is absent in our Arachis Oil.
          </li>
        </ul>
      </div>
      <div class="col-xl-7">
        <ul class="project-details__points-list list-unstyled">
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Our Arachis Oil is manufactured in Halal and Kosher Facility.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> We do not use any residual solvent in the manufacturing process of Arachis Oil.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Arachis Oil offered by us is free from any potential Allergen, Dioxin and Genotoxic Impurities.
          </li>
          <li>
            <i class="fa fa-check" aria-hidden="true"></i> Our Arachis Oil is pesticides free.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<!--Team One End-->
<section class="process-one-2 bg-color2">
  <!-- <div class="process-one__bg" style="background-image: url(/assets/images/backgrounds/process-one-bg.jpg);"></div> -->
  <div class="container">
    <div class="section-title text-center">
      <h2 class="section-title__title">
        Our Working Process
      </h2>
    </div>
    <div class="row">
      <!--Process One Single Start-->
      <div class="col-xl-3 col-lg-3 col-md-6  col-sm-6 mb-3 wow fadeInUp  animated mt-3" data-wow-delay="100ms">
        <a href="/working-process">
        <div class="process-one__single p-bg-1">
          <span>
          <img src="/assets/images/process/Raw Materials.webp">
          </span>
          <!-- <div class="process-one__count"></div> -->
          <h4 class="process-one__title">
            Raw Materials
          </h4>
        </div>
        </a>
      </div>
      <!--Process One Single End-->
      <!--Process One Single Start-->
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 wow fadeInUp animated mt-3"  data-wow-delay="200ms">
        <a href="/working-process">
        <div class="process-one__single p-bg-1">
          <span>
          <img src="/assets/images/process/Production.webp">
          </span>
          <h4 class="process-one__title">
            Production
          </h4>
        </div>
        </a>
      </div>
      <!--Process One Single End-->
      <!--Process One Single Start-->
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 wow fadeInUp animated mt-3" data-wow-delay="300ms">
        <a href="/working-process">
        <div class="process-one__single p-bg-1">
          <span>
          <img src="/assets/images/process/Quality-and-Analysis.webp">
          </span>
          <!-- <div class="process-one__count"></div> -->
          <h4 class="process-one__title">
            Quality and Analysis
          </h4>
        </div>
        </a>
      </div>
      <!--Process One Single End-->
      <!--Process One Single Start-->
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 wow fadeInUp animated mt-3" data-wow-delay="400ms">
        <a href="/working-process">
        <div class="process-one__single ">
          <span>
          <img src="/assets/images/process/Delivery-and-Packaging.webp">
          </span>
          <!-- <div class="process-one__count"></div> -->
          <h4 class="process-one__title">
            Delivery and Packaging
          </h4>
        </div>
        </a>
      </div>
      <!--Process One Single End-->
    </div>
  </div>
</section>
<section class="single-product-section bg-color">
  <div class="container">
    <div class="single-details__content">
      <div class="row d-flex align-items-center">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-left">
            <div class="about-one__img-box wow slideInLeft animated animated" data-wow-delay="100ms">
              <div class="product__img">
                <img src="/assets/images/products/single-product/arachis-oil/Arachis-oil-supplier.webp" alt="Arachis Oil Suppliers">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product-content-right">
            <div class=" wow slideInRight animated" data-wow-delay="100ms">
              <h2 class="section-title__title">
                Our Aim
              </h2>
              <p class="mb-3">
                While standing high in the market of oils, Hetaksh a well-reputed brand is visionary in providing turnkey needs of high-end projects in a short time. Our core aim is to become a well-reputed brand with the ability to take on and fulfill end-to-end projects for major pharmaceutical companies. With our services, we want to serve the market effectively.
              </p>
              <h2 class="section-title__title">
                Our Customers
              </h2>
              <p>
                We aim to supply our product in bulk and with this in mind, we strive to connect with the major players in the pharmaceutical industry. To us, our customers are the managers and the evangelist of our services and we will ensure the high-end services to them in one go. We will make sure to provide quality products to our services. At last, happy customers means happy Hetaksh!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  },
};
