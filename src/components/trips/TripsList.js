import React from "react";
import Trip from './Trip';
import PropTypes from 'prop-types';

function TripsList(props) {
  return (
    <React.Fragment>
      <h2>Trips</h2>
      <br/>
      <hr/>
      {props.tripsList.map((trip) =>
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
  tripsList: PropTypes.array,
  onTripSelection: PropTypes.func
}

export default TripsList;