import { projects } from "@/data/projects";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const compactProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="section-heading">
        <p className="section-kicker">Selected Work</p>
        <h2 id="projects-heading">Projeler</h2>
        <p className="section-copy">
          Yazılım, yapay zekâ, DevOps ve web teknolojilerini bir araya getirdiğim seçili
          çalışmalar.
        </p>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <article key={project.title} className="project-card project-featured">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-overlay"
                aria-label={`Open ${project.title} GitHub repository`}
              />
            ) : null}
            <div className="project-main">
              <div className="project-topline">
                <span className="project-category">{project.category}</span>
                <span className="project-status">{project.status}</span>
              </div>

              <h3>{project.title}</h3>
              <p className="project-description">{project.shortDescription}</p>

              <div className="case-study">
                <div>
                  <span className="case-label">Problem</span>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <span className="case-label">Çözüm</span>
                  <p>{project.solution}</p>
                </div>
                <div>
                  <span className="case-label">Rolüm</span>
                  <ul>
                    {project.role.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="tag-list" aria-label={`${project.title} teknolojileri`}>
                {project.technologies.map((technology) => (
                  <span key={technology} className="tag-item">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.githubUrl ? (
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                ) : null}
                {project.demoUrl ? (
                  <a href={project.demoUrl} className="project-link project-link-alt" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>

            <div className="project-visual" aria-hidden="true">
              <div className="visual-grid" />
              <div className="visual-badge">Case Study</div>
            </div>
          </article>
        ))}
      </div>

      {compactProjects.length > 0 ? (
        <>
          <div className="more-projects-heading">
            <h3>Diğer Projeler</h3>
          </div>
          <div className="mini-projects">
            {compactProjects.map((project) => (
              <article key={project.title} className="project-card project-compact">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-overlay"
                  aria-label={`Open ${project.title} GitHub repository`}
                />
              ) : null}
              <div className="project-topline">
                <span className="project-category">{project.category}</span>
                <span className="project-status">{project.status}</span>
              </div>

              <h3>{project.title}</h3>
              <p className="project-description">{project.shortDescription}</p>

              <div className="mini-meta">
                <span className="case-label">Rolüm</span>
                <p>{project.role.join(" • ")}</p>
              </div>

              <div className="tag-list" aria-label={`${project.title} teknolojileri`}>
                {project.technologies.map((technology) => (
                  <span key={technology} className="tag-item">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-actions compact-actions">
                {project.githubUrl ? (
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                ) : null}
                {project.demoUrl ? (
                  <a href={project.demoUrl} className="project-link project-link-alt" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
