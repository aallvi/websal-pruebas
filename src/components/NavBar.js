import React from 'react'
import { NavLink } from 'react-router-dom'
import websal from '../assets/logowebsal.png'


export const NavBar = () => {


    let activeStyle = {
        textDecoration: "underline"
      };
    
      let activeClassName = "underline"



  return (
   


<nav>

<div className='contenedorImg' >
          <NavLink
                to="/"
              
              >
                <img src={websal} alt='logo'  />

          </NavLink>
      </div>


      <ul>

     
      
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="liquidaciones"
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
            Liquidaciones
          </NavLink>
        </li>
      
       
        <li>
          <NavLink
            to="licencias"
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
            Licencias
          </NavLink>
        </li>
        <li>
          <NavLink
            to="certificados"
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
            Certificados
          </NavLink>
        </li>
        <li>
          <NavLink
            to="vacaciones"
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
            Vacaciones
          </NavLink>
        </li>
        

        <li>
          <NavLink
            to="contrato"
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
            Contrato
          </NavLink>
        </li>
        <li>
          <NavLink
            to="datos"
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
            Datos
          </NavLink>
        </li>
       

      </ul>


    </nav>





    
  )
}
