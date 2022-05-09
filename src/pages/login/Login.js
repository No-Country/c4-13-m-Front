import React from 'react'
import './login.scss'
import Popup from '../profesores/popup/Popup'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [buttonEnviar, setbuttonEnviar] = useState(false);
  return (
    <div className='login'>
        <div className="top">
            <div className="left">
                <p>
                    Instituto Provincial de Enseñanza Técnica y Media N°69
                 </p> 
                <p>
                    “Juana Manso de Noronha”
                    </p>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <h1>Bienvenidos</h1>
                <h2>Sistema de organización</h2>
            </div>
            <div className="right">
                <div className="card">
                    <img src={logo} alt={logo} />
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='*******'/>
                    <Link to='/'>
                    <button>Iniciar sesión</button>
                    </Link>
                    <span onClick={()=> setbuttonEnviar(true)}>¿Olvidaste tu contraseña?</span>
                </div>
            </div>
        </div>

        <Popup trigger={buttonEnviar} className='popup'>
                <p>¿Olvidaste tu contraseña?</p>
                <p>No te preocupes. Escribe tu email y te enviaremos las instrucciones para crear una nueva.</p>
                <input type="email" placeholder='Email' required/>
                <div className='buttons'>
                <button className='btn-1' onClick={()=> setbuttonEnviar(true)}>
                    Enviar
                  </button>
                  <button className='btn-2' onClick={()=> setbuttonEnviar(false)}>
                    Volver
                  </button>
                </div>
      </Popup>
    </div>
  )
}

export default Login