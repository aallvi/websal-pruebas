import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import websal from '../assets/logowebsal.png'


export const NavBar = () => {

   
  const [toggleMenu, setToggleMenu] = useState(false)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

console.log(screenWidth)

  return (



    // || screenWidth > 700 


<nav  >

<div className='contenedorImg' >
          <NavLink
                to="/home"
              
              >
                <img src={websal} alt='logo'  />

          </NavLink>
      </div>

      {toggleMenu  &&
      
      <ul>

     
      
      <li>
        <NavLink
          to="/home"
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
      
      }
      { screenWidth > 700 &&
      
      <ul>

     
      
      <li>
        <NavLink
          to="/home"
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
      
      }


     
      <button className="icon" onClick={() => setToggleMenu(!toggleMenu) }  >
        <i className="fa fa-bars"></i>
      </button>

    </nav>





    
  )
}
