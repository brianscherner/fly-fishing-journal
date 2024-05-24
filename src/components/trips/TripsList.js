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
      <button type="button" onClick={allTrips} className="btn btn-primary app-buttons">All Trips</button>
      <button type="button" onClick={filterByPast} className="btn btn-primary app-buttons">Past Trips</button>
      <button type="button" onClick={filterByFuture} className="btn btn-primary app-buttons">Future Trips</button>
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