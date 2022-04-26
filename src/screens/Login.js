import React, { useState } from 'react'
import { Logo } from '../components/Logo'
import { useDispatch } from 'react-redux';

import { log } from '../store/actions/login.actions';
import 'animate.css';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'




export const Login = () => {

  let navigate = useNavigate();

  const [pe, setPe] = useState("")
  const [px, setPx] = useState("")


  const dispatch = useDispatch()

const sign =() => {

  if(pe === '' || px === '' ){
    Swal.fire({
      title: 'Completa todos los campos',
      text: 'Intentalo otra vez',
      confirmButtonColor:'#2ec1db',
      
    })
      return
  }
   

  

  dispatch(log(pe,px))


}


   console.log(pe)

   console.log(px)
    



  return (
    

    
    <div className='container' >
      <div className='containerLogin animate__animated animate__fadeIn'>

          <div className='contenedorLogo'>
                <Logo/>



            </div>
            <div className='iniciar' >
           <p>Inicia Sesión en <span>WebSal</span></p>
           </div> 
           

            

          <div className='contenedorInput' >

          

          <label > Código contrato </label>
          <input type='text' value={pe} onChange={e => setPe(e.target.value) } />

          <label> Clave </label>
          <input type='password'  value={px} onChange={e => setPx(e.target.value) } />


           <button type='button' className='ingresar' onClick={ sign} >
             <p>Ingresar</p> 
               </button>


           <button onClick={ () => navigate('/RecuperarClave') } className='recuperarClave' >
            <p className='textoRecuperarClave' > Recuperar Contraseña </p> 
           </button>

           <button onClick={ () => navigate('/PrimeraVez') } className='recuperarClave' >
            <p className='textoPrimeraVez' > Ingresar por primera vez </p> 
           </button>

         



          </div>

        




      </div>
      


    </div>


  )
}
