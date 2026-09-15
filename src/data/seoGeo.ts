export type SeoGeoArea = {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  evidence: string[];
  level: string;
  accent: string;
};

export const seoGeoAreas: SeoGeoArea[] = [
  {
    title: "Web & Search Technologies",
    subtitle: "Secondary Knowledge",
    description:
      "AI, backend ve cloud çalışmalarımı destekleyen web architecture ve search fundamentals bilgim.",
    skills: [
      "Technical SEO",
      "HTTP / HTTPS",
      "DNS",
      "Web Architecture",
      "Crawling",
      "SEO / GEO fundamentals",
    ],
    evidence: [
      "Portfolio üzerinde semantic structure ve metadata çalışmaları",
      "Azure DNS, HTTP routing ve web deployment deneyimi",
    ],
    level: "Supporting Knowledge",
    accent: "technical",
  },
];
