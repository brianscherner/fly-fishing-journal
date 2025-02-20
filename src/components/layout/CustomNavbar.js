import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { auth } from "../../firebase.js";
import PhishingIcon from '@mui/icons-material/Phishing';
import { useLoading } from "../context/LoadingContext";

function CustomNavbar() {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const { isLoading } = useLoading();

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
        <h1 className='app-title'>Cast Tracker <PhishingIcon fontSize='large'/></h1>
        {/* put 1 sentence here explaining app's purpose */}
        <div className={isLoading ? 'disabled-wrapper' : ''}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={isLoading ? 'nav-is-disabled' : ''} disabled={isLoading}/>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-links">
            <div className="navbar-menu-links">
              <div className={isLoading ? 'disabled-wrapper' : ''}>
                <NavLink to="/trips" className={`navbar-link ${isLoading ? 'nav-is-disabled' : ''}`}>Trips</NavLink>
              </div>
              {!userSignedIn && (
                <div className={isLoading ? 'disabled-wrapper' : ''}>
                  <NavLink to="/sign-up" className={`navbar-link ${isLoading ? 'nav-is-disabled' : ''}`}>Sign Up</NavLink>
                </div>
              )}
              <div className={isLoading ? 'disabled-wrapper' : ''}>
                <NavLink to="/account" className={`navbar-link ${isLoading ? 'nav-is-disabled' : ''}`}>Account</NavLink>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar;