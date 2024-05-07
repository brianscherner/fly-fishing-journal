import React from "react";
import PropTypes from 'prop-types';
import ReusableTripForm from "./ReusableTripForm";

function EditTripForm(props) {
  const { trip } = props;

  function handleEditTripFormSubmission(event) {
    event.preventDefault();
    props.onEditingTrip({
      location: event.target.location.value,
      timeOfYear: event.target.timeOfYear.value,
      waterType: event.target.waterType.value,
      id: trip.id
    })
  }

  return (
    <React.Fragment>
      <ReusableTripForm
        formSubmissionHandler={handleEditTripFormSubmission}
        buttonText={"Edit"}/>
    </React.Fragment>
  )
}

EditTripForm.propTypes = {
  trip: PropTypes.object,
  onEditingTrip: PropTypes.func
}

export default EditTripForm;