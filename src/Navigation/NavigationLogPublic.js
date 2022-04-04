import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../screens/Login'
import { PrimeraVez } from '../screens/PrimeraVez'
import { RecuperarClave } from '../screens/RecuperarClave'

export const NavigationLogPublic = () => {
  return (

    <>
      <Routes>
    
            <Route path="/login"  element={<Login />}  />

            
            <Route path="/PrimeraVez" element={<PrimeraVez />} />
            

            {/* <Route path="/PrimeraVez" element={<PrimeraVez />} /> */}
            <Route path="/RecuperarClave" element={<RecuperarClave />} />
      
    </Routes>
    </>
  
  )
}
