import React, { useState } from "react";
import Form from "../molecules/Form";

const Login = () => {
   const handleRequest = (formData, isSubmitting) => {
      console.log(formData, isSubmitting)
   };

   return (
      <div className="login--container">
            <Form 
               onRequest={handleRequest}
            />
      </div>
   );
};

export default Login;