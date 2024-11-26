import React from "react";
import PropTypes from "prop-types";
import BugReportIcon from '@mui/icons-material/BugReport';
import TagIcon from '@mui/icons-material/Tag';
import PhishingIcon from '@mui/icons-material/Phishing';
import KayakingIcon from '@mui/icons-material/Kayaking';
import WaterIcon from '@mui/icons-material/Water';

function TripNotesFields(props) {
  const { formData, setFormData } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Trip Notes</h4>
      <p className="required-msg" style={{ fontStyle: "italic" }}>* indicates a required field</p>
      <label>Flies Used*</label>
      <div className="form-input-container">
        <input type="text"
        className="form-control"
        name="fliesUsed"
        placeholder="List flies used"
        defaultValue={formData.fliesUsed ??= ''}
        onChange={(e) => setFormData({...formData, fliesUsed: e.target.value})}/>
        <BugReportIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Fish Caught*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="fishCaught"
          placeholder="Enter amount of fish"
          defaultValue={formData.fishCaught ??= ''}
          onChange={(e) => setFormData({...formData, fishCaught: e.target.value})}/>
        <TagIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Fishing Tackle*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="fishingTackleUsed"
          placeholder="Enter tackle used"
          defaultValue={formData.fishingTackleUsed ??= ''} onChange={(e) => setFormData({...formData, fishingTackleUsed: e.target.value})}/>
        <PhishingIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Fishing Method*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="fishingMethod"
          placeholder="Enter fishing method"
          defaultValue={formData.fishingMethod ??= ''}
          onChange={(e) => setFormData({...formData, fishingMethod: e.target.value})}/>
        <KayakingIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>River Flow*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="riverFlowLevels"
          placeholder="Enter cubic feet per second"
          defaultValue={formData.riverFlowLevels ??= ''} onChange={(e) => setFormData({...formData, riverFlowLevels: e.target.value})}/>
        <WaterIcon className="form-input-icon"/>
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