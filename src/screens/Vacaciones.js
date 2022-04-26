import React, { useEffect, useState } from 'react'
import FlatList from 'flatlist-react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'


export const Vacaciones = () => {

  const strcon = useSelector(state => state.login.token)


  const [datos, setDatos] = useState({tomadas:0})

  const [vacacionesTomadas, setvacacionesTomadas] = useState([])

      const consultarDatos = async () => {

        
        try {

            const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/vacaciones.asp',
            {
                strcon
            });
              

            if(response.data.resultado){

              // Alert.alert("Sin información","No hay información disponible", );
              setDatos(response.data)

                return
            }
         
              setDatos(response.data)
              console.log(response.data)
            //  console.log('respuesta',response.data.tomadas)
            setvacacionesTomadas(response.data.tomadas)

                
            } catch (error) {
              console.log(error)
              Swal.fire({
                title: 'Error de conexion',
                text: 'Intentalo otra vez',
                confirmButtonColor:'#2ec1db',
                
              })
              
                
            }


    }


    useEffect(() => {
     
     consultarDatos()

    }, [])
    

   const vacas = [
    {
      desde:'04/01/2022',
      hasta:'05/03/2023',
      normales:'30',
      progresivas:'20'
    },{
     desde:'04/01/2022',
     hasta:'05/03/2023',
     normales:'30',
     progresivas:'20'
   },{
     desde:'04/01/2022',
     hasta:'05/03/2023',
     normales:'30',
     progresivas:'20'
   },{
     desde:'04/01/2022',
     hasta:'05/03/2023',
     normales:'30',
     progresivas:'20'
   },
   {
     desde:'04/01/2022',
     hasta:'05/03/2023',
     normales:'30',
     progresivas:'20'
   },
  ]




  return (
    <div className='VacationContainer animate__animated animate__fadeIn' >

       <div className='titulo' >
       <p >Informacion sobre tus Vacaciones</p>

       </div>

            <div className='contenedorDatosPrincipalesVacas' >

                    <div className='recuadros' >
                          <div className='contenedorLeftdata' >
                                <p>
                                  Inicio Contrato

                                </p>

                          </div>

                          <p className='textoRightData' > {datos.contratoDesde ? datos.contratoDesde : '' } </p>

                    </div>

                    <div className='recuadros' >
                      
                            <div className='contenedorLeftdata' >
                                <p>
                                  Normales a la Fecha
                                  
                                </p>

                          </div>
                          <p className='textoRightData' > {datos.saldoNormales ? datos.saldoNormales.replace('.',',') : datos.saldoNormales } {!datos.resultado ? 'Días Hábiles' : ''} </p>
                      
      
                    </div>

                    <div className='recuadros' >

                            <div className='contenedorLeftdata' >
                                  <p>
                                  Progresivas a la Fecha
                                    
                                  </p>

                          </div>

                          <p className='textoRightData' > {datos.saldoProgresivas} {!datos.resultado ? 'Días Hábiles' : ''} </p>


                    </div>

            </div>

           <div className='vacacionesTomadas' >
               <p  >Vacaciones Tomadas: <span>{vacacionesTomadas.length} </span> </p>

           </div>

            {/* Tabla */}

            <div className='contenidoTodoTabla' > 
                  {/* header tabla */}
                  <div className='headerTablaVacaciones' >

                    <p>Desde</p>
                    <p>Hasta</p>
                    <p>Normales</p>
                    <p>Progresivas</p>



                  </div>
                  

                  <div className='contenidoTablaVacaciones' >

                      <FlatList list={vacacionesTomadas} renderItem={(item,index) => 
                              <div key={index} className='divflat' >
                                  <p>{item.desde}</p>
                                  <p>{item.hasta}</p>
                                  <p>{item.normales}</p>
                                  <p>{item.progresivas}</p>


                              </div>
                      
                      
                      
                      
                            
                            }
                            
                            renderWhenEmpty={() =>
                              <div className='renderEmpty' >

                                <p>No haz tomado Vacaciones</p>

                              </div>
                            }
                            hasMoreItems
                            renderOnScroll
                            />



                  </div>


            </div>


      




    </div>
  )
}
