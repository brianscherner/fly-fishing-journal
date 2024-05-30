import React, { useState } from "react";
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

function SignIn() {
  const [messageToUser, setMessageToUser] = useState(null);

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setMessageToUser(`Successfully signed in as ${userCredential.user.email}.`);
      })
      .catch((error) => {
        setMessageToUser(`There was an error signing in: ${error.message}`);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setMessageToUser(`Successfully signed out.`);
      })
      .catch(function(error) {
        setMessageToUser(`There was an error signing out: ${error.message}`);
      });
  }

  return (
    <React.Fragment>
      {messageToUser && (
        <p className="sign-in-messages" style={{color: messageToUser.toLowerCase().includes('error') ? '#dc3545' : '#198754'}}>{messageToUser}</p>
      )}

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
                <button className="btn btn-primary app-buttons" type="submit">Sign In</button>
              </form>
            </div>
          </div>
        </React.Fragment>
      )}

      {auth.currentUser !== null && (
        <React.Fragment>
          <button className="btn btn-danger app-buttons" onClick={doSignOut}>Sign Out</button>
        </React.Fragment>
      )}

    </React.Fragment>
  )
}

export default SignIn;