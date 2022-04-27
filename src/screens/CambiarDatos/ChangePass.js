import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const ChangePass = () => {
     
    let navigate = useNavigate()

  
    const [mostrar, setmostrar] = useState('password')

    const [data, setData] = useState({claveActual:'',nuevaClave:'',repetirClave:''})

    console.log(data)

    const strcon = useSelector(state => state.login.token)

    const [estadoCambio, setEstadoCambio] = useState(2)

    const changePassword = async() => {

        const {claveActual,nuevaClave,repetirClave} = data
 
       //  console.log('aer',nuevaClave.replace(" ",""))
 
        if(claveActual.length === 0 || nuevaClave.length === 0 || repetirClave.length === 0){
           alert("Completa todos los campos","Intentalo otra vez", );
           return
        }
 
        if(nuevaClave.includes("'")){
         alert("Intentalo otra vez","La contraseña no puede tener comillas simples ' '", );
         return
        }
 
        if(nuevaClave.includes(" ")){
         alert("Intentalo otra vez","La contraseña no puede tener espacios", );
         return
        }
   
 
        if (nuevaClave.length < 4 || nuevaClave.length >20 ){
          alert("Clave invalida","Debe tener entre 4 y 20 caracteres", );
          return
        }
 
         if( nuevaClave !== repetirClave ) {
           alert("Claves deben ser iguales","Intentalo otra vez", );
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
                 alert("Contraseña actual incorrecta","Intentalo otra vez", );
 
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
                    <input onChange={e => setData({...data,claveActual:e.target.value}) } type={mostrar} />

                    </div>
                    <div className='contenedorCambio'>
                    <label> Nueva contraseña  </label>
                    <input onChange={e => setData({...data,nuevaClave:e.target.value}) } type={mostrar} />

                    </div>
                    <div className='contenedorCambio'>
                    <label> Repita la nueva contraseña </label>
                    <input onChange={e => setData({...data,repetirClave:e.target.value}) } type={mostrar} security={true} />

                    </div>


                    <button className='mostrarBtn' onClick={() => ver() } >
                    { mostrar === 'password' ? 'Mostrar' : 'Ocultar' }  
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
