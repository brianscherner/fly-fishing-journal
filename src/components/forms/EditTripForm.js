import React, { useState } from "react";
import PropTypes from 'prop-types';
import ReusableTripForm from "./ReusableTripForm";

function EditTripForm(props) {
  const { trip, handleTripTypeSelection } = props;
  const [editFormData, setEditFormData] = useState(trip);

  function handleEditTripFormSubmission(event) {
    event.preventDefault();
    props.onEditingTrip(editFormData);
  }

  return (
    <React.Fragment>
      <ReusableTripForm
        formData={editFormData}
        setFormData={setEditFormData}
        formSubmissionHandler={handleEditTripFormSubmission}
        buttonText={"Edit"}
        tripType={handleTripTypeSelection}
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