import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//modulos
import Home from '../components/home/Home';
import Profesores from '../pages/profesores/Profesores';
import Calendario from '../pages/calendario/Calendario';
import Materias from '../pages/materias/Materias';
import NewProfesores from '../pages/profesores/new-profesores/NewProfesores';
import Login from '../pages/login/Login';
import Cursos from '../pages/cursos/cursos/Cursos';
import DatosGuardados from '../pages/datos-guardados/DatosGuardados';
import ResultadoProfesores from '../pages/profesores/resultado-profesores/ResultadoProfesores'
import ProfesorId from '../pages/profesores/profesorId/ProfesorId'
import MateriasResultado from '../pages/materias/materias-resultado/MateriasResultado'
import MateriasId from '../pages/materias/materiasId/MateriasId'
import Ajustes from '../pages/ajustes/Ajustes';
import ListaUsuarios from '../pages/ajustes/lista-usuarios/ListaUsuarios';
import EditarUsuario from '../pages/ajustes/editar-usuario/EditarUsuario';
import ResultadoCalendario from '../pages/calendario/resultado-calendario/ResultadoCalendario';
const RouterApp = () => {
  const [search, setSearch] = useState(null)
  const [profesor, setProfesor] = useState([])
  const [materia, setMateria] = useState([])
  const handleSearch = (data) => {
    setSearch(data)
    setProfesor(null)
    setMateria(null)
  }

  useEffect(() => {
    if (search === null) return;
    let { firstName } = search;
    let url = `https://esc-ipetm69.herokuapp.com/personal/?name=${firstName}`
    const getProfesores = async () => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setProfesor(data)
          console.log(data)
        })
        .catch(error => {
          console.log(error)
          setProfesor(undefined)
        })
    }
    getProfesores()

  }, [search])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="calendario">
            <Route index element={<Calendario />} />
            <Route path='resultado-calendario'>
              <Route index element={<ResultadoCalendario />} />
            </Route>
          </Route>
          <Route path="profesores">
            <Route index element={<Profesores handleSearch={handleSearch} />} />
            <Route path='nuevo-profesor' element={<NewProfesores />} />
            <Route path='editar:id' element={<NewProfesores />} />
            <Route path='buscar-profesor' search={search} profesor={profesor} >
              <Route index element={<ResultadoProfesores search={search} profesor={profesor} />} />
              <Route path='profesorFor:id' element={<ProfesorId />} />
            </Route>
          </Route>
          <Route path="materias">
            <Route index element={<Materias />} />
            <Route path='buscar-materias'>
              <Route index element={<MateriasResultado />} />
              <Route path=':materiasId' element={<MateriasId />} />
            </Route>
          </Route>
          <Route path="login">
            <Route index element={<Login />} />
          </Route>
          <Route path="cursos" element={<Cursos />}>
          </Route>
          <Route path="ajustes">
            <Route index element={<Ajustes/>}/>
            <Route path='lista-usuarios' >
              <Route index element={<ListaUsuarios/>}/>
              <Route path='editar-usuarios' element={<EditarUsuario/>}/>
            </Route>
            
          </Route>
          <Route path="confirm" element={<DatosGuardados />}>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp