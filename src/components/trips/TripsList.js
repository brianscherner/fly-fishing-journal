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

  // location will be a search (use includes() method)
  // use a slider or dropdown with ranges for fish caught
  // do location and fish caught last
  // should have a 'clear' feature that resets all filters to "All" or ""

  const filteredTripsList = tripsList.filter(trip => {
    return (
      ((filters.tripType === "" || filters.tripType === "All" || filters.tripType === null) || trip.tripType === filters.tripType) &&

      ((filters.waterBodyType === "" || filters.waterBodyType === "All" || filters.season === null) || trip.waterBodyType === filters.waterBodyType) &&

      ((filters.season === "" || filters.season === "All" || filters.season === null) || trip.season === filters.season)
    );
  });

  const handleTypeSelection = (event) => {
    setFilters(prev => ({ ...prev, tripType: event.target.value }));
  };

  const handleWaterBodySelection = (event) => {
    setFilters(prev => ({ ...prev, waterBodyType: event.target.value }));
  };

  const handleSeasonSelection = (event) => {
    setFilters(prev => ({ ...prev, season: event.target.value }));
  };

  console.log("Filters: ", filters);
  console.log("Trips list: ", tripsList);
  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-8">
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
                <option value="All">All</option>
                <option value="River">River</option>
                <option value="Lake">Lake</option>
                <option value="Ocean">Ocean</option>
                <option value="Mix">Mix</option>
              </select>
              <select
                defaultValue={filters}
                className="form-select"
                onChange={handleSeasonSelection}>
                <option value="" disabled>Select a season</option>
                <option value="All">All</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
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
            season={trip.season}
            id={trip.id}
            key={trip.id}/>
          ))}
        </div>
      </div>

    </React.Fragment>
  );
}

export default TripsList;