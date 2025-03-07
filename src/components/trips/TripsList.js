import React, { useState, useMemo } from "react";
import Trip from './Trip';

function TripsList(props) {
  const { tripsList } = props;
  const [filter, setFilter] = useState('');

  const filteredTripsList = useMemo(() => {

    if (filter === "Past") {
      return tripsList.filter(trip => trip.tripType === "Past");
    } else if (filter === "Future") {
      return tripsList.filter(trip => trip.tripType === "Future");
    } else {
      return tripsList;
    }

  }, [filter, tripsList]);

  const handleFilterSelection = (event) => {
    setFilter(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
          {tripsList.length > 0 && (
            <React.Fragment>
              <label style={{ justifyContent: "left" }}>Filter Trips</label>
              <select
                defaultValue={filter}
                className="form-select"
                onChange={handleFilterSelection}>
                <option value="" disabled>Select trip type</option>
                <option value="All">All</option>
                <option value="Past">Past</option>
                <option value="Future">Future</option>
              </select>
              <br/>
            </React.Fragment>
          )}
        </div>
      </div>

      {(tripsList.length === 0 || filteredTripsList.length === 0) && (
        <p className="empty-trip-list-msg">No trips to show. Add a trip to get started!</p>
      )}

      <div className="trips-list-container">
        <div className="trips-list">
          {filteredTripsList.map((trip) => (
          <Trip
            whenTripClicked={props.onTripSelection}
            destination={trip.destination}
            startDate={trip.startDate}
            tripType={trip.tripType}
            fishCaught={trip.fishCaught}
            waterBodyType={trip.waterBodyType}
            images={trip.images}
            id={trip.id}
            key={trip.id}/>
          ))}
        </div>
      </div>

    </React.Fragment>
  );
}

export default TripsList;