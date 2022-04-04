import React from 'react'
import FlatList from 'flatlist-react';


export const Licencias = () => {

  const vacas = [
    {
      desde:'Enfermedad',
      hasta:'05/03/2023',
      normales:'04/01/2022',
      progresivas:'20'
    },{
     desde:'Permiso sin goce de sueldo ',
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
  ]



  return (
    <div className='VacationContainer' >

         <div className='titulo' >
         <p className='tituloLicencias' >Informacion sobre tus Licencias</p>
         </div> 


         
         <div className='contenidoTodoTabla' > 
                  {/* header tabla */}
                  <div className='headerTablaVacaciones' >

                    <p>Motivo</p>
                    <p>Desde</p>
                    <p>Hasta</p>
                    <p>Días</p>



                  </div>
                  

                  <div className='contenidoTablaLicencias' >

                      <FlatList list={vacas} renderItem={item => 
                              <div className='divflat' >
                                  <p>{item.desde}</p>
                                  <p>{item.hasta}</p>
                                  <p>{item.normales}</p>
                                  <p>{item.progresivas}</p>


                              </div>
                      
                      
                      
                      
                            
                            }
                            
                            renderWhenEmpty={() =>
                              <div className='renderEmpty' >

                                <p>No tienes licencias</p>

                              </div>
                            }
                            hasMoreItems
                            renderOnScroll
                            />



                  </div>


                  <div className='totalLicencias' >

                  <p  > Total Licencias: {vacas.length} </p>


                  </div>



            </div>
    
    </div>
    
  )
}
