import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PastTripsControl from './PastTripsControl';
import FutureTripsControl from './FutureTripsControl';
import SignIn from './SignIn';

function App() {
  return (
    <Router>
      <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/past-trips" element={<PastTripsControl/>}/>
        <Route path="/future-trips" element={<FutureTripsControl/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
    </React.Fragment>
    </Router>
  );
}

export default App;
