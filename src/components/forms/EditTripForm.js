import React, { useState } from "react";
import PropTypes from 'prop-types';
import ReusableTripForm from "./ReusableTripForm";

function EditTripForm(props) {
  const { trip } = props;
  const [editFormData, setEditFormData] = useState(trip);
  const [isFinalPageValid, setIsFinalPageValid] = useState(false);

  function handleEditTripFormSubmission(event) {
    event.preventDefault();
    const updatedTrip = {...trip, ...editFormData};
    if (isFinalPageValid) {
      props.onEditingTrip(updatedTrip);
    }
  }

  return (
    <React.Fragment>
      <ReusableTripForm
        formData={editFormData}
        setFormData={setEditFormData}
        isFinalPageValid={isFinalPageValid}
        setIsFinalPageValid={setIsFinalPageValid}
        formSubmissionHandler={handleEditTripFormSubmission}
        buttonText={"Edit"}
        tripType={trip.tripType}
        trip={trip}
        />
    </React.Fragment>
  )
}

EditTripForm.propTypes = {
  trip: PropTypes.object.isRequired,
  formData: PropTypes.object,
  handleTripTypeSelection: PropTypes.func,
  onEditingTrip: PropTypes.func
}

export default EditTripForm;