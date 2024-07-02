import React, { useState, useEffect } from "react";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

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
                <a onClick={goToResetPassword} className="forgot-password">Forgot password?</a>
                <br/>
                <br/>
                <button className="btn app-buttons" type="submit">Sign In</button>
              </form>
            </div>
          </div>
        </React.Fragment>
      )}

      {userSignedIn && (
        <React.Fragment>
          <p className="username">Welcome, {auth.currentUser.email}!</p>
          <button className="btn app-buttons" onClick={doSignOut}>Sign Out</button>
        </React.Fragment>
      )}

    </React.Fragment>
  )
}

export default SignIn;