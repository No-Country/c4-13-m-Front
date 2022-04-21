import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import profesores from './../../assets/user.svg'
import { Link, useNavigate  } from 'react-router-dom'
import './profesores.scss'

let initialForm = {
  firstName: ""
};

const Profesores = ({handleSearch}) => {
  const [form, setForm] = useState(initialForm)
  let navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(form);
    setForm(initialForm);
    navigate('/profesores/buscar-profesor')
  }
  return (
    <div className='profesores' >
      <Sidebar />
      <div className='main'>
        <Navbar />
        <div className="container">
          <Link className='anadir' to='nuevo-profesor'>
            <button >
              + Añadir profesor
            </button>
          </Link>
          <img src={profesores} alt={profesores} />
          <h2>Ingresá el nombre del profesor</h2>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Buscar" onChange={handleChange} name="firstName"/>
                <br/>
                <button type='submit'>Buscar</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Profesores
