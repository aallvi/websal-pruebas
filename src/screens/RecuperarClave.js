import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactCodeInput from 'react-code-input';
import { useDispatch } from 'react-redux';
import { Loading } from '../components/Loading';
import { renuew } from '../store/actions/login.actions';
import Swal from 'sweetalert2'
import eye from '../assets/eye-outline.svg'
import eyeOff from '../assets/eye-off-outline.svg'



export const RecuperarClave = () => {





  const dispatch =  useDispatch()
   
   
  const [datos, setDatos] = useState({validacion:2});

  //  Variables primera etapa

  const [pe, setPe] = useState('');
  
 
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


  // console.log('mes',mes)

  //  Variables segunda Etapa

  const [codigo, setCodigo] = useState('');
  const [px, setClave] = useState('');
  const [pxAgain, setClaveAgain] = useState('');
  // console.log('qepasa',codigo)

  const [strcon, setStrcon] = useState('')

      // console.log('datosescritos',{pe,px,codigo})

    
    //   Primera Etapa Consulta
      const consultarDatos = async () => {
          
        if (  pe === 0  ) {
         
          Swal.fire({
            title: 'Completa todos los campos',
            text: 'Intentalo otra vez',
            confirmButtonColor:'#2ec1db',
            
          })
          return
        }

        try {
          setDatos({validacion:4})
          const peNumber = Number(pe)
            const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/recctsp.asp',
            {
                pe:peNumber
            });

            // console.log('Primera validacion',response.data.validacion)


              if(response.data.validacion ==='1'){

                setDatos({validacion:response.data.validacion})

                 

                
              } else if (response.data.validacion === 9) {

                
                Swal.fire({
                  title: 'Ya se envio un codigo de recuperacion',
                  text: 'Debes esperar 15 minutos para solicitar otro',
                  confirmButtonColor:'#2ec1db',
                  
                })
                 setDatos({validacion:2})
                      
              }
              
              else {
                
                Swal.fire({
                  title: 'Datos Incorrectos',
                  text: 'Intentalo otra vez',
                  confirmButtonColor:'#2ec1db',
                  
                })
                 setDatos({validacion:2})

              }
              
              
            

                
            } catch (error) {
            

              console.log(error)
                
            }


        }
 
        //  console.log('largoclave',px.length)
        const [aux, setAux] = useState('')

        console.log('aux',aux)
          
      // Segunda etapa enviamos pe y el codigo qe le llego al mail
       
        const segundaEtapa = async () => {
          
          if (  codigo === ''  ) {
           
            Swal.fire({
              title: 'Completa todos los campos',
              text: 'Intentalo otra vez',
              confirmButtonColor:'#2ec1db',
              
            })
            return
          }

          setAux(codigo)
  
          try {
            setDatos({validacion:4})
            const peNumber = Number(pe)
              const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/recctsp.asp',
              {
                  pe:peNumber,codigo
              });
  
              // console.log('segundavalidacion',response.data.validacion)

  
                if(response.data.validacion ==='1'){
  
                  setDatos({validacion:3})
  
                   
  
                  
                } else {
                 
                  Swal.fire({
                    title: 'Codigo Incorrecto',
                    text: 'Intentalo otra vez',
                    confirmButtonColor:'#2ec1db',
                    
                  })
                   setDatos({validacion:'1'})
  
                }
                
                
              
  
                  
              } catch (error) {
              
  
                console.log(error)
                  
              }
  
  
          }
    



        // Tercera Etapa Consulta

      const ingresar = async () => {

        if(px.includes("'")){
          
          Swal.fire({
            title: 'Intentalo otra vez',
            text: 'La contrase??a no puede tener comillas simples',
            confirmButtonColor:'#2ec1db',
            
          })
          return
         }

        if(px.includes(" ")){
          
          Swal.fire({
            title: 'La Clave no puede contener espacios',
            text: 'Intentalo otra vez',
            confirmButtonColor:'#2ec1db',
            
          })
          return
             
         }

        if ( px !== pxAgain) {
          
          Swal.fire({
            title: 'Claves deben ser iguales',
            text: 'Intentalo otra vez',
            confirmButtonColor:'#2ec1db',
            
          })
          return
        } 

        if (px.length < 4 || px.length >20 ){
        
          Swal.fire({
            title: 'Clave invalida',
            text: 'Debe tener entre 4 y 20 caracteres',
            confirmButtonColor:'#2ec1db',
            
          })
           return
        }
        

        try {
          setDatos({validacion:4})

          const peNumber = Number(pe)
            console.log('Datosenviados',{pe:peNumber,codigo:aux,px})
          // Validar clave entre 2 a 20 caracteres y que sean iguales

            const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/recctsp.asp',
            {
                pe:peNumber,codigo:aux,px
            });

            //  console.log('tercera validacion',response.data)
             

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





  //  console.log('pe',pe)

  

   const codePin = (codigo) => {
    setCodigo(codigo)
   }

   const pressEnterFirst = (e) => {
    if(e.key === 'Enter'){
      consultarDatos()
      
    }
  
  }
   const pressEnterTercera = (e) => {
    if(e.key === 'Enter'){
      ingresar()
      
    }
  
  }
    

  useEffect(() => {
     if(codigo.length === 4){
       setTimeout(() => {
        segundaEtapa()
        setCodigo('')
       }, 500);
      
     }


  }, [codigo])
  


  return (
   
    <div className='containerLogin animate__animated animate__fadeIn '>
      
      <div className='tituloRecuperar' >
      <p>Recupera tu Contrase??a
      </p>

      </div>
          
         { datos.validacion === '1' ?

              <div className='contenedorInput' >

              <p className='textoCodigoaMail' >Se ha enviado un c??digo a tu email</p>

              <label  > Codigo recibido </label>
              {/* <input className='inputCodigoRecibido' type='text' value={codigo} onChange={e => setCodigo(e.target.value) } /> */}
              <div className='codeInput' >
              <ReactCodeInput id="codigo" type='text' fields={4} value={codigo}   onChange={codePin}  />

              </div>





              <button className='continuar'  onClick={ segundaEtapa }  >
                <p> Continuar </p> 
              </button>





              </div> 
              
              : datos.validacion === 2 ?

              <div className='contenedorInput' >

                    

              <label  > C??digo de contrato </label>
              <input type='text' onKeyPress={pressEnterFirst} value={pe} onChange={e => setPe(e.target.value) } />






              <button className='continuar'  onClick={ consultarDatos }  >
                <p> Continuar </p> 
              </button>





              </div>  

              : datos.validacion === 3 ?

              <div className='contenedorInput' >

                    

              <label  > Nueva Contrase??a</label>
              <input type={mostrar}  onKeyPress={pressEnterTercera} value={px} onChange={e => setClave(e.target.value) } />

              <label className='textoRepitaClave' > Repita Nueva Contrase??a</label>
              <input type={mostrar}  onKeyPress={pressEnterTercera} value={pxAgain} onChange={e => setClaveAgain(e.target.value) } />


              <button className='mostrarBtn' onClick={() => ver() } >
                    { mostrar === 'password' ? 'Mostrar' : 'Ocultar' }  
                    <img  className='ver' src={ mostrar === 'password' ? eye : eyeOff } alt='ver' />

              </button>



              <button className='continuar' onClick={ ingresar }  >
                <p> Continuar </p> 
              </button>





              </div> 

              : <Loading />







         }
          

        

      




    </div>
    


  
  )
}