import React from 'react';
import Header from './Header';
import PastTripsControl from './PastTripsControl';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header/>
        <Routes>
          <Route path="/" element={<PastTripsControl/>}/>
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
