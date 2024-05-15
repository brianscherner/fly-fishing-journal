import React from "react";
import PropTypes from "prop-types";

function GearRequirements(props) {
  const { trip } = props;

  const clothingRequirements = <input type="text" name="clothingRequirements" placeholder="Clothing Requirements" defaultValue={trip !== undefined ? trip.clothingRequirements : ''} required/>

  const gearRequirements = <input type="text" name="gearRequirements" placeholder="Fishing Gear Requirements" defaultValue={trip !== undefined ? trip.gearRequirements : ''} required/>

  const flyRequirements = <input type="text" name="flyRequirements" placeholder="Fly Requirements" defaultValue={trip !== undefined ? trip.flyRequirements : ''} required/>

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

GearRequirements.propTypes = {
  trip: PropTypes.object
}

export default GearRequirements;