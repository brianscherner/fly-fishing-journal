import React from "react";
import PropTypes from "prop-types";

function GearRequirements(props) {
  const { trip } = props;

  return (
    <React.Fragment>
      <table className='table'>
        <tr className="gear-requir-table">
          <th>Clothing Requirements</th>
          <td>{trip.clothingRequirements}</td>
        </tr>
        <tr className="gear-requir-table">
          <th>Gear Requirements</th>
          <td>{trip.gearRequirements}</td>
        </tr>
        <tr className="gear-requir-table">
          <th>Fly Requirements</th>
          <td>{trip.flyRequirements}</td>
        </tr>
      </table>
    </React.Fragment>
  )
}

GearRequirements.propTypes = {
  trip: PropTypes.object
}

export default GearRequirements;