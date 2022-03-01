import React, { useState } from 'react'
import { Logo } from '../components/Logo'
import { useDispatch } from 'react-redux';
import '../styles/login.css'
import { log } from '../store/actions/login.actions';
import 'animate.css';
export const Login = () => {



  const [pe, setPe] = useState("335712")
  const [px, setPx] = useState("")


  const dispatch = useDispatch()

const sign =() => {

  if(pe === '' || px === '' ){
      alert("Completa todos los campos","Intentalo otra vez", );
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

          <div className='contenedorInput' >

          <label> Código </label>
          <input type='text' value={pe} onChange={e => setPe(e.target.value) } />

          <label> Clave </label>
          <input type='text' value={px} onChange={e => setPx(e.target.value) } />


           <button onClick={ sign} > Ingresar </button>


          </div>

        




      </div>
      


    </div>


  )
}
