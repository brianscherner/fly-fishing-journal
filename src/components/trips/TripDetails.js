import React, { useState } from "react";
import PropTypes from "prop-types";
import DestinationInfo from "../tables/DestinationInfo";
import TripCosts from '../tables/TripCosts';
import GearRequirements from '../tables/GearRequirements';
import Miscellaneous from '../tables/Miscellaneous';
import TripNotes from '../tables/TripNotes';

function TripDetails(props) {
  const [destInfoToggled, setDestInfoToggled] = useState(true);
  const [tripCostsToggled, setTripCostsToggled] = useState(false);
  const [gearRequirementsToggled, setGearRequirementsToggled] = useState(false);
  const [miscellaneousToggled, setMiscellaneousToggled] = useState(false);
  const [tripNotesToggled, setTripNotesToggled] = useState(false);

  const toggleDestInfo = () => {
    setDestInfoToggled(!destInfoToggled);
  }

  const toggleTripCosts = () => {
    setTripCostsToggled(!tripCostsToggled);
  }

  const toggleGearRequirements = () => {
    setGearRequirementsToggled(!gearRequirementsToggled);
  }

  const toggleMiscellaneous = () => {
    setMiscellaneousToggled(!miscellaneousToggled);
  }

  const toggleTripNotes = () => {
    setTripNotesToggled(!tripNotesToggled);
  }

  const { trip, onClickingDelete, onClickingEdit, onMarkingTripAsPast } = props;

  return (
    <div className="trip-details">
      <h3 className="trip-details-header">Trip Details</h3>
      <div className="detail-categories">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className='nav-link details' href="#" onClick={() => toggleDestInfo()}>Destination Info</a>
            <br/>
            {destInfoToggled && (
              <DestinationInfo trip={trip}/>
            )}
          </li>

          {trip.tripType === "Future" && (
            <React.Fragment>
              <li className="nav-item">
                <a className='nav-link details' href="#" onClick={() => toggleTripCosts()}>Trip Costs</a>
                <br/>
                {tripCostsToggled && (
                  <TripCosts trip={trip}/>
                )}
              </li>

              <li className="nav-item">
                <a className='nav-link details' href="#" onClick={() => toggleGearRequirements()}>Gear Requirements</a>
                <br/>
                {gearRequirementsToggled && (
                  <GearRequirements trip={trip}/>
                )}
              </li>
            </React.Fragment>
          )}

          {trip.tripType === "Past" && (
            <li className="nav-item">
              <a className='nav-link details' href="#" onClick={() => toggleTripNotes()}>Trip Notes</a>
              <br/>
              {tripNotesToggled && (
                <TripNotes trip={trip}/>
              )}
            </li>
          )}

          <li className="nav-item">
            <a className='nav-link details' href="#" onClick={() => toggleMiscellaneous()}>Miscellaneous</a>
            <br/>
            {miscellaneousToggled && (
              <Miscellaneous trip={trip}/>
            )}
          </li>
        </ul>
      </div>

      <button className="btn app-buttons" onClick={() => onClickingEdit(trip.id)}>Edit</button>
      <button className="btn back-button" onClick={() => onClickingDelete(trip.id)}>Delete</button>
      <br/>
      <br/>
      {trip.tripType === "Future" && (
        <button className="btn app-buttons" onClick={() => onMarkingTripAsPast(trip.id)}>Mark Trip as Past</button>
      )}
    </div>
  );
}

TripDetails.propTypes = {
  trip: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onMarkingTripAsPast: PropTypes.func
}

export default TripDetails;