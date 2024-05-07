import React from "react";
import PropTypes from "prop-types";
import ReusableTripForm from "./ReusableTripForm";

function NewTripsForm(props) {
  function handleNewTripFormSubmission(event) {
    event.preventDefault();
    props.onNewTripCreation({
      location: event.target.location.value,
      timeOfYear: event.target.timeOfYear.value,
      waterType: event.target.waterType.value,
    });
  }

  return (
    <React.Fragment>
      <ReusableTripForm
        formSubmissionHandler={handleNewTripFormSubmission}
        buttonText={"Add Trip"}/>
    </React.Fragment>
  )
}

NewPastTripsForm.propTypes = {
  onNewTripCreation: PropTypes.func
}

export default NewTripsForm;