import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Travel from './Components/Travel/Travel'
import Visit from './Components/Visit/Visit'

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Hero/> */}
      <Travel/>
      <Visit/>
      <Footer/>
    </>
  )
}

export default App
