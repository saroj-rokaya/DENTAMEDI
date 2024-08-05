import React from 'react'
import Hero from './Hero/Hero.jsx'
import Travel from './Travel/Travel.jsx'
import Prices from './Prices/Prices.jsx'
import Visit from './Visit/Visit.jsx'
import BeforeFooter from './BeforeFooter/BeforeFooter.jsx'

const Home = () => {
  return (
    <>
      <Hero/>
      <Travel/>
      <Visit/>
      <Prices/>
      <BeforeFooter/>
    </>
  )
}

export default Home
