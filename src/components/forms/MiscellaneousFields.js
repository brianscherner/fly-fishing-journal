import React from "react";
import PropTypes from "prop-types";

function MiscellaneousFields(props) {
  const { trip, tripType } = props;

  const communications = <input type="text" name="communications" placeholder="Cell and Wifi Service" defaultValue={trip !== undefined ? trip.communications : ''}/>

  const gratuity = <input type="text" name="gratuity" placeholder="Gratuity Guidelines" defaultValue={trip !== undefined ? trip.gratuity : ''}/>

  const guidedOrNot =
  <select name="guidedOrNot" defaultValue={trip !== undefined ? trip.guidedOrNot : ''}>
    <option value="" disabled selected>Guided?</option>
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>

  const waterFees =
  <select name="waterFees" defaultValue={trip !== undefined ? trip.waterFees : ''}>
    <option value="" disabled selected>Water Fees</option>
    <option value="private">Private</option>
    <option value="public">Public</option>
  </select>

  const access = <input type="text" name="access" placeholder="Access (ex: car, boat, etc)" defaultValue={trip !== undefined ? trip.access : ''}/>

  const travelTime = <input type="text"
  name="travelTime" placeholder="Travel Time" defaultValue={trip !== undefined ? trip.travelTime : ''}/>

  const timeOfDay = <input type="text" name="timeOfDay" placeholder="Time of Day" defaultValue={trip !== undefined ? trip.timeOfDay : ''}/>

  const licenses = <input type="text" name="licenses" placeholder="Licenses" defaultValue={trip !== undefined ? trip.licenses : ''}/>

  return (
    <React.Fragment>
      <h4>Miscellaneous</h4>
      {licenses}
      <br/>
      {waterFees}
      <br/>
      {access}
      <br/>
      {timeOfDay}
      <br/>
      {travelTime}
      <br/>
      {tripType === "Future" && (
        <React.Fragment>
          {guidedOrNot}
          <br/>
          {communications}
          <br/>
          {gratuity}
          <br/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

MiscellaneousFields.propTypes = {
  trip: PropTypes.object,
  tripType: PropTypes.string
}

export default MiscellaneousFields;