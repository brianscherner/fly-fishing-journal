import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripsControl from '../trips/TripsControl';
import Account from '../auth/Account';
import SignUp from '../auth/SignUp';
import ResetPassword from '../auth/ResetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingProvider } from '../context/LoadingContext';
import { AuthProvider } from '../context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <LoadingProvider>
      <Router>
        <React.Fragment>
        <Header/>
        <br/>
        <Routes>
          <Route path="/trips" element={<TripsControl/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
        </Routes>
        <ToastContainer/>
      </React.Fragment>
      </Router>
    </LoadingProvider>
    </AuthProvider>
  );
}

export default App;
