import React from 'react';

function Footer() {
  return (
    <React.Fragment>
      <footer style={{ position: "fixed", textAlign: "center"}}>
        {/* <div class="footer-navigation">
          <a href="/trips">Trips</a>
          <a href="/account">Account</a>
          <a href="/sign-up">Sign Up</a>
        </div>
        <div class="footer-secondary">
          <a href="/about">About Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </div> */}
        <p>&copy; 2024 Fly Fishing Journal. All rights reserved.</p>
      </footer>
    </React.Fragment>
  )
}

export default Footer;