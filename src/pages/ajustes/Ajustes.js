import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './ajustes.scss'

function Ajustes() {
    return (
        <div className='ajustes'>
          <Sidebar/>
          <div className='main'>
            <Navbar/>
            <form >
              <div className="container">
                <div className="top">
                  <div className="left">
                  <h2>Datos personales</h2>
                  
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
                    </div> 
          
          </form>
          </div>
        </div>
      )
    }

export default Ajustes