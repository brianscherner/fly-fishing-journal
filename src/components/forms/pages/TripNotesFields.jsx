import React from "react";
import TextField from '../inputs/TextField';

function TripNotesFields(props) {
  const {
    formData,
    formErrors,
    handleFormInput,
    handleCharacterLimitCheck,
    formWarnings,
  } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Trip Notes</h4>
      <TextField
        type="text"
        value={formData.fliesUsed}
        placeholder="Example: Elk Hair Caddis (Size 16)"
        label="Flies Used"
        name="fliesUsed"
        errors={formErrors.fliesUsed}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.fliesUsed}
        required={true}
      />
      <br/>
      <TextField
        type="text"
        value={formData.fishCaught}
        placeholder="Example: 5 rainbow trout"
        label="Fish Caught"
        name="fishCaught"
        errors={formErrors.fishCaught}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.fishCaught}
        required={true}
      />
      <br/>
      <TextField
        type="text"
        value={formData.fishingTackleUsed}
        placeholder="Example: floating line"
        label="Fishing Tackle"
        name="fishingTackleUsed"
        errors={formErrors.fishingTackleUsed}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.fishingTackleUsed}
        required={true}
      />
      <br/>
      <TextField
        type="text"
        value={formData.fishingMethod}
        placeholder="Example: wading"
        label="Fishing Method"
        name="fishingMethod"
        errors={formErrors.fishingMethod}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.fishingMethod}
        required={false}
      />
      <br/>
      <TextField
        type="text"
        value={formData.riverFlowLevels}
        placeholder="Example: 250 cfs"
        label="River Flow Levels"
        name="riverFlowLevels"
        errors={formErrors.riverFlowLevels}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.riverFlowLevels}
        required={false}
      />
      <br/>
    </React.Fragment>
  )
}

export default TripNotesFields;