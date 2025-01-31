import React, { useEffect, useState } from "react";
import Trip from './Trip';
import PropTypes from 'prop-types';

function TripsList(props) {
  const { tripsList } = props;
  const [filteredTripsList, setFilteredTripsList] = useState(tripsList);
  const [filter, setFilter] = useState("All");
  const [isListEmpty, setIsListEmpty] = useState(false);
  const [isFilteredListEmpty, setIsFilteredListEmpty] = useState(false);

  useEffect(() => {
    setFilteredTripsList(tripsList);
    if (tripsList.length === 0) {
      setIsListEmpty(true);
    } else {
      setIsListEmpty(false);
    }
  }, [tripsList]);

  const handleFilterSelection = (event) => {
    const filterSelection = event.target.value;
    setFilter(filterSelection);

    if (filterSelection === "Past") {
      const filteredPastTripsList = tripsList.filter(trip => trip.tripType === "Past");
      setFilteredTripsList(filteredPastTripsList);
      if (filteredPastTripsList.length === 0) {
        setIsFilteredListEmpty(true);
      } else {
        setIsFilteredListEmpty(false);
      }
    } else if (filterSelection === "Future") {
      const filteredFutureTripsList = tripsList.filter(trip => trip.tripType === "Future");
      setFilteredTripsList(filteredFutureTripsList);
      if (filteredFutureTripsList.length === 0) {
        setIsFilteredListEmpty(true);
      } else {
        setIsFilteredListEmpty(false);
      }
    }

    if (filterSelection === "All") {
      setFilteredTripsList(tripsList);
    }

  }

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        {isListEmpty && (
          <p className="empty-trip-list-msg">Add your first trip to get started!</p>
        )}
        {/* can adjust width for greater responsiveness later */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
          {!isListEmpty && (
            <React.Fragment>
              <label style={{ justifyContent: "center" }}>Filter Trips</label>
              <select
                defaultValue={filter}
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
      {isFilteredListEmpty && (
        <p className="empty-trip-list-msg">No trips were found. Add a trip to get started!</p>
      )}
      {!isFilteredListEmpty && (
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

TripsList.propTypes = {
  tripsList: PropTypes.array,
  onTripSelection: PropTypes.func,
  filterByTripType: PropTypes.func,
}

export default TripsList;