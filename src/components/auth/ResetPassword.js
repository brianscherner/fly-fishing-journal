import React from "react";
import { auth } from "../../firebase.js";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

function ResetPassword() {
  const navigate = useNavigate();

  function doResetPassword(event) {
    event.preventDefault();
    const email = event.target.resetEmail.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`Password reset email sent to ${email}.`, {
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
        {/* look into adjusting width for responsiveness */}
        <div className="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3">
          <h2 className="sign-in-headings">Reset Password</h2>
          <br/>
          <form onSubmit={doResetPassword}>
            <div className="form-input-container">
              <input className="form-control"
                type="text"
                name="resetEmail"
                placeholder="Email"/>
              <EmailIcon
                className="form-input-icon"
                id="email-icon"/>
            </div>
            <br/>
            <button
              className="btn app-buttons"
              type="submit">Send Email &nbsp;<SendIcon/>
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ResetPassword;