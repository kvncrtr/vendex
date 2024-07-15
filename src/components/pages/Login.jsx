import React, { useEffect } from "react";
import Form from "../molecules/Form";
import useAuth from "../../hooks/useAuth";
import EmployeeAuth from "../../services/employee-auth";

const Login = () => {
   const { token, isValid, setIsAuthenticated } = useAuth();

   useEffect(() => {
      if (token) {
         const authorized = EmployeeAuth.authenticateToken(token);
         setIsAuthenticated(authorized);
      }
   }, [isValid]);

   return (
      <div className="login--container">
            <Form />
      </div>
   );
};

export default Login;