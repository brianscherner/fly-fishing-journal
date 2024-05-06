import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PastTripsControl from './PastTripsControl';
import FutureTripsControl from './FutureTripsControl';

function TripsControl() {
  const [mainPastTripsList, setMainPastTripsList] = useState([]);
  const [mainFutureTripsList, setMainFutureTripsList] = useState([]);

  const handleCreatingNewPastTripsList = (newPastTrip) => {
    setMainPastTripsList([...mainPastTripsList, newPastTrip]);
  };

  const handleCreatingNewFutureTripsList = (newFutureTrip) => {
    setMainFutureTripsList([...mainFutureTripsList, newFutureTrip]);
  };

  return (
    <Routes>
      <Route
        path="/past-trips"
        element={<PastTripsControl pastTripsList={mainPastTripsList} onNewPastTripCreation={handleCreatingNewPastTripsList}/>}
      />
      <Route
        path="/future-trips"
        element={<FutureTripsControl futureTripsList={mainFutureTripsList} onNewFutureTripCreation={handleCreatingNewFutureTripsList} />}
      />
    </Routes>
  );
}

export default TripsControl;


// import React, { useState } from "react";
// import PastTripsControl from "./PastTripsControl";

// function TripsControl() {
//   const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
//   const [mainPastTripsList, setMainPastTripsList] = useState([]);
//   const [selectedPastTrip, setSelectedPastTrip] = useState(null);
//   const [editing, setEditing] = useState(false);

//   return (
//     <PastTripsControl
//       formVisibleOnPage={formVisibleOnPage}
//       setFormVisibleOnPage={setFormVisibleOnPage}
//       mainPastTripsList={mainPastTripsList}
//       setMainPastTripsList={setMainPastTripsList}
//       selectedPastTrip={selectedPastTrip}
//       setSelectedPastTrip={setSelectedPastTrip}
//       editing={editing}
//       setEditing={setEditing}/>
//   )
// }

// export default TripsControl;