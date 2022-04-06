import React from 'react'
import FlatList from 'flatlist-react';
import cash from '../assets/cash-outline.svg'
import eye from '../assets/eye-outline.svg'

export const Liquidaciones = () => {

   const liquidacion = [{
     mes:'Marzo 2022'
   },{
    mes:'Febrero 2022'
  },{
    mes:'Enero 2022'
  },{
    mes:'Febrero 2022'
  },{
    mes:'Febrero 2022'
  },{
    mes:'Febrero 2022'
  }
  
  ]



  return (
    <div className='animate__animated animate__fadeIn'>
      <div className='titulo' >
         <p >Tus Liquidaciones de Sueldo</p>
         </div> 

         <div className='rowLiquidaciones' >
         <FlatList list={liquidacion} renderItem={item => 
                             

                                  <div className='contenedorLiquidaciones' >
                                  <img src={cash} alt='dinero' />
                                  <p> {item.mes} </p> 
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="020 300 1040 60">
                                  <path fill="#fff" fill-opacity="1" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,197.3C672,181,768,107,864,112C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                                    </svg>


                                    <div className='contenedorVer' >
                                    <a href='https://google.com' target='_blank' className='verPdf' >
                                      
                                      Ver PDF
                                    
                                    </a>

                                    <a href='https://google.com' >
                                    <img  className='ver' src={eye} alt='ver' />

                                    </a>



                                    </div>
                                    
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
        




    </div>
  )
}
