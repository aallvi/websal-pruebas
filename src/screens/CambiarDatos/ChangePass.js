import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import eye from './eye-outline.svg'
import eyeOff from './eye-off-outline.svg'


export const ChangePass = () => {
     
    let navigate = useNavigate()

  
    const [mostrar, setmostrar] = useState('password')

    const [data, setData] = useState({claveActual:'',nuevaClave:'',repetirClave:''})

    // console.log(data)

    const strcon = useSelector(state => state.login.token)

    const [estadoCambio, setEstadoCambio] = useState(2)

    const changePassword = async() => {

        const {claveActual,nuevaClave,repetirClave} = data
 
       //  console.log('aer',nuevaClave.replace(" ",""))
 
        if(claveActual.length === 0 || nuevaClave.length === 0 || repetirClave.length === 0){
           
           Swal.fire({
            title: 'Completa todos los campos',
            text: 'Intentalo otra vez',
            confirmButtonColor:'#2ec1db',
            
          })
           return
        }
 
        if(nuevaClave.includes("'")){
         Swal.fire({
          title: 'Intentalo otra vez',
          text: 'La contraseña no puede tener comillas simples ',
          confirmButtonColor:'#2ec1db',
          
        })
         return
        }
 
        if(nuevaClave.includes(" ")){
        
         Swal.fire({
          title: 'Intentalo otra vez',
          text: 'La contraseña no puede tener espacios',
          confirmButtonColor:'#2ec1db',
        })
         return
        }
   
 
        if (nuevaClave.length < 4 || nuevaClave.length >20 ){
         
          Swal.fire({
            title: 'Clave invalida',
            text: 'Debe tener entre 4 y 20 caracteres',
            confirmButtonColor:'#2ec1db',
          })
          return
        }
 
         if( nuevaClave !== repetirClave ) {
          
           Swal.fire({
            title: 'Claves deben ser iguales',
            text: 'Intentalo otra vez',
            confirmButtonColor:'#2ec1db',
          })
           return 
         } 
 
         try {
 
           
 
             const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/cts.asp',
             {
               strcon,actual: claveActual,nueva:nuevaClave
             });
 
           //  console.log('respuesta a cambio de clave',response.data)
               
               if(response.data.resultado === '1'){
                  setEstadoCambio(1)
               } else {
                 
                 Swal.fire({
                  title: 'Contraseña actual incorrecta',
                  text: 'Intentalo otra vez',
                  confirmButtonColor:'#2ec1db',
                })
 
               }
 
             } catch (error) {
             
 
               console.log(error)
                 
             }
 
    }



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


    const volver = () => {
     navigate('/datos')
            
    }

    const pressEnter = (e) => {
      if(e.key === 'Enter'){
        changePassword()
      }
    
    }


  return (
    <>

        {
            estadoCambio === 2 ? 

            <>

                    <div className='titulo ' >

                         <p>Cambiar Contraseña</p>

                    </div>


                    <div className='contenedorCambio'>
                    <label> Contraseña actual </label>
                    <input onKeyPress={pressEnter} onChange={e => setData({...data,claveActual:e.target.value}) } type={mostrar} />

                    </div>
                    <div className='contenedorCambio'>
                    <label> Nueva contraseña  </label>
                    <input onKeyPress={pressEnter} onChange={e => setData({...data,nuevaClave:e.target.value}) } type={mostrar} />

                    </div>
                    <div className='contenedorCambio'>
                    <label> Repita la nueva contraseña </label>
                    <input onKeyPress={pressEnter} onChange={e => setData({...data,repetirClave:e.target.value}) } type={mostrar} security={true} />

                    </div>


                    <button className='mostrarBtn' onClick={() => ver() } >
                    { mostrar === 'password' ? 'Mostrar' : 'Ocultar' }  
                    <img  className='ver' src={ mostrar === 'password' ? eye : eyeOff } alt='ver' />
                    </button>


                    <button onClick={changePassword} className='buttonCertificado cambiarClaveBtn' >
                    
                    <p>Cambiar Contraseña</p>  

                    </button>

            </>


            :


            <>

                    <div className='titulo marginTopLoading' >

                    <p>Contraseña cambiada satisfactoriamente</p>

                    </div>

                    <button onClick={volver} className='buttonCertificado cambiarEmailBtn' >

                          <p>Volver</p>  

                    </button>



            </>



        }


         

    </>
  )
}
