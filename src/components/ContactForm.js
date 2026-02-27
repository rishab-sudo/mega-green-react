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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim())
      newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Invalid email";

    if (!form.phone.trim())
      newErrors.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10 digit phone";

    if (!form.subject.trim())
      newErrors.subject = "Subject is required";

    if (!form.message.trim())
      newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch("/send-contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.status) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: data.message,
          confirmButtonColor: "#a1be28",
        });

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: data.message,
          confirmButtonColor: "#d33",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Please try again later.",
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