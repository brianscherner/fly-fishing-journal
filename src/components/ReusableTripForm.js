import React, { useState } from "react";
import PropTypes from "prop-types";

function ReusableTripForm(props) {
  const [tripType, setTripType] = useState('');

  // shared props for both trip types //

  const destination = <input type="text" name="destination" placeholder="Destination" required/>

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

  const country = <input type="text" name="country" placeholder="Country" required/>

  const species = <input type="text" name="species" placeholder="Fish Species" required/>

  const season =
  <select name="season">
    <option value="" disabled selected>Season</option>
    <option value="winter">Winter</option>
    <option value="spring">Spring</option>
    <option value="summer">Summer</option>
    <option value="fall">Fall</option>
  </select>

  const licenses = <input type="text" name="licenses" placeholder="Licenses" required/>

  // past trip props //

  const timeOfDay = <input type="text" name="timeOfDay" placeholder="Time of Day" required/>

  const fliesUsed = <input type="text" name="fliesUsed" placeholder="Flies Used" required/>

  const fishCaught = <input type="text" name="fishCaught" placeholder="Fish Caught" required/>

  const fishingTackleUsed = <input type="text" name="fishingTackleUsed" placeholder="Fishing Tackle Used" required/>

  const riverFlowLevels = <input type="text" name="riverFlowLevels" placeholder="River Flow Levels (cfs/ft)"/>

  const travelTime = <input type="text"
  name="travelTime" placeholder="Travel Time"/>

  const waterBodyType =
  <select name="waterBodyType">
    <option value="" disabled selected>Water Body Type</option>
    <option value="river">River</option>
    <option value="lake">Lake</option>
    <option value="ocean">Ocean</option>
    <option value="mix">Mix</option>
  </select>

  const state = <input type="text" name="state" placeholder="State"/>

  const county = <input type="text" name="county" placeholder="County"/>

  const access = <input type="text" name="access" placeholder="Access (ex: car, boat, etc)"/>

  const fishingMethod = <input type="text" name="fishingMethod" placeholder="Fishing Method (wade, raft, etc)"/>

  const waterFees =
  <select name="waterFees">
    <option value="" disabled selected>Water Fees</option>
    <option value="private">Private</option>
    <option value="public">Public</option>
  </select>

  // future trip props //

  const climate = <input type="text" name="climate" placeholder="Climate" required/>

  const guidedOrNot =
  <select name="guidedOrNot">
    <option value="" disabled selected>Guided?</option>
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>

  const travelCosts = <input type="text" name="travelCosts" placeholder="Travel Costs"/>

  const travelDocs =
  <select name="travelDocs">
    <option value="" disabled selected>Travel Documents</option>
    <option value="passport">Passport</option>
    <option value="visa">Visa</option>
  </select>

  const tripExpenses = <input type="text" name="tripExpenses" placeholder="Trip Expenses"/>

  const depositTerms = <input type="text" name="depositTerms" placeholder="Deposit Terms"/>

  const cancellationPolicy = <input type="text" name="cancellationPolicy" placeholder="Cancellation Policy"/>

  const clothingRequirements = <input type="text" name="clothingRequirements" placeholder="Clothing Requirements"/>

  const gearRequirements = <input type="text" name="gearRequirements" placeholder="Fishing Gear Requirements"/>

  const flyRequirements = <input type="text" name="flyRequirements" placeholder="Fly Requirements"/>

  const baggageLuggage = <input type="text"
  name="baggageLuggage" placeholder="Baggage/Luggage Policy"/>

  const tripInsurance = <input type="text"
  name="tripInsurance" placeholder="Trip Insurance"/>

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <select defaultValue="" name="tripType" onChange={(event) => setTripType(event.target.value)}>
          <option value="" disabled selected>Trip Type</option>
          <option value="Past">Past</option>
          <option value="Future">Future</option>
        </select>
        <React.Fragment>
          <br/>
          {destinationType}
          <br/>
          {waterType}
          <br/>
          {season}
          <br/>
          {waterBodyType}
          <br/>
          {destination}
          <br/>
          {country}
          <br/>
          {access}
          <br/>
          {species}
          <br/>
          {licenses}
          <br/>
        </React.Fragment>
        {tripType === "Past" && (
          <React.Fragment>
            {waterFees}
            <br/>
            {state}
            <br/>
            {county}
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
          </React.Fragment>
        )}
        {tripType === "Future" && (
          <React.Fragment>
            {climate}
            <br/>
            {guidedOrNot}
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
          </React.Fragment>
        )}
        <button type="submit">{props.buttonText}</button>
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