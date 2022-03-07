import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes,BrowserRouter } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { Homescreen } from '../screens/Homescreen'
import { Login } from '../screens/Login'
import { PrimeraVez } from '../screens/PrimeraVez'
import { RecuperarClave } from '../screens/RecuperarClave'
import { renuew } from '../store/actions/login.actions'
import { NavigationLog } from './NavigationLog'
import { PrivateRoute } from './PrivateRoute'
import '../styles/normalize.css'

export const Navigation = () => {


   

  return (
    <BrowserRouter>
    
     
    
      
      <Routes>


      <Route path="/PrimeraVez" element={<PrimeraVez />} />
      
        <Route path="/login"  element={<Login />}  />

        {/* <Route path="/PrimeraVez" element={<PrimeraVez />} /> */}
        <Route path="/RecuperarClave" element={<RecuperarClave />} />
          
              

         
        <Route path="*" element={
         
         <PrivateRoute>
          <NavigationLog />

         </PrivateRoute>
           
           }
           
            />
      




      </Routes>
   
    
    
    
    </BrowserRouter>
  )
}
