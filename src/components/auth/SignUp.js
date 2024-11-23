import React, { useState, useEffect } from "react";
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function SignUp() {
  const [userSignedUp, setUserSignedUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((createdUser) => {
      if (createdUser) {
        setUserSignedUp(true);
      } else {
        setUserSignedUp(false);
      }
    });

    return () => unsubscribe();
  }, []);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
        signOut(auth);
        toast.success(`Verification email sent to ${userCredential.user.email}!`, {
          position: "bottom-right"});
        navigate('/account');
      })
      .catch((error) => {
        toast.error(`There was an error signing up: ${error.message}`, {
          position: "bottom-right"});
      });
    } else {
      toast.error(`Passwords do not match. Please try again.`, {
        position: "bottom-right"});
    }
  }

  return (
    <React.Fragment>
      {!userSignedUp && (
        <React.Fragment>
          <h2 className="sign-in-headings">Sign Up</h2>
          <br/>
          <div className="row justify-content-center">
            <div className="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3">
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
                <input className="form-control"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"/>
                <br/>
                <button className="btn app-buttons" type="submit">Sign Up <PersonAddIcon/></button>
              </form>
              <br/>
            </div>
          </div>
        </React.Fragment>
      )}

    </React.Fragment>
  )
}

export default SignUp;