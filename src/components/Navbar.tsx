const navItems = [
  { label: "Projeler", href: "#projects" },
  { label: "Deneyim", href: "#experience" },
  { label: "SEO & GEO", href: "#seo-geo" },
  { label: "Yetenekler", href: "#skills" },
  { label: "Hakkımda", href: "#about" },
  { label: "İletişim", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Ana navigasyon">
        <a href="#home" className="brand" aria-label="Esma Kula ana sayfa">
          Esma Kula
        </a>

        <div className="nav-desktop" aria-label="Ana menü">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button type="button" className="lang-switch" aria-label="Dil seçimi">
            TR / EN
          </button>

          <button
            type="button"
            className="icon-button"
            aria-label="Tema değiştir"
          >
            ☼
          </button>

          <a href="#contact" className="cta-button">
            İletişime Geç
          </a>
        </div>

        <details className="mobile-menu-details">
          <summary className="menu-button" aria-label="Menüyü aç/kapat">
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
          </summary>
          <div id="mobile-navigation" className="mobile-menu" aria-label="Mobil menü">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="mobile-link">
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
