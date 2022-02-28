import axios from 'axios'


export const SIGN_IN = 'SIGN_IN'
export const LOG_OUT = 'LOG_OUT'
export const RENOV = 'RENOV'

export const log = (pe,px) => {
     return async (dispatch,getstate) => {

                       
    
            try {
                const response = await axios.post('https://www.websal.cl/api/autoconsulta/login.asp',
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

                    // await AsyncStorage.setItem('token', response.data.strCon)
                    // await AsyncStorage.setItem('nombre', response.data.nombre)
                    
                } else {
                    // Alert.alert("Datos incorrectos","Intentalo otra vez", );
                

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
        const strcon = 123
        
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
        //    dispatch({
        //        type:RENOV,
        //        payload:strcon
        //    })
             
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