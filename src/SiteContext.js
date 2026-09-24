import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fetchSiteData } from "./api";
import {
  careers as fallbackCareers,
  company as fallbackCompany,
  galleryImages as fallbackGallery,
  milestones as fallbackMilestones,
  projects as fallbackProjects,
  services as fallbackServices,
  testimonials as fallbackTestimonials,
  values as fallbackValues,
} from "./data";

const SiteContext = createContext(null);

const fallbackTimeline = [
  {
    year: "2010",
    title: "Founded with purpose",
    text: "SBRGREEN began as a focused construction practice committed to reliable delivery and responsible building.",
  },
  {
    year: "2016",
    title: "Expanded capabilities",
    text: "Grew into commercial and infrastructure workstreams with dedicated engineering and site leadership teams.",
  },
  {
    year: "2021",
    title: "Green construction focus",
    text: "Formalized sustainable methods — material efficiency, waste reduction, and energy-conscious design collaboration.",
  },
  {
    year: "Today",
    title: "Building across NCR",
    text: "Delivering complex projects with the same principles: safety, craft, transparency, and lasting quality.",
  },
];

const fallbackFounders = [
  {
    id: 1,
    name: "Rajesh Kumar Sharma",
    designation: "Founder & Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "With decades of hands-on experience in civil and structural construction, Rajesh founded SBRGREEN to deliver reliable projects with a stronger focus on quality, safety, and greener building practices.",
    quote:
      "Every structure we build should stand strong — and leave a lighter footprint for tomorrow.",
  },
];

const fallbackProcess = [
  { step: "01", title: "Consult", text: "Understand scope, site conditions, budget, and success criteria." },
  { step: "02", title: "Plan", text: "Define schedule, resources, procurement, and quality checkpoints." },
  { step: "03", title: "Build", text: "Execute with skilled teams, safety oversight, and progress reporting." },
  { step: "04", title: "Handover", text: "Complete snagging, documentation, and a clean project close-out." },
];

function toCompany(settings) {
  if (!settings) {
    return {
      ...fallbackCompany,
      whatsappNumber: "919876543210",
      heroImage:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80",
      aboutImage:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80",
      ctaImage:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      aboutStory1: `${fallbackCompany.name} is a full-service construction company serving residential, commercial, industrial, and civic clients.`,
      aboutStory2:
        "Our name reflects our ambition: to build well, and to build with greater care for the environments our projects inhabit.",
      careersIntro:
        "You will work on meaningful projects with clear leadership, fair processes, and a genuine focus on safety.",
    };
  }

  return {
    name: settings.companyName,
    shortName: settings.shortName,
    tagline: settings.tagline,
    phone: settings.phone,
    email: settings.email,
    address: settings.address,
    hours: settings.hours,
    heroImage: settings.heroImage,
    aboutImage: settings.aboutImage,
    ctaImage: settings.ctaImage,
    aboutStory1: settings.aboutStory1,
    aboutStory2: settings.aboutStory2,
    careersIntro: settings.careersIntro,
    whatsappNumber: settings.whatsappNumber || "",
  };
}

export function SiteProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSiteData()
      .then((payload) => {
        setData(payload);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const value = useMemo(() => {
    const company = toCompany(data?.settings);
    return {
      loading,
      error,
      company,
      services: data?.services?.length ? data.services : fallbackServices,
      projects: data?.projects?.length ? data.projects : fallbackProjects,
      gallery: data?.gallery?.length ? data.gallery : fallbackGallery,
      testimonials: data?.testimonials?.length ? data.testimonials : fallbackTestimonials,
      values: data?.values?.length ? data.values : fallbackValues,
      milestones: data?.milestones?.length ? data.milestones : fallbackMilestones,
      timeline: data?.timeline?.length ? data.timeline : fallbackTimeline,
      processSteps: data?.processSteps?.length ? data.processSteps : fallbackProcess,
      careers: data?.careers?.length ? data.careers : fallbackCareers,
      founders: data?.founders?.length ? data.founders : fallbackFounders,
      fromApi: Boolean(data?.settings),
    };
  }, [data, loading, error]);

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
