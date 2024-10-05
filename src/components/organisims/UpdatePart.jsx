import React, { useState } from "react";
import UpdatePartForm from "../molecules/UpdatePartForm";
import ReactDOM from "react-dom";
import { XSquare } from "@phosphor-icons/react";
import { useSelector } from "react-redux";

const UpdatePart = ({ toggleUpdateDisplay, reset }) => {
   const [error, setError] = useState(null);

   const handleClose = () => {
      reset();
   };

   const handleErrorData = (errorData) => {
      setError(errorData);
   };

   return ReactDOM.createPortal(
      <div className="update--container">
         <div className="update--close-case">
            <XSquare 
               className={"update--close-button"}
               weight={"thin"} 
               size={32} 
               onClick={handleClose} 
            />
         </div>

         <div className="update--part-container">
            {error && <div className="new--error-case"><p>{error.message}</p></div>}
            <UpdatePartForm 
               errorData={handleErrorData} 
               toggleUpdateDisplay={toggleUpdateDisplay} 
            />
         </div>
      </div>,
   document.querySelector(".update--shell"));
}; 

export default UpdatePart;