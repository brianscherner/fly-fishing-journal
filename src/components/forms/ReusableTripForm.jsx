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
  const destInfoRequiredFields = [
    {
      field: "destination",
      emptyMessage: "A fishing destination is required.",
      limitMessage: "Max character limit exceeded.",
      limit: formCharacterLimits.destination
    },
    {
      field: "season",
      emptyMessage: "A season is required.",
    },
    {
      field: "startDate",
      emptyMessage: "A start date is required."
    },
    {
      field: "waterBodyType",
      emptyMessage: "A water body type is required."
    },
    {
      field: "species",
      emptyMessage: "A fish species is required.",
      limitMessage: "Max character length exceeded.",
      limit: formCharacterLimits.species
    },
    {
      field: 'county',
      emptyMessage: "A county is required.",
      limitMessage: "Max character length exceeded.",
      limit: formCharacterLimits.county
    },
    {
      field: "state",
      emptyMessage: "A state is required.",
      limitMessage: "Max character length exceeded.",
      limit: formCharacterLimits.state
    },
    {
      field: 'country',
      emptyMessage: 'A country is required.',
      limitMessage: "Max character length exceeded.",
      limit: formCharacterLimits.country
    },
    {
      field: 'climate',
      limitMessage: "Max character limit exceeded.",
      limit: formCharacterLimits.climate
    }
  ];

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
  // keep refactoring validatePage to be DRY to avoid redundant if checks
  // **continue adding input check validation to all form fields**
  // **consider removing some required fields**

  const validateFields = (formFields, requiredFields) => {
    const errors = {};

    Object.keys(formFields).forEach(key => {
      requiredFields.forEach(index => {
        if (key === index.field) {
          if (!formFields[key]) {
            errors[key] = `${index.emptyMessage}`;
          } else if (formFields[key].length > index.limit) {
            errors[key] = `${index.limitMessage}`;
          }
        }
      })
    });

    return errors;
  }

  const validatePage = () => {
    let errors = {};

    switch (page) {
      case 0:
        errors = validateFields(formData, destInfoRequiredFields);
        break;
      case 1:
        if (tripType === "Past") {
          if (!formData.fliesUsed) errors.fliesUsed = "Please enter flies used.";
          if (!formData.fishCaught) errors.fishCaught = "Please enter fish caught.";
          if (!formData.fishingTackleUsed) errors.fishingTackleUsed = "Please enter fishing tackle used.";
        }
        break;
      case 2:
        if (tripType === "Future") {
          if (!formData.clothingRequirements) errors.clothingRequirements = "Please enter clothing requirements.";
          if (!formData.gearRequirements) errors.gearRequirements = "Please enter fishing requirements.";
          if (!formData.flyRequirements) errors.flyRequirements = "Please enter fly requirements.";
        }
        break;
      default:
        return true;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
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