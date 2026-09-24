import { Helmet } from "react-helmet-async";
import { absoluteUrl, getSiteUrl } from "../seo/seoConfig";

export default function Seo({
  title,
  description,
  path = "/",
  keywords,
  image = "/logo.png",
  type = "website",
  noindex = false,
  jsonLd = [],
}) {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const siteName = "SBRGREEN Construction Private Limited";
  const fullTitle = title?.includes("SBRGREEN")
    ? title
    : `${title} | ${siteName}`;

  const schemas = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
      />
      <meta name="author" content={siteName} />
      <meta name="publisher" content={siteName} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <meta name="theme-color" content="#0B3D2E" />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={getSiteUrl()} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
