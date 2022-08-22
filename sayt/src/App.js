import React from 'react'
import Globalstyle from './assets/style/global';
import Routing from './router/Routing';
import {BrowserRouter} from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>

      <Globalstyle /> 
      <Routing/>
    </BrowserRouter>
  )
}
