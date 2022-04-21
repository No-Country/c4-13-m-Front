import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import calendario from '../../assets/calendario-inicio.svg'
import materias from '../../assets/materias-inicio.svg'
import profesores from '../../assets/users-inicio.svg'
import cursos from '../../assets/cursos-inicio.svg'
import { Link } from 'react-router-dom'

import './inicio.scss'
const Inicio = () => {
  return (
    <div className='inicio' >
        <Navbar/>
        <div className='main'>
            <div className="cards">
                <div className="left">
                <Link to='calendario'>
                <div className="card">
                  <img src={calendario} alt={calendario} />
                  Calendario
                  </div>
                </Link>
                <Link to='materias'>
                <div className="card">
                <img src={materias} alt={materias} />
                  Materias  
                  </div>
                </Link>
                </div>
                <div className="right">
                <Link to='profesores'>
                <div className="card">
                <img src={profesores} alt={profesores} />
                  Profesores
                  </div>
                </Link>
                <Link to='cursos'>
                <div className="card">
                  <img src={cursos} alt={cursos} />
                  Cursos
                  </div>
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inicio