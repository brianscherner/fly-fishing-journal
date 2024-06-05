import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripsControl from './trips/TripsControl';
import Account from './Account';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/trips" element={<TripsControl/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </React.Fragment>
    </Router>
  );
}

export default App;
