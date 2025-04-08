import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhishingIcon from '@mui/icons-material/Phishing';

function GearRequirements(props) {
  const { trip, onTogglingGearRequirements, gearRequirementsToggled } = props;

  return (
    <React.Fragment>
      <div className="trip-card" id="gear-card" onClick={onTogglingGearRequirements}>
        <h4 className="category-header"><PhishingIcon/> Gear Requirements{gearRequirementsToggled ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}</h4>
        {gearRequirementsToggled && (
          <>
            <br/>
            <div className="gear-container">
              <div className="gear-details">
                <div className="gear-data">
                  <h5>Clothing</h5>
                  <p>{trip.clothingRequirements ? trip.clothingRequirements : "N/A"}</p>
                </div>
                <div className="gear-data">
                  <h5>Fishing Gear</h5>
                  <p>{trip.gearRequirements ? trip.gearRequirements : "N/A"}</p>
                </div>
                <div className="gear-data">
                  <h5>Flies</h5>
                  <p>{trip.flyRequirements ? trip.flyRequirements : "N/A"}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  )
}

export default GearRequirements;