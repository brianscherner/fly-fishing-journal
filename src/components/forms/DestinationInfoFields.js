import React from "react";
import PropTypes from "prop-types";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import PublicIcon from '@mui/icons-material/Public';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ExploreIcon from '@mui/icons-material/Explore';

function DestinationInfoFields(props) {
  const { tripType, formData, setFormData } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Destination Info</h4>
      <p className="required-msg" style={{ fontStyle: "italic" }}>* indicates a required field</p>
      <label>Destination*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="destination"
          placeholder="Example: Missouri River"
          defaultValue={formData.destination ??= ''}
          onChange={(e) => setFormData({...formData, destination: e.target.value})}
        />
        <ExploreIcon className="form-input-icon"/>
      </div>
      <br/>
      <label>Destination Type</label>
      <select
        className="form-select"
        name="destinationType"
        defaultValue={formData.destinationType ??= ''}
        onChange={(e) => setFormData({...formData, destinationType: e.target.value})}>
        <option value="" disabled>Select an option</option>
        <option value="Domestic">Domestic</option>
        <option value="International">International</option>
      </select>
      <br/>
      <label>Season*</label>
      <select
        className="form-select"
        name="season"
        defaultValue={formData.season ??= ''}
        onChange={(e) => setFormData({...formData, season: e.target.value})}>
        <option value="" disabled>Select an option</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Fall">Fall</option>
      </select>
      <br/>
      <label>Start Date</label>
      <input
        className="form-control"
        aria-label="Date"
        type="date"
        defaultValue={formData.startDate ??= ''}
        onChange={(e) => setFormData({...formData, startDate: e.target.value})}/>
      <br/>
      <label>End Date</label>
      <input
        className="form-control"
        aria-label="Date"
        type="date"
        defaultValue={formData.endDate ??= ''}
        onChange={(e) => setFormData({...formData, endDate: e.target.value})}/>
      <br/>
      <label>Water Type</label>
      <select
        className="form-select"
        name="waterType"
        defaultValue={formData.waterType ??= ''}
        onChange={(e) => setFormData({...formData, waterType: e.target.value})}>
        <option value="" disabled>Select an option</option>
        <option value="Freshwater">Freshwater</option>
        <option value="Saltwater">Saltwater</option>
      </select>
      <br/>
      <label>Water Body Type*</label>
      <select
        className="form-select"
        name="waterBodyType"
        defaultValue={formData.waterBodyType ??= ''}
        onChange={(e) => setFormData({...formData, waterBodyType: e.target.value})}>
        <option value="" disabled>Select an option</option>
        <option value="River">River</option>
        <option value="Lake">Lake</option>
        <option value="Ocean">Ocean</option>
        <option value="Mix">Mix</option>
      </select>
      <br/>
      <label>Fish Species*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="species"
          placeholder="Example: salmon"
          defaultValue={formData.species ??= ''} onChange={(e) => setFormData({...formData, species: e.target.value})}/>
        <WaterDropIcon className="form-input-icon"/>
      </div>
      <br/>
      {tripType === "Past" && (
        <React.Fragment>
          <label>County*</label>
          <div className="form-input-container">
            <input
            type="text"
            className="form-control"
            name="county"
            placeholder="Enter a county"
            defaultValue={formData.county ??= ''}
            onChange={(e) => setFormData({...formData, county: e.target.value})}/>
            <LocationOnIcon className="form-input-icon"/>
          </div>
          <br/>
          <label>State*</label>
          <div className="form-input-container">
            <input
              type="text"
              className="form-control"
              name="state"
              placeholder="Enter a state"
              defaultValue={formData.state ??= ''}
              onChange={(e) => setFormData({...formData, state: e.target.value})}/>
            <MapIcon className="form-input-icon"/>
          </div>
          <br/>
        </React.Fragment>
      )}
      <label>Enter a country*</label>
      <div className="form-input-container">
        <input
          type="text"
          className="form-control"
          name="country"
          placeholder="Country*"
          defaultValue={formData.country ??= ''}
          onChange={(e) => setFormData({...formData, country: e.target.value})}/>
        <PublicIcon className="form-input-icon"/>
      </div>
      <br/>
      {tripType === "Future" && (
        <React.Fragment>
          <label>Climate*</label>
          <input
            type="text"
            className="form-control"
            name="climate"
            placeholder="Example: desert"
            defaultValue={formData.climate ??= ''}
            onChange={(e) => setFormData({...formData, climate: e.target.value})}/>
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