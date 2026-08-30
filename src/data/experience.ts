export type Experience = {
  organization: string;
  role: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
};

export const experience: Experience[] = [
  {
    organization: "Nephos Systems",
    role: "DevOps Engineer Intern",
    type: "Internship",
    period: "2026",
    location: "İstanbul, Türkiye",
    summary:
      "Microsoft Azure, GitHub ve modern DevOps süreçleri üzerinde uygulamalı çalışmalar gerçekleştirdiğim teknik staj deneyimi.",
    highlights: [
      "Microsoft Azure üzerinde bulut altyapısı ve web uygulama servisleriyle çalıştım.",
      "Azure DNS ile public/private DNS ve name resolution süreçlerini inceledim.",
      "Azure Virtual Network, subnet, NSG ve ağ iletişimi konularında uygulamalı çalışmalar gerçekleştirdim.",
      "Azure Application Gateway ile path-based routing ve HTTP trafik yönlendirme senaryolarını inceledim.",
      "Azure Web App üzerinde deployment, staging ve production süreçleriyle çalıştım.",
      "GitHub Actions tabanlı CI/CD süreçlerini inceledim ve uyguladım.",
      "Azure Monitor ve log sistemleri üzerinden monitoring ve hata analizi süreçlerini değerlendirdim.",
      "Load Balancer, autoscaling ve yüksek erişilebilirlik senaryoları üzerinde çalıştım.",
      "FastAPI tabanlı web API geliştirme, GET request, JSON response, validation ve test süreçlerini inceledim.",
      "GitHub Copilot Agent Mode ve GitHub MCP Server ile repository analizi ve AI destekli geliştirme süreçlerini test ettim.",
    ],
    technologies: [
      "Microsoft Azure",
      "GitHub",
      "GitHub Actions",
      "GitHub Copilot",
      "CI/CD",
      "Docker",
      "FastAPI",
      "DNS",
      "HTTP",
      "Networking",
      "Monitoring",
    ],
    featured: true,
  },
  {
    organization: "E+ Türkiye",
    role: "Web Site Management & SEO-Focused Content",
    type: "Volunteer Experience",
    period: "2024 – 2025",
    location: "Türkiye",
    summary:
      "Web sitesi yönetimi, içerik operasyonları ve SEO odaklı içerik süreçlerinde aktif görev aldığım gönüllülük deneyimi.",
    highlights: [
      "Web sitesinin içerik ve yayın süreçlerinin yönetiminde görev aldım.",
      "Aylık blog ve içerik planlarının hazırlanmasına katkı sağladım.",
      "Türkçe ve İngilizce içeriklerin hazırlanması ve yayın süreçlerini yönettim.",
      "Blog içeriklerini başlık yapısı, anahtar kelime kullanımı ve içerik görünürlüğü açısından düzenledim.",
      "Proje açıklamalarının SEO uyumlu ve kullanıcı açısından anlaşılır şekilde hazırlanmasına katkı sağladım.",
      "CTA yapılarını içeriklerin amacına uygun şekilde kullandım.",
      "Yayınlanan içeriklerin organik görünürlüğünü dikkate alarak sonraki içerik planlarını şekillendirdim.",
      "Ekip içi içerik ve çalışma süreçlerini Slack ve Excel üzerinden planladım.",
      "SEO ve CTA odaklı içerik yaklaşımı konusunda ekip üyelerine eğitim ve yönlendirme sağladım.",
    ],
    technologies: [
      "Content SEO",
      "On-Page SEO",
      "Content Strategy",
      "Keyword-Focused Content",
      "CTA",
      "Web Content Management",
      "Slack",
      "Excel",
    ],
    featured: true,
  },
  {
    organization: "RoboGPT",
    role: "Engineering Intern",
    type: "Internship",
    period: "2025",
    location: "Bursa, Türkiye",
    summary:
      "Robotik sistemlerde gömülü yazılım, Raspberry Pi, backend servisleri ve donanım entegrasyonu üzerinde çalıştığım mühendislik stajı.",
    highlights: [
      "Raspberry Pi tabanlı motor kontrol sistemleri üzerinde çalıştım.",
      "Motor kontrol ve PID senaryolarını inceledim.",
      "Flask tabanlı API kullanarak robot kontrol servisleri geliştirdim.",
      "Sensörlerden alınan verilerin yazılım tarafında işlenmesi üzerinde çalıştım.",
      "HC-SR04, MPU6050 ve farklı elektronik bileşenlerin entegrasyonlarını gerçekleştirdim.",
      "Qt tabanlı kamera ve kontrol arayüzleri üzerinde çalıştım.",
      "Donanım ve yazılım arasındaki veri iletişimi ve test süreçlerini uyguladım.",
    ],
    technologies: [
      "Raspberry Pi",
      "Python",
      "Flask",
      "Qt",
      "REST API",
      "PID",
      "Embedded Systems",
      "Sensors",
    ],
    featured: false,
  },
  {
    organization: "Balkan Gençlik Hareketi",
    role: "Web & Digital Content Volunteer",
    type: "Volunteer Experience",
    period: "Volunteer",
    location: "Türkiye",
    summary:
      "Kurum projelerinin ve faaliyetlerinin web üzerinde doğru, güvenilir ve görünür biçimde sunulmasına yönelik içerik çalışmalarında görev aldım.",
    highlights: [
      "Web sitesindeki proje ve faaliyet içeriklerinin düzenlenmesine katkı sağladım.",
      "Kurum çalışmalarının kullanıcıya daha anlaşılır şekilde sunulmasına odaklandım.",
      "Web içeriklerinde görünürlük ve güvenilirlik unsurlarını dikkate aldım.",
      "Projelerin ve kurum faaliyetlerinin web sitesinde tutarlı biçimde temsil edilmesini destekledim.",
    ],
    technologies: [
      "Web Content",
      "Content Management",
      "Digital Visibility",
      "Content Structure",
    ],
    featured: false,
  },
];
