import React from "react";
import PropTypes from "prop-types";

function TripCostsFields(props) {
  const { formData, setFormData } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Trip Costs</h4>
      <p className="required-msg"><span className="required-asterik">*</span> indicates a required field</p>
      <label>Travel Documents<span className="required-asterik">*</span></label>
      <select
        name="travelDocs"
        className="form-select"
        defaultValue={formData.travelDocs ??= ''}
        onChange={(e) => setFormData({...formData, travelDocs: e.target.value})}>
        <option value="" disabled>Select one</option>
        <option value="Passport">Passport</option>
        <option value="Visa">Visa</option>
      </select>
      <br/>
      <label>Air Travel Expenses</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="travelCosts"
          placeholder="Enter estimated airfare costs"
          defaultValue={formData.travelCosts ??= ''} onChange={(e) => setFormData({...formData, travelCosts: e.target.value})}/>
      </div>
      <br/>
      <label>Fishing and Lodging Expenses<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="tripExpenses"
          placeholder="Enter costs for fishing and lodging"
          defaultValue={formData.tripExpenses ??= ''} onChange={(e) => setFormData({...formData, tripExpenses: e.target.value})}/>
      </div>
      <br/>
      <label>Deposit Payment Terms<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="depositTerms"
          placeholder="Enter payment terms and due dates"
          defaultValue={formData.depositTerms ??= ''} onChange={(e) => setFormData({...formData, depositTerms: e.target.value})}/>
      </div>
      <br/>
      <label>Trip Insurance<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="tripInsurance"
          placeholder="Describe coverage details"
          defaultValue={formData.tripInsurance ??= ''}
          onChange={(e) => setFormData({...formData, tripInsurance: e.target.value})}/>
      </div>
      <br/>
      <label>Medical Evacuation Insurance<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="evacInsurance"
          placeholder="Describe coverage details"
          defaultValue={formData.evacInsurance ??= ''} onChange={(e) => setFormData({...formData, evacInsurance: e.target.value})}/>
      </div>
      <br/>
      <label>Refund Cancellation Policy<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="cancellationPolicy"
          placeholder="Describe refund and cancellation terms"
          defaultValue={formData.cancellationPolicy ??= ''} onChange={(e) => setFormData({...formData, cancellationPolicy: e.target.value})}/>
      </div>
      <br/>
      <label>Baggage and Luggage Policy<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="baggageLuggage"
          placeholder="Enter policy details"
          defaultValue={formData.baggageLuggage ??= ''} onChange={(e) => setFormData({...formData, baggageLuggage: e.target.value})}/>
      </div>
      <br/>
    </React.Fragment>
  )
}

TripCostsFields.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func
}

export default TripCostsFields;