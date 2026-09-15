const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Web & Search", href: "#seo-geo" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-block">
        <span className="footer-brand">Esma Kula</span>
        <p>AI Engineer • Python • LLM • Azure</p>
      </div>

      <div className="footer-links" aria-label="Footer navigasyonu">
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href} className="footer-link">
            {link.label}
          </a>
        ))}
      </div>

      <p className="footer-meta">© 2026 Esma Kula</p>
    </footer>
  );
}
