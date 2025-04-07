import React from 'react'

// import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from './Assets/images/Logo/logo2.png'

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img
          src={logo}
          alt="Logo"
          width="100"
          height="100"
          className="d-inline-block align-top"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/contact">Packages</Nav.Link>
            <Nav.Link href="#pricing">Shop</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Pages</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>



          </Nav>
          <Nav>
            <Nav.Link href="#deets"><Button variant="outline-dark">Light</Button></Nav.Link>
            <Nav.Link href="#deets"><Button variant="outline-dark">Light</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default NavBar
