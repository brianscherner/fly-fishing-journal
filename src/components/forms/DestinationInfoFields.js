import React from "react";
import PropTypes from "prop-types";

function DestinationInfoFields(props) {
  const { trip, tripType} = props;

  const destination = <input type="text" name="destination" placeholder="Destination" defaultValue={trip !== undefined ? trip.destination : ''} required/>

  const destinationType =
  <select name="destinationType" defaultValue={trip !== undefined ? trip.destinationType : ''}>
    <option value="" disabled selected>Destination Type</option>
    <option value="domestic">Domestic</option>
    <option value="international">International</option>
  </select>

  const waterType =
  <select name="waterType" defaultValue={trip !== undefined ? trip.waterType : ''}>
    <option value="" disabled selected>Water Type</option>
    <option value="freshwater">Freshwater</option>
    <option value="saltwater">Saltwater</option>
  </select>

  const waterBodyType =
  <select name="waterBodyType" defaultValue={trip !== undefined ? trip.waterBodyType : ''}>
    <option value="" disabled selected>Water Body Type</option>
    <option value="river">River</option>
    <option value="lake">Lake</option>
    <option value="ocean">Ocean</option>
    <option value="mix">Mix</option>
  </select>

  const species = <input type="text" name="species" placeholder="Fish Species" defaultValue={trip !== undefined ? trip.species : ''} required/>

  const season =
  <select name="season" defaultValue={trip !== undefined ? trip.season : ''}>
    <option value="" disabled selected>Season</option>
    <option value="winter">Winter</option>
    <option value="spring">Spring</option>
    <option value="summer">Summer</option>
    <option value="fall">Fall</option>
  </select>

  const state = <input type="text" name="state" placeholder="State" defaultValue={trip !== undefined ? trip.state : ''}/>

  const county = <input type="text" name="county" placeholder="County" defaultValue={trip !== undefined ? trip.county : ''}/>

  const country = <input type="text" name="country" placeholder="Country" defaultValue={trip !== undefined ? trip.country : ''} required/>

  const climate = <input type="text" name="climate" placeholder="Climate" defaultValue={trip !== undefined ? trip.climate : ''} required/>

  return (
    <React.Fragment>
      <h4>Destination Info</h4>
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
      {tripType === "Past" && (
        <React.Fragment>
          {state}
          <br/>
          {county}
          <br/>
        </React.Fragment>
      )}
      {country}
      <br/>
      {tripType === "Future" && (
        <React.Fragment>
          {climate}
          <br/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

DestinationInfoFields.propTypes = {
  trip: PropTypes.object,
  tripType: PropTypes.string
}

export default DestinationInfoFields;