import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <h1>Fly Fishing Journal</h1>
      <p>Keep track of past and future fly fishing trips!</p>
      <p><Link to="/past-trips">Manage Past Trips</Link></p>
      <p><Link to="/future-trips">Manage Future Trips</Link></p>
      <hr/>
    </React.Fragment>
  )
}

export default Header;