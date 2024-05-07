import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripsControl from './TripsControl';
import SignIn from './SignIn';

function App() {
  return (
    <Router>
      <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/trips" element={<TripsControl/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
    </React.Fragment>
    </Router>
  );
}

export default App;
