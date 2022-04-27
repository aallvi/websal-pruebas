import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'



var validator = require("email-validator");

export const ChangeEmail = () => {


      const strcon = useSelector(state => state.login.token)
      const { state } = useLocation();


     
  const [estadoCambio, setEstadoCambio] = useState(0)



  const [nuevoEmail, setNuevoEmail] = useState('')
  const [repeatEmail, setRepeatEmail] = useState('')

  let navigate = useNavigate();


  const changeEmail = async() => {

    

      if(!validator.validate(nuevoEmail)){
 

       Swal.fire({
            title: 'Ingresa un Email valido',
            text: 'Intentalo otra vez',
            confirmButtonColor:'#2ec1db',
            
          })
 
       return
      }
 
 
      if(nuevoEmail !== repeatEmail){
 

       Swal.fire({
            title: 'Emails ingresados son diferentes',
            text: 'Intentalo otra vez',
            confirmButtonColor:'#2ec1db',            
       })
 
 
 
       return
      }
 
 
 
         try {
 
            const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/email.asp', {
             strcon, email:nuevoEmail
            })
 
            console.log('respuesta',response.data)
            setEstadoCambio(response.data.resultado)
           
         } catch (error) {
           console.log(error)
         }
 
 
    }
 
    const volver = () => {
     setEstadoCambio(0)
     setNuevoEmail('')
     setRepeatEmail('')
     navigate('/datos')
   }




  return (
    <>    
           {
                 estadoCambio !== 0 ?

                 <>


                 <div className='titulo marginTopLoading' >

                      <p>Email cambiado satisfactoriamente</p>



                  </div>

                  <button onClick={volver} className='buttonCertificado cambiarEmailBtn' >

                          <p>Volver</p>  

                  </button>

                  </>

                 :
                 <>


                        <div className='titulo' >

                              <p>Cambiar Email</p>

                        </div>


                        <div className='contenedorCambio'>
                              <label> Email actual </label>
                              <input type='text' placeholder={state}  disabled={true} />

                        </div>

                        <div className='contenedorCambio'>
                              <label> Nuevo email  </label>
                              <input type='text'  onChange={e => setNuevoEmail(e.target.value)} />

                        </div>


                        <div className='contenedorCambio'>
                              <label> Repita el nuevo email </label>
                              <input type='text'  onChange={e => setRepeatEmail(e.target.value)}   />

                        </div>



                        <button onClick={changeEmail} className='buttonCertificado cambiarEmailBtn' >

                              <p>Cambiar Email</p>  

                        </button>



                 </>
           }


         


    </>
  )
}
