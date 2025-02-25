import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAuth } from '../context/AuthContext.js';

function SignUp() {
  const { currentUser, auth } = useAuth();
  const [isPassWordIconClicked, setIsPasswordIconClicked] = useState(false);
  const navigate = useNavigate();

  const handlePasswordIconClick = () => {
    setIsPasswordIconClicked(!isPassWordIconClicked);
  }

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success(`Successfully signed up as ${userCredential.user.email}.`, {
          position: "bottom-right",
          autoClose: 6000});
        sendEmailVerification(auth.currentUser);
        toast.info(`Verification email sent to ${userCredential.user.email}.`, {
          position: "bottom-right",
          autoClose: 7000});
        setTimeout(() => navigate('/trips'), 500);
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
      {currentUser === null && (
        <React.Fragment>
          <h2 className="sign-in-headings">Sign Up</h2>
          {/* <br/> */}
          <div className="row justify-content-center">
            <div className="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3">
              <form onSubmit={doSignUp}>
                <label>Email</label>
                <div className="form-input-container">
                  <input
                    className="form-control"
                    type="text"
                    name="email"
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
                    name="password"
                    />
                  {isPassWordIconClicked ?
                    <VisibilityOffIcon className="form-input-icon" id="password-icon"
                    onClick={handlePasswordIconClick}/>
                    :
                    <VisibilityIcon
                      className="form-input-icon" id="password-icon"
                      onClick={handlePasswordIconClick}/>}
                </div>
                <br/>
                <label>Confirm Password</label>
                <div className="form-input-container">
                  <input
                    className="form-control"
                    type={`${isPassWordIconClicked ? "text" : "password"}`}
                    name="confirmPassword"
                    />
                  {isPassWordIconClicked ?
                    <VisibilityOffIcon className="form-input-icon" id="password-icon"
                    onClick={handlePasswordIconClick}/>
                    :
                    <VisibilityIcon
                      className="form-input-icon" id="password-icon"
                      onClick={handlePasswordIconClick}/>}
                </div>
                <br/>
                <button
                  className="btn app-buttons"
                  type="submit"><PersonAddIcon/> Sign Up
                </button>
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