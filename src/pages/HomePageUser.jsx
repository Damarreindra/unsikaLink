import React from 'react'
import CardUser from '../components/CardUser'
import NavbarUser from '../components/NavbarUser'
import Footer from '../components/Footer'


function HomePageUser() {
  return (
    
    <div>
      <NavbarUser />
      <h3 className="title-header">Threads Feed</h3>
      <div className="button-add">
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-success" type="button">Create an Article</button>
      </div>
      </div>
      <CardUser />
      <Footer />

    </div>
  )
}

export default HomePageUser