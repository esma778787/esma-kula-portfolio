export type Project = {
  title: string;
  category: string;
  status: string;
  shortDescription: string;
  problem: string;
  solution: string;
  role: string[];
  technologies: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Erasmus+ Simulation Platform",
    category: "AI • Full Stack",
    status: "Completed",
    shortDescription:
      "Erasmus+ başvuru sürecini simüle eden, yapay zekâ destekli CV, motivasyon mektubu ve başvuru değerlendirme platformu.",
    problem:
      "Erasmus+ başvurularında CV, motivasyon mektubu ve başvuru değerlendirme süreçlerinin kullanıcılar için karmaşık ve dağınık olması.",
    solution:
      "Kullanıcıların motivasyon mektubu ve CV oluşturabildiği, başvurularını yapay zekâ ile değerlendirebildiği ve geri bildirim alabildiği uçtan uca bir simülasyon platformu geliştirildi.",
    role: [
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "AI Integration",
      "Prompt Engineering",
    ],
    technologies: [
      "Flutter",
      "Flask",
      "MongoDB",
      "MSSQL",
      "OpenRouter API",
      "REST API",
    ],
    githubUrl: null,
    demoUrl: null,
    featured: true,
  },
  {
    title: "Robotics Control & Monitoring System",
    category: "Embedded Systems • Robotics",
    status: "Completed",
    shortDescription:
      "Raspberry Pi tabanlı robotik kontrol, sensör entegrasyonu, motor yönetimi ve web tabanlı kontrol senaryoları.",
    problem:
      "Robotik sistemlerde motor kontrolü, sensör verilerinin okunması ve kullanıcı tarafından uzaktan kontrol süreçlerinin tek bir sistem içerisinde yönetilmesi.",
    solution:
      "Raspberry Pi üzerinde motor kontrolü ve sensör entegrasyonları geliştirildi; Flask API ve web arayüzü üzerinden kontrol ve veri iletişimi senaryoları uygulandı.",
    role: [
      "Embedded Software",
      "Backend Development",
      "Hardware Integration",
      "Testing",
    ],
    technologies: [
      "Raspberry Pi",
      "Python",
      "Flask",
      "REST API",
      "Qt",
      "Sensors",
      "Motor Control",
    ],
    githubUrl: null,
    demoUrl: null,
    featured: false,
  },
  {
    title: "Personal Portfolio – SEO & GEO Lab",
    category: "SEO • GEO • Web",
    status: "In Progress",
    shortDescription:
      "Kişisel portfolyo sitesi üzerinde Technical SEO ve GEO yaklaşımlarının uygulandığı ve test edildiği canlı bir çalışma alanı.",
    problem:
      "SEO, Technical SEO ve GEO bilgisini yalnızca teorik olarak anlatmak yerine uygulanabilir ve ölçülebilir bir proje üzerinde göstermek.",
    solution:
      "Next.js tabanlı kişisel portfolio üzerinde metadata, semantic HTML, sitemap, robots.txt, canonical, structured data, performance ve GEO odaklı içerik yapılarının uygulanacağı bir test ortamı oluşturuluyor.",
    role: [
      "Web Development",
      "Technical SEO",
      "GEO Research",
      "Performance Optimization",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Technical SEO",
      "Schema.org",
      "GEO",
    ],
    githubUrl: null,
    demoUrl: null,
    featured: true,
  },
];
