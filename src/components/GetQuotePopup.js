import React, { useState } from "react";
import Swal from "sweetalert2";
import "./GetQuotePopup.css";

const products = ["Just Exploring", "Interested", "Very Interested"];

const GetQuotePopup = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    product: "",
  });

  const [errors, setErrors] = useState({});

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === "name" && value.trim()) delete newErrors.name;
      if (name === "phone" && /^[0-9]{10}$/.test(value)) delete newErrors.phone;
      if (name === "email" && /^\S+@\S+\.\S+$/.test(value)) delete newErrors.email;
      if (name === "address" && value.trim()) delete newErrors.address;
      if (name === "product" && value.trim()) delete newErrors.product;

      return newErrors;
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10 digit phone number";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter valid email";

    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.product.trim()) newErrors.product = "Please select an option";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      onClose();
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please fill all fields correctly before submitting.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    try {
      const res = await fetch("/send-quote.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        onClose();
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your quote request has been submitted successfully.",
          confirmButtonColor: "#a1be28",
        });

        setForm({
          name: "",
          phone: "",
          email: "",
          address: "",
          product: "",
        });
        setErrors({});
      } else {
        throw new Error(data.message || "Server error");
      }
    } catch (err) {
      onClose();
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="pop-up-overlay">
      <div className="pop-up-modal">
        <span className="pop-up-close" onClick={onClose}>×</span>

        <h3 className="pop-up-title">Get a Quote</h3>

        <form className="pop-up-form" onSubmit={handleSubmit}>
          <div className="pop-up-field">
            <label className="pop-up-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="pop-up-input"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="pop-up-error">{errors.name}</span>}
          </div>

          <div className="pop-up-field">
            <label className="pop-up-label">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="pop-up-input"
              placeholder="Enter your phone number"
            />
            {errors.phone && <span className="pop-up-error">{errors.phone}</span>}
          </div>

          <div className="pop-up-field">
            <label className="pop-up-label">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="pop-up-input"
              placeholder="Enter your email"
            />
            {errors.email && <span className="pop-up-error">{errors.email}</span>}
          </div>

          <div className="pop-up-field">
            <label className="pop-up-label">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="pop-up-textarea"
              rows="3"
              placeholder="Enter your address"
            ></textarea>
            {errors.address && <span className="pop-up-error">{errors.address}</span>}
          </div>

          <div className="pop-up-field">
            <label className="pop-up-label">Select Options</label>
            <select
              name="product"
              value={form.product}
              onChange={handleChange}
              className="pop-up-input"
            >
              <option value="">Options</option>
              {products.map((p, i) => (
                <option key={i} value={p}>{p}</option>
              ))}
            </select>
            {errors.product && <span className="pop-up-error">{errors.product}</span>}
          </div>

          <button type="submit" className="pop-up-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetQuotePopup;