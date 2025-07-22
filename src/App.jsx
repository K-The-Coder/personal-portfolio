

import Header from "./page_sections/Header";
import Hero from "./page_sections/Hero";
import About from "./page_sections/About";
import Projects from "./page_sections/Projects";
import Contact from "./page_sections/Contact";
import Footer from "./page_sections/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main className="main-container">
        <section id="hero-section">
          <Hero />
        </section>

        <section id="about-section">
          <About />
        </section>

        <section id="projects-section">
          <Projects />
        </section>

        <section id="contact-section">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}
