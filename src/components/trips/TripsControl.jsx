import React, { useState, useEffect } from 'react';
import NewTripsForm from '../forms/NewTripsForm';
import TripsList from './TripsList';
import TripDetails from './TripDetails.jsx';
import EditTripForm from '../forms/EditTripForm';
import { db } from '../../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useLoading } from "../context/LoadingContext";
import { useAuth } from '../context/AuthContext';
import Spinner from '../ui/Spinner';

function TripsControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTripsList, setMainTripsList] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const { isLoading, setIsLoading } = useLoading();
  const { currentUser, auth, isAuthLoading, setIsAuthLoading } = useAuth();

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "Trips"),
      (collectionSnapshot) => {
        setIsAuthLoading(true);
        const trips = [];
        collectionSnapshot.forEach((doc) => {
          if (doc.data().userId === auth.currentUser.uid) {
            trips.push({
              ...doc.data(),
              id: doc.id
            });
          }
        });
        const sortedTripsList = trips.toSorted((a, b) => new Date(b.startDate) - new Date(a.startDate));
        setMainTripsList(sortedTripsList);
        setIsDataFetched(true);
        setIsAuthLoading(false);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  useEffect(() => {
    setIsDeleteModalOpen(false);
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

  const uploadImages = async (file) => {
    setIsLoading(true);
    // API call with appropriate endpoint
    const url = 'https://api.cloudinary.com/v1_1/dn7tkwqfs/image/upload';
    // bad URL for testing error handling
    // const url = 'https://api.cloudinary.com/v1_1/dn7tkwqf/image/upload';
    // create FormData object so that Cloudinary can process the data
    const imagesFormData = new FormData();
    // append file and upload preset
    imagesFormData.append("file", file);
    imagesFormData.append("upload_preset", "uploaded_images");
    // make POST request using the FormData object which contains each 'file' key and file object
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: imagesFormData,
      });
      if (!response.ok) {
        setIsLoading(false);
        const errorMsg = `Error uploading photos: ${response.status}`;
        throw new Error(errorMsg);
      }
      // when response is fetched, create JSON object
      const data = await response.json();
      // modify the secure_url for optimized display
      const urlToOptimize = data.secure_url;
      const optimizedUrl = optimizeUrl(urlToOptimize);
      // return a Promise which results in an optimized secure_url when fulfilled
      return optimizedUrl;
    } catch (error) {
      throw error;
    }
  }

  // adds optimizations to the existing secure_url to modify how the images are displayed once uploaded
  const optimizeUrl = (url) => {
    let optimizations = 'upload/w_auto:800,h_450,c_pad,b_rgb:ffffff,f_auto,q_auto,dpr_auto/';
    let newUrl = url.replace(/\upload\//, optimizations);
    return newUrl;
  }

  const handleCreatingNewTrip = async (newTripData) => {
    setIsLoading(true);
    // creates new array from the formData images array
    const images = [...newTripData.images];
    // var which eventually stores the trip data with proper URLs for Firebase storage
    let tripDataToUpload = null;
    if (images.length === 0) {
      // simply pass the trip data to upload as the incoming newTripData
      tripDataToUpload = newTripData;
    } else {
      // map through images array and create new array of the result of uploadImages, which is a promise
      // need try catch for this to handle thrown Errors with Promise.all
      try {
        const uploadImagesResult = images.map(index => {
          return uploadImages(index.file);
        });
        // take in array of promises and return an array of the promise results
        const imageURLsArray = await Promise.all(uploadImagesResult);
        // newTripData needs to be updated with this array of image URLs
        const updatedTripData = {
          ...newTripData,
          images: imageURLsArray
        }
        // trip data that will be uploaded is set to value of updatedTripData
        tripDataToUpload = updatedTripData;
      } catch (error) {
        toast.error(`Photo uploads failed: ${error.message || error}`, { position: "bottom-right" });
        return;
      }
    }
    // updated trip data with URLs from Cloudinary is passed to addDoc and trip is now stored properly in Firebase
    try {
      await addDoc(collection(db, "Trips"), tripDataToUpload);
      // bad data for error handling testing
      // await addDoc(collection(db), tripDataToUpload);
      toast.success('Trip added.', { position: "bottom-right"});
      setFormVisibleOnPage(false);
    } catch (error) {
      toast.error(`Error adding trip: ${error.message || error}`, { position: "bottom-right"});
    } finally {
      setIsLoading(false);
    }
  }

  const handleChangingSelectedTrip = (id) => {
    const tripSelection = mainTripsList.filter(trip => trip.id === id)[0];
    setSelectedTrip(tripSelection);
  }

  const openDeletionModal = () => {
    setIsDeleteModalOpen(true);
    document.body.style.overflow = 'hidden';
  }

  const closeDeletionModal = () => {
    setIsDeleteModalOpen(false);
    document.body.style.overflow = 'auto';
  }

  const handleDeletingTrip = async (id) => {
    try {
      await deleteDoc(doc(db, "Trips", id));
      // bad data for error handling testing
      // await deleteDoc(doc(db));
      toast.success('Trip deleted.', { position: "bottom-right"});
      setSelectedTrip(null);
    } catch (error) {
      toast.error(`Error deleting trip: ${error.message || error}`, { position: "bottom-right" });
    } finally {
      setIsDeleteModalOpen(false);
      document.body.style.overflow = 'auto';
    }
  }

  const handleEditingTrip = async (tripToEdit) => {
    setIsLoading(true);
    const images = [...tripToEdit.images];
    let editedTrip = null;
    // filter out images that are already URLs
    const initialImageURLs = images.filter(index => typeof index === "string");
    // filter out images that aren't URLs
    const nonURLImages = images.filter(index => typeof index !== "string");
    try {
      // turn File objects into URLs via uploadImages
      const newUploadedImages = nonURLImages.map(index => {
        return uploadImages(index.file);
      });
      // store the URLs returned from Promises into array:
      const newImageURLs = await Promise.all(newUploadedImages);
      // merge the two URL arrays back into one
      const newArrayOfImageURLs = [...initialImageURLs, ...newImageURLs];
      // update the tripToEdit with this new array of URLs
      const finalTripToEdit = {
        ...tripToEdit,
        images: newArrayOfImageURLs,
      }
      editedTrip = finalTripToEdit;
    } catch (error) {
      toast.error(`Error editing photos: ${error.message || error}`, { position: "bottom-right"});
      return;
    }

    try {
      const trip = doc(db, "Trips", tripToEdit.id);
      // bad data for error handling testing
      // const trip = doc(db, tripToEdit.id);
      await updateDoc(trip, editedTrip);
      toast.success('Trip edited.', { position: "bottom-right"});
      setEditing(false);
      setSelectedTrip(null);
    } catch (error) {
      toast.error(`Error editing trip: ${error.message || error}`, { position: "bottom-right"});
    } finally {
      setIsLoading(false);
    }
  }

  const handleMarkingTripAsPast = async (tripToMark) => {
    const trip = doc(db, "Trips", tripToMark);
    await updateDoc(trip, { tripType: "Past" });
    toast.success('Trip marked as "Past".', { position: "bottom-right"});
    setSelectedTrip(null);
  }

  if (!isAuthLoading && currentUser === null) {
    return (
      <React.Fragment>
        <h2 className='auth-message'>Please sign in to your account to start adding trips.</h2>
      </React.Fragment>
    )
  } else if (isAuthLoading && currentUser !== null) {
    return (
      <Spinner/>
    )
  } else if (!isAuthLoading && currentUser !== null) {
    let currentlyVisibleState = null;
    let mainButton = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
      currentlyVisibleState =
        <EditTripForm
          trip={selectedTrip}
          onEditingTrip={handleEditingTrip}
        />
      mainButton =
        <div className={isLoading ? 'disabled-wrapper' : ''}>
          <button
            className='btn control-button'
            onClick={handleClick}
            disabled={isLoading}
          >
            <HomeIcon fontSize='large'/>
          </button>
        </div>
    } else if (selectedTrip != null) {
      currentlyVisibleState =
        <TripDetails
          trip = {selectedTrip}
          onClickingEdit={handleEditClick}
          onClickingDelete={handleDeletingTrip}
          onMarkingTripAsPast={handleMarkingTripAsPast}
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          onOpeningDeleteModal={openDeletionModal}
          onClosingDeleteModal={closeDeletionModal}
        />
      mainButton =
        <button className='btn control-button' onClick={handleClick}>
          <HomeIcon fontSize='large'/>
        </button>;
    } else if (formVisibleOnPage) {
      currentlyVisibleState =
        <NewTripsForm
          onNewTripCreation={handleCreatingNewTrip}
        />
      mainButton =
        <div className={isLoading ? 'disabled-wrapper' : ''}>
          <button
            className='btn control-button'
            onClick={handleClick}
            disabled={isLoading}
          >
            <HomeIcon fontSize='large'/>
          </button>
        </div>
    } else {
      currentlyVisibleState =
        <TripsList
          onTripSelection={handleChangingSelectedTrip}
          tripsList={mainTripsList}
        />
      mainButton =
        <button className='btn control-button' onClick={handleClick}>
          <AddCircleIcon className='control-button-icon'/> Add Trips
        </button>
    }

    return (
      <React.Fragment>
        {isDataFetched ?
          <>
            {error ? null : mainButton}
            <br/>
            <br/>
            {currentlyVisibleState}
          </>
          :
          <Spinner/>
        }
      </React.Fragment>
    );
  }

}

export default TripsControl;