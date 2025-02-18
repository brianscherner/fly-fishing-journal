import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripsControl from '../trips/TripsControl';
import Account from '../auth/Account';
import SignUp from '../auth/SignUp';
import ResetPassword from '../auth/ResetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingProvider } from '../context/LoadingContext';

function App() {
  return (
    <LoadingProvider>
      <Router>
        <React.Fragment>
        <Header/>
        <Routes>
          <Route path="/trips" element={<TripsControl/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
        </Routes>
        <ToastContainer/>
        {/* <Footer/> */}
      </React.Fragment>
      </Router>
    </LoadingProvider>
  );
}

export default App;
