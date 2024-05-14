import React, { useState } from "react";
import PropTypes from "prop-types";
import DestinationInfo from "../tables/DestinationInfo";
import TripCosts from '../tables/TripCosts';
import GearRequirements from '../tables/GearRequirements';

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
              <div className='table-container'>
                <div className='row justify-content-center'>
                  <div className='col-4'>
                    <table className='table'>
                      <tr className="trip-notes-table">
                        <th>Fishing Method</th>
                        <td>{trip.fishingMethod}</td>
                      </tr>
                      <tr className="trip-notes-table">
                        <th>Flies Used</th>
                        <td>{trip.fliesUsed}</td>
                      </tr>
                      <tr className="trip-notes-table">
                        <th>Fish Caught</th>
                        <td>{trip.fishCaught}</td>
                      </tr>
                      <tr className="trip-notes-table">
                        <th>Fishing Tackle Used</th>
                        <td>{trip.fishingTackleUsed}</td>
                      </tr>
                      <tr className="trip-notes-table">
                        <th>River Flow Levels</th>
                        <td>{trip.riverFlowLevels}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </li>
        )}

        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleShowingTripDetails("miscellaneous")}>Miscellaneous</a>
          {miscellaneous === true && (
            <div className='table-container'>
              <div className='row justify-content-center'>
                <div className='col-4'>
                  <table className='table'>
                    <tr className="misc-details">
                      <th>Required Licenses</th>
                      <td>{trip.licenses}</td>
                    </tr>
                    <tr className="misc-details">
                      <th>Water Fees</th>
                      <td>{trip.waterFees}</td>
                    </tr>
                    <tr className="misc-details">
                      <th>Access</th>
                      <td>{trip.access}</td>
                    </tr>
                    <tr className="misc-details">
                      <th>Time of Day</th>
                      <td>{trip.timeOfDay}</td>
                    </tr>
                    <tr className="misc-details">
                      <th>Travel Time</th>
                      <td>{trip.travelTime}</td>
                    </tr>

                    {trip.tripType === "Future" && (
                      <React.Fragment>
                        <tr className="misc-details">
                          <th>Guided?</th>
                          <td>{trip.guidedOrNot}</td>
                        </tr>
                        <tr className="misc-details">
                          <th>Cell and Wifi Service</th>
                          <td>{trip.communications}</td>
                        </tr>
                        <tr className="misc-details">
                          <th>Gratuity Guidelines</th>
                          <td>{trip.gratuity}</td>
                        </tr>
                      </React.Fragment>
                    )}
                  </table>
                </div>
              </div>
            </div>
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