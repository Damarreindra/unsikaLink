import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './Sidebar.css'
import AddPost from './AddPost'

function Sidebar() {
    const [sidebar, setSidebar] = useState(true)
    const uname = localStorage.getItem('uname')
    const profileImg = localStorage.getItem('img')
    const activeLink = 'text-success'
    const normalLink = 'text-dark'
    const id = localStorage.getItem('id')
    const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <div className="navbar">
        <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <h2 style={{marginLeft:'240px'}}>Home</h2>
       
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
            <li className="navbar-toggle">  
                <img src="https://user-images.githubusercontent.com/80618060/209421785-aa078881-83eb-41e3-ae28-9b05ee0d5dc0.png" style={{width:'40px'}} alt="" srcset="" />
                <h2>Tweeder</h2>
                <Link to='#' className='menu-bars' style={{display:'none'}}>
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            {SidebarData.map((item, index)=>{
                return(
                    <li key={index} className={item.cName}>
                        <NavLink to={item.path}
                        className={({isActive})=>
                        isActive ? activeLink : normalLink
                        }
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </NavLink>
                    </li>
                )
            })}
            <li id='add-post-btn'>
                <AddPost/>
            </li>
            <li>
            <Link className='text-dark' style={{textDecoration:'none'}} to={`/profile/${id}`} id='profile-info'>
                <img id='profile-img' src={profileImg} alt="" />
                <h2 id='profile-uname'>{uname}</h2>
                </Link>
            </li>
        </ul>
            
    </nav>
    </>
  )
}

export default Sidebar