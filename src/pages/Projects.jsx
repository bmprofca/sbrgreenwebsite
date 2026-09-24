import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";
import { useSite } from "../SiteContext";
import { buildBreadcrumbSchema, pageSeo } from "../seo/seoConfig";

export default function Projects() {
  const { projects } = useSite();
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    [projects]
  );
  const [filter, setFilter] = useState("All");
  const seo = pageSeo.projects;

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
        image={projects[0]?.image || "/logo.png"}
        jsonLd={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "SBRGREEN Construction Projects",
            itemListElement: projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: project.title,
              description: project.description,
              image: project.image,
            })),
          },
        ]}
      />
      <PageHero
        title="Projects"
        subtitle="A portfolio of residential, commercial, industrial, and infrastructure works."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Portfolio</p>
            <h2>Featured builds</h2>
            <p>Filter by category to explore the range of work we deliver across the region.</p>
          </div>

          <div className="filters" role="tablist" aria-label="Project categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-btn ${filter === category ? "active" : ""}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filtered.map((project) => (
              <article className="project-card" key={project.id}>
                <img src={project.image} alt={project.title} />
                <div className="project-card-body">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                    <span>{project.year}</span>
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
        </div>
      </section>

      <CtaBand />
    </>
  );
}
