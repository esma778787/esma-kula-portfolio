import { seoGeoAreas } from "@/data/seoGeo";

export function SeoGeo() {
  return (
    <section id="seo-geo" aria-labelledby="seo-geo-heading">
      <div className="section-heading">
        <p className="section-kicker">SEO & GEO</p>
        <h2 id="seo-geo-heading">Arama Görünürlüğü & AI Search</h2>
        <p className="section-copy">
          İçerik SEO deneyimimi web altyapısı bilgim ve üretken yapay zekâ odaklı arama
          teknolojileriyle birleştiriyorum.
        </p>
      </div>

      <div className="seo-grid" aria-label="SEO ve GEO alanları">
        {seoGeoAreas.map((area, index) => (
          <article key={area.title} className={`seo-card seo-card-${area.accent}`}>
            <div className="seo-card-top">
              <span className="seo-index">{String(index + 1).padStart(2, "0")}</span>
              <span className={`seo-level seo-level-${area.accent}`}>{area.level}</span>
            </div>

            <div className="seo-card-header">
              <p className="seo-subtitle">{area.subtitle}</p>
              <h3>{area.title}</h3>
            </div>

            <p className="seo-description">{area.description}</p>

            <div className="seo-skills" aria-label={`${area.title} yetkinlikleri`}>
              <ul className="skill-list">
                {area.skills.map((skill) => (
                  <li key={skill} className="skill-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="seo-evidence" aria-label={`${area.title} kanıtları`}>
              <span className="evidence-label">Experience / Evidence</span>
              <ul>
                {area.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {area.title === "Technical SEO Foundation" ? (
              <div className="tech-flow" aria-hidden="true">
                <span>Web Infrastructure</span>
                <span className="tech-arrow">↓</span>
                <span>Crawling</span>
                <span className="tech-arrow">↓</span>
                <span>Indexing</span>
                <span className="tech-arrow">↓</span>
                <span>Search Visibility</span>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <div className="seo-connect" aria-label="Nasıl birleşiyor?">
        <h3>How It Connects</h3>
        <p>
          İçerik stratejisi + Web altyapısı + AI & GEO = Modern Search Visibility
        </p>

        <div className="flow-diagram" aria-hidden="true">
          <span>İçerik stratejisi</span>
          <span className="flow-arrow">→</span>
          <span>Web altyapısı</span>
          <span className="flow-arrow">→</span>
          <span>AI & GEO</span>
        </div>
      </div>
    </section>
  );
}
