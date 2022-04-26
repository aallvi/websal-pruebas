import React, { useEffect, useState } from 'react'
import FlatList from 'flatlist-react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import Swal from 'sweetalert2'


export const Licencias = () => {

  const strcon = useSelector(state => state.login.token)



      
  const [datos, setDatos] = useState({})

  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false)



  const consultarDatos = async () => {
      try {

          const response = await axios.post('https://www.websal.com/api/autoconsulta/licencias.asp',
           {
              strcon
           });


           if(response.data.licencias) {
            setDatos(response.data.licencias)
            setLoading(false)

           }else {
            setDatos(response.data)
            setLoading(false)
             
           }

            
           

              
          } catch (error) {
            console.log(error)
            setLoading(false)
            Swal.fire({
              title: 'Error de conexion',
              text: 'Intentalo otra vez',
              confirmButtonColor:'#2ec1db',
              // customClass: 'slow-animation'
              // animation:false,
              // toast:true
            })

              
          }


  }
    useEffect(() => {
        

      consultarDatos()


    }, [])





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
    <div className='VacationContainer animate__animated animate__fadeIn' >

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

                      <FlatList list={vacas} renderItem={(item,index) => 
                              <div key={index} className='divflat' >
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
