import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { useSite } from "../SiteContext";

export default function About() {
  const { company, milestones, values, timeline } = useSite();

  return (
    <>
      <PageHero
        title={`About ${company.shortName || "SBRGREEN"}`}
        subtitle="A construction company built on discipline, craftsmanship, and greener ways of working."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container about-story">
          <div>
            <p className="eyebrow">Our story</p>
            <div className="section-head" style={{ marginBottom: "1.25rem" }}>
              <h2>Building places that endure</h2>
            </div>
            <p>{company.aboutStory1}</p>
            <p>{company.aboutStory2}</p>
          </div>
          <img
            src={company.aboutImage || "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"}
            alt="Construction professionals reviewing plans"
          />
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {milestones.map((item) => (
            <div key={item.id || item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What guides us</p>
            <h2>Core values</h2>
            <p>Principles that shape how we hire, plan, build, and hand over every project.</p>
          </div>
          <div className="values-grid">
            {values.map((item) => (
              <article className="value-tile" key={item.id || item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Journey</p>
            <h2>Company milestones</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.id || item.year}>
                <strong>{item.year}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Legal</p>
            <h2>Official documents</h2>
            <p>
              View and download statutory company documents for{" "}
              {company.name || "SBRGREEN Construction Private Limited"}.
            </p>
          </div>
          <div className="document-list">
            <article className="document-card">
              <div className="document-icon" aria-hidden="true">
                PDF
              </div>
              <div className="document-body">
                <h3>Certificate of Incorporation</h3>
                <p>
                  Official certificate confirming the incorporation of SBRGREEN
                  Construction Private Limited.
                </p>
              </div>
              <div className="document-actions">
                <a
                  className="btn btn-outline"
                  href={`${process.env.PUBLIC_URL}/certificate-of-incorporation.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <a
                  className="btn btn-primary"
                  style={{ width: "auto" }}
                  href={`${process.env.PUBLIC_URL}/certificate-of-incorporation.pdf`}
                  download="SBRGREEN-Certificate-of-Incorporation.pdf"
                >
                  Download
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
