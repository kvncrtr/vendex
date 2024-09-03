import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const NewPartForm = ({ handleDisplay }) => {
   const handleSubmit = (event) => {
      event.preventDefault();
      // handleDisplay();
   };

   return (
      <div className={"new--part-case"}>
         <div className="new--part-title">
            <h2>New Part</h2>
         </div>
         
         <form className="new--form-body">
            {/* 
               {
                  id: 1,
                  created_at: "2024-02-20T09:15:00Z",
                  updated_at: "2024-02-20T09:15:00Z",
                  audited_at: "2024-03-01T08:50:00Z",
                  part_number: 1234567890,
                  upc: 987654321098,
                  brand: "Acme Corp",
                  name: "UltraWidget 3000",
                  category: "Electronics",
                  description: "The UltraWidget 3000 is a state-of-the-art gadget designed for efficiency and performance. Ideal for tech enthusiasts and professionals.",
                  price: 199.99,
                  on_hand: 10048,
                  package_quantity: 5,
                  reinventory_quantity: 100,
                  weight: 1.2,
                  reorder_amount: 50,
                  order_id: 102,
                  delivery_id: 202,
                  warehouse_id: 302,
                  inventory_id: 402,
                  transfer_id: 502,
                  rack_id: 602
               }
            */}
            <div className="new--form-field">
               <p>Part Number</p>
               <Input />
            </div>

            <div className="new--form-field">
               <p>UPC</p>
               <Input />
            </div>

            <div className="new--form-field">
               <p>Brand</p>
               <Input />
            </div>

            <div className="new--form-field">
               <p>Name</p>
               <Input />
            </div>

            <div className="new--form-field">
               <p>Category</p>
               <Input />
            </div>

            <div className="new--form-field">
               <p>Description</p>
               <textarea />
            </div>

            <div className="new--form-field">
               <p>Price</p>
               <Input />
            </div>

            <div className="new--form-field">
               <p>On Hand</p>
               <Input />
            </div>

            <div className="new--form-field">
               <p>Package Quantity</p>
               <Input />
            </div>

            <div className="new--form-field">
               <p>Reinventory Quantity</p>
               <Input />
            </div>

            <div className="new--form-field">
               <p>Weight</p>
               <Input />
            </div>

            <div className="new--form-field">
               <p>Reorder Amount</p>
               <Input />
            </div>
            
            <Button 
               type={"submit"}
               text={"Create"}
               title={"Add a part to inventory."}
               className={"new--part-button"}
               onClick={handleSubmit}
            />
         </form>

         <div className="new--form-button">
            
         </div>
      </div>
   )
};

export default NewPartForm;
