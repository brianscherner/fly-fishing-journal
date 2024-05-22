import React from "react";
import PropTypes from "prop-types";

function DestinationInfo(props) {
  const { trip } = props;

  return (
    <React.Fragment>
      <div className="table-container">
        <div className="row justify-content-center">
          <table className="table">
            <tbody>
              <tr className="dest-info-details">
                <th>Destination</th>
                <td className="dest-info-data">{trip.destination}</td>
              </tr>
              <tr className="dest-info-details">
                <th>Trip Type</th>
                <td className="dest-info-data">{trip.tripType}</td>
              </tr>
              <tr className="dest-info-details">
                <th>Season</th>
                <td className="dest-info-data">{trip.season}</td>
              </tr>
              <tr className="dest-info-details">
                <th>Water Type</th>
                <td className="dest-info-data">{trip.waterType}</td>
              </tr>
              <tr className="dest-info-details">
                <th>Water Body Type</th>
                <td className="dest-info-data">{trip.waterBodyType}</td>
              </tr>
              <tr className="dest-info-details">
                <th>Fish Species</th>
                <td className="dest-info-data">{trip.species}</td>
              </tr>

              {trip.tripType === "Past" && (
                <React.Fragment>
                  <tr className="dest-info-details">
                    <th>State</th>
                    <td className="dest-info-data">{trip.state}</td>
                  </tr>
                  <tr className="dest-info-details">
                    <th>County</th>
                    <td className="dest-info-data">{trip.county}</td>
                  </tr>
                </React.Fragment>
              )}

              <tr className="dest-info-details">
                <th>Country</th>
                <td className="dest-info-data">{trip.country}</td>
              </tr>

              {trip.tripType === "Future" && (
                <React.Fragment>
                  <tr className="dest-info-details">
                    <th>Climate</th>
                    <td className="dest-info-data">{trip.climate}</td>
                  </tr>
                </React.Fragment>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

DestinationInfo.propTypes = {
  trip: PropTypes.object
}

export default DestinationInfo;