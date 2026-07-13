import React, { useEffect } from "react";
import "@/App.css";
import { Toaster } from "sonner";
import BackgroundGradients from "./components/portfolio/BackgroundGradients";
import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Skills from "./components/portfolio/Skills";
import Experience from "./components/portfolio/Experience";
import Projects from "./components/portfolio/Projects";
import Achievements from "./components/portfolio/Achievements";
import Resume from "./components/portfolio/Resume";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";

function App() {
  useEffect(() => {
    document.title = "Sukanand Yedle | Senior iOS Developer";
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Senior iOS Developer specializing in Swift, SwiftUI, UIKit, Banking, FinTech, Firebase, and scalable enterprise mobile applications."
    );
    setMeta("theme-color", "#000000");
  }, []);

  return (
    <div className="App relative min-h-screen bg-black text-white overflow-x-hidden" data-testid="app-root">
      <BackgroundGradients />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(20,20,22,0.9)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
            backdropFilter: "blur(20px)",
          },
        }}
      />
    </div>
  );
}

export default App;
