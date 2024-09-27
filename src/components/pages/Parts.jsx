import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../atoms/Button";
import Table from "../organisims/Table";
import Pagination from "../atoms/Pagination";
import AddPart from "../organisims/AddPart";
import { PlusCircle, PencilLine } from "@phosphor-icons/react";

import { fetchAllParts } from "../../store/parts";

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
  const parts = useSelector(state => state.parts.list)
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch();
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    dispatch(fetchAllParts(token))
  }, [dispatch])

  const toggleAddDisplay = () => { 
    setShowAdd(!showAdd)
  };

  return (
    <div className="parts--container">
      <div className="parts--add-case">
        <h4 className="parts--add-title">Parts</h4>
        
        <Button 
          className={"parts--add-button"}
          text={"Add New Part"}
          icon={<PlusCircle size={18} />} 
          onClick={toggleAddDisplay}
        />
      </div>
      <div className="parts--ops-container">
      <Button 
          className={"parts--ops-button"}
          text={"Edit"}
          icon={<PencilLine size={15} />} 
          onClick={toggleAddDisplay}
          />
      </div>

      <div className="parts--title-case">
        <h4 className={"parts--title"}>Product List</h4>
      </div>

      {parts && <Table data={parts} columns={COLUMNS} />}
      <Pagination />

      {showAdd && <AddPart toggleAddDisplay={toggleAddDisplay} />}
    </div>
  );
};

export default Parts;
// git add .; git commit -m ""; git push origin parts;
// 
// git switch main; git merge parts; git push; git switch parts;