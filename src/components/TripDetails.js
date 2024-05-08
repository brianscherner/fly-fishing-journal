import React from "react";
import PropTypes from "prop-types";

function TripDetails(props) {
  const { trip, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h3>{trip.destination}</h3>
      <p>{trip.tripType}</p>
      <button onClick={() => onClickingEdit(trip.id)}>Edit</button>
      <br/>
      <button onClick={() => onClickingDelete(trip.id)}>Delete</button>
      <hr/>
    </React.Fragment>
  );
}

TripDetails.propTypes = {
  trip: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default TripDetails;