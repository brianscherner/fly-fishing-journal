import React from "react";
import PropTypes from "prop-types";
import ReusableTripForm from "./ReusableTripForm";

function NewTripsForm(props) {
  function handleNewTripFormSubmission(event) {
    event.preventDefault();
    const tripType = event.target.tripType.value;
    const destinationType = event.target.destinationType.value;
    const waterType = event.target.waterType.value;
    const season = event.target.season.value;

    const tripFormData = {
      tripType: tripType,
      destination: event.target.destination.value,
      destinationType: destinationType,
      waterType: waterType,
      country: event.target.country.value,
      species: event.target.species.value,
      season: season,
      licenses: event.target.licenses.value,
    }

    if (tripType === "Past") {
      tripFormData.timeOfDay = event.target.timeOfDay.value;
    } else if (tripType === "Future") {
      tripFormData.climate = event.target.climate.value;
    }

    props.onNewTripCreation(tripFormData);
  }

  return (
    <React.Fragment>
      <ReusableTripForm
        formSubmissionHandler={handleNewTripFormSubmission}
        buttonText={"Add Trip"}/>
    </React.Fragment>
  )
}

NewTripsForm.propTypes = {
  onNewTripCreation: PropTypes.func
}

export default NewTripsForm;