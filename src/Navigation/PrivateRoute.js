import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { renuew } from '../store/actions/login.actions';

export const PrivateRoute = ({children}) => {


    // useSelector(state => state.login.autenticado)
    const autenticado = useSelector(state => state.login.autenticado)

  

  // console.log('autenticado?',autenticado);



  return autenticado === 'autorizado' ? children : <Navigate to='/' /> 
}
