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
      editTripFormData.waterFees = event.target.waterFees.value;
      editTripFormData.state = event.target.state.value;
      editTripFormData.county = event.target.county.value;
      editTripFormData.access = event.target.access.value;
      editTripFormData.fishingMethod = event.target.fishingMethod.value;
      editTripFormData.fliesUsed = event.target.fliesUsed.value;
      editTripFormData.fishCaught = event.target.fishCaught.value;
      editTripFormData.fishingTackleUsed = event.target.fishingTackleUsed.value;
      editTripFormData.riverFlowLevels = event.target.riverFlowLevels.value;
      editTripFormData.travelTime = event.target.travelTime.value;
    } else if (editTripFormData.tripType === "Future") {
      editTripFormData.climate = event.target.climate.value;
      editTripFormData.guidedOrNot = event.target.guidedOrNot.value;
      editTripFormData.travelCosts = event.target.travelCosts.value;
      editTripFormData.travelDocs = event.target.travelDocs.value;
      editTripFormData.tripExpenses = event.target.tripExpenses.value;
      editTripFormData.depositTerms = event.target.depositTerms.value;
      editTripFormData.cancellationPolicy = event.target.cancellationPolicy.value;
      editTripFormData.clothingRequirements = event.target.clothingRequirements.value;
      editTripFormData.gearRequirements = event.target.gearRequirements.value;
      editTripFormData.flyRequirements = event.target.flyRequirements.value;
      editTripFormData.baggageLuggage = event.target.baggageLuggage.value;
      editTripFormData.tripInsurance = event.target.tripInsurance.value;
      editTripFormData.evacInsurance = event.target.evacInsurance.value;
      editTripFormData.communications = event.target.communications.value;
      editTripFormData.gratuity = event.target.gratuity.value;
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