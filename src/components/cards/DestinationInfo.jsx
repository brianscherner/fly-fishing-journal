import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function DestinationInfo(props) {
  const { trip } = props;

  return (
    <React.Fragment>
      <div className="trip-card" id="dest-info-card">
        <h4 className="category-header"><LocationOnIcon/> Location Info</h4>
        <br/>
        <div className="dest-info-container">
          <div className="dest-info-details">
            <div className="dest-info-data">
              <h5>Location</h5>
              <p>{trip.destination ? trip.destination : "N/A"}</p>
            </div>
            <div className="dest-info-data">
              <h5>Location Type</h5>
              <p>{trip.destinationType ? trip.destinationType : "N/A"}</p>
            </div>
            <div className="dest-info-data">
              <h5>Trip Type</h5>
              <p>{trip.tripType ? trip.tripType : "N/A"}</p>
            </div>
            <div className="dest-info-data">
              <h5>Season</h5>
              <p>{trip.season ? trip.season : "N/A"}</p>
            </div>
            <div className="dest-info-data">
              <h5>Start Date</h5>
              <p>{trip.startDate ? trip.startDate : "N/A"}</p>
            </div>
            <div className="dest-info-data">
              <h5>End Date</h5>
              <p>{trip.endDate ? trip.endDate : "N/A"}</p>
            </div>
            <div className="dest-info-data">
              <h5>Water Type</h5>
              <p>{trip.waterType ? trip.waterType : "N/A"}</p>
            </div>
            <div className="dest-info-data">
              <h5>Water Body Type</h5>
              <p>{trip.waterBodyType ? trip.waterBodyType : "N/A"}</p>
            </div>
            <div className="dest-info-data">
              <h5>Fish Species</h5>
              <p>{trip.species ? trip.species : "N/A"}</p>
            </div>
            <div className="dest-info-data">
              <h5>State</h5>
              <p>{trip.state ? trip.state : "N/A"}</p>
            </div>
            <div className="dest-info-data">
              <h5>County</h5>
              <p>{trip.county ? trip.county : "N/A"}</p>
            </div>
            <div className="dest-info-data">
              <h5>Country</h5>
              <p>{trip.country ? trip.country : "N/A"}</p>
            </div>
            {trip.tripType === "Future" && (
              <div className="dest-info-data">
                <h5>Climate</h5>
                <p>{trip.climate ? trip.climate : "N/A"}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DestinationInfo;