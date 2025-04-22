import React from "react";

function MiscellaneousFields(props) {
  const { formData, setFormData, tripType, formErrors, handleCharacterLimitCheck, formWarnings } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Miscellaneous</h4>
      <label>Fishing Licenses</label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.licenses ? "form-control invalid-field" : "form-control"}`}
          name="licenses"
          placeholder="Example: State fishing license"
          defaultValue={formData.licenses ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, licenses: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.licenses && (
            <small className="form-field-error" aria-live="polite">{formErrors.licenses}</small>
          )}
          {formWarnings.licenses && (
            <small className="form-field-error" aria-live="polite">{formWarnings.licenses}</small>
          )}
        </div>
      </div>
      <br/>
      {tripType === "Past" && (
        <React.Fragment>
          <label>Water Fees</label>
          <select
            name="waterFees"
            className={`${formErrors.waterFees ? "form-select invalid-field" : "form-select"}`}
            defaultValue={formData.waterFees ??= ''}
            onChange={(e) =>
              setFormData({
                ...formData, waterFees: e.target.value
              })
            }>
            <option value="" disabled>Select one</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
          <br/>
          <label>Type of Access</label>
          <div className="form-input-container">
            <input
              type="text"
              className={`${formErrors.access ? "form-control invalid-field" : "form-control"}`}
              name="access"
              placeholder="Example: Public boat ramp"
              defaultValue={formData.access ??= ''}
              onChange={(e) => {
                setFormData({
                  ...formData, access: e.target.value
                });
                handleCharacterLimitCheck(e);
              }}
            />
            <div className="form-validation-wrapper">
              {formErrors.access && (
                <small className="form-field-error" aria-live="polite">{formErrors.access}</small>
              )}
              {formWarnings.access && (
                <small className="form-field-error" aria-live="polite">{formWarnings.access}</small>
              )}
            </div>
          </div>
          <br/>
          <label>Time of Day</label>
          <div className="form-input-container">
            <input
              type="text"
              className={`${formErrors.timeOfDay ? "form-control invalid-field" : "form-control"}`}
              name="timeOfDay"
              placeholder="Example: Morning"
              defaultValue={formData.timeOfDay ??= ''}
              onChange={(e) => {
                setFormData({
                  ...formData, timeOfDay: e.target.value
                });
                handleCharacterLimitCheck(e);
              }}
            />
            <div className="form-validation-wrapper">
              {formErrors.timeOfDay && (
                <small className="form-field-error" aria-live="polite">{formErrors.timeOfDay}</small>
              )}
              {formWarnings.timeOfDay && (
                <small className="form-field-error" aria-live="polite">{formWarnings.timeOfDay}</small>
              )}
            </div>
          </div>
          <br/>
          <label>Travel Time</label>
          <div className="form-input-container">
            <input
              type="text"
              className={`${formErrors.travelTime ? "form-control invalid-field" : "form-control"}`}
              name="travelTime"
              placeholder="Example: 2 hour drive"
              defaultValue={formData.travelTime ??= ''}
              onChange={(e) => {
                setFormData({
                  ...formData, travelTime: e.target.value
                });
                handleCharacterLimitCheck(e);
              }}
            />
            <div className="form-validation-wrapper">
              {formErrors.travelTime && (
                <small className="form-field-error" aria-live="polite">{formErrors.travelTime}</small>
              )}
              {formWarnings.travelTime && (
                <small className="form-field-error" aria-live="polite">{formWarnings.travelTime}</small>
              )}
            </div>
          </div>
          <br/>
        </React.Fragment>
      )}
      {tripType === "Future" && (
        <React.Fragment>
          <label>Guided?</label>
          <select
            name="guidedOrNot"
            className={`${formErrors.guidedOrNot ? "form-select invalid-field" : "form-select"}`}
            defaultValue={formData.guidedOrNot ??= ''}
            onChange={(e) =>
            setFormData({
              ...formData, guidedOrNot: e.target.value
            })}
          >
            <option value="" disabled>Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br/>
          <label>Communications</label>
          <div className="form-input-container">
            <input
              type="text"
              className={`${formErrors.communications ? "form-control invalid-field" : "form-control"}`}
              name="communications"
              placeholder="Example: No cell service"
              defaultValue={formData.communications ??= ''}
              onChange={(e) => {
                setFormData({
                  ...formData, communications: e.target.value
                });
                handleCharacterLimitCheck(e);
              }}
            />
            <div className="form-validation-wrapper">
              {formErrors.communications && (
                <small className="form-field-error" aria-live="polite">{formErrors.communications}</small>
              )}
              {formWarnings.communications && (
                <small className="form-field-error" aria-live="polite">{formWarnings.communications}</small>
              )}
            </div>
          </div>
          <br/>
          <label>Gratuity Guidelines</label>
          <div className="form-input-container">
            <input
              type="text"
              className={`${formErrors.gratuity ? "form-control invalid-field" : "form-control"}`}
              name="gratuity"
              placeholder="Example: 10-20% of trip cost"
              defaultValue={formData.gratuity ??= ''}
              onChange={(e) => {
                setFormData({
                  ...formData, gratuity: e.target.value
                });
                handleCharacterLimitCheck(e);
              }}
            />
            <div className="form-validation-wrapper">
              {formErrors.gratuity && (
                <small className="form-field-error" aria-live="polite">{formErrors.gratuity}</small>
              )}
              {formWarnings.gratuity && (
                <small className="form-field-error" aria-live="polite">{formWarnings.gratuity}</small>
              )}
            </div>
          </div>
          <br/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default MiscellaneousFields;