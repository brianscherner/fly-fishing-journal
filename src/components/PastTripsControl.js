import React, { useState } from 'react';
import NewPastTripsForm from './NewPastTripsForm';
import PastTripsList from './PastTripsList';

function PastTripsControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainPastTripsList, setMainPastTripsList] = useState([]);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewPastTripsForm/>
    buttonText = "Return to Past Trips";
  } else {
    currentlyVisibleState = <PastTripsList/>
    buttonText = "Add a Trip";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );

}

export default PastTripsControl;