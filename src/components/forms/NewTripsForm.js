import React, { useState } from "react";
import PropTypes from "prop-types";
import ReusableTripForm from "./ReusableTripForm";

function NewTripsForm(props) {
  const [formData, setFormData] = useState({});

  function handleNewTripFormSubmission(event) {
    event.preventDefault();
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