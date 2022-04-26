import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GreyLabel } from '../components/contratoydatos/GreyLabel'
import { WhiteLabel } from '../components/contratoydatos/WhiteLabel'
import Swal from 'sweetalert2'
import { Loading } from '../components/Loading'


export const Contrato = () => {

  const strcon = useSelector(state => state.login.token)

  const [datos, setDatos] = useState({})


    const consultarDatos = async () => {
        try {

            const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/contrato.asp',
             {
                strcon
             });

             if(response.data.afp){
              setDatos(response.data)
             }

             console.log('resp',response.data)
                
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

    <>
    


      {datos.desde ? 
      
      <div className='contenedorContrato animate__animated animate__fadeIn' >

      <div className='headerContrato' >
           <p >Mi Contrato</p> 
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 79 1440 320">
           <path fill="#B3F5FE" fillOpacity="1" d="M0,256L120,256C240,256,480,256,720,234.7C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
        </div>

        <GreyLabel primerDato='Empresa' segundoDato={datos.razonSocial} />

        <WhiteLabel primerDato='Tipo de Contrato' segundoDato={datos.tipo}  />

        <GreyLabel primerDato='Inicio del Contrato' segundoDato={datos.desde} />

        <WhiteLabel primerDato='Termino del Contrato' segundoDato={datos.hasta}  />

        <GreyLabel primerDato='Centro de Costo' segundoDato={datos.cc} />

        <WhiteLabel primerDato='Sucursal' segundoDato={datos.sucursal}  />

        <GreyLabel primerDato='Cargo' segundoDato={datos.cargo} />

        <WhiteLabel primerDato='AFP' segundoDato={datos.afp}  />

        <GreyLabel primerDato='Cuenta 2' segundoDato={datos.cuenta2} />

        <WhiteLabel primerDato='APV' segundoDato={datos.apv}  />

        <GreyLabel primerDato='Isapre' segundoDato={datos.isapre} />

        <WhiteLabel primerDato='CCAF' segundoDato={datos.ccaf}  />

        <GreyLabel primerDato='Mutual' segundoDato={datos.mutual} />

        <WhiteLabel primerDato='Plan' segundoDato={`UF ${datos.planUf.replace('.',',')}`}  />

        <GreyLabel primerDato='Tasa de Accidentes' segundoDato={datos.tasaAccidentes.replace('.',',')} />
      
      
      </div>


        :

          <div className='marginTopLoading' >
            <Loading />
          </div> 


      
    
    
      }
        
    

    </>
  )
}
