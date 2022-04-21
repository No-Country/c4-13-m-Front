import React from 'react'
import './sidebar.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import inicio from '../../assets/home.svg'
import  calendario from '../../assets/calendario.svg'
import profesores from '../../assets/user.svg'
import materias from '../../assets/materias.svg'
import ajustes from '../../assets/ajustes.svg'
import cerrar from '../../assets/logout.svg'

const Sidebar = () => {
  return (
    <div className='sidebar' >

    <div className="top">
     
       <NavLink to= '/'>
       <div className='logo'>
         <img src={logo} alt="logo" />
         <div className="texto">
         <p>Instituto Provincial de Enseñanza Técnica y Media N°69</p>
         <p>“Juana Manso de Noronha”</p>
         </div>
       </div>
       </NavLink>
      
      <ul>
       <NavLink to= '/'>
            <li> 
              <img src={inicio} alt={inicio} />
              Inicio
            </li>
        </NavLink>
      </ul>
      <ul>
        <NavLink to= '/calendario'>
          <li> 
            <img src={calendario} alt={calendario} />
            Calendario
            </li>
            </NavLink>
            </ul>
      <ul>
        <NavLink to= '/profesores'>
          <li>
            <img src={profesores} alt={profesores} />
            Profesores
            </li>
            </NavLink>
            </ul>
      <ul>
        <NavLink to= '/materias'>
          <li>
            <img src={materias} alt={materias} />
            Materias
            </li>
            </NavLink>
            </ul>
      <ul>
        <NavLink to= '/'>
          <li>
            <img src={ajustes} alt={ajustes} />
            Ajustes
            </li>
            </NavLink>
            </ul>
     </div>
     <div className="bottom">
     <ul className='cerrar'>
       <NavLink to='/login'>
         <li>
           <img src={cerrar} alt={cerrar} />
           Cerrar sesión
           </li>
           </NavLink>
           </ul>
     </div>
   
    </div>
  )
}

export default Sidebar