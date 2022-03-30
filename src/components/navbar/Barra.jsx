/* eslint-disable no-lone-blocks */
import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import Usuario from '../../assets/Usuario.svg'
import Logo from '../../assets/Logo.png'
import './navbarCss.css'
const Barra = () => {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className='navbar-main'>
          <div className='contenedor'>
          <Navbar.Brand href="#home"><Image src={Logo} className='ms-5 logo' /> </Navbar.Brand>
          <Nav className='titulo'>
            Instituto Provincial de Enseñanza Técnica y Media N°69 “Juana Manso de Noronha”
          </Nav>
          </div>
          <div className='contenedor-usuario'>
          <Nav.Link href="#deets"><Image src={Usuario} /></Nav.Link>
          <Nav>Bienvenida, Paula Urbinatti</Nav>
          </div>
      </Navbar>
    </>
  )
}

export default Barra
