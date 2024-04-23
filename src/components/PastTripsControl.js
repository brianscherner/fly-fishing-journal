import React, { useState } from 'react';
import NewPastTripsForm from './NewPastTripsForm';
import PastTripsList from './PastTripsList';
import PastTripDetails from './PastTripDetails';

function PastTripsControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainPastTripsList, setMainPastTripsList] = useState([]);
  const [selectedPastTrip, setSelectedPastTrip] = useState(null);

  const handleClick = () => {
    if (selectedPastTrip != null) {
      setFormVisibleOnPage(false);
      setSelectedPastTrip(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleCreatingNewPastTrip = (newPastTrip) => {
    const newMainPastTripList = mainPastTripsList.concat(newPastTrip);
    setMainPastTripsList(newMainPastTripList);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedPastTrip = (id) => {
    const pastTripSelection = mainPastTripsList.filter(pastTrip => pastTrip.id === id)[0];
    setSelectedPastTrip(pastTripSelection);
  }

  const handleDeletingPastTrip = (id) => {
    const newMainPastTripList = mainPastTripsList.filter(pastTrip => pastTrip.id !== id);
    setMainPastTripsList(newMainPastTripList);
    setSelectedPastTrip(null);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (selectedPastTrip != null) {
    currentlyVisibleState = <PastTripDetails
      pastTrip = {selectedPastTrip}
      onClickingDelete = {handleDeletingPastTrip}/>
    buttonText = "Return to Past Trips";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewPastTripsForm
      onNewPastTripCreation={handleCreatingNewPastTrip}/>
    buttonText = "Return to Past Trips";
  } else {
    currentlyVisibleState = <PastTripsList
      onPastTripSelection={handleChangingSelectedPastTrip}
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