import React from "react";
import PropTypes from 'prop-types';
import ReusablePastTripForm from "./ReusablePastTripForm";

function EditPastTripForm(props) {
  const { pastTrip } = props;

  function handleEditPastTripFormSubmission(event) {
    event.preventDefault();
    props.onEditingPastTrip({
      location: event.target.location.value,
      timeOfYear: event.target.timeOfYear.value,
      waterType: event.target.waterType.value,
      id: pastTrip.id
    })
  }

  return (
    <React.Fragment>
      <ReusablePastTripForm
        formSubmissionHandler={handleEditPastTripFormSubmission}
        buttonText={"Edit"}/>
    </React.Fragment>
  )
}

EditPastTripForm.propTypes = {
  pastTrip: PropTypes.object,
  onEditingPastTrip: PropTypes.func
}

export default EditPastTripForm;