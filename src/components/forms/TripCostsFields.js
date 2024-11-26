import React from "react";
import PropTypes from "prop-types";
import FlightIcon from '@mui/icons-material/Flight';
import CottageIcon from '@mui/icons-material/Cottage';
import PaymentIcon from '@mui/icons-material/Payment';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LuggageIcon from '@mui/icons-material/Luggage';

function TripCostsFields(props) {
  const { formData, setFormData } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Trip Costs</h4>
      <p className="required-msg" style={{ fontStyle: "italic"}}>* indicates a required field</p>
      <label>Travel Documents*</label>
      <select
        name="travelDocs"
        className="form-select"
        defaultValue={formData.travelDocs ??= ''}
        onChange={(e) => setFormData({...formData, travelDocs: e.target.value})}>
        <option value="" disabled>Select an option</option>
        <option value="Passport">Passport</option>
        <option value="Visa">Visa</option>
      </select>
      <br/>
      <label>Air Travel Cost</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="travelCosts"
          placeholder="Enter cost"
          defaultValue={formData.travelCosts ??= ''} onChange={(e) => setFormData({...formData, travelCosts: e.target.value})}/>
        <FlightIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Fishing and Lodging Expenses*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="tripExpenses"
          placeholder="Enter expenses" defaultValue={formData.tripExpenses ??= ''} onChange={(e) => setFormData({...formData, tripExpenses: e.target.value})}/>
        <CottageIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Deposit Payment Terms*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="depositTerms"
          placeholder="Enter terms"
          defaultValue={formData.depositTerms ??= ''} onChange={(e) => setFormData({...formData, depositTerms: e.target.value})}/>
        <PaymentIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Trip Insurance*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="tripInsurance"
          placeholder="Enter policy"
          defaultValue={formData.tripInsurance ??= ''}
          onChange={(e) => setFormData({...formData, tripInsurance: e.target.value})}/>
        <CardTravelIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Medical Evacuation Insurance*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="evacInsurance"
          placeholder="Enter policy" defaultValue={formData.evacInsurance ??= ''} onChange={(e) => setFormData({...formData, evacInsurance: e.target.value})}/>
        <HealthAndSafetyIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Refund Cancellation Policy*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="cancellationPolicy"
          placeholder="Enter policy"
          defaultValue={formData.cancellationPolicy ??= ''} onChange={(e) => setFormData({...formData, cancellationPolicy: e.target.value})}/>
        <ReceiptIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Baggage and Luggage Policy*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="baggageLuggage"
          placeholder="Enter policy"
          defaultValue={formData.baggageLuggage ??= ''} onChange={(e) => setFormData({...formData, baggageLuggage: e.target.value})}/>
        <LuggageIcon className="form-input-icon"/>
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