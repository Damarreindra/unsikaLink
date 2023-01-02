import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import Footer from '../components/Footer'
import CardAdmin from '../components/CardAdmin'

import AdminCards from '../components/Card/admin'
import Form from 'react-bootstrap/Form';
import ParticlesBackground from '../components/ParticlesBackground'


function HomePageAdmin() {
  return (
    <div className="content">
        <NavbarAdmin />
        <h3 className="title-header">Show/Hide Threads</h3>

        <ParticlesBackground/>
        <AdminCards/>

        <CardAdmin />

        <Footer />
    </div>
  )
}

export default HomePageAdmin