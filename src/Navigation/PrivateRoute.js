import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { renuew } from '../store/actions/login.actions';

export const PrivateRoute = ({children}) => {

    const dispatch =  useDispatch()

    // useSelector(state => state.login.autenticado)
  const autenticado = 'autenticadoo'
  

  console.log('autenticado?',autenticado);

//   useEffect(() => {

//       dispatch(renuew())
  
//   }, []);

//   if(autenticado === 'checking') return <Loading />



{/* <Navigate to='/login' /> */}

  return autenticado === 'autenticado' ? children : <Navigate to='/login' /> 
}
