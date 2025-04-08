import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotesIcon from '@mui/icons-material/Notes';

function TripNotes(props) {
  const { trip, onTogglingTripNotes, tripNotesToggled } = props;

  return (
    <React.Fragment>
      <div className="trip-card" id="trip-notes-card" onClick={onTogglingTripNotes}>
        <h4 className="category-header"><NotesIcon/> Trip Notes {tripNotesToggled ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}</h4>
        {tripNotesToggled && (
          <>
            <br/>
            <div className="trip-notes-container">
              <div className="trip-notes-details">
                <div className="trip-notes-data">
                  <h5>Fishing Method</h5>
                  <p>{trip.fishingMethod ? trip.fishingMethod : "N/A"}</p>
                </div>
                <div className="trip-notes-data">
                  <h5>Flies Used</h5>
                  <p>{trip.fliesUsed ? trip.fliesUsed : "N/A"}</p>
                </div>
                <div className="trip-notes-data">
                  <h5>Fish Caught</h5>
                  <p>{trip.fishCaught ? trip.fishCaught : "N/A"}</p>
                </div>
                <div className="trip-notes-data">
                  <h5>Fishing Tackle Used</h5>
                  <p>{trip.fishingTackleUsed ? trip.fishingTackleUsed : "N/A"}</p>
                </div>
                <div className="trip-notes-data">
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

export default TripNotes;