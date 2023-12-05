import React from 'react'
import * as IoIcons from 'react-icons/io'
import * as CgIcons from 'react-icons/cg'
import * as AiIcons from 'react-icons/ai'

const id = localStorage.getItem('USER_ID')

export const SidebarData = 

[
    {
        title: 'Home',
        path:'/home',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'Profile',
        path:`/profile/${id}`,
        icon:<CgIcons.CgProfile/>,
        cName:'nav-text'
    }
]