import React, { useState, useEffect } from "react";
import Form from "../molecules/Form";

const Login = () => {
   const [formStatus, setFormStatus] = useState(false);
   
   const handleRequest = (formData, isSubmitting) => {
      setFormStatus(isSubmitting); 
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