import React from "react"

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

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
  )
}