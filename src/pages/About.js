import React from 'react'
import AboutBanner from '../components/AboutBanner'
import Luxury from '../components/Luxury'
import Testimonials from '../components/Testimonials'
import { motion } from "framer-motion";
import "./About.css"

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >  <AboutBanner />
      </motion.div>
{/*  */}
  <section className="aboutdemo-section">
      {/* Row 1 */}
      <div className="aboutdemo-row">
        <div className="aboutdemo-img-div">
          <img
            className='about-row1-img'
            src={require("../assets/images-hm.webp")}
            alt="About Us"
          />
        </div>
        <div className="aboutdemo-box">
          <h2>About Our Company</h2>
          <p>
            We provide the best services with a strong focus on quality
            and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="aboutdemo-row aboutdemo-reverse">
       
        <div className="aboutdemo-img-div demoabout">
          <img
          className='about-row2-img'
            src={require("../assets/images-hm.webp")}
            alt="Our Mission"
          />
        </div>
         <div className="aboutdemo-box">
          <h2>Our Mission</h2>
          <p>
            To innovate and deliver solutions that make everyday life
            easier and better for everyone.
          </p>
        </div>
      </div>
    </section>
{/*  */}
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
