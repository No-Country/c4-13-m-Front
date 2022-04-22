import React, { useState, useEffect } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import deletar from '../../../assets/delete.svg'
import user from '../../../assets/usuario.svg'
import './profesorId.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.delete(`https://esc-ipetm69.herokuapp.com/personal/${id}`)
  }
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
              {
                !schedules ? <div>Hay materias asignadas pero no se pueden mostrar </div> :  <div>No hay materias asignadas</div>
              }
      
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfesorId