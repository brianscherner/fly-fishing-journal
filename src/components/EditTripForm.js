import React from "react";
import PropTypes from 'prop-types';
import ReusableTripForm from "./ReusableTripForm";

function EditTripForm(props) {
  const { trip } = props;

  function handleEditTripFormSubmission(event) {
    event.preventDefault();

    const editTripFormData = {
      tripType: event.target.tripType.value,
      destination: event.target.destination.value,
      destinationType: event.target.destinationType.value,
      waterType: event.target.waterType.value,
      country: event.target.country.value,
      species: event.target.species.value,
      season: event.target.season.value,
      licenses: event.target.licenses.value,
      id: trip.id
    }

    if (editTripFormData.tripType === "Past") {
      editTripFormData.timeOfDay = event.target.timeOfDay.value;
    } else if (editTripFormData.tripType === "Future") {
      editTripFormData.climate = event.target.climate.value;
    }

    props.onEditingTrip(editTripFormData);
  }

  return (
    <React.Fragment>
      <ReusableTripForm
        formSubmissionHandler={handleEditTripFormSubmission}
        buttonText={"Edit"}
        tripType={trip.tripType}
        trip={trip}/>
    </React.Fragment>
  )
}

EditTripForm.propTypes = {
  trip: PropTypes.object,
  onEditingTrip: PropTypes.func
}

export default EditTripForm;