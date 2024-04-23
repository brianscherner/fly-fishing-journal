import React from "react";
import PastTrip from './PastTrip';
import PropTypes from 'prop-types';

function PastTripsList(props) {
  return (
    <React.Fragment>
      {props.pastTripsList.map((pastTrip, index) =>
        <PastTrip
          location={pastTrip.location}
          timeOfYear={pastTrip.timeOfYear}
          waterType={pastTrip.waterType}
          key={index}/>
      )}
    </React.Fragment>
  );
}

PastTripsList.propTypes = {
  pastTripsList: PropTypes.array
}

export default PastTripsList;