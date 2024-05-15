import React from "react";
import PropTypes from "prop-types";

function TripNotesFields(props) {
  const { trip } = props;

  const fliesUsed = <input type="text" name="fliesUsed" placeholder="Flies Used" defaultValue={trip !== undefined ? trip.fliesUsed : ''} required/>

  const fishCaught = <input type="text" name="fishCaught" placeholder="Fish Caught" defaultValue={trip !== undefined ? trip.fishCaught : ''} required/>

  const fishingTackleUsed = <input type="text" name="fishingTackleUsed" placeholder="Fishing Tackle Used" defaultValue={trip !== undefined ? trip.fishingTackleUsed : ''} required/>

  const riverFlowLevels = <input type="text" name="riverFlowLevels" placeholder="River Flow Levels (cfs/ft)" defaultValue={trip !== undefined ? trip.riverFlowLevels : ''}/>

  const fishingMethod = <input type="text" name="fishingMethod" placeholder="Fishing Method (wade, raft, etc)" defaultValue={trip !== undefined ? trip.fishingMethod : ''} required/>

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
  trip: PropTypes.object
}

export default TripNotesFields;