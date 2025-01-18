import React, { useState } from "react";
import PropTypes from "prop-types";
import ReusableTripForm from "./ReusableTripForm";
import { auth } from "../../firebase.js";

function NewTripsForm(props) {
  const [formData, setFormData] = useState({
    images: []
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleNewTripFormSubmission(event) {
    event.preventDefault();
    formData.userId = auth.currentUser.uid;
    props.onNewTripCreation(formData);
    setIsLoading(!isLoading);
  }

  return (
    <React.Fragment>
      <ReusableTripForm
        formData={formData}
        setFormData={setFormData}
        formSubmissionHandler={handleNewTripFormSubmission}
        isLoading={isLoading}
        buttonText={"Add Trip"}/>
    </React.Fragment>
  )
}

NewTripsForm.propTypes = {
  onNewTripCreation: PropTypes.func,
}

export default NewTripsForm;