import React from "react";
import Image from "next/image";
import Foto from "../asset/foto.png";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div
      id="home"
      className="flex flex-col min-h-screen bg-gradient-to-tr from-[#0b1e2a] to-[#19405a] "
    >
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Home */}
      <Home />

      {/* About */}
      <About />

      {/* Services */}
      <Services />

      {/* Skills */}
      <Skills />

      {/* Latest Project Section */}
      <Project />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
