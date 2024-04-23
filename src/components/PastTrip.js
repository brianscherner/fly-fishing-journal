import React from "react";
import PropTypes from "prop-types";

function PastTrip(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPastTripClicked(props.id)}>
        <h3>{props.location}</h3>
        <p>{props.timeOfYear}</p>
        <p>{props.waterType}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

PastTrip.propTypes = {
  location: PropTypes.string.isRequired,
  timeOfYear: PropTypes.string.isRequired,
  waterType: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenPastTripClicked: PropTypes.func
}

export default PastTrip;