import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './assets/images/Logo/logo.png';
import './Navbar.css'

const NavBar = () => {
  return (
    // <Navbar collapseOnSelect expand="lg" className="bg-body-dark">
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">

      <Container>
        <Navbar.Brand href="#home">
        <img
          src={logo}
          alt="Tour Travel"
          width="170"
          height="170"
          className="d-inline-block align-top"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Centering the nav links */}
          <Nav className="mx-auto d-flex justify-content-center gap-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              About
            </NavLink>
            <NavLink 
              to="/packages" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Packages
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Contact
            </NavLink>
          </Nav>

          <Nav>
          <Nav.Link href="/signup">
              <Button variant="outline-dark">SignUp</Button>
            </Nav.Link>
            <NavLink to="/login" className="d-flex align-items-center text-decoration-none">
              <Button variant="outline-dark">Login</Button>
            </NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
