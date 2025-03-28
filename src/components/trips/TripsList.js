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

  // fix responsiveness for tablet views (768px and up)
  return (
    <React.Fragment>
      {tripsList.length > 0 && (
        <React.Fragment>
          <div className="trip-filters-container mb-2">
            <div className="trip-filters">
              <div className="filter-label mb-3 mt-3">
                <label style={{ justifyContent: "center", fontSize: '1.35rem', fontWeight: '700' }}>Filter Trips</label>
              </div>
              <div className="row justify-content-center mb-3">
                <div className="col-11 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                  <label style={{ justifyContent: "left" }}>Search Trips</label>
                  <input
                    value={filters.destination}
                    type="text"
                    className="form-control"
                    placeholder="Enter a location"
                    onChange={handleSearch}
                  />
                </div>
                <div className="col-11 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                  <label style={{ justifyContent: "left" }}>By Water Type</label>
                  <select
                    value={filters.waterBodyType}
                    className="form-select"
                    onChange={handleWaterBodySelection}>
                    <option value="" disabled>Select water type</option>
                    <option value="All">All</option>
                    <option value="River">River</option>
                    <option value="Lake">Lake</option>
                    <option value="Ocean">Ocean</option>
                    <option value="Mix">Mix</option>
                  </select>
                </div>
                <div className="col-11 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-1">
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
              </div>
              <div className="row justify-content-center mb-2">
                <div className="col-11 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-4">
                  <label style={{ justifyContent: "left" }}>By Trip Type</label>
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
                {/* fix alignment of Has Photos? and button so they are in line with the Trip Type dropdown menu */}
                <div className="col-11 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-3 d-flex align-items-center justify-content-center gap-2">
                  <label style={{ justifyContent: "left", textAlign: "left" }}>Has Photos?</label>
                  <Switch
                    checked={filters.images}
                    onChange={handleImageToggle}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </div>
                <div className="col-11 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-3 d-flex align-items-center justify-content-center">
                  <button type="button" className="btn filters-reset-button" onClick={handleFilterReset}>Clear Filters</button>
                </div>
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