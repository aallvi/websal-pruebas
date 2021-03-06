import React, { useEffect, useState } from 'react'
import { Logo } from '../components/Logo'
import { useDispatch, useSelector } from 'react-redux';
import { loadingAction, log } from '../store/actions/login.actions';
import 'animate.css';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Loading } from '../components/Loading';
import eye from '../assets/eye-outline.svg'
import eyeOff from '../assets/eye-off-outline.svg'




export const Login = () => {

  let navigate = useNavigate();

  const [pe, setPe] = useState("")
  const [px, setPx] = useState("")
   
  const loading = useSelector(state => state.login.loading)

  //  console.log(localStorage.getItem('token')) 




  // console.log('loading',loading)
  

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
   
  //  console.log('pasaporaca')

   dispatch(loadingAction())

   dispatch(log(pe,px))
   
   recuerdame()


   
}

const [remembUser, setRemembUser] = useState(false)

// console.log('rememberUser',remembUser)

        useEffect(() => {
          logrecuerdame()
        }, [])

      const recuerdame =  () => {
        if(remembUser){
             localStorage.removeItem('remember')
             localStorage.setItem('remember', pe)
        }
        if(!remembUser){
          localStorage.removeItem('remember')
            
        }
      }

      const logrecuerdame =  () => {
        const name =  localStorage.getItem('remember')
        setPe(name)
        if(name){
            setRemembUser(true)
        }
        
}

const pressEnter = (e) => {
  if(e.key === 'Enter'){
    sign()
  }

}

const [mostrar, setmostrar] = useState('password')


const ver = () => {

  if(mostrar === 'text'){

      setmostrar('password')

      return
  }

  if(mostrar === 'password'){

      setmostrar('text')
      
      return
  }

}



  return (
    

    
    <div className='container' >

        {
          loading ? <div className='marginTopLoading' ><Loading/></div>  :
          <>
        <div className='containerLogin animate__animated animate__fadeIn'>

                    <div className='contenedorLogo'>
                          <Logo/>

                    </div>

                    <div className='iniciar' >
                          <p>Inicia Sesi??n en <span>WebSal</span></p>
                     </div> 
                  

                    

                  <div className='contenedorInput' >

                                <label > C??digo contrato </label>
                                <input type='text' value={pe} onChange={e => setPe(e.target.value) } />
                                <div className='recuerdameContainer' >
                                  <p>Recuerdame</p>
                                  <input className='inputCheck' onKeyPress={pressEnter} type="checkbox" checked={remembUser} onChange={ () => setRemembUser(!remembUser)} />

                                </div>
                                 
                                      

                                <label> Clave </label>
                                <div className='contenedorClaveOjo'>

                                    <input type={mostrar} onKeyPress={pressEnter} value={px} onChange={e => setPx(e.target.value) } />
                                    
                                    <button className='mostrarBtnLogin' onClick={() => ver() } >
                                          <img className='ver' src={ mostrar === 'password' ? eye : eyeOff } alt='ver' />
                                    </button>


                                </div>
                                
                                            

                                <button type='button' className='ingresar' onClick={ sign} >
                                  <p>Ingresar</p> 
                                </button>


                                <button onClick={ () => navigate('/RecuperarClave') } className='recuperarClave marginTop' >
                                  <p className='textoRecuperarClave' > Recuperar Contrase??a </p> 
                                </button>

                                <button onClick={ () => navigate('/PrimeraVez') } className='recuperarClave' >
                                  <p className='textoPrimeraVez' >??Primera vez en WebSal? <span>Ingresa Aqui</span> </p> 
                                </button>


                  </div>






            </div>

          

          
          </>
        }


     


    </div>


  )
}
