import React from "react";
import PropTypes from 'prop-types';
import FutureTrip from './FutureTrip';

function FutureTripsList(props) {
  return (
    <React.Fragment>
      <h2>Future Trips</h2>
      <br/>
      {props.futureTripsList.map((futureTrip, index) =>
        <FutureTrip
          location={futureTrip.location}
          type={futureTrip.type}
          fishSpecies={futureTrip.fishSpecies}
          climate={futureTrip.climate}
          key={index}/>
      )}
    </React.Fragment>
  )
}

FutureTripsList.propTypes = {
  futureTripsList: PropTypes.array
}

export default FutureTripsList;