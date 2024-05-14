import React from "react";
import PropTypes from "prop-types";

function DestinationInfo(props) {
  const { trip } = props;

  return (
    <React.Fragment>
      <table className="table">
        <tr className="dest-info-details">
          <th>Destination</th>
          <td>{trip.destination}</td>
        </tr>
        <tr className="dest-info-details">
          <th>Trip Type</th>
          <td>{trip.tripType}</td>
        </tr>
        <tr className="dest-info-details">
          <th>Season</th>
          <td>{trip.season}</td>
        </tr>
        <tr className="dest-info-details">
          <th>Water Type</th>
          <td>{trip.waterType}</td>
        </tr>
        <tr className="dest-info-details">
          <th>Water Body Type</th>
          <td>{trip.waterBodyType}</td>
        </tr>
        <tr className="dest-info-details">
          <th>Fish Species</th>
          <td>{trip.species}</td>
        </tr>

        {trip.tripType === "Past" && (
          <React.Fragment>
            <tr className="dest-info-details">
              <th>State</th>
              <td>{trip.state}</td>
            </tr>
            <tr className="dest-info-details">
              <th>County</th>
              <td>{trip.county}</td>
            </tr>
          </React.Fragment>
        )}

        <tr className="dest-info-details">
          <th>Country</th>
          <td>{trip.country}</td>
        </tr>

        {trip.tripType === "Future" && (
          <React.Fragment>
            <tr className="dest-info-details">
              <th>Climate</th>
              <td>{trip.climate}</td>
            </tr>
          </React.Fragment>
        )}
      </table>
    </React.Fragment>
  )

}

DestinationInfo.propTypes = {
  trip: PropTypes.object
}

export default DestinationInfo;