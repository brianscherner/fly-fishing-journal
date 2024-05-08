import React from "react";
import Trip from './Trip';
import PropTypes from 'prop-types';

function TripsList(props) {
  return (
    <React.Fragment>
      <h2>Trips</h2>
      <br/>
      {props.tripsList.map((trip) =>
        <Trip
          whenTripClicked={props.onTripSelection}
          location={trip.location}
          timeOfYear={trip.timeOfYear}
          waterType={trip.waterType}
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