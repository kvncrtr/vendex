import React from "react";
import Button from "../atoms/Button";
import Table from "../molecules/Table";
import { PlusCircle } from "@phosphor-icons/react";
import PartsData from "../../services/parts";

const Parts = () => {
  const data = PartsData.info;
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

      <Table className={"part--table-case"} data={data} />
    </div>
  );
};

export default Parts
