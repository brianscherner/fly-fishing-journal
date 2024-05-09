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
      collection(db, "Trips"),
      (collectionSnapshot) => {
        const trips = [];
        collectionSnapshot.forEach((doc) => {
          trips.push({
            destination: doc.data().destination,
            destinationType: doc.data().destinationType,
            country: doc.data().country,
            licenses: doc.data().licenses,
            season: doc.data().season,
            species: doc.data().species,
            timeOfDay: doc.data().timeOfDay,
            tripType: doc.data().tripType,
            waterType: doc.data().waterType,
            waterBodyType: doc.data().waterBodyType,
            waterFees: doc.data().waterFees,
            state: doc.data().state,
            county: doc.data().county,
            access: doc.data().access,
            fishingMethod: doc.data().fishingMethod,
            fliesUsed: doc.data().fliesUsed,
            fishCaught: doc.data().fishCaught,
            fishingTackleUsed: doc.data().fishingTackleUsed,
            riverFlowLevels: doc.data().riverFlowLevels,
            travelTime: doc.data().travelTime,
            climate: doc.data().climate,
            guidedOrNot: doc.data().guidedOrNot,
            travelCosts: doc.data().travelCosts,
            travelDocs: doc.data().travelDocs,
            tripExpenses: doc.data().tripExpenses,
            depositTerms: doc.data().depositTerms,
            cancellationPolicy: doc.data().cancellationPolicy,
            clothingRequirements: doc.data().clothingRequirements,
            gearRequirements: doc.data().gearRequirements,
            flyRequirements: doc.data().flyRequirements,
            baggageLuggage: doc.data().baggageLuggage,
            tripInsurance: doc.data().tripInsurance,
            evacInsurance: doc.data().evacInsurance,
            communications: doc.data().communications,
            gratuity: doc.data().gratuity,
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
        trip={selectedTrip}
        onEditingTrip={handleEditingTrip}/>
      buttonText = "Return to Trips List";
    } else if (selectedTrip != null) {
      currentlyVisibleState = <TripDetails
        trip = {selectedTrip}
        onClickingEdit={handleEditClick}
        onClickingDelete={handleDeletingTrip}/>
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
        {currentlyVisibleState}
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }

}

export default TripsControl;