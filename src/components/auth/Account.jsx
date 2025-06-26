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
import { useAuth } from '../context/AuthContext';
import Spinner from '../ui/Spinner';
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

  return (
    <React.Fragment>
      {isAuthLoading && currentUser !== null && (
        <Spinner/>
      )}

      {!isAuthLoading && currentUser === null && (
        <React.Fragment>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-4">
              <h2 className="sign-in-headings">Sign In</h2>
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
                <button type="button" onClick={goToResetPassword} className="forgot-password">Forgot password?</button>
                <br/>
                <br/>
                <button
                  className="btn app-buttons"
                  type="submit"><LoginIcon className="auth-button-icons"/> Sign In
                </button>
              </form>
            </div>
          </div>
        </React.Fragment>
      )}

      {!isAuthLoading && currentUser !== null && (
        <React.Fragment>
          <div className="account-container">
            <div className="account">
              {/* <h2 className="sign-in-headings" style={{ marginBottom: "14px"}}>Account</h2> */}
              {/* <div className="heading-break-wrapper">
                <hr className="heading-break"/>
              </div> */}
              <div className="current-user-container">
                <div className="current-user-metadata">
                  <div className="current-user">
                    <AccountCircleIcon
                      fontSize="large"
                      className="user-icon"/>
                    <p className="username">{currentUser.email}</p>
                  </div>
                  <div className="current-user">
                    <AccessTimeIcon
                      fontSize="large"
                      className="user-icon"/>
                    <p className="user-metadata" id="last-sign-in">Last sign in {formatLastSignIn(currentUser.metadata.lastSignInTime)}</p>
                  </div>
                  <div className="current-user">
                    <CalendarMonthIcon
                        fontSize="large"
                        className="user-icon"/>
                    <p className="user-metadata">Joined {formatMemberSince(currentUser.metadata.creationTime)}</p>
                  </div>
                  <div className="current-user">
                    <p className="user-metadata">{currentUser.emailVerified ? <CheckCircleIcon fontSize="large" className="user-icon"/> : <CancelIcon fontSize="large" className="user-icon"/>} Email verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn app-buttons"
            onClick={doSignOut}><LogoutIcon className="auth-button-icons"/> Sign Out
          </button>
        </React.Fragment>
      )}

    </React.Fragment>
  )
}

export default SignIn;