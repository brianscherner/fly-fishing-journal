import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <div className='app-header'>
        <h1 className='app-title'>Fly Fishing Journal</h1>
        <p className='header-message'>Keep track of your fly fishing trips!</p>
        <div className='header-links'>
          <p><Link to="/trips">Manage Trips</Link></p>
          <p><Link to="/account">Account</Link></p>
          <p><Link to="/sign-up">Sign Up</Link></p>
        </div>
        <hr/>
      </div>
    </React.Fragment>
  )
}

export default Header;