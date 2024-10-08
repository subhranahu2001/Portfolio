import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Expertise from './components/Expertise'
import Services from './components/Services'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Expertise/>
      <Services/>
      <Footer/>
    </>
  )
}

export default App
