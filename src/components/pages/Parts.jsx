import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../atoms/Button";
import Table from "../organisims/Table";
import Pagination from "../atoms/Pagination";
import AddPart from "../organisims/AddPart";
import { PlusCircle } from "@phosphor-icons/react";

import { fetchAllParts } from "../../store/parts";

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
  const parts = useSelector(state => state.parts.list)
  const token = useSelector(state => state.auth.token)
  const [showAdd, setShowAdd] = useState(false);
  const [showOps, setShowOps] = useState(false);
  const [selected, setSelected] = useState([]);
  const hasMounted = useRef(true);

  useEffect(() => {
    dispatch(fetchAllParts(token))
  }, [dispatch])

  const toggleAddDisplay = () => { setShowAdd(!showAdd) };
  
  const toggleOpsDisplay = (event) => { 
    const partNumber = event.target.attributes["data-part-number"].value; 
    toggleSelection(partNumber);
    highlightItems(partNumber);
  };

  const toggleSelection = (partNumber) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(partNumber)) {
        return prevSelected.filter((num) => num !== partNumber);
      } else {
        return [...prevSelected, partNumber];
      }
    });
  };

  const highlightItems = (partNumber) => {
    const parentNode = document.getElementById("tbody--parent");
    const children = parentNode.children;
    
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const childPartNumber = child.getAttribute("data-part-number");
      
      if (childPartNumber === partNumber) {
        if (child.classList.contains('parts--selected')) {
          child.classList.remove('parts--selected');
        } else {
          child.classList.add('parts--selected');
        }
      }
    }
  };

  const chooseOpsDisplay = (list) => {
    if (list.length === 0 && !showOps) {
      setShowOps(true);
    } else if (list.length > 0) {
      setShowOps(true);
    } else if (list.length === 0 && showOps) {
      setShowOps(false);
    };
  }
  
  useEffect(() => {
    if (!hasMounted.current) {
      chooseOpsDisplay(selected);
      console.log(selected);
    } else {
      hasMounted.current = false;
    }
 }, [selected]);
  
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
          onClick={toggleAddDisplay}
          />
      </div>}

      <div className="parts--title-case">
        <h4 className={"parts--title"}>Product List</h4>
      </div>

      {parts && 
        <Table 
          data={parts} 
          columns={columns} 
          toggleOpsDisplay={toggleOpsDisplay} 
        />
      }
      <Pagination />

      {showAdd && <AddPart toggleAddDisplay={toggleAddDisplay} />}
    </div>
  );
};

export default Parts;
// git add .; git commit -m ""; git push origin parts;
// git switch main; git merge parts; git push; git switch parts;