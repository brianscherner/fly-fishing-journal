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
import { formCharacterLimits, destInfoFields, tripCostsFields, tripNotesFields, miscellaneousFields, gearRequirementsFields } from "./FormConfig";

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
            formErrors={formErrors}
            handleFormInput={handleFormInput}
            handleCharacterLimitCheck={handleCharacterLimitCheck}
            formWarnings={formWarnings}
          />;
      case 1:
        if (tripType === "Past") {
          return <TripNotesFields
              formData={formData}
              setFormData={setFormData}
              formErrors={formErrors}
              handleCharacterLimitCheck={handleCharacterLimitCheck}
              formWarnings={formWarnings}
            />;
        }
        if (tripType === "Future") {
          return <TripCostsFields
              formData={formData}
              setFormData={setFormData}
              formErrors={formErrors}
              handleCharacterLimitCheck={handleCharacterLimitCheck}
              formWarnings={formWarnings}
            />;
        }
        break;
      case 2:
        if (tripType === "Past") {
          return <MiscellaneousFields
              tripType={tripType}
              formData={formData}
              setFormData={setFormData}
              formErrors={formErrors}
              handleCharacterLimitCheck={handleCharacterLimitCheck}
              formWarnings={formWarnings}
            />;
        }
        if (tripType === "Future") {
          return <GearRequirementsFields
              formData={formData}
              setFormData={setFormData}
              formErrors={formErrors}
              handleCharacterLimitCheck={handleCharacterLimitCheck}
              formWarnings={formWarnings}
            />;
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
              setFormData={setFormData}
              formErrors={formErrors}
              handleCharacterLimitCheck={handleCharacterLimitCheck}
              formWarnings={formWarnings}
            />;
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
            formErrors={formErrors}
            handleFormInput={handleFormInput}
            handleCharacterLimitCheck={handleCharacterLimitCheck}
            formWarnings={formWarnings}
          />;
    }
  }

  // checks if required form fields are empty or exceed character limits when user clicks "Next"
  // blocks user from advancing to next page if so
  const validateFields = (formFields, requiredFields) => {
    const errors = {};

    Object.keys(formFields).forEach(key => {
      requiredFields.forEach(index => {
        if (key === index.field) {
          if (!formFields[key] && index.required) {
            errors[key] = `${index.emptyMessage}`;
          } else if (formFields[key].length > index.limit) {
            errors[key] = `${index.limitMessage}`;
          }
        }
      })
    });

    return errors;
  }

  // validates each individual page of the multi-step form
  const validatePage = () => {
    let errors = {};

    switch (page) {
      case 0:
        errors = validateFields(formData, destInfoFields);
        break;
      case 1:
        if (tripType === "Past") {
          errors = validateFields(formData, tripNotesFields);
        }
        if (tripType === "Future") {
          errors = validateFields(formData, tripCostsFields);
        }
        break;
      case 2:
        if (tripType === "Past") {
          errors = validateFields(formData, miscellaneousFields);
        }
        if (tripType === "Future") {
          errors = validateFields(formData, gearRequirementsFields);
        }
        break;
      case 3:
        if (tripType === "Future") {
          errors = validateFields(formData, miscellaneousFields);
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

  // handles form input and sets state of formData object
  const handleFormInput = (e) => {
    const { name, value } = e.target;
    if (value) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <React.Fragment>
      <form onSubmit={formSubmissionHandler}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-4">
            <label className="form-instruction">Please select a trip type to get started.</label>
            <br/>
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