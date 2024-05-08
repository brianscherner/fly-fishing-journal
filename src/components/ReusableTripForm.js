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

  const riverFlowLevels = <input type="text" name="riverFlowLevels" placeholder="River Flow Levels (cfs or feet)"/>

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

  // future trip props //

  const climate = <input type="text" name="climate" placeholder="Climate" required/>

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
          {species}
          <br/>
          {licenses}
          <br/>
        </React.Fragment>
        {tripType === "Past" && (
          <React.Fragment>
            {timeOfDay}
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