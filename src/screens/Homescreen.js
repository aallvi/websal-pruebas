import React from 'react'
import { useNavigate } from 'react-router-dom'
import websapp from '../assets/Webapp.webp'
import googleplay from '../assets/googleplay.webp'
import appstore from '../assets/appstore.webp'


export const Homescreen = () => {
 
  let navigate = useNavigate()


  return (
    <>
         <div className='titulo' >
         <p >Portal de Autoconsulta de Websal</p>
         </div> 

      <div className='contenedorApp' >
       
       <div className='contenedorWebApp' > 
       <img src={websapp} width='160' />

       </div>


      <p className='primer' >Descargar la App de Autoconsulta </p>
      <p className='frase' >Accede a tus datos laborales donde y cuando quieras</p>
     

     <p >Encuentrala en:</p>
     <div className='contendorAppstores' >
      
      <a href='https://play.google.com/store/apps/details?id=com.appwebsal' target='_blank'  >
         <img src={googleplay} width='160' />

      </a>

      <a href='https://play.google.com/store/apps/details?id=com.appwebsal' target='_blank' >
      <img className='appstore' src={appstore} width='160' />


      </a>

      
     </div>

      
    

      </div>

    
    
    
    </>
    
    
    
  )
}


{/* <a href='https://play.google.com/store/apps/details?id=com.appwebsal' target='_blank' > Aqui </a> */}