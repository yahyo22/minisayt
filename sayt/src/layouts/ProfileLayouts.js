import React from 'react'
import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import ProfileNavbar from '../components/profilenavbar/ProfileNavbar'
import ProfileSidebar from "../components/profileSidebar/Profilesidebar"

export default function ProfileLayouts() {
  return (
    <div className='container'>
      <Styledlayout>
        
    <ProfileNavbar/>
    <div className='profile_layout_main'>
    <ProfileSidebar/>
    <Outlet/>
    </div>

    </Styledlayout>

    </div>
  )
}
const Styledlayout =styled.div`
    .profile_layout_main{
      display: flex;
      gap: 40px;
      margin: 30px;
    }
  
`
