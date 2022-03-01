import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homescreen } from '../screens/Homescreen'

export const NavigationLog = () => {
  return (
    <>


    <Routes>

    <Route path="Homescreen" element={<Homescreen />} />

    </Routes>
    
    

    
    
    
    
    </>
  )
}
