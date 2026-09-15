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
          <p className="eyebrow">Artificial Intelligence Engineer</p>

          <h1 id="home-title" className="hero-title">
            AI Engineer • Python • LLM • Azure
          </h1>

          <p className="hero-subtitle">Artificial Intelligence &amp; Backend Engineering</p>

          <p className="hero-description">
            Final-year Computer Engineering student building AI-powered applications, Python
            backend services and cloud-based systems. Hands-on experience with LLM integrations,
            REST APIs, computer vision and Microsoft Azure.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View AI Projects
            </a>
            <a
              href={siteConfig.cvUrl}
              className="secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
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
