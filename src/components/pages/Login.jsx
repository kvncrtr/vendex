import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Form from "../molecules/Form";

import { authenticateEmployee, validateToken } from "../../store/employee";
import LocalStorageService from "../../services/local-storage";


const Login = () => {
   const dispatch = useDispatch();
   const isValid = useSelector(state => state.auth.isValid);
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
   const token = useSelector(state => state.auth.token);
   
   const navigate = useNavigate();
   const storedToken = LocalStorageService.getItem("token");

   useEffect(() => {
      if (storedToken) { dispatch(validateToken(storedToken)) };
   }, [])

   useEffect(() => {
      if (isValid) { dispatch(authenticateEmployee(token)) }
   }, [isValid]);

   useEffect(() => {
      if (isAuthenticated) {
         navigate("/");
      };
   }, [isAuthenticated])

   return (
      <div className="login--container">
            <Form />
      </div>
   );
};

export default Login;