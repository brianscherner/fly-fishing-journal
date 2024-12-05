import React, { useState } from "react";
import PropTypes from "prop-types";
import ReusableTripForm from "./ReusableTripForm";
import { auth } from "../../firebase.js";

function NewTripsForm(props) {
  const [formData, setFormData] = useState({
    images: []
  });

  function handleNewTripFormSubmission(event) {
    event.preventDefault();
    formData.userId = auth.currentUser.uid;
    props.onNewTripCreation(formData);
  }

  return (
    <React.Fragment>
      <ReusableTripForm
        formData={formData}
        setFormData={setFormData}
        formSubmissionHandler={handleNewTripFormSubmission}
        buttonText={"Add Trip"}/>
    </React.Fragment>
  )
}

NewTripsForm.propTypes = {
  onNewTripCreation: PropTypes.func,
}

export default NewTripsForm;