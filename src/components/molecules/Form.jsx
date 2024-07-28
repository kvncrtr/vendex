import React, { useRef, useState, useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import WideLogo from "../../assets/mim-logo-wide.png";
import SquareLogo from "../../assets/mim-logo.png";

import Input from "../atoms/Input";
import Button from "../atoms/Button";

import { apiRequested, validateCredentials, clearAuth } from '../../store/employee';

const Form = () => {
   const dispatch = useDispatch();
   const errorMessage = useSelector(state => state.auth.errorMessage); 
   const isLoading = useSelector(state => state.auth.isLoading);
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

   const [employeeId, setEmployeeId] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const idRef = useRef();
   const errorRef = useRef();
   const hasMounted = useRef(true);
   
   const handleSubmit = async (event) => {
      dispatch(apiRequested());
      event.preventDefault();
      const loginData = {
         employee_id: employeeId,
         password: password
      };
      dispatch(validateCredentials(loginData));      
   };

   useEffect(() => {
      if (!isLoading && !hasMounted.current) {
         setError(errorMessage);
      } else {
         hasMounted.current = false;
      }
   }, [errorMessage]);

   useEffect(() => {
      setEmployeeId("");
      setPassword("");
   }, [isAuthenticated])
   
   useEffect(() => { idRef.current.focus()}, []);
   useEffect(() => { setError("")}, [employeeId, password]);
   
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
               type={"number"}
               name={"employeeId"} 
               placeholder={"Employee Id"}
               labelClass={"input--label-employee-id"}
               title={"The numeric value that was assigned for identification"}
               onChange={(event) => setEmployeeId(parseInt(event.target.value))}
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
               text={!isLoading ? "Login" : "Loading..."}
               setting={isLoading}
            />

            <Link className="form--trouble">having trouble?</Link>
         </div>
      </form>
   );
};

export default Form;