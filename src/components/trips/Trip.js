import React from "react";
import PropTypes from "prop-types";

function Trip(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTripClicked(props.id)}>
        <h3 className="trip-header-in-list">{props.destination}</h3>
        <p className="trip-dates-in-list">{props.startDate} to {props.endDate}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Trip.propTypes = {
  destination: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  tripType: PropTypes.string,
  id: PropTypes.string,
  whenTripClicked: PropTypes.func
}

export default Trip;