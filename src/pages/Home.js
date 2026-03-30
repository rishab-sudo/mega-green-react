import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeProperties from '../components/HomeProperties'
import { motion } from "framer-motion";
import Appartments from '../components/Appartments'
import Pnb from "../components/Pnb"

const Home = () => {
  return (
    <div>
      <HomeBanner />

   {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Stats />
      </motion.div> */}
      
      {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HomeAbout />
      </motion.div> */}

      
        <HomeProperties />
   

      {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <WorkFlow />
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* <TrendingProperty /> */}
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
     <ExclusiveSection/>
      </motion.div> */}
{/* 
        <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HomeResidence />
      </motion.div> */}
   
        <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Appartments />
      </motion.div>


      {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Facilities />
      </motion.div> */}


      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      
      </motion.div>


<Pnb/>
    </div>
  )
}

export default Home
