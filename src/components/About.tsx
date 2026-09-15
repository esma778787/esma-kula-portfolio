const focusAreas = [
  {
    index: "01",
    title: "AI Applications",
    description: "LLM integrations, prompt engineering ve AI-assisted workflows.",
  },
  {
    index: "02",
    title: "Backend Engineering",
    description: "Python, REST APIs, Flask, FastAPI ve veri tabanları.",
  },
  {
    index: "03",
    title: "Cloud & DevOps",
    description: "Microsoft Azure, containers, GitHub Actions, CI/CD ve monitoring.",
  },
  {
    index: "04",
    title: "Computer Vision",
    description: "YOLO dataset workflows, annotation tooling ve computer vision fundamentals.",
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
            Final-year Computer Engineering student olarak AI uygulamaları, backend geliştirme ve
            cloud engineering kesişiminde çalışıyorum.
          </p>
          <p>
            Python, Flask, FastAPI ve REST API deneyimimi LLM entegrasyonları, structured prompt
            workflows ve AI-assisted application flows ile birleştiriyorum. Erasmus+ simülasyonunda
            OpenRouter üzerinden motivasyon mektubu, CV üretimi ve başvuru değerlendirme akışları
            geliştirdim.
          </p>
            <p>
              Deneyimim ayrıca enterprise AI bağlamında RAG-based workflows, LLM grounding, computer
              vision ve Microsoft Azure çalışmalarını kapsıyor.
            </p>
          <p>
            Microsoft Azure, GitHub Actions, Docker ve Linux ile deployment, networking, identity,
            monitoring ve CI/CD süreçleri üzerinde uygulamalı çalışmalar yaptım.
          </p>
          <p>
            RoboGPT stajımda Python/Flask backend, Raspberry Pi/Linux ve Qt tabanlı annotation
            tooling ile YOLO ve Pascal VOC dataset workflows üzerinde çalıştım. Web & Search
            Technologies ise teknik profilimi destekleyen ikincil bir çalışma alanı.
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
