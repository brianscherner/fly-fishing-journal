import React from "react";
import TextField from './inputs/TextField';
import Dropdown from './inputs/Dropdown';

function DestinationInfoFields(props) {
  const {
    tripType,
    formData,
    setFormData,
    formErrors,
    handleFormInput,
    handleCharacterLimitCheck,
    formWarnings
  } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Destination Info</h4>
      <TextField
        type="text"
        value={formData.destination}
        placeholder="Enter a location"
        label="Fishing Location"
        name="destination"
        errors={formErrors.destination}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.destination}
        required={true}
      />
      <br/>
      <Dropdown
        type="select-one"
        value={formData.destinationType}
        name="destinationType"
        errors={formErrors.destinationType}
        handleFormInput={handleFormInput}
        label="Location Type"
        options={["None", "Domestic", "International"]}
        required={false}
      />
      <br/>
      <Dropdown
        type="select-one"
        value={formData.season}
        name="season"
        errors={formErrors.season}
        handleFormInput={handleFormInput}
        label="Season"
        options={["Winter", "Spring", "Summer", "Fall"]}
        required={true}
      />
      <br/>
      <label>Start Date<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          className={`${formErrors.startDate ? "form-control invalid-field" : "form-control"}`}
          aria-label="Date"
          type="date"
          name="startDate"
          defaultValue={formData.startDate ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, startDate: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        {formErrors.startDate && (
          <small className="form-field-error" aria-live="polite">{formErrors.startDate}</small>
        )}
      </div>
      <br/>
      <label>End Date</label>
      <input
        className="form-control"
        aria-label="Date"
        type="date"
        defaultValue={formData.endDate ??= ''}
        onChange={(e) => setFormData({...formData, endDate: e.target.value})}/>
      <br/>
      <label>Water Type</label>
      <select
        className="form-select"
        name="waterType"
        defaultValue={formData.waterType ??= ''}
        onChange={(e) => setFormData({...formData, waterType: e.target.value})}>
        <option value="" disabled>Select one</option>
        <option value="Freshwater">Freshwater</option>
        <option value="Saltwater">Saltwater</option>
      </select>
      <br/>
      <label>Water Body Type<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <select
          className={`${formErrors.waterBodyType ? "form-select invalid-field" : "form-select"}`}
          name="waterBodyType"
          defaultValue={formData.waterBodyType ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, waterBodyType: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        >
          <option value="" disabled>Select one</option>
          <option value="River">River</option>
          <option value="Lake">Lake</option>
          <option value="Ocean">Ocean</option>
          <option value="Mix">Mix</option>
        </select>
        {formErrors.waterBodyType && (
          <small className="form-field-error" aria-live="polite">{formErrors.waterBodyType}</small>
        )}
      </div>
      <br/>
      <label>Fish Species<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.species ? "form-control invalid-field" : "form-control"}`}
          name="species"
          placeholder="Example: salmon"
          defaultValue={formData.species ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, species: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.species && (
            <small className="form-field-error" aria-live="polite">{formErrors.species}</small>
          )}
          {formWarnings.species && (
            <small className="form-field-warning" aria-live="polite">{formWarnings.species}</small>
          )}
        </div>
      </div>
      <br/>
      <label>County<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
        type="text"
        className={`${formErrors.county ? "form-control invalid-field" : "form-control"}`}
        name="county"
        defaultValue={formData.county ??= ''}
        onChange={(e) => {
            setFormData({
              ...formData, county: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.county && (
            <small className="form-field-error" aria-live="polite">{formErrors.county}</small>
          )}
          {formWarnings.county && (
            <small className="form-field-warning" aria-live="polite">{formWarnings.county}</small>
          )}
        </div>
      </div>
      <br/>
      <label>State<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.state ? "form-control invalid-field" : "form-control"}`}
          name="state"
          defaultValue={formData.state ??= ''}
          onChange={(e) => {
            setFormData({
              ...formData, state: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.state && (
            <small className="form-field-error" aria-live="polite">{formErrors.state}</small>
          )}
          {formWarnings.state && (
            <small className="form-field-warning" aria-live="polite">{formWarnings.state}</small>
          )}
        </div>
      </div>
      <br/>
      <label>Country<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.country ? "form-control invalid-field" : "form-control"}`}
          name="country"
          defaultValue={formData.country ??= ''}
          onChange={(e) => {
            setFormData({...formData, country: e.target.value
            });
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {formErrors.country && (
            <small className="form-field-error" aria-live="polite">{formErrors.country}</small>
          )}
          {formWarnings.country && (
            <small className="form-field-warning" aria-live="polite">{formWarnings.country}</small>
          )}
        </div>
      </div>
      <br/>
      {tripType === "Future" && (
        <React.Fragment>
          <label>Climate</label>
          <div className="form-input-container">
            <input
              type="text"
              className="form-control"
              name="climate"
              placeholder="Example: desert"
              defaultValue={formData.climate ??= ''}
              onChange={(e) => {
                setFormData({
                  ...formData, climate: e.target.value
                });
                handleCharacterLimitCheck(e);
              }}
            />
            <div className="form-validation-wrapper">
              {formErrors.climate && (
                <small className="form-field-error" aria-live="polite">{formErrors.climate}</small>
              )}
              {formWarnings.climate && (
                <small className="form-field-warning" aria-live="polite">{formWarnings.climate}</small>
              )}
            </div>
          </div>
          <br/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default DestinationInfoFields;