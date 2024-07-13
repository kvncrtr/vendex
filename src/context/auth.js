import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
   const [token, setToken] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   return (
      <AuthContext.Provider value={{
            auth, 
            setAuth, 
            isSubmitting, 
            setIsSubmitting 
         }
      }>
         { children }
      </AuthContext.Provider>
   );
}

export default AuthContext;