import React from "react";
import PropTypes from "prop-types";

function PastTripDetails(props) {
  const { pastTrip } = props;

  return (
    <React.Fragment>
      <h3>Location: {pastTrip.location}</h3>
      <p>Time of year: {pastTrip.timeOfYear}</p>
      <p>Water type: {pastTrip.waterType}</p>
      <hr/>
    </React.Fragment>
  );
}

PastTripDetails.propTypes = {
  pastTrip: PropTypes.object
}

export default PastTripDetails;