import React, { useEffect, useState } from "react";
import Trip from './Trip';
import PropTypes from 'prop-types';

// I want to show a list of all trips and have a button that will toggle trips by their type (by 'past' or 'future') //

function TripsList(props) {
  const [tripsList, setTripsList] = useState(props.tripsList);
  const [filteredTripsList, setFilteredTripsList] = useState(props.tripsList);

  const filterByPast = () => {
    const filteredPastTripsList = tripsList.filter(trip => trip.tripType === "Past");
    setFilteredTripsList(filteredPastTripsList);
    console.log(filteredPastTripsList);
  }

  const filterByFuture = () => {
    const filteredFutureTripsList = tripsList.filter(trip => trip.tripType === "Future");
    setFilteredTripsList(filteredFutureTripsList);
    console.log(filteredFutureTripsList);
  }

  const allTrips = () => {
    setTripsList(tripsList);
    console.log(tripsList);
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