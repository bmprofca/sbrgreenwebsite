const SITE_URL = (process.env.REACT_APP_SITE_URL || "https://sbrgreen.com").replace(
  /\/$/,
  ""
);

export function getSiteUrl() {
  return SITE_URL;
}

export function absoluteUrl(path = "/") {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const defaultKeywords = [
  "SBRGREEN",
  "SBRGREEN Construction",
  "structural building",
  "foundation work",
  "site development",
  "piling work",
  "industrial projects",
  "bridge structural works",
  "road design and construction",
  "fabrication works",
  "interior works",
  "boundary wall",
  "RCC drain work",
  "commercial building projects",
  "construction company",
].join(", ");

export const pageSeo = {
  home: {
    title: "SBRGREEN Construction Private Limited | Building a Greener Tomorrow",
    description:
      "SBRGREEN Construction Private Limited delivers structural building, foundation, site development, piling, industrial, bridge, road, fabrication, interior, boundary, RCC, and commercial construction works.",
    path: "/",
    keywords: defaultKeywords,
  },
  about: {
    title: "About Us | SBRGREEN Construction Private Limited",
    description:
      "Learn about SBRGREEN Construction Private Limited — our story, values, milestones, and commitment to greener, lasting construction.",
    path: "/about",
    keywords: `${defaultKeywords}, about SBRGREEN, construction company profile`,
  },
  services: {
    title: "Construction Services | SBRGREEN Construction",
    description:
      "Explore SBRGREEN work details: structural building, foundation, site development, piling, industrial projects, bridge works, road design, fabrication, interiors, fencing, boundary walls, RCC works, and commercial buildings.",
    path: "/services",
    keywords: `${defaultKeywords}, construction services, civil works`,
  },
  projects: {
    title: "Projects Portfolio | SBRGREEN Construction",
    description:
      "Browse completed and ongoing SBRGREEN construction projects across residential, commercial, industrial, and infrastructure sectors.",
    path: "/projects",
    keywords: `${defaultKeywords}, construction projects, portfolio`,
  },
  gallery: {
    title: "Project Gallery | SBRGREEN Construction",
    description:
      "View the SBRGREEN construction gallery — site progress, structural works, and finished project photography.",
    path: "/gallery",
    keywords: `${defaultKeywords}, construction gallery, site photos`,
  },
  careers: {
    title: "Careers | Join SBRGREEN Construction",
    description:
      "Explore open roles at SBRGREEN Construction Private Limited. Build your career with a safety-first, quality-driven construction team.",
    path: "/careers",
    keywords: `${defaultKeywords}, construction jobs, careers, hiring`,
  },
  contact: {
    title: "Contact Us | SBRGREEN Construction Private Limited",
    description:
      "Contact SBRGREEN Construction for quotes, consultations, partnerships, and project inquiries. We respond with clear next steps.",
    path: "/contact",
    keywords: `${defaultKeywords}, contact construction company, get a quote`,
  },
};

export function buildOrganizationSchema(company) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company?.name || "SBRGREEN CONSTRUCTION PRIVATE LIMITED",
    alternateName: company?.shortName || "SBRGREEN",
    url: SITE_URL,
    logo: absoluteUrl("/logo.png"),
    description:
      company?.tagline ||
      "Building lasting structures. Growing greener futures.",
    email: company?.email,
    telephone: company?.phone,
    address: company?.address
      ? {
          "@type": "PostalAddress",
          streetAddress: company.address,
        }
      : undefined,
    sameAs: [],
  };
}

export function buildLocalBusinessSchema(company) {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company?.name || "SBRGREEN CONSTRUCTION PRIVATE LIMITED",
    image: absoluteUrl("/logo.png"),
    url: SITE_URL,
    telephone: company?.phone,
    email: company?.email,
    description:
      "Professional residential, commercial, infrastructure, and green construction services.",
    address: company?.address
      ? {
          "@type": "PostalAddress",
          streetAddress: company.address,
        }
      : undefined,
    openingHours: company?.hours,
    areaServed: "India",
    priceRange: "$$",
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SBRGREEN Construction Private Limited",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/projects?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
