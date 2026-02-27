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

  const validate = () => {
    if (!form.name.trim()) {
      Swal.fire("Error", "Name is required", "error");
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      Swal.fire("Error", "Valid email is required", "error");
      return false;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      Swal.fire("Error", "Enter valid 10 digit phone number", "error");
      return false;
    }

    if (!form.subject.trim()) {
      Swal.fire("Error", "Subject is required", "error");
      return false;
    }

    if (!form.message.trim()) {
      Swal.fire("Error", "Message is required", "error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch("/send-form.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Success!", data.message, "success");

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      Swal.fire("Error!", err.message || "Server error", "error");
    }
  };

  return (
    <div className="contact-form">
      <h3 className="contact-form-title">Send Us a Message</h3>

      <form className="contact-form-form" onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <div className="contact-form-field">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="contact-form-field">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="contact-form-row">
          <div className="contact-form-field">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter 10 digit phone number"
              required
            />
          </div>

          <div className="contact-form-field">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
            />
          </div>
        </div>

        <div className="contact-form-field">
          <label>Your Message</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message..."
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