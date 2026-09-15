import { WHY_HETAKSH_GROUPS } from "@/lib/legacy-assets";

export function WhyHetakshSection({ headingTag: Tag = "h3" }: { headingTag?: "h2" | "h3" | "h4" | "h5" }) {
  return (
    <section className="why-choose-one-2 bg-color">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <div className="section-title text-center">
              <Tag className="section-title__title">Why Hetaksh</Tag>
            </div>
          </div>
        </div>
        <div className="row align-center justify-content-center">
          {WHY_HETAKSH_GROUPS.map((group) => (
            <div key={group[0].title} className="col-md-4">
              <div className="why-choose-one__points-box">
                <ul className="list-unstyled why-choose-one__points">
                  {group.map((item) => (
                    <li key={item.title}>
                      <div className="icon">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="text">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
