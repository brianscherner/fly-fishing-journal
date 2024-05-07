import React, { useState } from "react";
import { auth } from "./../firebase.js";
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
      <h1>Sign Up</h1>
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input
          type="text"
          name="email"
          placeholder="email"/>
        <br/>
        <input
          type="password"
          name="password"
          placeholder="Password"/>
        <br/>
        <button type="submit">Sign Up</button>
      </form>
      <br/>
      <h1>Sign In</h1>
      {signInSuccess}
      <form onSubmit={doSignIn}>
        <input
          type="text"
          name="signInEmail"
          placeholder="email"/>
        <br/>
        <input
          type="password"
          name="signInPassword"
          placeholder="Password"/>
        <br/>
        <button type="submit">Sign In</button>
      </form>
      <br/>
      {signOutSuccess}
      <br/>
      <button onClick={doSignOut}>Sign Out</button>
    </React.Fragment>
  )
}

export default SignIn;