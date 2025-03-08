import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAuth } from '../context/AuthContext.js';
import Spinner from '../ui/Spinner.js';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { formatLastSignIn, formatMemberSince } from '../utils/DateUtils.js';

function SignIn() {
  const { currentUser, auth, isAuthLoading } = useAuth();
  const [isPassWordIconClicked, setIsPasswordIconClicked] = useState(false);
  const navigate = useNavigate();

  const handlePasswordIconClick = () => {
    setIsPasswordIconClicked(!isPassWordIconClicked);
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Successfully signed in.", {
          position: "bottom-right"});
        navigate('/trips');
      })
      .catch((error) => {
        toast.error(`There was an error signing in: ${error.message}`, {
          position: "bottom-right"});
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        toast.success("Successfully signed out.", {
          position: "bottom-right"});
      })
      .catch(function(error) {
        toast.error(`There was an error signing out: ${error.message}`, {
          position: "bottom-right"});
      });
  }

  function goToResetPassword() {
    navigate('/reset-password');
  }

  console.log("Current user: ", currentUser);
  return (
    <React.Fragment>
      {isAuthLoading && currentUser !== null && (
        <Spinner/>
      )}

      {!isAuthLoading && currentUser === null && (
        <React.Fragment>
          <div className="row justify-content-center">
            <div className="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3">
              <h2 className="sign-in-headings">Sign In</h2>
              {/* <br/> */}
              <form onSubmit={doSignIn}>
                <label>Email</label>
                <div className="form-input-container">
                  <input
                    className="form-control"
                    type="text"
                    name="signInEmail"
                    />
                  <EmailIcon
                    className="form-input-icon"
                    id="email-icon"/>
                </div>
                <br/>
                <label>Password</label>
                <div className="form-input-container">
                  <input
                    className="form-control"
                    type={`${isPassWordIconClicked ? "text" : "password"}`}
                    name="signInPassword"
                    />
                  {isPassWordIconClicked ?
                      <VisibilityOffIcon className="form-input-icon" id="password-icon"
                      onClick={handlePasswordIconClick}/>
                      :
                      <VisibilityIcon
                        className="form-input-icon" id="password-icon"
                        onClick={handlePasswordIconClick}/>}
                </div>
                {/* <br/> */}
                <button type="button" onClick={goToResetPassword} className="forgot-password">Forgot password?</button>
                <br/>
                <br/>
                <button
                  className="btn app-buttons"
                  type="submit"><LoginIcon/> Sign In
                </button>
              </form>
            </div>
          </div>
        </React.Fragment>
      )}

      {!isAuthLoading && currentUser !== null && (
        <React.Fragment>
          <div className="current-user-container">
            <div className="current-user-metadata">
              <div className="current-user">
                <AccountCircleIcon
                  fontSize="large"
                  id="user-icon"/>
                <p className="username">{currentUser.email}</p>
              </div>
              <div className="current-user">
                <AccessTimeIcon
                  fontSize="large"
                  id="user-icon"/>
                <p className="user-metadata">Last sign in {formatLastSignIn(currentUser.metadata.lastSignInTime)}</p>
              </div>
              <div className="current-user">
                <CalendarMonthIcon
                    fontSize="large"
                    id="user-icon"/>
                <p className="user-metadata">Member since {formatMemberSince(currentUser.metadata.creationTime)}</p>
              </div>
              <div className="current-user">
                <p className="user-metadata">Email verified: {currentUser.emailVerified ? <CheckCircleIcon fontSize="large" id="user-icon"/> : <CancelIcon fontSize="large" id="user-icon"/>}</p>
              </div>
            </div>
          </div>
          <button
            className="btn app-buttons"
            onClick={doSignOut}><LogoutIcon/> Sign Out
          </button>
        </React.Fragment>
      )}

    </React.Fragment>
  )
}

export default SignIn;