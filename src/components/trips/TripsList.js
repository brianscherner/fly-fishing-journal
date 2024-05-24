import React, { useState } from "react";
import Trip from './Trip';
import PropTypes from 'prop-types';

function TripsList(props) {
  const { tripsList } = props;
  const [filteredTripsList, setFilteredTripsList] = useState(tripsList);

  const filterByPast = () => {
    const filteredPastTripsList = tripsList.filter(trip => trip.tripType === "Past");
    setFilteredTripsList(filteredPastTripsList);
  }

  const filterByFuture = () => {
    const filteredFutureTripsList = tripsList.filter(trip => trip.tripType === "Future");
    setFilteredTripsList(filteredFutureTripsList);
  }

  const allTrips = () => {
    setFilteredTripsList(tripsList);
  }

  return (
    <React.Fragment>
      <div className="accordion accordion-flush">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" onClick={allTrips}>All Trips</button>
          </h2>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" onClick={filterByPast}>Past Trips</button>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" onClick={filterByFuture} >Future Trips</button>
          </h2>
        </div>
        <br/>
        <br/>
        {filteredTripsList.map((trip) =>
          <Trip
            whenTripClicked={props.onTripSelection}
            destination={trip.destination}
            tripType={trip.tripType}
            id={trip.id}
            key={trip.id}/>
        )}
        </div>
      </div>
    </React.Fragment>
  );
}

TripsList.propTypes = {
  buttonText: PropTypes.string,
  tripsList: PropTypes.array,
  onTripSelection: PropTypes.func,
  filterByTripType: PropTypes.func,
}

export default TripsList;