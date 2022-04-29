import React, { useEffect, useState } from 'react'
import FlatList from 'flatlist-react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import Swal from 'sweetalert2'
import { Loading } from '../components/Loading';


export const Licencias = () => {

  const strcon = useSelector(state => state.login.token)



      
  const [datos, setDatos] = useState([])

  console.log(datos)

  const [noDisponible, setNoDisponible] = useState(false)

  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false)
 
  // console.log('licencias',datos.resultado)


  const consultarDatos = async () => {
      try {

          const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/licencias.asp',
           {
              strcon
           });

           if(response.data.resultado){
            setNoDisponible(true)

           }


           if(response.data.licencias) {
            setDatos(response.data.licencias)
            setLoading(false)

           }else {
            // setNoDisponible(true)
                 if(response.data.resultado){
                 setNoDisponible(true)
                 setLoading(false)

                 }else{
                  setDatos(response.data)
                  setLoading(false)
                 }
            
             
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
      setLoading(true)
        

      consultarDatos()


    }, [])



  return (
    <div className='VacationContainer animate__animated animate__fadeIn' >

      {
        loading ?
        <>
        
              <div className='marginTopLoading' >
                  <Loading />
              </div> 
        
        
        </>
        :


        <>

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

                      <FlatList list={datos} renderItem={(item,index) => 
                              <div key={index} className='divflat' >
                                  <p>{item.motivo}</p>
                                  <p>{item.desde}</p>
                                  <p>{item.hasta}</p>
                                  <p>{item.dias}</p>


                              </div>
                      
                      
                      
                      
                            
                            }
                            
                            renderWhenEmpty={() =>
                              <div className='renderEmpty' >

                                {
                                  noDisponible ? <p> Información no disponible </p> :   <p>No tienes licencias</p>
                                }

                            

                              </div>
                            }
                            hasMoreItems
                            renderOnScroll
                            />



                  </div>


                  <div className='totalLicencias' >

                  <p  > Total Licencias: {noDisponible ? '-' : datos.length}  </p>


                  </div>



            </div>
        
        
        
        
        </>
      }

        
    
    </div>
    
  )
}
