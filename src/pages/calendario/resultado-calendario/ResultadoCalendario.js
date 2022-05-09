import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import './resultadoCalendario.scss'

const ResultadoCalendario = () => {
  return (
    <div className='resultadoCalendario' >
        <Sidebar/>
        <div className="main">
            <Navbar/>
            <div className="container">
                <div className="head">
                    <div className="left">
                    <h1>Preceptor/a:  JANETH CORDOBA</h1>
                    </div>
                    <div className="right">
                        <label >Curso:</label>
                        <input type="text" />
                        
                    </div>
                    

                </div>
            
                        <table className="table">
                            <tr className='table-head' >
                                <th>1</th>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miercoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                            <tr className='table-description' >
                                <td>1</td>
                                <td>07:45 a 08:25</td>
                                <td>Matemática(Angelini)</td>
                                <td>Ciudadanía y Participación(Arlla)</td>
                                <td>Matemática(Angelini)</td>
                                <td>Educación Tecnológica(Flores)</td>
                                <td>Ciencias Naturales Física(Cardozo A.)</td>
                            </tr>
                        </table>
                
            </div>
        </div>
    </div>
  )
}

export default ResultadoCalendario