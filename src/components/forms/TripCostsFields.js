import React from "react";
import PropTypes from "prop-types";

function TripCostsFields(props) {
  const { formData, setFormData } = props;

  const travelCosts = <input type="text" name="travelCosts" placeholder="Travel Costs" defaultValue={formData.travelCosts ??= ''} onChange={(e) => setFormData({...formData, travelCosts: e.target.value})}/>

  const travelDocs =
  <select name="travelDocs" defaultValue={formData.travelDocs ??= ''} onChange={(e) => setFormData({...formData, travelDocs: e.target.value})}>
    <option value="" disabled selected>Travel Documents</option>
    <option value="passport">Passport</option>
    <option value="visa">Visa</option>
  </select>

  const tripExpenses = <input type="text" name="tripExpenses" placeholder="Trip Expenses" defaultValue={formData.tripExpenses ??= ''} onChange={(e) => setFormData({...formData, tripExpenses: e.target.value})}/>

  const depositTerms = <input type="text" name="depositTerms" placeholder="Deposit Terms" defaultValue={formData.depositTerms ??= ''} onChange={(e) => setFormData({...formData, depositTerms: e.target.value})}/>

  const cancellationPolicy = <input type="text" name="cancellationPolicy" placeholder="Cancellation Policy" defaultValue={formData.cancellationPolicy ??= ''} onChange={(e) => setFormData({...formData, cancellationPolicy: e.target.value})}/>

  const baggageLuggage = <input type="text"
  name="baggageLuggage" placeholder="Baggage/Luggage Policy" defaultValue={formData.baggageLuggage ??= ''} onChange={(e) => setFormData({...formData, baggageLuggage: e.target.value})}/>

  const tripInsurance = <input type="text"
  name="tripInsurance" placeholder="Trip Insurance" defaultValue={formData.tripInsurance ??= ''} onChange={(e) => setFormData({...formData, tripInsurance: e.target.value})}/>

  const evacInsurance = <input type="text" name="evacInsurance" placeholder="Medical Evacuation Insurance" defaultValue={formData.evacInsurance ??= ''} onChange={(e) => setFormData({...formData, evacInsurance: e.target.value})}/>

  return (
    <React.Fragment>
      <h4>Trip Costs</h4>
      <p>* = required</p>
      {travelDocs}
      <br/>
      {travelCosts}
      <br/>
      {tripExpenses}
      <br/>
      {depositTerms}
      <br/>
      {tripInsurance}
      <br/>
      {evacInsurance}
      <br/>
      {cancellationPolicy}
      <br/>
      {baggageLuggage}
      <br/>
    </React.Fragment>
  )
}

TripCostsFields.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func
}

export default TripCostsFields;