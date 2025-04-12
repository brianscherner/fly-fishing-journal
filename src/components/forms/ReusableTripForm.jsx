import React, { useEffect, useState } from "react";
import DestinationInfoFields from "./DestinationInfoFields";
import GearRequirementsFields from "./GearRequirementsFields";
import MiscellaneousFields from "./MiscellaneousFields";
import TripCostsFields from "./TripCostsFields";
import TripNotesFields from "./TripNotesFields";
import Images from './Images';
import { toast } from 'react-toastify';
import ForwardIcon from '@mui/icons-material/Forward';
import SubmitLoader from "../ui/SubmitLoader";

function ReusableTripForm(props) {
  const {
    formData,
    setFormData,
    formSubmissionHandler,
    isLoading
  } = props;

  const [tripType, setTripType] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [formWarnings, setFormWarnings] = useState({});
  const formCharacterLimits = {
    destination: 56,
    county: 56,
    state: 56,
    country: 56,
    species: 120,
    climate: 56
  };

  useEffect(() => {
    let total = 0;
    switch (tripType) {
      case 'Past':
        total = 3;
        break;
      case 'Future':
        total = 4;
        break;
      default:
        total = 0;
    }
    setTotalPages(total);
  }, [tripType]);

  const handleTripTypeSelection = (e) => {
    setTripType(e.target.value);
    setFormData({
      ...formData, tripType: e.target.value,
    });
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const currentImages = [...formData.images];
    const remainingImageSlots = 6 - currentImages.length;

    if (remainingImageSlots <= 0) {
      toast.error("A maximum of 6 photos are allowed.", { position: "bottom-right" });
    }

    const validFiles = files.slice(0, remainingImageSlots);
    const newImages = [];

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newImages.push({ file, preview: reader.result });
        if (newImages.length === validFiles.length) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            images: [...prevFormData.images, ...newImages]
          }));
        }
      };
    });

  }

  const handleDeletingImage = (image) => {
    const remainingImages = [...formData.images].filter((_, index) => index !== image);
    setFormData({
      ...formData,
      images: remainingImages
    })
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <DestinationInfoFields
          tripType={tripType}
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          handleCharacterLimitCheck={handleCharacterLimitCheck}
          formWarnings={formWarnings}
          />;
      case 1:
        if (tripType === "Past") {
          return <TripNotesFields
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
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
            setFormData={setFormData}
            formErrors={formErrors}/>;
        }
        break;
      case 3:
        if (tripType === "Past") {
          return <Images
            tripType={tripType}
            formData={formData}
            setFormData={setFormData}
            onChangingImage={handleImageChange}
            onDeletingImage={handleDeletingImage}
            />;
        }
        if (tripType === "Future") {
          return <MiscellaneousFields
            tripType={tripType}
            formData={formData}
            setFormData={setFormData}/>;
        }
        break;
      case 4:
        return <Images
          tripType={tripType}
          formData={formData}
          setFormData={setFormData}
          onChangingImage={handleImageChange}
          onDeletingImage={handleDeletingImage}
          />;
      default:
        return <DestinationInfoFields
          tripType={tripType}
          formData={formData}
          setFormData={setFormData}/>;
    }
  }

  // checks if required form fields are empty or exceed character limits when user clicks "Next"
  // blocks user from advancing to next page if so

  // Before moving on, refactor validatePage to be DRY to avoid redundant if checks
  // **continue adding input check validation to all form fields**
  // **consider removing some required fields**

  const validatePage = () => {
    const formErrors = {};

    switch (page) {
      case 0:
        if (!formData.destination) {
          formErrors.destination = "A fishing destination is required.";
        } else if (formData.destination.length > formCharacterLimits.destination) {
          formErrors.destination = "Max character limit exceeded.";
        }

        if (!formData.season) formErrors.season = "A season is required.";
        if (!formData.startDate) formErrors.startDate = "A start date is required.";
        if (!formData.waterBodyType) formErrors.waterBodyType = "A water body type is required.";

        if (!formData.state) {
          formErrors.state = "A state is required.";
        } else if (formData.state.length > formCharacterLimits.state) {
          formErrors.state = "Max character limit exceeded.";
        }

        if (!formData.county) {
          formErrors.county = "A county is required.";
        } else if (formData.county.length > formCharacterLimits.county) {
          formErrors.county = "Max character limit exceeded.";
        }

        if (!formData.country) {
          formErrors.country = "A country is required.";
        } else if (formData.country.length > formCharacterLimits.country) {
          formErrors.country = "Max character limit exceeded.";
        }

        if (!formData.species) {
          formErrors.species = "A fish species is required.";
        } else if (formData.species.length > formCharacterLimits.species) {
          formErrors.species = "Max character limit exceeded.";
        }

        if (formData.climate.length > formCharacterLimits.climate) {
          formErrors.climate = "Max character limit exceeded."
        }
        break;
      case 1:
        if (tripType === "Past") {
          if (!formData.fliesUsed) formErrors.fliesUsed = "Please enter flies used.";
          if (!formData.fishCaught) formErrors.fishCaught = "Please enter fish caught.";
          if (!formData.fishingTackleUsed) formErrors.fishingTackleUsed = "Please enter fishing tackle used.";
        }
        break;
      case 2:
        if (tripType === "Future") {
          if (!formData.clothingRequirements) formErrors.clothingRequirements = "Please enter clothing requirements.";
          if (!formData.gearRequirements) formErrors.gearRequirements = "Please enter fishing requirements.";
          if (!formData.flyRequirements) formErrors.flyRequirements = "Please enter fly requirements.";
        }
        break;
      default:
        return true;
    }

    setFormErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }

  const prevPage = () => {
    setPage(page - 1);
  }

  const nextPage = () => {
    if (validatePage()) {
      setPage(page + 1);
    } else {
      toast.error("Please fix the highlighted errors to continue.", { position: "bottom-right" });
    }
  }

  // actively checks input length for form fields and shows warnings if exceeded
  const handleCharacterLimitCheck = (e) => {
    const { name, value } = e.target;
    if (value.length > formCharacterLimits[name]) {
      setFormWarnings(prev => ({
        ...prev,
        [name]: `${value.length}/${formCharacterLimits[name]}`
      }));
    } else {
      setFormWarnings({});
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={formSubmissionHandler}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-4">
            <label className="form-instruction">Please select a trip type to get started.</label>
            <br/>
            {/* <br/> */}
            <label>Trip Type</label>
            <select
              defaultValue=""
              className={`form-select ${isLoading ? 'is-disabled' : ''}`}
              name="tripType"
              onChange={(event) => handleTripTypeSelection(event)}
              disabled={isLoading}
            >
              <option value="" disabled>Select one</option>
              <option value="Past">Past</option>
              <option value="Future">Future</option>
            </select>
            <br/>
              {tripType && (
                <React.Fragment>
                  {conditionalComponent()}
                  <div className="form-buttons">
                    { page > 0 &&
                      <div className={isLoading ? "disabled-wrapper" : ""}>
                        <button
                          className="btn back-button"
                          onClick={prevPage}
                          type="button"
                          disabled={isLoading}
                        >
                          <ForwardIcon style={{ transform: 'rotate(180deg)'}} className="forward-icon"/> Back
                        </button>
                      </div>
                    }
                    { page < totalPages &&
                      <button
                        className="btn next-button"
                        onClick={nextPage}
                        type="button"
                        disabled={isLoading}
                      >
                        Next <ForwardIcon className="forward-icon"/>
                      </button>}
                    { page >= totalPages &&
                      <SubmitLoader isLoading={isLoading}/>
                    }
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
      </form>
    </React.Fragment>
  )
}

export default ReusableTripForm;