import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          We'd love to hear from you. Send us a message!
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
