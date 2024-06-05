import React from "react";
import PropTypes from "prop-types";

function TripNotesFields(props) {
  const { formData, setFormData } = props;

  const fliesUsed = <input type="text" className="form-control" name="fliesUsed" placeholder="Flies Used*" defaultValue={formData.fliesUsed ??= ''} onChange={(e) => setFormData({...formData, fliesUsed: e.target.value})} required/>

  const fishCaught = <input type="text" className="form-control" name="fishCaught" placeholder="Fish Caught*" defaultValue={formData.fishCaught ??= ''} onChange={(e) => setFormData({...formData, fishCaught: e.target.value})} required/>

  const fishingTackleUsed = <input type="text" className="form-control" name="fishingTackleUsed" placeholder="Fishing Tackle Used*" defaultValue={formData.fishingTackleUsed ??= ''} onChange={(e) => setFormData({...formData, fishingTackleUsed: e.target.value})} required/>

  const riverFlowLevels = <input type="text" className="form-control" name="riverFlowLevels" placeholder="River Flow Levels (cfs/ft)*" defaultValue={formData.riverFlowLevels ??= ''} onChange={(e) => setFormData({...formData, riverFlowLevels: e.target.value})}/>

  const fishingMethod = <input type="text" className="form-control" name="fishingMethod" placeholder="Fishing Method (wade, raft, etc)*" defaultValue={formData.fishingMethod ??= ''} onChange={(e) => setFormData({...formData, fishingMethod: e.target.value})} required/>

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Trip Notes</h4>
      <p className="required-paragraph">* indicates a required field</p>
      {fliesUsed}
      <br/>
      {fishCaught}
      <br/>
      {fishingTackleUsed}
      <br/>
      {fishingMethod}
      <br/>
      {riverFlowLevels}
      <br/>
    </React.Fragment>
  )
}

TripNotesFields.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
}

export default TripNotesFields;