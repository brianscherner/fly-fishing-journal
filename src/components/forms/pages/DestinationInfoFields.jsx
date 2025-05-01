import React from "react";
import TextField from '../inputs/TextField';
import Dropdown from '../inputs/Dropdown';
import DatePicker from '../inputs/DatePicker';

function DestinationInfoFields(props) {
  const {
    tripType,
    formData,
    formErrors,
    handleFormInput,
    handleCharacterLimitCheck,
    formWarnings
  } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Location Info</h4>
      <TextField
        type="text"
        value={formData.destination}
        placeholder="Enter a location"
        label="Fishing Location"
        name="destination"
        errors={formErrors.destination}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.destination}
        required={true}
      />
      <br/>
      <Dropdown
        type="select-one"
        value={formData.destinationType}
        name="destinationType"
        errors={formErrors.destinationType}
        handleFormInput={handleFormInput}
        label="Location Type"
        options={["None", "Domestic", "International"]}
        required={false}
      />
      <br/>
      <Dropdown
        type="select-one"
        value={formData.season}
        name="season"
        errors={formErrors.season}
        handleFormInput={handleFormInput}
        label="Season"
        options={["Winter", "Spring", "Summer", "Fall"]}
        required={true}
      />
      <br/>
      <DatePicker
        type="date"
        value={formData.startDate}
        name="startDate"
        errors={formErrors.startDate}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.startDate}
        label="Start Date"
        required={true}
      />
      <br/>
      <DatePicker
        type="date"
        value={formData.endDate}
        name="endDate"
        errors={formErrors.endDate}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.endDate}
        label="End Date"
        required={false}
      />
      <br/>
      <Dropdown
        type="select-one"
        value={formData.waterType}
        name="waterType"
        errors={formErrors.waterType}
        handleFormInput={handleFormInput}
        label="Water Type"
        options={["None", "Freshwater", "Saltwater"]}
        required={false}
      />
      <br/>
      <Dropdown
        type="select-one"
        value={formData.waterBodyType}
        name="waterBodyType"
        errors={formErrors.waterBodyType}
        handleFormInput={handleFormInput}
        label="Water Body Type"
        options={["River", "Lake", "Ocean", "Mix"]}
        required={true}
      />
      <br/>
      <TextField
        type="text"
        value={formData.species}
        placeholder="Example: salmon"
        label="Fish Species"
        name="species"
        errors={formErrors.species}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.species}
        required={true}
      />
      <br/>
      <TextField
        type="text"
        value={formData.county}
        placeholder="Enter a county"
        label="County"
        name="county"
        errors={formErrors.county}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.county}
        required={true}
      />
      <br/>
      <TextField
        type="text"
        value={formData.state}
        placeholder="Enter a state"
        label="State"
        name="state"
        errors={formErrors.state}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.state}
        required={true}
      />
      <br/>
      <TextField
        type="text"
        value={formData.country}
        placeholder="Enter a country"
        label="Country"
        name="country"
        errors={formErrors.country}
        handleFormInput={handleFormInput}
        handleCharacterLimitCheck={handleCharacterLimitCheck}
        warnings={formWarnings.country}
        required={true}
      />
      <br/>
      {tripType === "Future" && (
        <>
          <TextField
            type="text"
            value={formData.climate}
            placeholder="Example: desert"
            label="Climate"
            name="climate"
            errors={formErrors.climate}
            handleFormInput={handleFormInput}
            handleCharacterLimitCheck={handleCharacterLimitCheck}
            warnings={formWarnings.climate}
            required={false}
          />
          <br/>
        </>
      )}
    </React.Fragment>
  )
}

export default DestinationInfoFields;