import React, { useRef, useState, useEffect,  } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import WideLogo from "../../assets/mim-logo-wide.png";
import SquareLogo from "../../assets/mim-logo.png";

import Input from "../atoms/Input";
import Button from "../atoms/Button";

import { gatherEmployeeInfo, loadEmployees } from '../../store/employee';

const Form = () => {
   const [employeeId, setEmployeeId] = useState("");
   const [employees, setEmployees] = useState([]);
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const dispatch = useDispatch();

   const idRef = useRef();
   const errorRef = useRef();
   
   const handleSubmit = async (event) => {
      event.preventDefault();
      dispatch(gatherEmployeeInfo({employee_id: employeeId, password: password}));
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
               text={"Loign"}
               setting={false}
               // text={!isSubmitting ? "Login" : "Loading..."}
               // setting={isSubmitting}
            />

            <Link className="form--trouble">having trouble?</Link>
         </div>
      </form>
   );
};

export default Form;