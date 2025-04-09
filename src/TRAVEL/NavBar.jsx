import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Travel Tour</Navbar.Brand>
        {/* <img
          src=''
          alt="Tour Travel"
          width="100"
          height="100"
          className="d-inline-block align-top"/> */}
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
              to="/packages" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Packages
            </NavLink>
            <NavLink 
              to="/shop" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Shop
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              About
            </NavLink>
            <NavLink 
              to="/pages" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Pages
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Contact
            </NavLink>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">
              <Button variant="outline-dark">Light</Button>
            </Nav.Link>
            <Nav.Link href="#deets">
              <Button variant="outline-dark">Light</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
