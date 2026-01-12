import React, { useState } from "react";
import "./Home.css";
import LearnMore from "./LearnMore";

function Home() {
      const [showLearnMore, setShowLearnMore] = useState(false);

  return (
    <>
    <section className="home">
      <div className="home-content">
        <h1>
          Build <span>Beautiful</span> Web Experiences
        </h1>

        <p>
          Learn React step by step and create modern, scalable, and
          high-performance web applications with clean UI and best practices.
        </p>

        <div className="home-buttons">
          <button className="primary-btn">Get Started</button>
          <button
           className="secondary-btn"
           onClick={()=> setShowLearnMore(true)}
           >Learn More</button>
        </div>
      </div>

      <div className="home-image">
        <div className="image-card">
          ⚛️ React <br /> Modern UI <br /> Fast & Scalable
        </div>
      </div>
    </section>

     {/* LearnMore Component inside Home */}
      {showLearnMore && (
        <LearnMore onClose={() => setShowLearnMore(false)} />
      )}
      </>
  );
}

export default Home;
