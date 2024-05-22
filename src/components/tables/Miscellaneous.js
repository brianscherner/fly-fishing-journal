import React from "react";
import PropTypes from "prop-types";

function Miscellaneous(props) {
  const { trip } = props;

  return (
    <React.Fragment>
      <div className='table-container'>
        <div className='row justify-content-center'>
          <table className='table'>
            <tbody>
              <tr className="misc-details">
                <th>Required Licenses</th>
                <td className="misc-data">{trip.licenses}</td>
              </tr>
              <tr className="misc-details">
                <th>Water Fees</th>
                <td className="misc-data">{trip.waterFees}</td>
              </tr>
              <tr className="misc-details">
                <th>Access</th>
                <td className="misc-data">{trip.access}</td>
              </tr>
              <tr className="misc-details">
                <th>Time of Day</th>
                <td className="misc-data">{trip.timeOfDay}</td>
              </tr>
              <tr className="misc-details">
                <th>Travel Time</th>
                <td className="misc-data">{trip.travelTime}</td>
              </tr>

              {trip.tripType === "Future" && (
                <React.Fragment>
                  <tr className="misc-details">
                    <th>Guided?</th>
                    <td className="misc-data">{trip.guidedOrNot}</td>
                  </tr>
                  <tr className="misc-details">
                    <th>Cell and Wifi Service</th>
                    <td className="misc-data">{trip.communications}</td>
                  </tr>
                  <tr className="misc-details">
                    <th>Gratuity Guidelines</th>
                    <td className="misc-data">{trip.gratuity}</td>
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

Miscellaneous.propTypes = {
  trip: PropTypes.object
}

export default Miscellaneous;