import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="card">
      <Info />
      <div className="container">
        <About />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}
