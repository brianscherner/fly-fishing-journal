import React from "react";
import PropTypes from "prop-types";
import ReusablePastTripForm from "./ReusablePastTripForm";

function NewPastTripsForm(props) {
  function handleNewPastTripFormSubmission(event) {
    event.preventDefault();
    props.onNewPastTripCreation({
      location: event.target.location.value,
      timeOfYear: event.target.timeOfYear.value,
      waterType: event.target.waterType.value,
    });
  }

  return (
    <React.Fragment>
      <ReusablePastTripForm
        formSubmissionHandler={handleNewPastTripFormSubmission}
        buttonText={"Add Past Trip"}/>
    </React.Fragment>
  )
}

NewPastTripsForm.propTypes = {
  onNewPastTripCreation: PropTypes.func
}

export default NewPastTripsForm;