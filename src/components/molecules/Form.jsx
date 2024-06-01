import React, { useState, useEffect } from 'react';
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Logo from "../../assets/mim-logo-wide.png";
import { Link } from 'react-router-dom';


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
       <form className='form--container' onSubmit={handleSubmit}> 
         <img className="form--logo" src={Logo} />

         <h1 className="form--heading">Welcome!</h1>

         <Input 
            className={"input--employee-id"}
            name={"employeeId"} 
            placeholder={"Employee Id"}
            labelClass={"input--label-employee-id"}
            title={"The numeric value that was assigned for identification"}
            onChange={handleOnChange}
            />
         <Input 
            className={"input--password"}
            type={"password"}
            name={"password"} 
            placeholder={"Password"}
            labelClass={"input--label-password"}
            title={"A secure set of characters"}
            onChange={handleOnChange}
         /> 

         <Button 
            className={"button--login"}
            type={"submit"}
            title={"log into vendex"}
            text={isSubmitting ? "Loading..." : "Login"}
            disabled={isSubmitting}
         />

         <Link className="form--trouble">having trouble?</Link>
       </form>
   );
};

export default Form;