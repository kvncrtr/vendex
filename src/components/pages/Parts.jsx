import React from "react";
import Button from "../atoms/Button";
import Table from "../organisims/Table";
import { PlusCircle } from "@phosphor-icons/react";
import PartsData from "../../services/parts";

const COLUMNS = [
  {
    title: "Last Audit",
    field: "audited_at"
  },
  {
    title: "Part Number",
    field: "part_number"
  },
  {
    title: "UPC",
    field: "upc"
  },
  {
    title: "Brand",
    field: "brand"
  },
  {
    title: "Name",
    field: "name"
  },
  {
    title: "Category",
    field: "category"
  },
  {
    title: "Description",
    field: "description"
  },
  {
    title: "On Hand",
    field: "on_hand"
  }
];

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
      
        <Table data={data} columns={COLUMNS} />
    </div>
  );
};

export default Parts;
// git add .; git commit -m ""; git push origin parts
// git switch main; git merge parts; git push; git switch parts