import React from 'react'
import { Container } from 'react-bootstrap';
import Best from '../components/Best';
import Luxury from '../components/Luxury'
import Testimonials from '../components/Testimonials'
import { motion } from "framer-motion";
import PageTopBanner from "../components/PageTopBanner";

import "./About.css"

const About = () => {
  return (
    <>
      <PageTopBanner
        title="About Us"
        currentPage="About Us"
        backgroundImage={require("../assets/banner/Banner2.jpeg")}
      />

 
{/* section 1 */}
<section className="aboutdemo-section">
  <Container className="about-section1-container">
    <div className="about-section1-text">
      <h2>About Our Company</h2>
      <p>
        Each apartments has been individually designed to maximise space and
        light. Smart Home Technology installed as standard in each apartment
        putting you in total control of your home at the touch of a button from
        wherever you might be.
      </p>
    </div>

    <div className="about-section1-stats">
      {[
        { label: "Offices", value: 40 },
        { label: "Penthouses", value: 60 },
        { label: "Rentals", value: 80 },
        { label: "Apartments", value: 90 },
      ].map((item, index) => (
        <div className="about-stat-item" key={index}>
          {/* Label ABOVE line */}
          <div className="about-stat-top">
            <span className="about-stat-label">{item.label}</span>
            <span className="about-stat-value">{item.value}%</span>
          </div>

          {/* Line with outline */}
          <div className="about-stat-line-bg">
            <motion.div
              className="about-stat-line-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      ))}
    </div>
  </Container>
</section>

{/* section 1 end */}
<Best/>
      <Luxury />
{/*  */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>





    </>
  )
}

export default About
