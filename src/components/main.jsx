import React from 'react'
import Barra from './navbar/Barra'
import Sidebar from './sidebar/Sidebar'
import '../index.css'
const Main = () => {
  return (
    <div className='main'>
      <Barra/>
      <Sidebar/>

    </div>
  )
}

export default Main
