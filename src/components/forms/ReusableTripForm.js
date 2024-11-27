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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ReusableTripForm(props) {
  const { formData, setFormData, formSubmissionHandler, isFinalPageValid, setIsFinalPageValid } = props;
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

  const handleTripTypeSelection = (e) => {
    setTripType(e.target.value);
    setFormData({...formData, tripType: e.target.value});
  }

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
          return formData.destination &&
          formData.season &&
          formData.startDate &&
          formData.species &&
          formData.state &&
          formData.county &&
          formData.country &&
          formData.waterBodyType &&
          formData.species;
        }
        if (tripType === "Future") {
          return formData.destination &&
          formData.season &&
          formData.waterBodyType &&
          formData.country &&
          formData.climate;
        }
        break;
      case 1:
        if (tripType === "Past") {
          return formData.fliesUsed &&
          formData.fishCaught &&
          formData.fishingTackleUsed &&
          formData.fishingMethod &&
          formData.riverFlowLevels;
        }
        if (tripType === "Future") {
          return formData.travelDocs &&
          formData.tripExpenses &&
          formData.depositTerms &&
          formData.cancellationPolicy &&
          formData.tripInsurance &&
          formData.evacInsurance;
        }
        break;
      case 2:
        if (tripType === "Past") {
          return formData.licenses &&
          formData.waterFees &&
          formData.access &&
          formData.timeOfDay &&
          formData.travelTime;
        }
        if (tripType === "Future") {
          return formData.clothingRequirements &&
          formData.gearRequirements &&
          formData.flyRequirements;
        }
        break;
      case 3:
        return formData.licenses &&
        formData.guidedOrNot &&
        formData.communications &&
        formData.gratuity;
      default:
        return true;
    }
  }

  const prevPage = () => {
    setPage(page - 1);
  }

  const nextPage = () => {
    if (validatePage()) {
      setPage(page + 1);
    } else {
      toast.error("Please fill out all required form fields. * indicates a required field.", { position: "bottom-right"});
    }
  }

  const validateFinalPage = () => {
    if (validatePage() && page >= totalPages) {
      setIsFinalPageValid(!isFinalPageValid);
    } else {
      toast.error("Please fill out all required form fields. * indicates a required field.", { position: "bottom-right"});
    }
  }

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
            {/* <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Trip Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.tripType}
                  label="Trip Type"
                  onChange={(event) => handleTripTypeSelection(event)}
                >
                  <MenuItem value={"Past"}>Past</MenuItem>
                  <MenuItem value={"Future"}>Future</MenuItem>
                </Select>
              </FormControl>
            </Box> */}
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