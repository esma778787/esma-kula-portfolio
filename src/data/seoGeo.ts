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
    title: "Content SEO",
    subtitle: "Applied Experience",
    description:
      "Web sitesi ve blog içeriklerinin arama görünürlüğünü destekleyecek şekilde planlanması, hazırlanması ve yayınlanması üzerine uygulamalı deneyim.",
    skills: [
      "SEO odaklı blog içerikleri",
      "Anahtar kelime odaklı içerik planlama",
      "Türkçe ve İngilizce içerik üretimi",
      "Proje açıklamalarının SEO uyumlu hazırlanması",
      "CTA kullanımı",
      "İçerik görünürlüğünün takip edilmesi",
      "Aylık içerik planlama",
    ],
    evidence: [
      "E+ Türkiye web sitesi ve içerik süreçleri",
      "Blog konu planlaması ve yayın yönetimi",
      "SEO ve CTA yaklaşımı konusunda ekip içi eğitim",
    ],
    level: "Applied Experience",
    accent: "applied",
  },
  {
    title: "On-Page SEO",
    subtitle: "Applied Experience",
    description:
      "Sayfa ve içerik yapısını hem kullanıcıların hem de arama motorlarının daha kolay anlayabileceği biçimde düzenlemeye odaklanan çalışmalar.",
    skills: [
      "Başlık yapısı",
      "İçerik organizasyonu",
      "Keyword-focused content",
      "Proje ve hizmet açıklamaları",
      "CTA yapıları",
      "İçerik hiyerarşisi",
      "Kullanıcı odaklı içerik düzenleme",
    ],
    evidence: [
      "E+ Türkiye içerik ve web yönetimi",
      "Balkan Gençlik Hareketi web içerikleri",
      "Proje ve faaliyetlerin web üzerinde yapılandırılması",
    ],
    level: "Applied Experience",
    accent: "applied",
  },
  {
    title: "Technical SEO Foundation",
    subtitle: "Web Infrastructure → SEO",
    description:
      "Technical SEO uygulamalarının altında çalışan web altyapısını DevOps ve web geliştirme deneyimim sayesinde teknik olarak anlayabiliyorum. Bu altyapıyı SEO'ya özgü crawling, indexing ve indexability süreçleriyle birleştirerek geliştiriyorum.",
    skills: [
      "DNS ve name resolution",
      "HTTP request / response mantığı",
      "URL ve path routing",
      "Client-server architecture",
      "Web application deployment",
      "Monitoring ve log analizi",
      "Performance ve availability",
      "Crawling",
      "Indexing",
      "robots.txt",
      "XML Sitemap",
      "Canonical",
      "HTTP status codes",
      "301 / 302 redirects",
    ],
    evidence: [
      "Nephos Systems: Azure DNS ve public/private DNS",
      "Nephos Systems: HTTP trafik ve path-based routing",
      "Nephos Systems: Web App deployment ve monitoring",
      "Nephos Systems: Load Balancer ve autoscaling",
      "Personal Portfolio: Technical SEO uygulama laboratuvarı",
    ],
    level: "Developing",
    accent: "technical",
  },
  {
    title: "GEO",
    subtitle: "Generative Engine Optimization",
    description:
      "İçeriklerin üretken yapay zekâ destekli arama ve yanıt sistemlerinde daha anlaşılır, güvenilir ve erişilebilir biçimde sunulmasına yönelik yöntemleri araştırıyor ve test ediyorum.",
    skills: [
      "Generative Engine Optimization",
      "AI search visibility",
      "Answer-focused content",
      "Structured content",
      "Entity clarity",
      "Content credibility",
      "LLM response testing",
      "AI-assisted content research",
    ],
    evidence: [
      "GEO odaklı içerik testleri",
      "AI yanıt sistemlerinde görünürlük üzerine araştırmalar",
      "Personal Portfolio üzerinde GEO deneyleri",
      "Yapay zekâ araçlarıyla içerik ve yanıt yapısı testleri",
    ],
    level: "Research & Testing",
    accent: "research",
  },
];
