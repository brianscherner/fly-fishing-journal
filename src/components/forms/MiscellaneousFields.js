import React from "react";
import PropTypes from "prop-types";

function MiscellaneousFields(props) {
  const { formData, setFormData, tripType } = props;

  const communications = <input type="text" className="form-control" name="communications" placeholder="Cell and Wifi Service*" defaultValue={formData.communications ??= ''} onChange={(e) => setFormData({...formData, communications: e.target.value})}/>

  const gratuity = <input type="text" className="form-control" name="gratuity" placeholder="Gratuity Guidelines*" defaultValue={formData.gratuity ??= ''} onChange={(e) => setFormData({...formData, gratuity: e.target.value})}/>

  const guidedOrNot =
  <select name="guidedOrNot" className="form-select" defaultValue={formData.guidedOrNot ??= ''} onChange={(e) => setFormData({...formData, guidedOrNot: e.target.value})}>
    <option value="" disabled>Guided?*</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>

  const waterFees =
  <select name="waterFees" className="form-select" defaultValue={formData.waterFees ??= ''} onChange={(e) => setFormData({...formData, waterFees: e.target.value})}>
    <option value="" disabled>Water Fees*</option>
    <option value="Private">Private</option>
    <option value="Public">Public</option>
  </select>

  const access = <input type="text" className="form-control" name="access" placeholder="Access (ex: car, boat, etc)*" defaultValue={formData.access ??= ''} onChange={(e) => setFormData({...formData, access: e.target.value})}/>

  const travelTime = <input type="text" className="form-control"
  name="travelTime" placeholder="Travel Time*" defaultValue={formData.travelTime ??= ''} onChange={(e) => setFormData({...formData, travelTime: e.target.value})}/>

  const timeOfDay = <input type="text" className="form-control" name="timeOfDay" placeholder="Time of Day*" defaultValue={formData.timeOfDay ??= ''} onChange={(e) => setFormData({...formData, timeOfDay: e.target.value})}/>

  const licenses = <input type="text" className="form-control" name="licenses" placeholder="Licenses*" defaultValue={formData.licenses ??= ''} onChange={(e) => setFormData({...formData, licenses: e.target.value})}/>

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Miscellaneous</h4>
      <p className="required-msg">* indicates a required field</p>
      {licenses}
      <br/>
      {tripType === "Past" && (
        <React.Fragment>
          {waterFees}
          <br/>
          {access}
          <br/>
          {timeOfDay}
          <br/>
          {travelTime}
          <br/>
        </React.Fragment>
      )}
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