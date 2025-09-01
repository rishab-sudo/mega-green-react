import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = 'First name is required';
    if (!formData.lastname.trim()) newErrors.lastname = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.inquiry.trim()) newErrors.inquiry = 'Please select an inquiry type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setErrors(prev => ({
      ...prev,
      [e.target.name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }

    try {
      const res = await fetch("sendMail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'We will get back to you shortly.',
          confirmButtonColor: '#05956c'
        });
        setFormData({ firstname: '', lastname: '', email: '', phone: '', inquiry: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later.',
          confirmButtonColor: '#05956c'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Could not send message. Try again.',
        confirmButtonColor: '#05956c'
      });
      console.error("Error sending form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="name-row">
        <div>
          <label className='form-label'>First Name</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>
        <div>
          <label className='form-label'>Last Name</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>
      </div>

      <div>
        <label className='form-label'>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label className='form-label'>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>

      <div className="inquiry-section">
        <label className="form-label">Select Inquiry</label>
        <div className="inquiry-options">
          <label>
            <input
              type="radio"
              name="inquiry"
              value="General"
              checked={formData.inquiry === 'General'}
              onChange={handleChange}
            />
            General
          </label>
          <label>
            <input
              type="radio"
              name="inquiry"
              value="Support"
              checked={formData.inquiry === 'Support'}
              onChange={handleChange}
            />
            Support
          </label>
          <label>
            <input
              type="radio"
              name="inquiry"
              value="Business"
              checked={formData.inquiry === 'Business'}
              onChange={handleChange}
            />
            Business
          </label>
        </div>
        {errors.inquiry && <p className="error">{errors.inquiry}</p>}
      </div>

      <div>
        <label className='form-label'>Message</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>

      <div className="form-actions">
        <button className="contact-submit-button" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
