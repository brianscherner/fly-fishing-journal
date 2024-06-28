import React from "react";
import { auth } from "../../firebase.js";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();

  function doResetPassword(event) {
    event.preventDefault();
    const email = event.target.resetEmail.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info(`Password reset email sent to ${email}.`, {
          position: "bottom-right"});
        navigate('/account');
      })
      .catch((error) => {
        toast.error(`There was an error sending password reset email: ${error.message}`, {
          position: "bottom-right"});
      });
  }

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="sign-in-headings">Reset Password</h2>
          <form onSubmit={doResetPassword}>
            <input className="form-control"
              type="text"
              name="resetEmail"
              placeholder="Email"/>
            <br/>
            <button className="btn app-buttons" type="submit">Send Password Reset Email</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ResetPassword;