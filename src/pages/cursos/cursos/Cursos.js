import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import deletar from '../../../assets/delete.svg'
import './cursos.scss'


const Cursos = () => {
  return (
    <div className='cursos' >
        <Sidebar/>
        <div className="main">
            <Navbar/>
            <div className="container">
                <h1>Especialidad: <em>Producción Industrial</em></h1>

                <div className='turno'>
                    <div className="row">
                        <span>1°A - Turno X  </span>
                        <img src={deletar} alt={deletar} />
                    </div>
                    <div className="row">
                        <span>1°B - Turno X  </span>
                        <img src={deletar} alt={deletar} />
                    </div>
                    <div className="row">
                        <span>1°C - Turno X  </span>
                        <img src={deletar} alt={deletar} />
                    </div>
                </div>
                <div className='turno'>
                <div className="row">
                        <span>2°A - Turno X  </span>
                        <img src={deletar} alt={deletar} />
                    </div>
                
                <div className="row">
                        <span>2°B - Turno X  </span>
                        <img src={deletar} alt={deletar} />
                    </div>
                
                <div className="row">
                        <span>2°C - Turno X  </span>
                        <img src={deletar} alt={deletar} />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Cursos