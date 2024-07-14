import { createContext, useState, useEffect } from "react";
import EmployeeAuth from '../services/employee-auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
   const [token, setToken] = useState("");
   const [isValid, setIsValid] = useState(false);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);

   useEffect(() => {
      if (isValid) {
         const isAuth = EmployeeAuth.authenticateToken(token);
         setIsAuthenticated(isAuth);
      };
   }, [isValid]);

   return (
      <AuthContext.Provider value={{
         token,
         setToken,
         isAuthenticated,
         setIsAuthenticated,
         isValid,
         setIsValid,
         isSubmitting,
         setIsSubmitting
      }}>
         {children}
      </AuthContext.Provider>
   );
}

export default AuthContext;