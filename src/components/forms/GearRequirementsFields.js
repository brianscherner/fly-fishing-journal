import React from "react";
import PropTypes from "prop-types";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PhishingIcon from '@mui/icons-material/Phishing';
import BugReportIcon from '@mui/icons-material/BugReport';

function GearRequirements(props) {
  const { formData, setFormData } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Gear Requirements</h4>
      <p className="required-msg" style={{ fontStyle: "italic"}}>* indicates a required field</p>
      <label>Clothing Requirements*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="clothingRequirements"
          placeholder="Enter requirements"
          defaultValue={formData.clothingRequirements ??= ''} onChange={(e) => setFormData({...formData, clothingRequirements: e.target.value})}/>
        <CheckroomIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Fishing Requirements*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="gearRequirements"
          placeholder="Enter requirements"
          defaultValue={formData.gearRequirements ??= ''} onChange={(e) => setFormData({...formData, gearRequirements: e.target.value})}/>
        <PhishingIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Fly Requirements*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="flyRequirements"
          placeholder="Enter requirements"
          defaultValue={formData.flyRequirements ??= ''} onChange={(e) => setFormData({...formData, flyRequirements: e.target.value})}/>
        <BugReportIcon className="form-input-icon"/>
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