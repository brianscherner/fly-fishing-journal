import React, { useState } from "react";
import PropTypes from "prop-types";
import ReusableTripForm from "./ReusableTripForm";
import { auth } from "../../firebase.js";

function NewTripsForm(props) {
  const [formData, setFormData] = useState({});
  const [isFinalPageValid, setIsFinalPageValid] = useState(false);

  function handleNewTripFormSubmission(event) {
    event.preventDefault();
    if (isFinalPageValid) {
      formData.userId = auth.currentUser.uid;
      props.onNewTripCreation(formData);
    }
  }

  return (
    <React.Fragment>
      <ReusableTripForm
        formData={formData}
        setFormData={setFormData}
        isFinalPageValid={isFinalPageValid}
        setIsFinalPageValid={setIsFinalPageValid}
        formSubmissionHandler={handleNewTripFormSubmission}
        buttonText={"Add Trip"}/>
    </React.Fragment>
  )
}

NewTripsForm.propTypes = {
  onNewTripCreation: PropTypes.func,
}

export default NewTripsForm;