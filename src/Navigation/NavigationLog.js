import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Homescreen } from '../screens/Homescreen'
import { Liquidaciones } from '../screens/Liquidaciones'
import { Licencias } from '../screens/Licencias'
import { Certificados } from '../screens/Certificados'
import { Contrato } from '../screens/Contrato'
import { Datos } from '../screens/Datos'
import { Vacaciones } from '../screens/Vacaciones'
import { NavBar } from '../components/NavBar'
import { ChangePass } from '../screens/CambiarDatos/ChangePass'
import { ChangeEmail } from '../screens/CambiarDatos/ChangeEmail'


export const NavigationLog = () => {




  return (
    
    <>
    
    <NavBar/>
    
    <div className='contenedor' >

    <Routes>

     



        <Route path='/home' element={<Homescreen />} />
        <Route path='/liquidaciones' element={<Liquidaciones />} />
        <Route path='/licencias' element={<Licencias />} />
        <Route path='/certificados' element={<Certificados />} />
        <Route path='/contrato' element={<Contrato />} />
        <Route path='/datos' element={<Datos />} />
        <Route path='/vacaciones' element={<Vacaciones />} />
        <Route path='/cambiarClave' element={<ChangePass />} />
        <Route path='/cambiarEmail' element={<ChangeEmail />} />

        <Route
        path="*"
        element={<Navigate to="/" replace />}
        />



    </Routes>


    </div>

    
    
    

    
    </>
    
    
   
  )
}
