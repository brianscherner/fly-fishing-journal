import React from "react";

function TripNotesFields(props) {
  const { formData, setFormData, formErrors } = props;

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
          onChange={(e) => setFormData({...formData, fliesUsed: e.target.value})}/>
        {formErrors.fliesUsed && (
          <small className="form-field-error">{formErrors.fliesUsed}</small>
        )}
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
          onChange={(e) => setFormData({...formData, fishCaught: e.target.value})}/>
        {formErrors.fishCaught && (
          <small className="form-field-error">{formErrors.fishCaught}</small>
        )}
      </div>
      <br/>
      <label>Fishing Tackle<span className="required-asterik">&nbsp;*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${formErrors.fishingTackleUsed ? "form-control invalid-field" : "form-control"}`}
          name="fishingTackleUsed"
          placeholder="Example: floating line"
          defaultValue={formData.fishingTackleUsed ??= ''} onChange={(e) => setFormData({...formData, fishingTackleUsed: e.target.value})}/>
        {formErrors.fishingTackleUsed && (
          <small className="form-field-error">{formErrors.fishingTackleUsed}</small>
        )}
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
          onChange={(e) => setFormData({...formData, fishingMethod: e.target.value})}/>
      </div>
      <br/>
      <label>River Flow Levels</label>
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

export default TripNotesFields;