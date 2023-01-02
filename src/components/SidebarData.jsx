import React from 'react'
import * as IoIcons from 'react-icons/io'
import * as CgIcons from 'react-icons/cg'
import * as AiIcons from 'react-icons/ai'

const id = localStorage.getItem('id')

export const SidebarData = 

[
    {
        title: 'Home',
        path:'/home',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'Explore',
        path:'/aboutpageuser',
        icon:<AiIcons.AiFillCompass/>,
        cName:'nav-text'
    },
    {
        title: 'Profile',
        path:`/profile/${id}`,
        icon:<CgIcons.CgProfile/>,
        cName:'nav-text'
    }
]