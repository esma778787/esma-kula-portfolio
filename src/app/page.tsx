import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { SeoGeo } from "@/components/SeoGeo";
import { Skills } from "@/components/Skills";
import { TechnologyMarquee } from "@/components/TechnologyMarquee";

const stats = [
  { value: "10+", label: "Projects" },
  { value: "4", label: "AI Focus Areas" },
  { value: "15+", label: "Technologies" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="page-shell">
        <Hero />

        <section className="stats-section" aria-label="İstatistikler">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <TechnologyMarquee />

        <Projects />

        <Experience />

        <Skills />

        <About />

        <SeoGeo />

        <Contact />

        <Footer />
      </main>
    </>
  );
}
