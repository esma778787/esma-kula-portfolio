const technologyItems = [
  "AI Engineer",
  "Python",
  "LLM",
  "REST API",
  "Computer Vision",
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
  "Power BI",
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
