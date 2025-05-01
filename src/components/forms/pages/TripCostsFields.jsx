import React from "react";
import TextField from '../inputs/TextField';
import Dropdown from '../inputs/Dropdown';

function TripCostsFields(props) {
  const {
    formData,
    formErrors,
    handleFormInput,
    handleCharacterLimitCheck,
    formWarnings
  } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Trip Costs</h4>
      <Dropdown
        type="select-one"
        value={formData.travelDocs}
        name="travelDocs"
        errors={formErrors.travelDocs}
        handleFormInput={handleFormInput}
        label="Travel Documents"
        options={["None", "Passport", "Visa"]}
        required={false}
      />
      <br/>
      <TextField
        type="text"
        value={formData.travelCosts}
        placeholder="Enter estimated airfare costs"
        label="Air Travel Expenses"
        name="travelCosts"
        errors={formErrors.travelCosts}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.travelCosts}
        required={false}
      />
      <br/>
      <TextField
        type="text"
        value={formData.tripExpenses}
        placeholder="Enter costs for fishing and lodging"
        label="Fishing and Lodging Expenses"
        name="tripExpenses"
        errors={formErrors.tripExpenses}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.tripExpenses}
        required={false}
      />
      <br/>
      <TextField
        type="text"
        value={formData.depositTerms}
        placeholder="Enter payment terms and due dates"
        label="Deposit Payment Terms"
        name="depositTerms"
        errors={formErrors.depositTerms}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.depositTerms}
        required={false}
      />
      <br/>
      <TextField
        type="text"
        value={formData.tripInsurance}
        placeholder="Describe coverage details"
        label="Trip Insurance"
        name="tripInsurance"
        errors={formErrors.tripInsurance}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.tripInsurance}
        required={false}
      />
      <br/>
      <TextField
        type="text"
        value={formData.evacInsurance}
        placeholder="Describe coverage details"
        label="Medical Evacuation Insurance"
        name="evacInsurance"
        errors={formErrors.evacInsurance}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.evacInsurance}
        required={false}
      />
      <br/>
      <TextField
        type="text"
        value={formData.cancellationPolicy}
        placeholder="Describe refund and cancellation terms"
        label="Refund Cancellation Policy"
        name="cancellationPolicy"
        errors={formErrors.cancellationPolicy}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.cancellationPolicy}
        required={false}
      />
      <br/>
      <TextField
        type="text"
        value={formData.baggageLuggage}
        placeholder="Enter policy details"
        label="Baggage and Luggage Policy"
        name="baggageLuggage"
        errors={formErrors.baggageLuggage}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.baggageLuggage}
        required={false}
      />
      <br/>
    </React.Fragment>
  )
}

export default TripCostsFields;