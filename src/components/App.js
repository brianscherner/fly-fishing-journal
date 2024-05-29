import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripsControl from './trips/TripsControl';
import Account from './Account';

function App() {
  return (
    <Router>
      <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/trips" element={<TripsControl/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </React.Fragment>
    </Router>
  );
}

export default App;
