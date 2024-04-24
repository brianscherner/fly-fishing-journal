import React, { useState } from 'react';
import NewFutureTripForm from './NewFutureTripForm';
import FutureTripsList from './FutureTripsList';

function FutureTripsControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainFutureTripsList, setMainFutureTripsList] = useState([]);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  const handleCreatingNewFutureTrip = (newFutureTrip) => {
    const newMainFutureTripsList = mainFutureTripsList.concat(newFutureTrip);
    setMainFutureTripsList(newMainFutureTripsList);
    setFormVisibleOnPage(false);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewFutureTripForm
      onNewFutureTripCreation={handleCreatingNewFutureTrip}/>
    buttonText = "Return to Future Trips";
  } else {
    currentlyVisibleState = <FutureTripsList
      futureTripsList={mainFutureTripsList}/>
    buttonText = "Add a Future Trip";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );

}

export default FutureTripsControl;