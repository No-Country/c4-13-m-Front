import React, { useEffect } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import Popup from '../popup/Popup'
import { Link } from 'react-router-dom'
import './newProfesores.scss'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
const NewProfesores = () => {
  const [edit, setEdit] = useState({editing: false, id: ''})
  const [profesores, setProfesores] = useState({
          firstName: '',
					lastName: '',
					email: '',
					dni: '',
					phone: '',
					file: ''
  })
  
  //popup state
  const [buttonConfirm, setbuttonConfirm] = useState(false);
  const [buttonCancel, setbuttonCancel] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
   //Para ver que emprendedor tengo que editar
  useEffect(() => {
		if (id) {
			axios.get(`https://esc-ipetm69.herokuapp.com/personal/${id}`)
      .then(res => {
        const profesor = res.data;
        setProfesores({
          firstName: profesor.firstName,
          lastName: profesor.lastName,
          email: profesor.email,
          dni: profesor.dni,
          phone: profesor.phone,
          file: profesor.file
        })
      })
      setEdit({...edit, editing: true, id: id})
    }
	}, [])
  const updateProfesor = (e) =>{  
    let attributeName = e.target.id;
    setProfesores({
      ...profesores,
      [attributeName] : e.target.value,
      [attributeName] : e.target.value,
      [attributeName] : e.target.value,
      [attributeName] : e.target.value,
      [attributeName] : e.target.value,
      [attributeName] : e.target.value
    })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    const updateProfesor ={
      ...profesores,
      firstName: profesores.firstName,
      lastName: profesores.lastName,
      email: profesores.email,
      dni: profesores.dni,
      phone: profesores.phone,
      file: profesores.file
    }
    if(edit.editing){
      try{
        await axios.put(`https://esc-ipetm69.herokuapp.com/personal/`+edit.id, updateProfesor)
      } catch(err){
        console.log(err)
      }
    }
    else{
      axios.post(' https://esc-ipetm69.herokuapp.com/personal/', updateProfesor)
      .then(res => {
        console.log(res)
      })
    }
    navigate('/')
  }
  return (
    <div className='newProfesores'>
      <Sidebar/>
      <div className='main'>
        <Navbar/>
        <form onSubmit={onSubmit}>
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
                    onChange ={updateProfesor}
                    id='firstName'
                    value={profesores.firstName}
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
                    onChange={updateProfesor}
                    id='lastName'
                    value={profesores.lastName}
                    required
                    />
                </div>
                <div className="row">
                  <label name='dni'>
                    DNI:
                  </label>
                    <input 
                    type="text"
                    className='form-control'
                    placeholder='DNI'
                    name='dni'
                    onChange={updateProfesor}
                    id='dni'
                    value={profesores.dni}
                    required 
                    />
                </div>
                <div className="row">
                  <label name='phone'>
                    Teléfono:
                  </label>
                    <input 
                    type="number"
                    className='form-control'
                    placeholder='Telefono'
                    name='phone'
                    onChange={updateProfesor}
                    id='phone'
                    value={profesores.phone}
                    required
                    />
                </div>
                <div className="row">
                  <label name='email'>
                    Email:
                  </label>
                    <input 
                    type="text"
                    className='form-control'
                    placeholder='Email'
                    name='email'
                    onChange={updateProfesor}
                    id='email'
                    value={profesores.email}
                    required
                     />
                </div>
                <div className="row">
                  <label name='Legajo'>
                    Legajo:
                  </label>
                    <input 
                    type="text"
                    className='form-control'
                    placeholder='Legajo'
                    name='file'
                    onChange={updateProfesor}
                    id='file'
                    value={profesores.file}
                    required
                    />
                </div>
              </div>
              <div className="right">
                <Link to="/profesores"><p> &lt; Volver a Profesores</p></Link>
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
      <Popup trigger={buttonConfirm} className='popup'>
                <p>¿Desea guardar los datos ingresados
                en el perfil del Profesor?</p>
                <div className='buttons'>
                <button onClick={()=> setbuttonConfirm(true)}>
                    Guardar
                  </button>
                  <button onClick={()=> setbuttonConfirm(false)}>
                    Cancelar
                  </button>
                </div>
      </Popup>
      <Popup trigger={buttonCancel}>
        
                <p>¿Desea salir sin guardar los
                    cambios en el perfil?</p>
                <div className='buttons'>
                
                <Link to='/Profesores'>
                <button 
                type='submit'
                >
                    Aceptar
                  </button>
                </Link>
                  <Link to='/Profesores'>
                  <button onClick={()=> setbuttonCancel(false)}> 
                    Cancelar
                  </button>
                  </Link>
                </div>
      </Popup>
      
      </form>
      </div>
    </div>
  )
}

export default NewProfesores