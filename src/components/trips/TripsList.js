import React, { useState } from "react";
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

  // refactor layout of trip filters
  // default desktop/tablet views
  // have 3 filters on one row
  // have other 2 and clear button on bottom
  // stack in single column for mobile views

  return (
    <React.Fragment>
      {tripsList.length > 0 && (
        <React.Fragment>
          <div className="filter-label mb-2">
            <label style={{ justifyContent: "center" }}>Filter Trips</label>
            {/* <br/> */}
          </div>
          <div className="d-flex justify-content-center">
            <div className="row mb-3">
              <div className="col-md-4 mb-2">
                <label style={{ justifyContent: "left" }}>Search Trips</label>
                <input
                  value={filters.destination}
                  type="text"
                  className="form-control"
                  placeholder="Enter a location"
                  onChange={handleSearch}
                />
              </div>
              <div className="col-md-3 mb-2">
                <label style={{ justifyContent: "left" }}>By Water Body</label>
                <select
                  value={filters.waterBodyType}
                  className="form-select"
                  onChange={handleWaterBodySelection}>
                  <option value="" disabled>Select water body type</option>
                  <option value="All">All</option>
                  <option value="River">River</option>
                  <option value="Lake">Lake</option>
                  <option value="Ocean">Ocean</option>
                  <option value="Mix">Mix</option>
                </select>
              </div>
              <div className="col-md-3 mb-2">
                <label style={{ justifyContent: "left" }}>By Season</label>
                <select
                  value={filters.season}
                  className="form-select"
                  onChange={handleSeasonSelection}>
                  <option value="" disabled>Select a season</option>
                  <option value="All">All</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Fall">Fall</option>
                </select>
              </div>
              <div className="row justify-content-center align-items-end">
                <div className="col-md-3 mb-2">
                  <label style={{ justifyContent: "left" }}>By Type</label>
                  <select
                    value={filters.tripType}
                    className="form-select"
                    onChange={handleTypeSelection}>
                    <option value="" disabled>Select trip type</option>
                    <option value="All">All</option>
                    <option value="Past">Past</option>
                    <option value="Future">Future</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2 d-flex justify-content-between align-items-center">
                  <label style={{ justifyContent: "left" }}>Has Photos?</label>
                  <Switch
                    checked={filters.images}
                    onChange={handleImageToggle}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                  <button type="button" className="btn filters-reset-button" onClick={handleFilterReset}>Clear Filters</button>
                </div>
                <br/>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}

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