import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function CustomNavbar() {
  return (
    <Navbar expand=''>
      <Container>
        <div></div>
        <h1 className='app-title'>Fly Fishing Journal</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-links">
            <div className="navbar-menu-links">
              <NavLink to="/trips">Trips</NavLink>
              <NavLink to="/sign-up">Sign Up</NavLink>
              <NavLink to="/account">Account</NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar;