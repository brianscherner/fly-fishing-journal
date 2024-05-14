import React, { useState } from "react";
import PropTypes from "prop-types";
import DestinationInfoFields from "./DestinationInfoFields";
import GearRequirements from "./GearRequirementsFields";

function ReusableTripForm(props) {
  const { trip } = props;
  const [tripType, setTripType] = useState('');

  const licenses = <input type="text" name="licenses" placeholder="Licenses" defaultValue={props.trip !== undefined ? props.trip.licenses : ''} required/>

  // past trip props //

  const timeOfDay = <input type="text" name="timeOfDay" placeholder="Time of Day" defaultValue={props.trip !== undefined ? props.trip.timeOfDay : ''} required/>

  const fliesUsed = <input type="text" name="fliesUsed" placeholder="Flies Used" defaultValue={props.trip !== undefined ? props.trip.fliesUsed : ''} required/>

  const fishCaught = <input type="text" name="fishCaught" placeholder="Fish Caught" defaultValue={props.trip !== undefined ? props.trip.fishCaught : ''} required/>

  const fishingTackleUsed = <input type="text" name="fishingTackleUsed" placeholder="Fishing Tackle Used" defaultValue={props.trip !== undefined ? props.trip.fishingTackleUsed : ''} required/>

  const riverFlowLevels = <input type="text" name="riverFlowLevels" placeholder="River Flow Levels (cfs/ft)" defaultValue={props.trip !== undefined ? props.trip.riverFlowLevels : ''}/>

  const travelTime = <input type="text"
  name="travelTime" placeholder="Travel Time" defaultValue={props.trip !== undefined ? props.trip.travelTime : ''}/>

  const access = <input type="text" name="access" placeholder="Access (ex: car, boat, etc)" defaultValue={props.trip !== undefined ? props.trip.access : ''}/>

  const fishingMethod = <input type="text" name="fishingMethod" placeholder="Fishing Method (wade, raft, etc)" defaultValue={props.trip !== undefined ? props.trip.fishingMethod : ''}/>

  const waterFees =
  <select name="waterFees">
    <option value="" disabled selected>Water Fees</option>
    <option value="private">Private</option>
    <option value="public">Public</option>
  </select>

  // future trip props //

  const climate = <input type="text" name="climate" placeholder="Climate" defaultValue={props.trip !== undefined ? props.trip.climate : ''} required/>

  const guidedOrNot =
  <select name="guidedOrNot">
    <option value="" disabled selected>Guided?</option>
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>

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

  const communications = <input type="text" name="communications" placeholder="Cell and Wifi Service" defaultValue={props.trip !== undefined ? props.trip.communications : ''}/>

  const gratuity = <input type="text" name="gratuity" placeholder="Gratuity Guidelines" defaultValue={props.trip !== undefined ? props.trip.gratuity : ''}/>

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
          <GearRequirements trip={trip} tripType={tripType}/>
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