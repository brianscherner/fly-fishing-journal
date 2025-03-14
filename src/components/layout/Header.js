import React from 'react';
import { NavLink } from 'react-router-dom';
import PhishingIcon from '@mui/icons-material/Phishing';
import { useLoading } from "../context/LoadingContext.js";
import { useAuth } from '../context/AuthContext.js';

function Header() {
  const { currentUser, isAuthLoading } = useAuth();
  const { isLoading } = useLoading();

  console.log("Is auth loading: ", isAuthLoading);
  return (
    <div className='app-header'>
      <div className='header'>
        <div className='header-container'>
          <h1 className='header-title'>Cast Tracker <PhishingIcon sx={{ fontSize: "2.75rem" }}/></h1>
          <div className='nav-links-wrapper'>
            <div className="nav-links">
              <div className={isLoading ? 'disabled-wrapper' : ''}>
                <NavLink to="/trips" className={`nav-link ${isLoading ? 'disabled-nav-link' : ''}`}>Trips</NavLink>
              </div>
              <div className='nav-divider'>|</div>
              <div className={isLoading ? 'disabled-wrapper' : ''}>
                <NavLink to="/account" className={`nav-link ${isLoading ? 'disabled-nav-link' : ''}`}>Account</NavLink>
              </div>
              {/* trying to fix issue of Sign Up flickering when user refreshes page */}
              {currentUser === null && !isAuthLoading && (
                <React.Fragment>
                  <div className='nav-divider'>|</div>
                  <div className={isLoading ? 'disabled-wrapper' : ''}>
                    <NavLink to="/sign-up" className={`nav-link ${isLoading ? 'disabled-nav-link' : ''}`}>Sign Up</NavLink>
                  </div>
                </React.Fragment>
              )}
              {/* {currentUser === null && (
                <React.Fragment>
                  <div className='nav-divider'>|</div>
                  <div className={isLoading ? 'disabled-wrapper' : ''}>
                    <NavLink to="/sign-up" className={`nav-link ${isLoading ? 'disabled-nav-link' : ''}`}>Sign Up</NavLink>
                  </div>
                </React.Fragment>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;