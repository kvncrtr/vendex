import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../molecules/Form";
import { authenticateEmployee } from "../../store/employee";


const Login = () => {
   const dispatch = useDispatch();
   const isValid = useSelector(state => state.auth.isValid);
   const token = useSelector(state => state.auth.token);

   useEffect(() => {
      if (isValid) {
         dispatch(authenticateEmployee(token));
      }
   }, [isValid]);

   return (
      <div className="login--container">
            <Form />
      </div>
   );
};

export default Login;