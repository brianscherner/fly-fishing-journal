import React from "react";
import PropTypes from "prop-types";

function DestinationInfoFields(props) {
  const { tripType, formData, setFormData } = props;

  const destination = <input type="text" className="form-control" name="destination" placeholder="Destination" defaultValue={formData.destination ??= ''} onChange={(e) => setFormData({...formData, destination: e.target.value})}/>

  const destinationType =
  <select className="form-select" name="destinationType" defaultValue={formData.destinationType ??= ''} onChange={(e) => setFormData({...formData, destinationType: e.target.value})}>
    <option value="" disabled>Destination Type</option>
    <option value="Domestic">Domestic</option>
    <option value="International">International</option>
  </select>

  const waterType =
  <select className="form-select" name="waterType" defaultValue={formData.waterType ??= ''} onChange={(e) => setFormData({...formData, waterType: e.target.value})}>
    <option value="" disabled>Water Type</option>
    <option value="Freshwater">Freshwater</option>
    <option value="Saltwater">Saltwater</option>
  </select>

  const waterBodyType =
  <select className="form-select" name="waterBodyType" defaultValue={formData.waterBodyType ??= ''} onChange={(e) => setFormData({...formData, waterBodyType: e.target.value})}>
    <option value="" disabled>Water Body Type</option>
    <option value="River">River</option>
    <option value="Lake">Lake</option>
    <option value="Ocean">Ocean</option>
    <option value="Mix">Mix</option>
  </select>

  const species = <input type="text" className="form-control" name="species" placeholder="Fish Species" defaultValue={formData.species ??= ''} onChange={(e) => setFormData({...formData, species: e.target.value})}/>

  const season =
  <select className="form-select" name="season" defaultValue={formData.season ??= ''} onChange={(e) => setFormData({...formData, season: e.target.value})}>
    <option value="" disabled>Season</option>
    <option value="Winter">Winter</option>
    <option value="Spring">Spring</option>
    <option value="Summer">Summer</option>
    <option value="Fall">Fall</option>
  </select>

  const state = <input type="text" className="form-control" name="state" placeholder="State" defaultValue={formData.state ??= ''} onChange={(e) => setFormData({...formData, state: e.target.value})}/>

  const county = <input type="text" className="form-control" name="county" placeholder="County" defaultValue={formData.county ??= ''} onChange={(e) => setFormData({...formData, county: e.target.value})}/>

  const country = <input type="text" className="form-control" name="country" placeholder="Country" defaultValue={formData.country ??= ''} onChange={(e) => setFormData({...formData, country: e.target.value})}/>

  const climate = <input type="text" className="form-control" name="climate" placeholder="Climate" defaultValue={formData.climate ??= ''} onChange={(e) => setFormData({...formData, climate: e.target.value})}/>

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Destination Info</h4>
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
  tripType: PropTypes.string,
  formData: PropTypes.object,
  setFormData: PropTypes.func
}

export default DestinationInfoFields;