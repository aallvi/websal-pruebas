import React, { useState } from 'react'

export const ChangePass = () => {


    const [mostrar, setmostrar] = useState('password')

    const ver = () => {

        if(mostrar === 'text'){

            setmostrar('password')

            return
        }

        if(mostrar === 'password'){

            setmostrar('text')
            
            return
        }

    }


  return (
    <>
         <div className='titulo' >

            <p>Cambiar Contraseña</p>

            </div>

            
            <div className='contenedorCambio'>
            <label> Contraseña actual </label>
            <input type={mostrar} />

            </div>
            <div className='contenedorCambio'>
            <label> Nueva contraseña  </label>
            <input type={mostrar} />

            </div>
            <div className='contenedorCambio'>
            <label> Repita la nueva contraseña </label>
            <input type={mostrar} security={true} />

            </div>


            <button className='mostrarBtn' onClick={() => ver() } >
                Mostrar
            </button>


            <button className='buttonCertificado cambiarClaveBtn' >
             
               <p>Cambiar Contraseña</p>  

            </button>

    </>
  )
}
