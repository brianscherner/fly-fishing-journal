import React, { useState } from "react";
import PropTypes from "prop-types";

function ReusableTripForm(props) {
  const [tripType, setTripType] = useState('');

  // both types of fishing trips still need several more shared props //
  // might be a good idea to have shared props as their own component and import to this component //
  const destination = <input type="text" name="destination" placeholder="Destination" required/>

  const destinationType =
  <select>
    <option value="domestic">Domestic</option>
    <option value="international">International</option>
  </select>

  const waterType =
  <select>
    <option value="freshwater">Freshwater</option>
    <option value="saltwater">Saltwater</option>
  </select>

  const country = <input type="text" name="country" placeholder="Country" required/>

  const species = <input type="text" name="species" placeholder="Fish Species" required/>

  const season =
  <select>
    <option value="winter">Winter</option>
    <option value="spring">Spring</option>
    <option value="summer">Summer</option>
    <option value="fall">Fall</option>
  </select>

  const timeOfDay = <input type="text" name="timeOfDay" placeholder="Time of Day" required/>

  const licenses = <input type="text" name="licenses" placeholder="Licenses" required/>

  const climate = <input type="text" name="climate" placeholder="Climate" required/>

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <select defaultValue="" name="tripType" onChange={(event) => setTripType(event.target.value)}>
          <option hidden value="">Trip Type</option>
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