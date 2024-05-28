import React, { useState, useEffect } from 'react';
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
      
      setIsSubmitting(true);
   };

   const handleOnChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
   };

   useEffect(() => {
      if (isSubmitting) {
         onRequest(formData, isSubmitting);
      }
      return;
   }, [formData, isSubmitting]);
   
   return (
       <form  className='form--container' onSubmit={handleSubmit}> 
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