import React from "react";
import PropTypes from "prop-types";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Trip(props) {
  console.log("Imgs array: ", props.images);
  return (
    <React.Fragment>
      {/* update trip background to be first image from the image array - otherwise leave it as is */}
      <div className="trip" onClick={() => props.whenTripClicked(props.id)}>
        <LocationOnIcon fontSize="large" id="trip-icon"/>
        <br/>
        <br/>
        <h3 className="trip-header-in-list">{props.destination}</h3>
        <div className="trip-details-wrapper">
          <br/>
          <p className="trip-details-in-list">{props.waterBodyType}</p>
          <p className="trip-details-in-list">{props.tripType}</p>
          <p className="trip-details-in-list">{props.fishCaught} fish caught</p>
          <p className="trip-details-in-list">{props.startDate}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

Trip.propTypes = {
  destination: PropTypes.string,
  startDate: PropTypes.string,
  tripType: PropTypes.string,
  fishCaught: PropTypes.string,
  waterBodyType: PropTypes.string,
  images: PropTypes.array,
  id: PropTypes.string,
  whenTripClicked: PropTypes.func
}

export default Trip;