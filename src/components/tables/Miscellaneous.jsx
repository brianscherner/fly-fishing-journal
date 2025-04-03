import React from "react";

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
                <td className="misc-data">{trip.licenses ? trip.licenses : "N/A"}</td>
              </tr>
              <tr className="misc-details">
                <th>Water Fees</th>
                <td className="misc-data">{trip.waterFees ? trip.waterFees : "N/A"}</td>
              </tr>
              <tr className="misc-details">
                <th>Access</th>
                <td className="misc-data">{trip.access ? trip.access : "N/A"}</td>
              </tr>
              <tr className="misc-details">
                <th>Time of Day</th>
                <td className="misc-data">{trip.timeOfDay ? trip.timeOfDay : "N/A"}</td>
              </tr>
              <tr className="misc-details">
                <th>Travel Time</th>
                <td className="misc-data">{trip.travelTime ? trip.travelTime : "N/A"}</td>
              </tr>

              {trip.tripType === "Future" && (
                <React.Fragment>
                  <tr className="misc-details">
                    <th>Guided?</th>
                    <td className="misc-data">{trip.guidedOrNot ? trip.guidedOrNot : "N/A"}</td>
                  </tr>
                  <tr className="misc-details">
                    <th>Cell and Wifi Service</th>
                    <td className="misc-data">{trip.communications ? trip.guidedOrNot : "N/A"}</td>
                  </tr>
                  <tr className="misc-details">
                    <th>Gratuity Guidelines</th>
                    <td className="misc-data">{trip.gratuity ? trip.gratuity : "N/A"}</td>
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

export default Miscellaneous;