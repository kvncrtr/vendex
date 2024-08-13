import React from "react";

const Table = ({ data, className, theadClassName, theadRowClassName, tbodyTrClassName }) => {
   return (
    <table className={className} tabindex="0">
      <thead className={theadClassName}>
        <tr className={theadRowClassName}>
          {/* <th><input type="checkbox" /></th> */}
          <th>Category</th>
          <th>Name</th>
          <th>Part Number</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        {data.map(part => (
          <tr className={tbodyTrClassName} key={part.part_number}>
            <td>{part.category}</td>
            <td>{part.name}</td>
            <td>{part.part_number}</td>
            <td>{part.description}</td>
          </tr>
        ))}
      </tbody>

    </table>
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

*/ 