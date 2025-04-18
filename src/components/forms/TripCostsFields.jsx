import React from "react";

function TripCostsFields(props) {
  const { formData, setFormData, formErrors, handleCharacterLimitCheck, formWarnings } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Trip Costs</h4>
      <label>Travel Documents</label>
      <select
        name="travelDocs"
        className="form-select"
        defaultValue={formData.travelDocs ??= ''}
        onChange={(e) => {
          setFormData({
            ...formData, travelDocs: e.target.value
          });
        }}>
        <option value="" disabled>Select one</option>
        <option value="Passport">Passport</option>
        <option value="Visa">Visa</option>
      </select>
      <br/>
      <label>Air Travel Expenses</label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.travelCosts ? "form-control invalid-field" : "form-control"}`}
          name="travelCosts"
          placeholder="Enter estimated airfare costs"
          defaultValue={formData.travelCosts ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, travelCosts: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.travelCosts && (
            <small className="form-field-error" aria-live="polite">{formErrors.travelCosts}</small>
          )}
          {formWarnings.travelCosts && (
            <small className="form-field-error" aria-live="polite">{formWarnings.travelCosts}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Fishing and Lodging Expenses</label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.tripExpenses ? "form-control invalid-field" : "form-control"}`}
          name="tripExpenses"
          placeholder="Enter costs for fishing and lodging"
          defaultValue={formData.tripExpenses ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, tripExpenses: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.tripExpenses && (
            <small className="form-field-error" aria-live="polite">{formErrors.tripExpenses}</small>
          )}
          {formWarnings.tripExpenses && (
            <small className="form-field-error" aria-live="polite">{formWarnings.tripExpenses}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Deposit Payment Terms</label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.depositTerms ? "form-control invalid-field" : "form-control"}`}
          name="depositTerms"
          placeholder="Enter payment terms and due dates"
          defaultValue={formData.depositTerms ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, depositTerms: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.depositTerms && (
            <small className="form-field-error" aria-live="polite">{formErrors.depositTerms}</small>
          )}
          {formWarnings.depositTerms && (
            <small className="form-field-error" aria-live="polite">{formWarnings.depositTerms}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Trip Insurance</label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.tripInsurance ? "form-control invalid-field" : "form-control"}`}
          name="tripInsurance"
          placeholder="Describe coverage details"
          defaultValue={formData.tripInsurance ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, tripInsurance: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.tripInsurance && (
            <small className="form-field-error" aria-live="polite">{formErrors.tripInsurance}</small>
          )}
          {formWarnings.tripInsurance && (
            <small className="form-field-error" aria-live="polite">{formWarnings.tripInsurance}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Medical Evacuation Insurance</label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.evacInsurance ? "form-control invalid-field" : "form-control"}`}
          name="evacInsurance"
          placeholder="Describe coverage details"
          defaultValue={formData.evacInsurance ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, evacInsurance: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.evacInsurance && (
            <small className="form-field-error" aria-live="polite">{formErrors.evacInsurance}</small>
          )}
          {formWarnings.evacInsurance && (
            <small className="form-field-error" aria-live="polite">{formWarnings.evacInsurance}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Refund Cancellation Policy</label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.cancellationPolicy ? "form-control invalid-field" : "form-control"}`}
          name="cancellationPolicy"
          placeholder="Describe refund and cancellation terms"
          defaultValue={formData.cancellationPolicy ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, cancellationPolicy: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.cancellationPolicy && (
            <small className="form-field-error" aria-live="polite">{formErrors.cancellationPolicy}</small>
          )}
          {formWarnings.cancellationPolicy && (
            <small className="form-field-error" aria-live="polite">{formWarnings.cancellationPolicy}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Baggage and Luggage Policy</label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.baggageLuggage ? "form-control invalid-field" : "form-control"}`}
          name="baggageLuggage"
          placeholder="Enter policy details"
          defaultValue={formData.baggageLuggage ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, baggageLuggage: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.baggageLuggage && (
            <small className="form-field-error" aria-live="polite">{formErrors.baggageLuggage}</small>
          )}
          {formWarnings.baggageLuggage && (
            <small className="form-field-error" aria-live="polite">{formWarnings.baggageLuggage}</small>
          )}
        </div>
      </div>
      <br/>
    </React.Fragment>
  )
}

export default TripCostsFields;