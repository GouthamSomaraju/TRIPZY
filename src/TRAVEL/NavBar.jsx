import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './assets/images/Logo/logo.png';
import './Navbar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom bg-body-tertiary shadow-sm">
      <div className="w-100 d-flex flex-column flex-lg-row align-items-center justify-content-between px-3 px-lg-5">
        {/* Logo */}
        <Navbar.Brand href="/" className="m-0">
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

        {/* Nav Links + Buttons */}
        <Navbar.Collapse id="responsive-navbar-nav" className="w-100 mt-3 mt-lg-0 d-lg-flex justify-content-between align-items-center">
          <Nav className="mx-auto text-center gap-lg-4 gap-2">
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
          <Nav className="text-center gap-2 mt-3 mt-lg-0">
            <NavLink to="/signup" className="text-decoration-none">
              <Button variant="outline-dark">SignUp</Button>
            </NavLink>
            <NavLink to="/login" className="text-decoration-none">
              <Button variant="outline-dark">Login</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
