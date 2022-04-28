import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { renuew } from '../store/actions/login.actions';

export const PublicRoute = ({children}) => {

  const autenticado = useSelector(state => state.login.autenticado)
  

  // console.log('autenticado?',autenticado);



  return autenticado === 'autorizado' ? <Navigate to='/home' />  : children 
}
