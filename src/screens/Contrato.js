import React from 'react'
import { GreyLabel } from '../components/contratoydatos/GreyLabel'
import { WhiteLabel } from '../components/contratoydatos/WhiteLabel'


export const Contrato = () => {




  return (
    <div className='contenedorContrato' >
        
        <div className='headerContrato' >
           <p >Mi Contrato</p> 
        </div>

        <GreyLabel primerDato='Empresa' segundoDato='Websal Sistemas de Gestion S.P.A' />

        <WhiteLabel primerDato='Tipo de Contrato' segundoDato='Indefinido'  />

        <GreyLabel primerDato='Inicio del Contrato' segundoDato='01/08/2020' />

        <WhiteLabel primerDato='Termino del Contrato' segundoDato='-'  />

        <GreyLabel primerDato='Centro de Costo' segundoDato='Administracion' />

        <WhiteLabel primerDato='Sucursal' segundoDato='Matriz'  />

        <GreyLabel primerDato='Cargo' segundoDato='Jefe de Proyecto' />

        <WhiteLabel primerDato='AFP' segundoDato='Uno'  />

        <GreyLabel primerDato='Cuenta 2' segundoDato='$ 0' />

        <WhiteLabel primerDato='APV' segundoDato='$ 0'  />

        <GreyLabel primerDato='Isapre' segundoDato='Vida Tres' />

        <WhiteLabel primerDato='CCAF' segundoDato='SIN CCAF'  />

        <GreyLabel primerDato='Mutual' segundoDato='SIN MUTUAL (ISL)' />

        <WhiteLabel primerDato='Plan' segundoDato='UF 5,67'  />

        <GreyLabel primerDato='Mutual' segundoDato='0,93' />














    </div>
  )
}
