export const siteConfig = {
  name: "Esma Kula",
  title: "Esma Kula | SEO, GEO, DevOps & AI",
  description:
    "SEO, GEO, DevOps, yapay zekâ ve web teknolojileri üzerine çalışmalarını ve projelerini paylaşan Esma Kula'nın kişisel portfolyosu.",
  locale: "tr_TR",
  language: "tr",
  socials: {
    github: "https://github.com/esma778787",
    linkedin: "https://www.linkedin.com/in/esma-kula",
  },
  email: "esmakula8@gmail.com",
  cvUrl: "/cv/Esma_Kula_SEO_GEO_DevOps_AI_CV_with_photo.pdf",
} as const;

export function normalizeSiteUrl(rawUrl?: string): string {
  const value = (rawUrl ?? "").trim();

  if (!value) {
    return "http://localhost:3000";
  }

  return value.replace(/\/+$/, "");
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export function buildAbsoluteUrl(path = "/"): string {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${siteUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
}
