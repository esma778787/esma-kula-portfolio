import { buildAbsoluteUrl, siteConfig } from "@/config/site";

export function getStructuredData() {
  const homeUrl = buildAbsoluteUrl("/");
  const personId = `${homeUrl}#person`;
  const websiteId = `${homeUrl}#website`;
  const profilePageId = `${homeUrl}#profilepage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Esma Kula",
        url: homeUrl,
        description: siteConfig.description,
        image: buildAbsoluteUrl("/images/esma-kula-profile-optimized.webp"),
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.github,
        ],
        knowsAbout: [
          "SEO",
          "GEO",
          "Generative Engine Optimization",
          "Technical SEO",
          "DevOps",
          "Microsoft Azure",
          "Artificial Intelligence",
          "Web Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: "Esma Kula",
        description: siteConfig.description,
        inLanguage: siteConfig.language,
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: homeUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": personId,
        },
        mainEntity: {
          "@id": personId,
        },
      },
    ],
  };
}
