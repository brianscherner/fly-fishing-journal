import React from "react";
import PropTypes from "prop-types";

function MiscellaneousFields(props) {
  const { formData, setFormData, tripType } = props;

  const communications = <input type="text" name="communications" placeholder="Cell and Wifi Service" defaultValue={formData.communications ??= ''} onChange={(e) => setFormData({...formData, communications: e.target.value})}/>

  const gratuity = <input type="text" name="gratuity" placeholder="Gratuity Guidelines" defaultValue={formData.gratuity ??= ''} onChange={(e) => setFormData({...formData, gratuity: e.target.value})}/>

  const guidedOrNot =
  <select name="guidedOrNot" defaultValue={formData.guidedOrNot ??= ''} onChange={(e) => setFormData({...formData, guidedOrNot: e.target.value})}>
    <option value="" disabled selected>Guided?</option>
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>

  const waterFees =
  <select name="waterFees" defaultValue={formData.waterFees ??= ''} onChange={(e) => setFormData({...formData, waterFees: e.target.value})}>
    <option value="" disabled selected>Water Fees</option>
    <option value="private">Private</option>
    <option value="public">Public</option>
  </select>

  const access = <input type="text" name="access" placeholder="Access (ex: car, boat, etc)" defaultValue={formData.access ??= ''} onChange={(e) => setFormData({...formData, access: e.target.value})}/>

  const travelTime = <input type="text"
  name="travelTime" placeholder="Travel Time" defaultValue={formData.travelTime ??= ''} onChange={(e) => setFormData({...formData, travelTime: e.target.value})}/>

  const timeOfDay = <input type="text" name="timeOfDay" placeholder="Time of Day" defaultValue={formData.timeOfDay ??= ''} onChange={(e) => setFormData({...formData, timeOfDay: e.target.value})}/>

  const licenses = <input type="text" name="licenses" placeholder="Licenses" defaultValue={formData.licenses ??= ''} onChange={(e) => setFormData({...formData, licenses: e.target.value})}/>

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
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  tripType: PropTypes.string
}

export default MiscellaneousFields;