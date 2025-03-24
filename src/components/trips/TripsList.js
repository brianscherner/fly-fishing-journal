import React, { useEffect, useState } from "react";
import Trip from './Trip';
import Switch from '@mui/material/Switch';

function TripsList(props) {
  const { tripsList } = props;
  const [isToggled, setIsToggled] = useState(false);
  const [filters, setFilters] = useState({
    destination: "",
    waterBodyType: "",
    season: "",
    tripType: "",
    images: false
  });

  const filteredTripsList = tripsList.filter(trip => {
    return (
      ((filters.tripType === "" || filters.tripType === "All" || filters.tripType === null) || trip.tripType === filters.tripType) &&

      ((filters.waterBodyType === "" || filters.waterBodyType === "All" || filters.season === null) || trip.waterBodyType === filters.waterBodyType) &&

      ((filters.season === "" || filters.season === "All" || filters.season === null) || trip.season === filters.season) &&

      (filters.destination === "" || trip.destination.toLowerCase().includes(filters.destination.toLowerCase())) &&

      ((filters.images === false) || (filters.images === true && trip.images.length > 0))
    );
  });

  // these could be refactored into one function
  const handleTypeSelection = (event) => {
    setFilters(prev => ({ ...prev, tripType: event.target.value }));
  };

  const handleWaterBodySelection = (event) => {
    setFilters(prev => ({ ...prev, waterBodyType: event.target.value }));
  };

  const handleSeasonSelection = (event) => {
    setFilters(prev => ({ ...prev, season: event.target.value }));
  };

  const handleSearch = (event) => {
    setFilters(prev => ({ ...prev, destination: event.target.value }));
  };

  const handleImageToggle = () => {
    const toggleValue = !isToggled;
    setIsToggled(toggleValue);
    setFilters(prev => ({ ...prev, images: toggleValue }));
  };

  // it resets all of the filters, but doesn't render in UI correctly - doesn't appear to trigger another render
  // also doesn't reset value of isToggled which could cause issues

  const handleFilterReset = () => {
    const notToggled = false;
    setIsToggled(notToggled);
    setFilters(prev => ({
      ...prev,
      destination: "",
      waterBodyType: "",
      season: "",
      tripType: "",
      images: notToggled
    }));
  };

  console.log("Is toggled: ", isToggled);
  console.log("Filters: ", filters);
  console.log("Filtered list: ", filteredTripsList);
  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-8">
          {tripsList.length > 0 && (
            <React.Fragment>
              <div className="filter-label">
                <label style={{ justifyContent: "center" }}>Filter Trips</label>
                <br/>
              </div>
              <div className="filter-options">
                <label style={{ justifyContent: "left" }}>By Type</label>
                <select
                  defaultValue={filters}
                  className="form-select"
                  onChange={handleTypeSelection}>
                  <option value="" disabled>Select trip type</option>
                  <option value="All">All</option>
                  <option value="Past">Past</option>
                  <option value="Future">Future</option>
                </select>
                <label style={{ justifyContent: "left" }}>By Water Body</label>
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
                <label style={{ justifyContent: "left" }}>By Season</label>
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
                <label style={{ justifyContent: "left" }}>Search Trips</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a location"
                  onChange={handleSearch}
                />
                <label style={{ justifyContent: "left" }}>Has Photos</label>
                <Switch
                  onChange={handleImageToggle}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <button type="button" className="btn filters-reset-button" onClick={handleFilterReset}>Clear Filters</button>
                <br/>
              </div>
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