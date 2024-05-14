import React from "react";

function TripNotesFields(props) {
  const fliesUsed = <input type="text" name="fliesUsed" placeholder="Flies Used" defaultValue={props.trip !== undefined ? props.trip.fliesUsed : ''} required/>

  const fishCaught = <input type="text" name="fishCaught" placeholder="Fish Caught" defaultValue={props.trip !== undefined ? props.trip.fishCaught : ''} required/>

  const fishingTackleUsed = <input type="text" name="fishingTackleUsed" placeholder="Fishing Tackle Used" defaultValue={props.trip !== undefined ? props.trip.fishingTackleUsed : ''} required/>

  const riverFlowLevels = <input type="text" name="riverFlowLevels" placeholder="River Flow Levels (cfs/ft)" defaultValue={props.trip !== undefined ? props.trip.riverFlowLevels : ''}/>

  const fishingMethod = <input type="text" name="fishingMethod" placeholder="Fishing Method (wade, raft, etc)" defaultValue={props.trip !== undefined ? props.trip.fishingMethod : ''}/>

  return (
    <React.Fragment>
      <h4>Trip Notes</h4>
      {fliesUsed}
      <br/>
      {fishCaught}
      <br/>
      {fishingTackleUsed}
      <br/>
      {riverFlowLevels}
      <br/>
      {fishingMethod}
      <br/>
    </React.Fragment>
  )
}

export default TripNotesFields;