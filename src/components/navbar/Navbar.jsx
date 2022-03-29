import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Usuario from '../../assets/Usuario.svg'
import Logo from '../../assets/logoInstituto.svg'
import './navbarCss.css'
const Navbar = () => {
  return (
    <>
      <Container className='navbar-main'>
        <Row className='justify-content-md-center align-items-center'>
          <Col md='auto'><Image src={Logo}/></Col>
          <Col><p>Instituto Provincial de Enseñanza Técnica y Media N°69 “Juana Manso de Noronha”</p></Col>
          <Col md='auto'><Image src={Usuario}/></Col>
          <Col xs lg='2'>
             Paula Urbinatti
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Navbar
