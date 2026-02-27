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
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    if (!form.phone.trim())
      newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10 digit phone number";

    if (!form.email.trim())
      newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter valid email";

    if (!form.address.trim())
      newErrors.address = "Address is required";

    if (!form.product.trim())
      newErrors.product = "Please select an option";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      Swal.fire("Error", "Please fix errors before submitting", "error");
      return;
    }

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
          phone: "",
          email: "",
          address: "",
          product: "",
        });

        setErrors({});
        onClose();
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      Swal.fire("Error!", err.message || "Server error", "error");
    }
  };

  return (
    <div className="pop-up-overlay">
      <div className="pop-up-modal">
        <span className="pop-up-close" onClick={onClose}>×</span>

        <h3>Get a Quote</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="pop-up-error">{errors.name}</span>}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="pop-up-error">{errors.phone}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="pop-up-error">{errors.email}</span>}

          <textarea
            name="address"
            placeholder="Address"
            rows="3"
            value={form.address}
            onChange={handleChange}
          ></textarea>
          {errors.address && <span className="pop-up-error">{errors.address}</span>}

          <select
            name="product"
            value={form.product}
            onChange={handleChange}
          >
            <option value="">Select Option</option>
            {products.map((p, i) => (
              <option key={i} value={p}>{p}</option>
            ))}
          </select>
          {errors.product && <span className="pop-up-error">{errors.product}</span>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetQuotePopup;