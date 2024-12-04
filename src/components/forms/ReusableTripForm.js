import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DestinationInfoFields from "./DestinationInfoFields";
import GearRequirementsFields from "./GearRequirementsFields";
import MiscellaneousFields from "./MiscellaneousFields";
import TripCostsFields from "./TripCostsFields";
import TripNotesFields from "./TripNotesFields";
import { toast } from 'react-toastify';
import ForwardIcon from '@mui/icons-material/Forward';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function ReusableTripForm(props) {
  const { formData, setFormData, formSubmissionHandler, isFinalPageValid, setIsFinalPageValid } = props;
  const [tripType, setTripType] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [invalidFormFields, setInvalidFormFields] = useState({});

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

  const handleTripTypeSelection = (e) => {
    setTripType(e.target.value);
    setFormData({...formData, tripType: e.target.value});
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <DestinationInfoFields
          tripType={tripType}
          formData={formData}
          setFormData={setFormData}
          invalidFormFields={invalidFormFields}
          />;
      case 1:
        if (tripType === "Past") {
          return <TripNotesFields
            formData={formData}
            setFormData={setFormData}
            invalidFormFields={invalidFormFields}
            />;
        }
        if (tripType === "Future") {
          return <TripCostsFields
            formData={formData}
            setFormData={setFormData}/>;
        }
        break;
      case 2:
        if (tripType === "Past") {
          return <MiscellaneousFields
            tripType={tripType}
            formData={formData}
            setFormData={setFormData}/>;
        }
        if (tripType === "Future") {
          return <GearRequirementsFields
            formData={formData}
            setFormData={setFormData}/>;
        }
        break;
      case 3:
        if (tripType === "Future") {
          return <MiscellaneousFields
            tripType={tripType}
            formData={formData}
            setFormData={setFormData}/>;
        }
        if (tripType === "Past") {
          return <MiscellaneousFields
            tripType={tripType}
            formData={formData}
            setFormData={setFormData}/>;
        }
        break;
      default:
        return <DestinationInfoFields
          tripType={tripType}
          formData={formData}
          setFormData={setFormData}/>;
    }
  }

  const validatePage = () => {
    const invalidFields = {};

    switch (page) {
      case 0:
        if (!formData.destination) invalidFields.destination = "A fishing destination is required.";
        if (!formData.season) invalidFields.season = "A season is required.";
        if (!formData.startDate) invalidFields.startDate = "A start date is required.";
        if (!formData.waterBodyType) invalidFields.waterBodyType = " A water body type is required.";
        if (!formData.country) invalidFields.country = "A country is required.";
        if (!formData.species) invalidFields.species = "A fish species is required.";
        if (tripType === "Past") {
          if (!formData.state) invalidFields.state = "A state is required.";
          if (!formData.county) invalidFields.county = "A county is required.";
        }
        break;
      case 1:
        if (tripType === "Past") {
          if (!formData.fliesUsed) invalidFields.fliesUsed = "Please enter flies used.";
          if (!formData.fishCaught) invalidFields.fishCaught = "Please enter fish caught.";
          if (!formData.fishingTackleUsed) invalidFields.fishingTackleUsed = "Please enter fishing tackle used.";
        }
        break;
      default:
        return true;
    }

    setInvalidFormFields(invalidFields);
    return Object.keys(invalidFields).length === 0;
  }

  const prevPage = () => {
    setPage(page - 1);
  }

  const nextPage = () => {
    if (validatePage()) {
      setPage(page + 1);
    } else {
      toast.error("Please fill out all required fields.", { position: "bottom-right" });
    }
  }

  const validateFinalPage = () => {
    if (validatePage() && page >= totalPages) {
      setIsFinalPageValid(!isFinalPageValid);
    } else {
      toast.error("Please fill out all required fields.", { position: "bottom-right"});
    }
  }

  console.log("Form data: ", formData);
  console.log("Invalid fields: ", invalidFormFields);
  return (
    <React.Fragment>
      <form onSubmit={formSubmissionHandler}>
        <div className="row justify-content-center">
          {/* look into adjusting for greater responsiveness */}
          <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <label className="form-instruction">Please select a trip type to get started.</label>
            <br/>
            {/* <br/> */}
            <label>Trip Type</label>
            <select defaultValue="" className="form-select" name="tripType" onChange={(event) => handleTripTypeSelection(event)}>
              <option value="" disabled>Select one</option>
              <option value="Past">Past</option>
              <option value="Future">Future</option>
            </select>
            <br/>
              {tripType && (
                <React.Fragment>
                  {conditionalComponent()}
                  <div className="form-buttons">
                    { page > 0 && <button className="btn back-button" onClick={prevPage} type="button"><ForwardIcon style={{ transform: 'rotate(180deg)'}}/></button>}
                    { page < totalPages && <button className="btn app-buttons" onClick={nextPage} type="button"><ForwardIcon/></button>}
                    { page >= totalPages && <button className="btn app-buttons" onClick={validateFinalPage} type="submit">Add <AddCircleIcon/></button>}
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
      </form>
    </React.Fragment>
  )
}

ReusableTripForm.propTypes = {
  trip: PropTypes.object,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  setIsFinalPageValid: PropTypes.func,
  buttonText: PropTypes.string,
}

export default ReusableTripForm;