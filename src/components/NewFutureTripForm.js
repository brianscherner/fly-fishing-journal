import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableFutureTripForm from "./ReusableFutureTripForm";

function NewFutureTripForm(props) {
  function handleNewFutureTripFormSubmission(event) {
    event.preventDefault();
    props.onNewFutureTripCreation({
      location: event.target.location.value,
      type: event.target.type.value,
      fishSpecies: event.target.fishSpecies.value,
      climate: event.target.climate.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableFutureTripForm
        formSubmissionHandler={handleNewFutureTripFormSubmission}
        buttonText={"Add Future Trip"}/>
    </React.Fragment>
  )
}

NewFutureTripForm.propTypes = {
  onNewFutureTripCreation: PropTypes.func,
}

export default NewFutureTripForm;