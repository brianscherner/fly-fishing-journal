import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <React.Fragment>
      <div className='app-header'>
        <h1 className='app-title'>Fly Fishing Journal</h1>
        <hr/>
        <Navbar/>
        <hr/>
      </div>
    </React.Fragment>
  )
}

export default Header;