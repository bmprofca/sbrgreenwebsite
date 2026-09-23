import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { useSite } from "../SiteContext";

export default function Services() {
  const { services, processSteps } = useSite();

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive construction capabilities — from first excavation to final handover."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Capabilities</p>
            <h2>What we deliver</h2>
            <p>
              Whether you need a new build, a retrofit, or full project
              management, our teams bring structure and clarity to every phase.
            </p>
          </div>
          <div className="service-detail">
            {services.map((service, index) => (
              <article className="service-detail-card" key={service.id || service.slug} id={service.slug}>
                <div className="num">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How we work</p>
            <h2>Delivery process</h2>
          </div>
          <div className="process-steps">
            {processSteps.map((item) => (
              <article className="process-step" key={item.id || item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
