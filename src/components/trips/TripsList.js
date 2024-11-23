import React, { useEffect, useState } from "react";
import Trip from './Trip';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function TripsList(props) {
  const { tripsList } = props;
  const [filteredTripsList, setFilteredTripsList] = useState(tripsList);
  const [filter, setFilter] = useState("");
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
  }

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        {/* can adjust width for greater responsiveness later */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
          {isListEmpty && (
            <p className="empty-trip-list-msg">No trips exist.</p>
          )}

          {!isListEmpty && (
            <React.Fragment>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Trip Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="Trip Type"
                    onChange={handleFilterSelection}
                  >
                    <MenuItem value={"Past"}>Past</MenuItem>
                    <MenuItem value={"Future"}>Future</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            <br/>
            {/* {isFilteredListEmpty && (
              <p className="empty-trip-list-msg">No trips exist.</p>
            )} */}
            </React.Fragment>
          )}
        </div>
      </div>
      {isFilteredListEmpty && (
        <p className="empty-trip-list-msg">No trips exist.</p>
      )}
      {!isFilteredListEmpty && (
        <div className="row justify-content-center">
          <div className="col-8">
            {filteredTripsList.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
            .map((trip) =>
            <Trip
              whenTripClicked={props.onTripSelection}
              destination={trip.destination}
              startDate={trip.startDate}
              id={trip.id}
              key={trip.id}/>
            )}
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