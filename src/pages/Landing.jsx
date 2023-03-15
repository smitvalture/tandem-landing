import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ContactUs from '../components/ContactUs'
import Demo from '../components/Demo'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Mission from '../components/Mission'
import Section1 from '../components/Section1'
import Section3 from '../components/Section3'

const Landing = () => {
  return (
    <div className='px-8'>
      <Header />
      <Section1 />
      <Mission />
      <Section3 />
      <Demo />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Landing