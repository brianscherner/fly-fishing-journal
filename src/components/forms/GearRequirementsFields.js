import React from "react";
import PropTypes from "prop-types";

function GearRequirements(props) {
  const { formData, setFormData } = props;

  const clothingRequirements = <input type="text" className="form-control" name="clothingRequirements" placeholder="Clothing Requirements*" defaultValue={formData.clothingRequirements ??= ''} onChange={(e) => setFormData({...formData, clothingRequirements: e.target.value})} required/>

  const gearRequirements = <input type="text" className="form-control" name="gearRequirements" placeholder="Fishing Gear Requirements*" defaultValue={formData.gearRequirements ??= ''} onChange={(e) => setFormData({...formData, gearRequirements: e.target.value})} required/>

  const flyRequirements = <input type="text" className="form-control" name="flyRequirements" placeholder="Fly Requirements*" defaultValue={formData.flyRequirements ??= ''} onChange={(e) => setFormData({...formData, flyRequirements: e.target.value})} required/>

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Gear Requirements</h4>
      <p className="required-paragraph">* indicates a required field</p>
      {clothingRequirements}
      <br/>
      {gearRequirements}
      <br/>
      {flyRequirements}
      <br/>
    </React.Fragment>
  )
}

GearRequirements.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func
}

export default GearRequirements;