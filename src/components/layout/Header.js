import React from 'react';
import { NavLink } from 'react-router-dom';
import PhishingIcon from '@mui/icons-material/Phishing';
import { useLoading } from "../context/LoadingContext.js";
import { useAuth } from '../context/AuthContext.js';

function Header() {
  const { currentUser } = useAuth();
  const { isLoading } = useLoading();

  return (
    <div className='app-header'>
      <div className='header'>
        <div className='header-container'>
          <h1 className='header-title'>Cast Tracker <PhishingIcon fontSize='large'/></h1>
          <div className='nav-links-wrapper'>
            <div className="nav-links">
              <div className={isLoading ? 'disabled-wrapper' : ''}>
                <NavLink to="/trips" className={`nav-link ${isLoading ? 'disabled-nav-link' : ''}`}>Trips</NavLink>
              </div>
              <p className='nav-divider'>|</p>
              <div className={isLoading ? 'disabled-wrapper' : ''}>
                <NavLink to="/account" className={`nav-link ${isLoading ? 'disabled-nav-link' : ''}`}>Account</NavLink>
              </div>
              {currentUser === null && (
                <React.Fragment>
                  <p className='nav-divider'>|</p>
                  <div className={isLoading ? 'disabled-wrapper' : ''}>
                    <NavLink to="/sign-up" className={`nav-link ${isLoading ? 'disabled-nav-link' : ''}`}>Sign Up</NavLink>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;