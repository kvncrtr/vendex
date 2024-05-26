import React, { useState } from "react";
import Input from "../../shared/form/Input";

const Login = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({})

   const handleSubmit= (event) => {
      event.preventDefault();
      
      if (isSubmitting) {
         return;
      };
      
      setIsSubmitting(true);
   };

   const handleOnChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
   };

   return (
      <div className="login--container">
         <div className="login--case">
            <form onSubmit={handleSubmit}>
               <div> 
                  <Input 
                     name={"employeeId"} 
                     label={"Employee Id"}
                     title={"The numeric value that was assigned for identification"}
                     onChange={handleOnChange}
                  />
                  <Input 
                     name={"password"} 
                     label={"Password"}
                     title={"This is the password that was set for security purposes"}
                     onChange={handleOnChange}
                  />
               </div>

               <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Loading..." : "Login"}
               </button>
            </form>
         </div>
      </div>
   );
};

export default Login;

