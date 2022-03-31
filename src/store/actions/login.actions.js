import axios from 'axios'
import Swal from 'sweetalert2'


export const SIGN_IN = 'SIGN_IN'
export const LOG_OUT = 'LOG_OUT'
export const RENOV = 'RENOV'

export const log = (pe,px) => {
     return async (dispatch,getstate) => {

                       
    
            try {
                const response = await axios.post('https://www.websal.com/api/autoconsulta/login.asp',
                {
                    pe,px
                });

                console.log('prueba',response)
                
                if(response.data.nombre){
                    


                    dispatch({
                        type:SIGN_IN,
                        payload:response.data,
                        token:response.data.strCon,
                        autenticado: 'autorizado'
                    })

                     localStorage.setItem('token', response.data.strCon)
                     localStorage.setItem('nombre', response.data.nombre)
                    
                } else {
                  Swal.fire({
                    title: 'Datos incorrectos',
                    text: 'intentalo otra vez',
                    confirmButtonColor:'#2ec1db',
                    
                  })
                

                }
                    
        
              } catch (error) {
                console.error(error);
              }




     }
    

}


export const log_out = () => ({
    type:LOG_OUT,



})

export const renuew =() => {
    return async (dispatch,getstate) => {


      try {
        const strcon = localStorage.getItem('token')

        
        console.log('token',strcon)
        if(!strcon) return dispatch({
            type:LOG_OUT
        })

        const response = await axios.post('https://www.websal.cl/api/autoconsulta/contrato.asp',
         {
            strcon
         });
        //   console.log('tokeeeeenen',strcon);
         
         if(response.data.cargo){
              
           dispatch({
            type:SIGN_IN,
            payload:response.data,
            token:strcon
           })
         

         }else{
             dispatch({
                 type:LOG_OUT
             })
         }
        //  console.log('respuesta',response.status);


            
        } catch (error) {
          

          console.log('errorrrrrr',error)
          dispatch({
            type:LOG_OUT
        })
            
        }
    }
   
}