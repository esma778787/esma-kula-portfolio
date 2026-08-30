export type SkillLevel = "Applied" | "Working Knowledge" | "Familiar";

export type SkillItem = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  title: string;
  subtitle: string;
  description: string;
  skills: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "SEO & Search",
    subtitle: "Search Visibility",
    description:
      "İçerik görünürlüğü, arama motoru optimizasyonu ve üretken yapay zekâ destekli arama sistemleri üzerine çalıştığım alanlar.",
    skills: [
      { name: "Content SEO", level: "Applied" },
      { name: "On-Page SEO", level: "Applied" },
      { name: "Content Strategy", level: "Applied" },
      { name: "Keyword-Focused Content", level: "Applied" },
      { name: "CTA Optimization", level: "Applied" },
      { name: "GEO", level: "Working Knowledge" },
      { name: "Technical SEO", level: "Working Knowledge" },
      { name: "Crawling", level: "Working Knowledge" },
      { name: "Indexing", level: "Working Knowledge" },
      { name: "robots.txt", level: "Working Knowledge" },
      { name: "XML Sitemap", level: "Working Knowledge" },
      { name: "Canonical", level: "Working Knowledge" },
      { name: "HTTP Status Codes", level: "Working Knowledge" },
    ],
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Infrastructure & Automation",
    description:
      "Microsoft Azure ve GitHub ekosistemi üzerinde uygulamalı olarak çalıştığım bulut, deployment ve otomasyon teknolojileri.",
    skills: [
      { name: "Microsoft Azure", level: "Applied" },
      { name: "GitHub", level: "Applied" },
      { name: "GitHub Actions", level: "Applied" },
      { name: "CI/CD", level: "Applied" },
      { name: "GitHub Copilot", level: "Applied" },
      { name: "Azure DNS", level: "Applied" },
      { name: "Azure Networking", level: "Applied" },
      { name: "Azure Monitor", level: "Applied" },
      { name: "Load Balancer", level: "Applied" },
      { name: "Application Gateway", level: "Applied" },
      { name: "Docker", level: "Working Knowledge" },
      { name: "Infrastructure as Code", level: "Working Knowledge" },
      { name: "ARM Templates", level: "Working Knowledge" },
    ],
  },
  {
    title: "AI & Automation",
    subtitle: "Artificial Intelligence",
    description:
      "Yapay zekâ destekli yazılım geliştirme, LLM entegrasyonları ve agent tabanlı geliştirme süreçleri.",
    skills: [
      { name: "Generative AI", level: "Applied" },
      { name: "Prompt Engineering", level: "Applied" },
      { name: "LLM Integration", level: "Applied" },
      { name: "OpenRouter API", level: "Applied" },
      { name: "GitHub Copilot Agent Mode", level: "Applied" },
      { name: "GitHub MCP Server", level: "Applied" },
      { name: "Microsoft Foundry", level: "Working Knowledge" },
      { name: "Azure OpenAI", level: "Working Knowledge" },
      { name: "Machine Learning", level: "Working Knowledge" },
      { name: "Deep Learning", level: "Working Knowledge" },
    ],
  },
  {
    title: "Software Development",
    subtitle: "Development",
    description:
      "Web, backend, mobil ve gömülü sistem projelerinde kullandığım programlama teknolojileri.",
    skills: [
      { name: "Python", level: "Applied" },
      { name: "Dart", level: "Applied" },
      { name: "Flutter", level: "Applied" },
      { name: "Flask", level: "Applied" },
      { name: "FastAPI", level: "Applied" },
      { name: "REST API", level: "Applied" },
      { name: "HTML", level: "Applied" },
      { name: "CSS", level: "Applied" },
      { name: "Qt", level: "Applied" },
      { name: "Git", level: "Applied" },
      { name: "C#", level: "Working Knowledge" },
      { name: "Java", level: "Working Knowledge" },
      { name: "JavaScript", level: "Working Knowledge" },
    ],
  },
  {
    title: "Data & Databases",
    subtitle: "Data",
    description:
      "Uygulama geliştirme ve proje çalışmalarında kullandığım ilişkisel ve NoSQL veri teknolojileri.",
    skills: [
      { name: "MongoDB", level: "Applied" },
      { name: "MSSQL", level: "Applied" },
      { name: "MySQL", level: "Working Knowledge" },
      { name: "Microsoft Fabric", level: "Working Knowledge" },
      { name: "Power BI", level: "Working Knowledge" },
    ],
  },
  {
    title: "Embedded & Robotics",
    subtitle: "Hardware + Software",
    description:
      "Robotik ve gömülü sistem projelerinde donanım-yazılım entegrasyonu üzerine kullandığım teknolojiler.",
    skills: [
      { name: "Raspberry Pi", level: "Applied" },
      { name: "Motor Control", level: "Applied" },
      { name: "Sensor Integration", level: "Applied" },
      { name: "HC-SR04", level: "Applied" },
      { name: "MPU6050", level: "Applied" },
      { name: "PID", level: "Working Knowledge" },
      { name: "HM-10 BLE", level: "Working Knowledge" },
      { name: "Arduino", level: "Working Knowledge" },
    ],
  },
];
