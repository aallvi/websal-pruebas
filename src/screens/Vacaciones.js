import React from 'react'



export const Vacaciones = () => {

 


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


      




    </div>
  )
}
