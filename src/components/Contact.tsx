import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="section-heading">
        <p className="section-kicker">Contact</p>
        <h2 id="contact-heading">İletişime Geç</h2>
        <p className="section-copy">
          SEO, GEO, DevOps, yapay zekâ ve yazılım geliştirme odaklı iş ve proje fırsatları için benimle iletişime geçebilirsiniz.
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-copy">
          <h3>Birlikte çalışmak ister misiniz?</h3>
          <p>
            Yeni teknolojileri öğrenmeye, gerçek projelerde sorumluluk almaya ve teknik altyapımı arama görünürlüğü ve yapay zekâ alanlarıyla geliştirmeye devam ediyorum.
          </p>
        </div>

        <div className="contact-actions">
          <a
            href={`mailto:${siteConfig.email}`}
            className="primary-button contact-button"
          >
            E-posta Gönder
          </a>

          <div className="social-links contact-socials" aria-label="Sosyal bağlantılar">
            <a
              href={siteConfig.socials.github}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="social-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
