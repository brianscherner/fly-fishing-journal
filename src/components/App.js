import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PastTripsControl from './PastTripsControl';

function App() {
  return (
    <Router>
      <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/past-trips" element={<PastTripsControl/>}/>
      </Routes>
    </React.Fragment>
    </Router>
  );
}

export default App;
