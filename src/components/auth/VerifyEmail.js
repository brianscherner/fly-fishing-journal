import React from "react";
import { auth } from "../../firebase.js";
import { sendEmailVerification, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

function VerifyEmail() {
  const navigate = useNavigate();

  function doSendVerificationEmail(event) {
    event.preventDefault();
    sendEmailVerification(auth.currentUser)
      .then(() => {
        toast.success(`Email verification sent. Please check your inbox.`, {
          position: "bottom-right"});
        signOut(auth);
        navigate('/account');
      })
      .catch((error) => {
        toast.error(`There was an error sending email verification: ${error.message}`, {
          position: "bottom-right"});
      });
  }

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="sign-in-headings">Verify Email Address</h2>
          <button className="btn app-buttons" type="submit" onClick={doSendVerificationEmail}>Send Verification Email</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default VerifyEmail;