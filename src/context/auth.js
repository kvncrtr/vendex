import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);


   return (
      <AuthContext.Provider value={{ auth, setAuth }}>
         { children }
      </AuthContext.Provider>
   );
}

export default AuthContext;