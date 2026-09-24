import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "./legacyNav";
import { useSite } from "../SiteContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { company } = useSite();
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={close}>
          <img
            className="brand-logo"
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt={`${company.shortName || "SBRGREEN"} Construction logo`}
          />
          <div className="brand-text">
            <strong>{company.shortName || "SBRGREEN"}</strong>
            <span>Construction Private Limited</span>
          </div>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`menu-toggle ${open ? "open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
