import React, { useState, useEffect } from 'react';
import NewTripsForm from '../forms/NewTripsForm.js';
import TripsList from './TripsList.js';
import TripDetails from './TripDetails.js';
import EditTripForm from '../forms/EditTripForm.js';
import { db, auth } from '../../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

function TripsControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTripsList, setMainTripsList] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "Trips"),
      (collectionSnapshot) => {
        const trips = [];
        collectionSnapshot.forEach((doc) => {
          trips.push({
            ...doc.data(),
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
    if (selectedTrip != null) {
      setFormVisibleOnPage(false);
      setSelectedTrip(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleCreatingNewTrip = async (newTripData) => {
    await addDoc(collection(db, "Trips"), newTripData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedTrip = (id) => {
    const tripSelection = mainTripsList.filter(trip => trip.id === id)[0];
    setSelectedTrip(tripSelection);
  }

  const handleDeletingTrip = async (id) => {
    await deleteDoc(doc(db, "Trips", id));
    setSelectedTrip(null);
  }

  const handleEditingTrip = async (tripToEdit) => {
    const trip = doc(db, "Trips", tripToEdit.id);
    await updateDoc(trip, tripToEdit);
    setEditing(false);
    setSelectedTrip(null);
  }

  const handleMarkingTripAsPast = async (tripToMark) => {
    const trip = doc(db, "Trips", tripToMark);
    console.log(trip);
    await updateDoc(trip, { tripType: "Past" });
    setSelectedTrip(null);
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h2 className='auth-message'>Sign in to your account to access the application.</h2>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
      currentlyVisibleState = <EditTripForm
        trip={selectedTrip}
        onEditingTrip={handleEditingTrip}/>
      buttonText = "Return to Trips List";
    } else if (selectedTrip != null) {
      currentlyVisibleState = <TripDetails
        trip = {selectedTrip}
        onClickingEdit={handleEditClick}
        onClickingDelete={handleDeletingTrip}
        onMarkingTripAsPast={handleMarkingTripAsPast}/>
      buttonText = "Return to Trips List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewTripsForm
        onNewTripCreation={handleCreatingNewTrip}/>
      buttonText = "Return to Trips List";
    } else {
      currentlyVisibleState = <TripsList
        onTripSelection={handleChangingSelectedTrip}
        tripsList={mainTripsList}/>
      buttonText = "Add a Trip";
    }

    return (
      <React.Fragment>
        {error ? null : <button className='btn control-button' onClick={handleClick}>{buttonText}</button>}
        <br/>
        <br/>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default TripsControl;