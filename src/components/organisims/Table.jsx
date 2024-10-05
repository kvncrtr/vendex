import React from "react";

const Table = ({ data, columns, handleCheckbox }) => {
   return (
    <div className="parts--table-container">
      <table>
        <thead className="parts--thead">
          <tr className="parts--thead-row">
            <th data-cell="checkbox" className="parts--thead-column">
              <input type="checkbox" />
            </th>
            {columns.map(column => (
              <th 
                data-cell={`${column.field}`}
                key={`column ${column.field}`} 
                className="parts--thead-column"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody id={"tbody--parent"} className="parts--tbody">
          {data.map(part => (
            <tr
              key={`partNumber:${part.part_number}`}
              data-id={`${part.id}`}
              className={`parts--tbody-row ${part.part_number}`}
              data-part-number={`${part.part_number}`}
              >
              <td className="parts--tbody-cell" data-cell={"checkbox"}>
                <input 
                  type="checkbox" 
                  data-part-number={`${part.part_number}`}
                  onClick={() => handleCheckbox(part.id)}
                />
              </td>
              <td className="parts--tbody-cell" data-cell={`${part.part_number}`}>{part.audited_at}</td>
              <td className="parts--tbody-cell" data-cell={`${part.part_number}`}>{part.part_number}</td>
              <td className="parts--tbody-cell" data-cell={`${part.part_number}`}>{part.upc}</td>
              <td className="parts--tbody-cell" data-cell={`${part.part_number}`}>{part.brand}</td>
              <td className="parts--tbody-cell" data-cell={`${part.part_number}`}>{part.name}</td>
              <td className="parts--tbody-cell" data-cell={`${part.part_number}`}>{part.category}</td>
              <td className="parts--tbody-cell" data-cell={"description"}>{part.description}</td>
              <td className="parts--tbody-cell" data-cell={`${part.part_number}`}>{part.on_hand}</td>
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


how to change the width of the columns to be a minimun width of 9rem and have it stretch to a max of 325px?

<div className="parts--table-container">
      <table>
        <thead className="parts--thead">
          <tr className="parts--thead-row">
            <th className="parts--thead-column">
              <input type="checkbox" />
            </th>
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
              <td><input type="checkbox" /></td>
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

.parts--table-container {
      width: 100%;
      margin-top: 0.588rem;
   }

   table {
      border-collapse: collapse;
   }

   .parts--thead-row {
      height: 3.765rem;
      background-color: $achromatic-200;
   }

   .parts--thead-column {
      text-wrap: nowrap;
      text-align: left;
   }

*/ 