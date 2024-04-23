import React from "react";
import PropTypes from "prop-types";
import ReusablePastTripForm from "./ReusablePastTripForm";
import { v4 } from 'uuid';

function NewPastTripsForm(props) {
  function handleNewPastTripFormSubmission(event) {
    event.preventDefault();
    props.onNewPastTripCreation({
      location: event.target.location.value,
      timeOfYear: event.target.timeOfYear.value,
      waterType: event.target.waterType.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusablePastTripForm
        formSubmissionHandler={handleNewPastTripFormSubmission}
        buttonText={"Add Trip"}/>
    </React.Fragment>
  )
}

NewPastTripsForm.propTypes = {
  onNewPastTripCreation: PropTypes.func
}

export default NewPastTripsForm;