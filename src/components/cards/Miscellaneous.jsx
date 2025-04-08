import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

function Miscellaneous(props) {
  const { trip, onTogglingMiscellaneous, miscellaneousToggled } = props;

  return (
    <React.Fragment>
      <div className="trip-card" onClick={onTogglingMiscellaneous}>
        <h4 className="category-header"><MiscellaneousServicesIcon/> Additional Notes {miscellaneousToggled ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}</h4>
        {miscellaneousToggled && (
          <>
            <br/>
            <div className="misc-container">
              <div className="misc-details">
                <div className="misc-data">
                  <h5>Required Licenses</h5>
                  <p>{trip.requiredLicenses ? trip.requiredLicenses : "N/A"}</p>
                </div>
                <div className="misc-data">
                  <h5>Water Fees</h5>
                  <p>{trip.waterFees ? trip.waterFees : "N/A"}</p>
                </div>
                <div className="misc-data">
                  <h5>Access</h5>
                  <p>{trip.access ? trip.access : "N/A"}</p>
                </div>
                <div className="misc-data">
                  <h5>Time of Day</h5>
                  <p>{trip.timeOfDay ? trip.timeOfDay : "N/A"}</p>
                </div>
                <div className="misc-data">
                  <h5>Travel Time</h5>
                  <p>{trip.travelTime ? trip.travelTime : "N/A"}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  )
}

export default Miscellaneous;