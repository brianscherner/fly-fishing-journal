import React from "react";
import PropTypes from "prop-types";

function GearRequirements(props) {
  const { trip } = props;

  return (
    <React.Fragment>
      <div className='table-container'>
        <div className='row justify-content-center'>
          <table className='table'>
            <tbody>
              <tr className="gear-requir-table">
                <th>Clothing</th>
                <td>{trip.clothingRequirements}</td>
              </tr>
              <tr className="gear-requir-table">
                <th>Fishing Gear</th>
                <td>{trip.gearRequirements}</td>
              </tr>
              <tr className="gear-requir-table">
                <th>Flies</th>
                <td>{trip.flyRequirements}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

GearRequirements.propTypes = {
  trip: PropTypes.object
}

export default GearRequirements;