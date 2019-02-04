import React from "react";
import "./landing-page.css";

export default function LandingPage() {
  return (
    <div>
      <header role="banner">
        <h1>Welcome to Deltio</h1>
        <h3>Create and share beautiful digital postcards.</h3>
      </header>

      <section className="section1">Instruction 1</section>
      <section>Instruction 2</section>
      <section className="section3">Instruction 3</section>

      <footer role="contentinfo">Footer</footer>
    </div>
  );
}
