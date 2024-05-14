import React from "react";

function GearRequirements(props) {
  const clothingRequirements = <input type="text" name="clothingRequirements" placeholder="Clothing Requirements" defaultValue={props.trip !== undefined ? props.trip.clothingRequirements : ''}/>

  const gearRequirements = <input type="text" name="gearRequirements" placeholder="Fishing Gear Requirements" defaultValue={props.trip !== undefined ? props.trip.gearRequirements : ''}/>

  const flyRequirements = <input type="text" name="flyRequirements" placeholder="Fly Requirements" defaultValue={props.trip !== undefined ? props.trip.flyRequirements : ''}/>

  return (
    <React.Fragment>
      <h4>Gear Requirements</h4>
      {clothingRequirements}
      <br/>
      {gearRequirements}
      <br/>
      {flyRequirements}
      <br/>
    </React.Fragment>
  )
}

export default GearRequirements;