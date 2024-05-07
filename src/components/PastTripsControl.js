import React, { useState } from 'react';
import NewPastTripsForm from './NewPastTripsForm';
import PastTripsList from './PastTripsList';
import PastTripDetails from './PastTripDetails';
import EditPastTripForm from './EditPastTripForm';
import { db, auth } from './../firebase.js';

function PastTripsControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainPastTripsList, setMainPastTripsList] = useState([]);
  const [selectedPastTrip, setSelectedPastTrip] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (selectedPastTrip != null) {
      setFormVisibleOnPage(false);
      setSelectedPastTrip(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleEditClick = () => {
    setEditing(true);
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

  const handleEditingPastTrip = (pastTripToEdit) => {
    const editedMainPastTripList = mainPastTripsList
    .filter(pastTrip => pastTrip.id !== selectedPastTrip.id)
    .concat(pastTripToEdit);
    setMainPastTripsList(editedMainPastTripList);
    setEditing(false);
    setSelectedPastTrip(null);
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h2>You must be signed in to access the fly fishing journal.</h2>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (editing) {
      currentlyVisibleState = <EditPastTripForm
        pastTrip={selectedPastTrip}
        onEditingPastTrip={handleEditingPastTrip}/>
      buttonText = "Return to Past Trips";
    } else if (selectedPastTrip != null) {
      currentlyVisibleState = <PastTripDetails
        pastTrip = {selectedPastTrip}
        onClickingEdit={handleEditClick}
        onClickingDelete={handleDeletingPastTrip}/>
      buttonText = "Return to Past Trips";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewPastTripsForm
        onNewPastTripCreation={handleCreatingNewPastTrip}/>
      buttonText = "Return to Past Trips";
    } else {
      currentlyVisibleState = <PastTripsList
        onPastTripSelection={handleChangingSelectedPastTrip}
        pastTripsList={mainPastTripsList}/>
      buttonText = "Add a Past Trip";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default PastTripsControl;