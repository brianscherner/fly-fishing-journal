import React from "react";
import PropTypes from "prop-types";

function TripCosts(props) {
  const { trip } = props;

  return (
    <React.Fragment>
      <div className="table-container">
        <div className="row justify-content-center">
          <table className="table">
            <tbody>
              <tr className="trip-costs-table">
                <th>Travel Documents</th>
                <td className="trip-costs-data">{trip.travelDocs}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Travel Costs</th>
                <td className="trip-costs-data">{trip.travelCosts}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Trip Expenses</th>
                <td className="trip-costs-data">{trip.tripExpenses}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Baggage/Luggage Fees</th>
                <td className="trip-costs-data">{trip.baggageLuggage}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Trip Insurance</th>
                <td className="trip-costs-data">{trip.tripInsurance}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Evacuation Insurance</th>
                <td className="trip-costs-data">{trip.evacInsurance}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Deposit Terms</th>
                <td className="trip-costs-data">{trip.depositTerms}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Cancellation Policy</th>
                <td className="trip-costs-data">{trip.cancellationPolicy}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

TripCosts.propTypes = {
  trip: PropTypes.object
}

export default TripCosts;