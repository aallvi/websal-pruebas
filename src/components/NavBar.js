import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import websal from '../assets/logowebsal.png'
import { log_out } from '../store/actions/login.actions'


export const NavBar = () => {

   
  const [toggleMenu, setToggleMenu] = useState(false)

  let claseMenu = toggleMenu ? 'hamburger active' : 'hamburger'

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

// console.log(screenWidth)

   const dispatch = useDispatch()


    const salir = () => {
       dispatch(log_out())

       localStorage.removeItem('token')
    }

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
          onClick={() => setToggleMenu(false) }

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
          onClick={() => setToggleMenu(false) }

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
          onClick={() => setToggleMenu(false) }
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
          onClick={() => setToggleMenu(false) }
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
          onClick={() => setToggleMenu(false) }
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
          onClick={() => setToggleMenu(false) }
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
          onClick={() => setToggleMenu(false) }
          className={({ isActive }) =>
            isActive ? 'activeClassName' : 'BotonNav'
          }
        >
          Mis Datos
        </NavLink>
      </li>

      <button className="salir" onClick={ salir }  >
        <p>Salir</p>
      </button>

     

    </ul>
      
      }
      { screenWidth > 770 &&
      
      <ul>

     
      
      <li>
        <NavLink
          to="/home"
          onClick={() => setToggleMenu(false) }
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
          onClick={() => setToggleMenu(false) }
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
          onClick={() => setToggleMenu(false) }
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
          onClick={() => setToggleMenu(false) }
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
          onClick={() => setToggleMenu(false) }
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
          onClick={() => setToggleMenu(false) }
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
          onClick={() => setToggleMenu(false) }
          className={({ isActive }) =>
            isActive ? 'activeClassName' : 'BotonNav'
          }
        >
         Mis Datos
        </NavLink>
      </li>

      <button className="salir" onClick={salir }  >
        <p>Salir</p>
      </button>

     

    </ul>
      
      }


     
      {/* <button className="icon" onClick={() => setToggleMenu(!toggleMenu) }  >
        <i className="fa fa-bars"></i>
      </button> */}

      <button type='button' className={claseMenu} onClick={() => setToggleMenu(!toggleMenu) } >
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </button>
   
    </nav>





    
  )
}
