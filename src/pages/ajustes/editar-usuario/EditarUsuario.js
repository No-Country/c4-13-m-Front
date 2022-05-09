import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import './editarUsuario.scss'

const EditarUsuario = () => {
  return (
    <div className='editarUsuario' >
        <Sidebar/>
        <div className="main">
            <Navbar/>
            <div className="container">
               <h1>Datos personales</h1>
               <form>
                   <div className="row">
                       <label >Nombre:</label>
                       <input type="text" />
                   </div>
                   <div className="row">
                       <label >Apellido:</label>
                       <input type="text" />
                   </div>
                   <div className="row">
                       <label >Email:</label>
                       <input type="email" />
                   </div>
                   <div className="row">
                       <label >Contraseña:</label>
                       <span>Se enviará un email a la casilla de correo del nuevo usuario con una contraseña generica.</span>
                   </div>
                   <div className="checkbox">
                       <span>Administrador</span>
                       <input type="checkbox" />
                       <span>Usuario</span>
                       <input type="checkbox" />
                   </div>
                   <div className="buttons">
                        <button className='btn-1' >Guardar Nuevo Usuario</button>
                        <button className='btn-2' >Cancelar</button>
                   </div>
               </form>
            </div>
        </div>
    </div>
  )
}

export default EditarUsuario