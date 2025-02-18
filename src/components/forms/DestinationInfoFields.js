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
        />
        {invalidFormFields.destination && (
          <small className="form-field-error">{invalidFormFields.destination}</small>
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
          defaultValue={formData.species ??= ''} onChange={(e) => setFormData({...formData, species: e.target.value})}/>
        {invalidFormFields.species && (
          <small className="form-field-error">{invalidFormFields.species}</small>
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
        onChange={(e) => setFormData({...formData, county: e.target.value})}/>
        {invalidFormFields.county && (
          <small className="form-field-error">{invalidFormFields.county}</small>
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
          onChange={(e) => setFormData({...formData, state: e.target.value})}/>
        {invalidFormFields.state && (
          <small className="form-field-error">{invalidFormFields.state}</small>
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
          onChange={(e) => setFormData({...formData, country: e.target.value})}/>
        {invalidFormFields.country && (
          <small className="form-field-error">{invalidFormFields.country}</small>
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
              onChange={(e) => setFormData({...formData, climate: e.target.value})}/>
          </div>
          <br/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default DestinationInfoFields;