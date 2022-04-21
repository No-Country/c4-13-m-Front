import React from 'react'
import Inicio from '../../pages/inicio/Inicio'
import Sidebar from '../sidebar/Sidebar'

import './home.scss'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <Inicio/>
    </div>
  )
}

export default Home