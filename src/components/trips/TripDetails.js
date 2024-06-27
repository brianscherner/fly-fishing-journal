import React, { useState } from "react";
import PropTypes from "prop-types";
import DestinationInfo from "../tables/DestinationInfo";
import TripCosts from '../tables/TripCosts';
import GearRequirements from '../tables/GearRequirements';
import Miscellaneous from '../tables/Miscellaneous';
import TripNotes from '../tables/TripNotes';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

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
            {destInfoToggled && (
              <a className='nav-link details' href="#" onClick={() => toggleDestInfo()}>Destination Info <ArrowDropUpIcon/></a>
            )}
            {!destInfoToggled && (
              <a className='nav-link details' href="#" onClick={() => toggleDestInfo()}>Destination Info <ArrowDropDownIcon/></a>
            )}
            <br/>
            {destInfoToggled && (
              <DestinationInfo trip={trip}/>
            )}
          </li>

          {trip.tripType === "Future" && (
            <React.Fragment>
              <li className="nav-item">
                {tripCostsToggled && (
                  <a className='nav-link details' href="#" onClick={() => toggleTripCosts()}>Trip Costs <ArrowDropUpIcon/></a>
                )}
                {!tripCostsToggled && (
                  <a className='nav-link details' href="#" onClick={() => toggleTripCosts()}>Trip Costs <ArrowDropDownIcon/></a>
                )}
                <br/>
                {tripCostsToggled && (
                  <TripCosts trip={trip}/>
                )}
              </li>

              <li className="nav-item">
                {gearRequirementsToggled && (
                  <a className='nav-link details' href="#" onClick={() => toggleGearRequirements()}>Gear Requirements <ArrowDropUpIcon/></a>
                )}
                {!gearRequirementsToggled && (
                  <a className='nav-link details' href="#" onClick={() => toggleGearRequirements()}>Gear Requirements <ArrowDropDownIcon/></a>
                )}
                <br/>
                {gearRequirementsToggled && (
                  <GearRequirements trip={trip}/>
                )}
              </li>
            </React.Fragment>
          )}

          {trip.tripType === "Past" && (
            <li className="nav-item">
              {tripNotesToggled && (
                <a className='nav-link details' href="#" onClick={() => toggleTripNotes()}>Trip Notes<ArrowDropUpIcon/></a>
              )}
              {!tripNotesToggled && (
                <a className='nav-link details' href="#" onClick={() => toggleTripNotes()}>Trip Notes<ArrowDropDownIcon/></a>
              )}
              <br/>
              {tripNotesToggled && (
                <TripNotes trip={trip}/>
              )}
            </li>
          )}

          <li className="nav-item">
            {miscellaneousToggled && (
              <a className='nav-link details' href="#" onClick={() => toggleMiscellaneous()}>Miscellaneous<ArrowDropUpIcon/></a>
            )}
            {!miscellaneousToggled && (
              <a className='nav-link details' href="#" onClick={() => toggleMiscellaneous()}>Miscellaneous<ArrowDropDownIcon/></a>
            )}
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