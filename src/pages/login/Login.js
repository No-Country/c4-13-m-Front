import React from 'react'
import './login.scss'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
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
                    <input type="text" placeholder='paulaUrb'/>
                    <input type="password" placeholder='*******'/>
                    <Link to='/'>
                    <button>Iniciar sesión</button>
                    </Link>
                    <span>¿Olvidaste tu contraseña?</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login