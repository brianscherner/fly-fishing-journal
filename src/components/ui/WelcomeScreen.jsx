import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Welcome!</h1>
      <p className="intro-text">
        Plan, log, and revisit your favorite fly fishing adventures. Easily upload photos, track details, and keep all your travel memories in one place.
      </p>
      <div className="button-group">
        <button onClick={() => navigate('/trips')}>View Trips</button>
        <button onClick={() => navigate('/account')}>Sign In</button>
        <button onClick={() => navigate('/sign-up')}>Sign Up</button>
      </div>
    </div>
  );
}

export default WelcomeScreen;