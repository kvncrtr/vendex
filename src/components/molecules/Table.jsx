import React from "react";

const Table = ({data, className, headingCaseClassName, headingClassName}) => {
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
      <thead className={headingCaseClassName}>
        <tr>
          <th className={headingClassName}>Category</th>
          <th className={headingClassName}>Brand</th>
          <th className={headingClassName}>Name</th>
          <th className={headingClassName}>Part Number</th>
          <th className={headingClassName}>UPC</th>
          <th className={headingClassName}>Price</th>
          <th className={headingClassName}>Description</th>
          <th className={headingClassName}>On Hand</th>
          <th className={headingClassName}>Weight</th>
          <th className={headingClassName}>Audited At</th>
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