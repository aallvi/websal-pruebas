import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes,BrowserRouter } from 'react-router-dom'
import { Login } from '../screens/Login'
import { PrimeraVez } from '../screens/PrimeraVez'
import { RecuperarClave } from '../screens/RecuperarClave'
import { renuew } from '../store/actions/login.actions'
import { NavigationLog } from './NavigationLog'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const Navigation = () => {


   

  return (
    <BrowserRouter>
    
     
    
      
      <Routes>


    
          
          <Route path="/"   element={
                 <PublicRoute>
                   <Login/>
                 </PublicRoute>


          } />
          <Route path="/PrimeraVez"   element={
                 <PublicRoute>
                   <PrimeraVez />
                 </PublicRoute>

          } />
          <Route path="/RecuperarClave"   element={
                 <PublicRoute>
                  <RecuperarClave />
                 </PublicRoute>

          } />

              

         
        <Route path="/*" element={
         
         <PrivateRoute>
          <NavigationLog />

         </PrivateRoute>
           
           }
           
            />
      




      </Routes>
   
    
    
    
    </BrowserRouter>
  )
}
