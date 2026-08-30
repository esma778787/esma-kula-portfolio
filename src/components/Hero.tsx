import Image from "next/image";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { label: "GitHub", href: siteConfig.socials.github },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
];

export function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="home-title">
      <div className="hero-background" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">SEO &amp; GEO • DevOps • AI</p>

          <h1 id="home-title" className="hero-title">
            Esma Kula
          </h1>

          <p className="hero-subtitle">SEO &amp; GEO | DevOps | AI &amp; Web Technologies</p>

          <p className="hero-description">
            İçerik görünürlüğü, web teknolojileri, DevOps ve yapay zekâ destekli arama
            sistemleri üzerine çalışan bilgisayar mühendisliği odaklı bir teknoloji
            profesyoneliyim. İçerik SEO deneyimimi teknik web altyapısı ve yapay zekâ
            bilgimle birleştiriyorum.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Projelerimi Gör
            </a>
            <a
              href={siteConfig.cvUrl}
              className="secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV&apos;yi İncele
            </a>
          </div>

          <div className="social-links" aria-label="Sosyal bağlantılar">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-shell">
            <div className="visual-orb orb-one" />
            <div className="visual-orb orb-two" />
            <div className="visual-image-wrap">
              <Image
                src="/images/esma-kula-profile-optimized.webp"
                alt="Esma Kula"
                width={560}
                height={700}
                sizes="(max-width: 720px) 80vw, 30vw"
                priority
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
