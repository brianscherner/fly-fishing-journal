import React from 'react';
import { NavLink } from 'react-router-dom';
import PhishingIcon from '@mui/icons-material/Phishing';
import { useLoading } from "../context/LoadingContext";
import { useAuth } from '../context/AuthContext';

function Header() {
  const { currentUser } = useAuth();
  const { isLoading } = useLoading();

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
              <div className='nav-divider'>|</div>
              <div className={isLoading ? 'disabled-wrapper' : ''} id={currentUser ? 'disabled-sign-up-wrapper' : ''}>
                <NavLink to="/sign-up" className={`nav-link ${isLoading ? 'disabled-nav-link' : ''}`} id={currentUser ? 'disabled-sign-up' : ''}>Sign Up</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;