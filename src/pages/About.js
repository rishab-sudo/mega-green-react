import React from 'react'
import AboutBanner from '../components/AboutBanner'
import Luxury from '../components/Luxury'
import Testimonials from '../components/Testimonials'
import { motion } from "framer-motion";
import AboutDemo from "../components/AboutDemo"
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
  <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >  <AboutDemo />
      </motion.div>
     
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
