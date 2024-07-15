import { createContext, useState, useEffect } from "react";
import EmployeeAuth from '../services/employee-auth';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
   const [token, setToken] = useState("");
   const [isValid, setIsValid] = useState(false);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);

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