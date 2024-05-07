import React from "react";
import Trip from './Trip';
import PropTypes from 'prop-types';

function TripsList(props) {
  return (
    <React.Fragment>
      <h2>Past Trips</h2>
      <br/>
      {props.tripsList.map((trip) =>
        <PastTrip
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