import React from "react";
import PropTypes from "prop-types";

function TripDetails(props) {
  const { trip, onClickingDelete, onClickingEdit } = props;

  return (
    <div className="trip-details">
      <h4>Destination</h4>
      <p>{trip.destination}</p>
      <h4>Trip Type</h4>
      <p>{trip.tripType}</p>
      <h4>Season</h4>
      <p>{trip.season}</p>
      <h4>Water Type</h4>
      <p>{trip.waterType}</p>
      <h4>Water Body Type</h4>
      <p>{trip.waterBodyType}</p>
      <h4>Fish Species</h4>
      <p>{trip.species}</p>
      <h4>Country</h4>
      <p>{trip.country}</p>
      <h4>Required Licenses</h4>
      <p>{trip.licenses}</p>

      {trip.tripType === "Past" && (
        <React.Fragment>
          <h4>Water Fees</h4>
          <p>{trip.waterFees}</p>
          <h4>State</h4>
          <p>{trip.state}</p>
          <h4>County</h4>
          <p>{trip.county}</p>
          <h4>Access</h4>
          <p>{trip.access}</p>
          <h4>Time of Day</h4>
          <p>{trip.timeOfDay}</p>
          <h4>Fishing Method</h4>
          <p>{trip.fishingMethod}</p>
          <h4>Flies Used</h4>
          <p>{trip.fliesUsed}</p>
          <h4>Fish Caught</h4>
          <p>{trip.fishCaught}</p>
          <h4>Fishing Tackle Used</h4>
          <p>{trip.fishingTackleUsed}</p>
          <h4>River Flow Levels</h4>
          <p>{trip.riverFlowLevels}</p>
          <h4>Travel Time</h4>
          <p>{trip.travelTime}</p>
        </React.Fragment>
      )}

      {trip.tripType === "Future" && (
        <React.Fragment>
          <h4>Climate</h4>
          <p>{trip.climate}</p>
          <h4>Guided?</h4>
          <p>{trip.guidedOrNot}</p>
          <h4>Travel Documents</h4>
          <p>{trip.travelDocs}</p>
          <h4>Travel Costs</h4>
          <p>{trip.travelCosts}</p>
          <h4>Trip Expenses</h4>
          <p>{trip.tripExpenses}</p>
          <h4>Deposit Terms</h4>
          <p>{trip.depositTerms}</p>
          <h4>Cancellation Policy</h4>
          <p>{trip.cancellationPolicy}</p>
          <h4>Clothing Requirements</h4>
          <p>{trip.clothingRequirements}</p>
          <h4>Gear Requirements</h4>
          <p>{trip.gearRequirements}</p>
          <h4>Fly Requirements</h4>
          <p>{trip.flyRequirements}</p>
          <h4>Baggage/Luggage Fees</h4>
          <p>{trip.baggageLuggage}</p>
          <h4>Trip Insurance Costs</h4>
          <p>{trip.tripInsurance}</p>
          <h4>Evacuation Insurance Costs</h4>
          <p>{trip.evacInsurance}</p>
          <h4>Cell and Wifi Service</h4>
          <p>{trip.communications}</p>
          <h4>Gratuity Guidelines</h4>
          <p>{trip.gratuity}</p>
        </React.Fragment>
      )}

      <button onClick={() => onClickingEdit(trip.id)}>Edit</button>
      <br/>
      <button onClick={() => onClickingDelete(trip.id)}>Delete</button>
      <hr/>
    </div>
  );
}

TripDetails.propTypes = {
  trip: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default TripDetails;