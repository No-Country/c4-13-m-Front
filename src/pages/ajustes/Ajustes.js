import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './ajustes.scss'
import { Link } from 'react-router-dom'

function Ajustes() {
    return (
        <div className='ajustes'>
          <Sidebar/>
          <div className='main'>
            <Navbar/>
            
              <div className="container">
              <form >
                <div className="top">
              
                  <div className="head">
                  <h2>Datos personales</h2>
                  <Link to="lista-usuarios">
                  <button>+ Añadir / Modificar Usuario</button>
                  </Link>
                  </div>
                    
                   
                  
                  
                    <div className="row">
                      <label name='firstName'>
                        Nombre:
                      </label>
                        <input 
                        type="text"
                        placeholder='Nombre'
                        name='firstName'
                        
                        id='firstName'
                       
                        required
                        />
                    </div>
                    <div className="row">
                      <label name='Apellido'>
                        Apellido:
                      </label>
                        <input 
                        type="text"
                        placeholder='Apellido'
                        name='lastName'
                        
                        id='lastName'
                        
                        required
                        />
                    </div>
                    <div className="row">
                      <label name='dni'>
                        Email:
                      </label>
                        <input 
                        type="email"
                        className='form-control'
                        placeholder='Email'
                        required 
                        />
                    </div>
                    <div className="row">
                      
                      <span>Administrador</span> 
                      <input className="checkbox" type="checkbox" />
                      <span>Usuario</span> 
                      <input className="checkbox" type="checkbox" />
                    </div>

                    <h2>Cambiar contraseña</h2>
                    <div className="row">
                      <label name='email'>
                      Ingresar contraseña actual:
                      </label>
                        <input 
                        type="text"
                        className='form-control'
                        placeholder='Ingresar contraseña actual'
                        name='email'
                        
                        id='email'
                        
                        required
                         />
                         
                    </div>
                    
                    <div className="row">
                      <label name='Legajo'>
                      Ingresar nueva contraseña:
                      </label>
                        <input 
                        type="text"
                        className='form-control'
                        placeholder='Ingresar nueva contraseña'
                        name='file'
                        
                        id='file'
                        
                        required
                        />
                    </div>
                    <div className="row">
                      <label name='Legajo'>
                      Confirmar nueva contraseña:
                      </label>
                        <input 
                        type="text"
                        className='form-control'
                        placeholder='Ingresar nueva contraseña'
                        name='file'
                        
                        id='file'
                        
                        required
                        />
                    </div>
                
                  
                </div>
                    
                      
                      
                              
                   
                    <div className="bottom">
                                <div className="row">
                                  <button 
                                  className='btn-guardar'
                                  >Guardar
                                  </button>
                                  <button 
                                  className='btn-cancelar'
                                  >Cancelar
                                  </button>
                                </div>
                              </div>
                   
          
                    </form>
                    </div> 
          </div>
        </div>
      )
    }

export default Ajustes