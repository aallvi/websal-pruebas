import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Loading } from '../components/Loading';
import { renuew } from '../store/actions/login.actions';
import '../styles/primeravez.css'


export const RecuperarClave = () => {





  const dispatch =  useDispatch()
   
   
  const [datos, setDatos] = useState({validacion:2});

  //  Variables primera etapa

  const [pe, setPe] = useState('');
  
 



  // console.log('mes',mes)

  //  Variables segunda Etapa

  const [codigo, setCodigo] = useState('');
  const [px, setClave] = useState('');
  const [pxAgain, setClaveAgain] = useState('');

  const [strcon, setStrcon] = useState('')

      console.log('datosescritos',{pe,px,codigo})

    
    //   Primera Etapa Consulta
      const consultarDatos = async () => {
          
        if (  pe === 0  ) {
          alert("Completa todos los campos","Intentalo otra vez", );
          return
        }

        try {
          setDatos({validacion:4})
          const peNumber = Number(pe)
            const response = await axios.post('https://www.websal.cl/api/autoconsulta/recctsp.asp',
            {
                pe:peNumber
            });

            console.log('Primera validacion',response.data.validacion)

              if(response.data.validacion ==='1'){

                setDatos({validacion:response.data.validacion})

                 

                
              } else if (response.data.validacion === 9) {

                alert("Ya se envio un codigo de recuperacion","Debes esperar 15 minutos para solicitar otro", );
                 setDatos({validacion:2})
                      
              }
              
              else {
                alert("Datos Incorrectos","Intentalo otra vez", );
                 setDatos({validacion:2})

              }
              
              
            

                
            } catch (error) {
            

              console.log(error)
                
            }


        }
 
        //  console.log('largoclave',px.length)
          
      // Segunda etapa enviamos pe y el codigo qe le llego al mail
       
        const segundaEtapa = async () => {
          
          if (  codigo === ''  ) {
            alert("Completa todos los campos","Intentalo otra vez", );
            return
          }
  
          try {
            setDatos({validacion:4})
            const peNumber = Number(pe)
              const response = await axios.post('https://www.websal.cl/api/autoconsulta/recctsp.asp',
              {
                  pe:peNumber,codigo
              });
  
              console.log('segundavalidacion',response.data.validacion)
  
                if(response.data.validacion ==='1'){
  
                  setDatos({validacion:3})
  
                   
  
                  
                } else {
                  alert("Codigo Incorrecto","Intentalo otra vez", );
                   setDatos({validacion:'1'})
  
                }
                
                
              
  
                  
              } catch (error) {
              
  
                console.log(error)
                  
              }
  
  
          }




        // Tercera Etapa Consulta

      const ingresar = async () => {

        if(px.includes("'")){
          alert("Intentalo otra vez","La contraseña no puede tener comillas simples ' '", );
          return
         }

        if(px.includes(" ")){
          alert("La Clave no puede contener espacios","Intentalo otra vez", );
          return
             
         }

        if ( px !== pxAgain) {
          alert("Claves deben ser iguales","Intentalo otra vez", );
          return
        } 

        if (px.length < 4 || px.length >20 ){
          alert("Clave invalida","Debe tener entre 4 y 20 caracteres", );
           return
        }
        

        try {
          setDatos({validacion:4})

          const peNumber = Number(pe)
            console.log('Datosenviados',{pe:peNumber,codigo,px})
          // Validar clave entre 2 a 20 caracteres y que sean iguales

            const response = await axios.post('https://www.websal.cl/api/autoconsulta/recctsp.asp',
            {
                pe:peNumber,codigo,px
            });

             console.log('tercera validacion',response.data)
             

              setStrcon(response.data)
              // Guardamos el token en el storage
              localStorage.setItem('token', response.data.strCon)

              // Validamos el token y entramos a la aplicacion
            //  setDatos({validacion:2})
                
              dispatch(renuew())
             

            

                
            } catch (error) {
              console.log(error)
                
            }


        }





   console.log('pe',pe)








  return (
    <div className='container' >
    <div className='containerLogin animate__animated animate__fadeIn'>

      
          <div className='iniciar' >
         <p>Recuperar Contraseña</p>
         </div> 
         
         { datos.validacion === '1' ?

              <div className='contenedorInput' >

              <p>Se ha enviado un codigo a tu email</p>

              <label  > Codigo recibido </label>
              <input type='text' value={codigo} onChange={e => setCodigo(e.target.value) } />






              <button className='continuar' onClick={ () => console.log('continuar') }  >
                <p> Continuar </p> 
              </button>





              </div> 
              
              : datos.validacion === 2 ?

              <div className='contenedorInput' >

                    

              <label  > Código de contrato </label>
              <input type='text' value={pe} onChange={e => setPe(e.target.value) } />






              <button className='continuar' onClick={ () => console.log('continuar') }  >
                <p> Continuar </p> 
              </button>





              </div>  

              : datos.validacion === 3 ?

              <div className='contenedorInput' >

                    

              <label  > Nueva Contraseña</label>
              <input type='text' value={px} onChange={e => setClave(e.target.value) } />

              <label  > Repita Nueva Contraseña</label>
              <input type='text' value={pxAgain} onChange={e => setClaveAgain(e.target.value) } />






              <button className='continuar' onClick={ () => console.log('continuar') }  >
                <p> Continuar </p> 
              </button>





              </div> 

              : <Loading />







         }
          

        

      




    </div>
    


  </div>
  )
}
