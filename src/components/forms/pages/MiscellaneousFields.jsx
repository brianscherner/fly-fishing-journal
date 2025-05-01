import React from "react";
import TextField from '../inputs/TextField';
import Dropdown from '../inputs/Dropdown';

function MiscellaneousFields(props) {
  const {
    tripType,
    formData,
    formErrors,
    handleFormInput,
    handleCharacterLimitCheck,
    formWarnings,
  } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Additional Notes</h4>
      <TextField
        type="text"
        value={formData.licenses}
        placeholder="Example: State fishing license"
        label="Fishing Licenses"
        name="licenses"
        errors={formErrors.licenses}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.licenses}
        required={false}
      />
      <br/>
      {tripType === "Past" && (
        <React.Fragment>
          <Dropdown
            type="select-one"
            value={formData.waterFees}
            name="waterFees"
            errors={formErrors.waterFees}
            handleFormInput={handleFormInput}
            label="Water Fees"
            options={["None", "Private", "Public"]}
            required={false}
          />
          <br/>
          <TextField
            type="text"
            value={formData.access}
            placeholder="Example: Public boat ramp"
            label="Type of Access"
            name="access"
            errors={formErrors.access}
            handleFormInput={handleFormInput}
            handleCharacterLimitCheck={handleCharacterLimitCheck}
            warnings={formWarnings.access}
            required={false}
          />
          <br/>
          <TextField
            type="text"
            value={formData.timeOfDay}
            placeholder="Example: Morning"
            label="Time of Day"
            name="timeOfDay"
            errors={formErrors.timeOfDay}
            handleFormInput={handleFormInput}
            handleCharacterLimitCheck={handleCharacterLimitCheck}
            warnings={formWarnings.timeOfDay}
            required={false}
          />
          <br/>
          <TextField
            type="text"
            value={formData.travelTime}
            placeholder="Example: 2 hour drive"
            label="Travel Time"
            name="travelTime"
            errors={formErrors.travelTime}
            handleFormInput={handleFormInput}
            handleCharacterLimitCheck={handleCharacterLimitCheck}
            warnings={formWarnings.travelTime}
            required={false}
          />
          <br/>
        </React.Fragment>
      )}
      {tripType === "Future" && (
        <React.Fragment>
          <Dropdown
            type="select-one"
            value={formData.guidedOrNot}
            name="guidedOrNot"
            errors={formErrors.guidedOrNot}
            handleFormInput={handleFormInput}
            label="Guided?"
            options={["N/A", "Yes", "No"]}
            required={false}
          />
          <br/>
          <TextField
            type="text"
            value={formData.communications}
            placeholder="Example: No cell service"
            label="Communications"
            name="communications"
            errors={formErrors.communications}
            handleFormInput={handleFormInput}
            handleCharacterLimitCheck={handleCharacterLimitCheck}
            warnings={formWarnings.communications}
            required={false}
          />
          <br/>
          <TextField
            type="text"
            value={formData.gratuity}
            placeholder="Example: 10-20% of trip cost"
            label="Gratuity Guidelines"
            name="gratuity"
            errors={formErrors.gratuity}
            handleFormInput={handleFormInput}
            handleCharacterLimitCheck={handleCharacterLimitCheck}
            warnings={formWarnings.gratuity}
            required={false}
          />
          <br/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default MiscellaneousFields;