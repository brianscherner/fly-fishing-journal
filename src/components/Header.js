import React from 'react';
import CustomNavbar from './CustomNavbar';

function Header() {
  return (
    <React.Fragment>
      <div className='app-header'>
        <CustomNavbar/>
        <br/>
      </div>
    </React.Fragment>
  )
}

export default Header;