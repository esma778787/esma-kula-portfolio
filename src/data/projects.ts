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
  // Featured Projects
  {
    title: "AI-Powered Erasmus+ Application Simulation Platform",
    category: "AI / Full Stack / Mobile",
    status: "Completed",
    shortDescription:
      "Erasmus+ başvuru sürecini simüle eden mobil uygulama. Kullanıcıların motivasyon mektubu ve CV hazırlamasına, başvurularını değerlendirmesine ve AI destekli geri bildirim almasına olanak sağlar.",
    problem:
      "Erasmus+ başvuru sürecindeki hazırlık eksikliği ve kullanıcıların başvuru öncesi deneyim kazanamaması.",
    solution:
      "Flutter mobil arayüz, Flask API, veri katmanı ve AI servisleri kullanılarak simülasyon platformu geliştirilmesi.",
    role: [
      "Full-Stack Development",
      "Mobile Development",
      "Backend API",
      "Database Integration",
      "AI Integration",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "Flask",
      "REST API",
      "MongoDB",
      "SQL Server",
      "AI Integration",
    ],
    githubUrl: "https://github.com/esma778787/erasmus-simulasyon",
    demoUrl: null,
    featured: true,
  },
  {
    title: "Clean Architecture Full-Stack Application",
    category: "Backend / Full Stack",
    status: "Completed",
    shortDescription:
      "Bakımı zorlaşan monolitik backend yapılarındaki ölçeklenebilirlik problemlerini çözen, Clean Architecture prensiplerine dayanan katmanlı full-stack uygulama.",
    problem:
      "Bakımı zorlaşan monolitik ve sıkı bağımlı backend yapılarında ölçeklenebilirlik ve sürdürülebilirlik problemi.",
    solution:
      "Clean Architecture prensipleriyle katmanlı backend, JWT authentication, PostgreSQL persistence ve Redis caching kullanan full-stack yapı.",
    role: [
      "Backend Architecture",
      "API Development",
      "Persistence Layer",
      "Authentication",
      "Frontend-Backend Integration",
    ],
    technologies: [
      ".NET 9",
      "ASP.NET Core",
      "Entity Framework Core",
      "JWT Authentication",
      "PostgreSQL",
      "Redis",
      "Swagger / OpenAPI",
      "Frontend",
    ],
    githubUrl: "https://github.com/esma778787/Task2",
    demoUrl: null,
    featured: true,
  },
  {
    title: "Event-Driven Microservices Platform",
    category: "Backend / DevOps / Microservices",
    status: "Completed",
    shortDescription:
      "Docker tabanlı microservice mimarisi, RabbitMQ event-driven communication ve merkezi logging ile bağımsız deployment ve asynchronous communication sağlayan platform.",
    problem:
      "Birbirine sıkı bağlı servislerde bağımsız deployment, logging ve asynchronous communication zorluğu.",
    solution:
      "Docker tabanlı microservice mimarisi, RabbitMQ üzerinden event-driven communication, merkezi logging ve API Gateway yapısı.",
    role: [
      "Microservice Architecture",
      "Service Integration",
      "Docker Orchestration",
      "Event-Driven Development",
    ],
    technologies: [
      "ASP.NET Core",
      "Microservices",
      "RabbitMQ",
      "Docker",
      "Docker Compose",
      "API Gateway",
      "Seq",
      "Next.js",
    ],
    githubUrl: "https://github.com/esma778787/Task3",
    demoUrl: null,
    featured: true,
  },
  {
    title: "Computer Vision Dataset Annotation Tool",
    category: "AI / Computer Vision / Desktop",
    status: "Completed",
    shortDescription:
      "Canlı kamera görüntüsü veya mevcut image datasetleri üzerinde bounding box annotation yapılmasını ve YOLO / Pascal VOC formatında training dataset üretilmesini sağlayan masaüstü araç.",
    problem:
      "Computer vision modellerinin eğitiminde veri etiketleme sürecinin manuel ve zaman alıcı olması.",
    solution:
      "Qt6 tabanlı arayüz ile kamera görüntüsü veya datasetler üzerinde hızlı annotation ve doğrudan model eğitimine uygun çıktı üretimi.",
    role: [
      "Desktop Application Development",
      "Computer Vision Tooling",
      "Dataset Pipeline Development",
    ],
    technologies: [
      "Qt6",
      "C++17",
      "Python",
      "OpenCV",
      "YOLO",
      "Pascal VOC",
      "JSON",
      "XML",
    ],
    githubUrl: "https://github.com/esma778787/qt-camera-app",
    demoUrl: null,
    featured: true,
  },
  {
    title: "IoT Battery Monitoring & Alert System",
    category: "Embedded / IoT / Python",
    status: "Completed",
    shortDescription:
      "Arduino üzerinden alınan sıcaklık, akım ve voltaj verilerini Python ile gerçek zamanlı izleyen, görselleştiren ve kritik durumları tespit eden monitoring sistemi.",
    problem:
      "Pil sistemlerinde sıcaklık, akım ve voltaj değişimlerinin gerçek zamanlı takip edilmesinin zor olması.",
    solution:
      "Arduino serial data + Python monitoring + real-time visualization + rule-based anomaly/status detection.",
    role: [
      "Embedded Integration",
      "Python Data Processing",
      "Serial Communication",
      "Monitoring Systems",
    ],
    technologies: [
      "Python",
      "Arduino",
      "Serial Communication",
      "Sensor Monitoring",
      "Matplotlib",
      "IoT",
    ],
    githubUrl: "https://github.com/esma778787/Pil-Sistemi",
    demoUrl: null,
    featured: true,
  },
  {
    title: "Personal Portfolio & Technical SEO / GEO Lab",
    category: "SEO / GEO / Web",
    status: "In Progress",
    shortDescription:
      "Modern portföy sitesinde yalnızca görsel tasarım değil, crawlability, indexing, semantic structure ve AI/search engine discoverability üzerine odaklanmış Next.js tabanlı portfolio.",
    problem:
      "Modern portföy sitelerinde yalnızca görsel tasarım değil, crawlability, indexing, semantic structure ve AI/search engine discoverability ihtiyacı.",
    solution:
      "Next.js tabanlı semantic ve SEO/GEO odaklı portfolio architecture.",
    role: [
      "Frontend Development",
      "Technical SEO Implementation",
      "Semantic Markup",
      "GEO Experimentation",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Technical SEO",
      "Structured Data",
      "Schema.org",
      "Metadata",
      "Sitemap",
      "robots.txt",
      "Canonical",
      "GEO",
    ],
    githubUrl: "https://github.com/esma778787/esma-kula-portfolio",
    demoUrl: "https://esma-kula-portfolio.vercel.app/",
    featured: true,
  },

  // More Projects
  {
    title: "Product Management Full-Stack Application",
    category: "Backend / Full Stack",
    status: "Completed",
    shortDescription:
      "Katmanlı Product API ve Next.js frontend kullanan full-stack product management application.",
    problem:
      "Ürün yönetim sistemlerinde ölçeklenebilir ve bakımı kolay backend yapısının gereksinimi.",
    solution:
      "ASP.NET Core ve Entity Framework kullanarak temiz API tasarımı, Next.js ile modern frontend entegrasyonu.",
    role: [
      "Backend Development",
      "API Development",
      "Frontend Integration",
    ],
    technologies: [
      "ASP.NET Core",
      "EF Core",
      "Swagger",
      "Next.js",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/esma778787/task1",
    demoUrl: null,
    featured: false,
  },
  {
    title: "Flutter Music Player Application",
    category: "Mobile / Audio",
    status: "Completed",
    shortDescription:
      "Flutter tabanlı müzik oynatma ve state management uygulaması.",
    problem:
      "Mobil müzik oynatıcı uygulamasında state management ve audio service entegrasyonunun kompleks olması.",
    solution:
      "BLoC pattern ve RxDart kullanarak robust state management, audio_service ile background playback desteği.",
    role: ["Mobile Development", "Audio Integration", "State Management"],
    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "RxDart",
      "audio_service",
      "Firebase",
    ],
    githubUrl: "https://github.com/esma778787/Spotify_Music",
    demoUrl: null,
    featured: false,
  },
  {
    title: "Digital Ledger Management Application",
    category: "Mobile / Finance",
    status: "Completed",
    shortDescription:
      "Dijital veresiye / borç takip işlemlerini yönetmek için geliştirilmiş Flutter uygulaması.",
    problem:
      "Küçük işletmelerde veresiye ve borç yönetiminin manuel ve kağıt üzerinde yapılmasının verimsizliği.",
    solution:
      "Flutter ile mobil borç/veresiye takip sistemi, local storage ile veriler saklanması.",
    role: ["Mobile Development", "Data Management", "UI/UX Implementation"],
    technologies: ["Flutter", "Dart", "Local Storage"],
    githubUrl: "https://github.com/esma778787/veresiye_defteri",
    demoUrl: null,
    featured: false,
  },
  {
    title: "Role-Based Access Control Application",
    category: "Backend / Authorization",
    status: "Completed",
    shortDescription:
      "Role-based authorization ve kullanıcı erişim kontrolü odaklı uygulama.",
    problem:
      "Uygulamalarda granüler ve ölçeklenebilir authorization yapısının eksikliği.",
    solution:
      "Role-based access control prensipleri ile güvenli ve esnek authorization sistemi.",
    role: ["Backend Development", "Authorization Design", "Security Implementation"],
    technologies: [
      "ASP.NET Core",
      "Authorization",
      "Authentication",
      "Role-Based Access Control",
    ],
    githubUrl: "https://github.com/esma778787/RoleBazl-erisim",
    demoUrl: null,
    featured: false,
  },
];
