import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripsControl from './trips/TripsControl';
import Account from './Account';
import SignUp from './SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer/>
    </React.Fragment>
    </Router>
  );
}

export default App;
