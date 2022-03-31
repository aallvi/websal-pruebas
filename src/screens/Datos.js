import React, { useState } from 'react'
import { GreyLabel } from '../components/contratoydatos/GreyLabel'
import { WhiteLabel } from '../components/contratoydatos/WhiteLabel'
import { Loading } from '../components/Loading';


export const Datos = () => {

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

  



  return (
    <div className='contenedorContrato' >


      {
        datos.nombre ?

         <>

        <div className='headerContrato' >
           <p >Mis Datos</p> 
        </div>

        

        <GreyLabel primerDato='Nombre' segundoDato={datos.nombre} />

        <WhiteLabel primerDato='Email' segundoDato={datos.email}  />

        <GreyLabel primerDato='Contraseña' segundoDato={datos.clave} />

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
