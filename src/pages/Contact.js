import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import { FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import { SiLibreofficewriter } from "react-icons/si";
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Container fluid className="contact-page">
      <Container className="contact-content-container">
        
        <div className='contact-tag-heading-div'>
          <p className='page-tag-heading'>CONTACT</p>
        </div>
        <div className='contact-page-heading-div'>
          <h2 className='page-heading '>Reach Us At Anytime</h2>
          <h5 style={{ marginTop: "12px" }}>
            Have questions or need any help? We’re here to help you with that
          </h5>
        </div>

        {/* Section 1 */}
        <section className="contact-main-section">

          {/* Left: One Big Black Info Box */}
          <div className="contact-info-section">
            <div className="big-info-box">
              <h3 className="big-info-heading ">Contact Information</h3>

              {/* Phone */}
              <div className="info-box">
                <div className='info-box-icon-div'>
                  <FaPhoneVolume className="info-icon" />
                </div>
                <p>+91 9557077742, +91 8979177743</p>
                <a href="tel:+919557077742" className="contact-info-btn">Call</a>
              </div>

              {/* Email */}
              <div className="info-box">
                <div className='info-box-icon-div'>
                  <FaEnvelope className="info-icon" />
                </div>
                <p>contact@vardaanev.com</p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@vardaanev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-btn"
                >
                  Email
                </a>
              </div>

              {/* Address */}
              <div className="info-box">
                <div className='info-box-icon-div'>
                  <SiLibreofficewriter className="info-icon" />
                </div>
                <p>
                  Bandia Road, Parsakhera Industrial Area,<br />
                  Bareilly-243122, Uttar Pradesh, India
                </p>
                <a 
                  href="https://www.google.com/maps/place/Bandia+Road,+Parsakhera+Industrial+Area,+Bareilly,+Uttar+Pradesh+243122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-btn"
                >
                  View Map
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="form-container">
            <ContactForm />
          </div>
        </section>

        {/* Section 2 - Google Map */}
        <section className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </section>

      </Container>
    </Container>
  );
};

export default Contact;
