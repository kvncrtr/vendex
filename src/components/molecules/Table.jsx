import React from "react";

const Table = ({data}) => {
  const renderedRows = data.map((part) => (
      <tr key={part.name}>
        <td>{part.category}</td>
        <td>{part.brand}</td>
        <td>{part.name}</td>
        <td>{part.part_number}</td>
        <td>{part.upc}</td>
        <td>{part.price}</td>
        <td>{part.description}</td>
        <td>{part.on_hand}</td>
        <td>{part.weight}</td>
        <td>{part.audited_at}</td>
      </tr>
    )) 
  return (
    <table className={className}>
      <thead>
        <tr>
          <th>Category</th>
          <th>Brand</th>
          <th>Name</th>
          <th>Part Number</th>
          <th>UPC</th>
          <th>Price</th>
          <th>Description</th>
          <th>On Hand</th>
          <th>Weight</th>
          <th>Audited At</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
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