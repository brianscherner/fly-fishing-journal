import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PhishingIcon from '@mui/icons-material/Phishing';
import { useLoading } from "../context/LoadingContext.js";
import { useAuth } from '../context/AuthContext.js';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
  const { currentUser } = useAuth();
  const { isLoading } = useLoading();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccountMenu = () => {
    setIsExpanded(!isExpanded);
  }

  console.log("Is expanded: ", isExpanded);
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
              {currentUser !== null && (
                <KeyboardArrowDownIcon onClick={toggleAccountMenu} className='expand-account-arrow' style={isExpanded ? { transform: 'rotate(180deg)'} : {}}/>
              )}
              {currentUser === null && (
                <React.Fragment>
                  <div className='nav-divider'>|</div>
                  <div className={isLoading ? 'disabled-wrapper' : ''}>
                    <NavLink to="/sign-up" className={`nav-link ${isLoading ? 'disabled-nav-link' : ''}`}>Sign Up</NavLink>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
          {isExpanded && (
            <div className='account-dropdown'>
              <p className='account-user'>
                <AccountCircleIcon/> {currentUser.email}
              </p>
              <button id="account-dropdown-signout"><LogoutIcon/> Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;