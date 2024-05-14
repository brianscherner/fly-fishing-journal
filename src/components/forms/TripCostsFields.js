import React from "react";

function TripCostsFields(props) {
  const travelCosts = <input type="text" name="travelCosts" placeholder="Travel Costs" defaultValue={props.trip !== undefined ? props.trip.travelCosts : ''}/>

  const travelDocs =
  <select name="travelDocs">
    <option value="" disabled selected>Travel Documents</option>
    <option value="passport">Passport</option>
    <option value="visa">Visa</option>
  </select>

  const tripExpenses = <input type="text" name="tripExpenses" placeholder="Trip Expenses" defaultValue={props.trip !== undefined ? props.trip.tripExpenses : ''}/>

  const depositTerms = <input type="text" name="depositTerms" placeholder="Deposit Terms" defaultValue={props.trip !== undefined ? props.trip.depositTerms : ''}/>

  const cancellationPolicy = <input type="text" name="cancellationPolicy" placeholder="Cancellation Policy" defaultValue={props.trip !== undefined ? props.trip.cancellationPolicy : ''}/>

  const baggageLuggage = <input type="text"
  name="baggageLuggage" placeholder="Baggage/Luggage Policy" defaultValue={props.trip !== undefined ? props.trip.baggageLuggage : ''}/>

  const tripInsurance = <input type="text"
  name="tripInsurance" placeholder="Trip Insurance" defaultValue={props.trip !== undefined ? props.trip.tripInsurance : ''}/>

  const evacInsurance = <input type="text" name="evacInsurance" placeholder="Medical Evacuation Insurance" defaultValue={props.trip !== undefined ? props.trip.evacInsurance : ''}/>

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

export default TripCostsFields;