import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import PageTopBanner from "../components/PageTopBanner";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
   <PageTopBanner
        title="Contact Us"
        currentPage="Contact Us"
        backgroundImage={require("../assets/banner/Banner2.jpeg")}
      />
    <section className="contact-us">
      <Container>
        {/* TOP INFO BOXES */}
        <Row className="contact-us-box-row">
          <Col lg={4} md={6} sm={12}>
            <div className="contact-us-box">
              <div className="contact-us-icon-box">
                <FaPhoneAlt />
              </div>
              <h5 className="contact-us-box-title">Phone</h5>
              <p className="contact-us-box-main">(+91) 8447620822</p>
              <p className="contact-us-box-desc">
                Call us for any product or service related queries.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="contact-us-box">
              <div className="contact-us-icon-box">
                <FaEnvelope />
              </div>
              <h5 className="contact-us-box-title">Email</h5>
              <p className="contact-us-box-main"> santoshpolyfab@gmail.com</p>
              <p className="contact-us-box-desc">
                Send us your requirements and we’ll get back to you.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="contact-us-box">
              <div className="contact-us-icon-box">
                <FaMapMarkerAlt />
              </div>
              <h5 className="contact-us-box-title">Address</h5>
              <p className="contact-us-box-main">
              Vill: Navadavan, Faridpur-243503. Bareilly (UP)
              </p>
              <p className="contact-us-box-desc">
                Visit our office for detailed discussions and meetings.
              </p>
            </div>
          </Col>
        </Row>

        {/* CONTACT FORM */}
        <div className="contact-us-form-wrapper">
          <ContactForm />
        </div>

        {/* GOOGLE MAP */}
 <div className="contact-us-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3511.263998718808!2d79.51399507549057!3d28.3508670758197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIxJzAzLjEiTiA3OcKwMzAnNTkuNyJF!5e0!3m2!1sen!2sin!4v1772103086533!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
</div>
      </Container>
    </section>
    </>
  );
};

export default ContactUs;
