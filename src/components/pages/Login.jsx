import React, { useRef, useState, useEffect } from "react";
import Form from "../molecules/Form";

import useAuth from "../../hooks/useAuth";

const Login = () => {
   const { auth } = useAuth();

   useEffect(() => {
      console.log(auth)
   }, [auth])


   return (
      <div className="login--container">
            <Form />
      </div>
   );
};

export default Login;