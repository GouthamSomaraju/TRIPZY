import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './assets/images/Logo/logo.png';
import './Navbar.css'; // You're already using this

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary py-2 shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Tour Travel"
            width="120"
            height="auto"
            className="d-inline-block align-middle"
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Nav Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-center gap-lg-4 gap-2 my-3 my-lg-0">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              About
            </NavLink>
            <NavLink to="/packages" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Packages
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Contact
            </NavLink>
          </Nav>

          {/* Buttons */}
          <Nav className="text-center gap-2">
            <NavLink to="/signup" className="text-decoration-none">
              <Button variant="outline-dark">SignUp</Button>
            </NavLink>
            <NavLink to="/login" className="text-decoration-none">
              <Button variant="outline-dark">Login</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
