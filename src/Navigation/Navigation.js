import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes,BrowserRouter } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { Login } from '../screens/Login'
import { PrimeraVez } from '../screens/PrimeraVez'
import { RecuperarClave } from '../screens/RecuperarClave'
import { renuew } from '../store/actions/login.actions'
import { NavigationLog } from './NavigationLog'

export const Navigation = () => {


  const dispatch =  useDispatch()


  const autenticado = useSelector(state => state.login.autenticado)

  console.log('autenticado?',autenticado);

  useEffect(() => {

      dispatch(renuew())
  
  }, []);

  if(autenticado === 'checking') return <Loading />
   

  return (
    <BrowserRouter>
    
     
    
      
      <Routes>
        <Route path="/" element={<Login />}  />
        <Route path="/PrimeraVez" element={<PrimeraVez />} />
        <Route path="/RecuperarClave" element={<RecuperarClave />} />



        <Route path="/*" element={<NavigationLog />} />






      </Routes>
   
    
    
    
    </BrowserRouter>
  )
}
