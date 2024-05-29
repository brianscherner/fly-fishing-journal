import React, { useState } from "react";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`Sign up successful. Welcome ${userCredential.user.email}!`);
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}`);
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`Successfully signed in as ${userCredential.user.email}.`);
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}`);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess(`Successfully signed out.`);
      })
      .catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}`);
      });
  }

  return (
    <React.Fragment>
      {signOutSuccess && (
        <p className="sign-out-message">{signOutSuccess}</p>
      )}

      {signUpSuccess && (
        <p className="sign-in-messages">{signUpSuccess}</p>
      )}

      {auth.currentUser == null && (
        <React.Fragment>
          <h2 className="sign-in-headings">Sign Up</h2>
          <div className="row justify-content-center">
            <div className="col-6">
              <form onSubmit={doSignUp}>
                <input className="form-control"
                  type="text"
                  name="email"
                  placeholder="Email"/>
                <br/>
                <input className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"/>
                <br/>
                <button className="btn btn-primary app-buttons" type="submit">Sign Up</button>
              </form>
              <br/>
              {signInSuccess && (
                <p className="sign-in-messages">{signInSuccess}</p>
              )}
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
                <br/>
                <button className="btn btn-success app-buttons" type="submit">Sign In</button>
              </form>
            </div>
          </div>
        </React.Fragment>
      )}

      {auth.currentUser !== null && (
        <React.Fragment>
          {signInSuccess && (
            <p className="sign-in-messages">{signInSuccess}</p>
          )}
          <button className="btn btn-danger app-buttons" onClick={doSignOut}>Sign Out</button>
        </React.Fragment>
      )}

    </React.Fragment>
  )
}

export default SignIn;