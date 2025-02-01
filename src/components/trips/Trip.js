import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Trip(props) {

  return (
    <React.Fragment>
      <div
        className="trip"
        onClick={() => props.whenTripClicked(props.id)}
        style={
          props.images.length > 0 ?
          {
            backgroundImage: `url(${props.images[0]})`,
            backgroundSize: "cover"
          } : {}
        }
        >
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

export default Trip;