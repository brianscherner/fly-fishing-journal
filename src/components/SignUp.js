import React, { useState } from "react";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [messageToUser, setMessageToUser] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setMessageToUser(`Sign up successful. Welcome ${userCredential.user.email}!`);
      })
      .catch((error) => {
        setMessageToUser(`There was an error signing up: ${error.message}`);
      });
  }

  return (
    <React.Fragment>
      {messageToUser && (
        <p className="sign-in-messages" style={{color: messageToUser.toLowerCase().includes('error') ? '#dc3545' : '#198754'}}>{messageToUser}</p>
      )}

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
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignUp;