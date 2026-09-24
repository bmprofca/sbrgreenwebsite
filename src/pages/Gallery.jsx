import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";
import { useSite } from "../SiteContext";
import { buildBreadcrumbSchema, pageSeo } from "../seo/seoConfig";

export default function Gallery() {
  const { gallery } = useSite();
  const seo = pageSeo.gallery;

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
        image={gallery[0]?.src || "/logo.png"}
        jsonLd={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHero
        title="Gallery"
        subtitle="Moments from our sites — structure, craft, and progress in frame."
        image="https://images.unsplash.com/photo-1590644365607-1c5a08109165?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">On site</p>
            <h2>Visual archive</h2>
            <p>A look at active and completed work — from foundations and frames to finished façades.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure className="gallery-item" key={item.id}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
