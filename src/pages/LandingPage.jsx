import React from 'react'
import NavbarLanding from '../components/NavbarLanding'
import Asean from '../components/Asean'
import Helps from '../components/Helps'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import FooterLanding from '../components/FooterLanding'


function LandingPage() {
  return (
    <div>
        <NavbarLanding />
        <Hero/>
        <FooterLanding/>

    </div>
  )
}

export default LandingPage