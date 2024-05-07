import React, { useState, useEffect } from 'react';
import NewPastTripsForm from './NewPastTripsForm';
import PastTripsList from './PastTripsList';
import PastTripDetails from './PastTripDetails';
import EditPastTripForm from './EditPastTripForm';
import { db, auth } from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

function PastTripsControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainPastTripsList, setMainPastTripsList] = useState([]);
  const [selectedPastTrip, setSelectedPastTrip] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "Past Trips"),
      (collectionSnapshot) => {
        const pastTrips = [];
        collectionSnapshot.forEach((doc) => {
          pastTrips.push({
            location: doc.data().location,
            timeOfYear: doc.data().timeOfYear,
            waterType: doc.data().waterType,
            id: doc.id
          });
        });
        setMainPastTripsList(pastTrips);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

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

  const handleCreatingNewPastTrip = async (newPastTripData) => {
    await addDoc(collection(db, "Past Trips"), newPastTripData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedPastTrip = (id) => {
    const pastTripSelection = mainPastTripsList.filter(pastTrip => pastTrip.id === id)[0];
    setSelectedPastTrip(pastTripSelection);
  }

  const handleDeletingPastTrip = async (id) => {
    await deleteDoc(doc(db, "Past Trips", id));
    setSelectedPastTrip(null);
  }

  const handleEditingPastTrip = async (pastTripToEdit) => {
    const pastTrip = doc(db, "Past Trips", pastTripToEdit.id);
    await updateDoc(pastTrip, pastTripToEdit);
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

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
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
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }

}

export default PastTripsControl;