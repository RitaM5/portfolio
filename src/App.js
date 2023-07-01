import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div className=" overflow-hidden">
      <NavBar />
      <Home />
      <Services></Services>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
