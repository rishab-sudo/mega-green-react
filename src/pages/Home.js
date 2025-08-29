import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeAbout from '../components/HomeAbout'
import Homeproduct from '../components/HomeProduct'
import WorkFlow from '../components/WorkFlow'
import Stats from '../components/Stats'
import TrendingProperty from '../components/TrendingProperty'
import ExclusiveSection from '../components/ExclusiveSection'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <HomeAbout/>
      <Homeproduct/>
      <WorkFlow/>
      <Stats/>
      <TrendingProperty/>
      <ExclusiveSection/>
      <Testimonials/>
    </div>
  )
}

export default Home
