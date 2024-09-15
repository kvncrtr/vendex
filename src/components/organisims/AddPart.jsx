import React, { useState } from "react";
import ReactDOM from "react-dom";
import { XSquare } from "@phosphor-icons/react";
import NewPartForm from "../molecules/NewPartForm";


const AddPart = ({ toggleAddDisplay }) => {
   const [error, setError] = useState();

   const handleErrorData = (errorData) => {
      setError(errorData);
   };

   return ReactDOM.createPortal(
      <div className="add--container">
         <div className={"add--close-case"}>
            <XSquare 
               className={"add--close"}
               size={32} 
               weight={"thin"} 
               onClick={toggleAddDisplay} 
            />
         </div>

         <div className="new--part-container">
         {error && <div className="new--error-case"><p>{error.message}</p></div>}
            <NewPartForm handleDisplay={toggleAddDisplay} errorData={handleErrorData} />
         </div>
      </div>,
      document.querySelector(".add--shell")
   );
}

export default AddPart;