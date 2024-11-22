import React, { useState } from "react";
import PropTypes from "prop-types";
import DestinationInfo from "../tables/DestinationInfo";
import TripCosts from '../tables/TripCosts';
import GearRequirements from '../tables/GearRequirements';
import Miscellaneous from '../tables/Miscellaneous';
import TripNotes from '../tables/TripNotes';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotesIcon from '@mui/icons-material/Notes';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PhishingIcon from '@mui/icons-material/Phishing';

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
      <div className="detail-categories">
        <ul className="nav flex-column">
          <li className="nav-item">
            {destInfoToggled && (
              <button className='nav-link details' onClick={() => toggleDestInfo()}><LocationOnIcon/>  Destination Info <ArrowDropUpIcon/></button>
            )}
            {!destInfoToggled && (
              <button className='nav-link details' onClick={() => toggleDestInfo()}><LocationOnIcon/> Destination Info <ArrowDropDownIcon/></button>
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
                  <button className='nav-link details' onClick={() => toggleTripCosts()}><AttachMoneyIcon/> Trip Costs <ArrowDropUpIcon/></button>
                )}
                {!tripCostsToggled && (
                  <button className='nav-link details' onClick={() => toggleTripCosts()}><AttachMoneyIcon/> Trip Costs <ArrowDropDownIcon/></button>
                )}
                <br/>
                {tripCostsToggled && (
                  <TripCosts trip={trip}/>
                )}
              </li>

              <li className="nav-item">
                {gearRequirementsToggled && (
                  <button className='nav-link details' onClick={() => toggleGearRequirements()}><PhishingIcon/> Gear Requirements <ArrowDropUpIcon/></button>
                )}
                {!gearRequirementsToggled && (
                  <button className='nav-link details' onClick={() => toggleGearRequirements()}><PhishingIcon/> Gear Requirements <ArrowDropDownIcon/></button>
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
                <button className='nav-link details' onClick={() => toggleTripNotes()}><NotesIcon/> Trip Notes<ArrowDropUpIcon/></button>
              )}
              {!tripNotesToggled && (
                <button className='nav-link details' onClick={() => toggleTripNotes()}><NotesIcon/> Trip Notes<ArrowDropDownIcon/></button>
              )}
              <br/>
              {tripNotesToggled && (
                <TripNotes trip={trip}/>
              )}
            </li>
          )}

          <li className="nav-item">
            {miscellaneousToggled && (
              <button className='nav-link details' onClick={() => toggleMiscellaneous()}><MiscellaneousServicesIcon/> Miscellaneous<ArrowDropUpIcon/></button>
            )}
            {!miscellaneousToggled && (
              <button className='nav-link details' onClick={() => toggleMiscellaneous()}><MiscellaneousServicesIcon/> Miscellaneous<ArrowDropDownIcon/></button>
            )}
            <br/>
            {miscellaneousToggled && (
              <Miscellaneous trip={trip}/>
            )}
          </li>
        </ul>
      </div>

      <div className="trip-details-buttons">
        <button className="btn app-buttons" onClick={() => onClickingEdit(trip.id)}>Edit <EditIcon/></button>
        {trip.tripType === "Future" && (
          <button className="btn app-buttons" onClick={() => onMarkingTripAsPast(trip.id)}>Mark as Past <CheckCircleIcon/></button>
        )}
        <button className="btn back-button" onClick={() => onClickingDelete(trip.id)}>Delete <DeleteIcon/></button>
      </div>
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