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
  const [invalidFormFields, setInvalidFormFields] = useState({});

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
            setFormData={setFormData}
            invalidFormFields={invalidFormFields}/>;
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

  const validatePage = () => {
    const invalidFields = {};

    switch (page) {
      case 0:
        if (!formData.destination) invalidFields.destination = "A fishing destination is required.";
        if (!formData.season) invalidFields.season = "A season is required.";
        if (!formData.startDate) invalidFields.startDate = "A start date is required.";
        if (!formData.waterBodyType) invalidFields.waterBodyType = " A water body type is required.";
        if (!formData.state) invalidFields.state = "A state is required.";
        if (!formData.county) invalidFields.county = "A county is required.";
        if (!formData.country) invalidFields.country = "A country is required.";
        if (!formData.species) invalidFields.species = "A fish species is required.";
        break;
      case 1:
        if (tripType === "Past") {
          if (!formData.fliesUsed) invalidFields.fliesUsed = "Please enter flies used.";
          if (!formData.fishCaught) invalidFields.fishCaught = "Please enter fish caught.";
          if (!formData.fishingTackleUsed) invalidFields.fishingTackleUsed = "Please enter fishing tackle used.";
        }
        break;
      case 2:
        if (tripType === "Future") {
          if (!formData.clothingRequirements) invalidFields.clothingRequirements = "Please enter clothing requirements.";
          if (!formData.gearRequirements) invalidFields.gearRequirements = "Please enter fishing requirements.";
          if (!formData.flyRequirements) invalidFields.flyRequirements = "Please enter fly requirements.";
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

  // console.log("Form data: ", formData);
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