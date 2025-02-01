import React from "react";

function TripNotes(props) {
  const { trip } = props;

  return (
    <React.Fragment>
      <div className='table-container'>
        <div className='row justify-content-center'>
          <table className='table'>
            <tbody>
              <tr className="trip-notes-table">
                <th>Fishing Method</th>
                <td className="trip-notes-data">{trip.fishingMethod ? trip.fishingMethod : "N/A"}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>Flies Used</th>
                <td className="trip-notes-data">{trip.fliesUsed ? trip.fliesUsed : "N/A"}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>Fish Caught</th>
                <td className="trip-notes-data">{trip.fishCaught ? trip.fishCaught : "N/A"}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>Fishing Tackle Used</th>
                <td className="trip-notes-data">{trip.fishingTackleUsed ? trip.fishingTackleUsed : "N/A"}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>River Flow Levels</th>
                <td className="trip-notes-data">{trip.riverFlowLevels ? trip.riverFlowLevels : "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TripNotes;