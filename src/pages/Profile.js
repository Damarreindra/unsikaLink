import React from 'react'
import CardProfile from '../components/Card/cardProfile'
import Footer from '../components/Footer'
import RightBar from '../components/RightBar/RightBar'
import SidebarProfile from '../components/SidebarProfile'
import ProfileSlider from '../components/Slider/ProfileSlider'

function Profile() {
  return (
    <>
    <RightBar/>
    <SidebarProfile/>
    
    <div className="wrapper">
    <ProfileSlider/>
    <CardProfile/>
    </div>
    <Footer/>
    </>
  )
}

export default Profile