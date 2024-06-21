import React, { useState } from "react";
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [userSignedIn, setUserSignedIn] = useState(false);
  console.log(userSignedIn);
  console.log("User: ", auth.currentUser);

  const toggleSignInStatus = () => {
    setUserSignedIn((userSignedIn) => !userSignedIn);
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Successfully signed in.", {
          position: "bottom-right"});
        toggleSignInStatus();
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
        toggleSignInStatus();
      })
      .catch(function(error) {
        toast.error(`There was an error signing out: ${error.message}`, {
          position: "bottom-right"});
      });
  }

  return (
    <React.Fragment>
      {auth.currentUser == null && (
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
                <br/>
                <button className="btn app-buttons" type="submit">Sign In</button>
              </form>
            </div>
          </div>
        </React.Fragment>
      )}

      {auth.currentUser !== null && (
        <React.Fragment>
          <p className="username">Username: {auth.currentUser.email}</p>
          <button className="btn app-buttons" onClick={doSignOut}>Sign Out</button>
        </React.Fragment>
      )}

      <ToastContainer/>
    </React.Fragment>
  )
}

export default SignIn;