import React, { useState, useEffect } from 'react';
import NewTripsForm from '../forms/NewTripsForm.js';
import TripsList from './TripsList.js';
import TripDetails from './TripDetails.js';
import EditTripForm from '../forms/EditTripForm.js';
import { db, auth } from '../../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  // two problems exist:
  // 1. toasts do not disappear or get dismissed for adding/editing a trip.
  // 2. toasts don't show up for deleting a trip, or marking it as 'past'.

  const handleCreatingNewTrip = async (newTripData) => {
    toast.success('Trip successfully added.', { position: "bottom-right"});
    await addDoc(collection(db, "Trips"), newTripData);
    // toast.success('Trip successfully added.', { position: "bottom-right"});
    setFormVisibleOnPage(false);
    // toast.success('Trip successfully added.', { position: "bottom-right"});
  }

  const handleChangingSelectedTrip = (id) => {
    const tripSelection = mainTripsList.filter(trip => trip.id === id)[0];
    setSelectedTrip(tripSelection);
  }

  const handleDeletingTrip = async (id) => {
    // toast.success('Trip successfully deleted.', { position: "bottom-right"});
    await deleteDoc(doc(db, "Trips", id));
    // toast.success('Trip successfully deleted.', { position: "bottom-right"});
    setSelectedTrip(null);
    toast.success('Trip successfully deleted.', { position: "bottom-right"});
  }

  // toast doesn't disappear when a trip is edited
  const handleEditingTrip = async (tripToEdit) => {
    toast.success('Trip successfully edited.', { position: "bottom-right"});
    const trip = doc(db, "Trips", tripToEdit.id);
    // toast.success('Trip successfully edited.', { position: "bottom-right"});
    await updateDoc(trip, tripToEdit);
    // toast.success('Trip successfully edited.', { position: "bottom-right"});
    setEditing(false);
    setSelectedTrip(null);
    // toast.success('Trip successfully edited.', { position: "bottom-right"});
  }

  const handleMarkingTripAsPast = async (tripToMark) => {
    toast.success('Trip successfully edited.', { position: "bottom-right"});
    const trip = doc(db, "Trips", tripToMark);
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
        <ToastContainer/>
      </React.Fragment>
    );
  }

}

export default TripsControl;