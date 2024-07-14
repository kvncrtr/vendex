import React, { useState, useEffect } from "react";
import Form from "../molecules/Form";

import useAuth from "../../hooks/useAuth";

const Login = () => {
   const { isValid, isAuthenticated, isSubmitting } = useAuth();
   
   useEffect(() => {
      if(isAuthenticated && isValid && isSubmitting === false) {
         
      };
   }, [isAuthenticated, isValid]);

   return (
      <div className="login--container">
            <Form />
      </div>
   );
};

export default Login;