import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../atoms/Button";
import Table from "../organisims/Table";
import Pagination from "../atoms/Pagination";
import AddPart from "../organisims/AddPart";
import UpdatePart from "../organisims/UpdatePart";
import { PlusCircle } from "@phosphor-icons/react";

import { getAllParts, getPartById, backToInit, deletePartById } from "../../store/parts";

const columns = [
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
  const dispatch = useDispatch();
  const parts = useSelector(state => state.parts.list);
  const token = useSelector(state => state.auth.token);
  const message = useSelector(state => state.parts.message);
  const [checked, setChecked] = useState(0);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showOps, setShowOps] = useState(false);

  const toggleAddDisplay = () => { setShowAdd(!showAdd) };
  const toggleUpdateDisplay = () => { setShowUpdate(!showUpdate) };
  const toggleOpsDisplay = () => { setShowOps(!showOps) };
  
  const highlightPart = (id) => {
    const tbody = document.getElementById("tbody--parent");
    const children = tbody.childNodes;
    
    for (const child of children) {
      const parseId = parseInt(child.attributes["data-id"].value);
      if (id === parseId && !checked) {
        child.classList.add("parts--selected");
      } else if (id === parseId && checked === id) {
        child.classList.remove("parts--selected");
      } else if (id === parseId && checked !== id) {
        child.classList.add("parts--selected");
      } else if (id !== parseId && checked > 0) {
        child.classList.remove("parts--selected");
        child.firstChild.firstChild.checked = false;
      }
    }
  };
  
  const unhighlightParts = () => {
    const tbody = document.getElementById("tbody--parent");
    const children = tbody.childNodes;
    for (const child of children) { 
      child.classList.remove("parts--selected");
      child.firstChild.firstChild.checked = false;
    }
  };
  
  const handleCheckbox = (id) => {
    if (checked === 0 && id > 0) {
      toggleOpsDisplay();
      highlightPart(id); 
      setChecked(id);
    } else if (checked > 0 && id === checked) {
      toggleOpsDisplay();
      highlightPart(id);
      setChecked(0);
    } else if (checked > 0 && id !== checked) {
      setShowOps(true);
      highlightPart(id);
      setChecked(id);
    }
  };

  const reset = (type) => {
    unhighlightParts();
    dispatch(backToInit());
    setChecked(0);
    setShowOps(false);
    if (type === "update") {
      toggleUpdateDisplay();
    } else {
      setShowUpdate(false);
    }
  };

  const serveList = () => {    
    dispatch(getPartById(token, checked));
    reset("update");
  }
  
  const deletePart = () => {
    dispatch(deletePartById({ "token": token, "id": checked }));
    reset();
  };
  
  useEffect(() => {
    dispatch(getAllParts(token))
  }, [message]);
  
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
      
      {showOps && <div className="parts--ops-container">
        <Button 
          className={"parts--ops-button"}
          text={"Edit"}
          onClick={serveList}
        />

        <Button 
          className={"parts--ops-button"}
          text={"Delete"}
          onClick={deletePart}
        />
      </div>}

      <div className="parts--title-case">
        <h4 className={"parts--title"}>Product List</h4>
      </div>

      {parts && 
        <Table 
          data={parts} 
          columns={columns} 
          handleCheckbox={handleCheckbox}
        />
      }
      <Pagination />

      {showAdd && <AddPart toggleAddDisplay={toggleAddDisplay} />}
      {showUpdate && <UpdatePart reset={reset} toggleUpdateDisplay={toggleUpdateDisplay}/>}
    </div>
  );
};

export default Parts;
// git add .; git commit -m ""; git push origin parts;
// git switch main; git merge parts; git push; git switch parts; 