const focusAreas = [
  {
    index: "01",
    title: "SEO & Search",
    description: "Content SEO, On-Page SEO, Technical SEO ve GEO.",
  },
  {
    index: "02",
    title: "Cloud & DevOps",
    description: "Microsoft Azure, GitHub, CI/CD, networking ve monitoring.",
  },
  {
    index: "03",
    title: "AI & Automation",
    description: "Generative AI, LLM entegrasyonları, prompt engineering ve agent tabanlı geliştirme.",
  },
  {
    index: "04",
    title: "Software Engineering",
    description: "Backend, web, mobil ve gömülü sistem geliştirme.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="section-heading">
        <p className="section-kicker">About</p>
        <h2 id="about-heading">Hakkımda</h2>
      </div>

      <div className="about-layout">
        <div className="about-copy-block">
          <p>
            Bilgisayar mühendisliği altyapımı yazılım geliştirme, DevOps, yapay zekâ ve arama
            teknolojileriyle birleştiriyorum.
          </p>
          <p>
            Teknik çalışmalarımın yanında web içerik yönetimi ve SEO odaklı içerik süreçlerinde de
            uygulamalı deneyim kazandım. Bu nedenle yalnızca yazılım veya yalnızca içerik tarafına
            odaklanan bir profil yerine; web altyapısı, içerik görünürlüğü ve yapay zekâ
            teknolojileri arasındaki ilişkiyi anlayabilen multidisipliner bir yaklaşım geliştirmeye
            çalışıyorum.
          </p>
          <p>
            Microsoft Azure, GitHub ve DevOps teknolojileri üzerinde gerçekleştirdiğim çalışmalar
            sayesinde web uygulamalarının deployment, DNS, HTTP, networking, monitoring ve
            performans katmanlarını teknik olarak inceleme fırsatı buldum.
          </p>
          <p>
            SEO tarafında ise Content SEO ve On-Page SEO uygulamalarında deneyim sahibiyim.
            Technical SEO ve GEO alanlarında mevcut teknik altyapımı kullanarak araştırma,
            uygulama ve test çalışmalarımı sürdürüyorum.
          </p>
        </div>

        <div className="about-focus-grid" aria-label="Odak alanları">
          {focusAreas.map((item) => (
            <article key={item.index} className="about-focus-item">
              <span className="focus-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
