import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import PhishingIcon from '@mui/icons-material/Phishing';
import { useLoading } from "../context/LoadingContext";
import { useAuth } from '../context/AuthContext.js';

function CustomNavbar() {
  const { currentUser } = useAuth();
  const { isLoading } = useLoading();

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
              <p className='menu-pipe'>|</p>
              <div className={isLoading ? 'disabled-wrapper' : ''}>
                <NavLink to="/account" className={`navbar-link ${isLoading ? 'nav-is-disabled' : ''}`}>Account</NavLink>
              </div>
              {currentUser === null && (
                <React.Fragment>
                  <p className='menu-pipe'>|</p>
                  <div className={isLoading ? 'disabled-wrapper' : ''}>
                    <NavLink to="/sign-up" className={`navbar-link ${isLoading ? 'nav-is-disabled' : ''}`}>Sign Up</NavLink>
                  </div>
                </React.Fragment>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar;