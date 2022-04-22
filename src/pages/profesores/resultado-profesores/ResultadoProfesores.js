import React, { useState } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import './resultadoProfesores.scss'
import user from '../../../assets/Usuario.svg'
import deletar from '../../../assets/delete.svg'
import editar from '../../../assets/edit.svg'
import right from '../../../assets/right.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Popup from '../popup/Popup'

const ResultadoProfesores = ({ profesor }) => {
  const [buttonDeletar,setbuttonDeletar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    profesor.forEach(profesor => {
      axios.delete(`https://esc-ipetm69.herokuapp.com/personal/${profesor.id}`)
    })
    window.location.href ='/'
  }
  return (
    <>
      <div className='resultadoProfesores'>
        <Sidebar />
        <div className='main'>
          <Navbar />
          <div className="container">
            <Link to='/profesores/nuevo-profesor'>
              <button>+ Añadir Profesor</button>
            </Link>
              <div className='list'>
              <p>resultados obtenidos</p>
           {
             !profesor ? null : profesor.map((profesor,index) => (
               <div className="row" key={index}>
                 <div className="left">
                   <img src={user} alt={user} />
                   <p key={index}>
                     {profesor.firstName} {profesor.lastName}
                   </p>
                 </div>
                 <div className="right">
                   <div  onClick={()=> setbuttonDeletar(true)}>
                     <img src={deletar} alt={deletar} />
                   </div>
                   <Link to={`/profesores/editar${profesor.id}`}>
                     <img src={editar} alt={editar} />
                   </Link>
                   <Link to={`profesorFor${profesor.id}`}>
                     <img src={right} alt={right} />
                   </Link>

                 </div>
               </div>
             )) 
           }
           <Link to='/profesores'>
             <p> &lt; Volver a la Búsqueda</p>
           </Link>
         </div>

          </div>
      <form onSubmit={handleSubmit}>
      <Popup className='popup' trigger={buttonDeletar}>
        
        <p>¿Estas seguro de eliminar?</p>
        <div className='buttons'>
 
        <button className='btn-1'
        type='submit'
        >
            Aceptar
          </button>
          <button className='btn-2' onClick={()=> setbuttonDeletar(false)}> 
            Cancelar
          </button>
        </div>
      </Popup>
      </form>   
      
        </div>
      </div>
    </>)
}

export default ResultadoProfesores

