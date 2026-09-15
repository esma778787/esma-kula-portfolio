import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2 id="skills-heading">Teknik Yetkinlikler</h2>
        <p className="section-copy">
          AI uygulamaları, backend servisleri, Azure altyapısı ve computer vision çalışmalarımda kullandığım teknik alanlar.
        </p>
      </div>

      <div className="skills-grid" aria-label="Teknik yetkinlik kategorileri">
        {skillCategories.map((category) => (
          <article key={category.title} className="skill-card">
            <div className="skill-card-header">
              <p className="skill-subtitle">{category.subtitle}</p>
              <h3>{category.title}</h3>
            </div>

            <p className="skill-description">{category.description}</p>

            <ul className="skill-list" aria-label={`${category.title} yetkinlik listesi`}>
              {category.skills.map((skill) => (
                <li key={skill.name} className="skill-item-row">
                  <div className="skill-name-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className={`skill-level skill-level-${skill.level.replace(/\s+/g, "-").toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
