import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function TripCosts(props) {
  const { trip, onTogglingTripCosts, tripCostsToggled } = props;

  return (
    <React.Fragment>
      <div className="trip-card" id="trip-costs-card" onClick={onTogglingTripCosts}>
        <h4 className="category-header"><AttachMoneyIcon/> Trip Costs {tripCostsToggled ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}</h4>
        {tripCostsToggled && (
          <>
            <br/>
            <div className="trip-costs-container">
              <div className="trip-costs-details">
                <div className="trip-costs-data">
                  <h5>Fishing Method</h5>
                  <p>{trip.fishingMethod ? trip.fishingMethod : "N/A"}</p>
                </div>
                <div className="trip-costs-data">
                  <h5>Flies Used</h5>
                  <p>{trip.fliesUsed ? trip.fliesUsed : "N/A"}</p>
                </div>
                <div className="trip-costs-data">
                  <h5>Fish Caught</h5>
                  <p>{trip.fishCaught ? trip.fishCaught : "N/A"}</p>
                </div>
                <div className="trip-costs-data">
                  <h5>Fishing Tackle Used</h5>
                  <p>{trip.fishingTackleUsed ? trip.fishingTackleUsed : "N/A"}</p>
                </div>
                <div className="trip-costs-data">
                  <h5>River Flow Levels</h5>
                  <p>{trip.riverFlowLevels ? trip.riverFlowLevels : "N/A"}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  )
}

export default TripCosts;