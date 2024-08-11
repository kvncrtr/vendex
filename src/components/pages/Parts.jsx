import React from "react";
import Button from "../atoms/Button";
import { PlusCircle } from "@phosphor-icons/react";

const Parts = () => {
  return (
    <div className="parts--container">
      <div className="parts--add-case">
        <h4 className="parts--add-title">Parts</h4>
        
        <Button 
          className={"parts--add-button"}
          text={"Add New Part"}
          icon={<PlusCircle size={18} />} 
        />
      </div>
    </div>
  )
}

export default Parts
