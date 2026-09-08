import { Helmet } from "react-helmet-async";
import { seo } from "@/config/seo";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: seo.organization.name,
    alternateName: seo.organization.alternateName,
    description: seo.organization.description,
    url: seo.organization.url,
    email: seo.organization.email,
    telephone: seo.organization.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Danyor Main Chock Near Shaheen Adda",
      addressLocality: "Gilgit",
      addressCountry: "PK",
    },
    logo: seo.ogImage,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.siteName,
    url: seo.domain,
    publisher: {
      "@type": "EducationalOrganization",
      name: seo.organization.name,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
