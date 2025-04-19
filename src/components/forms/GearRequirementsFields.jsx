import React from "react";

function GearRequirements(props) {
  const { formData, setFormData, formErrors, handleCharacterLimitCheck, formWarnings } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Gear Requirements</h4>
      <label>Clothing Requirements<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.clothingRequirements ? "form-control invalid-field" : "form-control"}`}
          name="clothingRequirements"
          placeholder="Example: Waterproof jacket"
          defaultValue={formData.clothingRequirements ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, clothingRequirements: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.clothingRequirements && (
            <small className="form-field-error" aria-live="polite">{formErrors.clothingRequirements}</small>
          )}
          {formWarnings.clothingRequirements && (
            <small className="form-field-error" aria-live="polite">{formWarnings.clothingRequirements}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Fishing Requirements<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.gearRequirements ? "form-control invalid-field" : "form-control"}`}
          name="gearRequirements"
          placeholder="Example: 9ft 5wt fly rod"
          defaultValue={formData.gearRequirements ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, gearRequirements: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.gearRequirements && (
            <small className="form-field-error" aria-live="polite">{formErrors.gearRequirements}</small>
          )}
          {formWarnings.gearRequirements && (
            <small className="form-field-error" aria-live="polite">{formWarnings.gearRequirements}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Fly Requirements<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.flyRequirements ? "form-control invalid-field" : "form-control"}`}
          name="flyRequirements"
          placeholder="Example: Elk Hair Caddis (Size 16)"
          defaultValue={formData.flyRequirements ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, flyRequirements: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.flyRequirements && (
            <small className="form-field-error" aria-live="polite">{formErrors.flyRequirements}</small>
          )}
          {formWarnings.flyRequirements&& (
            <small className="form-field-error" aria-live="polite">{formWarnings.flyRequirements}</small>
          )}
        </div>
      </div>
      <br/>
    </React.Fragment>
  )
}

export default GearRequirements;