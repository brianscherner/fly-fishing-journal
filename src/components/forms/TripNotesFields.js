import React from "react";
import PropTypes from "prop-types";

function TripNotesFields(props) {
  const { formData, setFormData } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Trip Notes</h4>
      <p className="required-msg"><span className="required-asterik">*</span> indicates a required field</p>
      <label>Flies Used<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input type="text"
        className="form-control"
        name="fliesUsed"
        placeholder="Example: Elk Hair Caddis (Size 16)"
        defaultValue={formData.fliesUsed ??= ''}
        onChange={(e) => setFormData({...formData, fliesUsed: e.target.value})}/>
      </div>
      <br/>
      <label>Fish Caught<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="fishCaught"
          placeholder="Example: 5 rainbow trout"
          defaultValue={formData.fishCaught ??= ''}
          onChange={(e) => setFormData({...formData, fishCaught: e.target.value})}/>
      </div>
      <br/>
      <label>Fishing Tackle<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="fishingTackleUsed"
          placeholder="Example: floating line"
          defaultValue={formData.fishingTackleUsed ??= ''} onChange={(e) => setFormData({...formData, fishingTackleUsed: e.target.value})}/>
      </div>
      <br/>
      <label>Fishing Method<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="fishingMethod"
          placeholder="Example: wading"
          defaultValue={formData.fishingMethod ??= ''}
          onChange={(e) => setFormData({...formData, fishingMethod: e.target.value})}/>
      </div>
      <br/>
      <label>River Flow<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="riverFlowLevels"
          placeholder="Example: 250 cfs"
          defaultValue={formData.riverFlowLevels ??= ''} onChange={(e) => setFormData({...formData, riverFlowLevels: e.target.value})}/>
      </div>
      <br/>
    </React.Fragment>
  )
}

TripNotesFields.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
}

export default TripNotesFields;