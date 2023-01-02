import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import NavbarUser from '../components/NavbarUser'

import ParticlesBackground from '../components/ParticlesBackground'
import Sidebar from '../components/Sidebar'



function AboutPage() {
  return (
    <div>
        <Sidebar />
        <h3 className="title-header text-white">About Us</h3>

        <h3 className="title-header">About Us</h3>
        <About />
        <Footer />
    </div>
  )
}

export default AboutPage