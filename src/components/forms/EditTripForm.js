import React, { useState } from "react";
import PropTypes from 'prop-types';
import ReusableTripForm from "./ReusableTripForm";

// this form is not receiving the default values from the reusable form. The values should be in the fields. //

// need to somehow gather the data from each step of the form and then submit it. //

function EditTripForm(props) {
  const { trip, formData } = props;
  // const [formData, setFormData] = useState({});
  const [editFormData, setEditFormData] = useState(formData);

  function handleEditTripFormSubmission(event) {
    event.preventDefault();
    props.onEditingTrip(editFormData);
  }

  console.log(formData);
  return (
    <React.Fragment>
      <ReusableTripForm
        formData={formData}
        setEditFormData={setEditFormData}
        formSubmissionHandler={handleEditTripFormSubmission}
        buttonText={"Edit"}
        tripType={trip.tripType}
        trip={trip}/>
    </React.Fragment>
  )
}

EditTripForm.propTypes = {
  trip: PropTypes.object,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  onEditingTrip: PropTypes.func
}

export default EditTripForm;