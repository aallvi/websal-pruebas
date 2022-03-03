import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'


export const NavBar = () => {


    let activeStyle = {
        textDecoration: "underline"
      };
    
      let activeClassName = "underline"



  return (
   


<nav>
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
        

      </ul>


    </nav>





    
  )
}
