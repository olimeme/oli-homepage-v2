import React, { useEffect } from "react";
import Biography from "../Biography";
import Experience from "../Experience";
import Footer from "../Footer";
import Projects from "../Projects";
import Education from "../Education";
import Skills from "../Skills/Skills";

const Main = () => {
  return (
    <>
      <Biography />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </>
  );
};

export default Main;
