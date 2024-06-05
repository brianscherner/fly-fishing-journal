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
        if (tripType === "Past") {
          return <MiscellaneousFields tripType={tripType} formData={formData} setFormData={setFormData}/>;
        }
        break;
      default:
        return <DestinationInfoFields tripType={tripType} formData={formData} setFormData={setFormData}/>;
    }
  }

  const validatePage = () => {
    switch (page) {
      case 0:
        if (tripType === "Past") {
          return formData.destination && formData.season && formData.species && formData.state && formData.county && formData.country && formData.waterBodyType && formData.species;
        }
        if (tripType === "Future") {
          return formData.destination && formData.season && formData.waterBodyType && formData.country && formData.climate;
        }
        break;
      case 1:
        if (tripType === "Past") {
          return formData.fliesUsed && formData.fishCaught && formData.fishingTackleUsed && formData.fishingMethod && formData.riverFlowLevels;
        }
        if (tripType === "Future") {
          return formData.travelDocs && formData.tripExpenses && formData.depositTerms && formData.cancellationPolicy && formData.tripInsurance && formData.evacInsurance;
        }
        break;
      case 2:
        if (tripType === "Past") {
          return formData.licenses && formData.waterFees && formData.access && formData.timeOfDay && formData.travelTime;
        }
        if (tripType === "Future") {
          return formData.clothingRequirements && formData.gearRequirements && formData.flyRequirements;
        }
        break;
      case 3:
        return formData.licenses && formData.guidedOrNot && formData.communications && formData.gratuityGuidelines;
      default:
        return true;
    }
  }

  const nextPage = () => {
    if (validatePage()) {
      setPage(page + 1);
    } else {
      alert ('Form is missing required information. Please try again.');
    }
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
        <div className="row justify-content-center">
          <div className="col-6">
            <select defaultValue="" className="form-select" name="tripType" onChange={(event) => handleTripTypeSelection(event)}>
              <option value="" disabled>Trip Type</option>
              <option value="Past">Past</option>
              <option value="Future">Future</option>
            </select>
            <br/>
            {tripType && (
              <React.Fragment>
                {conditionalComponent()}
                { page > 0 && <button className="btn back-button" onClick={() => prevPage(page - 1)} type="button">Back</button>}
                { page < totalPages && <button className="btn app-buttons" onClick={nextPage} type="button">Next</button>}
                { page >= totalPages && <button className="btn app-buttons" type="submit">{props.buttonText}</button>}
              </React.Fragment>
            )}
          </div>
        </div>
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