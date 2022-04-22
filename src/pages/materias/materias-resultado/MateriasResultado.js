import React from 'react'
import Sidebar from '../../../components/sidebar/Sidebar'
import NavBar from '../../../components/navbar/Navbar'
import user from '../../../assets/materias.svg'
import deletar from '../../../assets/delete.svg'
import edit from '../../../assets/edit-materia.svg'
import right from '../../../assets/right.svg'
import { Link } from 'react-router-dom'
import './materiasResultado.scss'
import Popup from '../../profesores/popup/Popup'
import { useState } from 'react'

const MateriasResultado = () => {
  const [materia,setMateria] = useState(false);
  return (
    <div className='materiasResultado'>
        <Sidebar/>
        <div className="main">
        <NavBar/>
            <div className="container">
              
                  <button className='anadir' onClick={()=> setMateria(true)}>
                    + Añadir Materia
                  </button>
             
                  <div className='list'>
                  <p>2 Resultados de Búsqueda “Ciencias Naturales”</p>
                  <Link to=':materiasId'>
                    <div className="row">
                        <div className="left">
                        <img src={user} alt={user} />
                        <span>Ciencias Naturales / Biología</span>
                        </div>
                        <div className="right">
                        <img src={deletar} alt={deletar} />
                        <img src={edit} alt={edit} />
                        <img src={right} alt={right} />
                        </div>
                    </div>
                  </Link>
                  <div className="row">
                      <div className="left">
                      <img src={user} alt={user} />
                      <span>Ciencias Naturales / Biología</span>
                      </div>
                      <div className="right">
                      <img src={deletar} alt={deletar} />
                      <img src={edit} alt={edit} />
                      <img src={right} alt={right} />
                      </div>
                  </div>
                  
                    <Link to ='/materias'>
                    <p> &lt; Volver a la Búsqueda</p>
                    </Link>
                  </div>
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
          <input className='checkbox' type="checkbox" />
          <label>Cargo:</label>
          <input className='checkbox' type="checkbox" />
         </div>
          <button>Guardar</button>
          <button onClick={()=> setMateria(false)}>Cancelar</button>
          </Popup>
    </div>
  )
}

export default MateriasResultado