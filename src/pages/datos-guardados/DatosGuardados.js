import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom'
import './datosGuardados.scss'

const DatosGuardados = () => {
  return (
    <div className='datosGuardados'>
         <Sidebar/>
        <div className='main'>
            <Navbar/>
            <div className="container">
                        <p className='success'>¡Su perfil ha sido registrado con éxito!</p>
                        <Link to='/' className='home'>
                        <p > &lt; Volver a Inicio</p>
                        </Link>
            </div>
        </div>   

    </div>
  )
}

export default DatosGuardados