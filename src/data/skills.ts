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
    title: "AI & LLM",
    subtitle: "Artificial Intelligence",
    description:
      "Proje seviyesinde uyguladığım generative AI, LLM entegrasyonu ve prompt tabanlı iş akışları.",
    skills: [
      { name: "Generative AI", level: "Applied" },
      { name: "LLM Integration", level: "Applied" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Applied" },
      { name: "Prompt Engineering", level: "Applied" },
      { name: "OpenRouter API", level: "Applied" },
      { name: "AI-assisted workflows", level: "Applied" },
      { name: "GitHub Copilot / Agent Mode", level: "Applied" },
      { name: "GitHub MCP Server", level: "Applied" },
      { name: "AI Agents / Agentic Workflows", level: "Working Knowledge" },
      { name: "Microsoft Foundry / Azure OpenAI", level: "Working Knowledge" },
    ],
  },
  {
    title: "Backend & Data",
    subtitle: "Python Services & APIs",
    description:
      "Python backend servisleri, REST API geliştirme ve uygulamalı veri tabanı çalışmaları.",
    skills: [
      { name: "Python", level: "Applied" },
      { name: "Flask", level: "Applied" },
      { name: "FastAPI", level: "Applied" },
      { name: "REST APIs", level: "Applied" },
      { name: "MSSQL", level: "Applied" },
      { name: "MongoDB", level: "Applied" },
      { name: "SQL", level: "Applied" },
    ],
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Infrastructure & Automation",
    description:
      "Microsoft Azure ve GitHub ekosisteminde uygulamalı cloud infrastructure, deployment ve automation çalışmaları.",
    skills: [
      { name: "Microsoft Azure", level: "Applied" },
      { name: "Docker", level: "Applied" },
      { name: "Git", level: "Applied" },
      { name: "GitHub", level: "Applied" },
      { name: "GitHub Actions", level: "Applied" },
      { name: "CI/CD", level: "Applied" },
      { name: "Linux", level: "Applied" },
      { name: "Azure Monitor", level: "Applied" },
      { name: "ARM/Bicep", level: "Working Knowledge" },
    ],
  },
  {
    title: "Computer Vision",
    subtitle: "Dataset Workflows",
    description:
      "RoboGPT stajında ve ilgili projelerde uyguladığım annotation, dataset preparation ve vision tooling çalışmaları.",
    skills: [
      { name: "YOLO", level: "Applied" },
      { name: "Qt", level: "Applied" },
      { name: "Bounding Box Annotation", level: "Applied" },
      { name: "Dataset Preparation", level: "Applied" },
      { name: "Pascal VOC", level: "Applied" },
      { name: "Computer Vision Fundamentals", level: "Applied" },
    ],
  },
  {
    title: "Data & Microsoft",
    subtitle: "Microsoft Ecosystem",
    description:
      "Microsoft ekosisteminde veri, raporlama ve uygulama geliştirme ile ilişkili çalışma alanlarım.",
    skills: [
      { name: "Power BI", level: "Applied" },
      { name: "Microsoft ecosystem", level: "Applied" },
      { name: "Azure Web Apps", level: "Applied" },
      { name: "Azure Networking", level: "Applied" },
      { name: "Identity / RBAC", level: "Applied" },
      { name: "Storage & Compute", level: "Applied" },
    ],
  },
  {
    title: "Web & Search Technologies",
    subtitle: "Secondary Focus",
    description:
      "AI, backend ve cloud odağını destekleyen web altyapısı ve arama teknolojileri bilgim.",
    skills: [
      { name: "Technical SEO", level: "Working Knowledge" },
      { name: "HTTP / HTTPS", level: "Working Knowledge" },
      { name: "DNS", level: "Working Knowledge" },
      { name: "Web Architecture", level: "Working Knowledge" },
      { name: "Crawling", level: "Working Knowledge" },
      { name: "SEO / GEO fundamentals", level: "Working Knowledge" },
    ],
  },
];
