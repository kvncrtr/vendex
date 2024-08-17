import React from "react";

const Table = ({ data, columns }) => {

   return (
    <div className="parts--table-container">
      <table>
        <thead className="parts--thead">
          <tr className="parts--thead-row">
            {columns.map(column => (
              <th 
                key={`column ${column.field}`} 
                className="parts--thead-column"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="parts--tbody">
          {data.map(part => (
            <tr
              key={`partNumber:${part.part_number}`}
              className={`parts--tbody-row`}
            >
              <td data-cell={`${part.part_number}`}>{part.audited_at}</td>
              <td data-cell={`${part.part_number}`}>{part.part_number}</td>
              <td data-cell={`${part.part_number}`}>{part.upc}</td>
              <td data-cell={`${part.part_number}`}>{part.brand}</td>
              <td data-cell={`${part.part_number}`}>{part.name}</td>
              <td data-cell={`${part.part_number}`}>{part.category}</td>
              <td data-cell={`${part.part_number}`}>{part.description}</td>
              <td data-cell={`${part.part_number}`}>{part.on_hand}</td>
            </tr>
          ))}
        </tbody>
      </table>
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