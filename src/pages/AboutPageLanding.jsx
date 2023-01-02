import React from 'react'
import NavbarLanding from '../components/NavbarLanding'
import Footer from '../components/Footer'
import About from '../components/About'

function AboutPageLanding() {
  return (
    <div>
         <NavbarLanding />
        <h3 className="title-header">About Us</h3>
        <About/>
<Footer />
    </div>
  )
}

export default AboutPageLanding