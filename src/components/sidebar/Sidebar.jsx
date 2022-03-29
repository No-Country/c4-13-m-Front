import React from 'react'
import home from '../../assets/home.svg'
import calendar from '../../assets/calendar.svg'
import settings from '../../assets/settings.svg'
import user from '../../assets/user.svg'
import material from '../../assets/material.svg'
import logout from '../../assets/logout.svg'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar d-flex flex-column '>
        <>
        <ul className='d-flex align-items-center  '>
            <img src={home} alt="home" />
            <li className='pt-3 pb-3' >Inicio</li>
        </ul>
        <ul className=' border-top'>
            <li className='d-flex align-items-center pt-3 pb-3'>
                <img src={calendar} alt="calendar"/>
                Calendario
            </li>
        </ul>
        <ul className=' border-top'>
            <li className='d-flex align-items-center  pt-3 pb-3 '>
                <img src={user} alt="profesores" />
                Profesores
            </li>
        </ul>
        <ul className='d-flex align-items-center border-top'>
            <li className='pt-3 pb-3'>
                <img src={material} alt="materias" />
                Materias
                </li>
        </ul>
        <ul className=' border-top border-bottom  '>
            <li className='pt-3 pb-3 d-flex align-items-center'>
                <img src={settings} alt="settings" />
                Ajustes
                </li>
        </ul>
        <ul className=' border-top border-top border-bottom  '>
            <li className='pt-3 pb-3 d-flex align-items-center'>
                <img src={logout} alt="settings" />
                Cerrar
            </li>
        </ul>
        </>
    </div>
  )
}

export default Sidebar
