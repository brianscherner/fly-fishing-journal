import React, { useState } from "react";
import PropTypes from "prop-types";
import DestinationInfo from "../tables/DestinationInfo";
import TripCosts from '../tables/TripCosts';
import GearRequirements from '../tables/GearRequirements';
import Miscellaneous from '../tables/Miscellaneous';
import TripNotes from '../tables/TripNotes';

function TripDetails(props) {
  const [destinationInfo, setDestinationInfo] = useState(true);
  const [tripCosts, setTripCosts] = useState(false);
  const [gearRequirements, setGearRequirements] = useState(false);
  const [miscellaneous, setMiscellaneous] = useState(false);
  const [tripNotes, setTripNotes] = useState(false);
  const [isLinkSelected, setIsLinkSelected] = useState('destinationInfo');

  const handleShowingTripDetails = (selectedDetails) => {
    setDestinationInfo(selectedDetails === "destinationInfo" ? true : false);
    setTripCosts(selectedDetails === "tripCosts" ? true : false);
    setGearRequirements(selectedDetails === "gearRequirements" ? true : false);
    setMiscellaneous(selectedDetails === "miscellaneous" ? true : false);
    setTripNotes(selectedDetails === "tripNotes" ? true : false);
    setIsLinkSelected(selectedDetails);
  }

  const { trip, onClickingDelete, onClickingEdit } = props;

  return (
    <div className="trip-details">
      <h3>Trip Details</h3>
      <br/>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className={`nav-link ${isLinkSelected === "destinationInfo" ? "active" : "".toString()}`} href="#" onClick={() => handleShowingTripDetails("destinationInfo")}>Destination Info</a>
          <br/>
          {destinationInfo === true && (
            <DestinationInfo trip={trip}/>
          )}
        </li>

        {trip.tripType === "Future" && (
          <React.Fragment>
            <li className="nav-item">
              <a className={`nav-link ${isLinkSelected === "tripCosts" ? "active" : ""}`} href="#" onClick={() => handleShowingTripDetails("tripCosts")}>Trip Costs</a>
              <br/>
              {tripCosts === true && (
                <TripCosts trip={trip}/>
              )}
            </li>

            <li className="nav-item">
              <a className={`nav-link ${isLinkSelected === "gearRequirements" ? "active" : ""}`} href="#" onClick={() => handleShowingTripDetails("gearRequirements")}>Gear Requirements</a>
              <br/>
              {gearRequirements === true && (
                <GearRequirements trip={trip}/>
              )}
            </li>
          </React.Fragment>
        )}

        {trip.tripType === "Past" && (
          <li className="nav-item">
            <a className={`nav-link ${isLinkSelected === "tripNotes" ? "active" : ""}`} href="#" onClick={() => handleShowingTripDetails("tripNotes")}>Trip Notes</a>
            <br/>
            {tripNotes === true && (
              <TripNotes trip={trip}/>
            )}
          </li>
        )}

        <li className="nav-item">
          <a className={`nav-link ${isLinkSelected === "miscellaneous" ? "active" : ""}`} href="#" onClick={() => handleShowingTripDetails("miscellaneous")}>Miscellaneous</a>
          <br/>
          {miscellaneous === true && (
            <Miscellaneous trip={trip}/>
          )}
        </li>
      </ul>

      <button className="btn btn-success" onClick={() => onClickingEdit(trip.id)}>Edit</button>
      <button className="btn btn-danger" onClick={() => onClickingDelete(trip.id)}>Delete</button>
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