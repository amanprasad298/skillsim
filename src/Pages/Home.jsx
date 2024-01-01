import React from 'react'
import Hero from '../Components/Hero/Hero'
import Future from '../Components/Future/Future'
import Video from '../Components/Video/Video'
import Card from '../Components/Card/Card'
import Sponsor from '../Components/Sponsor/Sponsor'
import ContactFooter from '../Components/ContactFooter/ContactFooter'
import Transf from '../Components/Transf/Transf'
import UpcomingProgram from '../Components/UpcomingProgram/UpcomingProgram'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Future/>
      <Video/>
      <Card/>
      <Transf/>
      <Sponsor/>
      <UpcomingProgram/>
      <ContactFooter/>
    </div>
  )
}

export default Home
