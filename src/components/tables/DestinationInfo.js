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
                <td className="dest-info-data">{trip.destination ? trip.destination : "N/A"}</td>
              </tr>
              <tr className="dest-info-details">
                <th>Trip Type</th>
                <td className="dest-info-data">{trip.tripType ? trip.tripType : "N/A"}</td>
              </tr>
              <tr className="dest-info-details">
                <th>Season</th>
                <td className="dest-info-data">{trip.season ? trip.season : "N/A"}</td>
              </tr>
              <tr className="dest-info-details">
                <th>Start Date</th>
                <td className="dest-info-data">{trip.startDate ? trip.startDate : "N/A"}</td>
              </tr>
              <tr className="dest-info-details">
                <th>End Date</th>
                <td className="dest-info-data">{trip.endDate ? trip.endDate : "N/A"}</td>
              </tr>
              <tr className="dest-info-details">
                <th>Water Type</th>
                <td className="dest-info-data">{trip.waterType ? trip.waterType : "N/A"}</td>
              </tr>
              <tr className="dest-info-details">
                <th>Water Body Type</th>
                <td className="dest-info-data">{trip.waterBodyType ? trip.waterBodyType : "N/A"}</td>
              </tr>
              <tr className="dest-info-details">
                <th>Fish Species</th>
                <td className="dest-info-data">{trip.species ? trip.species : "N/A"}</td>
              </tr>

              {trip.tripType === "Past" && (
                <React.Fragment>
                  <tr className="dest-info-details">
                    <th>State</th>
                    <td className="dest-info-data">{trip.state ? trip.state : "N/A"}</td>
                  </tr>
                  <tr className="dest-info-details">
                    <th>County</th>
                    <td className="dest-info-data">{trip.county ? trip.county : "N/A"}</td>
                  </tr>
                </React.Fragment>
              )}

              <tr className="dest-info-details">
                <th>Country</th>
                <td className="dest-info-data">{trip.country ? trip.country : "N/A"}</td>
              </tr>

              {trip.tripType === "Future" && (
                <React.Fragment>
                  <tr className="dest-info-details">
                    <th>Climate</th>
                    <td className="dest-info-data">{trip.climate ? trip.climate : "N/A"}</td>
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