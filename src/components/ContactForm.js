import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h3 className="contact-form-title">Send Us a Message</h3>

      <form className="contact-form-form">
        <div className="contact-form-row">
          <div className="contact-form-field">
            <label className="contact-form-label">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="contact-form-input"
              required
            />
          </div>

          <div className="contact-form-field">
            <label className="contact-form-label">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="contact-form-input"
              required
            />
          </div>
        </div>

        <div className="contact-form-row">
          <div className="contact-form-field">
            <label className="contact-form-label">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="contact-form-input"
              required
            />
          </div>

          <div className="contact-form-field">
            <label className="contact-form-label">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="contact-form-input"
              required
            />
          </div>
        </div>

        <div className="contact-form-field">
          <label className="contact-form-label">Your Message</label>
          <textarea
            placeholder="Type your message here..."
            className="contact-form-textarea"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-form-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;