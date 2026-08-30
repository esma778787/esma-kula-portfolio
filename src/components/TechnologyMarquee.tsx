const technologyItems = [
  "Microsoft Azure",
  "GitHub",
  "GitHub Actions",
  "GitHub Copilot",
  "Docker",
  "Python",
  "FastAPI",
  "Flask",
  "C#",
  "Flutter",
  "MongoDB",
  "MSSQL",
  "REST API",
  "HTML",
  "CSS",
  "JavaScript",
  "SEO",
  "GEO",
  "AI",
];

export function TechnologyMarquee() {
  const repeatedItems = [...technologyItems, ...technologyItems];

  return (
    <div className="technology-marquee-wrap" aria-label="Teknoloji bandı">
      <div className="technology-marquee" aria-live="polite">
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="technology-pill">
            {item}
            {index < repeatedItems.length - 1 ? (
              <span className="technology-separator" aria-hidden="true">
                •
              </span>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
