import React from "react";
import "./LearnMore.css";

function LearnMore({ onClose }) {
  return (
    <div className="learnmore-overlay">
      <div className="learnmore-card">
        <h2>Why Learn React?</h2>
        <p>
          React helps you build fast, scalable, and maintainable user interfaces.
          It is widely used in the industry and powers modern web applications.
        </p>

        <ul>
          <li>⚛️ Component-based architecture</li>
          <li>🚀 High performance</li>
          <li>♻️ Reusable UI</li>
          <li>🌍 Huge community support</li>
        </ul>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default LearnMore;
