import { useState } from "react";
import { useLocation } from "react-router-dom";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { submitContact } from "../api";
import { useSite } from "../SiteContext";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  pageSeo,
} from "../seo/seoConfig";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "General Inquiry",
  message: "",
};

export default function Contact() {
  const { company } = useSite();
  const location = useLocation();
  const prefill =
    typeof location.state?.subject === "string" ? location.state.subject : "";
  const seo = pageSeo.contact;

  const [form, setForm] = useState({
    ...initialForm,
    message: prefill ? `${prefill}\n\n` : "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await submitContact(form);
      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      setError(err.message || "Unable to send message");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
        jsonLd={[
          buildLocalBusinessSchema(company),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact SBRGREEN Construction",
            url: "https://sbrgreen.com/contact",
          },
        ]}
      />
      <PageHero
        title="Contact Us"
        subtitle="Share your project details — we will get back with clear next steps."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-info">
            <h2>Let&apos;s talk</h2>
            <p>
              Reach the {company.shortName || "SBRGREEN"} team for quotes, site visits,
              partnerships, or career inquiries.
            </p>
            <ul className="contact-list">
              <li>
                <strong>Address</strong>
                <span>{company.address}</span>
              </li>
              <li>
                <strong>Phone</strong>
                <a href={`tel:${String(company.phone || "").replace(/\s/g, "")}`}>
                  {company.phone}
                </a>
              </li>
              <li>
                <strong>Email</strong>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <strong>Hours</strong>
                <span>{company.hours}</span>
              </li>
            </ul>
          </aside>

          <form className="contact-form" onSubmit={onSubmit}>
            {submitted ? (
              <div className="form-success" role="status">
                Thank you. Your message has been saved. Our team will contact you shortly.
              </div>
            ) : null}
            {error ? (
              <div className="form-success" style={{ background: "#fef3f2", color: "#b42318" }} role="alert">
                {error}
              </div>
            ) : null}

            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" value={form.name} onChange={onChange} required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="service">Interest</label>
                <select id="service" name="service" value={form.service} onChange={onChange}>
                  <option>General Inquiry</option>
                  <option>Structural Building Works</option>
                  <option>Foundation Work</option>
                  <option>Site Development</option>
                  <option>Piling Work</option>
                  <option>Industrial Projects</option>
                  <option>Bridge Structural Works</option>
                  <option>Road Design & Construction</option>
                  <option>Fabrication Works</option>
                  <option>Interior Works</option>
                  <option>Fencing & Boundary Works</option>
                  <option>Boundary Wall Construction</option>
                  <option>RCC Boundary Work</option>
                  <option>RCC Drain Work</option>
                  <option>Commercial Building Projects</option>
                  <option>General Construction Services</option>
                  <option>Careers</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                required
                placeholder="Project type, location, timeline, and any other details..."
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={busy}>
              {busy ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
