import React from "react";
import TextField from '../inputs/TextField';

function GearRequirements(props) {
  const {
    formData,
    formErrors,
    handleFormInput,
    handleCharacterLimitCheck,
    formWarnings,
  } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Gear Requirements</h4>
      <TextField
        type="text"
        value={formData.clothingRequirements}
        placeholder="Example: Waterproof jacket"
        label="Clothing Requirements"
        name="clothingRequirements"
        errors={formErrors.clothingRequirements}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.clothingRequirements}
        required={true}
      />
      <br/>
      <TextField
        type="text"
        value={formData.gearRequirements}
        placeholder="Example: 9ft 5wt fly rod"
        label="Fishing Requirements"
        name="gearRequirements"
        errors={formErrors.gearRequirements}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.gearRequirements}
        required={true}
      />
      <br/>
      <TextField
        type="text"
        value={formData.flyRequirements}
        placeholder="Example: Elk Hair Caddis (Size 16)"
        label="Fly Requirements"
        name="flyRequirements"
        errors={formErrors.flyRequirements}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.flyRequirements}
        required={true}
      />
      <br/>
    </React.Fragment>
  )
}

export default GearRequirements;