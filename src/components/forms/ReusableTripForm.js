import React, { useState } from "react";
import PropTypes from "prop-types";
import DestinationInfoFields from "./DestinationInfoFields";
import GearRequirementsFields from "./GearRequirementsFields";
import MiscellaneousFields from "./MiscellaneousFields";
import TripCostsFields from "./TripCostsFields";

function ReusableTripForm(props) {
  const { trip } = props;
  const [tripType, setTripType] = useState('');

  const fliesUsed = <input type="text" name="fliesUsed" placeholder="Flies Used" defaultValue={props.trip !== undefined ? props.trip.fliesUsed : ''} required/>

  const fishCaught = <input type="text" name="fishCaught" placeholder="Fish Caught" defaultValue={props.trip !== undefined ? props.trip.fishCaught : ''} required/>

  const fishingTackleUsed = <input type="text" name="fishingTackleUsed" placeholder="Fishing Tackle Used" defaultValue={props.trip !== undefined ? props.trip.fishingTackleUsed : ''} required/>

  const riverFlowLevels = <input type="text" name="riverFlowLevels" placeholder="River Flow Levels (cfs/ft)" defaultValue={props.trip !== undefined ? props.trip.riverFlowLevels : ''}/>

  const fishingMethod = <input type="text" name="fishingMethod" placeholder="Fishing Method (wade, raft, etc)" defaultValue={props.trip !== undefined ? props.trip.fishingMethod : ''}/>

  const climate = <input type="text" name="climate" placeholder="Climate" defaultValue={props.trip !== undefined ? props.trip.climate : ''} required/>

  // button which renders when a trip type is selected //

  const createButton = <button type="submit">{props.buttonText}</button>

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <select defaultValue="" name="tripType" onChange={(event) => setTripType(event.target.value)}>
          <option value="" disabled selected>Trip Type</option>
          <option value="Past">Past</option>
          <option value="Future">Future</option>
        </select>
        <br/>
        {tripType && (
          <DestinationInfoFields trip={trip} tripType={tripType}/>
        )}

        {tripType === "Future" && (
          <React.Fragment>
            <TripCostsFields/>
            <GearRequirementsFields/>
          </React.Fragment>
        )}

        {tripType && (
          <MiscellaneousFields trip={trip} tripType={tripType}/>
        )}
      </form>
      <br/>
    </React.Fragment>
  )
}

ReusableTripForm.propTypes = {
  trip: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
}

export default ReusableTripForm;