import { Link } from "react-router-dom";
import CtaBand from "../components/CtaBand";
import { useSite } from "../SiteContext";

export default function Home() {
  const {
    company,
    milestones,
    projects,
    services,
    testimonials,
    values,
    loading,
  } = useSite();
  const featured = projects.slice(0, 3);
  const heroStyle = company.heroImage
    ? {
        background: `linear-gradient(105deg, rgba(6, 38, 28, 0.88) 0%, rgba(6, 38, 28, 0.55) 45%, rgba(6, 38, 28, 0.35) 100%), url("${company.heroImage}") center/cover no-repeat`,
      }
    : undefined;

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-media" style={heroStyle} aria-hidden="true" />
        <div className="home-hero-content">
          <h1 className="home-hero-brand">
            {company.shortName || "SBRGREEN"}
            <span>Construction Private Limited</span>
          </h1>
          <p className="home-hero-copy">{company.tagline}</p>
          <div className="home-hero-actions">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-secondary">Get a Quote</Link>
          </div>
        </div>
      </section>

      {loading ? <div className="container" style={{ padding: "1rem 0" }}>Loading latest content…</div> : null}

      <section className="section">
        <div className="container home-intro">
          <div>
            <p className="eyebrow">Who we are</p>
            <div className="section-head" style={{ marginBottom: "1.25rem" }}>
              <h2>Trusted builders for lasting places</h2>
              <p>
                We plan, construct, and deliver projects across residential,
                commercial, and infrastructure sectors — with disciplined
                execution and a greener approach to building.
              </p>
            </div>
            <div className="feature-list">
              {values.slice(0, 3).map((item) => (
                <div className="feature-item" key={item.id || item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1.75rem" }}>
              <Link to="/about" className="btn btn-outline">About the Company</Link>
            </div>
          </div>
          <div className="home-intro-visual">
            <img
              src={company.aboutImage || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80"}
              alt={`${company.shortName} construction team on site`}
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>Construction services</h2>
            <p>
              End-to-end capabilities for new builds, upgrades, and managed
              delivery — tailored to your site and goals.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-tile" key={service.id || service.slug || service.title}>
                <div className="index">0{index + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link to="/services" className="btn btn-outline">Explore All Services</Link>
          </div>
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
            <p className="eyebrow">Selected work</p>
            <h2>Recent projects</h2>
            <p>
              A snapshot of builds that reflect our standards for quality,
              schedule, and site performance.
            </p>
          </div>
          <div className="projects-grid">
            {featured.map((project) => (
              <article className="project-card" key={project.id}>
                <img src={project.image} alt={project.title} />
                <div className="project-card-body">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                    <span className={`status-pill ${String(project.status || "").toLowerCase().replace(/\s/g, "")}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link to="/projects" className="btn btn-outline">See Full Portfolio</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Client voices</p>
            <h2>What partners say</h2>
          </div>
          <div className="testimonials">
            {testimonials.map((item) => (
              <article className="testimonial" key={item.id || item.name}>
                <blockquote>“{item.quote}”</blockquote>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
