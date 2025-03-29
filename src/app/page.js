// src/app/page.js
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import "./page.module.css";

export default function HomePage() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
