import React from 'react'
import { Link, Route, Routes,BrowserRouter } from 'react-router-dom'
import { Login } from '../screens/Login'
import { PrimeraVez } from '../screens/PrimeraVez'
import { RecuperarClave } from '../screens/RecuperarClave'
import { Navbar } from './Navbar'

export const Navigation = () => {
  return (
    <BrowserRouter>
    
     
    
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="PrimeraVez" element={<PrimeraVez />} />
        <Route path="RecuperarClave" element={<RecuperarClave />} />
      </Routes>
   
    
    
    
    </BrowserRouter>
  )
}
