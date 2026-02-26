import React, { useState } from "react";
import Swal from "sweetalert2";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/send-contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your message has been sent successfully.",
          confirmButtonColor: "#a1be28",
        });

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Server error");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="contact-form">
      <h3 className="contact-form-title">Send Us a Message</h3>

      <form className="contact-form-form" onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <div className="contact-form-field">
            <label className="contact-form-label">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="contact-form-input"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-field">
            <label className="contact-form-label">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="contact-form-input"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="contact-form-row">
          <div className="contact-form-field">
            <label className="contact-form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="contact-form-input"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-field">
            <label className="contact-form-label">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              className="contact-form-input"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="contact-form-field">
          <label className="contact-form-label">Your Message</label>
          <textarea
            name="message"
            placeholder="Type your message here..."
            className="contact-form-textarea"
            rows="5"
            value={form.message}
            onChange={handleChange}
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