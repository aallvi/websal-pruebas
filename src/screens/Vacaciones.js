import React from 'react'
import FlatList from 'flatlist-react';


export const Vacaciones = () => {

   const vacas = [{
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
    <div className='titulo' >
      <p>Informacion sobre tus Vacaciones</p>

            <div className='contenedorDatosPrincipalesVacas' >

                    <div className='recuadros' >
                          <div className='contenedorLeftdata' >
                                <p>
                                  Inicio Contrato

                                </p>

                          </div>

                          <p className='textoRightData' > 01/08/2020 </p>

                    </div>

                    <div className='recuadros' >
                      
                            <div className='contenedorLeftdata' >
                                <p>
                                  Normales a la Fecha
                                  
                                </p>

                          </div>
                          <p className='textoRightData' > 25,1 Dias Habiles </p>
                      
      
                    </div>

                    <div className='recuadros' >

                            <div className='contenedorLeftdata' >
                                  <p>
                                  Progresivas a la Fecha
                                    
                                  </p>

                          </div>

                          <p className='textoRightData' > 0 Dias Habiles </p>


                    </div>

            </div>

            {/* Tabla */}

            <div> 
                  {/* header tabla */}
                  <div className='headerTablaVacaciones' >

                    <p>Desde</p>
                    <p>Hasta</p>
                    <p>Normales</p>
                    <p>Progresivas</p>



                  </div>

                  <div className='contenidoTablaVacaciones' >

                      <FlatList list={vacas} renderItem={item => 
                      <div className='divflat' >
                          <p>{item.desde}</p>
                          <p>{item.hasta}</p>
                          <p>{item.normales}</p>
                          <p>{item.progresivas}</p>


                      </div>
                      
                      
                      
                      
                      
                      }
                      
                      renderWhenEmpty={() => <p>No haz tomado vacaciones</p>}
                      
                      />



                  </div>


            </div>


      




    </div>
  )
}
