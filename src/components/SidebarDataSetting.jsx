import React from 'react'
import { CiSettings } from "react-icons/ci";


const id = localStorage.getItem('USER_ID')

export const SidebarDataSetting = 

[
    {
        title: 'Settings',
        path:'/settings',
        icon:<CiSettings/>,
        cName:'nav-text'
    }

]