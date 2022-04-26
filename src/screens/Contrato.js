import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GreyLabel } from '../components/contratoydatos/GreyLabel'
import { WhiteLabel } from '../components/contratoydatos/WhiteLabel'
import Swal from 'sweetalert2'


export const Contrato = () => {

  const strcon = useSelector(state => state.login.token)

  const [datos, setDatos] = useState({})


    const consultarDatos = async () => {
        try {

            const response = await axios.post('https://www.websal.com/api/autoconsulta/contrato.asp',
             {
                strcon
             });

             if(response.data.afp){
              setDatos(response.data)
             }
                
            } catch (error) {
              
              Swal.fire({
                title: 'Error de conexion',
                text: 'Intentalo otra vez',
                confirmButtonColor:'#2ec1db',
                
              })
              
                
            }


    }
      useEffect(() => {
          

        consultarDatos()


      }, [])




  return (
    <div className='contenedorContrato animate__animated animate__fadeIn' >
        
        <div className='headerContrato' >
           <p >Mi Contrato</p> 
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 79 1440 320">
           <path fill="#B3F5FE" fill-opacity="1" d="M0,256L120,256C240,256,480,256,720,234.7C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
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
