import React from "react";

function DestinationInfoFields(props) {
  const { tripType, formData, setFormData, invalidFormFields } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Destination Info</h4>
      <label>Fishing Destination<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${invalidFormFields.destination ? "form-control invalid-field" : "form-control"}`}
          name="destination"
          defaultValue={formData.destination ??= ''}
          onChange={(e) => setFormData({
            ...formData, destination: e.target.value
          })}
          maxLength={56}
        />
        {invalidFormFields.destination && (
          <small className="form-field-error" aria-live="polite">{invalidFormFields.destination}</small>
        )}
        {formData.destination.length >= 56 && (
          <small className="form-field-warning" aria-live="polite">{formData.destination.length}/56</small>
        )}
      </div>
      <br/>
      <label>Destination Type</label>
      <select
        className="form-select"
        name="destinationType"
        defaultValue={formData.destinationType ??= ''}
        onChange={(e) => setFormData({...formData, destinationType: e.target.value})}>
        <option value="" disabled>Select one</option>
        <option value="Domestic">Domestic</option>
        <option value="International">International</option>
      </select>
      <br/>
      <label>Season<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <select
          className={`${invalidFormFields.season ? "form-control invalid-field" : "form-control"}`}
          name="season"
          defaultValue={formData.season ??= ''}
          onChange={(e) => setFormData({...formData, season: e.target.value})}>
          <option value="" disabled>Select one</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
        </select>
        {invalidFormFields.season && (
          <small className="form-field-error">{invalidFormFields.season}</small>
        )}
      </div>
      <br/>
      <label>Start Date<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          className={`${invalidFormFields.startDate ? "form-control invalid-field" : "form-control"}`}
          aria-label="Date"
          type="date"
          defaultValue={formData.startDate ??= ''}
          onChange={(e) => setFormData({...formData, startDate: e.target.value})}/>
        {invalidFormFields.startDate && (
          <small className="form-field-error">{invalidFormFields.startDate}</small>
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
          className={`${invalidFormFields.waterBodyType ? "form-control invalid-field" : "form-control"}`}
          name="waterBodyType"
          defaultValue={formData.waterBodyType ??= ''}
          onChange={(e) => setFormData({...formData, waterBodyType: e.target.value})}>
          <option value="" disabled>Select one</option>
          <option value="River">River</option>
          <option value="Lake">Lake</option>
          <option value="Ocean">Ocean</option>
          <option value="Mix">Mix</option>
        </select>
        {invalidFormFields.waterBodyType && (
          <small className="form-field-error">{invalidFormFields.waterBodyType}</small>
        )}
      </div>
      <br/>
      <label>Fish Species<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${invalidFormFields.species ? "form-control invalid-field" : "form-control"}`}
          name="species"
          placeholder="Example: salmon"
          defaultValue={formData.species ??= ''} onChange={(e) => setFormData({...formData, species: e.target.value})}
          maxLength={120}
        />
        {invalidFormFields.species && (
          <small className="form-field-error">{invalidFormFields.species}</small>
        )}
        {formData.species.length >= 120 && (
          <small className="form-field-warning" aria-live="polite">{formData.species.length}/120</small>
        )}
      </div>
      <br/>
      <label>County<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
        type="text"
        className={`${invalidFormFields.county ? "form-control invalid-field" : "form-control"}`}
        name="county"
        defaultValue={formData.county ??= ''}
        onChange={(e) => setFormData({...formData, county: e.target.value})}
        maxLength={56}
        />
        {invalidFormFields.county && (
          <small className="form-field-error">{invalidFormFields.county}</small>
        )}
        {formData.county.length >= 56 && (
          <small className="form-field-warning" aria-live="polite">{formData.county.length}/56</small>
        )}
      </div>
      <br/>
      <label>State<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${invalidFormFields.state ? "form-control invalid-field" : "form-control"}`}
          name="state"
          defaultValue={formData.state ??= ''}
          onChange={(e) => setFormData({...formData, state: e.target.value})}
          maxLength={56}
          />
        {invalidFormFields.state && (
          <small className="form-field-error">{invalidFormFields.state}</small>
        )}
        {formData.state.length >= 56 && (
          <small className="form-field-warning" aria-live="polite">{formData.state.length}/56</small>
        )}
      </div>
      <br/>
      <label>Country<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${invalidFormFields.country ? "form-control invalid-field" : "form-control"}`}
          name="country"
          defaultValue={formData.country ??= ''}
          onChange={(e) => setFormData({...formData, country: e.target.value})}
          maxLength={56}
          />
        {invalidFormFields.country && (
          <small className="form-field-error">{invalidFormFields.country}</small>
        )}
        {formData.country.length >= 56 && (
          <small className="form-field-warning" aria-live="polite">{formData.country.length}/56</small>
        )}
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
              onChange={(e) => setFormData({...formData, climate: e.target.value})}
              maxLength={56}
              />
              {formData.climate.length >= 56 && (
                <small className="form-field-warning" aria-live="polite">{formData.climate.length}/56</small>
              )}
          </div>
          <br/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default DestinationInfoFields;