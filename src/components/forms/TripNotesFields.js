import React from "react";
import PropTypes from "prop-types";

function TripNotesFields(props) {
  const { formData, setFormData } = props;

  const fliesUsed = <input type="text" name="fliesUsed" placeholder="Flies Used" defaultValue={formData !== undefined ? formData.fliesUsed : ''} onChange={(e) => setFormData({...formData, fliesUsed: e.target.value})} required/>

  const fishCaught = <input type="text" name="fishCaught" placeholder="Fish Caught" defaultValue={formData !== undefined ? formData.fishCaught : ''} onChange={(e) => setFormData({...formData, fishCaught: e.target.value})} required/>

  const fishingTackleUsed = <input type="text" name="fishingTackleUsed" placeholder="Fishing Tackle Used" defaultValue={formData !== undefined ? formData.fishingTackleUsed : ''} onChange={(e) => setFormData({...formData, fishingTackleUsed: e.target.value})} required/>

  const riverFlowLevels = <input type="text" name="riverFlowLevels" placeholder="River Flow Levels (cfs/ft)" defaultValue={formData !== undefined ? formData.riverFlowLevels : ''} onChange={(e) => setFormData({...formData, riverFlowLevels: e.target.value})}/>

  const fishingMethod = <input type="text" name="fishingMethod" placeholder="Fishing Method (wade, raft, etc)" defaultValue={formData !== undefined ? formData.fishingMethod : ''} onChange={(e) => setFormData({...formData, fishingMethod: e.target.value})} required/>

  return (
    <React.Fragment>
      <h4>Trip Notes</h4>
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