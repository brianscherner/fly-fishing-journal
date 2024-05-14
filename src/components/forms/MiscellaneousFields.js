import React from "react";
import PropTypes from "prop-types";

function MiscellaneousFields(props) {
  const { tripType } = props;

  const communications = <input type="text" name="communications" placeholder="Cell and Wifi Service" defaultValue={props.trip !== undefined ? props.trip.communications : ''}/>

  const gratuity = <input type="text" name="gratuity" placeholder="Gratuity Guidelines" defaultValue={props.trip !== undefined ? props.trip.gratuity : ''}/>

  const guidedOrNot =
  <select name="guidedOrNot">
    <option value="" disabled selected>Guided?</option>
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>

  const waterFees =
  <select name="waterFees">
    <option value="" disabled selected>Water Fees</option>
    <option value="private">Private</option>
    <option value="public">Public</option>
  </select>

  const access = <input type="text" name="access" placeholder="Access (ex: car, boat, etc)" defaultValue={props.trip !== undefined ? props.trip.access : ''}/>

  const travelTime = <input type="text"
  name="travelTime" placeholder="Travel Time" defaultValue={props.trip !== undefined ? props.trip.travelTime : ''}/>

  const timeOfDay = <input type="text" name="timeOfDay" placeholder="Time of Day" defaultValue={props.trip !== undefined ? props.trip.timeOfDay : ''} required/>

  const licenses = <input type="text" name="licenses" placeholder="Licenses" defaultValue={props.trip !== undefined ? props.trip.licenses : ''} required/>

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
          {communications}
          <br/>
          {gratuity}
          <br/>
          {guidedOrNot}
          <br/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

MiscellaneousFields.propTypes = {
  tripType: PropTypes.string
}

export default MiscellaneousFields;