import React from "react";
import PropTypes from "prop-types";

function TripNotes(props) {
  const { trip } = props;

  return (
    <React.Fragment>
      <div className='table-container'>
        <div className='row justify-content-center'>
          <div className='col-4'>
            <table className='table'>
              <tr className="trip-notes-table">
                <th>Fishing Method</th>
                <td>{trip.fishingMethod}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>Flies Used</th>
                <td>{trip.fliesUsed}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>Fish Caught</th>
                <td>{trip.fishCaught}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>Fishing Tackle Used</th>
                <td>{trip.fishingTackleUsed}</td>
              </tr>
              <tr className="trip-notes-table">
                <th>River Flow Levels</th>
                <td>{trip.riverFlowLevels}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

TripNotes.propTypes = {
  trip: PropTypes.object
}

export default TripNotes;