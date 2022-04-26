import React, { useEffect, useState } from 'react'
import FlatList from 'flatlist-react';
import cash from '../assets/cash-outline.svg'
import eye from '../assets/eye-outline.svg'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';
import { useGetPeriodos } from '../hooks/UseGetPeriodos';
import axios from 'axios';
import { Loading } from '../components/Loading';

export const Liquidaciones = () => {
   
  const strcon = useSelector(state => state.login.token)


    const {datosFiltrados,isLoading,consultarDatos} = useGetPeriodos()

    //  console.log('dataFiltrada',datosFiltrados)
   

    const [isRefreshing, setIsRefreshing] = useState(false)

    const loadRefresh = async () => {
      setIsRefreshing(true)
      await consultarDatos()
      setIsRefreshing(false)


    }


      const [link, setLink] = useState([])

      // console.log('linksito',link)

      useEffect(() => {
       
        if(link.length > 0){
          window.open(`${link}`, '_blank');
        }

      }, [link])
      

      const linkPDF = async(link) => {
        // setLink([])

        try {

          const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/liquidaciones.asp',
           {
              strcon,periodo:link
           });


            setLink(response.data.split('"')[3])
            

              
          } catch (error) {
            console.log(error)
              
          }

      }



  return (
    <div className='animate__animated animate__fadeIn'>


      {
        datosFiltrados.length > 0 ?

        <>
        
        <div className='titulo' >
         <p >Tus Liquidaciones de Sueldo</p>
         </div> 

         <div className='rowLiquidaciones' >
         <FlatList list={datosFiltrados} renderItem={(item,index) => 
                             

                                  <div key={index} className='contenedorLiquidaciones' >
                                  <img src={cash} alt='dinero' />
                                  <p> {item.periodo} </p> 
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="020 300 1040 60">
                                  <path fill="#fff" fillOpacity="1" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,197.3C672,181,768,107,864,112C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                                    </svg>


                                    <div className='contenedorVer' >
                                    <button className='botonVer' onClick={() => linkPDF(item.link) } >
                                     Ver Pdf
                                    <img  className='ver' src={eye} alt='ver' />

                                    </button>
                                    {/* <a href='https://google.com' target='_blank' className='verPdf' >
                                      
                                      Ver PDF
                                    
                                    </a> */}

                                    {/* <a href='https://google.com' >

                                    </a> */}



                                    </div>
                                    
                                  </div> 

                                  

                             
                          

                            }
                            
          renderWhenEmpty={() =>
            
            <div className='titulo' >
            <p >No tienes Liquidaciones</p>
            </div> 
          }
          hasMoreItems
          renderOnScroll
          
          />
        </div>
        
        </>


        :<div className='marginTopLoading' ><Loading/></div> 




      }


     
        




    </div>
  )
}
