import React from "react";
import PropTypes from "prop-types";

function TripCostsFields(props) {
  const { trip } = props;

  const travelCosts = <input type="text" name="travelCosts" placeholder="Travel Costs" defaultValue={trip !== undefined ? trip.travelCosts : ''}/>

  const travelDocs =
  <select name="travelDocs" defaultValue={trip !== undefined ? trip.travelDocs : ''}>
    <option value="" disabled selected>Travel Documents</option>
    <option value="passport">Passport</option>
    <option value="visa">Visa</option>
  </select>

  const tripExpenses = <input type="text" name="tripExpenses" placeholder="Trip Expenses" defaultValue={trip !== undefined ? trip.tripExpenses : ''}/>

  const depositTerms = <input type="text" name="depositTerms" placeholder="Deposit Terms" defaultValue={trip !== undefined ? trip.depositTerms : ''}/>

  const cancellationPolicy = <input type="text" name="cancellationPolicy" placeholder="Cancellation Policy" defaultValue={trip !== undefined ? trip.cancellationPolicy : ''}/>

  const baggageLuggage = <input type="text"
  name="baggageLuggage" placeholder="Baggage/Luggage Policy" defaultValue={trip !== undefined ? trip.baggageLuggage : ''}/>

  const tripInsurance = <input type="text"
  name="tripInsurance" placeholder="Trip Insurance" defaultValue={trip !== undefined ? trip.tripInsurance : ''}/>

  const evacInsurance = <input type="text" name="evacInsurance" placeholder="Medical Evacuation Insurance" defaultValue={trip !== undefined ? trip.evacInsurance : ''}/>

  return (
    <React.Fragment>
      <h4>Trip Costs</h4>
      {travelCosts}
      <br/>
      {travelDocs}
      <br/>
      {tripExpenses}
      <br/>
      {depositTerms}
      <br/>
      {cancellationPolicy}
      <br/>
      {baggageLuggage}
      <br/>
      {tripInsurance}
      <br/>
      {evacInsurance}
      <br/>
    </React.Fragment>
  )
}

TripCostsFields.propTypes = {
  trip: PropTypes.object
}

export default TripCostsFields;