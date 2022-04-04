import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Loading } from '../components/Loading';
import Swal from 'sweetalert2'


export const Certificados = () => {

  const strcon = useSelector(state => state.login.token)


  const [antiguedad, setAntiguedad] = useState(false)
  const [tipoContrato, setTipoContrato] = useState(false);
  const [cargo, setCargo] = useState(false);
  const [renta, setRenta] = useState(false);

  const [datos, setDatos] = useState('a')
  

  const anti = antiguedad === true ? '1' : ''
  const tipo = tipoContrato === true ? '2' : ''
  const car = cargo === true ? '3' : ''
  const rent = renta === true ? '4' : ''

  const certificados = anti+tipo+car+rent

  console.log('hola',certificados);

  const consultarDatos = async () => {
    
    try {
        

        const response = await axios.post('https://www.websal.cl/api/autoconsulta/certificados.asp',
         {
            strcon,certificados
         });

          setDatos(response.data)
          
        } catch (error) {
          console.log(error)
            
        }

       

}

  const guardarCertificados = () => {

    if(certificados === '') return Swal.fire({
      title: 'Selecciona un elemento',
      text: 'Debes seleccionar al menos 1',
      confirmButtonColor:'#2ec1db',
      
    })

       console.log('generando...')

      return
      consultarDatos()

  }


  return (
   <>

        <div className='titulo' >
         <p>Genera tu certificado con los elementos que necesitas</p>
         </div> 

      <div className='contenedorAllToggles' >
          <div className='contenedorToggles' >
              <p>Antiguedad</p>

              <label class="switch">
              <input type="checkbox" checked={antiguedad} onChange={() => setAntiguedad(!antiguedad) } />
              <span class="slider round"></span>
              </label>

          </div>
          <div className='contenedorToggles' >
              <p>Tipo Contrato</p>

              <label class="switch">
              <input type="checkbox" checked={tipoContrato} onChange={() => setTipoContrato(!tipoContrato) } />
              <span class="slider round"></span>
              </label>

          </div>
          <div className='contenedorToggles' >
              <p>Cargo</p>

              <label class="switch">
              <input type="checkbox" checked={cargo} onChange={() => setCargo(!cargo) } />
              <span class="slider round"></span>
              </label>

          </div>
          <div className='contenedorToggles' >
              <p>Renta</p>

              <label class="switch">
              <input type="checkbox" checked={renta} onChange={() => setRenta(!renta) } />
              <span class="slider round"></span>
              </label>

          </div>

          
      </div>

     
      <button className='buttonCertificado' onClick={guardarCertificados} >
            <p>Generar</p>
      </button>

    {

      datos==='cargando' ? 

      <Loading />

      : datos?  


      <div className='contenedorCertificadoListo' >
        <p>Certificado Listo</p> 

        <a href='https://google.com' target='_blank' className='verPdf' >Ver PDF</a>
      </div>

      : null


    }
    


      </>
  )
}
