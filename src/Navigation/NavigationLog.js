import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homescreen } from '../screens/Homescreen'
import { Liquidaciones } from '../screens/Liquidaciones'
import { Licencias } from '../screens/Licencias'
import { Certificados } from '../screens/Certificados'
import { Contrato } from '../screens/Contrato'
import { Datos } from '../screens/Datos'
import { Vacaciones } from '../screens/Vacaciones'
import { NavBar } from '../components/NavBar'
import './NavigationLog.css'

export const NavigationLog = () => {




  return (
    
    <>
    
    <NavBar/>
    
    <div className='container' >
    <Routes>

     



<Route path='/' element={<Homescreen />} />
<Route path='/liquidaciones' element={<Liquidaciones />} />
<Route path='/licencias' element={<Licencias />} />
<Route path='/certificados' element={<Certificados />} />
<Route path='/contrato' element={<Contrato />} />
<Route path='/datos' element={<Datos />} />
<Route path='/vacaciones' element={<Vacaciones />} />





</Routes>


    </div>

    
    
    

    
    </>
    
    
   
  )
}
