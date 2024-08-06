import React from 'react'
import Hero from './Hero/Hero.jsx'
import Travel from './Travel/Travel.jsx'
import Prices from './Prices/Prices.jsx'
import Visit from './Visit/Visit.jsx'
import BeforeFooter from './BeforeFooter/BeforeFooter.jsx'
import WhatYouGet from './WhatYouGet/WhatYouGet.jsx'

const Home = () => {
  return (
    <>
      <Hero/>
      <Travel/>
      <Visit/>
      <WhatYouGet/>
      <Prices/>
      <BeforeFooter/>
    </>
  )
}

export default Home
