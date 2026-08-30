import { experience } from "@/data/experience";

export function Experience() {
  const featuredExperiences = experience.filter((item) => item.featured);
  const secondaryExperiences = experience.filter((item) => !item.featured);

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="section-heading">
        <p className="section-kicker">Experience</p>
        <h2 id="experience-heading">Deneyim</h2>
        <p className="section-copy">
          Yazılım geliştirme, DevOps, web yönetimi ve SEO odaklı içerik çalışmalarını bir araya
          getiren teknik ve operasyonel deneyimlerim.
        </p>
      </div>

      <div className="timeline" aria-label="Deneyim akışı">
        {featuredExperiences.map((item) => (
          <article key={`${item.organization}-${item.period}`} className="timeline-item featured-timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-meta">
                <div>
                  <span className="timeline-period">{item.period}</span>
                  <p className="timeline-location">{item.location}</p>
                </div>
                <div className="timeline-org-block">
                  <span className="timeline-org">{item.organization}</span>
                </div>
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="role-meta">
                      {item.type} • {item.organization}
                    </p>
                  </div>
                </div>

                <p className="experience-summary">{item.summary}</p>

                <div className="experience-body">
                  <ul>
                    {item.highlights.slice(0, 6).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {item.organization === "Nephos Systems" ? (
                  <p className="technical-note">
                    Technical foundation: Web infrastructure • DNS • HTTP • Routing • Monitoring
                  </p>
                ) : null}

                {item.organization === "E+ Türkiye" ? (
                  <p className="technical-note">
                    Content SEO • On-Page SEO • Content Strategy
                  </p>
                ) : null}

                <div className="tag-list" aria-label={`${item.organization} teknolojileri`}>
                  {item.technologies.map((technology) => (
                    <span key={technology} className="tag-item">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        {secondaryExperiences.map((item) => (
          <article key={`${item.organization}-${item.period}`} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-meta">
                <div>
                  <span className="timeline-period">{item.period}</span>
                  <p className="timeline-location">{item.location}</p>
                </div>
                <div className="timeline-org-block">
                  <span className="timeline-org">{item.organization}</span>
                </div>
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="role-meta">
                      {item.type} • {item.organization}
                    </p>
                  </div>
                </div>

                <p className="experience-summary">{item.summary}</p>

                <div className="experience-body">
                  <ul>
                    {item.highlights.slice(0, 4).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="tag-list" aria-label={`${item.organization} teknolojileri`}>
                  {item.technologies.map((technology) => (
                    <span key={technology} className="tag-item">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
