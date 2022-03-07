import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { renuew } from '../store/actions/login.actions';
import '../styles/primeravez.css'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import { Loading } from '../components/Loading';
registerLocale('es', es)

export const PrimeraVez = () => {

  


    
  const dispatch =  useDispatch()
    
    
   const [datos, setDatos] = useState({validacion:2});
 
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
 
   console.log('mes',mes)

   console.log('dia',dia)
   console.log('ano',ano)
 
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
           alert("Completa todos los campos","Intentalo otra vez", );
           return
         }
 
         try {
           setDatos({validacion:3})
           const peNumber = Number(pe)
           console.log('peNumber',peNumber)
 
             const response = await axios.post('https://www.websal.cl/api/autoconsulta/primeravez.asp',
             {
                 pe:peNumber,dia,mes,ano,empresaId
             });
 
             console.log('qe',response.data.validacion)
 
               if(response.data.validacion.length === 0){
                  alert("Datos Incorrectos","Los datos ingresados no son correctos o ya ingreso por primera vez con su usuario", );
                  setDatos({validacion:2})
 
                 
               } else {
                 setDatos(response.data)
                 setCodigo(response.data.validacion)
 
               }
               
               
             
 
                 
             } catch (error) {
             
 
               console.log(error)
                 
             }
 
 
         }
  
          console.log('largoclave',px.length)
 
         // Segunda Etapa Consulta
 
       const ingresar = async () => {
 
         if (  px === '' || codigo === '' ) {
           alert("Completa todos los campos","Intentalo otra vez", );
           return
         }
 
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
 
 
           // Validar clave entre 2 a 20 caracteres y que sean iguales
 
             const response = await axios.post('https://www.websal.cl/api/autoconsulta/primeravez.asp',
             {
                 pe,px,codigo
             });
 
              console.log('respuesta',response.data)
              
              if(response.data.validacion === 0){
               alert("Codigo incorrecto","Intentalo otra vez", );
 
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
 
         console.log('date',date)


  return (
  
    <div className='container' >
    <div className='containerPrimeraVez animate__animated animate__fadeIn'>

      
          <div className='iniciar' >
         <p>Primera vez</p>
         </div> 
         

          {
            datos.validacion.length > 1 ?

            <div className='contenedorInputPrimeraVez' >

                    

              <label  > Nueva Contraseña</label>
              <input type='text' value={px} onChange={e => setClave(e.target.value) } />

              <label  > Repita Nueva Contraseña</label>
              <input type='text' value={pxAgain} onChange={e => setClaveAgain(e.target.value) } />






              <button className='continuar' onClick={ () => console.log('continuar') }  >
                <p> Continuar </p> 
              </button>





              </div> 

              : datos.validacion === 2 ?

              <div className='contenedorInput' >

                  

                      <label  > Código </label>
                      <input type='text' value={pe} onChange={e => setPe(e.target.value) } />

                      <label  > Fecha de Nacimiento </label>

                      <DatePicker  locale="es" selected={date} onChange={(date) => setDate(date)}/>
                      {/* COLOCAR DATEPICKER MAS COMPLETO DE https://reactdatepicker.com/ */}

                      <label> RUT Empresa </label>
                      <input type='text' value={empresaId} onChange={e => setEmpresaId(e.target.value) } />


                      

                    

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
