import React, { useEffect, useState } from 'react'
import { GreyLabel } from '../components/contratoydatos/GreyLabel'
import { WhiteLabel } from '../components/contratoydatos/WhiteLabel'
import { Loading } from '../components/Loading';
import pencil from '../assets/pencil-outline.svg'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2'


export const Datos = () => {


  const strcon = useSelector(state => state.login.token)



    const consultarDatos = async () => {
        try {

            const response = await axios.post('https://www.websal.com/api/autoconsulta/datos.asp',
             {
                strcon
             });

             if(response.data.nombre){
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




  const [datos, setDatos] = useState({
    nombre:'Alvaro Leiva',
    email:'aleiva97@gmail.com',
    clave:'*****',
    RUT:'19605692-0',
    celular:'569 62121886',
    genero:'Masculino',
    direccion:'Carlos Dickens 2150, La Reina',
    fecha:'16/01/1997',
    nacionalidad:'Chilena',
    estadocivil:'Soltero'
  })

  let navigate = useNavigate();



  return (
    <div className='contenedorContrato animate__animated animate__fadeIn' >


      {
        datos.nombre ?

         <>

        <div className='headerContrato' >
        <p >Mis Datos</p> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 79 1440 320">
          <path fill="#B3F5FE" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        </div>

        

        <GreyLabel primerDato='Nombre' segundoDato={datos.nombre} />

        <div className='whiteLabel'>
            <div className='contendorPencil' >
            <p className='texto' >Email </p>

            <button className='botonPencil' onClick={ () => navigate('/cambiarEmail')} >
            <img src={pencil} alt='pencil' />

            </button>

            </div>
            <p className='textoDos' >{datos.email}</p>
            

        </div>
  

        <div className='greyLabel'>
            <div className='contendorPencil' >
            <p className='texto' >Contraseña </p>

            <button className='botonPencilClave' onClick={ () => navigate('/cambiarClave')} >
            <img src={pencil} alt='pencil' />

            </button>

            </div>
            <p className='textoDos' >{datos.clave}</p>
            

        </div>

        <WhiteLabel primerDato='RUT' segundoDato={datos.RUT}  />

        <GreyLabel primerDato='Celular' segundoDato={datos.celular} />

        <WhiteLabel primerDato='Género' segundoDato={datos.genero}  />

        <GreyLabel primerDato='Dirección' segundoDato={datos.direccion} />

        <WhiteLabel primerDato='Fecha de Nacimiento' segundoDato={datos.fecha}  />

        <GreyLabel primerDato='Nacionalidad' segundoDato={datos.nacionalidad} />

        <WhiteLabel primerDato='Estado Civil' segundoDato={datos.estadocivil} />
         
         </>

         : <Loading />
      }
        
        





    </div>
  )
}
