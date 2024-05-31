import React from "react";
import PropTypes from "prop-types";

function Trip(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTripClicked(props.id)}>
        <h3 className="trip-header-in-list">{props.destination}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Trip.propTypes = {
  destination: PropTypes.string,
  tripType: PropTypes.string,
  id: PropTypes.string,
  whenTripClicked: PropTypes.func
}

export default Trip;