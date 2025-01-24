import React, { useState, useEffect } from 'react';
import NewTripsForm from '../forms/NewTripsForm.js';
import TripsList from './TripsList.js';
import TripDetails from './TripDetails.js';
import EditTripForm from '../forms/EditTripForm.js';
import { db, auth } from '../../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function TripsControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTripsList, setMainTripsList] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  // add error handling to this fn
  const uploadImages = async (file) => {
    // API call with appropriate endpoint
    const url = 'https://api.cloudinary.com/v1_1/dn7tkwqfs/image/upload';
    // create FormData object so that Cloudinary can process the data
    const imagesFormData = new FormData();
    // append file and upload preset
    imagesFormData.append("file", file);
    imagesFormData.append("upload_preset", "uploaded_images");
    // make POST request using the FormData object which contains each 'file' key and file object
    const response = await fetch(url, {
      method: 'POST',
      body: imagesFormData,
    })
    // when response is fetched, create JSON object
    const data = await response.json();
    // modify the secure_url for optimized display
    const urlToOptimize = data.secure_url;
    const optimizedUrl = optimizeUrl(urlToOptimize);
    // return a Promise which results in an optimized secure_url when fulfilled
    return optimizedUrl;
  }

  // adds optimizations to the existing secure_url to modify how the images are displayed once uploaded
  // images are still being displayed w/ inconsistent sizes
  const optimizeUrl = (url) => {
    let optimizations = 'upload/w_auto:800,h_450,c_pad,b_rgb:ffffff,f_auto,q_auto,dpr_auto/';
    let newUrl = url.replace(/\upload\//, optimizations);
    return newUrl;
  }

  const handleCreatingNewTrip = async (newTripData) => {
    // creates new array from the formData images array
    const images = [...newTripData.images];
    // var which eventually stores the trip data with proper URLs for Firebase storage
    let tripDataToUpload = null;
    // log this message if array is empty
    if (images.length === 0) {
      // simply pass the trip data to upload as the incoming newTripData
      tripDataToUpload = newTripData;
    } else {
      // map through images array and create new array of the result of uploadImages, which is a promise
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
    }

    // updated trip data with URLs from Cloudinary is passed to addDoc and trip is now stored properly in Firebase
    await addDoc(collection(db, "Trips"), tripDataToUpload);
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

  const openDeletionModal = () => {
    console.log("Activated!");
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  const handleEditingTrip = async (tripToEdit) => {
    const images = [...tripToEdit.images];
    // filter out images that are already URLs
    const initialImageURLs = images.filter(index => typeof index === "string");
    // filter out images that aren't URLs
    const nonURLImages = images.filter(index => typeof index !== "string");
    // turn File objects into URLs via uploadImages
    const newUploadedImages = nonURLImages.map(index => {
      return uploadImages(index.file);
    })
    // store the URLs returned from Promises into array:
    const newImageURLs = await Promise.all(newUploadedImages);
    // merge the two URL arrays back into one
    const newArrayOfImageURLs = [...initialImageURLs, ...newImageURLs];
    // update the tripToEdit with this new array of URLs
    const finalTripToEdit = {
      ...tripToEdit,
      images: newArrayOfImageURLs,
    }
    const trip = doc(db, "Trips", tripToEdit.id);
    await updateDoc(trip, finalTripToEdit);
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

  console.log("delete modal state: ", isDeleteModalOpen);

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
      currentlyVisibleState =
        <EditTripForm
          trip={selectedTrip}
          onEditingTrip={handleEditingTrip}
        />
      mainButton =
        <button className='btn control-button' onClick={handleClick}>
          <HomeIcon fontSize='large'/>
        </button>;
    } else if (selectedTrip != null) {
      currentlyVisibleState =
        <TripDetails
          trip = {selectedTrip}
          onClickingEdit={handleEditClick}
          onClickingDelete={handleDeletingTrip}
          onMarkingTripAsPast={handleMarkingTripAsPast}
          onOpeningDeleteModal={openDeletionModal}
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
        <button className='btn control-button' onClick={handleClick}>
          <HomeIcon fontSize='large'/>
        </button>;
    } else {
      currentlyVisibleState =
        <TripsList
          onTripSelection={handleChangingSelectedTrip}
          tripsList={mainTripsList}
        />
      mainButton =
        <button className='btn control-button' onClick={handleClick}>
          <AddCircleIcon fontSize='large'/> Add Trips
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