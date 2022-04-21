import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './confirmacion.scss'
import { Link } from 'react-router-dom'

const Confirmacion = () => {
  return (
    <div className='confirmacion'>
        <Sidebar/>
        <div className="main">
            <Navbar/>
            <div className="container">
                <p>¡Su perfil ha sido registrado con éxito!</p>
                <Link to='/'><p>Volver a Inicio</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Confirmacion