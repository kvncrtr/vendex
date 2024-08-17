import React from "react";
import TableRow from "../molecules/TableRow";

const Table = ({ data }) => {

   return (
    <div className="parts--table-container">
      <div className="parts--table-row">
        <div className="parts--table-cell">
          <input type="checkbox" />
        </div>

        <div className="parts--table-cell">
          <h4>Category</h4>
        </div>

        <div className="parts--table-cell">
          <h4>Brand</h4>
        </div>

        <div className="parts--table-cell">
          <h4>Name</h4>
        </div>

        <div className="parts--table-cell">
          <h4>Part Number</h4>
        </div>

        <div className="parts--table-cell">
          <h4>UPC</h4>
        </div>

        <div className="parts--table-cell">
          <h4>On Hand</h4>
        </div>

        <div className="parts--table-cell">
          <h4>Description</h4>
        </div>

        <div className="parts--table-cell">
          <h4>Audited At</h4>
        </div>
      </div>

      <div className="parts--table-row" key={"0789439803"}>
        <div className="parts--table-cell">
          <input type="checkbox" />
        </div>

        <div className="parts--table-cell">
          Network Gear
        </div>
        
        <div className="parts--table-cell">
          Samsung 
        </div>

        <div className="parts--table-cell">
        GV-NVR-RAID-12TB
        </div>
        
        <div className="parts--table-cell">
          16000863
        </div>

        <div className="parts--table-cell">
          891GLK8WCH2123-01
        </div>

        <div className="parts--table-cell">
          8
        </div>

        <div className="parts--table-cell">
          The Samsung GV-NVR-RAID-12TB autoIP 2U Rack Mountable Storage Unit (12TB) is used for megapixel video recording and comes with 12 redundant, hot-swappable hard drive bays offering up to 12TB of redundant video storage. SAS and SATA drives can be mixed and matched, allowing you to use the necessary drives to suit your computing environment.
        </div>
      </div>
      
      <div className="parts--table-row parts--table-headers" key={"0789439803"}>
        <div className="parts--table-cell">
          <input type="checkbox" />
        </div>

        <div className="parts--table-cell">
          Network Gear
        </div>
        
        <div className="parts--table-cell">
          Samsung 
        </div>

        <div className="parts--table-cell">
        GV-NVR-RAID-12TB
        </div>
        
        <div className="parts--table-cell">
          16000863
        </div>

        <div className="parts--table-cell">
          891GLK8WCH2123-01
        </div>

        <div className="parts--table-cell">
          8
        </div>

        <div className="parts--table-cell">
          The Samsung GV-NVR-RAID-12TB autoIP 2U Rack Mountable Storage Unit (12TB) is used for megapixel video recording and comes with 12 redundant, hot-swappable hard drive bays offering up to 12TB of redundant video storage. SAS and SATA drives can be mixed and matched, allowing you to use the necessary drives to suit your computing environment.
        </div>
      </div>

      <div className="parts--table-row" key={"0789439803"}>
        <div className="parts--table-cell">
          <input type="checkbox" />
        </div>

        <div className="parts--table-cell">
          Network Gear
        </div>
        
        <div className="parts--table-cell">
          Samsung 
        </div>

        <div className="parts--table-cell">
          GV-NVR-RAID-12TB
        </div>
        
        <div className="parts--table-cell">
          16000863
        </div>

        <div className="parts--table-cell">
          891GLK8WCH2123-01
        </div>

        <div className="parts--table-cell">
          8
        </div>

        <div className="parts--table-cell">
          The Samsung GV-NVR-RAID-12TB autoIP 2U Rack Mountable Storage Unit (12TB) is used for megapixel video recording and comes with 12 redundant, hot-swappable hard drive bays offering up to 12TB of redundant video storage. SAS and SATA drives can be mixed and matched, allowing you to use the necessary drives to suit your computing environment.
        </div>
      </div>
    </div>
   );
};

export default Table;

/*
{
  id: 5,
  created_at: "2024-03-18T13:35:00Z",
  updated_at: "2024-03-18T13:35:00Z",
  audited_at: "2024-04-04T17:45:00Z",
  part_number: 8037104243,
  upc: 159876012345,
  brand: "RackPower",
  name: "PDU Power Whip",
  category: "Power Distribution",
  description: "Power Distribution Unit (PDU) power whip for server racks.",
  price: 199.99,
  on_hand: 40,
  package_quantity: 8,
  reinventory_quantity: 12,
  weight: 1.8,
  reorder_amount: 15,
  order_id: 306,
  delivery_id: 406,
  warehouse_id: 506,
  inventory_id: 606,
  transfer_id: 706,
  rack_id: 806
}

table the description td has text content in it of about 30 words 
but I want to set a height of 78px and let the words determine the width of the column 

<tbody>
  {data.map(part => (
    <tr className={tbodyTrClassName} key={part.part_number}>
      <td>{part.category}</td>
      <td>{part.name}</td>
      <td>{part.part_number}</td>
      <td data-cell="description">{part.description}</td>
    </tr>
  ))}
</tbody>

*/ 