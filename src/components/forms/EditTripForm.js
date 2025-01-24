import React, { useState } from "react";
import PropTypes from 'prop-types';
import ReusableTripForm from "./ReusableTripForm";

function EditTripForm(props) {
  const { trip } = props;
  const [editFormData, setEditFormData] = useState(trip);
  const [isLoading, setIsLoading] = useState(false);

  function handleEditTripFormSubmission(event) {
    event.preventDefault();
    const updatedTrip = {...trip, ...editFormData};
    props.onEditingTrip(updatedTrip);
    setIsLoading(!isLoading);
  }

  return (
    <React.Fragment>
      <ReusableTripForm
        formData={editFormData}
        setFormData={setEditFormData}
        formSubmissionHandler={handleEditTripFormSubmission}
        buttonText={"Edit"}
        tripType={trip.tripType}
        trip={trip}
        isLoading={isLoading}
        />
    </React.Fragment>
  )
}

EditTripForm.propTypes = {
  trip: PropTypes.object.isRequired,
  formData: PropTypes.object,
  handleTripTypeSelection: PropTypes.func,
  onEditingTrip: PropTypes.func,
}

export default EditTripForm;