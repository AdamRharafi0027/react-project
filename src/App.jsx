import React from 'react'
import './App.css'
import {Header, Hero, MostPopular, Products, Services, Footer} from './assets/Sections/index'


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <MostPopular />
      <Products />
      <Services />
      <Footer />
    </>
  )
}

export default App