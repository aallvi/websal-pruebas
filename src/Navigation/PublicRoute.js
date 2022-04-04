import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { renuew } from '../store/actions/login.actions';

export const PublicRoute = ({children}) => {

    const dispatch =  useDispatch()

    // useSelector(state => state.login.autenticado)
  const autenticado = 'autenticado'
  

  console.log('autenticado?',autenticado);



  return autenticado === 'autenticado' ? <Navigate to='/home' />  : children 
}
