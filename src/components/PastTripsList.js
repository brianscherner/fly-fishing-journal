import React from "react";
import PastTrip from './PastTrip';
import PropTypes from 'prop-types';

function PastTripsList(props) {
  return (
    <React.Fragment>
      <h2>Past Trips</h2>
      <br/>
      {props.pastTripsList.map((pastTrip) =>
        <PastTrip
          whenPastTripClicked={props.onPastTripSelection}
          location={pastTrip.location}
          timeOfYear={pastTrip.timeOfYear}
          waterType={pastTrip.waterType}
          id={pastTrip.id}
          key={pastTrip.id}/>
      )}
    </React.Fragment>
  );
}

PastTripsList.propTypes = {
  pastTripsList: PropTypes.array,
  onPastTripSelection: PropTypes.func
}

export default PastTripsList;