import React, { useState, useEffect } from 'react';
import NewTripsForm from '../forms/NewTripsForm.js';
import TripsList from './TripsList.js';
import TripDetails from './TripDetails.js';
import EditTripForm from '../forms/EditTripForm.js';
import { db, auth } from '../../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
          if (doc.data().userId === auth.currentUser.uid) {
            trips.push({
              ...doc.data(),
              id: doc.id
            });
          }
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

  // Firebase doesn't support custom file objects, so it currently can't add a trip if there are photos in the form

  const handleCreatingNewTrip = async (newTripData) => {
    await addDoc(collection(db, "Trips"), newTripData);
    toast.success('Trip added.', { position: "bottom-right"});
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedTrip = (id) => {
    const tripSelection = mainTripsList.filter(trip => trip.id === id)[0];
    setSelectedTrip(tripSelection);
  }

  const handleDeletingTrip = async (id) => {
    await deleteDoc(doc(db, "Trips", id));
    toast.success('Trip deleted.', { position: "bottom-right"});
    setSelectedTrip(null);
  }

  const handleEditingTrip = async (tripToEdit) => {
    const trip = doc(db, "Trips", tripToEdit.id);
    await updateDoc(trip, tripToEdit);
    toast.success('Trip edited.', { position: "bottom-right"});
    setEditing(false);
    setSelectedTrip(null);
  }

  const handleMarkingTripAsPast = async (tripToMark) => {
    const trip = doc(db, "Trips", tripToMark);
    await updateDoc(trip, { tripType: "Past" });
    toast.success('Trip marked as "Past".', { position: "bottom-right"});
    setSelectedTrip(null);
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h2 className='auth-message'>Please sign in to your account to start adding trips.</h2>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {
    let currentlyVisibleState = null;
    let mainButton = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
      currentlyVisibleState = <EditTripForm
        trip={selectedTrip}
        onEditingTrip={handleEditingTrip}/>
      mainButton =
        <button className='btn control-button' onClick={handleClick}>
          <HomeIcon/>
        </button>;
    } else if (selectedTrip != null) {
      currentlyVisibleState = <TripDetails
        trip = {selectedTrip}
        onClickingEdit={handleEditClick}
        onClickingDelete={handleDeletingTrip}
        onMarkingTripAsPast={handleMarkingTripAsPast}/>
      mainButton =
        <button className='btn control-button' onClick={handleClick}>
          <HomeIcon/>
        </button>;
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewTripsForm
        onNewTripCreation={handleCreatingNewTrip}/>
      mainButton =
        <button className='btn control-button' onClick={handleClick}>
          <HomeIcon/>
        </button>;
    } else {
      currentlyVisibleState = <TripsList
        onTripSelection={handleChangingSelectedTrip}
        tripsList={mainTripsList}/>
      mainButton =
        <button className='btn control-button' onClick={handleClick}>
          Add Trips <AddCircleIcon/>
        </button>
    }

    return (
      <React.Fragment>
        {error ? null : mainButton}
        <br/>
        <br/>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default TripsControl;