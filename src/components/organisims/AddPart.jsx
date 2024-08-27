import React from "react";
import ReactDOM from "react-dom";

const AddPart = () => {
   return ReactDOM.createPortal(
      <div className="add--container">
         
      </div>,
      document.querySelector(".add--shell")
   );
}

export default AddPart;