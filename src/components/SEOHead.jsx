import { Helmet } from "react-helmet-async";
import { seo } from "@/config/seo";

export function SEOHead({
  title,
  description,
  path,
  ogImage,
  type = "website",
  noindex = false,
}) {
  const fullTitle = title ? `${title} | ${seo.siteName}` : seo.siteName;
  const resolvedDescription = description || seo.defaultDescription;
  const url = `${seo.domain}${path || "/"}`;
  const image = ogImage || seo.ogImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={seo.siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={seo.twitterHandle} />

      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
    </Helmet>
  );
}
