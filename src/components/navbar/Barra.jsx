/* eslint-disable no-lone-blocks */
import React from 'react'
import { Navbar, Nav, Image, Container } from 'react-bootstrap'
import Usuario from '../../assets/Usuario.svg'
import Logo from '../../assets/Logo.png'
import './navbarCss.css'
const Barra = () => {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className='navbar-main'>
          <Navbar.Brand href="#home"><Image src={Logo} className='ms-5 logo' /> </Navbar.Brand>
          <Nav className='titulo'>
            Instituto Provincial de Enseñanza Técnica y Media N°69 “Juana Manso de Noronha”
          </Nav>
          <Container>
          <Nav.Link href="#deets"><Image src={Usuario} /></Nav.Link>
          <Nav className='titulo' >Bienvenida, Paula Urbinatti</Nav>
          </Container>
      </Navbar>
    </>
  )
}

export default Barra
{ /* <Row className='d-flex'>
            <Col><p>Instituto Provincial de Enseñanza Técnica y Media N°69 “Juana Manso de Noronha”</p></Col>
            <Col md='auto'><Image src={Usuario} /></Col>
            <Col xs lg='2'>
              Paula Urbinatti
            </Col>
          </Row>
         <Nav className='margin-50rem'>
            <Nav.Link href="#deets"></Nav.Link>
          </Nav>
          <Nav ></Nav>
        */ }
