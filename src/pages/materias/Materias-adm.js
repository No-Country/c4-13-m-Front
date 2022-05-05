import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import materias from '../../assets/materias.svg'
import './materias-adm.scss'

const Materias = () => {
  return (
    <div className='materias'>
          <Sidebar/>
        <div className='main'>
            <Navbar/>
            <div className="container">
              <div className="card">
                <img src={materias} alt={materias} />
                <span>Ver Listado de
                Materias</span>

                </div>
              <div className="card">
              <img src={materias} alt={materias} />
                <span>
                  Realizar Búsqueda
                </span>
              </div>
              </div>
         </div>
    </div>
  )
}

export default Materias