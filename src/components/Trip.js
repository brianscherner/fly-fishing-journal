import React from "react";
import PropTypes from "prop-types";

function Trip(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTripClicked(props.id)}>
        <h3>{props.location}</h3>
        <p>{props.timeOfYear}</p>
        <p>{props.waterType}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Trip.propTypes = {
  location: PropTypes.string.isRequired,
  timeOfYear: PropTypes.string.isRequired,
  waterType: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenTripClicked: PropTypes.func
}

export default Trip;