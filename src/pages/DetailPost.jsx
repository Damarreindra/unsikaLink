import React from 'react'
import DetailPosts from '../components/DetailPost'
import RightBar from '../components/RightBar/RightBar'
import Sidebar from '../components/Sidebar'
import SidebarTweed from '../components/SidebarTweed'

function DetailPost() {
  return (
    <>
    <SidebarTweed />
    <RightBar/>
    <DetailPosts/>
    </>
  )
}

export default DetailPost