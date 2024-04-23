import React from "react";
import PropTypes from "prop-types";

function PastTrip(props) {
  return (
    <React.Fragment>
      <h3>{props.location}</h3>
      <p>{props.timeOfYear}</p>
      <p>{props.waterType}</p>
    </React.Fragment>
  );
}

PastTrip.propTypes = {
  location: PropTypes.string.isRequired,
  timeOfYear: PropTypes.string.isRequired,
  waterType: PropTypes.string.isRequired
}

export default PastTrip;