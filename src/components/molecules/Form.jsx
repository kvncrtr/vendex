import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import WideLogo from "../../assets/mim-logo-wide.png";
import SquareLogo from "../../assets/mim-logo.png";

import Input from "../atoms/Input";
import Button from "../atoms/Button";

import useAuth from '../../hooks/useAuth';

const Form = () => {
   const { setAuth, isSubmitting, setIsSubmitting } = useAuth();

   const [employeeId, setEmployeeId] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const idRef = useRef();
   const errorRef = useRef();
   
   const handleSubmit = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      setError("");

      const body = {
         "employee_id": employeeId,
         "password": password
      };
      
      // fetch all employee information 
      try {
         const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
         });

         if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed. Please check your credentials.');
         }

         const data = await response.json();
         setAuth(data);
      } catch(error) {
         setError(error.message);
      } finally {
         setIsSubmitting(false);
      };
   };

   useEffect(() => {
      idRef.current.focus();
   }, []);

   useEffect(() => {
      setError("");
   }, [employeeId, password]);
   
   return (
      <form className='form--container' onSubmit={handleSubmit}> 
         <div className="form--img-case">
            <img className="form--wide-logo" src={WideLogo} />
            <img className="form--square-logo" src={SquareLogo} />
         </div>
         
         <div className="form--input-case">
            <h1 className="form--heading">Welcome!</h1>

             
         {error && <p className="form--error" ref={errorRef}>{error}</p>}

            <Input 
               className={"input--employee-id"}
               name={"employeeId"} 
               placeholder={"Employee Id"}
               labelClass={"input--label-employee-id"}
               title={"The numeric value that was assigned for identification"}
               onChange={(event) => setEmployeeId(event.target.value)}
               value={employeeId}
               ref={idRef}
               error={error}
               required
            />

            <Input 
               className={"input--password"}
               type={"password"}
               name={"password"} 
               placeholder={"Password"}
               labelClass={"input--label-password"}
               title={"A secure set of characters"}
               onChange={(event) => setPassword(event.target.value)}
               value={password}
               error={null}
               required
            /> 

            <Button 
               className={"button--login"}
               type={"submit"}
               title={"log into vendex"}
               text={!isSubmitting ? "Login" : "Loading..."}
               setting={isSubmitting}
            />

            <Link className="form--trouble">having trouble?</Link>
         </div>
      </form>
   );
};

export default Form;