import React from "react";
import PropTypes from "prop-types";

function PastTripDetails(props) {
  const { pastTrip, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>Location: {pastTrip.location}</h3>
      <p>Time of year: {pastTrip.timeOfYear}</p>
      <p>Water type: {pastTrip.waterType}</p>
      <button onClick={() => onClickingDelete(pastTrip.id)}>Delete</button>
      <hr/>
    </React.Fragment>
  );
}

PastTripDetails.propTypes = {
  pastTrip: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default PastTripDetails;