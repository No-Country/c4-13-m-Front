import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Popup from '../profesores/popup/Popup'
import materias from '../../assets/materias.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './materias.scss'

const Materias = () => {
  const [materia,setMateria] = useState(false);
  return (
    <div className='materias'>
          <Sidebar/>
        <div className='main'>
            <Navbar/>
            <div className="container">
            <div className="top">
            
            <div className="left">
            
            <img src={materias} alt={materias} />
            Materias
            </div>
              <div className="right">  <button className='anadir' onClick={()=> setMateria(true)}>
                  + Añadir Materia/Cargo
                </button></div>
            </div>
             

            
             <form className='form'>
             <div className="top">
             <div className="row">
             <spawn>Año:</spawn>
              <input type="text" placeholder='Buscar' />
             </div>
              <div className="row">
              <spwan>Especialidad:</spwan>
              <input type="text" placeholder='Buscar' />
              </div>
             </div>
              <div className="row">
              <spwan>Materia:</spwan>
              <input type="text" placeholder='Buscar' />
              </div>
              <Link to='buscar-materias'>
              <button >
                Buscar
              </button>
              </Link>
           
             </form>
             </div>
        </div>
        <Popup classname='popup' trigger={materia}>
          <h2>Añadir Materia</h2>
         <div className="row">
           <label>Nombre:</label>
         <input type="text" />
         </div>
         <div className='row'>
          <label>Materia:</label>
          <input  className='checkbox' type="checkbox" />
          <label>Cargo:</label>
          <input  className='checkbox' type="checkbox" />
         </div>
          <button className='btn-1'>Guardar</button>
          <button className='btn-2' onClick={()=> setMateria(false)}>Cancelar</button>
          </Popup>
    </div>
  )
}

export default Materias