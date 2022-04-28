import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { renuew } from '../store/actions/login.actions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import { Loading } from '../components/Loading';
import Swal from 'sweetalert2'

registerLocale('es', es)

export const PrimeraVez = () => {

  


    
  const dispatch =  useDispatch()
    
    
   const [datos, setDatos] = useState({validacion:2});

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

 
   //  Variables primera etapa
 
   const [pe, setPe] = useState('');
   const [empresaId, setEmpresaId] = useState('');
   const [date, setDate] = useState(new Date('1992-01-02'))
 
   
 
 
   const dia = date!= null ? Number(date.toString().split(' ')[2] ) : 'd'
   const mesText = date!= null ? date.toString().split(' ')[1] : 'm'
 
   let mes =
    mesText === 'Jan' ? 1 : mesText  === 'Feb' ? 2 : mesText  === 'Mar' ? 3 : mesText  === 'Apr' ? 4 : mesText  === 'May' ? 5 :
    mesText  === 'Jun' ? 6 : mesText  === 'Jul' ? 7 : mesText  === 'Aug' ? 8 : mesText  === 'Sep' ? 9 : mesText  === 'Oct' ? 10 :
    mesText  === 'Nov' ? 11 : 12
 
   const ano = date!= null ? Number(date.toString().split(' ')[3]) : 'a'
 
  //  console.log('mes',mes)

  //  console.log('dia',dia)
  //  console.log('ano',ano)
 
   //  Variables segunda Etapa
 
   const [codigo, setCodigo] = useState('');
   const [px, setClave] = useState('');
   const [pxAgain, setClaveAgain] = useState('');
 
   const [strcon, setStrcon] = useState('')
 
  //  console.log('pe',pe)
  //  console.log('empresaId',empresaId)
 
   
   
 
     
     //   Primera Etapa Consulta
       const consultarDatos = async () => {
           
         if (  pe === '' || empresaId=== '' ) {
          Swal.fire({
            title: 'Completa todos los campos',
            text: 'Intentalo otra vez',
            confirmButtonColor:'#2ec1db',
            
          })
           return
         }
 
         try {
           setDatos({validacion:3})
           const peNumber = Number(pe)
          //  console.log('peNumber',peNumber)
 
             const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/primeravez.asp',
             {
                 pe:peNumber,dia,mes,ano,empresaId
             });
 
            //  console.log('qe',response.data)
 
               if(response.data.validacion.length === 0){
                  
                  Swal.fire({
                    title: 'Datos Incorrectos',
                    text: 'Los datos ingresados no son correctos o ya ingreso por primera vez con su usuario',
                    confirmButtonColor:'#2ec1db',
                    
                  })
                  setDatos({validacion:2})
 
                 
               } else {
                 setDatos(response.data)
                 setCodigo(response.data.validacion)
 
               }
               
               
             
 
                 
             } catch (error) {
             
 
               console.log(error)
                 
             }
 
 
         }
  
          // console.log('largoclave',px.length)
 
         // Segunda Etapa Consulta
 
       const ingresar = async () => {
 
         if (  px === '' || codigo === '' ) {
          Swal.fire({
            title: 'Completa todos los campos',
            text: 'Intentalo otra vez',
            confirmButtonColor:'#2ec1db',
            
          })
           return
         }
 
         if(px.includes("'")){
           
           Swal.fire({
            title: 'Intentalo otra vez',
            text: 'Intentalo otra vez","La contraseña no puede tener comillas simples ',
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
            title: 'Las Claves deben ser iguales',
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
 
 
           // Validar clave entre 2 a 20 caracteres y que sean iguales
 
             const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/primeravez.asp',
             {
                 pe,px,codigo
             });
 
              // console.log('respuesta',response.data)
              
              if(response.data.validacion === 0){
             
               Swal.fire({
                title: 'Codigo incorrecto',
                text: 'Intentalo otra vez',
                confirmButtonColor:'#2ec1db',
                
              })
 
              } else {
 
               setStrcon(response.data.strCon)
               // Guardamos el token en el storage
                localStorage.setItem('token', response.data.strCon)
 
               // Validamos el token y entramos a la aplicacion
                 
               dispatch(renuew())
              }
 
             
 
                 
             } catch (error) {
               console.log(error)
                 
             }
 
 
         }
 
         const pressEnter = (e) => {
          if(e.key === 'Enter'){
            consultarDatos()
          }
        
        }
         const pressEnterSecond = (e) => {
          if(e.key === 'Enter'){
            ingresar()
          }
        
        }


  return (
  
    <div className='container' >
    <div className='containerLogin animate__animated animate__fadeIn'>

      
          <div className='tituloRecuperar' >
         <p>Primera vez</p>
         </div> 
         

          {
            datos.validacion.length > 1 ?

            <div className='contenedorInput' >

                    

              <label  > Nueva Contraseña</label>
              <input onKeyPress={pressEnterSecond} type={mostrar} value={px} onChange={e => setClave(e.target.value) } />

              <label  > Repita Nueva Contraseña</label>
              <input onKeyPress={pressEnterSecond} type={mostrar} value={pxAgain} onChange={e => setClaveAgain(e.target.value) } />


              <button className='mostrarBtn' onClick={() => ver() } >
                    { mostrar === 'password' ? 'Mostrar' : 'Ocultar' }  
                    </button>



              <button className='continuar' onClick={ () => ingresar() }  >
                <p> Continuar </p> 
              </button>





              </div> 

              : datos.validacion === 2 ?

              <div className='contenedorInput' >

                  

                      <label  > Código de contrato</label>
                      <input onKeyPress={pressEnter} type='text' value={pe} onChange={e => setPe(e.target.value) } />

                      <label  > Fecha de Nacimiento </label>
                      <div className="customDatePickerWidth">
                      <DatePicker onKeyPress={pressEnter} popperClassName='popperWidth' locale="es" selected={date} onChange={(date) => setDate(date)}/>

                      </div>
                      {/* COLOCAR DATEPICKER MAS COMPLETO DE https://reactdatepicker.com/ */}

                      <label> RUT Empresa </label>
                      <input type='text' onKeyPress={pressEnter} value={empresaId} onChange={e => setEmpresaId(e.target.value) } />


                      

                    

                      <button className='continuar' onClick={ () => consultarDatos() }  >
                        <p> Continuar </p> 
                      </button>



                </div> 

               : <Loading />
 



          }

        

      




    </div>
    


  </div>

  )
}
