import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [userSignedUp, setUserSignedUp] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  // console.log("User signed IN: ", userSignedIn);
  // console.log("User signed UP: ", userSignedUp);
  // console.log("Is auth loading: ", isAuthLoading);
  return (
    <AuthContext.Provider value={{
        userSignedIn,
        setUserSignedIn,
        userSignedUp,
        setUserSignedUp,
        isAuthLoading,
        setIsAuthLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);