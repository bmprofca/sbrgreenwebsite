import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useSite } from "../SiteContext";

export default function Careers() {
  const { careers, company } = useSite();

  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join a team that builds carefully, safely, and with pride in the finished work."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Work with us</p>
            <h2>Open roles</h2>
            <p>
              We look for people who value craftsmanship, accountability, and
              collaborative problem-solving on complex sites.
            </p>
          </div>

          <div className="careers-grid">
            {careers.map((role) => (
              <article className="career-card" key={role.id || role.title}>
                <div className="career-meta">
                  <span>{role.type}</span>
                  <span>{role.location}</span>
                </div>
                <h3>{role.title}</h3>
                <p>{role.summary}</p>
                <Link
                  to="/contact"
                  state={{ subject: `Application: ${role.title}` }}
                  className="btn btn-outline"
                >
                  Apply via Contact
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-story">
          <div>
            <p className="eyebrow">Culture</p>
            <div className="section-head" style={{ marginBottom: "1rem" }}>
              <h2>Why {company.shortName || "SBRGREEN"}</h2>
            </div>
            <p>{company.careersIntro}</p>
            <p>
              Prefer to introduce yourself directly? Email{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a> with your
              CV and the role you are interested in.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1000&q=80"
            alt="Hard hat and blueprints on a construction table"
          />
        </div>
      </section>
    </>
  );
}
