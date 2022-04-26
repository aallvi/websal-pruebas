import axios from 'axios';
import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import Swal from 'sweetalert2'



export const useGetPeriodos = () => {

    const strcon = useSelector(state => state.login.token)

    const [datos, setDatos] = useState([]);

    const [isLoading, setisLoading] = useState(true)


    // consultamos la info de liquidadiones del usuario

    const consultarDatos = async () => {
      // setisLoading(true
        try {

            const response = await axios.post('https://aqueous-fjord-68634.herokuapp.com/https://www.websal.com/api/autoconsulta/liquidaciones.asp',
             {
                strcon
             });

            //  console.log(response.data.liquidaciones);

             if(response.data.liquidaciones){
              setDatos(response.data.liquidaciones)
              setisLoading(false)
             }


                
            } catch (error) {
              console.log(error)
              setisLoading(false)
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



   
      // llegan todos los datos y filtramos por los que tienen liquidacion los cuales son los que viene un link != 0
      
        const datosFiltrados = datos.filter(dat => dat.link !== 0)
        
   
    

    
  return {

    datos,setDatos,datosFiltrados,isLoading,consultarDatos


  }
};
