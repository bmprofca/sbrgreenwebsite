import { Link } from "react-router-dom";
import { company, navLinks } from "./legacyNav";
import { useSite } from "../SiteContext";

export default function Footer() {
  const { company: liveCompany } = useSite();
  const info = liveCompany || company;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt={`${info.shortName || "SBRGREEN"} Construction logo`}
            />
            <p>
              {info.name} delivers residential, commercial, and infrastructure
              projects with craftsmanship, safety, and a commitment to greener
              building practices.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Structural Building</Link></li>
              <li><Link to="/services">Foundation Work</Link></li>
              <li><Link to="/services">Industrial Projects</Link></li>
              <li><Link to="/services">Commercial Buildings</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>{info.address}</li>
              <li>
                <a href={`tel:${String(info.phone || "").replace(/\s/g, "")}`}>
                  {info.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${info.email}`}>{info.email}</a>
              </li>
              <li>{info.hours}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {info.name}. All rights reserved.</span>
          <span>
            Developed by{" "}
            <a
              href="https://onesaas.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              OneSaaS Technologies Private Limited
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
