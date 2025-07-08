import React, { useState, useEffect } from 'react';
import App from './components/layout/App';
// import WelcomeScreen from './components/ui/WelcomeScreen';
import { AuthProvider } from './components/context/AuthContext';
// import { useAuth } from './components/context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// function RootAppContent() {
//   const [showWelcome, setShowWelcome] = useState(true);
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//   const enterApp = () => setShowWelcome(false);

//   useEffect(() => {
//     if (currentUser) {
//       setShowWelcome(false);
//       navigate('/trips');
//     }
//   }, [currentUser, showWelcome]);

//   if (!currentUser && showWelcome) {
//     return <WelcomeScreen onEnter={enterApp}/>;
//   }

//   console.log("Current user: ", currentUser, "Show welcome: ", showWelcome);
//   return <App />;
// }

function RootApp() {
  return (
    <AuthProvider>
      {/* <RootAppContent/> */}
      <App/>
    </AuthProvider>
  );
}

export default RootApp;