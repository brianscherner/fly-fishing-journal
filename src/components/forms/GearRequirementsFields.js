import React from "react";
import PropTypes from "prop-types";

function GearRequirements(props) {
  const { formData, setFormData, invalidFormFields } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Gear Requirements</h4>
      <p className="required-msg"><span className="required-asterik">*</span> indicates a required field</p>
      <label>Clothing Requirements<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${invalidFormFields.clothingRequirements ? "form-control invalid-field" : "form-control"}`}
          name="clothingRequirements"
          placeholder="Example: Waterproof jacket"
          defaultValue={formData.clothingRequirements ??= ''} onChange={(e) => setFormData({...formData, clothingRequirements: e.target.value})}/>
        {invalidFormFields.clothingRequirements && (
          <small className="form-field-error">{invalidFormFields.clothingRequirements}</small>
        )}
      </div>
      <br/>
      <label>Fishing Requirements<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${invalidFormFields.gearRequirements ? "form-control invalid-field" : "form-control"}`}
          name="gearRequirements"
          placeholder="Example: 9ft 5wt fly rod"
          defaultValue={formData.gearRequirements ??= ''} onChange={(e) => setFormData({...formData, gearRequirements: e.target.value})}/>
        {invalidFormFields.gearRequirements && (
          <small className="form-field-error">{invalidFormFields.gearRequirements}</small>
        )}
      </div>
      <br/>
      <label>Fly Requirements<span className="required-asterik">*</span></label>
      <div className="form-input-container">
        <input
          type="text"
          className={`${invalidFormFields.flyRequirements ? "form-control invalid-field" : "form-control"}`}
          name="flyRequirements"
          placeholder="Example: Elk Hair Caddis (Size 16)"
          defaultValue={formData.flyRequirements ??= ''} onChange={(e) => setFormData({...formData, flyRequirements: e.target.value})}/>
        {invalidFormFields.flyRequirements && (
          <small className="form-field-error">{invalidFormFields.flyRequirements}</small>
        )}
      </div>
      <br/>
    </React.Fragment>
  )
}

GearRequirements.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func
}

export default GearRequirements;