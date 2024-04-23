import React from 'react';
import Header from './Header';
import TripsControl from './TripsControl';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header/>
        <TripsControl/>
      </React.Fragment>
    </Router>
  );
}

export default App;
