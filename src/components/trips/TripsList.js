import React, { useEffect, useState } from "react";
import Trip from './Trip';

function TripsList(props) {
  const { tripsList, setMainTripsList } = props;
  const [filteredTripsList, setFilteredTripsList] = useState([]);

  useEffect(() => {
    setFilteredTripsList(tripsList);
  }, [tripsList]);

  const handleFilterSelection = (event) => {
    const filterSelection = event.target.value;

    if (filterSelection === "All") {
      setFilteredTripsList(tripsList);
    }

    if (filterSelection === "Past") {
      const pastTripsList = tripsList.filter(trip => trip.tripType === "Past");
      setFilteredTripsList(pastTripsList);
    } else if (filterSelection === "Future") {
      const futureTripsList = tripsList.filter(trip => trip.tripType === "Future");
      setFilteredTripsList(futureTripsList);
    }

  }

  return (
    <React.Fragment>
      <div className="row justify-content-center">

        {tripsList.length === 0 && (
          <p className="empty-trip-list-msg">Add your first trip to get started!</p>
        )}

        {/* can adjust width for greater responsiveness later */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
          {tripsList.length > 0 && (
            <React.Fragment>
              <label style={{ justifyContent: "center" }}>Filter Trips</label>
              <select
                className="form-select"
                onChange={handleFilterSelection}>
                <option value="" disabled>Select type</option>
                <option value="All">All</option>
                <option value="Past">Past</option>
                <option value="Future">Future</option>
              </select>
            <br/>
            </React.Fragment>
          )}
        </div>
      </div>

      {filteredTripsList.length === 0 && (
        <p className="empty-trip-list-msg">No trips were found. Add a trip to get started!</p>
      )}

      {filteredTripsList.length > 0 && (
        <div className="trips-list-container">
          <div className="trips-list">
            {filteredTripsList.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
            .map((trip) => (
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
      )}

    </React.Fragment>
  );
}

export default TripsList;