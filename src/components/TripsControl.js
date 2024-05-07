import React, { useState, useEffect } from 'react';
import NewTripsForm from './NewTripsForm.js';
import TripsList from './TripsList.js';
import TripDetails from './TripDetails.js';
import EditTripForm from './EditTripForm.js';
import { db, auth } from '../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

function TripsControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTripsList, setMainTripsList] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "Past Trips"),
      (collectionSnapshot) => {
        const trips = [];
        collectionSnapshot.forEach((doc) => {
          trips.push({
            location: doc.data().location,
            timeOfYear: doc.data().timeOfYear,
            waterType: doc.data().waterType,
            id: doc.id
          });
        });
        setMainTripsList(trips);
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
    await deleteDoc(doc(db, "PTrips", id));
    setSelectedTrip(null);
  }

  const handleEditingTrip = async (TripToEdit) => {
    const Trip = doc(db, "Past Trips", TripToEdit.id);
    await updateDoc(Trip, TripToEdit);
    setEditing(false);
    setSelectedTrip(null);
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
      currentlyVisibleState = <EditTripForm
        Trip={selectedTrip}
        onEditingTrip={handleEditingTrip}/>
      buttonText = "Return to Past Trips";
    } else if (selectedTrip != null) {
      currentlyVisibleState = <TripDetails
        Trip = {selectedTrip}
        onClickingEdit={handleEditClick}
        onClickingDelete={handleDeletingTrip}/>
      buttonText = "Return to Past Trips";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewTripsForm
        onNewTripCreation={handleCreatingNewTrip}/>
      buttonText = "Return to Past Trips";
    } else {
      currentlyVisibleState = <TripsList
        onTripSelection={handleChangingSelectedTrip}
        TripsList={mainTripsList}/>
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

export default TripsControl;