import React from 'react'

export const VerPdf = () => {

    const consultarDatos = async () => {
        
        try {

            const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/liquidaciones.asp',
             {
                strcon,periodo:link
             });


              setDatos(response.data.split('"')[3])
              

                
            } catch (error) {
              console.log(error)
                
            }


    }
      useEffect(() => {
        consultarDatos()
      }, [])




  return (
    <a href='https://google.com' target='_blank' className='verPdf' >
                                      
                                      Ver PDF
                                    
    </a>
  )
}
