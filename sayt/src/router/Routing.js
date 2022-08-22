import React from 'react'
import {Navigate , Route , Routes} from "react-router-dom"

//pages
 import Tests from "../modules/profile/tests/Tests"
 import  Achievments    from "../modules/profile/achievments/Achievments"
 import   Payment   from "../modules/profile/payment/Payment"
 import   Settings  from "../modules/profile/settings/Settings"

 //layouts
 import ProfileLayouts from '../layouts/ProfileLayouts'
import Login from '../modules/auth/login/Login'
import Register from '../modules/auth/register/Register'

export default function Routing() {
  return (
    <Routes>
        <Route path='profile'element={<ProfileLayouts />} >
        <Route path='tests'element={<Tests />}/>
        <Route path='achievments' element={<Achievments/>} />
        <Route path='payment'element={<Payment/>} />
        <Route path='settings'element={<Settings/>} />
        </Route>
        <Route path='auth'>
        <Route path='login'  element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        </Route>
        <Route path='*'element={<Navigate to="/profile/tests" />}/>
    </Routes> 
  )
}
 