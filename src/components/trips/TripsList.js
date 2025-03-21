import React, { useState, useMemo } from "react";
import Trip from './Trip';

function TripsList(props) {
  const { tripsList } = props;
  const [filters, setFilters] = useState({
    location: "",
    waterBodyType: "",
    season: "",
    fishCaught: "",
    tripType: ""
  });

  const filteredTripsList = useMemo(() => {
    // filter by trip type
    // filter by past trip type and additional criteria
    if (filters.tripType === "Past") {
      if (filters.waterBodyType === "River") {
        return tripsList.filter(trip => trip.tripType === "Past").filter(trip => trip.waterBodyType === "River");
      }
      if (filters.waterBodyType === "Lake") {
        return tripsList.filter(trip => trip.tripType === "Past").filter(trip => trip.waterBodyType === "Lake");
      }
      if (filters.waterBodyType === "Ocean") {
        return tripsList.filter(trip => trip.tripType === "Past").filter(trip => trip.waterBodyType === "Ocean");
      }
      if (filters.waterBodyType === "Mix") {
        return tripsList.filter(trip => trip.tripType === "Past").filter(trip => trip.waterBodyType === "Mix");
      }
      return tripsList.filter(trip => trip.tripType === "Past");
    }

    // filter by future trip type and additional criteria
    if (filters.tripType === "Future") {
      if (filters.waterBodyType === "River") {
        return tripsList.filter(trip => trip.tripType === "Future").filter(trip => trip.waterBodyType === "River");
      }
      if (filters.waterBodyType === "Lake") {
        return tripsList.filter(trip => trip.tripType === "Future").filter(trip => trip.waterBodyType === "Lake");
      }
      if (filters.waterBodyType === "Ocean") {
        return tripsList.filter(trip => trip.tripType === "Future").filter(trip => trip.waterBodyType === "Ocean");
      }
      if (filters.waterBodyType === "Mix") {
        return tripsList.filter(trip => trip.tripType === "Future").filter(trip => trip.waterBodyType === "Mix");
      }
      return tripsList.filter(trip => trip.tripType === "Future");
    }

    // filter by water body type for all trips
    if (filters.waterBodyType === "River") {
      return tripsList.filter(trip => trip.waterBodyType === "River");
    }

    if (filters.waterBodyType === "Lake") {
      return tripsList.filter(trip => trip.waterBodyType === "Lake");
    }

    if (filters.waterBodyType === "Ocean") {
      return tripsList.filter(trip => trip.waterBodyType === "Ocean");
    }

    if (filters.waterBodyType === "Mix") {
      return tripsList.filter(trip => trip.waterBodyType === "Mix");
    }

    return tripsList;

  }, [filters, tripsList]);

  const handleTypeSelection = (event) => {
    setFilters(prev => ({ ...prev, tripType: event.target.value }));
  };

  const handleWaterBodySelection = (event) => {
    setFilters(prev => ({ ...prev, waterBodyType: event.target.value }));
  }

  console.log("Filters: ", filters);
  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
          {tripsList.length > 0 && (
            <div className="filter-options">
              <label style={{ justifyContent: "left" }}>Filter Trips</label>
              <select
                defaultValue={filters}
                className="form-select"
                onChange={handleTypeSelection}>
                <option value="" disabled>Select trip type</option>
                <option value="All">All</option>
                <option value="Past">Past</option>
                <option value="Future">Future</option>
              </select>
              <select
                defaultValue={filters}
                className="form-select"
                onChange={handleWaterBodySelection}>
                <option value="" disabled>Select water body type</option>
                <option value="Any">Any</option>
                <option value="River">River</option>
                <option value="Lake">Lake</option>
                <option value="Ocean">Ocean</option>
                <option value="Mix">Mix</option>
              </select>
              <br/>
            </div>
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