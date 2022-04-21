import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import materias from '../../../assets/materias.svg'
import './materiasId.scss'
import { Link } from 'react-router-dom'

const MateriasId = () => {
  return (
    <div className='materiasId'>
      <Sidebar/>
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="row">
              <div className="left">
              <img src={materias} alt={materias} />
              <span>Ciencias Naturales</span>

              </div>
              <div className="right">
                <Link to='/materias/buscar-materias'>
              <span>&lt; Volver a la Búsqueda</span>
                </Link>
              </div>
          </div>
          <div className="table-title">
            <span>Materia</span>
            <span>Curso</span>
            <span>Especialidad</span>
            <span>Profesor</span>
          </div>
          <div className="table-description">
            <span>Ciencias Naturales / Biología</span>
            <span>1°A</span>
            <span>Producción Industrial</span>
            <span>Alejandro Cardozo</span>
          </div>
          <div className="table-description">
            <span>Ciencias Naturales / Biología</span>
            <span>1°B</span>
            <span>Producción Industrial</span>
            <span>Alejandro Cardozo</span>
          </div>
          <div className="table-description">
            <span>Ciencias Naturales / Biología</span>
            <span>1°C</span>
            <span>Producción Industrial</span>
            <span>Alejandro Cardozo</span>
          </div>
          <div className="table-description">
            <span>Ciencias Naturales / Biología</span>
            <span>1°D</span>
            <span>Producción Industrial</span>
            <span>Alejandro Cardozo</span>
          </div>
          <div className="table-description">
            <span>Ciencias Naturales / Biología</span>
            <span>1°E</span>
            <span>Producción Industrial</span>
            <span>Alejandro Cardozo</span>
          </div>
          <div className="table-description">
            <span>Ciencias Naturales / Biología</span>
            <span>1°A</span>
            <span>Producción Industrial</span>
            <span>Alejandro Cardozo</span>
          </div>
          <div className="table-description">
            <span>Ciencias Naturales / Biología</span>
            <span>1°A</span>
            <span>Producción Industrial</span>
            <span>Alejandro Cardozo</span>
          </div>
          <div className="table-description">
            <span>Ciencias Naturales / Biología</span>
            <span>1°A</span>
            <span>Producción Industrial</span>
            <span>Alejandro Cardozo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MateriasId