import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Barra from '../components/navbar/Barra'
import Main from '../components/sidebar/Sidebar'
import NoPage from '../components/views/NoPage'
import Profesores from '../components/views/Profesores'
import Materias from '../components/views/Materias'
import Inicio from '../components/views/Inicio'
const RouterApp = () => {
  return (
    <BrowserRouter>
    <Barra/>
    <Main/>
    <Routes>
      <Route path='*' element={<NoPage/>}/>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/profesores' element={<Profesores/>}/>
      <Route path='/materias' element={<Materias/>}/>
    </Routes>
    </BrowserRouter>
  )
}

/*

<Route path="/" element={<App />}>
        <Route path="/">
              <Route  index element={<Main/>}/>
              <Route path="profesores" element= {<itenListcontainer/>} />
              <Route path=":users">
                <Route index element={<List/>}/>
                <Route path=":userid" element={<Single/>}/>
                <Route path="new" element={<New/>}/>
              </Route>
              <Route path="calendario">
                <Route index element={<itenListcontainer/>}/>
                <Route path=":productId" element={<Single/>}/>
                <Route path="new" element={<New/>}/>
              </Route>
            </Route>
    </Routes>
 */
export default RouterApp
