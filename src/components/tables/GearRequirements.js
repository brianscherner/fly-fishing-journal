import React from "react";

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
                <td className="gear-data">{trip.clothingRequirements ? trip.clothingRequirements : "N/A"}</td>
              </tr>
              <tr className="gear-requir-table">
                <th>Fishing Gear</th>
                <td className="gear-data">{trip.gearRequirements ? trip.gearRequirements : "N/A"}</td>
              </tr>
              <tr className="gear-requir-table">
                <th>Flies</th>
                <td className="gear-data">{trip.flyRequirements ? trip.flyRequirements : "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

export default GearRequirements;