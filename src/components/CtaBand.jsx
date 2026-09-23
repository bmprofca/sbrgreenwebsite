import { Link } from "react-router-dom";
import { useSite } from "../SiteContext";

export default function CtaBand() {
  const { company } = useSite();
  const background = company.ctaImage
    ? `linear-gradient(110deg, rgba(6, 38, 28, 0.94), rgba(20, 82, 57, 0.85)), url("${company.ctaImage}") center/cover no-repeat`
    : undefined;

  return (
    <section className="cta-band" style={background ? { background } : undefined}>
      <div className="container cta-band-inner">
        <div>
          <h2>Ready to build with {company.shortName || "SBRGREEN"}?</h2>
          <p>
            Tell us about your project. We will respond with a clear plan,
            timeline, and next steps.
          </p>
        </div>
        <Link to="/contact" className="btn btn-brass">
          Request a Consultation
        </Link>
      </div>
    </section>
  );
}
