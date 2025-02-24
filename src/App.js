import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projets from "./pages/Projects";
import ProjetDetails from "./pages/ProjectDetails";
import CreateSpace from "./pages/CreateSpace";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projets />} />
        <Route path="/projects/:projectId" element={<ProjetDetails />} />
        <Route path="/Create-space" element={<CreateSpace />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
