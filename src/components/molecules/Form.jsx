import React, { useState } from 'react';
import Input from "../atoms/Input";
import Button from "../atoms/Button";


const Form = ({ onRequest }) => {
   const [formData, setFormData] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleSubmit= (event) => {
      event.preventDefault();
      
      if (isSubmitting) {
         return;
      };
      
   };

   const handleRequest = (event, formData, submitStatus) => {
      console.log(submitStatus);
   };
   
   const handleOnChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
   };

   return (
       <form onSubmit={handleSubmit}> 
          <Input 
             name={"employeeId"} 
             label={"Employee Id"}
             title={"The numeric value that was assigned for identification"}
             onChange={handleOnChange}
          />
          <Input 
            type={"password"}
             name={"password"} 
             label={"Password"}
             title={"A secure set of characters"}
             onChange={handleOnChange}
          /> 

         <Button 
            type={"submit"}
            title={"log int vendex"}
            text={isSubmitting ? "Loading..." : "Login"}
            disabled={isSubmitting}
         />
       </form>
   );
};

export default Form;