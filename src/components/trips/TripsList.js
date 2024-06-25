import React, { useEffect, useState } from "react";
import Trip from './Trip';
import PropTypes from 'prop-types';

function TripsList(props) {
  const { tripsList } = props;
  const [filteredTripsList, setFilteredTripsList] = useState(tripsList);
  const [filter, setFilter] = useState("");
  const [isListEmpty, setIsListEmpty] = useState(false);

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
    } else if (filterSelection === "Future") {
      const filteredFutureTripsList = tripsList.filter(trip => trip.tripType === "Future");
      setFilteredTripsList(filteredFutureTripsList);
    }
  }

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <div className="col-6">
          {isListEmpty && (
            <p className="empty-trip-list-msg">No trips exist.</p>
          )}

          {!isListEmpty && (
            <React.Fragment>
              <select defaultValue={filter} className="form-select" onChange={handleFilterSelection}>
            <option value="" disabled>Filter By Type</option>
            <option value="Past">Past</option>
            <option value="Future">Future</option>
            </select>
            <br/>
            {filteredTripsList.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
            .map((trip) =>
            <Trip
              whenTripClicked={props.onTripSelection}
              destination={trip.destination}
              startDate={trip.startDate}
              id={trip.id}
              key={trip.id}/>
            )}
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

TripsList.propTypes = {
  tripsList: PropTypes.array,
  onTripSelection: PropTypes.func,
  filterByTripType: PropTypes.func,
}

export default TripsList;