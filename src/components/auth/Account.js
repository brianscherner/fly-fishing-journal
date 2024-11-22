import React, { useState, useEffect } from "react";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SignIn() {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserSignedIn(true);
      } else {
        setUserSignedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

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
      {!userSignedIn && (
        <React.Fragment>
          <div className="row justify-content-center">
            <div className="col-6">
              <h2 className="sign-in-headings">Sign In</h2>
              <form onSubmit={doSignIn}>
                <input className="form-control"
                  type="text"
                  name="signInEmail"
                  placeholder="Email"/>
                <br/>
                <input className="form-control"
                  type="password"
                  name="signInPassword"
                  placeholder="Password"/>
                <button type="button" onClick={goToResetPassword} className="forgot-password">Forgot password?</button>
                <br/>
                <br/>
                <button className="btn app-buttons" type="submit">Sign In <LoginIcon/></button>
              </form>
            </div>
          </div>
        </React.Fragment>
      )}

      {userSignedIn && (
        <React.Fragment>
          <div className="current-user">
            <AccountCircleIcon fontSize="large"/>
            <p className="username">{auth.currentUser.email}</p>
          </div>
          <button className="btn app-buttons" onClick={doSignOut}>Sign Out <LogoutIcon/></button>
        </React.Fragment>
      )}

    </React.Fragment>
  )
}

export default SignIn;