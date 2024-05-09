import React, { useState } from "react";
import PropTypes from "prop-types";

function ReusableTripForm(props) {
  const [tripType, setTripType] = useState('');

  // shared props for both trip types //

  const destination = <input type="text" name="destination" placeholder="Destination" defaultValue={props.trip !== undefined ? props.trip.destination : ''} required/>

  const destinationType =
  <select name="destinationType">
    <option value="" disabled selected>Destination Type</option>
    <option value="domestic">Domestic</option>
    <option value="international">International</option>
  </select>

  const waterType =
  <select name="waterType">
    <option value="" disabled selected>Water Type</option>
    <option value="freshwater">Freshwater</option>
    <option value="saltwater">Saltwater</option>
  </select>

  const country = <input type="text" name="country" placeholder="Country" defaultValue={props.trip !== undefined ? props.trip.country : ''} required/>

  const species = <input type="text" name="species" placeholder="Fish Species" defaultValue={props.trip !== undefined ? props.trip.species : ''} required/>

  const season =
  <select name="season">
    <option value="" disabled selected>Season</option>
    <option value="winter">Winter</option>
    <option value="spring">Spring</option>
    <option value="summer">Summer</option>
    <option value="fall">Fall</option>
  </select>

  const licenses = <input type="text" name="licenses" placeholder="Licenses" defaultValue={props.trip !== undefined ? props.trip.licenses : ''} required/>

  // past trip props //

  const timeOfDay = <input type="text" name="timeOfDay" placeholder="Time of Day" defaultValue={props.trip !== undefined ? props.trip.timeOfDay : ''} required/>

  const fliesUsed = <input type="text" name="fliesUsed" placeholder="Flies Used" defaultValue={props.trip !== undefined ? props.trip.fliesUsed : ''} required/>

  const fishCaught = <input type="text" name="fishCaught" placeholder="Fish Caught" defaultValue={props.trip !== undefined ? props.trip.fishCaught : ''} required/>

  const fishingTackleUsed = <input type="text" name="fishingTackleUsed" placeholder="Fishing Tackle Used" defaultValue={props.trip !== undefined ? props.trip.fishingTackleUsed : ''} required/>

  const riverFlowLevels = <input type="text" name="riverFlowLevels" placeholder="River Flow Levels (cfs/ft)" defaultValue={props.trip !== undefined ? props.trip.riverFlowLevels : ''}/>

  const travelTime = <input type="text"
  name="travelTime" placeholder="Travel Time" defaultValue={props.trip !== undefined ? props.trip.travelTime : ''}/>

  const waterBodyType =
  <select name="waterBodyType">
    <option value="" disabled selected>Water Body Type</option>
    <option value="river">River</option>
    <option value="lake">Lake</option>
    <option value="ocean">Ocean</option>
    <option value="mix">Mix</option>
  </select>

  const state = <input type="text" name="state" placeholder="State" defaultValue={props.trip !== undefined ? props.trip.state : ''}/>

  const county = <input type="text" name="county" placeholder="County" defaultValue={props.trip !== undefined ? props.trip.county : ''}/>

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

  const clothingRequirements = <input type="text" name="clothingRequirements" placeholder="Clothing Requirements" defaultValue={props.trip !== undefined ? props.trip.clothingRequirements : ''}/>

  const gearRequirements = <input type="text" name="gearRequirements" placeholder="Fishing Gear Requirements" defaultValue={props.trip !== undefined ? props.trip.gearRequirements : ''}/>

  const flyRequirements = <input type="text" name="flyRequirements" placeholder="Fly Requirements" defaultValue={props.trip !== undefined ? props.trip.flyRequirements : ''}/>

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
        {tripType === "Past" && (
          <React.Fragment>
            {destination}
            <br/>
            {destinationType}
            <br/>
            {season}
            <br/>
            {waterType}
            <br/>
            {waterBodyType}
            <br/>
            {waterFees}
            <br/>
            {species}
            <br/>
            {state}
            <br/>
            {county}
            <br/>
            {country}
            <br/>
            {access}
            <br/>
            {licenses}
            <br/>
            {timeOfDay}
            <br/>
            {fishingMethod}
            <br/>
            {fliesUsed}
            <br/>
            {fishCaught}
            <br/>
            {fishingTackleUsed}
            <br/>
            {riverFlowLevels}
            <br/>
            {travelTime}
            <br/>
            {createButton}
          </React.Fragment>
        )}
        {tripType === "Future" && (
          <React.Fragment>
            {destination}
            <br/>
            {destinationType}
            <br/>
            {season}
            <br/>
            {waterType}
            <br/>
            {waterBodyType}
            <br/>
            {species}
            <br/>
            {country}
            <br/>
            {climate}
            <br/>
            {guidedOrNot}
            <br/>
            {licenses}
            <br/>
            {travelDocs}
            <br/>
            {travelCosts}
            <br/>
            {tripExpenses}
            <br/>
            {depositTerms}
            <br/>
            {cancellationPolicy}
            <br/>
            {clothingRequirements}
            <br/>
            {gearRequirements}
            <br/>
            {flyRequirements}
            <br/>
            {baggageLuggage}
            <br/>
            {tripInsurance}
            <br/>
            {evacInsurance}
            <br/>
            {communications}
            <br/>
            {gratuity}
            <br/>
            {createButton}
          </React.Fragment>
        )}
      </form>
      <br/>
    </React.Fragment>
  )
}

ReusableTripForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
}

export default ReusableTripForm;