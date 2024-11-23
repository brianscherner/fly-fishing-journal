import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { auth } from "../firebase.js";

function CustomNavbar() {
  const [userSignedIn, setUserSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserSignedIn(true);
      } else {
        setUserSignedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Navbar expand=''>
      <Container>
        <div></div>
        <h1 className='app-title'>Cast Tracker</h1>
        {/* put 1 sentence here explaining app's purpose */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-links">
            <div className="navbar-menu-links">
              <NavLink to="/trips" className="navbar-link">Trips</NavLink>
              {!userSignedIn && (
                <NavLink to="/sign-up" className="navbar-link">Sign Up</NavLink>
              )}
              <NavLink to="/account" className="navbar-link">Account</NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar;