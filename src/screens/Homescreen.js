import React from 'react'
import { useNavigate } from 'react-router-dom'
import websapp from '../assets/webceleste.png'
import googleplay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'


export const Homescreen = () => {
 
  let navigate = useNavigate()


  return (
    <div className='animate__animated animate__fadeIn'>
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
         <img src={googleplay} />

      </a>
      
      {/* Para cuando ya este en la playstore */}

      
      {/* <a href='https://play.google.com/store/apps/details?id=com.appwebsal' target='_blank' >
      <img className='appstore' src={appstore}  />


      </a> */}

      
     </div>

      
    

      </div>

    
    
    
    </div>
    
    
    
  )
}


{/* <a href='https://play.google.com/store/apps/details?id=com.appwebsal' target='_blank' > Aqui </a> */}