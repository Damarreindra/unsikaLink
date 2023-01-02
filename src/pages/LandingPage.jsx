import React from 'react'
import NavbarLanding from '../components/NavbarLanding'
import Asean from '../components/Asean'
import Helps from '../components/Helps'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'


function LandingPage() {
  return (
    <div>
        <NavbarLanding />
        <Hero/>
        <div className="title-header">
        <h4>ASEAN YOUTH FORUM</h4>
        <p>Create a better world</p>
        </div>
        <Asean />
        <h4 className="title-header">FIND INFORMATIONS</h4>
        <Helps/>
        <Footer/>

    </div>
  )
}

export default LandingPage