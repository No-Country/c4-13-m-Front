import React from 'react'
import home from '../../assets/home.svg'
import calendar from '../../assets/calendar.svg'
import settings from '../../assets/settings.svg'
import user from '../../assets/user.svg'
import material from '../../assets/material.svg'
import logout from '../../assets/logout.svg'
import './sidebar.css'
import { Image, ListGroup } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
const Sidebar = () => {
  return (
        <ListGroup className='sidebar flex-colum'>
            <Link to={'/'}>
                <ListGroup.Item className='py-4 text-color'>
                    <Image src={home} />
                    <span>Inicio</span>
                </ListGroup.Item>
            </Link>
            <NavLink to={'/calendario'}>
            <ListGroup.Item className='py-4 text-color'>
                <Image src={calendar} />
                <span>Calendario</span>
            </ListGroup.Item>
            </NavLink>
            <NavLink to={'/profesores'}>
            <ListGroup.Item className='py-4 text-color'>
                <Image src={user} />
                <span>Profesores</span>
            </ListGroup.Item>
            </NavLink>
            <NavLink to={'/materias'}>
            <ListGroup.Item className='py-4 text-color'>
                <Image src={material} />
                <span>Materias</span>
            </ListGroup.Item>
            </NavLink>
            <NavLink to={'/ajustes'}>
            <ListGroup.Item className='py-4 text-color'>
                <Image src={settings} />
                <span>Ajustes</span>
            </ListGroup.Item>
            </NavLink>
            <ListGroup.Item className='py-3 text-color'>
                <Image src={logout} />
                <span>Cerrar</span>
            </ListGroup.Item>
        </ListGroup>
  )
}

export default Sidebar
