import React, { useState } from "react";
import Button from "../atoms/Button";
import Table from "../organisims/Table";
import { PlusCircle } from "@phosphor-icons/react";
import PartsData from "../../services/parts";
import Pagination from "../atoms/Pagination";
import AddPart from "../organisims/AddPart";

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
  const [showAdd, setShowAdd] = useState(false);

  const handleAddDisplay = () => { 
    setShowAdd(!showAdd)
    console.log(showAdd)
  };

  return (
    <div className="parts--container">
      <div className="parts--add-case">
        <h4 className="parts--add-title">Parts</h4>
        
        <Button 
          className={"parts--add-button"}
          text={"Add New Part"}
          icon={<PlusCircle size={18} />} 
          onClick={handleAddDisplay}
        />
      </div>

      <div className="parts--title-case">
        <h4 className={"parts--title"}>Product List</h4>
      </div>
      
        <Table data={data} columns={COLUMNS} />
        <Pagination />

        {showAdd && <AddPart />}
    </div>
  );
};

export default Parts;
// git add .; git commit -m ""; git push origin parts
// git switch main; git merge parts; git push; git switch parts