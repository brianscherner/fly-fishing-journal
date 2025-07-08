import React from 'react';
import Header from './Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import TripsControl from '../trips/TripsControl';
import Account from '../auth/Account';
import SignUp from '../auth/SignUp';
import ResetPassword from '../auth/ResetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingProvider } from '../context/LoadingContext';
import { useAuth } from '../context/AuthContext';
import WelcomeScreen from '../ui/WelcomeScreen';

function App() {
  const { currentUser } = useAuth();

  return (
    <LoadingProvider>
      <React.Fragment>
      <Header/>
      <br/>
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? <Navigate to="/trips" replace/> : <WelcomeScreen />
          }
        />
        <Route path="/trips" element={<TripsControl/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route
          path="/sign-up"
          element={
            currentUser ? <Navigate to="/trips" replace /> : <SignUp />
          }
        />
        {/* <Route path="/sign-up" element={<SignUp/>}/> */}
        <Route path="/reset-password" element={<ResetPassword/>}/>
      </Routes>
      <ToastContainer/>
    </React.Fragment>
    </LoadingProvider>
  );
}

export default App;
