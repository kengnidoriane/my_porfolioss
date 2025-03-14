import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { Toaster } from "sonner";

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Toaster position="top-right" />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
