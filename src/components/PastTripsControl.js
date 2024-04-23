import React, { useState } from 'react';
import NewPastTripsForm from './NewPastTripsForm';
import PastTripsList from './PastTripsList';

function PastTripsControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainPastTripsList, setMainPastTripsList] = useState([]);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  const handleCreatingNewPastTrip = (newPastTrip) => {
    const newMainPastTripList = mainPastTripsList.concat(newPastTrip);
    setMainPastTripsList(newMainPastTripList);
    setFormVisibleOnPage(false);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewPastTripsForm
      onNewPastTripCreation={handleCreatingNewPastTrip}/>
    buttonText = "Return to Past Trips";
  } else {
    currentlyVisibleState = <PastTripsList
      pastTripsList={mainPastTripsList}/>
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