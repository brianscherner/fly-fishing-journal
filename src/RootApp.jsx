import React from 'react';
import App from './components/layout/App';
import { AuthProvider } from './components/context/AuthContext';

function RootApp() {
  return (
    <AuthProvider>
      <App/>
    </AuthProvider>
  );
}

export default RootApp;