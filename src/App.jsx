import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar.jsx";
import Resume from "./pages/Resume.jsx";
import Footer from "./pages/Footer.jsx";

const App = () => {
  return (
    <>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/contact" element={<Contact />} />
      <Route  path="/resume" element={<Resume />}/>
    </Routes>
    <Footer />
    </>
  );
};

export default App;