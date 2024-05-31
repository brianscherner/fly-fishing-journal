import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='header-links'>
      <nav className="navbar navbar-expand">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/trips">
                <div className={"nav-link"} href="#">
                  Trips
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account">
                <div className={"nav-link"} href="#">
                  Account
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">
                <div className={"nav-link"} href="#">
                  Sign Up
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;