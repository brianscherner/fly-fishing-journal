import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DestinationInfoFields from "./DestinationInfoFields";
import GearRequirementsFields from "./GearRequirementsFields";
import MiscellaneousFields from "./MiscellaneousFields";
import TripCostsFields from "./TripCostsFields";
import TripNotesFields from "./TripNotesFields";

function ReusableTripForm(props) {
  const { formData, setFormData } = props;
  const [tripType, setTripType] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

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

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <DestinationInfoFields tripType={tripType} formData={formData} setFormData={setFormData}/>;
      case 1:
        if (tripType === "Past") {
          return <TripNotesFields formData={formData} setFormData={setFormData}/>;
        }
        if (tripType === "Future") {
          return <TripCostsFields formData={formData} setFormData={setFormData}/>;
        }
        break;
      case 2:
        if (tripType === "Past") {
          return <MiscellaneousFields tripType={tripType} formData={formData} setFormData={setFormData}/>;
        }
        if (tripType === "Future") {
          return <GearRequirementsFields formData={formData} setFormData={setFormData}/>;
        }
        break;
      case 3:
        if (tripType === "Future") {
          return <MiscellaneousFields tripType={tripType} formData={formData} setFormData={setFormData}/>;
        }
        break;
      default:
        return <DestinationInfoFields tripType={tripType} formData={formData} setFormData={setFormData}/>;
    }
  }

  const nextPage = () => {
    setPage(page + 1);
  }

  const prevPage = () => {
    setPage(page - 1);
  }

  const handleTripTypeSelection = (e) => {
    setTripType(e.target.value);
    setFormData({...formData, tripType: e.target.value});
  }

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <select defaultValue="" name="tripType" onChange={(event) => handleTripTypeSelection(event)}>
          <option value="" disabled selected>Trip Type</option>
          <option value="Past">Past</option>
          <option value="Future">Future</option>
        </select>
        <br/>
        {tripType && (
          <React.Fragment>
            {conditionalComponent()}
            { page > 0 && <button onClick={() => prevPage(page - 1)} type="button">Back</button>}
            { page < totalPages && <button onClick={nextPage} type="button">Next</button>}
            <br/>
            { page === totalPages && <button type="submit">{props.buttonText}</button>}
          </React.Fragment>
        )}
      </form>
      <br/>
    </React.Fragment>
  )
}

ReusableTripForm.propTypes = {
  trip: PropTypes.object,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
}

export default ReusableTripForm;