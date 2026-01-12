import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-container">
      <div className="about-card">
        <h1>About Us</h1>
        <p className="subtitle">
          Building modern, scalable, and user-friendly web applications
        </p>

        <p className="description">
          We specialize in creating high-quality web experiences using modern
          technologies like React. Our focus is on clean code, performance, and
          beautiful UI design.
        </p>

        <div className="about-features">
          <div className="feature">⚛️ React</div>
          <div className="feature">🎨 UI Design</div>
          <div className="feature">🚀 Performance</div>
        </div>
      </div>
    </section>
  );
}

export default About;
