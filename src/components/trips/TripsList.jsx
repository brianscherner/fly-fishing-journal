import React, { useEffect, useState } from "react";
import Trip from './Trip';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import WaterIcon from '@mui/icons-material/Water';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import GoTop from '../ui/GoTop';

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
  const [showGoTop, setShowGoTop] = useState(false);
  const mobileThreshold = 1800;
  const desktopThreshold = 3000;

  const filteredTripsList = tripsList.filter(trip => {
    return (
      ((filters.tripType === "" || filters.tripType === "All" || filters.tripType === null) || trip.tripType === filters.tripType) &&

      ((filters.waterBodyType === "" || filters.waterBodyType === "All" || filters.season === null) || trip.waterBodyType === filters.waterBodyType) &&

      ((filters.season === "" || filters.season === "All" || filters.season === null) || trip.season === filters.season) &&

      (filters.destination === "" || trip.destination.toLowerCase().includes(filters.destination.toLowerCase())) &&

      ((filters.images === false) || (filters.images === true && trip.images.length > 0))
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

  const showGoTopButton = () => {
    if (window.pageYOffset >= mobileThreshold) {
      setShowGoTop(true);
    } else if (window.pageYOffset >= desktopThreshold) {
      setShowGoTop(true);
    } else {
      setShowGoTop(false);
    }
  }

  const handleGoTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    window.addEventListener('scroll', showGoTopButton);
  }, []);

  return (
    <React.Fragment>
      {tripsList.length > 0 && (
        <React.Fragment>
          <div className="trip-filters-container mb-2">
            <div className="trip-filters">
              <div className="filter-label mb-3 mt-3">
                <label style={{ justifyContent: "center", fontSize: '1.35rem', fontWeight: '700', alignItems: "center" }}><FilterListIcon/>&nbsp;Filters</label>
              </div>
              <div className="row justify-content-center mb-3">
                <div className="col-11 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                  <label style={{ justifyContent: "left", alignItems: "center" }}><SearchIcon/>&nbsp;Search By Location</label>
                  <input
                    value={filters.destination}
                    type="text"
                    className="form-control"
                    placeholder="Enter a location"
                    onChange={handleSearch}
                  />
                </div>
                <div className="col-11 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                  <label style={{ justifyContent: "left", alignItems: "center" }}><WaterIcon/>&nbsp;Water Type</label>
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
                <div className="col-11 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-1">
                  <label style={{ justifyContent: "left", alignItems: "center" }}><CalendarMonthIcon/>&nbsp;Season</label>
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
              <div className="row justify-content-center align-items-end mb-2">
                <div className="col-11 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                  <label style={{ justifyContent: "left", alignItems: "center" }}><EventIcon/>&nbsp;Trip Type</label>
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
                <div className="col-11 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-4 d-flex align-items-center justify-content-center gap-2 gap-md-2">
                  <label className="text-md-start align-items-center">Has Photos?</label>
                  <Switch
                    checked={filters.images}
                    onChange={handleImageToggle}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </div>
                <div className="col-11 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 d-flex align-items-center justify-content-center">
                  <button type="button" className="btn filters-reset-button" onClick={handleFilterReset}><ClearAllIcon/>&nbsp;Clear Filters</button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}

      {(tripsList.length === 0 || filteredTripsList.length === 0) && (
        <p className="empty-trip-list-msg">No trips to show. Add a trip to get started!</p>
      )}

      {showGoTop ? <GoTop goTop={handleGoTop}/> : null}

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