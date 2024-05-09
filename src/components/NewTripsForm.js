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
    const waterBodyType = event.target.waterBodyType.value;

    const tripFormData = {
      tripType: tripType,
      destination: event.target.destination.value,
      destinationType: destinationType,
      waterType: waterType,
      country: event.target.country.value,
      species: event.target.species.value,
      season: season,
      licenses: event.target.licenses.value,
      waterBodyType: waterBodyType,
    }

    if (tripType === "Past") {
      tripFormData.timeOfDay = event.target.timeOfDay.value;
      tripFormData.waterFees = event.target.waterFees.value;
      tripFormData.state = event.target.state.value;
      tripFormData.county = event.target.county.value;
      tripFormData.access = event.target.access.value;
      tripFormData.fishingMethod = event.target.fishingMethod.value;
      tripFormData.fliesUsed = event.target.fliesUsed.value;
      tripFormData.fishCaught = event.target.fishCaught.value;
      tripFormData.fishingTackleUsed = event.target.fishingTackleUsed.value;
      tripFormData.riverFlowLevels = event.target.riverFlowLevels.value;
      tripFormData.travelTime = event.target.travelTime.value;
    } else if (tripType === "Future") {
      tripFormData.climate = event.target.climate.value;
      tripFormData.guidedOrNot = event.target.guidedOrNot.value;
      tripFormData.travelCosts = event.target.travelCosts.value;
      tripFormData.travelDocs = event.target.travelDocs.value;
      tripFormData.tripExpenses = event.target.tripExpenses.value;
      tripFormData.depositTerms = event.target.depositTerms.value;
      tripFormData.cancellationPolicy = event.target.cancellationPolicy.value;
      tripFormData.clothingRequirements = event.target.clothingRequirements.value;
      tripFormData.gearRequirements = event.target.gearRequirements.value;
      tripFormData.flyRequirements = event.target.flyRequirements.value;
      tripFormData.baggageLuggage = event.target.baggageLuggage.value;
      tripFormData.tripInsurance = event.target.tripInsurance.value;
      tripFormData.evacInsurance = event.target.evacInsurance.value;
      tripFormData.communications = event.target.communications.value;
      tripFormData.gratuity = event.target.gratuity.value;
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