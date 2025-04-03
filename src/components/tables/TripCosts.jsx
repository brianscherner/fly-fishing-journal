import React from "react";

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
                <td className="trip-costs-data">{trip.travelDocs ? trip.travelDocs : "N/A"}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Travel Costs</th>
                <td className="trip-costs-data">{trip.travelCosts ? trip.travelCosts : "N/A"}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Trip Expenses</th>
                <td className="trip-costs-data">{trip.tripExpenses ? trip.tripExpenses : "N/A"}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Baggage/Luggage Fees</th>
                <td className="trip-costs-data">{trip.baggageLuggage ? trip.baggageLuggage : "N/A"}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Trip Insurance</th>
                <td className="trip-costs-data">{trip.tripInsurance ? trip.tripInsurance : "N/A"}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Evacuation Insurance</th>
                <td className="trip-costs-data">{trip.evacInsurance ? trip.evacInsurance : "N/A"}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Deposit Terms</th>
                <td className="trip-costs-data">{trip.depositTerms ? trip.depositTerms : "N/A"}</td>
              </tr>
              <tr className="trip-costs-table">
                <th>Cancellation Policy</th>
                <td className="trip-costs-data">{trip.cancellationPolicy ? trip.cancellationPolicy : "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TripCosts;