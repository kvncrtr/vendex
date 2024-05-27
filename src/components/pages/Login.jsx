import React, { useState } from "react";
import Form from "../molecules/Form";

const Login = () => {
   // const [isSubmitting, setIsSubmitting] = useState(false);

   // const handleSubmit= (event) => {
   //    event.preventDefault();
      
   //    if (isSubmitting) {
   //       return;
   //    };
      
   //    setIsSubmitting(true);
   // };

   

   return (
      <div className="login--container">
         {/* <div className="login--case">
            <form onSubmit={handleSubmit}>
               <Form />

               <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Loading..." : "Login"}
               </button>
            </form>
         </div> */}
      </div>
   );
};

export default Login;