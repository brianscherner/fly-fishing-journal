import React, { useState } from "react";
import PropTypes from "prop-types";
import DestinationInfo from "../tables/DestinationInfo";
import TripCosts from '../tables/TripCosts';
import GearRequirements from '../tables/GearRequirements';
import Miscellaneous from '../tables/Miscellaneous';
import TripNotes from '../tables/TripNotes';

function TripDetails(props) {
  const [destinationInfo, setDestinationInfo] = useState(false);
  const [tripCosts, setTripCosts] = useState(false);
  const [gearRequirements, setGearRequirements] = useState(false);
  const [miscellaneous, setMiscellaneous] = useState(false);
  const [tripNotes, setTripNotes] = useState(false);

  const handleShowingTripDetails = (selectedDetails) => {
    setDestinationInfo(selectedDetails === "destinationInfo" ? true : false);
    setTripCosts(selectedDetails === "tripCosts" ? true : false);
    setGearRequirements(selectedDetails === "gearRequirements" ? true : false);
    setMiscellaneous(selectedDetails === "miscellaneous" ? true : false);
    setTripNotes(selectedDetails === "tripNotes" ? true : false);
  }

  const { trip, onClickingDelete, onClickingEdit } = props;

  return (
    <div className="trip-details">
      <h3>Trip Details</h3>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#" onClick={() => handleShowingTripDetails("destinationInfo")}>Destination Info</a>
          {destinationInfo === true && (
            <DestinationInfo trip={trip}/>
          )}
        </li>

        {trip.tripType === "Future" && (
          <React.Fragment>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleShowingTripDetails("tripCosts")}>Trip Costs</a>
              {tripCosts === true && (
                <TripCosts trip={trip}/>
              )}
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleShowingTripDetails("gearRequirements")}>Gear Requirements</a>
              {gearRequirements === true && (
                <GearRequirements trip={trip}/>
              )}
            </li>
          </React.Fragment>
        )}

        {trip.tripType === "Past" && (
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => handleShowingTripDetails("tripNotes")}>Trip Notes</a>
            {tripNotes === true && (
              <TripNotes trip={trip}/>
            )}
          </li>
        )}

        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleShowingTripDetails("miscellaneous")}>Miscellaneous</a>
          {miscellaneous === true && (
            <Miscellaneous trip={trip}/>
          )}
        </li>
      </ul>

      <button onClick={() => onClickingEdit(trip.id)}>Edit</button>
      <br/>
      <button onClick={() => onClickingDelete(trip.id)}>Delete</button>
      <hr/>
    </div>
  );
}

TripDetails.propTypes = {
  trip: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default TripDetails;