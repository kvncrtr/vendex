import React, { useRef, useState, useEffect } from "react";
import Form from "../molecules/Form";

const Login = () => {
   const handleRequest = (formData, isSubmitting) => {
      
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