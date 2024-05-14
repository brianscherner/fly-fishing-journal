import React, { useState } from "react";
import PropTypes from "prop-types";
import DestinationInfoFields from "./DestinationInfoFields";
import GearRequirementsFields from "./GearRequirementsFields";
import MiscellaneousFields from "./MiscellaneousFields";

function ReusableTripForm(props) {
  const { trip } = props;
  const [tripType, setTripType] = useState('');

  const fliesUsed = <input type="text" name="fliesUsed" placeholder="Flies Used" defaultValue={props.trip !== undefined ? props.trip.fliesUsed : ''} required/>

  const fishCaught = <input type="text" name="fishCaught" placeholder="Fish Caught" defaultValue={props.trip !== undefined ? props.trip.fishCaught : ''} required/>

  const fishingTackleUsed = <input type="text" name="fishingTackleUsed" placeholder="Fishing Tackle Used" defaultValue={props.trip !== undefined ? props.trip.fishingTackleUsed : ''} required/>

  const riverFlowLevels = <input type="text" name="riverFlowLevels" placeholder="River Flow Levels (cfs/ft)" defaultValue={props.trip !== undefined ? props.trip.riverFlowLevels : ''}/>

  const fishingMethod = <input type="text" name="fishingMethod" placeholder="Fishing Method (wade, raft, etc)" defaultValue={props.trip !== undefined ? props.trip.fishingMethod : ''}/>

  const climate = <input type="text" name="climate" placeholder="Climate" defaultValue={props.trip !== undefined ? props.trip.climate : ''} required/>

  const travelCosts = <input type="text" name="travelCosts" placeholder="Travel Costs" defaultValue={props.trip !== undefined ? props.trip.travelCosts : ''}/>

  const travelDocs =
  <select name="travelDocs">
    <option value="" disabled selected>Travel Documents</option>
    <option value="passport">Passport</option>
    <option value="visa">Visa</option>
  </select>

  const tripExpenses = <input type="text" name="tripExpenses" placeholder="Trip Expenses" defaultValue={props.trip !== undefined ? props.trip.tripExpenses : ''}/>

  const depositTerms = <input type="text" name="depositTerms" placeholder="Deposit Terms" defaultValue={props.trip !== undefined ? props.trip.depositTerms : ''}/>

  const cancellationPolicy = <input type="text" name="cancellationPolicy" placeholder="Cancellation Policy" defaultValue={props.trip !== undefined ? props.trip.cancellationPolicy : ''}/>

  const baggageLuggage = <input type="text"
  name="baggageLuggage" placeholder="Baggage/Luggage Policy" defaultValue={props.trip !== undefined ? props.trip.baggageLuggage : ''}/>

  const tripInsurance = <input type="text"
  name="tripInsurance" placeholder="Trip Insurance" defaultValue={props.trip !== undefined ? props.trip.tripInsurance : ''}/>

  const evacInsurance = <input type="text" name="evacInsurance" placeholder="Medical Evacuation Insurance" defaultValue={props.trip !== undefined ? props.trip.evacInsurance : ''}/>

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
          <React.Fragment>
            <DestinationInfoFields trip={trip} tripType={tripType}/>
          </React.Fragment>
        )}

        {tripType === "Future" && (
          <GearRequirementsFields trip={trip} tripType={tripType}/>
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