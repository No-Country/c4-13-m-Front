import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import editar from '../../../assets/edit.svg'
import deletar from '../../../assets/delete.svg'
import { Link } from 'react-router-dom'

import './listaUsuarios.scss'

const ListaUsuarios = () => {
  return (
    <div className='listaUsuarios' >
     
      <Sidebar/>
        <div className="main">
        <Navbar/>
          <div className="container">
            <div className="head">
            <h1>Usuarios</h1>
            <Link to="editar-usuarios">
            <button>+ Añadir Usuario</button>
            </Link>
            </div>
            <div className="lista-usuarios">
            <div className="row">
              <div className="left">
                <span>Yanet Paola</span>
                </div>
              <div className="right">
                <img src={editar} alt={editar} />
                <img src={deletar} alt={deletar} />
              </div>
            </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default ListaUsuarios