import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PublicIcon from '@mui/icons-material/Public';
import WelcomeVideo from './WelcomeVideo';

function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className='welcome-section'>
      <WelcomeVideo/>
      <div className='welcome-container'>
        <h1>Welcome!</h1>
        <p className="intro-text">
          Plan, log, and revisit your favorite fly fishing adventures. Easily upload photos, track details, and keep all your travel memories in one place.
        </p>
        <div className="welcome-buttons-wrapper">
          <button onClick={() => navigate('/trips')} className="btn explore-button"><PublicIcon className="auth-button-icons"/> View Trips</button>
          <button onClick={() => navigate('/account')} className="btn sign-in-button"><LoginIcon className="auth-button-icons"/> Sign In</button>
          <button onClick={() => navigate('/sign-up')} className="btn sign-up-button"><PersonAddIcon className="auth-button-icons"/> Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;