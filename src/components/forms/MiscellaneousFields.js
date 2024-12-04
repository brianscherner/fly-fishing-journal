import React from "react";
import PropTypes from "prop-types";

function MiscellaneousFields(props) {
  const { formData, setFormData, tripType } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Miscellaneous</h4>
      <label>Fishing Licenses</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="licenses"
          placeholder="Example: State fishing license"
          defaultValue={formData.licenses ??= ''}
          onChange={(e) => setFormData({...formData, licenses: e.target.value})}/>
      </div>
      <br/>
      {tripType === "Past" && (
        <React.Fragment>
          <label>Water Fees</label>
          <select name="waterFees" className="form-select" defaultValue={formData.waterFees ??= ''} onChange={(e) => setFormData({...formData, waterFees: e.target.value})}>
            <option value="" disabled>Select one</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
          <br/>
          <label>Type of Access</label>
          <div className="form-input-container">
            <input
            type="text"
            className="form-control"
            name="access"
            placeholder="Example: Public boat ramp"
            defaultValue={formData.access ??= ''} onChange={(e) => setFormData({...formData, access: e.target.value})}/>
          </div>
          <br/>
          <label>Time of Day</label>
          <div className="form-input-container">
            <input
              type="text"
              className="form-control"
              name="timeOfDay"
              placeholder="Example: Morning"
              defaultValue={formData.timeOfDay ??= ''} onChange={(e) => setFormData({...formData, timeOfDay: e.target.value})}/>
          </div>
          <br/>
          <label>Travel Time</label>
          <div className="form-input-container">
            <input
              type="text"
              className="form-control"
              name="travelTime"
              placeholder="Example: 2 hour drive"
              defaultValue={formData.travelTime ??= ''} onChange={(e) => setFormData({...formData, travelTime: e.target.value})}/>
          </div>
          <br/>
        </React.Fragment>
      )}
      {tripType === "Future" && (
        <React.Fragment>
          <label>Guided?</label>
          <select
            name="guidedOrNot"
            className="form-select"
            defaultValue={formData.guidedOrNot ??= ''}
            onChange={(e) => setFormData({...formData, guidedOrNot: e.target.value})}>
            <option value="" disabled>Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br/>
          <label>Communications</label>
          <div className="form-input-container">
            <input
              type="text"
              className="form-control"
              name="communications"
              placeholder="Example: No cell service"
              defaultValue={formData.communications ??= ''} onChange={(e) => setFormData({...formData, communications: e.target.value})}/>
          </div>
          <br/>
          <label>Gratuity Guidelines</label>
          <div className="form-input-container">
            <input
              type="text"
              className="form-control"
              name="gratuity"
              placeholder="Example: 10-20% of trip cost"
              defaultValue={formData.gratuity ??= ''} onChange={(e) => setFormData({...formData, gratuity: e.target.value})}/>
          </div>
          <br/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

MiscellaneousFields.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  tripType: PropTypes.string
}

export default MiscellaneousFields;