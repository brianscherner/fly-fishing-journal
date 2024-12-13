import React, { useState, useEffect } from 'react';
import NewTripsForm from '../forms/NewTripsForm.js';
import TripsList from './TripsList.js';
import TripDetails from './TripDetails.js';
import EditTripForm from '../forms/EditTripForm.js';
import { db, auth, storage } from '../../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';
import { toast } from 'react-toastify';
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
        console.log("Trips: ", trips);
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

  const uploadImages = (image) => {
    const storageRef = ref(storage, `trip-images/${image.file.name + v4()}`);
    // upload each image
    uploadBytes(storageRef, image);
    // is adding file name plus randomized string from v4()
    console.log("Storage ref: ", storageRef.fullPath);
    // returns full file path
    return storageRef.fullPath;
  }

  // Errors:

  // this fn is being called with invalid data
  // field value not supported - doesn't accept a custom file object
  // CORS error
  // "max retry time for operation exceeded, please try again?"

  const handleCreatingNewTrip = async (newTripData) => {
    // creates new array from the formData images array
    const images = [...newTripData.images];
    // empty array for the new file paths
    const uploadedImages = [];
    // log this message if array is empty
    if (images.length === 0) {
      console.log("No images to upload");
    // otherwise, map through the array, and call uploadImages, passing in each array index as argument
    } else {
      images.map(index => {
        // push each full file path into empty array
        uploadedImages.push(uploadImages(index));
      });
    }
    // array now has each full file path
    console.log("Uploaded imgs: ", uploadedImages);

    // now need to getDownloadUrl() method to access each file later
    // saves each URL as a string in database w/ other form data

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