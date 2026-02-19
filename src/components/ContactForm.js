import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h3 className="contact-form-title">Send Us a Message</h3>

      <form className="contact-form-form">
        <div className="contact-form-row">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-form-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-form-input"
            required
          />
        </div>

        <div className="contact-form-row">
          <input
            type="tel"
            placeholder="Phone Number"
            className="contact-form-input"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="contact-form-input"
            required
          />
        </div>

        <textarea
          placeholder="Your Message"
          className="contact-form-textarea"
          rows="5"
          required
        ></textarea>

        <button type="submit" className="contact-form-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
