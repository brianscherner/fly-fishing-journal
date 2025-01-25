import React, { useState } from "react";
import PropTypes from "prop-types";
import ReusableTripForm from "./ReusableTripForm";
import { auth } from "../../firebase.js";

function NewTripsForm(props) {
  // mock images for testing
  const mockImages = [
    {
      file: "test-image1.jpg",
      preview: "https://via.placeholder.com/150",
    },
    {
      file: "test-image2.jpg",
      preview: "https://via.placeholder.com/150",
    },
    {
      file: "test-image3.jpg",
      preview: "https://via.placeholder.com/150",
    },
    {
      file: "test-image4.jpg",
      preview: "https://via.placeholder.com/150",
    },
    {
      file: "test-image5.jpg",
      preview: "https://via.placeholder.com/150",
    },
    {
      file: "test-image6.jpg",
      preview: "https://via.placeholder.com/150",
    }
  ];

  const [formData, setFormData] = useState({
    // mock data for past trip testing
    destination: "test",
    fishCaught: "x",
    fishingTackleUsed: "x",
    fliesUsed: "x",
    season: "Winter",
    species: "x",
    startDate: "2025-01-22",
    state: "x",
    county: 'x',
    country: "x",
    tripType: "Past",
    waterBodyType: "River",
    // images: mockImages

    // mock data for future trip testing
    // clothingRequirements: "xxx",
    // country: "xxx",
    // county: "xxx",
    // destination: "testfuture",
    // flyRequirements: "xxx",
    // gearRequirements: "xxx",
    // season: "Summer",
    // species: "xxx",
    // startDate: "2025-01-23",
    // state: "xxx",
    // tripType: "Future",
    // waterBodyType: "River",
    // images: mockImages

    images: []
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleNewTripFormSubmission(event) {
    event.preventDefault();
    formData.userId = auth.currentUser.uid;
    props.onNewTripCreation(formData);
    setIsLoading(!isLoading);
  }

  return (
    <React.Fragment>
      <ReusableTripForm
        formData={formData}
        setFormData={setFormData}
        formSubmissionHandler={handleNewTripFormSubmission}
        isLoading={isLoading}
        buttonText={"Add Trip"}/>
    </React.Fragment>
  )
}

NewTripsForm.propTypes = {
  onNewTripCreation: PropTypes.func,
}

export default NewTripsForm;