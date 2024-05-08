import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <h1>Fly Fishing Journal</h1>
      <p>Keep track of past and future fly fishing trips!</p>
      <p><Link to="/trips">Manage Trips</Link></p>
      <p><Link to="/sign-in">Sign In</Link></p>
      <hr/>
    </React.Fragment>
  )
}

export default Header;