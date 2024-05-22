import React from "react";
import PropTypes from "prop-types";

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
                <td className="trip-notes-data">{trip.fishingMethod}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>Flies Used</th>
                <td className="trip-notes-data">{trip.fliesUsed}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>Fish Caught</th>
                <td className="trip-notes-data">{trip.fishCaught}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>Fishing Tackle Used</th>
                <td className="trip-notes-data">{trip.fishingTackleUsed}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>River Flow Levels</th>
                <td className="trip-notes-data">{trip.riverFlowLevels}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

TripNotes.propTypes = {
  trip: PropTypes.object
}

export default TripNotes;