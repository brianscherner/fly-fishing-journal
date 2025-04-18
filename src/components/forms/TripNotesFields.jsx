import React from "react";

function TripNotesFields(props) {
  const { formData, setFormData, formErrors, handleCharacterLimitCheck, formWarnings } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Trip Notes</h4>
      <label>Flies Used<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input type="text"
          className={`${formErrors.fliesUsed ? "form-control invalid-field" : "form-control"}`}
          name="fliesUsed"
          placeholder="Example: Elk Hair Caddis (Size 16)"
          defaultValue={formData.fliesUsed ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, fliesUsed: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.fliesUsed && (
            <small className="form-field-error" aria-live="polite">{formErrors.fliesUsed}</small>
          )}
          {formWarnings.fliesUsed && (
            <small className="form-field-error" aria-live="polite">{formWarnings.fliesUsed}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Fish Caught<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.fishCaught ? "form-control invalid-field" : "form-control"}`}
          name="fishCaught"
          placeholder="Example: 5 rainbow trout"
          defaultValue={formData.fishCaught ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, fishCaught: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.fishCaught && (
            <small className="form-field-error" aria-live="polite">{formErrors.fishCaught}</small>
          )}
          {formWarnings.fishCaught && (
            <small className="form-field-error" aria-live="polite">{formWarnings.fishCaught}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Fishing Tackle<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.fishingTackleUsed ? "form-control invalid-field" : "form-control"}`}
          name="fishingTackleUsed"
          placeholder="Example: floating line"
          defaultValue={formData.fishingTackleUsed ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, fishingTackleUsed: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.fishingTackleUsed && (
            <small className="form-field-error" aria-live="polite">{formErrors.fishingTackleUsed}</small>
          )}
          {formWarnings.fishingTackleUsed && (
            <small className="form-field-error" aria-live="polite">{formWarnings.fishingTackleUsed}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Fishing Method</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="fishingMethod"
          placeholder="Example: wading"
          defaultValue={formData.fishingMethod ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, fishingMethod: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.fishingMethod && (
            <small className="form-field-error" aria-live="polite">{formErrors.fishingMethod}</small>
          )}
          {formWarnings.fishingMethod && (
            <small className="form-field-error" aria-live="polite">{formWarnings.fishingMethod}</small>
          )}
        </div>
      </div>
      <br/>
      <label>River Flow Levels</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="riverFlowLevels"
          placeholder="Example: 250 cfs"
          defaultValue={formData.riverFlowLevels ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, riverFlowLevels: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.riverFlowLevels && (
            <small className="form-field-error" aria-live="polite">{formErrors.riverFlowLevels}</small>
          )}
          {formWarnings.riverFlowLevels && (
            <small className="form-field-error" aria-live="polite">{formWarnings.riverFlowLevels}</small>
          )}
        </div>
      </div>
      <br/>
    </React.Fragment>
  )
}

export default TripNotesFields;