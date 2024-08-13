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

      <div className="parts--title-case">
        <h4 className={"parts--title"}>Product List</h4>
      </div>
      
      <div className="parts--table-container">
        <Table 
          data={data}
          className={"parts--table-case"} 
          theadClassName={"parts--thead"}
          theadRowClassName={"parts--thead-row"}
        />
      </div>
    </div>
  );
};

export default Parts
// git add .; git commit -m ""; git push origin parts
// git switch main; git merge parts; git push; git switch parts