import React from 'react'

export const ChangeEmail = () => {



  return (
    <>
          <div className='titulo' >

              <p>Cambiar Email</p>

          </div>


          <div className='contenedorCambio'>
                <label> Email actual </label>
                <input type='text' placeholder='hola'  disabled={true} />

          </div>

          <div className='contenedorCambio'>
                <label> Nuevo email  </label>
                <input type='text' />

          </div>


          <div className='contenedorCambio'>
                <label> Repita el nuevo email </label>
                <input type='text'  />

          </div>



          <button className='buttonCertificado cambiarEmailBtn' >
          
            <p>Cambiar Email</p>  

          </button>



    </>
  )
}
