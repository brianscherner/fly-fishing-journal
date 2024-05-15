import React, { useState } from "react";
import PropTypes from "prop-types";
import DestinationInfoFields from "./DestinationInfoFields";
import GearRequirementsFields from "./GearRequirementsFields";
import MiscellaneousFields from "./MiscellaneousFields";
import TripCostsFields from "./TripCostsFields";
import TripNotesFields from "./TripNotesFields";

function ReusableTripForm(props) {
  const { trip } = props;
  const [tripType, setTripType] = useState('');

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <select defaultValue="" name="tripType" onChange={(event) => setTripType(event.target.value)}>
          <option value="" disabled selected>Trip Type</option>
          <option value="Past">Past</option>
          <option value="Future">Future</option>
        </select>
        <br/>
        {tripType && (
          <DestinationInfoFields trip={trip} tripType={tripType}/>
        )}

        {tripType === "Past" && (
          <TripNotesFields trip={trip}/>
        )}

        {tripType === "Future" && (
          <React.Fragment>
            <TripCostsFields trip={trip}/>
            <GearRequirementsFields trip={trip}/>
          </React.Fragment>
        )}

        {tripType && (
          <MiscellaneousFields trip={trip} tripType={tripType}/>
        )}

        {tripType && (
          <React.Fragment>
            <br/>
            <button type="submit">{props.buttonText}</button>
          </React.Fragment>
        )}
      </form>
      <br/>
    </React.Fragment>
  )
}

ReusableTripForm.propTypes = {
  trip: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
}

export default ReusableTripForm;