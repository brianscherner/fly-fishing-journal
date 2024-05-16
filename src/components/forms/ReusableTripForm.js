import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DestinationInfoFields from "./DestinationInfoFields";
import GearRequirementsFields from "./GearRequirementsFields";
import MiscellaneousFields from "./MiscellaneousFields";
import TripCostsFields from "./TripCostsFields";
import TripNotesFields from "./TripNotesFields";

function ReusableTripForm(props) {
  const { trip } = props;
  const [tripType, setTripType] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [formData, setFormData] = useState({
    destination: '',
    destinationType: '',
    season: ''
  });

  useEffect(() => {
    let total = 0;
    switch (tripType) {
      case 'Past':
        total = 2;
        break;
      case 'Future':
        total = 3;
        break;
      default:
        total = 0;
    }
    setTotalPages(total);
  }, [tripType]);

  const trackFormData = (formField, fieldValue) => {
    setFormData(prevData => ({
      ...prevData,
      [formField]: fieldValue
    }));
  };

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <DestinationInfoFields trip={trip} tripType={tripType} formData={formData} onChange={trackFormData}/>;
      case 1:
        if (tripType === "Past") {
          return <TripNotesFields trip={trip} formData={formData} onChange={trackFormData}/>;
        }
        if (tripType === "Future") {
          return <TripCostsFields trip={trip} formData={formData} onChange={trackFormData}/>;
        }
      case 2:
        if (tripType === "Past") {
          return <MiscellaneousFields trip={trip} tripType={tripType} formData={formData} onChange={trackFormData}/>;
        }
        if (tripType === "Future") {
          return <GearRequirementsFields trip={trip} formData={formData} onChange={trackFormData}/>;
        }
      case 3:
        if (tripType === "Future") {
          return <MiscellaneousFields trip={trip} tripType={tripType} formData={formData} onChange={trackFormData}/>;
        }
      default:
        return null;
    }
  }

  const nextPage = () => {
    setPage(page + 1);
  }

  const prevPage = () => {
    setPage(page - 1);
  }

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
          <React.Fragment>
            {conditionalComponent()}
            { page > 0 && <button onClick={() => prevPage(page - 1)}>Back</button>}
            { page < totalPages && <button onClick={nextPage}>Next</button>}
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