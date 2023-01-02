import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import Footer from '../components/Footer'
import About from '../components/About'

function AboutPageAdmin() {
  return (
    <div className="content">
      <NavbarAdmin />
      <h3 className="title-header">About Us</h3>
      <About />
      <Footer />
    </div>
  )
}

export default AboutPageAdmin