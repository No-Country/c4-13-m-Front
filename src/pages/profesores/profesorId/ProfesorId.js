import React, { useState, useEffect } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import deletar from '../../../assets/delete.svg'
import user from '../../../assets/Usuario.svg'
import './profesorId.scss'
import { useParams } from 'react-router-dom'

const ProfesorId = () => {
  const { id } = useParams()
  const [profesorForID, setprofesorForID] = useState([])
  useEffect(() => {
    if (typeof id !== 'undefined') {
      fetch(`https://esc-ipetm69.herokuapp.com/personal/${id}`)
        .then(res => res.json())
        .then(data => {
          setprofesorForID(data)
        })

    }
  }, [id])
  const { firstName, lastName, dni, phone, email, file, schedules } = profesorForID

  
  return (
    <>
      <div className='profesorId'>

        <Sidebar />
        <div className="main">
          <Navbar />
          <div className="container">
            <div className="card">
              <div className="row">
                <div className="left">
                  <div className="row">
                    <img src={user} alt={user} />
                    <div className="nombre">

                      <span>{profesorForID.firstName + ' ' + profesorForID.lastName}</span>
                      <span>Legajo N° {profesorForID.file}</span>
                    </div>

                  </div>
                </div>
                <div className="right">
                  <button>Buscar Cronograma</button>
                </div>
              </div>
              <div className="row-2">
                <div className="left">
                  <label>Telefono:</label>
                  <span>(+54) {profesorForID.phone}</span>

                </div>
                <div className="center">
                  <label>Email</label>
                  <span>{profesorForID.email}</span>
                </div>
                <div className="right">
                  <label>DNI</label>
                  <span>{profesorForID.dni}</span>
                </div>

              </div>
              <h2>Materias asignadas</h2>
              <div className="table">
                <div className="table-title">
                  <span>Materia</span>
                  <span>Curso</span>
                  <span>Carga</span>
                </div>

                {
                  !schedules ? <div>No hay materias asignadas</div> :
                    schedules.map((schedule, index) => {
                      return (
                        <div className='table-description' key={index} >
                          <p>{schedule.activity}</p>
                          <p>{schedule.grade}</p>
                          <p>{schedule.position}</p>
                          <button >
                            <img src={deletar} alt={deletar} />
                          </button>
                        </div>
                      )
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfesorId